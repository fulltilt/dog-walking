import Image from "next/image";

type CardProps = {
  img: string;
  title: string;
  desc: string;
  onClick: () => void;
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
        <div className="flex gap-2 w-fit mx-auto mt-2">
          <div className="bg-thirdary w-[7px] h-[7px] rounded-full" />
          <div className="bg-thirdary w-[7px] h-[7px] rounded-full" />
          <div className="bg-thirdary w-[7px] h-[7px] rounded-full" />
        </div>
      </div>
      <p className="text-gray-700 text-[14px] mt-3">{desc}</p>
    </div>
  );
};

export default ServicesCard;
