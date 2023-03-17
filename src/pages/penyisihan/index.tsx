import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { IoMenuOutline, IoChevronDown, IoChevronUp } from "react-icons/io5";

const penyisihanMechanism = [
  "Tahap penyisihan dilakukan secara daring pada tanggal 16 April 2023 melalui platform yang akan dikirimkan tautannya melalui email yang digunakan untuk pendaftaran.",
  "Bentuk penyisihan adalah soal pilihan ganda berjumlah 40 butir soal. Cara menjawab adalah dengan memilih 1 jawaban di antara pilihan jawaban lain yang sudah disediakan. Tiap anggota dalam 1 tim hanya bisa mengerjakan menggunakan 1 device yang sama.",
  "Tiap anggota dalam 1 tim harus berada di tempat yang sama.",
  "Pengerjaan soal hanya bisa mengerjakan menggunakan 1 device yang sama.",
  "Mekanisme pengerjaan dan waktu pengerjaan masing-masing soal akan dijelaskan lebih detail saat pelaksanaan perlombaan.",
  "Total waktu penyisihan adalah 120 menit.",
];

const ketentuanLolos = [
  "Tim tersebut termasuk dalam 10 tim yang memperoleh skor tertinggi pada babak penyisihan.",
  "Sudah melakukan konfirmasi akan hadir pada babak final. Adapun mekanisme konfirmasi dapat dilakukan dengan menandatangani surat komitmen yang didapatkan dengan menunggu pesan konfirmasi dari Panitia.",
  "Mengisi tautan konfirmasi kehadiran, selambat-lambatnya 3 × 24 jam setelah mendapat pesan konfirmasi dari panitia.",
];

const ketentuanDiskualifikasi = [
  "Peserta bukan siswa/i SMA/sederajat di Indonesia.",
  "Peserta terdaftar dalam lebih dari 1 tim.",
  "Peserta dalam 1 tim tidak berasal dari institusi yang sama.",
  "Tim tidak melengkapi syarat administrasi hingga batas waktu yang telah ditentukan.",
  "Tim terindikasi melakukan kecurangan, baik bekerja sama dengan pihak di luar tim maupun memberikan jawaban terhadap tim lain.",
  "Tim terlambat melakukan konfirmasi kehadiran pada tahap final.",
  "Tim dengan sengaja melakukan sabotase atau perusakan pada sistem penjurian.",
];

