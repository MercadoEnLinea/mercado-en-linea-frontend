import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../common/assets/logo.json";
 
const Logo = () => {
    const style = {
        height: 300,
      };
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,

  };
 
  const { View } = useLottie(options, style);
 
  return View;
};
 
export default Logo;