import React, {useEffect,useState} from 'react'
import { db } from '../firebase'
import { collection,getDocs } from 'firebase/firestore'

export default  function Order() {
    const odd=[]
    const [orders,setOrders]=useState([])
    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, "orders"));
            querySnapshot.forEach((doc) => {
              setOrders({data:doc.data()})
            });
            
        }
        fetchData();
      }, []);
      const fetchData=async()=> {
        const querySnapshot = await getDocs(collection(db, "orders"));
        querySnapshot.forEach((doc) => {
            
            odd.push(doc.data())
            console.log(odd)
          setOrders({data:doc.data()})
        });
        
    }
  return (
    <div>
        <button 
        onClick={fetchData}
        className='bg-teal-400 ronded'>fetch</button>
        {
            odd.map((data)=><h1>{data}</h1>
            )
        }
    </div>
    
  )
}

