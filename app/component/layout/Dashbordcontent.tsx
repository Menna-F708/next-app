import Image from "next/image";
import { Plus } from "lucide-react";

export default function Dashbordcontent() {
  const lessons = [
    {
      title: "Neura the Brainy Explorer",
      topic: "Topic: Neural Networks of the Brain",
      subject: "Science",
      duration: "45 mins",
      bg: "bg-[#E5D0FF]",
      icon: "/assets/icon.png",
    },
    {
      title: "Algebrina, the Eq Queen",
      topic: "Topic: Solving Linear Equations",
      subject: "Maths",
      duration: "20 mins",
      bg: "bg-[#FFDA6E]",
      icon: "/assets/icon3.png",
    },
    {
      title: "Luna, Your Grammar Guide",
      topic: "Topic: Mastering Tenses in English",
      subject: "Language",
      duration: "32 mins",
      bg: "bg-[#BDE7FF]",
      icon: "/assets/icon.png",
    },
    {
      title: "Codey, the Logic Hacker",
      topic: "Topic: Intro to If-Else Statements",
      subject: "Coding",
      duration: "30 mins",
      bg: "bg-[#FFC8E4]",
      icon: "/assets/programming.png",
    },
    {
      title: "Memo, the Memory Keeper",
      topic: "Topic: World Wars: Causes & Effects",
      subject: "History",
      duration: "15 mins",
      bg: "bg-[#FFECC8]",
      icon: "/assets/icon1.png",
    },
  ];

  return (
    <div className="w-full flex flex-col xl:flex-row gap-5">
      {/* Recently completed lessons */}
      <div className="w-full min-w-0 xl:flex-1 xl:max-w-[846px] rounded-[20px] sm:rounded-[30px] border border-black bg-white px-4 pt-5 pb-5 sm:px-[30px] sm:pt-[30px] sm:pb-10">
        <h2 className="font-bricolage font-bold text-[24px] leading-[30px] sm:text-[30px] sm:leading-[36px]">
          Recently completed lessons
        </h2>

        {/* Header: مخفي على الموبايل */}
        <div className="hidden md:grid md:grid-cols-[1fr_120px_90px] xl:grid-cols-[1fr_140px_100px] gap-4 mt-6 text-[14px] lg:text-[18px]">
          <span>Lessons</span>
          <span>Subject</span>
          <span className="text-right">Duration</span>
        </div>

        {/* Rows */}
        {lessons.map((lesson) => (
          <div
            key={lesson.title}
            className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_120px_90px] xl:grid-cols-[1fr_140px_100px] items-center gap-x-4 gap-y-3 py-3 sm:py-4"
          >
            {/* Lesson: أيقونة + نص */}
            <div className="col-span-2 md:col-span-1 flex items-center gap-3 sm:gap-4 min-w-0">
              <div
                className={`w-14 h-14 sm:w-18 sm:h-18 shrink-0 rounded-[10px] flex items-center justify-center ${lesson.bg}`}
              >
                <Image
                  src={lesson.icon}
                  width={40}
                  height={40}
                  alt={lesson.subject}
                  className="w-7 h-7 sm:w-10 sm:h-10"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold break-words text-[18px] leading-[24px] sm:text-[24px] sm:leading-[30px]">
                  {lesson.title}
                </h3>
                <p className="break-words text-[14px] sm:text-[18px] text-[#111111]">
                  {lesson.topic}
                </p>
              </div>
            </div>

            {/* Subject badge */}
            <span className="w-fit h-8 rounded-[40px] bg-[#151312] text-[#FFFFFF] text-[14px] px-[14px] flex items-center whitespace-nowrap">
              {lesson.subject}
            </span>

            {/* Duration */}
            <span className="text-right whitespace-nowrap text-[16px] md:text-[18px] xl:text-[24px] text-[#000000]">
              {lesson.duration}
            </span>
          </div>
        ))}
      </div>

      {/* Build a Personalized Learning Companion */}
      <div className="w-full xl:w-[410px] xl:h-[579px] shrink-0 text-center bg-[#2C2C2C] border border-[#000000] rounded-[20px] sm:rounded-[30px] py-6 px-4 sm:py-9 sm:px-6 flex flex-col gap-5 xl:gap-2.5">
        <div className="flex flex-col gap-[18px]">
          <div className="flex justify-center">
            <div className="bg-[#FCCC41] font-bricolage font-medium text-[14px] leading-[20px] tracking-normal w-[188px] h-8 rounded-[10px] py-1.5 px-[14px] flex items-center justify-center gap-2.5">
              Start learning your way.
            </div>
          </div>
          <h3 className="text-[#FFFFFF] font-bricolage font-bold text-[24px] leading-[30px] sm:text-[30px] sm:leading-[36px] tracking-normal">
            Build a Personalize Learning Companion
          </h3>
          <p className="font-bricolage font-normal text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] text-[#F9F9F9] tracking-normal">
            Pick a name, subject, voice, & personality — and start learning
            through voice conversations that feel natural and fun.
          </p>
        </div>

        <Image
          src="/assets/Frame1000004489.png"
          width={362}
          height={232}
          alt="frame"
          className="w-full max-w-[362px] h-auto mx-auto"
        />

        <button className="bg-[#FE5933] text-[16px] text-[#FFFFFF] w-full max-w-[362px] mx-auto h-11 rounded-[14px] py-3 px-2.5 flex items-center justify-center gap-2.5">
          <Plus size={18} className="text-[#FFFFFF]" />
          Build New Companion
        </button>
      </div>
    </div>
  );
}