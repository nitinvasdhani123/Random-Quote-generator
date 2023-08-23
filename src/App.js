import './App.css';
import { useEffect, useState} from 'react';

function App() {
  const [state,setState] = useState(0);
  const [data, setdata] = useState("");

  useEffect(()=>{
    async function getdata(){
      const get = await fetch("https://api.quotable.io/quotes/random");
      const response = await get.json();
      const apidata = response[0];
      setdata(apidata);
    }
    getdata();
  } , [state])

  return (
    <>
      <div id='container' key={state}>
        <h1>Quote's</h1>
        <div id='quote'>{data.content}</div>
        <div id='author'>{data.author}</div>
        <button id='button' onClick={()=>{setState(state+1)}}>Next</button>
      </div>
    </>
  );
}

export default App;
