import React from "react";
import Countries from "../Components/Countries.jsx";
import Bar from "../Components/BAR.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Generar} from "../store/actions/actions.jsx";
import Search from "../Components/Search.jsx";
import Pagination from "../Components/Pagination.jsx";
export default function MainPage() {
  const dispacth = useDispatch();
  const filtered = useSelector((state) => state.filtered);
  const currentPage = useSelector((state) => state.currentPage);
  const currentPosts=useSelector((state)=>state.currentPosts)
  React.useEffect(()=>{
    dispacth(Generar())
  },[dispacth])
  const Searchby=(name)=>{
    dispacth(Generar(name))
  }

  return (
    <div>
      <Bar />
      <Search searchby={Searchby}  />
      <Pagination
        contenedor={filtered}
      />
      <Countries countries={currentPosts} currentPage={currentPage} />
    </div>
  );
}