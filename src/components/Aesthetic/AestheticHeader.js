// components/Aesthetic/AestheticHeader.js
import React from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
export default function AestheticHeader() {
  return (
    <div className="relative w-full h-[50vh]">
      <Image
        src="/images/images/pls-30.jpg"
        alt="Esthetic Header"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold tracking-wider">
          <FormattedMessage id="EstheticMachines.title" />
        </h1>
      </div>
    </div>
  );
}
