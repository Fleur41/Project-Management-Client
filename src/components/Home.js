import React, {useState, useEffect} from "react";
import HomeCarousel from "./HomeCarousel";

export default function Home(){
   const [users, setUsers] = useState([])
  useEffect(()=>{
  fetch(`http://localhost:9292/projects`)
  .then(res => res.json())
  .then(users => setUsers(users))
  }, [])
  console.log(users);
    return(
        <h1>
            <HomeCarousel/>
        </h1>
    )
}