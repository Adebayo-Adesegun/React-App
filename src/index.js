import React, {useState, useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
// import App from './App';
// import * as serviceWorker from './serviceWorker';
function GitHubUser({login}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
  }, []);

  if (data) {
  return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100}></img>
      </div>
  );
  

  }
  return null;
}

// React Component
// Passing properties down to the React Component, dynamic display

function FavouritePhrase()
{
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("")
  
  useEffect(() => {
    console.log(`field 1 : ${val}`);
  }, [val]);

  useEffect(() => {
    console.log(`field 2 : ${val2}`);
  }, [val2]);

  return (
    <>
      <br />
      <br />
        <label>
          Favorite Phrase :
          <input value={val} onChange ={e => setVal(e.target.value)}></input>
        </label>

      <br />
      <br />

        <label>
          Second Favorite Phrase : <input value={val2} onChange = {e => setVal2(e.target.value)}></input>
        </label>
    </>
  );
}


function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked, false);
 
  useEffect(() => {
    alert(`checked : ${checked.toString()}`);
  });
  return (
    <>
    <hr /> 
     <input type="checkbox" 
            value={checked}
            onChange={toggle}
            ></input>

     {checked ? "checked " +  checked.toString() : "not checked " + checked.toString() }
    </>
  );
}

let cityList = 
  [
    {id : "1"  , name : "Madrid",  country : "Spain"}, 
    {id : "2"  , name : "Nigeria", country : "Lagos"}, 
    {id : "3"  , name : "Barcelona", country : "Spain"} 
]

  let namesList = ["James", "John", "Jabez", "Rick"];

const [first, second, third] = [
    "p",
    "o",
    "p"
]

console.log(first+second+third);


function Hello({cities}) { 

  return (
    <div>
       <GitHubUser login="Adebayo-Adesegun" />
       <FavouritePhrase />
       <Checkbox />
       <ExperimentUseState />

        <hr />

        <ul>
          {cities.map(city => (

            <div key={city.id}>
              <h2> {city.name} </h2>
              <p>  country : {city.country} </p> 
            </div>

          ))}

        </ul>
       
      
        <GreetDisplay season = "english"></GreetDisplay>

       
    </div>
  )
}

function GreetDisplay(props) {
  return (
    // <div>
    //     {(props.season === "french") ?  
    //     <GreetFrench names= {namesList}></GreetFrench>
    //      :  <GreetEnglish names= {namesList}></GreetEnglish>}
    // </div>

    // React Fragment
    <div>
      
      <>
      <GreetFrench names= {namesList}></GreetFrench>
      <GreetEnglish names= {namesList}></GreetEnglish>
      </>
    </div>
  );
}

function GreetEnglish({names}) {
 return (
   names.map((name, i )=> (
     <div key={i}>
        <p > 
              Good Morning, my name is {name}
        </p>
     </div>
   ))
 );
}

function GreetFrench({names}) {
  return (
    names.map((name, i )=> (
      <div key={i}>
         <p > 
               Bonjour, Je m'applle est {name}
         </p>
      </div>
    ))
  );
}

// Learning UseState
function ExperimentUseState() {
  const [year, setYear] = useState(2050);
  const [status, setStatus] = useState("Open");
  const [manager, setManager] = useState("Alex");

  return (
 <>
 <div>

  <h1>{year}</h1>
  <button onClick={() => setYear(year + 1)}>New Year</button>

 </div>
 
    <div>
       <h1>Manager on Duty : {manager}</h1>
       <button onClick={() => setManager("Rachel")}>New Manager</button>
    </div>

    <div>
      <h1>Status : {status}</h1>
        <button onClick={() => setStatus("Closed")}>Closed</button>

        <button onClick={() => setStatus("Open")}>Open</button>

        <button onClick={() => setStatus("Back in 5")}>Break</button>
    </div>

    </>
  );
}


ReactDOM.render(

    // <h1 style={{color:"red"}}>
    //   {city.name} is in {city.country}
    //   </h1>,

     // React Component
    <Hello cities= {cityList} />,
     document.getElementById('root')   
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn  more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
