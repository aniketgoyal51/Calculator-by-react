import React ,{useState} from 'react'
import Display from './Display'
import "./css.css"

const Keys = () => {
    const [equation,setequation]= useState('')

    function HandleDel(){
        let eq=equation
        if(typeof(eq)!="string"){
            eq=eq.tostring()
        }
        setequation(eq.substring(0,eq.length-1))
    }

    function HandleAC(){
        setequation("")
    }

    function Handlevalues(e){
        setequation(equation+e.target.value)
    }
    
    function HandleEquals(){
        setequation(eval(equation))
    }

    return (
    <>
    <h1>Calculator</h1>
        <div className='container'>
        <div>
            <Display name={equation}/>
        </div>
            <div>
                <button onClick={HandleDel} className='b1'>Del</button>
                <button onClick={HandleAC} className='b1'>AC</button>
                <button onClick={(e)=>Handlevalues(e)} value="/">/</button>
            </div>
            <div>
                <button onClick={(e)=>Handlevalues(e)} value="7">7</button>
                <button onClick={(e)=>Handlevalues(e)} value="8">8</button>
                <button onClick={(e)=>Handlevalues(e)} value="9">9</button>
                <button onClick={(e)=>Handlevalues(e)} value="*">*</button>
            </div>
            <div>
                <button onClick={(e)=>Handlevalues(e)} value="4">4</button>
                <button onClick={(e)=>Handlevalues(e)} value="5">5</button>
                <button onClick={(e)=>Handlevalues(e)} value="6">6</button>
                <button onClick={(e)=>Handlevalues(e)} value="-">-</button>
            </div>
            <div>
                <button onClick={(e)=>Handlevalues(e)} value="1">1</button>
                <button onClick={(e)=>Handlevalues(e)} value="2">2</button>
                <button onClick={(e)=>Handlevalues(e)} value="3">3</button>
                <button onClick={(e)=>Handlevalues(e)} value="+">+</button>
            </div>
            <div>
                <button onClick={(e)=>Handlevalues(e)} value=".">.</button>
                <button onClick={(e)=>Handlevalues(e)} value="0">0</button>
                <button onClick={HandleEquals} className='b2'>=</button>
            </div>
        </div>
    </>
)
}

export default Keys