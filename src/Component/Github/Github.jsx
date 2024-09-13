import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])

    // useEffect(() =>{
    //     fetch("https:/api.github.com/users/asheeshkumar933")

    //     .then( (res) => res.json())
    //     .then((data) => {
    //         setData(data)
    //     })
    // } ,[])
  return (
    <div className='text-center m-4 bg-gray-600
    text-white p-4 '> Github Followers : {data.followers}

    <p className='text-center m-2 bg-slate-600 text-white p-3'> Name : {data.name}</p>
    </div>
    
  )
}

export default Github

export  const githubInfoLoader = async () => {
  const respose =  await fetch("https:/api.github.com/users/asheeshkumar933")
  return respose.json()

}