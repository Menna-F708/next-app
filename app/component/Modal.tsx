import Image from "next/image";

function Modal() {
  return (
    <div className="w-full h-screen bg-[#F9F9F9] flex items-center justify-center px-4 sm:px-0">
      {/* Modal */}
      <div className="flex flex-col items-center justify-center border-2 border-black rounded-[20px] sm:rounded-[30px] bg-white w-full max-w-[400px] mx-auto px-5 sm:px-[30px] py-6 sm:py-9 gap-5 sm:gap-7">
        {/* Logo and Welcome */}
        <div className="flex justify-center items-center flex-col w-full sm:w-[340px] h-auto sm:h-[112px] gap-[7px] opacity-100">
          <Image
            src="/assets/ChatGPT Image May 11, 2025, 11_21_54 AM 2.png"
            width={50}
            height={48}
            alt="Converso"
          />
          <h5 className="font-bold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] tracking-normal text-center">
            Sign in to Converso
          </h5>
          <p className="font-bricolage font-normal text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] tracking-normal text-center align-middle text-[#111111]">
            Welcome back! Please sign in to continue
          </p>
        </div>

        {/* Continue and Or*/}
        <div className="w-full sm:w-[340px] h-auto sm:h-10 flex flex-col gap-3 opacity-100">
          <button className="w-full sm:w-[340px] h-10 rounded-lg border border-[#E5E5E5] bg-white pt-2 pr-2.5 pb-2 pl-2.5 flex items-center justify-center gap-2 shadow-[0px_1px_2px_0px_#0000001C]">
            <Image
              src="/assets/flat-color-icons_google.png"
              width={16}
              height={16}
              alt="Google"
            />
            Continue with Google
          </button>
        </div>

        {/* or */}
        <div className="w-full sm:w-[340px] h-[10px] flex items-center gap-[10px] opacity-100">
          <div className="flex-1 h-px bg-[#E5E5E5]"></div>
          <span className="text-sm text-[#111111]">or</span>
          <div className="flex-1 h-px bg-[#E5E5E5]"></div>
        </div>

        {/* Input and Button */}
        <div className="w-full sm:w-[340px] h-auto sm:h-[126px] flex flex-col gap-[18px] opacity-100">
          <label className="font-bricolage font-normal text-[14px] leading-[20px] tracking-normal align-middle">
            Email Address
          </label>
          <input
            type="email"
            className="w-full sm:w-[340px] h-9 rounded-lg border border-[#E5E5E5] pt-[14px] pr-2.5 pb-[14px] pl-2.5"
          />
          <button className="flex justify-center items-center w-full sm:w-[340px] h-11 rounded-[14px] pt-[12px] pr-2.5 pb-3 pl-2.5 gap-2.5 bg-[#FE5933] text-[#FFFFFF]">
            Continue
          </button>
        </div>

        <p className="font-bricolage font-normal text-[14px] leading-[20px] tracking-normal text-center align-middle text-[#111111]">
          Don’t have an account?
          <span className="font-bricolage font-semibold text-[14px] leading-[20px] tracking-normal text-center ml-1 text-[#FE5933]">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Modal;