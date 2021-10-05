import React from 'react'
import Countries from '../Components/Countries.jsx'
import Bar from '../Components/BAR.jsx'
import {useDispatch,useSelector} from 'react-redux'
import {  Generar } from '../store/actions/actions.jsx'
import Search from '../Components/Search.jsx'
import Pagination from '../Components/Pagination.jsx'
export default function MainPage(){

    const dispacth=useDispatch()
    const filtered=useSelector(state=>state.filtered)
    const [currentPage,setCurrenPage]=React.useState(1);
    const [postsPerPage,setPostPerPage]=React.useState(9)
    let contenedor=filtered
    React.useEffect(()=>{
        dispacth(Generar())
    },[])
    React.useEffect(()=>{
         if(currentPage===1){
            setPostPerPage(9)
        }
        else{
            setPostPerPage(10)
        } 
    },[currentPage])
    React.useEffect(()=>{
        setCurrenPage(1)
    },[contenedor])
    const Searchby=(name)=>{
        dispacth(Generar(name))
    }

    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;
    const currentPosts=contenedor&&contenedor.slice(indexOfFirstPost,indexOfLastPost)

    const paginate=(pageNumber)=>setCurrenPage(pageNumber)
        

    return(
        <div>
            <Bar/>
            <Search searchby={Searchby}/>
            <Pagination totalPosts={contenedor.length} postPerPage={postsPerPage} paginate={paginate}/>
           <Countries countries={currentPosts}/>
        </div>
    )
}