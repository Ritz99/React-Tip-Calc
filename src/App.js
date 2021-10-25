import React, {useState} from 'react';

import './App.css';



function App() {

const [name, setName] = useState("");

const [bill, setbill] = useState("");

const [tip, setTip] = useState(20);

const [state, setstate] = useState([]);

const [total, setTotal] = useState()



const tipcal = () => {

const a=(bill * tip) / 100;

const data= {hi:name, not:a}

setstate([...state, data]);

};



const tipscollected=()=>{

setTotal((bill * tip) / 100);



}

return (

<div className="App">

<div>

<h1>TIP CALCULATOR</h1>

</div>

<div>

<input

type="text"

value={name}

onChange={(e) => {

setName(e.target.value);

}}

placeholder="ENTER YOUR NAME"

/>

<input

type="number"

value={bill}

onChange={(e) => {

setbill(e.target.value);

}}

placeholder="IN RUPEE"

/>



<select

value={tip}

onChange={(e) => {

setTip(e.target.value);



}}

>

<option value="20">Excellent</option>

<option value="10">Good</option>

<option value="5">Fine</option>

</select>



<button onClick={tipcal}>ADD CUSTOMER</button>

</div>

<div>

<table>

<ul>

{state.map((ele) => (

<li>

{ele.hi} is offering a tip of {ele.not}

</li>

))}

</ul>

</table>

</div>

<button onClick={tipscollected}>Total tip</button>

<li>{state.length}</li>




</div>

);

}



export default App;