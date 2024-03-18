import React, { useState } from "react";
import styles, {layout} from '../style'
import Datepicker from "react-tailwindcss-datepicker";
import { useDispatch } from "react-redux";
import { changeDate } from "../features/counterSlice";



const DatePicker = () => {
  
  const dispatch = useDispatch()  

      const [value, setValue] = useState({
      startDate: new Date(),
      endDate: new Date().setMonth(11)
  });

  const handleValueChange = newValue => {
      console.log("newValue:", newValue);
      setValue(newValue);
      dispatch(changeDate(newValue));
  };

return (
    
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-24 flex items-center justify-around">
        <div >
          <h2  className='font-poppins font-semibold text-[40px] text-white'>
            Choose Your Date: 
          </h2>
        </div>
        
        <div className="w-[400px] mr-4">
            <Datepicker value={value} 
            onChange={handleValueChange} />
        </div>
      </div>
   
  )
}

export default DatePicker