export default function PenyisihanPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full flex-col items-center">
        <nav className=" flex w-full justify-center bg-[#E6EAED]">
          <div className="flex h-[8vh] w-[85%] items-center justify-between lg:h-16 lg:w-3/4">
            <Link href="/">
              <div className="flex items-center space-x-4">
                <svg
                  className="w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#223144" />
                  <path
                    d="M13.074 17.2561H13.6304L15.2031 19.2401L14.7031 19.6664L13.074 17.2561Z"
                    fill="#B72C2C"
                  />
                  <path
                    d="M13.6304 17.2561L14.8967 17.3206L16.3402 19.5061L15.2031 19.2401L13.6304 17.2561Z"
                    fill="#AA1B1B"
                  />
                  <path
                    d="M14.703 19.6664L15.8886 19.8609L16.3402 19.506L15.203 19.24L14.703 19.6664Z"
                    fill="#D84545"
                  />
                  <path
                    d="M12.2943 17.1996L13.0739 17.256H13.6303L14.8966 17.3205L15.4987 17.3448L16.3402 16.2748L13.8643 15.85L13.3858 15.4629L12.2943 17.1996Z"
                    fill="#CC3737"
                  />
                  <path
                    d="M12.2944 17.1996L10.9717 15.5973L11.8643 14.6941L13.3859 15.4629L12.2944 17.1996Z"
                    fill="#E65251"
                  />
                  <path
                    d="M16.3403 16.2748L14.3174 15.1134L11.8644 14.6941L13.3859 15.4629L13.8644 15.8501L16.3403 16.2748Z"
                    fill="#D84545"
                  />
                  <path
                    d="M16.3402 16.275L17.2891 16.5007L17.3753 13.1564L16.3402 12.7048L14.3173 15.1136L16.3402 16.275Z"
                    fill="#E76A72"
                  />
                  <path
                    d="M17.2891 16.5005C17.2891 16.5005 19.0634 15.167 19.1817 15.0702C19.3001 14.9735 19.8485 14.1778 19.8485 14.1778L17.3753 13.1562L17.2893 16.5005H17.2891Z"
                    fill="#AA1B1B"
                  />
                  <path
                    d="M17.2891 16.5006L19.0313 15.6618L19.1817 15.0706L17.2891 16.5006Z"
                    fill="#D84545"
                  />
                  <path
                    d="M6.55762 13.0867L7.50922 15.0706L7.12207 15.7855L8.54157 16.4039L8.65441 14.3286L6.55762 13.0867Z"
                    fill="#E76A72"
                  />
                  <path
                    d="M7.1221 15.7855L6.55765 15.463L6.38013 14.7452L6.55765 13.0867L7.50926 15.0706L7.1221 15.7855Z"
                    fill="#E65251"
                  />
                  <path
                    d="M7.71619 16.0444L7.99302 16.9417C7.99302 16.9417 9.54142 17.5224 9.52536 17.474C9.50931 17.4256 9.20266 16.2749 9.20266 16.2749L8.54142 16.4041L7.71619 16.0447V16.0444Z"
                    fill="#CC3737"
                  />
                  <path
                    d="M8.54163 16.4039L9.20287 16.275L10.3804 15.947L10.9717 14.2156L8.65447 14.3286L8.54163 16.4039Z"
                    fill="#E65251"
                  />
                  <path
                    d="M10.3804 15.9469L10.9719 15.5974L11.8643 14.6942L13.3859 13.3286L15.8464 12.4091C15.8464 12.4091 14.4774 12.2639 14.429 12.2639C14.3806 12.2639 10.9719 14.2155 10.9719 14.2155L10.3804 15.9467V15.9469Z"
                    fill="#CC3737"
                  />
                  <path
                    d="M9.20288 16.2749L10.3804 15.947L10.9717 15.5974L12.0192 16.8662L9.52536 17.4738L9.20288 16.2749Z"
                    fill="#AA1B1B"
                  />
                  <path
                    d="M6.38009 14.7451L4.58972 13.8983L7.7161 10.0811L8.24569 11.3391L7.12734 12.5434L6.55762 13.0866L6.38009 14.7451Z"
                    fill="#CC3737"
                  />
                  <path
                    d="M7.7161 10.0811L5.48491 10.4251L4.9122 11.9815L4.58972 13.8983L7.7161 10.0811Z"
                    fill="#E65251"
                  />
                  <path
                    d="M6.55762 13.0866L8.54157 11.5112L9.2028 11.2639H9.82643L8.97689 12.1027L8.65441 14.3286L6.55762 13.0866Z"
                    fill="#EF848F"
                  />
                  <path
                    d="M6.55762 13.0866L8.54157 11.5111L9.2028 11.2639H9.82643L10.6652 10.4895L12.0191 9.54321H11.5576L10.0737 10.6723L8.24569 11.3391L6.55762 13.0866Z"
                    fill="#AA1B1B"
                  />
                  <path
                    d="M9.82644 11.2639L10.6652 10.4895L12.0191 9.54321L11.7299 10.6187L10.9716 12.0811L8.65442 14.3285L8.9769 12.1026L9.82644 11.2639Z"
                    fill="#E04C4C"
                  />
                  <path
                    d="M10.9716 12.0811L11.8159 11.8123L10.9716 14.2155L8.65442 14.3285L10.9716 12.0811Z"
                    fill="#E76A72"
                  />
                  <path
                    d="M11.8159 11.8123L15.2031 9.59717L14.4288 12.2639L10.9717 14.2155L11.8159 11.8123Z"
                    fill="#E04C4C"
                  />
                  <path
                    d="M15.8463 12.4092L16.3403 12.7048L14.3174 15.1135L11.8644 14.6943L13.3859 13.3287L15.8463 12.4092Z"
                    fill="#B72C2C"
                  />
                  <path
                    d="M19.8484 14.178L19.6764 11.9065L16.9773 11.2317L14.6496 11.5037L14.4287 12.264L15.8461 12.4092L16.3402 12.7049L17.3753 13.1565L19.8484 14.178Z"
                    fill="#CC3737"
                  />
                  <path
                    d="M19.6765 11.9062L20.1281 12.4684L19.8485 14.1778L19.6765 11.9062Z"
                    fill="#AA1B1B"
                  />
                  <path
                    d="M20.1281 12.4686L19.4937 9.17773L18.913 9.29608L19.6765 11.9064L20.1281 12.4686Z"
                    fill="#E65251"
                  />
                  <path
                    d="M18.913 9.29614L16.9774 11.2317L19.6765 11.9065L18.913 9.29614Z"
                    fill="#E76A72"
                  />
                  <path
                    d="M18.913 9.296L16.4453 6.86572L19.4937 9.17765L18.913 9.296Z"
                    fill="#EF848F"
                  />
                  <path
                    d="M16.4453 6.86572L17.0527 9.296H18.913L16.4453 6.86572Z"
                    fill="#E76A72"
                  />
                  <path
                    d="M17.0526 9.29614L16.9774 11.2317L18.913 9.29614H17.0526Z"
                    fill="#EF848F"
                  />
                  <path
                    d="M17.0526 9.29614L15.2031 9.59729L14.6497 11.5037L16.9774 11.2317L17.0526 9.29614Z"
                    fill="#E65251"
                  />
                  <path
                    d="M4.58971 13.8983L3.99292 10.1992L5.20255 10.0811L5.48489 10.4251L4.91219 11.9815L4.58971 13.8983Z"
                    fill="#E76A72"
                  />
                  <path
                    d="M5.20255 10.081L6.84774 7.4248L3.99292 10.1991L5.20255 10.081Z"
                    fill="#EF848F"
                  />
                  <path
                    d="M5.20264 10.081L6.84782 7.4248L7.71617 7.8927L9.57375 8.08077L8.0414 8.45715L7.71617 10.081L5.48498 10.425L5.20264 10.081Z"
                    fill="#ED5A5A"
                  />
                  <path
                    d="M8.04142 8.45715L9.57376 8.08077L13.3859 6.9248L11.5577 9.54316L7.71619 10.081L8.04142 8.45715Z"
                    fill="#E76A72"
                  />
                  <path
                    d="M7.71619 10.0811L11.5577 9.54321L10.0738 10.6723L8.24577 11.3391L7.71619 10.0811Z"
                    fill="#E65251"
                  />
                  <path
                    d="M6.84778 7.42492L12.2943 5.89258L7.71613 7.89281L6.84778 7.42492Z"
                    fill="#EF8E9C"
                  />
                  <path
                    d="M12.2944 5.89258L13.3859 6.92492L9.57376 8.08088L7.71619 7.89281L12.2944 5.89258Z"
                    fill="#EF848F"
                  />
                  <path
                    d="M12.5448 6.12939C12.5703 6.15348 14.5742 6.29591 14.5742 6.29591L16.4455 6.86586L13.3861 6.92504L12.545 6.12962L12.5448 6.12939Z"
                    fill="#E76A72"
                  />
                  <path
                    d="M12.0191 9.54316L13.8319 9.17756L15.203 9.59706L13.3858 6.9248L11.5576 9.54316H12.0191Z"
                    fill="#CC3737"
                  />
                  <path
                    d="M16.4453 6.86572L17.0526 9.296L15.2031 9.59715L13.3859 6.9249L16.4453 6.86572Z"
                    fill="#D64949"
                  />
                  <path
                    d="M10.9717 12.0812L11.8159 11.8124L15.2031 9.59723L13.832 9.17773L11.7299 10.6188L10.9717 12.0812Z"
                    fill="#EF848F"
                  />
                  <path
                    d="M12.0191 9.54333L13.8319 9.17773L11.7299 10.6188L12.0191 9.54333Z"
                    fill="#ED5A5A"
                  />
                </svg>
                <b className="text-xl lg:hidden">JLC 2023</b>
                <b className="hidden text-xl lg:block">
                  Joints Logic Competition
                </b>
              </div>
            </Link>
            <button className="lg:hidden">
              <IoMenuOutline className="h-7 w-7" />
            </button>
            <p className="hidden lg:block">Nama Tim</p>
          </div>
        </nav>
        <h2 className="py-10 text-center text-2xl font-bold lg:py-16 lg:text-4xl">
          Penyisihan Joints Logic Competition
        </h2>
        <div className="w-[90%] rounded-xl bg-[#F4F4F4] p-5 shadow-xl lg:w-3/4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg p-2 text-left font-medium">
                  <p className="text-lg font-semibold lg:text-xl">
                    Mekanisme Penyisihan
                  </p>
                  {open ? (
                    <IoChevronUp size={20} />
                  ) : (
                    <IoChevronDown size={20} />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="md:text-md px-2 pt-2 pb-2 text-sm text-gray-500">
                  {penyisihanMechanism.map((penyisihan, index) => (
                    <div className="flex w-full space-x-3" key={index}>
                      <p>{`${index + 1}.`}</p>
                      <p key={index} className="mb-2">
                        {penyisihan}
                      </p>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="my-4 h-[1px] w-full bg-primary-dark bg-opacity-20" />
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg p-2 text-left font-medium">
                  <p className="text-lg font-semibold lg:text-xl">
                    Sistem Penilaian
                  </p>
                  {open ? (
                    <IoChevronUp size={20} />
                  ) : (
                    <IoChevronDown size={20} />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="md:text-md px-2 pt-2 pb-2 text-sm text-gray-500">
                  <p>Adapun sistem pembagian nilainya, yaitu:</p>
                  <ul className="list-inside list-disc pt-1">
                    <li>Benar +4</li>
                    <li>Salah -1</li>
                    <li>dan Kosong 0.</li>
                  </ul>
                  <p>Poin maksimal yang dapat diperoleh adalah 160.</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="my-4 h-[1px] w-full bg-primary-dark bg-opacity-20" />
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg p-2 text-left font-medium">
                  <p className="text-lg font-semibold lg:text-xl">
                    Ketentuan Lolos
                  </p>
                  {open ? (
                    <IoChevronUp size={20} />
                  ) : (
                    <IoChevronDown size={20} />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="md:text-md px-2 pt-2 pb-2 text-sm text-gray-500">
                  {ketentuanLolos.map((lolos, index) => (
                    <div className="flex w-full space-x-3" key={index}>
                      <p>{`${index + 1}.`}</p>
                      <p key={index} className="mb-2">
                        {lolos}
                      </p>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="my-4 h-[1px] w-full bg-primary-dark bg-opacity-20" />
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg p-2 text-left font-medium">
                  <p className="text-lg font-semibold lg:text-xl">
                    Ketentuan Diskualifikasi
                  </p>
                  {open ? (
                    <IoChevronUp size={20} />
                  ) : (
                    <IoChevronDown size={20} />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="md:text-md px-2 pt-2 pb-2 text-sm text-gray-500">
                  {ketentuanDiskualifikasi.map((diskualifikasi, index) => (
                    <div className="flex w-full space-x-3" key={index}>
                      <p>{`${index + 1}.`}</p>
                      <p key={index} className="mb-2">
                        {diskualifikasi}
                      </p>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <button className="mt-12 rounded-md bg-primary-dark px-6 py-2.5 font-medium text-white">
          Mulai Penyisihan
        </button>
      </div>
      <div>
        <div className="absolute bottom-0 left-1/2 -z-[5] flex w-[110%] -translate-x-1/2 justify-between lg:w-full">
          <svg
            className="w-[37.5%] scale-x-flip sm:w-48 md:w-56 lg:w-64"
            viewBox="0 0 345 294"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.9026 228.932L63.1934 195L49.4955 238.894L24.9026 228.932Z"
              fill="#ED7E7E"
            />
            <path
              d="M63.1934 195L100.238 247.61L79.6919 260.373L49.4956 238.894L63.1934 195Z"
              fill="#F29191"
            />
            <path
              d="M79.6918 260.373L63.1934 344.423L79.6918 336.641L88.4075 294.305L91.8314 290.569L100.238 247.61L79.6918 260.373Z"
              fill="#AA1B1B"
            />
            <path
              d="M24.9026 228.932L39.5333 256.325L49.4955 238.894L24.9026 228.932Z"
              fill="#F29191"
            />
            <path
              d="M49.4955 238.894L79.6918 260.373L63.1933 344.423L39.5332 256.325L49.4955 238.894Z"
              fill="#E65251"
            />
            <path
              d="M24.9026 228.932L44.049 330.726L39.5333 256.325L24.9026 228.932Z"
              fill="#AA1B1B"
            />
            <path
              d="M39.5332 256.325L44.049 330.726L63.1933 344.423L39.5332 256.325Z"
              fill="#CC3737"
            />
            <path
              d="M33.5281 274.786L5.60327 247.61L44.0488 330.726L33.5281 274.786Z"
              fill="#E65251"
            />
            <path
              d="M5.60338 247.61L0 274.38L21.694 282.399L5.60338 247.61Z"
              fill="#F29191"
            />
            <path
              d="M0 274.38L10.847 285.277L21.694 282.399L0 274.38Z"
              fill="#E76A6A"
            />
            <path
              d="M0 274.38L5.60337 298.661L10.847 285.277L0 274.38Z"
              fill="#CC3737"
            />
            <path
              d="M10.8469 285.277L21.6939 282.399L44.0488 330.726L5.60327 298.662L10.8469 285.277Z"
              fill="#AA1B1B"
            />
            <path
              d="M88.4075 294.304L91.8314 290.569L121.716 266.288L110.509 300.374L88.4075 294.304Z"
              fill="#E65251"
            />
            <path
              d="M121.716 266.288L123.584 294.304L110.509 300.374L121.716 266.288Z"
              fill="#ED7E7E"
            />
            <path
              d="M130.28 204.537L117.972 235.31L148.575 228.49L130.28 204.537Z"
              fill="#E76A6A"
            />
            <path
              d="M130.281 204.537L153.234 214.02L148.575 228.49L130.281 204.537Z"
              fill="#F29191"
            />
            <path
              d="M153.234 214.02L164.381 259.595L157.224 264.42L148.575 228.49L153.234 214.02Z"
              fill="#E65251"
            />
            <path
              d="M148.575 228.49L117.972 235.31L145.584 272.904L157.224 264.42L148.575 228.49Z"
              fill="#CC3737"
            />
            <path
              d="M104 140.331L120.465 158.63L144.161 210.274L140.187 208.632L104 140.331Z"
              fill="#EF5E5E"
            />
            <path
              d="M104 140.331L104.664 107.065L124.08 86.4385L175.689 94.2584L137.764 121.203L120.465 158.63L104 140.331Z"
              fill="#E76A6A"
            />
            <path
              d="M175.689 94.2583L194.595 175.305L182.841 176.54L160.281 105.209L175.689 94.2583Z"
              fill="#CC3737"
            />
            <path
              d="M160.281 105.209L137.764 121.203L165.319 199.38L174.637 178.977L182.841 176.541L160.281 105.209Z"
              fill="#E65251"
            />
            <path
              d="M137.764 121.203L131.206 135.397L184.173 262.59L186.836 263.743V251.946L162.883 207.143L165.32 199.38L137.764 121.203Z"
              fill="#CC3737"
            />
            <path
              d="M131.206 135.397L120.465 158.63L144.161 210.274L153.234 214.02L164.381 259.595L169.537 254.605L184.173 262.59L131.206 135.397Z"
              fill="#E76A6A"
            />
            <path
              d="M237.402 17.0764L210.344 94.2586L231.189 219.924L241.393 216.514L251.597 229.765L246.274 71.637L237.402 17.0764Z"
              fill="#E76A6A"
            />
            <path
              d="M237.402 17.0764L267.119 0L312.143 75.4051L246.274 71.637L237.402 17.0764Z"
              fill="#F29191"
            />
            <path
              d="M246.274 71.637L292.404 136.397L294.844 121.203L308.816 115.548L246.274 71.637Z"
              fill="#AA1B1B"
            />
            <path
              d="M246.274 71.637L312.143 75.405L314.139 113.776L308.816 115.548L246.274 71.637Z"
              fill="#CC3737"
            />
            <path
              d="M246.274 71.637L292.404 136.397L289.963 157.687L282.645 154.805L262.905 173.436L259.137 237.305L251.597 229.765L246.274 71.637Z"
              fill="#E65251"
            />
            <path
              d="M289.963 157.687L282.645 154.805L281.536 187.517L284.531 188.735L289.963 157.687Z"
              fill="#C34343"
            />
            <path
              d="M282.645 154.805L262.905 173.436L281.536 187.517L282.645 154.805Z"
              fill="#E76A6A"
            />
            <path
              d="M262.905 173.436L259.137 237.306L264.678 244.292L281.536 187.517L262.905 173.436Z"
              fill="#CC3737"
            />
            <path
              d="M281.536 187.517L284.531 188.735L271.777 251.391L264.678 244.291L281.536 187.517Z"
              fill="#AA1B1B"
            />
            <path
              d="M294.844 121.203L292.404 136.397L289.963 157.687L271.777 251.391L275.545 255.273L304.267 140.056L294.844 121.203Z"
              fill="#E65251"
            />
            <path
              d="M294.844 121.203L308.816 115.548L314.139 113.776L331.992 106.567L304.267 140.056L294.844 121.203Z"
              fill="#E76A6A"
            />
            <path
              d="M304.267 140.056L349.4 147.928L331.992 106.567L304.267 140.056Z"
              fill="#F29191"
            />
            <path
              d="M304.266 140.056L349.4 147.928L294.844 240.192L280.523 235.31L304.266 140.056Z"
              fill="#E76A6A"
            />
            <path
              d="M280.523 235.31L275.545 255.273L288.522 270.576L289.076 290.312L295.731 282.994L294.844 240.192L280.523 235.31Z"
              fill="#CC3737"
            />
            <path
              d="M295.731 282.994L317.02 262.813L349.401 147.928L294.844 240.191L295.731 282.994Z"
              fill="#AA1B1B"
            />
            <path
              d="M280.523 297.852L289.076 290.312L295.73 282.994L317.02 262.813L345.187 235.31L347.182 262.813L281.536 318.81L280.523 297.852Z"
              fill="#CC3737"
            />
            <path
              d="M281.536 318.81L300.11 331.123L375.96 287.539L347.182 262.813L281.536 318.81Z"
              fill="#AA1B1B"
            />
            <path
              d="M174.637 178.977L182.841 176.54L194.595 175.305L207.017 173.436L201.581 198.996L179.405 211.248L162.883 207.143L165.319 199.38L174.637 178.977Z"
              fill="#F29191"
            />
            <path
              d="M207.017 173.436L218.662 226.333C218.662 226.333 207.904 229.551 207.572 229.769C207.24 229.988 201.586 198.996 201.586 198.996L207.017 173.436Z"
              fill="#E65251"
            />
            <path
              d="M201.581 198.996L179.405 211.248L193.822 236.751L207.572 229.765L201.581 198.996Z"
              fill="#CC3737"
            />
            <path
              d="M162.883 207.143L179.405 211.248L193.822 236.751L188.609 239.218L186.836 251.945L162.883 207.143Z"
              fill="#AA1B1B"
            />
            <path
              d="M131.944 282.548L145.584 272.903L157.224 264.42L164.381 259.595L169.537 254.604L184.837 293.032L148.575 290.202L131.944 282.548Z"
              fill="#E76A6A"
            />
            <path
              d="M131.944 282.548L142.034 318.256L156.478 322.028L143.357 287.801L131.944 282.548Z"
              fill="#AA1B1B"
            />
            <path
              d="M142.851 287.565L148.575 290.203L164.381 323.028L156.478 322.028L142.851 287.565Z"
              fill="#CC3737"
            />
            <path
              d="M148.575 290.202L184.837 293.032L183.618 337L164.381 323.028L148.575 290.202Z"
              fill="#E65251"
            />
            <path
              d="M183.618 337L207.458 331.896L184.837 293.032L183.618 337Z"
              fill="#AA1B1B"
            />
            <path
              d="M169.537 254.604L184.173 262.59L210.122 273.816L184.837 293.032L169.537 254.604Z"
              fill="#F29191"
            />
            <path
              d="M184.837 293.032L210.122 273.816L213.366 331.206L207.458 331.896L184.837 293.032Z"
              fill="#E65251"
            />
            <path
              d="M229.307 309.829L217.771 293.53L211.34 295.394L211.672 301.28L229.307 309.829Z"
              fill="#E65251"
            />
            <path
              d="M248.824 315.016L252.924 283.548L273.995 317.815L248.824 315.016Z"
              fill="#E65251"
            />
            <path
              d="M252.924 283.548L229.307 309.829L248.824 315.016L252.924 283.548Z"
              fill="#EF8484"
            />
            <path
              d="M252.924 283.548L217.771 293.53L229.307 309.829L252.924 283.548Z"
              fill="#E76A6A"
            />
            <path
              d="M203.952 271.149L208.126 246.733L188.609 239.218L186.836 251.946V263.743L203.952 271.149Z"
              fill="#AA1B1B"
            />
            <path
              d="M188.609 239.218L207.572 229.765L218.662 226.329L231.189 219.923L241.393 216.513L208.126 246.732L188.609 239.218Z"
              fill="#E76A6A"
            />
            <path
              d="M241.393 216.513L251.596 229.765L259.137 237.305L264.678 244.291L271.777 251.391L275.999 255.801L288.522 270.576L270.336 273.816L241.393 216.513Z"
              fill="#D35E5E"
            />
            <path
              d="M270.336 273.816L241.393 216.513L208.126 246.732L270.336 273.816Z"
              fill="#F29191"
            />
            <path
              d="M263.647 270.908L210.938 288.303L210.122 273.816L203.952 271.148L208.126 246.732L263.647 270.908Z"
              fill="#E65251"
            />
            <path
              d="M263.647 270.908L270.336 273.816L264.678 302.664L252.924 283.548L211.34 295.394L210.938 288.303L263.647 270.908Z"
              fill="#CC3737"
            />
            <path
              d="M271.777 314.208L281.265 313.252L280.523 297.852L289.077 290.312L288.522 270.576L270.337 273.816L264.678 302.664L271.777 314.208Z"
              fill="#AA1B1B"
            />
          </svg>
          <svg
            className="w-[37.5%] sm:w-48 md:w-56 lg:w-64"
            viewBox="0 0 345 294"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.9026 228.932L63.1934 195L49.4955 238.894L24.9026 228.932Z"
              fill="#ED7E7E"
            />
            <path
              d="M63.1934 195L100.238 247.61L79.6919 260.373L49.4956 238.894L63.1934 195Z"
              fill="#F29191"
            />
            <path
              d="M79.6918 260.373L63.1934 344.423L79.6918 336.641L88.4075 294.305L91.8314 290.569L100.238 247.61L79.6918 260.373Z"
              fill="#AA1B1B"
            />
            <path
              d="M24.9026 228.932L39.5333 256.325L49.4955 238.894L24.9026 228.932Z"
              fill="#F29191"
            />
            <path
              d="M49.4955 238.894L79.6918 260.373L63.1933 344.423L39.5332 256.325L49.4955 238.894Z"
              fill="#E65251"
            />
            <path
              d="M24.9026 228.932L44.049 330.726L39.5333 256.325L24.9026 228.932Z"
              fill="#AA1B1B"
            />
            <path
              d="M39.5332 256.325L44.049 330.726L63.1933 344.423L39.5332 256.325Z"
              fill="#CC3737"
            />
            <path
              d="M33.5281 274.786L5.60327 247.61L44.0488 330.726L33.5281 274.786Z"
              fill="#E65251"
            />
            <path
              d="M5.60338 247.61L0 274.38L21.694 282.399L5.60338 247.61Z"
              fill="#F29191"
            />
            <path
              d="M0 274.38L10.847 285.277L21.694 282.399L0 274.38Z"
              fill="#E76A6A"
            />
            <path
              d="M0 274.38L5.60337 298.661L10.847 285.277L0 274.38Z"
              fill="#CC3737"
            />
            <path
              d="M10.8469 285.277L21.6939 282.399L44.0488 330.726L5.60327 298.662L10.8469 285.277Z"
              fill="#AA1B1B"
            />
            <path
              d="M88.4075 294.304L91.8314 290.569L121.716 266.288L110.509 300.374L88.4075 294.304Z"
              fill="#E65251"
            />
            <path
              d="M121.716 266.288L123.584 294.304L110.509 300.374L121.716 266.288Z"
              fill="#ED7E7E"
            />
            <path
              d="M130.28 204.537L117.972 235.31L148.575 228.49L130.28 204.537Z"
              fill="#E76A6A"
            />
            <path
              d="M130.281 204.537L153.234 214.02L148.575 228.49L130.281 204.537Z"
              fill="#F29191"
            />
            <path
              d="M153.234 214.02L164.381 259.595L157.224 264.42L148.575 228.49L153.234 214.02Z"
              fill="#E65251"
            />
            <path
              d="M148.575 228.49L117.972 235.31L145.584 272.904L157.224 264.42L148.575 228.49Z"
              fill="#CC3737"
            />
            <path
              d="M104 140.331L120.465 158.63L144.161 210.274L140.187 208.632L104 140.331Z"
              fill="#EF5E5E"
            />
            <path
              d="M104 140.331L104.664 107.065L124.08 86.4385L175.689 94.2584L137.764 121.203L120.465 158.63L104 140.331Z"
              fill="#E76A6A"
            />
            <path
              d="M175.689 94.2583L194.595 175.305L182.841 176.54L160.281 105.209L175.689 94.2583Z"
              fill="#CC3737"
            />
            <path
              d="M160.281 105.209L137.764 121.203L165.319 199.38L174.637 178.977L182.841 176.541L160.281 105.209Z"
              fill="#E65251"
            />
            <path
              d="M137.764 121.203L131.206 135.397L184.173 262.59L186.836 263.743V251.946L162.883 207.143L165.32 199.38L137.764 121.203Z"
              fill="#CC3737"
            />
            <path
              d="M131.206 135.397L120.465 158.63L144.161 210.274L153.234 214.02L164.381 259.595L169.537 254.605L184.173 262.59L131.206 135.397Z"
              fill="#E76A6A"
            />
            <path
              d="M237.402 17.0764L210.344 94.2586L231.189 219.924L241.393 216.514L251.597 229.765L246.274 71.637L237.402 17.0764Z"
              fill="#E76A6A"
            />
            <path
              d="M237.402 17.0764L267.119 0L312.143 75.4051L246.274 71.637L237.402 17.0764Z"
              fill="#F29191"
            />
            <path
              d="M246.274 71.637L292.404 136.397L294.844 121.203L308.816 115.548L246.274 71.637Z"
              fill="#AA1B1B"
            />
            <path
              d="M246.274 71.637L312.143 75.405L314.139 113.776L308.816 115.548L246.274 71.637Z"
              fill="#CC3737"
            />
            <path
              d="M246.274 71.637L292.404 136.397L289.963 157.687L282.645 154.805L262.905 173.436L259.137 237.305L251.597 229.765L246.274 71.637Z"
              fill="#E65251"
            />
            <path
              d="M289.963 157.687L282.645 154.805L281.536 187.517L284.531 188.735L289.963 157.687Z"
              fill="#C34343"
            />
            <path
              d="M282.645 154.805L262.905 173.436L281.536 187.517L282.645 154.805Z"
              fill="#E76A6A"
            />
            <path
              d="M262.905 173.436L259.137 237.306L264.678 244.292L281.536 187.517L262.905 173.436Z"
              fill="#CC3737"
            />
            <path
              d="M281.536 187.517L284.531 188.735L271.777 251.391L264.678 244.291L281.536 187.517Z"
              fill="#AA1B1B"
            />
            <path
              d="M294.844 121.203L292.404 136.397L289.963 157.687L271.777 251.391L275.545 255.273L304.267 140.056L294.844 121.203Z"
              fill="#E65251"
            />
            <path
              d="M294.844 121.203L308.816 115.548L314.139 113.776L331.992 106.567L304.267 140.056L294.844 121.203Z"
              fill="#E76A6A"
            />
            <path
              d="M304.267 140.056L349.4 147.928L331.992 106.567L304.267 140.056Z"
              fill="#F29191"
            />
            <path
              d="M304.266 140.056L349.4 147.928L294.844 240.192L280.523 235.31L304.266 140.056Z"
              fill="#E76A6A"
            />
            <path
              d="M280.523 235.31L275.545 255.273L288.522 270.576L289.076 290.312L295.731 282.994L294.844 240.192L280.523 235.31Z"
              fill="#CC3737"
            />
            <path
              d="M295.731 282.994L317.02 262.813L349.401 147.928L294.844 240.191L295.731 282.994Z"
              fill="#AA1B1B"
            />
            <path
              d="M280.523 297.852L289.076 290.312L295.73 282.994L317.02 262.813L345.187 235.31L347.182 262.813L281.536 318.81L280.523 297.852Z"
              fill="#CC3737"
            />
            <path
              d="M281.536 318.81L300.11 331.123L375.96 287.539L347.182 262.813L281.536 318.81Z"
              fill="#AA1B1B"
            />
            <path
              d="M174.637 178.977L182.841 176.54L194.595 175.305L207.017 173.436L201.581 198.996L179.405 211.248L162.883 207.143L165.319 199.38L174.637 178.977Z"
              fill="#F29191"
            />
            <path
              d="M207.017 173.436L218.662 226.333C218.662 226.333 207.904 229.551 207.572 229.769C207.24 229.988 201.586 198.996 201.586 198.996L207.017 173.436Z"
              fill="#E65251"
            />
            <path
              d="M201.581 198.996L179.405 211.248L193.822 236.751L207.572 229.765L201.581 198.996Z"
              fill="#CC3737"
            />
            <path
              d="M162.883 207.143L179.405 211.248L193.822 236.751L188.609 239.218L186.836 251.945L162.883 207.143Z"
              fill="#AA1B1B"
            />
            <path
              d="M131.944 282.548L145.584 272.903L157.224 264.42L164.381 259.595L169.537 254.604L184.837 293.032L148.575 290.202L131.944 282.548Z"
              fill="#E76A6A"
            />
            <path
              d="M131.944 282.548L142.034 318.256L156.478 322.028L143.357 287.801L131.944 282.548Z"
              fill="#AA1B1B"
            />
            <path
              d="M142.851 287.565L148.575 290.203L164.381 323.028L156.478 322.028L142.851 287.565Z"
              fill="#CC3737"
            />
            <path
              d="M148.575 290.202L184.837 293.032L183.618 337L164.381 323.028L148.575 290.202Z"
              fill="#E65251"
            />
            <path
              d="M183.618 337L207.458 331.896L184.837 293.032L183.618 337Z"
              fill="#AA1B1B"
            />
            <path
              d="M169.537 254.604L184.173 262.59L210.122 273.816L184.837 293.032L169.537 254.604Z"
              fill="#F29191"
            />
            <path
              d="M184.837 293.032L210.122 273.816L213.366 331.206L207.458 331.896L184.837 293.032Z"
              fill="#E65251"
            />
            <path
              d="M229.307 309.829L217.771 293.53L211.34 295.394L211.672 301.28L229.307 309.829Z"
              fill="#E65251"
            />
            <path
              d="M248.824 315.016L252.924 283.548L273.995 317.815L248.824 315.016Z"
              fill="#E65251"
            />
            <path
              d="M252.924 283.548L229.307 309.829L248.824 315.016L252.924 283.548Z"
              fill="#EF8484"
            />
            <path
              d="M252.924 283.548L217.771 293.53L229.307 309.829L252.924 283.548Z"
              fill="#E76A6A"
            />
            <path
              d="M203.952 271.149L208.126 246.733L188.609 239.218L186.836 251.946V263.743L203.952 271.149Z"
              fill="#AA1B1B"
            />
            <path
              d="M188.609 239.218L207.572 229.765L218.662 226.329L231.189 219.923L241.393 216.513L208.126 246.732L188.609 239.218Z"
              fill="#E76A6A"
            />
            <path
              d="M241.393 216.513L251.596 229.765L259.137 237.305L264.678 244.291L271.777 251.391L275.999 255.801L288.522 270.576L270.336 273.816L241.393 216.513Z"
              fill="#D35E5E"
            />
            <path
              d="M270.336 273.816L241.393 216.513L208.126 246.732L270.336 273.816Z"
              fill="#F29191"
            />
            <path
              d="M263.647 270.908L210.938 288.303L210.122 273.816L203.952 271.148L208.126 246.732L263.647 270.908Z"
              fill="#E65251"
            />
            <path
              d="M263.647 270.908L270.336 273.816L264.678 302.664L252.924 283.548L211.34 295.394L210.938 288.303L263.647 270.908Z"
              fill="#CC3737"
            />
            <path
              d="M271.777 314.208L281.265 313.252L280.523 297.852L289.077 290.312L288.522 270.576L270.337 273.816L264.678 302.664L271.777 314.208Z"
              fill="#AA1B1B"
            />
          </svg>
        </div>
        <svg
          className="absolute -bottom-16 left-1/2 -z-10 w-[200%] -translate-x-1/2 transform md:-bottom-[10rem] md:w-[110%] lg:-bottom-[15rem] lg:w-[130%]"
          viewBox="0 0 1836 718"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1810.89 135.529L1698.42 172.402L1713.92 69.6621L1810.89 135.529Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1700.16 170.67L1604.52 143.408L1657.99 220.841L1700.16 170.67Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1713.92 69.7066L1501.27 115.183L1637.59 1L1713.92 69.7066Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1713.9 72.0715C1712.55 72.0715 1711.45 70.9764 1711.45 69.6256C1711.45 68.2748 1712.55 67.1797 1713.9 67.1797C1715.25 67.1797 1716.35 68.2748 1716.35 69.6256C1716.35 70.9764 1715.25 72.0715 1713.9 72.0715Z"
            fill="#E65251"
          />
          <path
            d="M1700.16 173.115C1698.8 173.115 1697.71 172.02 1697.71 170.67C1697.71 169.319 1698.8 168.224 1700.16 168.224C1701.51 168.224 1702.6 169.319 1702.6 170.67C1702.6 172.02 1701.51 173.115 1700.16 173.115Z"
            fill="#E65251"
          />
          <path
            d="M1658 223.287C1656.64 223.287 1655.55 222.192 1655.55 220.841C1655.55 219.491 1656.64 218.396 1658 218.396C1659.35 218.396 1660.44 219.491 1660.44 220.841C1660.44 222.192 1659.35 223.287 1658 223.287Z"
            fill="#E65251"
          />
          <path
            d="M1024.94 438.797C1024.6 438.452 1024.16 438.217 1023.68 438.121C1023.21 438.025 1022.71 438.072 1022.26 438.258C1021.81 438.444 1021.43 438.759 1021.16 439.163C1020.89 439.568 1020.74 440.044 1020.74 440.53C1020.74 441.017 1020.89 441.493 1021.16 441.898C1021.43 442.302 1021.81 442.617 1022.26 442.803C1022.71 442.989 1023.21 443.036 1023.68 442.94C1024.16 442.844 1024.6 442.609 1024.94 442.263C1025.4 441.803 1025.66 441.18 1025.66 440.53C1025.66 439.881 1025.4 439.258 1024.94 438.797Z"
            fill="#E65251"
          />
          <path
            d="M928.242 505.586C927.898 505.243 927.46 505.009 926.983 504.914C926.506 504.82 926.012 504.868 925.563 505.055C925.114 505.241 924.73 505.556 924.46 505.96C924.19 506.364 924.046 506.839 924.046 507.325C924.046 507.811 924.19 508.287 924.46 508.691C924.73 509.095 925.114 509.41 925.563 509.596C926.012 509.782 926.506 509.831 926.983 509.737C927.46 509.642 927.898 509.408 928.242 509.065C928.47 508.836 928.652 508.565 928.775 508.267C928.899 507.968 928.963 507.648 928.963 507.325C928.963 507.002 928.899 506.682 928.775 506.384C928.652 506.086 928.47 505.815 928.242 505.586Z"
            fill="#E65251"
          />
          <path
            d="M1117.54 537.126C1117.2 536.78 1116.76 536.545 1116.28 536.449C1115.8 536.353 1115.31 536.401 1114.86 536.586C1114.41 536.772 1114.02 537.087 1113.75 537.491C1113.48 537.896 1113.34 538.372 1113.34 538.859C1113.34 539.345 1113.48 539.821 1113.75 540.226C1114.02 540.63 1114.41 540.945 1114.86 541.131C1115.31 541.317 1115.8 541.365 1116.28 541.268C1116.76 541.172 1117.2 540.937 1117.54 540.592C1118 540.131 1118.25 539.508 1118.25 538.859C1118.25 538.209 1118 537.586 1117.54 537.126Z"
            fill="#E65251"
          />
          <path
            d="M1540.38 247.881C1540.04 247.536 1539.6 247.301 1539.13 247.205C1538.65 247.109 1538.15 247.156 1537.7 247.342C1537.25 247.528 1536.87 247.843 1536.6 248.247C1536.33 248.652 1536.18 249.128 1536.18 249.614C1536.18 250.101 1536.33 250.577 1536.6 250.982C1536.87 251.386 1537.25 251.701 1537.7 251.887C1538.15 252.073 1538.65 252.12 1539.13 252.024C1539.6 251.928 1540.04 251.693 1540.38 251.347C1540.84 250.887 1541.1 250.264 1541.1 249.614C1541.1 248.965 1540.84 248.342 1540.38 247.881Z"
            fill="#E65251"
          />
          <path
            d="M1757.95 221.05C1757.61 220.707 1757.17 220.473 1756.7 220.378C1756.22 220.283 1755.73 220.332 1755.28 220.518C1754.83 220.705 1754.44 221.02 1754.17 221.424C1753.9 221.828 1753.76 222.303 1753.76 222.789C1753.76 223.275 1753.9 223.75 1754.17 224.155C1754.44 224.559 1754.83 224.874 1755.28 225.06C1755.73 225.246 1756.22 225.295 1756.7 225.2C1757.17 225.106 1757.61 224.872 1757.95 224.528C1758.18 224.3 1758.36 224.029 1758.49 223.731C1758.61 223.432 1758.68 223.112 1758.68 222.789C1758.68 222.466 1758.61 222.146 1758.49 221.848C1758.36 221.549 1758.18 221.278 1757.95 221.05Z"
            fill="#E65251"
          />
          <path
            d="M1676.26 295.411C1675.92 295.068 1675.48 294.834 1675 294.739C1674.53 294.645 1674.03 294.694 1673.58 294.88C1673.13 295.066 1672.75 295.381 1672.48 295.785C1672.21 296.189 1672.07 296.665 1672.07 297.151C1672.07 297.637 1672.21 298.112 1672.48 298.516C1672.75 298.92 1673.13 299.235 1673.58 299.421C1674.03 299.608 1674.53 299.656 1675 299.562C1675.48 299.467 1675.92 299.233 1676.26 298.89C1676.49 298.661 1676.67 298.39 1676.8 298.092C1676.92 297.793 1676.98 297.474 1676.98 297.151C1676.98 296.828 1676.92 296.508 1676.8 296.209C1676.67 295.911 1676.49 295.64 1676.26 295.411Z"
            fill="#E65251"
          />
          <path
            d="M1501.27 117.585C1499.92 117.585 1498.83 116.49 1498.83 115.139C1498.83 113.788 1499.92 112.693 1501.27 112.693C1502.62 112.693 1503.72 113.788 1503.72 115.139C1503.72 116.49 1502.62 117.585 1501.27 117.585Z"
            fill="#E65251"
          />
          <path
            d="M1351.64 279.801C1350.29 279.801 1349.2 278.706 1349.2 277.355C1349.2 276.004 1350.29 274.909 1351.64 274.909C1352.99 274.909 1354.09 276.004 1354.09 277.355C1354.09 278.706 1352.99 279.801 1351.64 279.801Z"
            fill="#E65251"
          />
          <path
            d="M1343.11 353.977C1341.76 353.977 1340.66 352.882 1340.66 351.532C1340.66 350.181 1341.76 349.086 1343.11 349.086C1344.46 349.086 1345.56 350.181 1345.56 351.532C1345.56 352.882 1344.46 353.977 1343.11 353.977Z"
            fill="#E65251"
          />
          <path
            d="M1529.79 508.819C1529.45 508.474 1529.01 508.238 1528.53 508.142C1528.05 508.046 1527.56 508.094 1527.11 508.279C1526.66 508.465 1526.27 508.78 1526 509.185C1525.73 509.589 1525.59 510.065 1525.59 510.552C1525.59 511.039 1525.73 511.515 1526 511.919C1526.27 512.324 1526.66 512.639 1527.11 512.824C1527.56 513.01 1528.05 513.058 1528.53 512.962C1529.01 512.866 1529.45 512.63 1529.79 512.285C1530.25 511.824 1530.5 511.201 1530.5 510.552C1530.5 509.903 1530.25 509.279 1529.79 508.819Z"
            fill="#E65251"
          />
          <path
            d="M1253.18 476.506C1252.84 476.161 1252.4 475.926 1251.92 475.83C1251.45 475.734 1250.95 475.781 1250.5 475.967C1250.05 476.153 1249.67 476.468 1249.4 476.872C1249.12 477.277 1248.98 477.753 1248.98 478.239C1248.98 478.726 1249.12 479.202 1249.4 479.607C1249.67 480.011 1250.05 480.326 1250.5 480.512C1250.95 480.698 1251.45 480.745 1251.92 480.649C1252.4 480.553 1252.84 480.318 1253.18 479.972C1253.64 479.512 1253.9 478.889 1253.9 478.239C1253.9 477.59 1253.64 476.967 1253.18 476.506Z"
            fill="#E65251"
          />
          <path
            d="M1378.35 467.055C1377 467.055 1375.9 465.96 1375.9 464.609C1375.9 463.258 1377 462.163 1378.35 462.163C1379.7 462.163 1380.8 463.258 1380.8 464.609C1380.8 465.96 1379.7 467.055 1378.35 467.055Z"
            fill="#E65251"
          />
          <path
            d="M1584.34 358.599C1582.45 358.599 1580.91 357.063 1580.91 355.169C1580.91 353.276 1582.45 351.74 1584.34 351.74C1586.24 351.74 1587.77 353.276 1587.77 355.169C1587.77 357.063 1586.24 358.599 1584.34 358.599Z"
            fill="#E65251"
          />
          <path
            d="M1479.55 475.671C1477.66 475.671 1476.12 474.136 1476.12 472.242C1476.12 470.348 1477.66 468.812 1479.55 468.812C1481.45 468.812 1482.98 470.348 1482.98 472.242C1482.98 474.136 1481.45 475.671 1479.55 475.671Z"
            fill="#E65251"
          />
          <path
            d="M1370.19 322.943C1369.84 322.598 1369.41 322.362 1368.93 322.266C1368.45 322.17 1367.96 322.218 1367.51 322.403C1367.06 322.589 1366.67 322.904 1366.4 323.309C1366.13 323.713 1365.99 324.189 1365.99 324.676C1365.99 325.163 1366.13 325.639 1366.4 326.043C1366.67 326.448 1367.06 326.763 1367.51 326.948C1367.96 327.134 1368.45 327.182 1368.93 327.086C1369.41 326.99 1369.84 326.754 1370.19 326.409C1370.65 325.948 1370.9 325.325 1370.9 324.676C1370.9 324.027 1370.65 323.404 1370.19 322.943Z"
            fill="#E65251"
          />
          <path
            d="M1310.98 379.186C1310.13 379.186 1309.44 378.498 1309.44 377.65C1309.44 376.801 1310.13 376.113 1310.98 376.113C1311.83 376.113 1312.52 376.801 1312.52 377.65C1312.52 378.498 1311.83 379.186 1310.98 379.186Z"
            fill="#E65251"
          />
          <path
            d="M1303.23 308.243C1302.39 308.243 1301.7 307.555 1301.7 306.706C1301.7 305.858 1302.39 305.17 1303.23 305.17C1304.08 305.17 1304.77 305.858 1304.77 306.706C1304.77 307.555 1304.08 308.243 1303.23 308.243Z"
            fill="#E65251"
          />
          <path
            d="M1309.79 394.304C1308.94 394.304 1308.25 393.616 1308.25 392.768C1308.25 391.919 1308.94 391.231 1309.79 391.231C1310.63 391.231 1311.32 391.919 1311.32 392.768C1311.32 393.616 1310.63 394.304 1309.79 394.304Z"
            fill="#E65251"
          />
          <path
            d="M1454.43 427.49C1453.58 427.49 1452.89 426.802 1452.89 425.953C1452.89 425.105 1453.58 424.417 1454.43 424.417C1455.28 424.417 1455.96 425.105 1455.96 425.953C1455.96 426.802 1455.28 427.49 1454.43 427.49Z"
            fill="#E65251"
          />
          <path
            d="M1180.32 302.946C1179.47 302.946 1178.78 302.258 1178.78 301.409C1178.78 300.561 1179.47 299.873 1180.32 299.873C1181.16 299.873 1181.85 300.561 1181.85 301.409C1181.85 302.258 1181.16 302.946 1180.32 302.946Z"
            fill="#E65251"
          />
          <path
            d="M1085.94 347.88C1085.09 347.88 1084.4 347.193 1084.4 346.344C1084.4 345.495 1085.09 344.808 1085.94 344.808C1086.78 344.808 1087.47 345.495 1087.47 346.344C1087.47 347.193 1086.78 347.88 1085.94 347.88Z"
            fill="#E65251"
          />
          <path
            d="M1230.71 513.809C1229.86 513.809 1229.18 513.121 1229.18 512.273C1229.18 511.424 1229.86 510.736 1230.71 510.736C1231.56 510.736 1232.25 511.424 1232.25 512.273C1232.25 513.121 1231.56 513.809 1230.71 513.809Z"
            fill="#E65251"
          />
          <path
            d="M1604.53 145.854C1603.18 145.854 1602.08 144.759 1602.08 143.408C1602.08 142.057 1603.18 140.962 1604.53 140.962C1605.88 140.962 1606.97 142.057 1606.97 143.408C1606.97 144.759 1605.88 145.854 1604.53 145.854Z"
            fill="#E65251"
          />
          <path
            d="M1806.73 166.146L1657.99 220.841L1685.65 342.522L1835 297.66"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1303.37 306.879L1343.11 351.532L1310.74 378.167L1351.31 276.152L1368.52 325.315L1454.56 426.102L1583.63 356.043L1657.99 220.842L1501.27 115.14"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1583.63 356.042L1635.25 390.457L1528.31 510.908L1583.63 356.042Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1635.26 390.458L1685.65 342.523L1583.63 356.043L1538.15 250.34L1501.27 115.14"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1528.31 510.908L1479.14 471.577L1472.59 559.654L1528.31 510.908Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1775.79 316.293L1756.33 222.992L1675.2 297.045L1583.63 356.042L1479.15 471.577L1378.35 464.608L1247.23 586.695"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1713.9 69.625L1657.99 220.841L1538.15 250.339"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1675.2 297.046L1538.15 250.34"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1528.31 510.909L1579.94 567.448L1724.68 717.09"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1180.04 301.544L1153.41 336.377L1121.04 346.615L1085.8 345.792L1251.34 478.534L1247.23 586.695L1416.46 555.156L1479.15 471.578L1454.56 426.101L1538.15 250.34L1368.52 325.315"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1251.34 478.534L1378.35 464.608L1416.46 555.156L1472.59 559.655"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1153.39 337.434C1152.54 337.434 1151.86 336.746 1151.86 335.898C1151.86 335.049 1152.54 334.361 1153.39 334.361C1154.24 334.361 1154.93 335.049 1154.93 335.898C1154.93 336.746 1154.24 337.434 1153.39 337.434Z"
            fill="#E65251"
          />
          <path
            d="M1120.7 347.598C1119.85 347.598 1119.16 346.91 1119.16 346.062C1119.16 345.213 1119.85 344.525 1120.7 344.525C1121.55 344.525 1122.23 345.213 1122.23 346.062C1122.23 346.91 1121.55 347.598 1120.7 347.598Z"
            fill="#E65251"
          />
          <path
            d="M1141.29 297.181C1140.44 297.181 1139.75 296.493 1139.75 295.645C1139.75 294.796 1140.44 294.108 1141.29 294.108C1142.14 294.108 1142.82 294.796 1142.82 295.645C1142.82 296.493 1142.14 297.181 1141.29 297.181Z"
            fill="#E65251"
          />
          <path
            d="M1208.72 369.254C1207.87 369.254 1207.18 368.567 1207.18 367.718C1207.18 366.869 1207.87 366.182 1208.72 366.182C1209.57 366.182 1210.26 366.869 1210.26 367.718C1210.26 368.567 1209.57 369.254 1208.72 369.254Z"
            fill="#E65251"
          />
          <path
            d="M1266.36 453.583C1265.51 453.583 1264.82 452.896 1264.82 452.047C1264.82 451.199 1265.51 450.511 1266.36 450.511C1267.21 450.511 1267.89 451.199 1267.89 452.047C1267.89 452.896 1267.21 453.583 1266.36 453.583Z"
            fill="#E65251"
          />
          <path
            d="M1266.49 451.912L1378.35 464.609L1230.85 512.138L1266.49 451.912Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1085.8 345.792L1115.3 538.871L1048.93 506.398L1085.8 345.792Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1141.12 295.816L1208.72 367.719L1251.34 478.534L1115.3 538.871L1023.11 440.85L1085.8 345.792L926.83 507.221"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1048.93 506.397L1073.51 651.431L918.63 601.862"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1050.02 505.304C1049.8 505.085 1049.53 504.935 1049.23 504.874C1048.92 504.813 1048.61 504.842 1048.33 504.959C1048.04 505.075 1047.8 505.274 1047.63 505.529C1047.46 505.784 1047.37 506.084 1047.37 506.391C1047.37 506.699 1047.46 506.999 1047.63 507.254C1047.8 507.509 1048.04 507.708 1048.33 507.824C1048.61 507.941 1048.92 507.97 1049.23 507.909C1049.53 507.847 1049.8 507.698 1050.02 507.479C1050.3 507.189 1050.46 506.799 1050.46 506.391C1050.46 505.984 1050.3 505.594 1050.02 505.304Z"
            fill="#E65251"
          />
          <path
            d="M901.422 469.525L926.829 507.222L918.63 601.862L1048.93 506.398L926.829 507.222L749 531.804"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M902.515 468.431C902.299 468.212 902.023 468.062 901.722 468.001C901.421 467.94 901.108 467.969 900.824 468.086C900.54 468.202 900.297 468.401 900.126 468.656C899.955 468.911 899.863 469.211 899.863 469.518C899.863 469.826 899.955 470.126 900.126 470.381C900.297 470.636 900.54 470.835 900.824 470.951C901.108 471.068 901.421 471.097 901.722 471.036C902.023 470.974 902.299 470.825 902.515 470.606C902.801 470.316 902.961 469.926 902.961 469.518C902.961 469.111 902.801 468.72 902.515 468.431Z"
            fill="#E65251"
          />
          <path
            d="M909.066 409.435C908.851 409.22 908.577 409.074 908.279 409.015C907.981 408.956 907.673 408.987 907.392 409.103C907.112 409.22 906.872 409.417 906.703 409.669C906.535 409.922 906.445 410.219 906.445 410.522C906.445 410.826 906.535 411.123 906.703 411.376C906.872 411.628 907.112 411.825 907.392 411.942C907.673 412.058 907.981 412.089 908.279 412.03C908.577 411.971 908.851 411.825 909.066 411.61C909.209 411.467 909.323 411.298 909.4 411.111C909.478 410.925 909.518 410.725 909.518 410.522C909.518 410.32 909.478 410.12 909.4 409.934C909.323 409.747 909.209 409.577 909.066 409.435Z"
            fill="#E65251"
          />
          <path
            d="M969.112 434.865C968.263 434.865 967.575 434.177 967.575 433.328C967.575 432.48 968.263 431.792 969.112 431.792C969.961 431.792 970.648 432.48 970.648 433.328C970.648 434.177 969.961 434.865 969.112 434.865Z"
            fill="#E65251"
          />
          <path
            d="M1247.31 588.17C1246.46 588.17 1245.77 587.483 1245.77 586.634C1245.77 585.786 1246.46 585.098 1247.31 585.098C1248.15 585.098 1248.84 585.786 1248.84 586.634C1248.84 587.483 1248.15 588.17 1247.31 588.17Z"
            fill="#E65251"
          />
          <path
            d="M1378.35 464.608L1309.52 392.915L1454.56 426.101"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M901.422 469.525L969.434 433.476L907.973 410.528"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1472.45 560.921C1471.6 560.921 1470.91 560.234 1470.91 559.385C1470.91 558.536 1471.6 557.849 1472.45 557.849C1473.29 557.849 1473.98 558.536 1473.98 559.385C1473.98 560.234 1473.29 560.921 1472.45 560.921Z"
            fill="#E65251"
          />
          <path
            d="M1579.5 569.119C1578.65 569.119 1577.96 568.431 1577.96 567.582C1577.96 566.734 1578.65 566.046 1579.5 566.046C1580.35 566.046 1581.04 566.734 1581.04 567.582C1581.04 568.431 1580.35 569.119 1579.5 569.119Z"
            fill="#E65251"
          />
          <path
            d="M25.1055 135.529L137.577 172.402L122.077 69.6621L25.1055 135.529Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M135.844 170.67L231.476 143.408L178.005 220.841L135.844 170.67Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M122.078 69.7066L334.73 115.183L198.412 1L122.078 69.7066Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M122.1 72.0715C123.451 72.0715 124.547 70.9764 124.547 69.6256C124.547 68.2748 123.451 67.1797 122.1 67.1797C120.749 67.1797 119.654 68.2748 119.654 69.6256C119.654 70.9764 120.749 72.0715 122.1 72.0715Z"
            fill="#E65251"
          />
          <path
            d="M135.845 173.115C137.195 173.115 138.291 172.02 138.291 170.67C138.291 169.319 137.195 168.224 135.845 168.224C134.494 168.224 133.398 169.319 133.398 170.67C133.398 172.02 134.494 173.115 135.845 173.115Z"
            fill="#E65251"
          />
          <path
            d="M178.005 223.287C179.356 223.287 180.451 222.192 180.451 220.841C180.451 219.491 179.356 218.396 178.005 218.396C176.654 218.396 175.559 219.491 175.559 220.841C175.559 222.192 176.654 223.287 178.005 223.287Z"
            fill="#E65251"
          />
          <path
            d="M811.057 438.797C811.4 438.452 811.838 438.217 812.315 438.121C812.793 438.025 813.288 438.072 813.738 438.258C814.188 438.444 814.572 438.759 814.843 439.163C815.114 439.568 815.259 440.044 815.259 440.53C815.259 441.017 815.114 441.493 814.843 441.898C814.572 442.302 814.188 442.617 813.738 442.803C813.288 442.989 812.793 443.036 812.315 442.94C811.838 442.844 811.4 442.609 811.057 442.263C810.599 441.803 810.342 441.18 810.342 440.53C810.342 439.881 810.599 439.258 811.057 438.797Z"
            fill="#E65251"
          />
          <path
            d="M907.758 505.586C908.102 505.243 908.54 505.009 909.017 504.914C909.494 504.82 909.988 504.868 910.437 505.055C910.886 505.241 911.27 505.556 911.54 505.96C911.81 506.364 911.954 506.839 911.954 507.325C911.954 507.811 911.81 508.287 911.54 508.691C911.27 509.095 910.886 509.41 910.437 509.596C909.988 509.782 909.494 509.831 909.017 509.737C908.54 509.642 908.102 509.408 907.758 509.065C907.53 508.836 907.348 508.565 907.225 508.267C907.101 507.968 907.037 507.648 907.037 507.325C907.037 507.002 907.101 506.682 907.225 506.384C907.348 506.086 907.53 505.815 907.758 505.586Z"
            fill="#E65251"
          />
          <path
            d="M718.461 537.126C718.804 536.78 719.242 536.545 719.719 536.449C720.197 536.353 720.692 536.401 721.142 536.586C721.592 536.772 721.977 537.087 722.248 537.491C722.518 537.896 722.663 538.372 722.663 538.859C722.663 539.345 722.518 539.821 722.248 540.226C721.977 540.63 721.592 540.945 721.142 541.131C720.692 541.317 720.197 541.365 719.719 541.268C719.242 541.172 718.804 540.937 718.461 540.592C718.003 540.131 717.746 539.508 717.746 538.859C717.746 538.209 718.003 537.586 718.461 537.126Z"
            fill="#E65251"
          />
          <path
            d="M295.615 247.881C295.958 247.536 296.397 247.301 296.874 247.205C297.351 247.109 297.846 247.156 298.296 247.342C298.746 247.528 299.131 247.843 299.402 248.247C299.673 248.652 299.817 249.128 299.817 249.614C299.817 250.101 299.673 250.577 299.402 250.982C299.131 251.386 298.746 251.701 298.296 251.887C297.846 252.073 297.351 252.12 296.874 252.024C296.397 251.928 295.958 251.693 295.615 251.347C295.157 250.887 294.9 250.264 294.9 249.614C294.9 248.965 295.157 248.342 295.615 247.881Z"
            fill="#E65251"
          />
          <path
            d="M78.0452 221.05C78.3892 220.707 78.8272 220.473 79.304 220.378C79.7808 220.283 80.275 220.332 80.724 220.518C81.1731 220.705 81.5569 221.02 81.8269 221.424C82.0969 221.828 82.241 222.303 82.241 222.789C82.241 223.275 82.0969 223.75 81.8269 224.155C81.5569 224.559 81.1731 224.874 80.724 225.06C80.275 225.246 79.7808 225.295 79.304 225.2C78.8272 225.106 78.3892 224.872 78.0452 224.528C77.8167 224.3 77.6353 224.029 77.5116 223.731C77.3879 223.432 77.3242 223.112 77.3242 222.789C77.3242 222.466 77.3879 222.146 77.5116 221.848C77.6353 221.549 77.8167 221.278 78.0452 221.05Z"
            fill="#E65251"
          />
          <path
            d="M159.739 295.411C160.083 295.068 160.521 294.834 160.997 294.739C161.474 294.645 161.968 294.694 162.417 294.88C162.866 295.066 163.25 295.381 163.52 295.785C163.79 296.189 163.934 296.665 163.934 297.151C163.934 297.637 163.79 298.112 163.52 298.516C163.25 298.92 162.866 299.235 162.417 299.421C161.968 299.608 161.474 299.656 160.997 299.562C160.521 299.467 160.083 299.233 159.739 298.89C159.51 298.661 159.329 298.39 159.205 298.092C159.081 297.793 159.018 297.474 159.018 297.151C159.018 296.828 159.081 296.508 159.205 296.209C159.329 295.911 159.51 295.64 159.739 295.411Z"
            fill="#E65251"
          />
          <path
            d="M334.727 117.585C336.078 117.585 337.173 116.49 337.173 115.139C337.173 113.788 336.078 112.693 334.727 112.693C333.376 112.693 332.281 113.788 332.281 115.139C332.281 116.49 333.376 117.585 334.727 117.585Z"
            fill="#E65251"
          />
          <path
            d="M484.358 279.801C485.709 279.801 486.804 278.706 486.804 277.355C486.804 276.004 485.709 274.909 484.358 274.909C483.007 274.909 481.912 276.004 481.912 277.355C481.912 278.706 483.007 279.801 484.358 279.801Z"
            fill="#E65251"
          />
          <path
            d="M492.889 353.977C494.24 353.977 495.336 352.882 495.336 351.532C495.336 350.181 494.24 349.086 492.889 349.086C491.539 349.086 490.443 350.181 490.443 351.532C490.443 352.882 491.539 353.977 492.889 353.977Z"
            fill="#E65251"
          />
          <path
            d="M306.211 508.819C306.554 508.474 306.992 508.238 307.47 508.142C307.947 508.046 308.442 508.094 308.892 508.279C309.342 508.465 309.727 508.78 309.998 509.185C310.268 509.589 310.413 510.065 310.413 510.552C310.413 511.039 310.268 511.515 309.998 511.919C309.727 512.324 309.342 512.639 308.892 512.824C308.442 513.01 307.947 513.058 307.47 512.962C306.992 512.866 306.554 512.63 306.211 512.285C305.753 511.824 305.496 511.201 305.496 510.552C305.496 509.903 305.753 509.279 306.211 508.819Z"
            fill="#E65251"
          />
          <path
            d="M582.818 476.506C583.162 476.161 583.6 475.926 584.077 475.83C584.554 475.734 585.049 475.781 585.499 475.967C585.949 476.153 586.334 476.468 586.605 476.872C586.876 477.277 587.02 477.753 587.02 478.239C587.02 478.726 586.876 479.202 586.605 479.607C586.334 480.011 585.949 480.326 585.499 480.512C585.049 480.698 584.554 480.745 584.077 480.649C583.6 480.553 583.162 480.318 582.818 479.972C582.361 479.512 582.104 478.889 582.104 478.239C582.104 477.59 582.361 476.967 582.818 476.506Z"
            fill="#E65251"
          />
          <path
            d="M457.649 467.055C459 467.055 460.095 465.96 460.095 464.609C460.095 463.258 459 462.163 457.649 462.163C456.298 462.163 455.203 463.258 455.203 464.609C455.203 465.96 456.298 467.055 457.649 467.055Z"
            fill="#E65251"
          />
          <path
            d="M251.658 358.599C253.552 358.599 255.087 357.063 255.087 355.169C255.087 353.276 253.552 351.74 251.658 351.74C249.764 351.74 248.229 353.276 248.229 355.169C248.229 357.063 249.764 358.599 251.658 358.599Z"
            fill="#E65251"
          />
          <path
            d="M356.449 475.671C358.343 475.671 359.878 474.136 359.878 472.242C359.878 470.348 358.343 468.812 356.449 468.812C354.555 468.812 353.02 470.348 353.02 472.242C353.02 474.136 354.555 475.671 356.449 475.671Z"
            fill="#E65251"
          />
          <path
            d="M465.813 322.943C466.156 322.598 466.594 322.362 467.071 322.266C467.548 322.17 468.043 322.218 468.493 322.403C468.944 322.589 469.328 322.904 469.599 323.309C469.87 323.713 470.014 324.189 470.014 324.676C470.014 325.163 469.87 325.639 469.599 326.043C469.328 326.448 468.944 326.763 468.493 326.948C468.043 327.134 467.548 327.182 467.071 327.086C466.594 326.99 466.156 326.754 465.813 326.409C465.355 325.948 465.098 325.325 465.098 324.676C465.098 324.027 465.355 323.404 465.813 322.943Z"
            fill="#E65251"
          />
          <path
            d="M525.021 379.186C525.869 379.186 526.557 378.498 526.557 377.65C526.557 376.801 525.869 376.113 525.021 376.113C524.172 376.113 523.484 376.801 523.484 377.65C523.484 378.498 524.172 379.186 525.021 379.186Z"
            fill="#E65251"
          />
          <path
            d="M532.765 308.243C533.614 308.243 534.302 307.555 534.302 306.706C534.302 305.858 533.614 305.17 532.765 305.17C531.916 305.17 531.229 305.858 531.229 306.706C531.229 307.555 531.916 308.243 532.765 308.243Z"
            fill="#E65251"
          />
          <path
            d="M526.214 394.304C527.063 394.304 527.751 393.616 527.751 392.768C527.751 391.919 527.063 391.231 526.214 391.231C525.366 391.231 524.678 391.919 524.678 392.768C524.678 393.616 525.366 394.304 526.214 394.304Z"
            fill="#E65251"
          />
          <path
            d="M381.572 427.49C382.42 427.49 383.108 426.802 383.108 425.953C383.108 425.105 382.42 424.417 381.572 424.417C380.723 424.417 380.035 425.105 380.035 425.953C380.035 426.802 380.723 427.49 381.572 427.49Z"
            fill="#E65251"
          />
          <path
            d="M655.685 302.946C656.534 302.946 657.221 302.258 657.221 301.409C657.221 300.561 656.534 299.873 655.685 299.873C654.836 299.873 654.148 300.561 654.148 301.409C654.148 302.258 654.836 302.946 655.685 302.946Z"
            fill="#E65251"
          />
          <path
            d="M750.064 347.88C750.912 347.88 751.6 347.193 751.6 346.344C751.6 345.495 750.912 344.808 750.064 344.808C749.215 344.808 748.527 345.495 748.527 346.344C748.527 347.193 749.215 347.88 750.064 347.88Z"
            fill="#E65251"
          />
          <path
            d="M605.287 513.809C606.135 513.809 606.823 513.121 606.823 512.273C606.823 511.424 606.135 510.736 605.287 510.736C604.438 510.736 603.75 511.424 603.75 512.273C603.75 513.121 604.438 513.809 605.287 513.809Z"
            fill="#E65251"
          />
          <path
            d="M231.473 145.854C232.824 145.854 233.92 144.759 233.92 143.408C233.92 142.057 232.824 140.962 231.473 140.962C230.123 140.962 229.027 142.057 229.027 143.408C229.027 144.759 230.123 145.854 231.473 145.854Z"
            fill="#E65251"
          />
          <path
            d="M29.2716 166.146L178.005 220.841L150.348 342.522L1 297.66"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M532.631 306.879L492.891 351.532L525.255 378.167L484.692 276.152L467.483 325.315L381.439 426.102L252.373 356.043L178.006 220.842L334.729 115.14"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M252.373 356.042L200.746 390.457L307.687 510.908L252.373 356.042Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M200.745 390.458L150.348 342.523L252.371 356.043L297.852 250.34L334.728 115.14"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M307.688 510.908L356.856 471.577L363.407 559.654L307.688 510.908Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60.2109 316.293L79.6692 222.992L160.797 297.045L252.372 356.042L356.854 471.577L457.649 464.608L588.768 586.695"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M122.102 69.625L178.006 220.841L297.853 250.339"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M160.797 297.046L297.853 250.34"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M307.685 510.909L256.059 567.448L111.32 717.09"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M655.955 301.544L682.592 336.377L714.957 346.615L750.198 345.792L584.661 478.534L588.767 586.695L419.543 555.156L356.853 471.578L381.437 426.101L297.852 250.34L467.481 325.315"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M584.663 478.534L457.649 464.608L419.544 555.156L363.406 559.655"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M682.607 337.434C683.455 337.434 684.143 336.746 684.143 335.898C684.143 335.049 683.455 334.361 682.607 334.361C681.758 334.361 681.07 335.049 681.07 335.898C681.07 336.746 681.758 337.434 682.607 337.434Z"
            fill="#E65251"
          />
          <path
            d="M715.302 347.598C716.151 347.598 716.839 346.91 716.839 346.062C716.839 345.213 716.151 344.525 715.302 344.525C714.454 344.525 713.766 345.213 713.766 346.062C713.766 346.91 714.454 347.598 715.302 347.598Z"
            fill="#E65251"
          />
          <path
            d="M694.712 297.181C695.561 297.181 696.249 296.493 696.249 295.645C696.249 294.796 695.561 294.108 694.712 294.108C693.864 294.108 693.176 294.796 693.176 295.645C693.176 296.493 693.864 297.181 694.712 297.181Z"
            fill="#E65251"
          />
          <path
            d="M627.279 369.254C628.127 369.254 628.815 368.567 628.815 367.718C628.815 366.869 628.127 366.182 627.279 366.182C626.43 366.182 625.742 366.869 625.742 367.718C625.742 368.567 626.43 369.254 627.279 369.254Z"
            fill="#E65251"
          />
          <path
            d="M569.642 453.583C570.491 453.583 571.178 452.896 571.178 452.047C571.178 451.199 570.491 450.511 569.642 450.511C568.793 450.511 568.105 451.199 568.105 452.047C568.105 452.896 568.793 453.583 569.642 453.583Z"
            fill="#E65251"
          />
          <path
            d="M569.506 451.912L457.648 464.609L605.153 512.138L569.506 451.912Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M750.198 345.792L720.697 538.871L787.074 506.398L750.198 345.792Z"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M694.883 295.816L627.277 367.719L584.66 478.534L720.696 538.871L812.886 440.85L750.197 345.792L909.17 507.221"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M787.074 506.397L762.49 651.431L917.37 601.862"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M785.981 505.304C786.197 505.085 786.473 504.935 786.774 504.874C787.075 504.813 787.388 504.842 787.672 504.959C787.956 505.075 788.199 505.274 788.37 505.529C788.541 505.784 788.633 506.084 788.633 506.391C788.633 506.699 788.541 506.999 788.37 507.254C788.199 507.509 787.956 507.708 787.672 507.824C787.388 507.941 787.075 507.97 786.774 507.909C786.473 507.847 786.197 507.698 785.981 507.479C785.695 507.189 785.535 506.799 785.535 506.391C785.535 505.984 785.695 505.594 785.981 505.304Z"
            fill="#E65251"
          />
          <path
            d="M934.578 469.525L909.171 507.222L917.37 601.862L787.074 506.398L909.171 507.222L1087 531.804"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M933.485 468.431C933.701 468.212 933.977 468.062 934.278 468.001C934.579 467.94 934.892 467.969 935.176 468.086C935.46 468.202 935.703 468.401 935.874 468.656C936.045 468.911 936.137 469.211 936.137 469.518C936.137 469.826 936.045 470.126 935.874 470.381C935.703 470.636 935.46 470.835 935.176 470.951C934.892 471.068 934.579 471.097 934.278 471.036C933.977 470.974 933.701 470.825 933.485 470.606C933.199 470.316 933.039 469.926 933.039 469.518C933.039 469.111 933.199 468.72 933.485 468.431Z"
            fill="#E65251"
          />
          <path
            d="M926.934 409.435C927.149 409.22 927.423 409.074 927.721 409.015C928.019 408.956 928.327 408.987 928.608 409.103C928.888 409.22 929.128 409.417 929.297 409.669C929.465 409.922 929.555 410.219 929.555 410.522C929.555 410.826 929.465 411.123 929.297 411.376C929.128 411.628 928.888 411.825 928.608 411.942C928.327 412.058 928.019 412.089 927.721 412.03C927.423 411.971 927.149 411.825 926.934 411.61C926.791 411.467 926.677 411.298 926.6 411.111C926.522 410.925 926.482 410.725 926.482 410.522C926.482 410.32 926.522 410.12 926.6 409.934C926.677 409.747 926.791 409.577 926.934 409.435Z"
            fill="#E65251"
          />
          <path
            d="M866.888 434.865C867.737 434.865 868.425 434.177 868.425 433.328C868.425 432.48 867.737 431.792 866.888 431.792C866.039 431.792 865.352 432.48 865.352 433.328C865.352 434.177 866.039 434.865 866.888 434.865Z"
            fill="#E65251"
          />
          <path
            d="M588.695 588.17C589.543 588.17 590.231 587.483 590.231 586.634C590.231 585.786 589.543 585.098 588.695 585.098C587.846 585.098 587.158 585.786 587.158 586.634C587.158 587.483 587.846 588.17 588.695 588.17Z"
            fill="#E65251"
          />
          <path
            d="M457.648 464.608L526.483 392.915L381.438 426.101"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M934.578 469.525L866.566 433.476L928.027 410.528"
            stroke="#E65251"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M363.554 560.921C364.403 560.921 365.091 560.234 365.091 559.385C365.091 558.536 364.403 557.849 363.554 557.849C362.705 557.849 362.018 558.536 362.018 559.385C362.018 560.234 362.705 560.921 363.554 560.921Z"
            fill="#E65251"
          />
          <path
            d="M256.501 569.119C257.35 569.119 258.038 568.431 258.038 567.582C258.038 566.734 257.35 566.046 256.501 566.046C255.653 566.046 254.965 566.734 254.965 567.582C254.965 568.431 255.653 569.119 256.501 569.119Z"
            fill="#E65251"
          />
        </svg>
        <Image
          className="absolute top-0 -z-30 object-cover"
          src={"/auth/bgCrystal.png"}
          alt="bgCrystal"
          fill={true}
        />
      </div>
    </div>
  );
}
