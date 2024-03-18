import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeEvent } from '../features/resultSlice';

const FirstTab =({data}) => {
  const event = useSelector ((state) => state.result.event);
  const date = useSelector((state) => state.counter.date)
  return (
    
    <div className="mt-6 relative rounded-3xl bg-purple-50 p-6 transition duration-300">
     <h2 className="text-xl font-semibold text-gray-800 underline-offset">Overview</h2> 
     {data.map((results)=>{
      if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
        return results?.title
        
      }else {
        return null;
      }   })}
     
    </div>
  )
}


export default FirstTab

export const  SecondTab = ({data}) => {
  const event = useSelector ((state) => state.result.event);
  const date = useSelector((state) => state.counter.date)
  return (
    <div className="mt-6 relative rounded-3xl bg-purple-50 tab-panel p-6 transition duration-300">
        <h2 className="text-xl font-semibold text-gray-800">Historical Background</h2> 
        {data.map((results)=>{
            if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return results?.["Calculation Data"]?.history
              
            }else {
              return null;
            }   })}
            <br></br>

            <h2 className="text-xl font-semibold text-gray-800">Timeline Derivations</h2> 
            {data.map((results)=>{
            if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return results?.["Calculation Data"]?.timelinedv
              
            }else {
              return null;
            }   })}
            <br></br>
            <h2 className="text-xl font-semibold text-gray-800">Calculations of Data</h2> 
            {data.map((results)=>{
            if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return <img src={results?.["Calculation Data"]?.calculationData}/>

            }else {
              return null;
            }   })}
            <br></br>

            
      
    </div>
  )
}


export const ThirdTab = ({data}) => {
  const event = useSelector ((state) => state.result.event);
  const date = useSelector((state) => state.counter.date);
  return (
    <div className="mt-6 relative rounded-3xl bg-purple-50 tab-panel p-6 transition duration-300">
      <div>
        <h2 className="inline text-xl font-semibold text-gray-800">Quran Verse Number:</h2> 
        {data.map((results)=>{
           if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return results?.["Quran Information"]?.QuranVerses
              
            }else {
              return null;
            }   })}
            </div>
            <br></br>
            <h2 className="text-xl font-semibold text-gray-800">Arabic Text</h2>
            {data.map((results)=>{
            if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return results?.["Quran Information"]?.ArabicText
              
            }else {
              return null;
            }   })}
            <br></br>
            <h2 className="text-xl font-semibold text-gray-800">English Translation</h2>
            {data.map((results)=>{
            if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return results?.["Quran Information"]?.EnglishTranslation
              
            }else {
              return null;
            }   })}

            <br></br>
            <h2 className="text-xl font-semibold text-gray-800">Other Language Translation</h2>
            {data.map((results)=>{
            if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return results?.["Quran Information"]?.OtherLanguage
              
            }else {
              return null;
            }   })}
            
            
     
    </div>
  )
}


export const FourthTab = ({data}) => {
  const event = useSelector ((state) => state.result.event);
  const date = useSelector((state) => state.counter.date);
  return (
    <div className="mt-6 relative rounded-3xl bg-purple-50 tab-panel p-6 transition duration-300">
      <div>
      <h2 className="inline text-xl font-semibold text-gray-800">Hadith Number:</h2> 
      {data.map((results)=>{
            if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return results?.["Hadith Information"]?.HadithNumber
              
            }else {
              return null;
            }   })}
            

           
            <h2 className="inline text-xl font-semibold text-gray-800">Book:</h2> 
            {data.map((results)=>{
            if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return results?.["Hadith Information"]?.HadithBook
              
            }else {
              return null;
            }   })}
            
            </div>
            <br/>
      
              <h2 className="text-xl font-semibold text-gray-800">Hadith Text</h2> 
              {data.map((results)=>{
            if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return results?.["Hadith Information"]?.HadithText
              
            }else {
              return null;
            }   })}
            
              <br></br>

              <h2 className="text-xl font-semibold text-gray-800">Hadith Explanation</h2> 
              {data.map((results)=>{
            if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return results?.["Hadith Information"]?.HadithEnglish
              
            }else {
              return null;
            }   })}
            
     
    </div>
  )
}



export const FifthTab = ({data}) => {
  const event = useSelector ((state) => state.result.event);
  const date = useSelector((state) => state.counter.date);
  return (
    <div className="mt-6 relative rounded-3xl bg-purple-50 tab-panel p-6 transition duration-300">
       <ul className="grid grid-cols-2">
       <li>{data.map((results)=>{
           if((results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate) && (results?.name==event)){
              return <img src={results?.EventLocation}/>
              
            }else {
              return null;
            }   })}</li>
       </ul>

       
    </div>
  )
}


export const SixthTab = ({data}) => {

  const eventType=useSelector((state) => state.location.eventType);

  const event = useSelector ((state) => state.result.event);

  const dispatch=useDispatch();

  return (
   
    <div className="mt-6 relative rounded-3xl bg-purple-50 tab-panel p-6 transition duration-300">
    {data.map((results)=>{
            if((results?.eventType == eventType) && (results?.name != event)){
              return <div className='flex flex-row space-x-7'><h2 className="inline text-xl font-semibold text-gray-800">{results.name}</h2>
              <span><button onClick={() => dispatch(changeEvent(results?.name))} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button></span>
              </div>
              
            }else {
              return null;
            }   })} 
      
  
      
    </div>
  )
}
