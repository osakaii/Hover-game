
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState()
  const [block,setBlock] = useState()
  const [blocks,setBlocks] = useState([])
  const [arena,setArena] = useState('App')
  // const [x,setX] = useState(0)
  // const [y,setY] = useState(0)
  return (
    <div className = " full">
      <div>
      <select className="select" onChange= {(e)=>{
      setCount(e.target.value)
    }}>
      <option value= "0">select</option>
      <option value= "4">2x2</option>
      <option value= "9">3x3</option>
      <option value= "16">4x4</option>
      <option value= "25">5x5</option>
    </select>
    <button className="button" onClick = {()=>{
      switch(count){
        case "4":
          setArena('App2x2')
          break
        case "9":
          setArena('App3x3')
          break
        case "16":
          setArena('App4x4')
          break
        case "25":
          setArena('App5x5')
          break
      }
      let arr = []
      let x = 1
      let y = 1
      for(let i = 0;i< count;i++){
        arr.push({name: 'block',active: false,x,y})
        if(x === Math.sqrt(count)){
          x = 0
          y++
        }
        x++
      }
      setBlocks(arr)
      console.log(blocks)
    }}>Start</button>
    
    <div className={arena} id = 'Arena'onMouseMove = {(e)=>{
      setBlock(e.target)}}>
      {
        blocks.map((el,index)=>{
          return (
          <div className= {el.name} key= {index} id = {index} onMouseMove={(e)=>{
            block === e.target?el.active = true: el.active = false
            if(blocks[index].active === false){
              if(el.name == 'block'){
                el.name = 'block active'
              }
              else if(el.name === 'block active'){
                el.name = 'block'
              }
            }
          }}></div>
          )
        })
      }
    </div>
      </div>
   
      <div className= 'coord'>
        <h1>Hover squares</h1>
        {
          blocks.map((el,index)=>{
            if(el.name === "block active"){
                return(
                  <div className = "coord_div">
                    <h1>row: {el.x} column: {el.y}</h1>
                  </div>
                )
            }
          })
        }
      </div>
    </div>
  );
}

export default App;
