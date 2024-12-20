import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

function BackButton({ href }) {
  return (
    <div>
      <Link href={href}>
        <button
          className={`    bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2  absolute top-5 left-7  flex p-10  pl-3 pr-6 items-center  gap-4 focus:ring-blue-400 focus:ring-opacity-50 `}
        >
          <IoMdArrowBack className="    text-[20px] font-bold" />

          <span>Back</span>
        </button>
      </Link>
    </div>
  );
}

export default BackButton;
