import React, { useEffect, useState } from 'react'
import './index.css';
export default function Statewise() {
   
    const[datas,setData]= useState([]);

   

     const getCovidData = async ()=>{
       const res =  await fetch("https://api.rootnet.in/covid19-in/stats/latest");
       const actualData = await res.json();
       setData(actualData.data.regional);
       console.log(actualData.data.regional);
    }

    useEffect(()=>{
        getCovidData();
    },[]); 

  return (
    <>
      
      <div className='container-fluid mt-5'>
          <div className='main-heading'>
          <h1 className='mb-5 text-center'>INDIA COVID-19 DASHBOARD</h1>
          </div>
<div className='table-responsive'>
    <table className='table table-hover'>
        <thead className='table-dark'>
            <tr>
                <th>Statess</th>
                <th>Confirmed</th>
                <th>Discharged</th>
                <th>Deaths</th>
                <th>Foreign cases</th>
                <th>TOTAL</th>
                
            </tr>
        </thead>
        <tbody>
   
            {
                     
             datas.map((curEle,ind)=>{

        return   (         
            <tr key={ind}>
                <th>{curEle.loc}</th>
                <td>{curEle.confirmedCasesIndian}</td>
                <td>{curEle.discharged}</td>
                <td>{curEle.deaths}</td>
                <td>{curEle.confirmedCasesForeign}</td>
                <td>{curEle.totalConfirmed}</td>
                
            </tr>
        )
             })
            }
        
        </tbody>
    </table>
</div>




      </div>

    </>
  )
}
