import React from "react";
import Dash from "./Dash";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="container mt-20">
      <h2 className="text-6xl font-bold pt-2">
        Benefits of <span className="text-thirdary">Dog Walking</span>
      </h2>
      <p className="max-w-[550px] pt-10 text-gray-700">
        Dog walking offers numerous benefits, both for the dogs themselves and
        their owners. Here&apos;s a list of some of the key benefits:
      </p>

      <div className="flex flex-col md:flex-row justify-around">
        <ul className="space-y-16 mt-10 list-disc max-w-[550px] pt-10 text-gray-700">
          <li>
            <strong>Physical Exercise for Dogs:</strong> Regular walking
            provides dogs with essential physical exercise, helping to maintain
            a healthy weight, improve cardiovascular health, and strengthen
            muscles and joints.
          </li>
          <li>
            <strong>Mental Stimulation:</strong> Walking exposes dogs to new
            sights, sounds, and smells, which stimulates their minds and
            prevents boredom. Mental stimulation is crucial for a dog&apos;s
            overall well-being and can help reduce destructive behaviors that
            result from boredom or excess energy.
          </li>
          <li>
            <strong>Socialization Opportunities:</strong> Dog walking allows
            dogs to interact with other dogs, people, and environments,
            promoting socialization skills. Exposure to different stimuli helps
            dogs become more confident and well-adjusted in various situations.
          </li>
          <li>
            <strong>Behavioral Training:</strong> Walking provides opportunities
            for training and reinforcing good behavior, such as walking politely
            on a leash, obeying commands, and practicing impulse control.
          </li>
        </ul>

        <Image
          src="/f1.jpeg"
          alt="dog1"
          width={500}
          height={500}
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-around mt-10">
        <Image
          src="/f2.jpeg"
          alt="dog2"
          width={500}
          height={500}
          className="rounded-2xl"
        />

        <div className="max-w-[550px]">
          <ul className="list-disc space-y-16 pt-14 text-gray-700">
            <li>
              <strong>Routine and Structure:</strong> Establishing a regular
              walking routine provides dogs with structure and predictability,
              which can reduce anxiety and promote a sense of security.
            </li>
            <li>
              <strong>Environmental Enrichment:</strong> Exploring different
              outdoor environments during walks exposes dogs to a variety of
              sensory stimuli, enriching their lives and providing opportunities
              for exploration and adventure.
            </li>
            <li>
              <strong>Prevents Health Issues:</strong> Regular exercise through
              walking helps prevent obesity, joint problems, and other health
              issues in dogs. It also promotes better digestion and reduces the
              risk of behavioral problems associated with pent-up energy.
            </li>
          </ul>
          <p className="mt-14">
            Overall, dog walking is a simple yet effective way to promote the
            physical, mental, and emotional well-being of both dogs and their
            owners, while also fostering a stronger sense of community among dog
            lovers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
