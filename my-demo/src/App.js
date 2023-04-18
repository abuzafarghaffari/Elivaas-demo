import {useEffect, useState,useReducer} from 'react';
import './App.css';
import MyCard from './components/MyCard';

function App() {
const [lists, setLists] = useState([]);
const[loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
   async function fetchData () {
const response = await fetch("https://jsonplaceholder.typicode.com/users");

const datas = await response.json();
setLists(datas);
setLoading(false);
}
fetchData().catch(error=>console.log(error));

},[])

const deleteHandler = (id)=>{
setLists((prev=> prev.filter(list=> list.id !== id)))
}

const editHandler =(element)=>{
  setLists((prev)=>{
    return prev.map(list=>{
      if(list.id === element.id){
        return element
      } else{
        return list;
      }
    })
  })
}

//console.log(lists);
  return (
    <div className='cardContainer'>
      {loading && <p>Loading...</p>}
      {
        lists.map((list)=>{
         return  <MyCard 
         key={list.id}
      username ={list.username}
          id={list.id}
         deleteHandler={deleteHandler}
         editHandler={editHandler}
         list ={list}
         />
        })
      }
    
    </div>
  );
}

export default App;
