import React, { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "https://jsonplaceholder.typicode.com/users"
          )
        ).json();
        console.log(data)
        // set state when the data received
        setData(data);
      };
  
      dataFetch();
      
    }, []);
  return (
  <>
  
    <table className="w-full table-auto">
    <thead>
      <tr>
        <th className="border p-4">Name</th>
        <th className="border p-4">Username</th>
        <th className="border p-4">Website</th>
      </tr>
    </thead>
    <tbody>
    {data?.map(user=>(
      <tr>
        <td className="border p-4">{user.name}</td>
        <td className="border p-4">{user.username}</td>
        <td className="border p-4">{user.website}</td>
      </tr>
    ))}  
    </tbody>
  </table>
  

  </>
  )
}

export default Home