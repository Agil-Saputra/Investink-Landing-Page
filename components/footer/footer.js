import logo from "../../icon/investink-logo.svg";
import facebook from "../../icon/social/facebook.svg";
import instagram from "../../icon/social/instagram.svg";
import twitter from "../../icon/social/twitter.svg";

import Image from "next/image";

export default function footer({data}) {
  const social = [facebook, instagram, twitter];
  const navMenus = ["Home", "About", "Pricing", "Service"];
  const menus = [
    "Start investment",
    "Special offers",
    "Help center",
    "Testimonials",
  ];

  const {email, phoneNum} = data[0].fields

  return (
    <footer className="flex max-lg:flex-col gap-10 items-start justify-between mx-24 border-b-[1px] border-black py-10 mt-28">

      <div>
        <Image
          src={logo}
          width={170}
          height={40}
          alt="Investink Logo"
          priority={true}
        />
        <p className="paraf mt-[35px] mb-8">
          Better way of investing with trusted<br/> security for your promising
          future
        </p>
        <div className="flex-center gap-2">
          {social.map((icon, i) => {
            return (
              <Image
                src={icon}
                width={34}
                height={34}
                alt="Social Media Logo"
                priority={true}
                key={i}
              />
            );
          })}
        </div>
      </div>

      <div className="grid gap-20 grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <p className="title">Information</p>
          <ul>
            {navMenus.map((item) => (
              <li key={item} className="paraf hover:text-slate-400 smooth">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="title">Special Link</p>
          <ul>
            {menus.map((item) => (
              <li key={item} className="paraf hover:text-slate-400 smooth">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="title">Get In Touch</p>
          <ul>
            <li className="paraf"><a href="#">{email}</a></li>
            <li className="paraf"><a href="#">{phoneNum}</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
}
