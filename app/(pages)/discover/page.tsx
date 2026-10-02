import Navbar from "../../component/Navbar";
import Link from "next/link";
import Image from "next/image";
import Boxs from "../../component/Boxs";
import { Search, ChevronDown } from "lucide-react";

export default function page() {
  return (
    <div>
      <Navbar className="flex items-center gap-3 sm:gap-6 lg:gap-9 mr-4 sm:mr-10 lg:mr-20 text-[13px] sm:text-[15px] lg:text-[18px]">
        <Link href="/home">Home</Link>
        <Link href="/discover" className="text-[#FE5933]">
          Learning Companions
        </Link>
        <Link href="/Journey">My Journey</Link>
        <div className="flex flex-row justify-between items-center gap-[10px] bg-white h-[70px] sm:h-[80px] lg:h-[90px] px-4 sm:px-8 lg:px-0">
          <Image src="/assets/image.png" width={36} height={36} alt="person" />
          <button>
            <Image src="/assets/Frame.jpg" width={24} height={24} alt="out" />
          </button>
        </div>
      </Navbar>

      <main className="bg-[#F9F9F9] min-h-screen pb-10">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 xl:px-0 pt-8 sm:pt-12">
          {/* Header: العنوان + البحث */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-5">
            <h1 className="font-bricolage font-bold text-[24px] leading-[30px] sm:text-[30px] sm:leading-[36px] tracking-normal">
              Companion Library
            </h1>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full lg:w-auto lg:max-w-[516px]">
              <div className="flex items-center gap-2 w-full sm:flex-1 lg:flex-none lg:w-[325px] h-12 rounded-[10px] border-[0.8px] border-[#000000] py-2.5 px-[18px] bg-white">
                <Search size={24} className="text-[#111111] shrink-0" />
                <input
                  type="text"
                  placeholder="Search your companions...."
                  className="flex-1 min-w-0 bg-transparent outline-none font-bricolage font-normal text-[16px] leading-[22px] tracking-normal placeholder:text-[#808080]"
                />
              </div>

              <div className="relative w-full sm:w-[171px] shrink-0">
                <select
                  defaultValue=""
                  className="appearance-none w-full h-12 rounded-[10px] border-[0.8px] border-[#000000] py-2.5 pl-[18px] pr-[44px] bg-white outline-none cursor-pointer font-bricolage font-normal text-[16px] leading-[22px] tracking-normal text-[#808080]"
                >
                  <option value="" disabled>
                    Select subject
                  </option>
                  <option value="science">Science</option>
                  <option value="maths">Maths</option>
                  <option value="language">Language</option>
                  <option value="coding">Coding</option>
                  <option value="history">History</option>
                </select>

                <ChevronDown
                  size={20}
                  strokeWidth={1.5}
                  className="absolute right-[18px] top-1/2 -translate-y-1/2 text-[#000000] pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        <Boxs />
      </main>
    </div>
  );
}