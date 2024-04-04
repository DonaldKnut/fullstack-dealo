"use client";
import { Button } from "@/components/ui/button";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from "next/image";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Reveal } from "@/components/utils/reveal";
import "./page.css";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: user } = useSession();
  const userName = user?.user?.name || "Guest";

  return (
    <main className="ai_wrapper">
      <div className="ai_first_wrap">
        <div className="user_icon">
          <h1 className="text-white text-2xl">
            Welcome <span className="text-green-400">{userName}</span>
          </h1>
        </div>
        <h1 className="text-3xl text-white">
          Empower yourself using Dealo's Artificial Intelligence to study online
        </h1>
        <Reveal>
          <p className="mt-4 text-white">
            Dealo's Artificial Intelligence is revolutionizing the online
            learning experiences, offering tools designed to empower and enhance
            your educational journey. let's explore how you can leverage Dealo's
            AI to supercharge your online learning sessions.
          </p>
        </Reveal>
        <Reveal>
          <Link href="/learn">
            <Button variant="secondary" className="mt-5 mb-5">
              Start Learning{" "}
              <IoIosArrowDroprightCircle className="text-green-700 text-2xl" />
            </Button>
          </Link>
        </Reveal>
        <Reveal>
          <div className="socials_mother_wrapper_container flex gap-2 text-2xl text-green-300">
            <FaSquareXTwitter className="cursor-pointer hover:text-green-700" />
            <FaLinkedin />
            <PiInstagramLogoFill />
          </div>
        </Reveal>
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712183869/v3sgysq20ylde6bsxlvq.png"
          alt="AI image"
          width="270"
          height={270}
          className="ai_image mt-5"
        />
      </div>
    </main>
  );
}
