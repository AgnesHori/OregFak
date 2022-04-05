import { MyNavbar } from './MyNavbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Filter=()=>{
  const[megye,setMegye]=useState([])
  const [oregfak,setOregfak]=useState([])


  useEffect(()=>{
    fetchMegyek()
  },[])

  const fetchMegyek = async ()=>{
    try{
      const resp=await axios.get('http://localhost:5000/FilterMegye')
      setMegye(resp.data)
    }catch(err){
      console.log(err)
    }
  }

  const fetchOregfak = async (id) =>{
    try{
      const resp=await axios.get('http://localhost:5000/filter?id='+id)
      setOregfak(resp.data)
    }catch(err){
      console.log(err)
    }
  }


    return (
        <>
        <MyNavbar />
        <div className='container text-center bg-white'>
          <h1 className='p-3 m-5'>Megyénként nyilvántartott öregfák</h1>
          <select className="form-control" onChange={(e) => fetchOregfak(e.target.value)}>
          <option defaultValue>Válasszon megyét</option>
            {megye.map((item, index) => (<option key={index} value={item.id}>{item.nev}</option>))}
    </select>
        <table className='table'>
            <thead>
              <tr>
                <th>id</th>
                <th>Faj</th>
                <th>Körméret</th>
                <th>Település</th>
              </tr>
            </thead>
            <tbody>
              {oregfak.map((obj, index)=><tr key={index}><td>{obj.id}</td><td>{obj.faj}</td><td>{obj.kormeret}</td><td>{obj.telepules}</td></tr>)}
            </tbody>
          </table>
        </div>
        </>
      )
    
}