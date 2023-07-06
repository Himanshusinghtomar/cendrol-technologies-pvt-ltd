import React, { useEffect, useState } from 'react'
import PopUp from './PopUp'

function Card() {

    const [isOpen , setIsOpen] = useState(false)
    const [data,setData] = useState([])
    const [category, setCategory] = useState('animal');

    useEffect(() => {
        
        fetch("https://api.chucknorris.io/jokes/categories").then((result) => {
            result.json().then((resp) =>{  
                setData(resp)
                console.log(resp)
            })
        })

    },[category])
          
  return (
    <div>
        <div className='  flex justify-center flex-wrap'>
        {data.map((item) => (
            <button className='m-4 rounded shadow-md p-2 border hover:border-gray-800 text-center bg-white sm:p-10 w-52' onClick={() =>{ setIsOpen(true); setCategory(item)}}  >
                <h1 className=' text-blue-950 text-2xl font-bold '>{item}</h1>
                <p className=' text-purple-700 mt-2 hidden sm:block'>Unlimited Jokes On {item}</p>
            </button>
        ))}
        </div>
        <PopUp isOpen={isOpen} setIsOpen={setIsOpen} category={category}/>
    </div>
  )
}

export default Card