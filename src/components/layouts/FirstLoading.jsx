import Lottie from "lottie-react"
import fish from "../animations/Glowing Fish Loader.json"
export default function FirstLoading(){
    return(
        <>
            <div className="absolute backdrop-blur-2xl h-full flex items-center justify-center w-full flex-col">
                <Lottie animationData={fish} autoplay={true} loop={true} style={{height:"50%"}}></Lottie>
                <p className="text-center w-3/4 text-xl font-semibold ">O primeiro carragamento do dia pode demorar alguns minutos</p>
            </div>
        </>
    )
}