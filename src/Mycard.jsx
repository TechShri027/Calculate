import { useEffect, useState } from "react";

function Mycard() {
  const [input, setinput] = useState("");
  

  useEffect(()=>{

    console.log("Mount")
  },[

  ])

  function handleclick(input) {
    setinput(input);
    console.log("Shubham")
  }

//   set all value as String 

  function values(e){
    const result = input +""+e
    setinput(result)
  }

function ShowResult(){
    const allvalues = input
    console.log(allvalues)
    const numResult =eval(allvalues)
    
}

  return (
    <>
      <div className="main">
        <div className="input">
          <input type="text" readOnly value={input} />
        </div>

        <div className="buttons">
          <div className="row1">
            <button>AC</button>
            <button>DE</button>
            <button onClick={(e) => handleclick()}>%</button>

         
             
           
          </div>
          <div className="row2">
            <button onClick={(e)=>values(7)}>7</button>
            <button onClick={(e)=>values(8)}>8</button>
            <button onClick={(e)=>values(9)}>9</button>
            <button onClick={(e)=>values("*")}>*</button>
          </div>
          <div className="row3">
            <button onClick={(e)=>values(4)}>4</button>
            <button onClick={(e)=>values(5)}>5</button>
            <button onClick={(e)=>values(6)}>6</button>
            <button onClick={(e)=>values("-")}>-</button>
          </div>
          <div className="row4">
            <button onClick={(e)=>values(1)}>1</button>
            <button onClick={(e)=>values(2)}>2</button>
            <button onClick={(e)=>values(3)}>3</button>
            <button onClick={(e)=>values("+")}>+</button>
          </div>
          <div className="row1">
            <button onClick={(e)=>values("e")}>e</button>
            <button onClick={(e)=>values(0)}>0</button>
            <button onClick={(e)=>values(".")}>.</button>
            <button onClick={ShowResult()}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mycard;
