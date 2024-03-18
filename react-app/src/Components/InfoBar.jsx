import React, { useState, useEffect } from 'react';
import FirstTab, {SecondTab, ThirdTab, FourthTab, FifthTab, SixthTab} from './Tabs';


const InfoBar =({data, onRender}) => {
  
    const [activeTab, setActiveTab] = useState("tab1");
    
   
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    
    useEffect(() => {
      onRender();
    }, [onRender]);

    return (
    
    
    <div >
     


     
      <ul className="mx-auto h-12 grid grid-cols-6 items-center px-[3px] rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  overflow-hidden shadow-2xl shadow-900/20 transition">
      
        <button className={activeTab === "tab1"  ? " h-11 focus:my-auto focus:top-0 focus:bottom-0 focus:left-0 focus:rounded-full focus:bg-black  focus:delay-75 " : ""} onClick={() => handleTabClick("tab1")}><span className="text-white ">Overview</span></button>

        <button className={activeTab === "tab2" ? "h-11  my-auto top-0 bottom-0 left-0 rounded-full bg-black  delay-75" : ""} onClick={() => handleTabClick("tab2")}><span className="text-white">Timeline Reasoning</span></button>
        
        <button className={activeTab === "tab3" ? "h-11  my-auto top-0 bottom-0 left-0 rounded-full bg-black  delay-75" : ""} onClick={() => handleTabClick("tab3")}><span className="text-white">Quran Reference</span></button>
        
        <button className={activeTab === "tab4" ? "h-11  my-auto top-0 bottom-0 left-0 rounded-full  bg-black delay-75" : ""} onClick={() => handleTabClick("tab4")}><span className="text-white">Hadith Reference</span></button>
        
        <button className={activeTab === "tab5" ? "h-11  my-auto top-0 bottom-0 left-0 rounded-full  bg-black delay-75" : ""} onClick={() => handleTabClick("tab5")}><span className="text-white">Event Geology</span></button>
        
        <button className={activeTab === "tab6" ? "h-11  my-auto top-0 bottom-0 left-0 rounded-full  bg-black delay-75" : ""} onClick={() => handleTabClick("tab6")}><span className="text-white">Related Events</span></button>
        
       </ul> 
      
      <div className="outlet">
        
      {activeTab === "tab1" ? <FirstTab data={data}/> : 
      activeTab === "tab2" ? <SecondTab data={data}/>: 
      activeTab === "tab3" ? <ThirdTab data={data}/>:
      activeTab === "tab4" ? <FourthTab data={data}/>:
      activeTab === "tab5" ? <FifthTab data={data}/>:
      <SixthTab data={data}/>}
      </div>
      
    </div>
  )
}
export default InfoBar