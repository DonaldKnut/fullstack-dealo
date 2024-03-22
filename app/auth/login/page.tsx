import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";
// import "./page.css";

export default function LoginPage() {
  return (
    <div className="auth_page">
      <LoginForm />
      {/* <video
        src="/Office Timelapse.mp4"
        autoPlay
        muted
        loop
        className="video"
      ></video> */}
    </div>
  );
}
