import React from "react";
import Dash from "./Dash";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="container">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-orange-500">Food</span>
      </h2>
      <p className="max-w-[550px] pt-10 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis
        leo efficitur, bibendum enim eu, lobortis nulla. Nulla lectus risus,
        fermentum eget porta id, euismod eget massa.
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__1.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Shrimp Salad</h2>
            <p className="text-gray-700 text-[14p] xl:text-[16px]">
              Etiam scelerisque justo et arcu scelerisque bibendum. Etiam tempus
              lorem nec nunc sodales, ut interdum libero lobortis. Aenean ac
              cursus leo, at auctor neque.
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__2.png"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Baked Apples</h2>
            <p className="text-gray-700 text-[14p] xl:text-[16px]">
              In neque ipsum, vulputate sit amet tellus at, scelerisque
              tincidunt diam. Mauris eros orci, fringilla non augue mollis,
              venenatis varius eros. Aenean quis ultrices velit, nec placerat
              ipsum
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__3.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Cherries Chicken</h2>
            <p className="text-gray-700 text-[14p] xl:text-[16px]">
              Sed vel purus lobortis, iaculis risus sit amet, ultrices augue.
              Maecenas congue dolor nunc. Suspendisse potenti. Nam et lobortis
              tellus, eu ullamcorper elit. Nulla sem orci, porta id suscipit
              sed, tempor eu odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
