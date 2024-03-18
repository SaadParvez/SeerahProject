import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import styles, {layout} from '../style'
import { useDispatch } from "react-redux";
import { changeDate } from "../features/counterSlice";



const Business = ({isFullHeight}) => {
  
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
    <div className={isFullHeight ? "h-screen" : ""}>
      <div>
        <h2 className={styles.heading2}>Search For Events <br className="sm:block hidden"></br></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
          Input your starting and ending dates to find the specific events you are looking for
        </p>
        <div className="justify-center">
            <Datepicker value={value} 
            onChange={handleValueChange} />
        </div>
      </div>
    </div>
  )
}

export default Business

// <div> classname - "justify-center"> <DatePicker value = {value} onChange -= {handleValueChange}