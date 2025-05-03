// components/Operations/OperationsHeader.js
import React from "react";
import Image from "next/image";

export default function OperationsHeader() {
  return (
    <div className="relative w-full h-[50vh]">
      <Image
        src="/images/images/oper-05.jpg"
        alt="Operations Header"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold tracking-wider">
          COSMETIC SURGERIES
        </h1>
      </div>
    </div>
  );
}
