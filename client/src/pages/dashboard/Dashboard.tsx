import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
    <div className="w-[393px] h-[50px] text-center text-white text-[40px] font-NeueMachinaUltrabold"> 
    Impact Overview
    </div>
    
    <div className="w-[200px] h-[50px] justify-center items-center inline-flex">
    <div className="w-[200px] h-[50px] relative">
        <div className="w-[200px] h-[50px] left-0 top-0 absolute bg-zinc-300 rounded-[20px] border-2 border-neutral-800" />
        <div className="w-[130.43px] h-[22.86px] left-[35px] top-[14px] absolute text-neutral-800 text-xl font-normal font-['PP Telegraf']">Time Period</div>
        <img className="w-[33.99px] h-[29.29px] left-[153.36px] top-[7.86px] absolute" src="https://via.placeholder.com/34x29" />
    </div>
</div>
    </div>



    <div className="w-[1000px] h-[193px] relative top-10">
      <div className="w-[1000px] h-[193px] relative bg-neutral-800 rounded-[56px] border border-green-300 " />
        <div className="w-[248px] h-[51.25px] left-[376px] top-[40px] absolute text-white text-2xl font-normal font-TelegraphRegular">Carbon Credit Revenue</div>
        <div className="w-[220px] h-[15.38px] left-[710px] top-[40px] absolute text-white text-2xl font-normal font-TelegraphRegular">ESG Compliance Cost</div>
        <div className="w-[220px] h-[15.38px] left-[46px] top-[40px] absolute text-white text-2xl font-normal font-TelegraphRegular">ESG - ROI Return of Investment</div>
        <div className="w-[110px] h-[35.88px] left-[46px] top-[120px] absolute text-white text-2xl font-normal font-TelegraphRegular">R250</div>
        <div className="w-[110px] h-[43.05px] left-[378px] top-[120px] absolute text-white text-2xl font-normal font-TelegraphRegular">R800</div>
        <div className="w-[110px] h-[43.05px] left-[711px] top-[120px] absolute text-white text-2xl font-normal font-TelegraphRegular">R4.00</div>
        <div className="w-[193px] h-[0px] left-[329px] top-0 absolute origin-top-left rotate-90 border-2 border-green-300"></div>
        <div className="w-[193px] h-[0px] left-[661px] top-0 absolute origin-top-left rotate-90 border-2 border-green-300"></div>
        
    <div className="w-[89px] h-[30.75px] left-[204px] top-[120px] absolute text-center ">
        <div className="w-[89px] h-[30.75px] left-0 top-0 absolute bg-green-300 rounded-[10px]" />
        <div className="w-[37px] h-[12.30px] absolute text-green-600 text-xl font-normal font-TelegraphRegular">2%</div>
    </div>
    <div className="w-[89px] h-[30.75px] left-[531px] top-[120px] absolute">
        <div className="w-[89px] h-[30.75px] left-0 top-0 absolute bg-rose-300 rounded-[10px]" />
        <div className="w-12 h-[10.25px] absolute text-red-600 text-xl font-normal font-TelegraphRegular">0.5%</div>
    </div>
    <div className="w-[89px] h-[30.75px] left-[855px] top-[120px] absolute">
        <div className="w-[89px] h-[30.75px] left-0 top-0 absolute bg-zinc-300 rounded-[10px]" />
        <div className="w-[50px] h-[13.32px] text-center absolute text-neutral-400 text-xl font-normal font-TelegraphRegular">0.0%</div>
        <img className="w-3.5 h-[13.32px] left-[12px] top-[9.23px] absolute" src="https://via.placeholder.com/14x13" />
    </div>
</div>
    <div></div>
    </div>
  )
}

export default Dashboard