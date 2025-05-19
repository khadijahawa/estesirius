/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout"; // Import Layout component

import Head from "next/head";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import { FaUserClock } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";
import { GiScalpel } from "react-icons/gi"; // Surgery icon

export default function endolift() {
  return (
    <>
      <div className="min-h-screen pt-15">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/clinic/endolift.png"
                alt="Plastic Surgery"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30 backdrop-blur-xs">
                <p className="text-white text-xl md:text-2xl font-bold mb-3 ">
                  <FormattedMessage id="Endolift.imageOverlayText" />
                </p>
                <p className="bg-[#0A2E57] text-white px-6 py-2 rounded-full text-lg font-bold shadow-md">
                  <FormattedMessage id="Endolift.imageOverlayText3" />
                </p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                <FormattedMessage id="Endolift.title" />
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <FormattedMessage id="Endolift.description" />
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.link/7gjnrj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  <div className="bg-[#40E0D0] hover:bg-teal-700 text-white py-3 px-6 rounded-lg transition duration-300 text-center shadow-md font-bold text-lg">
                    <FormattedMessage id="Endolift.buttonText" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Procedure Steps Section */}
        <div className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Procedure Steps</h2>
            <ul className="space-y-4">
              <li className="text-lg">
                <FormattedMessage id="Endolift.procedureSteps.1" />
              </li>
              <li className="text-lg">
                <FormattedMessage id="Endolift.procedureSteps.2" />
              </li>
              <li className="text-lg">
                <FormattedMessage id="Endolift.procedureSteps.3" />
              </li>
              <li className="text-lg">
                <FormattedMessage id="Endolift.procedureSteps.4" />
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black py-10">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
            <video
              src="/images/jo.mp4"
              controls
              playsInline
              className="w-full rounded-lg shadow"
            />
            <video
              src="/images/poli.mp4"
              controls
              playsInline
              className="w-full rounded-lg shadow"
            />
          </div>
        </div>

        {/* Endolift Highlights Section */}
        <div className="bg-[#0A2E57] py-14 text-white mt-20 pt-10">
          <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="text-6xl font-bold">1</div>
                <div className="bg-[#40E0D0] px-6 py-2 rounded-full text-lg font-semibold ">
                  <FormattedMessage id="Endolift.benefits.session" />
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex flex-col items-center space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="bg-[#40E0D0] px-6 py-2 rounded-full text-lg font-semibold">
                  <FormattedMessage id="Endolift.benefits.results" />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <GiScalpel className="h-14 w-14" />
                <div className="bg-[#40E0D0] px-6 py-2 rounded-full text-lg font-semibold">
                  <FormattedMessage id="Endolift.benefits.nosurgery" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              <FormattedMessage id="Endolift.reviews.title1" />
            </h2>
            <div className="space-y-6 ">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-50 p-4 rounded shadow">
                  <p className="font-bold text-lg">
                    <FormattedMessage id={`Endolift.reviews.${i}.name`} />
                  </p>
                  <p className="text-gray-700">
                    <FormattedMessage id={`Endolift.reviews.${i}.text`} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

endolift.hideNav = true;
