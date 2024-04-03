import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LoginButton } from "@/components/auth/login-button";
import { PiArrowCircleRightDuotone } from "react-icons/pi";
export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top, _var(-tw-gradient-stops))] from-sky-800 to-blue-800">
        <div className="space-y-6">
          <Image
            src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712158671/puevcwnrnfkndzghmkx6.png"
            className="mx-auto my-4"
            width={60}
            height={60}
            alt="lock icon"
          />
          <div className="text-6xl font-semibold text-black drop-shadow-md">
            <Image
              src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712158494/uir9zzsq1tpqm39i2qr5.png"
              alt="dealo icon"
              width={190}
              height={190}
            />
          </div>
        </div>
        <h2 className="m-6 text-center drop-shadow-md text-white">
          A Multinational Business and Freelancing Platform
        </h2>
        <p className="text-center w-full sm:w-3/6 mt-3 mb-3 text-green-300 font-sans">
          All credentials must be kept secured, This is a business platform
          where business deals take place, Users are responsible for the
          management of their credentials.
        </p>
        <LoginButton
        // mode="modal"
        // asChild
        >
          <Button size="lg" variant="secondary" className="flex gap-2 w-full">
            Sign in{" "}
            <PiArrowCircleRightDuotone className="text-2xl text-green-700" />
          </Button>
        </LoginButton>
      </main>
    </>
  );
}
