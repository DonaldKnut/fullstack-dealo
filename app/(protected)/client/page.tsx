"use client";
import React from "react";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

type Props = {};

const ClientPage = () => {
  const user = useCurrentUser();
  return (
    <div>
      <UserInfo label="Client component" user={user} />
    </div>
  );
};

export default ClientPage;
