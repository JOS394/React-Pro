import React,{ useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value } ) => {
  const [counter,setCounter]=useState(value);// [] retorna arrays

  
const handleAdd = () =>setCounter(counter+1);
 // setCounter( (c)=>c + 1 )
 

  
const handleSubtract = () =>setCounter(counter-1);
 // setCounter( (c)=>c + 1 )


const handleReset = () =>  setCounter(value);
 // setCounter( (c)=>c + 1 )

return(
        <>
            <h1>CounterApp</h1> 
            <h1> {counter}  </h1>

            <button onClick={ handleAdd }> + 1 </button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>


</>

)}
CounterApp.propTypes={
    value:PropTypes.number
}

export default CounterApp;
