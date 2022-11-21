import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [result, setResult] = useState('');
    

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const sin = () => {
     const   x1 = parseInt(result)
     const x =  Math.sin(x1*(Math.PI/180))
    setResult (x.toString())
    }
    const cos = () => {
     const   x1 = parseInt(result)
     const x =  Math.cos(x1*(Math.PI/180))
    setResult (x.toString())
    }
    const Tan =()=>{
        const x1 = parseInt(result)
        const x =  Math.tan(x1*(Math.PI/180))
        setResult(x.toString())
    }
    const Absluot  =()=>{
        const x1 = parseInt(result)
        const x = Math.abs(x1)
        setResult(x.toString())
    }
    const Sequre   =()=>{
        const x1 = parseInt(result)
        const x = Math.sqrt(x1,2)
        setResult(x.toString())
    }
    const Power    =()=>{
        
        if (result.length===1) {
            setResult(result.concat('^'));
        }
        else {  
            const x1 = parseInt(result[0])
        const x2 = parseInt(result[2])
        const x = x1**x2
        setResult(x.toString())
        }

        //  const arr=result.split("^")
        // const x1 = parseInt(result[0])
        // const x2 = parseInt(result[1])
        // const x = x1**x2
        // setResult(x.toString())
    }
    
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1)); // Or -1
    }
    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Error")
        }        
    }
    return (
        <>
          <div className="container">
              <form>
                  <input type="text" value={result} />
              </form>

              <div className="keypad">
                  <button className="highlight" onClick={clear} id="clear">Clear</button>
                
                  <button className="highlight" onClick={backspace} id="backspace">C</button>
                  <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
                  
                  <button name="7" onClick={handleClick}>7</button>
                  <button name="8" onClick={handleClick}>8</button>
                  <button name="9" onClick={handleClick}>9</button>
                  <button className="highlight" name="*" onClick={handleClick}>&times;</button>
                  <button name="4" onClick={handleClick}>4</button>
                  <button name="5" onClick={handleClick}>5</button>
                  <button name="6" onClick={handleClick}>6</button>
                  <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
                  <button name="1" onClick={handleClick}>1</button>
                  <button name="2" onClick={handleClick}>2</button>
                  <button name="3" onClick={handleClick}>3</button>
                  <button className="highlight" name="+" onClick={handleClick}>+</button>
                  <button name="0" onClick={handleClick}>0</button>
                
                  <button className="highlight" onClick={calculate} id="result">=</button>
                  <button name="." onClick={handleClick}>.</button>
                  <button className="highlight" name="Sin" onClick={sin}>sin</button>
                  <button className="highlight" name="Cos" onClick={cos}>cos</button>
                  <button className="highlight" name="Tan" onClick={Tan}>Tan</button>
                  <button className="highlight" name="Sequre" onClick={Sequre}>Sqre</button>
                  <button className="highlight" name="^" id='pow' onClick={Power}>Pow</button>
                  <button className="highlight" name="Absluot " id='abs' onClick={Absluot}>Abs</button>
                
                 
              </div>
          </div>
        </>
    );
}

export default App;
