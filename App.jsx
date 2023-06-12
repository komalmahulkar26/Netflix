import React from "react";
import Netflix from "./Frequency/Netflix";
import Header from "./Frequency/Header";
import TV from "./Frequency/TV";
import Video from "./Frequency/Video";
import Children from "./Frequency/Children";
import Frequently from "./Frequency/Frequently";
import Reference from "./Frequency/Reference";

function App() {
  return (
    <div className="bg-slate-950">
      <div className=" text-white">
      <Netflix className=""/>
      <Header/>
      <TV/>
      <Video/>
      <Children/>
      <div className="bg-black mt-2">
    <h1 className='pl-[480px] bg-black font-bold text-5xl'> Frequently Asked Questions</h1>
      
        <Frequently Questions={"what is Netflix?"} Ans={"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices"}/>
     <Frequently Questions={"how much does Netflix cost?"} Ans={"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."} />
      <Frequently Questions={"where can i watch?"} Ans={"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."}/>
      <Frequently Questions={"how do i cancel?"} Ans={"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."}/>
      <Frequently Questions={"what can i watch netflix?"} Ans={"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."}/>
      <Frequently Questions={"Is Netflix good for kind ?"} Ans={"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."}/>
    </div>
    <div className="bg-black h-36"><p className="text-2xl  bg-black ml-[400px]">Ready to watch? Enter your email to create or restart your membership.</p>
    <input type="gmail" placeholder="Gmail Adress" className='w-72  text-black h-10 rounded-md ml-[500px] pl-2'/>
    <button className='w-48 text-2xl mt-8 ml-2 h-10 rounded-md bg-red-500 pl-2'> GET STARTED</button></div>
    </div>
    <Reference/>
    </div>
  )
}

export default App