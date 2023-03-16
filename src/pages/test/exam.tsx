// /* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import { api, setToken } from "~/utils/api";

const addUser: NextPage = () => {
  const refreshToken = api.user.refreshToken.useMutation({
    onSuccess: (accessToken) => {
      if (!accessToken) return;
      setToken(accessToken);
    },
  });

  const handleRefresh = () => {
    refreshToken.mutate();
    console.log("refreshed");
  };

  // const addQuestion = api.question.inputQuestion.useMutation({
  //   onSuccess: () => {
  //     console.log("success");
  //   },
  // });

  // get all question
  const questions = api.question.getAll.useQuery(undefined, {
    onError: (error) => {
      if (error.message === "UNAUTHORIZED") {
        refreshToken
          .mutateAsync()
          .then(() => {
            void questions.refetch();
          })
          .catch(() => {
            console.log("error");
          });
      }
    },
    enabled: false,
  });

  // get warm up question by index (private)
  const question = api.exam.getExamQuestion.useQuery(
    { index: 0, examType: "WARM_UP" },
    {
      onError: (error) => {
        if (error.message === "UNAUTHORIZED") {
          refreshToken
            .mutateAsync()
            .then(() => {
              void question.refetch();
            })
            .catch(() => {
              console.log("error");
            });
        }
      },
      retry: 0,
      enabled: false,
    }
  );

  const questionsStatus = api.exam.getExamQuestionStatus.useQuery(
    { examType: "WARM_UP" },
    {
      onError: (error) => {
        if (error.message === "UNAUTHORIZED") {
          refreshToken
            .mutateAsync()
            .then(() => {
              void question.refetch();
            })
            .catch(() => {
              console.log("error");
            });
        }
      },
      retry: 0,
      enabled: false,
    }
  );

  const handleGet = () => {
    questions
      .refetch()
      .then((questions) => {
        console.log(questions.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGetQuestion = () => {
    question
      .refetch()
      .then((question) => {
        console.log(question.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={handleRefresh}>RefreshToken</button>
      {/* <button onClick={() => addQuestion.mutate()}>add question</button> */}
      <br />
      {/* <button onClick={handleGetQuestion}>get questions</button> */}
      <button
        onClick={() => {
          console.log(questions.data);
        }}
      >
        get questions
      </button>
      <br />
      <button onClick={handleGet}>get once questions</button>
      <br />
      <button onClick={handleGetQuestion}>get question</button>
      <br />
      <button
        onClick={() => {
          questionsStatus
            .refetch()
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        get all question status
      </button>
    </>
  );
};

export default addUser;
