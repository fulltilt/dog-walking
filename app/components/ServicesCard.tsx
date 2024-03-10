import { Button } from "@/components/ui/button";
import Image from "next/image";

type CardProps = {
  img: string;
  title: string;
  desc: string;
  // onClick: () => void;
};

const ServicesCard = ({ img, title, desc }: CardProps) => {
  return (
    <div>
      <div className="space-y-3 text-center drop-shadow-2xl cursor-pointer">
        <Image
          className="mx-auto rounded"
          src={img}
          width={300}
          height={300}
          alt={title}
        />
        <div className="uppercase font-bold text-2xl">{title}</div>
        <div className="mt-4">
          <a
            href={void 0}
            className="text-white bg-thirdary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          >
            Schedule
          </a>
        </div>
      </div>
      <p className="text-gray-700 text-[14px] mt-3">{desc}</p>
    </div>
  );
};

export default ServicesCard;
