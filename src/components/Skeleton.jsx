import Lottie from "lottie-react";
import Loader from '../assets/Loader.json'
export default function Skeleton() {
  
  return (
    <Lottie animationData={Loader} loop />
  )
}