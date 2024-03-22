"use client";

import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonPrps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonPrps) => {
  return (
    <Button
      variant="link"
      className="font-normal w-full text-green-400"
      size="sm"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
