import * as React from "react";
import Image from "next/image";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

interface EmailTemplateProps {
  confirmLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  confirmLink,
}) => (
  <div>
    <div className="flex justify-center items-center">
      <Image
        src={require("../public/DEALO_ICON_white.png")}
        alt="dealo logo"
        width={40}
        height={40}
      />
      <div></div>
    </div>
    <hr className="m-4" />
    <h5>Welcome to Dealo</h5>
    <p>its your time to Win Business Deals</p>
    <a href={confirmLink}>Start Now</a>
    <Image src="/major_image3.png" alt="dealo logo" width={140} height={140} />
    <div>
      <p>
        Explore the platform that gives you the freedom to build and design your
        life in the way that your value increases!
      </p>
    </div>
    <a href={confirmLink}>Start Now</a>
    <h6>stay up to date with the latest news and features.</h6>
    <div>
      <a href="#">
        <TiSocialLinkedinCircular />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaSquareXTwitter />
      </a>
    </div>
  </div>
);
