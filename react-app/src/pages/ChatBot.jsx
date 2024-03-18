import React, { useEffect, useState } from "react"
import axios from 'axios'



const ChatBot =()=>  {


  const [query, setQuery] = useState('')

  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    

   try{
    const response = await axios.post('http://localhost:5000/chatbot', {
      question: query,
      
    });

    setResponse(response.data.result);
   } catch (error){
    console.error('Error sending question to Python:' , error);
   }
  
  }

  
  
    return (
    <div className="flex flex-col items-center">
       <h2 className="text-white">ChatBot</h2>
       <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-white">ChatBot Input:</label>
        <input
        type="text"
        required
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <label className="text-white">ChatBot Output:</label>
        <p className="bg-white">
          {response}
          
        </p>
        &nbsp
        <button 
       className="bg-white"
       type="submit">
       
       Input
       </button>
       </form>
      
      
    </div>
  )
}
export default ChatBot