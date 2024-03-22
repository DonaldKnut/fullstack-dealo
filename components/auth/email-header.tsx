import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const EmailHeader = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      {/* <h1 className={cn("text-3xl font-semibold", font.className)}>Dealo</h1> */}
      <Image src="/mail open.png" alt="" height={100} width={100} />
      <p className="text-muted-foreground text-sm text-black text-center">
        {label}
      </p>
    </div>
  );
};
