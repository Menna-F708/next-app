"use client";
import { useRouter } from "next/navigation";

export default function Continuebutton() {
  const router = useRouter();
  const continuToHomeBtn = () => {
    router.push("/home");
  };
  return (
    <div>
      <button
        className="flex justify-center items-center w-full sm:w-[340px] h-11 rounded-[14px] pt-[12px] pr-2.5 pb-3 pl-2.5 gap-2.5 bg-[#FE5933] text-[#FFFFFF]"
        onClick={continuToHomeBtn}
      >
        Continue
      </button>
    </div>
  );
}
