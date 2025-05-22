"use client";

import Wrapper from "@/app/utils/wrapper";
import { TbError404 } from "react-icons/tb";
import Link from "next/link";

export default function Soon() {
  return (
    <Wrapper>
      <section className="flex h-screen w-full flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <TbError404 className="text-[80px]" />
        </div>

        <Link href="/">
          <button className="h-[50px] w-[180px] cursor-pointer rounded-xl bg-[#F53838] font-medium text-white shadow-2xl shadow-[#F5383880] transition-all duration-300 hover:scale-95 hover:shadow active:scale-90">
            Home
          </button>
        </Link>
      </section>
    </Wrapper>
  );
}
