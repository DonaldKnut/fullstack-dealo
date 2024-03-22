"use client";
import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <>
      <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-r from-green-700 to-gray-600 rounded-2xl">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default ProtectedLayout;
