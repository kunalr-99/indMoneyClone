import React from "react";
import { MdStarRate, MdStarBorder } from "react-icons/md";
import { componentData } from "../ApiData";
import Explore from "./Explore";

const Landing = () => {
  return (
    <>
      {componentData.map((apiData) => {
        const {
          title,
          subtitle,
          highlights,
          stars,
          btnText,
          reviews,
          ratings,
          id,
          applePlay,
          googlePlay,
          heroImage,
          bgColor,
          addCompTitle,
        } = apiData;
        return (
          // <section className={`bg-[${bgColor}]`}>
          <section
            key={id}
            className={`${bgColor === "white" ? "bg-white" : "bg-[#f6f6f9]"}`}
          >
            {addCompTitle ? <Explore /> : <article></article>}
            <article className="flex w-[1000px] mx-auto py-6">
              <div className="py-6 text-gray-800 heroText">
                <div className="mb-3 font-semibold text-gray-600 subtitle">
                  {subtitle}
                </div>
                <div className="text-[40px] font-bold title w-[380px] leading-[50px] mb-10">
                  {title}
                </div>
                {highlights.length === 1 ? (
                  <div className="mb-10 text-lg font-semibold w-[350px]">
                    <div>{highlights[0]}</div>
                  </div>
                ) : (
                  <div className="mb-10 text-lg font-semibold w-[350px]">
                    {highlights.map((data) => (
                      <li>{data}</li>
                    ))}
                  </div>
                )}
                {btnText ? (
                  <div className="mb-10 button">
                    <button className="px-20 py-[14px] font-bold text-white bg-[#017aff] rounded-3xl hover:scale-105">
                      {btnText}
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="flex">
                  <div className="mr-4">
                    <img
                      className="w-40 mb-3"
                      src={applePlay}
                      alt="appleIcon"
                    />
                    <div className="flex text-xl text-yellow-400">
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarBorder />
                    </div>
                    <div className="flex space-x-2">
                      <div>{stars}</div>
                      <div className="text-gray-600">- {ratings} Ratings</div>
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-40 mb-3"
                      src={googlePlay}
                      alt="googleIcon"
                    />
                    <div className="flex text-xl text-green-500">
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarBorder />
                    </div>
                    <div className="flex space-x-2">
                      <div>{stars}</div>
                      <div className="text-gray-600">- {reviews} Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-[170px] heroImage">
                <img className="w-[370px]" src={heroImage} alt="heroimage" />
              </div>
            </article>
          </section>
        );
      })}
    </>
  );
};

export default Landing;
