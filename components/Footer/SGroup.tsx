import Logo from "../Icons/Logo";
import { SocialIcon } from "react-social-icons";

export default function SGroup() {
  return (
    <>
      <div className="flex flex-col justify-center items-start gap-y-4">
        <Logo />
        <p className="text-primary w-72">
          Best information about the company gies here but now lorem ipsum is
        </p>
        <div className="flex gap-x-4">
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url="www.facebook.com"
            bgColor="#BDC4CD"
            fgColor="white"
          />
          <SocialIcon
            url="www.twiter.com"
            style={{ height: 30, width: 30 }}
            bgColor="#BDC4CD"
            fgColor="white"
          />
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url="www.linkedin.com"
            bgColor="#BDC4CD"
            fgColor="white"
          />
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url="www.instagram.com"
            bgColor="#BDC4CD"
            fgColor="white"
          />
          <SocialIcon
            url="www.youtube.com"
            style={{ height: 30, width: 30 }}
            bgColor="#BDC4CD"
            fgColor="white"
          />
        </div>
      </div>
    </>
  );
}
