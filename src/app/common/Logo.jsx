import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../common/assets/logo.json";
import logo from "../common/assets/shop.png";
 
const Logo = () => {
    const style = {
        height: 300,
      };
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,

  };
 
//   const { View } = useLottie(options, style);
 
  return (
      <img src={logo} style={{ height: '128px'}}/>
  );
};
 
export default Logo;