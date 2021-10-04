import React from "react";
import './Pagination.css'
export default function Pagination({postPerPage,totalPosts,paginate}){
    const pageNumbers=[];
    for(let i =1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <div className='numpag'>
            <ul className='lists'>
                {pageNumbers.map((e,i)=>
                    <li key={e}><button className='botonn' onClick={()=>paginate(i+1)} >{e}</button></li>
                )}
            </ul>
        </div>
        )
}
