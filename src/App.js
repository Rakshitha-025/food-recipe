import React,{useState} from 'react'
import Products from './Products';
const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState('');
  const YOUR_APP_ID = "6f2cf15c";
  const YOUR_APP_KEY ="a77c3a192bf1475e57049990918740c0";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    ) 
  }
  return (
    <div>
     <center>
       <h4>Welcome To Food Recipe App</h4> <br/>
       <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/><br/><br/>

        <input type="submit" className="btn btn-primary" value="Serach"/>
       </form><br/>
       {data.length>=1 ? <Products data={data} />: null}


     </center>
    </div>


  )
}

export default App;
