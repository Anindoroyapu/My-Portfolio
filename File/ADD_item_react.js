const domContainer = document.querySelector("#container");

const Fruits = ()=>{
    const[fruit,setFruit] = React.useState('');
    const[fruits,setFruits]=React.useState(['mango','gouava','apple','orange']);
    return(
        <div className="container">
            <ul id="fruits">
                {
                    fruits.sort().map((fruit,index)=>(
                    <li key={index}>{fruit}</li>))
                }
            </ul>
            <br/>
            <p>
                <input type="text" value={fruit} onClick={(e)=> setFruit(e.target.value)} />
            </p>
            <button onClick={()=>setFruits([...frutes, fruit])}>Add Item</button>

        </div>
        
    );

}