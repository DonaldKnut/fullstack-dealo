"use client";
import Link from "next/link";
import { useCurrentRole } from "@/hooks/use-current-role";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { admin } from "@/actions/admin";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { UserRole } from "@prisma/client";

const AdminPage = () => {
  const userRole = useCurrentRole();

  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  };

  const onApiClick = () => {
    fetch("/api/education").then((response) => {
      if (response.ok) {
        toast.success("ALLOWED API Route!");
      } else {
        toast.error("FORBIDDEN API Route!");
      }
    });
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>
        <p className="flex items-center">
          <TbInfoSquareRoundedFilled className="gap-2 text-xl mr-2" />
          Only the admin can access these links
        </p>
        {userRole === UserRole.ADMIN && (
          <>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
              <p className="text-sm font-medium">Education</p>
              <Link href="/learn">
                <Button>Open</Button>
              </Link>
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
              <p className="text-sm font-medium">Medicine</p>
              <Button onClick={onServerActionClick}>Open</Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminPage;
