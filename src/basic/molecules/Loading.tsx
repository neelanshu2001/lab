import React from "react";
import { useLottie } from "lottie-react";
import load from "./loading.json";

const style = {
    height: 300,
    
  };
const  Loading=()=> {
    const options = {
        animationData: load,
        loop: true
      };
      const { View } = useLottie(options,style);
  return (
    <div className="flex justify-center items-center h-[70vh]">
    <div className=" flex flex-col justify-center items-center text-sm md:text-base lg:text-xl text-slate-900 font-semibold">
    {View}
    <div className="animate-pulse">
    This might take a few seconds..
    </div>
    </div>
</div>
  )
}
export default Loading;