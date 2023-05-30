import React, { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "https://fakestoreapi.com/products"
          )
        ).json();
        console.log(data)
        // set state when the data received
        setData(data);
      };
  
      dataFetch();
      
    }, []);
    return (
        <div>
          <h1>Data Fetcher</h1>
          <div className="grid grid-cols-3 gap-4">
            {data.map(item => (
              <div key={item.id} className="bg-black p-4 shadow">
                <h2 className="text-xl">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}