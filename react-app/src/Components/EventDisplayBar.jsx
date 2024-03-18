import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { changeEvent  } from '../features/resultSlice';
import { changeEventType } from '../features/eventTypeSlice';
import styles, {layout} from '../style'


const CardDeal = ({data}) => {
   const date = useSelector((state) => state.counter.date)
  
   const dispatch=useDispatch()

  return (
    <div>
      <h2 className={styles.heading2}>Search Results <br className="sm:block hidden"></br></h2>
      <div  className= "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  max-h-[500px] text-white overflow-y-scroll">
        {data.map((results)=>{
        if(results?.Date?.startdate==date.startDate && results?.Date?.enddate==date.endDate){
          return <div key={results.id} className={`${styles.paragraph} w-full bg-black p-2 mt-[2px] mb-[2px]`}>
                <button onClick={() => {
                  dispatch(changeEventType(results.eventType))
                  dispatch(changeEvent(results.name))}}>
                {results.name}
                </button>
                
          </div>
        } else{
            return <div key={results.id} className='text-black'>
              &nbsp;
              
            </div>
          }
        })}
      </div>
   </div>
  
  )
}

export default CardDeal