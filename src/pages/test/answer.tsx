// /* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import { api, setToken } from "~/utils/api";

const Answer: NextPage = () => {
  const refreshToken = api.user.refreshToken.useMutation({
    onSuccess: (payload) => {
      if (!payload) return;
      const { accessToken, username } = payload;
      setToken(accessToken);

      console.log(payload);
    },
  });

  const handleRefresh = () => {
    refreshToken.mutate();
    console.log("refreshed");
  };

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

  const updateAnswer = api.exam.setAnswer.useMutation({
    onSuccess: () => {
      console.log("success");
    },
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
  });

  const toggleFlag = api.exam.toggleFlagQuestion.useMutation({
    onSuccess: () => {
      console.log("success");
    },
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
  });

  const submitExam = api.exam.submitExam.useMutation({
    onSuccess: () => {
      console.log("success");
    },
  });

  const handleGetQuestion = () => {
    question
      .refetch()
      .then((question) => {
        console.log(question.data);
      })
      .catch((err) => console.log(err));
  };

  const clearAnswer = api.exam.clearAnswer.useMutation({
    onSuccess: () => {
      console.log("success");
    },
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
  });

  return (
    <>
      <button onClick={handleRefresh}>RefreshToken</button>
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
      <br />
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          const input = (e.target as HTMLFormElement).optionId.value;
          updateAnswer.mutate({
            examQuestionId: "640e1015c226f18fe4fe4724",
            examType: "WARM_UP",
            index: 0,
            optionId: input as string,
          });
        }}
      >
        <input className="outline-double" type="text" name="optionId" />
        <button type="submit">submit</button>
      </form>
      <br />
      <button
        onClick={() => {
          clearAnswer.mutate({
            examQuestionId: "640e1015c226f18fe4fe4724",
            examType: "WARM_UP",
            index: 0,
          });
        }}
      >
        clear answer
      </button>
      <br />
      <button
        onClick={() => {
          toggleFlag.mutate({
            examQuestionId: "640e1015c226f18fe4fe4724",
            examType: "WARM_UP",
            index: 0,
          });
        }}
      >
        flag question
      </button>
      <br />
      <button
        onClick={() => {
          submitExam.mutate({
            examType: "WARM_UP",
          });
        }}
      >
        submit exam
      </button>
    </>
  );
};

export default Answer;
