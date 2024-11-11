import Confetti from "../assets/img/confetti.png" 

const CongratsBar = () => {
  return (
    <div className="relative h-[10%] flex justify-center items-center text-[20px] text-white font-bold bg-gradient-to-r from-[#E0EFEC] via-[#45BB91] to-[#BCF3E7]">
        <img className="absolute top-0 z-10" src={Confetti} />
        <h1 className="relative z-20">🤩 Congrats! Setup invitation with ease due to of self serve integration</h1>
    </div>
  )
}

export default CongratsBar