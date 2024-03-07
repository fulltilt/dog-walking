import Link from "next/link";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-20" id="contact">
      <Image
        src="/background-top.svg"
        width={0}
        height={0}
        alt="background-top"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="text-white grid grid-cols-3 gap-8 bg-thirdary">
        <div className="space-y-4 max-w-70 pb-20 pl-12">
          <h2 className="text-xl font-bold">About Me</h2>
          <p className="leading-[1.8]">
            Hi guys! My name is Brenda, I have been taking care of dogs for 5
            years now. I have always had dogs around me growing up and my future
            dream is to live on a farm with lots of animals. That’s where my
            love for animals came!{" "}
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Contact</h2>
          <Link href="tel:9253413780">
            <div className="flex gap-2 mt-2">
              <IoIosPhonePortrait className="mt-1" />
              <span>(925) 341-3780</span>
            </div>
          </Link>

          <Link href="mailto:brenda.bk839@gmail.com">
            <div className="flex gap-2 mt-2">
              <MdOutlineEmail className="mt-1" />
              <span>brenda.bk839@gmail.com</span>
            </div>
          </Link>

          <Link href="https://t.snapchat.com/ojg8X3Tg">
            <div className="flex gap-2 mt-2">
              <FaSnapchat className="mt-1" />
              <span>Snapchat</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
