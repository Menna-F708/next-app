import { Bookmark } from "lucide-react";
import Image from "next/image";
import Completedlessons from "../component/layout/Dashbordcontent";

const boxes = [
  {
    label: "Science",
    color: "bg-[#E5D0FF]",
    text: "Neura the Brainy Explorer",
    topic: "Topic: Neural Network of the Brain",
    duration: "45 mins duration",
  },
  {
    label: "Maths",
    color: "bg-[#FFDA6E]",
    text: "Countsy the Number Wizard",
    topic: "Topic: Derivatives & Integrals",
    duration: "30 mins duration",
  },
  {
    label: "Language",
    color: "bg-[#BDE7FF]",
    text: "Verba the Vocabulary Builder",
    topic: "Topic: English Literature",
    duration: "30 mins duration",
  },
  
];

export default function Dashbordhome() {
  return (
    <div className="w-full min-h-screen bg-[#F9F9F9] py-6 sm:py-8">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 xl:px-0 flex flex-col gap-5 sm:gap-[30px]">
        <h2 className="w-fit font-bricolage font-bold text-[24px] leading-[30px] sm:text-[30px] sm:leading-[36px] tracking-normal">
          Dashboard
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[26px]">
          {boxes.map((box) => (
            <div
              key={box.label}
              className={`min-w-0 flex flex-col gap-4 border border-black p-4 sm:p-6 rounded-[20px] sm:rounded-[30px] ${box.color}`}
            >
              {/* Head */}
              <div className="w-full flex justify-between">
                <div className="w-fit h-8 rounded-[10px] bg-[#151312] text-white text-[14px] leading-[20px] py-1.5 px-[14px] flex items-center justify-center">
                  {box.label}
                </div>
                <button className="border-none bg-[#151312] w-8 h-8 shrink-0 rounded-[10px] p-1.5 flex items-center justify-center">
                  <Bookmark size={20} className="text-white" />
                </button>
              </div>

              {/* Title + Sub */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-bricolage font-bold text-[24px] leading-[26px] sm:text-[20px] sm:leading-[30px] tracking-normal break-words">
                  {box.text}
                </h3>
                <p className="font-bricolage font-normal text-[18px] leading-[20px] sm:text-[16px] lg:text-[18px] tracking-normal text-[#111111] break-words">
                  {box.topic}
                </p>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1">
                <Image
                  src="/assets/duration-icon.png"
                  width={18}
                  height={18}
                  alt="duration"
                />
                <p className="font-bricolage font-normal text-[16px] sm:text-[16px] leading-[20px] tracking-normal">
                  {box.duration}
                </p>
              </div>

              {/* Button */}
              <button className="w-full h-11 rounded-[16px] py-3 px-2.5 flex items-center justify-center gap-2.5 bg-[#FE5933] text-white font-bricolage font-medium text-[16px] leading-[20px] tracking-normal">
                Launch Lesson
              </button>
            </div>
          ))}
        </div>
        <Completedlessons />
      </div>
    </div>
  );
} 