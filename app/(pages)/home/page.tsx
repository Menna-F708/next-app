import Navbar from '../../component/Navbar'
import Link from "next/link";
import Image from "next/image";
import Dashbordhome from "../../component/Boxs";
export default function page() {
  return (
    <div>
      <Navbar className="flex items-center gap-3 sm:gap-6 lg:gap-9 mr-4 sm:mr-10 lg:mr-20 text-[13px] sm:text-[15px] lg:text-[18px]">
        <Link href="/">Home</Link>
        <Link href="/companions">Learning Companions</Link>
        <Link href="/Journey">My Journey</Link>
        <div className="flex flex-row justify-between items-center gap-[10px] bg-white h-[70px] sm:h-[80px] lg:h-[90px] px-4 sm:px-8 lg:px-0">
          <Image src="/assets/image.png" width={36} height={36} alt="person" />
          <button>
            <Image
              src="/assets/Frame.jpg"
              width={24}
              height={24}
              alt="out"
            />
          </button>
        </div>
      </Navbar>


      <Dashbordhome/>
     </div>
  );
}
 