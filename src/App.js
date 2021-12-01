
import { useState } from 'react';
import './App.css';

function App() {
  const [block,setBlock] = useState()
  const [blocks,setBlocks] = useState([
    {name: 'block',active: false},
    {name:'block',active: false},
    {name:"block",active: false},
    {name:"block",active: false}])
  const Arena = 'App'
  return (
    <div className={Arena} onMouseMove = {(e)=>{
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
  );
}

export default App;
