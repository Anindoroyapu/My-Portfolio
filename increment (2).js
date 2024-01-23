<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <div id="root"></div>

    <!--Load React-->

    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>  
    
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel" src="increment.js"></script>

    
</body>
</html>


..............................................
const domContainer = document.querySelector("#root");

const Increment =()=>{
    return(
        <div>
        <h1 id="display">0 </h1>
        <div>
            <button id="button">Increment +</button>
        </div>
    </div>

    )
}


ReactDOM.render(<Increment/>, domContainer);
let number =0;

 const display=document.querySelector("#display");
 const button=document.querySelector("#button");

 button.addEventListener("click",()=>{
    number++;
    display.textContent= number;
 });

-------------------------------------------
Use useState-----



const domContainer = document.querySelector("#root");

const Increment =()=>{
    const[counter,setCounter]= React.useState(0);

    return(
        <div>
        <h1 id="display">{counter} </h1>
        <div>
            <button id="button" onClick={()=>setCounter(counter +1)}>Increment +</button>
        </div>
    </div>

    )
}
ReactDOM.render(<Increment/>,domContainer)
---------------------------------------------

