import React, { useState, useEffect } from 'react';
import { MyNavbar } from './MyNavbar';
import axios from 'axios'



export const Statistic=()=>{
  const[stat,setStat]=useState([])

  useEffect(()=>{
    fechStat()
  },[])

  const fechStat=async ()=>{
    try{
      const resp = await axios.get('http://localhost:5000/statistic')
      setStat(resp.data)
    }catch(err){
      console.log(err)
    }
  }

  console.log(stat)

    return (
      <>
      <MyNavbar />
       <div className='container text-center bg-white'>
        <h1 className='p-3 m-5'>Fafajta szerinti statisztika</h1>
        <table className='table'>
            <tbody>
                {stat.map((obj, index) => <tr><td>{index + 1}</td><td>{obj.faj}</td><td>{obj.darab}</td></tr>)}
            </tbody>
          </table>
        </div>
      </>
      )
}