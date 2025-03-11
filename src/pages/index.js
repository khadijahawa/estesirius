import { useState, useEffect, useRef } from "react";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-5">Our Services</h1>
      <Carousel />
    </div>
  );
}
