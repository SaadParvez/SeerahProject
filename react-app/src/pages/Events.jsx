import React from 'react'
import styles from '../style'
import {DatePicker, Business,  InfoBar,  CardDeal} from "../Components"
import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'
import { useSelector } from 'react-redux'

const Events = () => {
  const [infoBarRendered, setInfoBarRendered] = useState(false);
  const [ data, setData ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const firebaseConfig = {
        apiKey: "AIzaSyAUbMrZQW54OBkcHPTBpYu3z10hBK01RjY",
        authDomain: "seerahinfoapp.firebaseapp.com",
        projectId: "seerahinfoapp",
        storageBucket: "seerahinfoapp.appspot.com",
        messagingSenderId: "192378548556",
        appId: "1:192378548556:web:fef715db64cfc445cb9fe9"
      };
    
    initializeApp(firebaseConfig)
    
    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore()
    
            const colRef = collection(db, 'books')

            try{
                const snapshot = await getDocs(colRef);

                if(!snapshot.empty){
                  const recordsArray = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                  }));
          
                  setData(recordsArray);
                } else {
                    console.log("No documents found.")
                }
            } catch (error) {
                console.log("Error fetching data: ", error.message)
                setError(error.message)
            } finally {
              setLoading(false)
            }

        }
        fetchData();
    }, [])

    const date = useSelector((state) => state.counter.date)
    const event = useSelector ((state) => state.result.event);
    const eventType=useSelector((state) => state.location.eventType);
    

  return (
  //   <div>

  //         {loading ? (
  //           <p>Loading...</p>
  //         ) : error ? (
  //           <p>Error: {error}</p>
  //         ) : (
  //           <>
  //           {!date.startDate && !date.endDate && data && data.length > 0 ? (
  //             <div className='mr-6 ml-6'> <Business isFullHeight = {1}/></div>
               
         
             
              
            
  //         ) : (
  //             <DatePicker/>

  //         )}
  //           </>
  //         )}

        
       
  //       {!loading && !error && !infoBarRendered && date.startDate && date.endDate && data && data.length > 0 && 
  //         (   <div className='flex items-center justify-center'>
  //           <CardDeal data={data} />
  //           </div>
          
  //       )}
       
       
  //         <br></br>
  //         {!loading && !error && (
  //         <>
  //         {event && eventType && data && data.length > 0 ? 
  //         ( <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  //             <div className={`${styles.boxWidth} flex justify-center items-center`} 
  //               ><InfoBar data={data} onRender={() => setInfoBarRendered(true)}/>
  //             </div>
  //           </div>
  //         ):( 
  //         <p>No valid data available</p>
          
  //         )}
  //         </>
          
  //       )}
        
       
       
          
        
  //     </div>
  // )
    <div className='flex items items-center justify-center mr-5 ml-5'>
    <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1C6ZE5nir4s7DeIEQyCzRfd8eDsZ_CwGoCEWcHqogXgc&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowullscreen allowFullscreen frameborder='0'></iframe>
    
    
  </div>
  )
}

export default Events