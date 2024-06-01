import { useState } from 'react'
import './App.css'
import { FiPlus } from "react-icons/fi";
import { IoMdRemove } from "react-icons/io";


function App() {

    const [data , setData] = useState(0)
    

    const handelAdd = ()=>{
      setData(data + 1)
    }
     const handelremove = ()=>{
      setData(data - 1)

     }

  return (
    <>

<div className='flex gap-5'>
<button onClick={handelremove} className='p-5 border- 2 border- solid bg-white 700 rounded-sm hover:bg-red-400 trsanition-all'><IoMdRemove /> </button>

<h1 className='text-2xl font-bold text-black'> {data} </h1>
<button onClick={handelAdd} className='p-5 border- 2 border- solid bg-white 700 rounded-sm hover:bg-green-400 trsanition-all'><FiPlus /> 

 </button> 
 
</div>


    </>
  )
}

export default App
