import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){

        const data = useLoaderData()
        
    //const [data,setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Raja6284')
    //     .then(response=>response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='bg-gray-600 p-4 m-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="GitHub Picture" width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/Raja6284')
    return response.json()
}