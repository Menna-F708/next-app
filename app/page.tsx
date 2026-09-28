import Link from "next/link";
import Navbar from "./component/Navbar";
import Modal from "./component/Modal";
import "./component/signin.css";

export default function Home() {
  return (
    <div>
      <Navbar className="flex items-center gap-3 sm:gap-6 lg:gap-9 mr-4 sm:mr-10 lg:mr-20 text-[13px] sm:text-[15px] lg:text-[18px]">
        <Link href="/">Home</Link>
        <Link href="/companions">Learning Companions</Link>
        <button className="signin-btn">Sign in</button>
      </Navbar>

      <Modal />
    </div>
  );
}
