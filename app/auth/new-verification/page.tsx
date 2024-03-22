"use client";
import { BackButton } from "@/components/auth/back-button";
import { EmailHeader } from "@/components/auth/email-header";
import { Card, CardFooter, CardHeader } from "@/components/ui/Card";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

type Props = {};

const Page = (props: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success ?? undefined); // Ensure that success is not undefined
        setError(data.error ?? undefined); // Ensure that error is not undefined
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <Card className="w-[400px] shaadow-md">
      <CardHeader>
        <EmailHeader label="Confirming your verification" />
      </CardHeader>
      {!success && !error && <Loader />}
      <FormSuccess message={success || ""} />
      <FormError message={error || ""} />
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default Page;
