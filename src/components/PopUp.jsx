import React, { useEffect, useState } from 'react'

function PopUp({isOpen,setIsOpen,category}) {

    const [data, setData] = useState();

    

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then((result) => {
            result.json().then((resp) =>{
                
                setData(resp)
               
            })
        })
    },[category])

    return (
        <div onClick={() => setIsOpen(false)} className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${isOpen ? '' : 'hidden'}`}>
        <div className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
          <div className="text-xl font-bold">Jokes On  {data?.categories[0]}</div>
          <div className="-mx-4 my-3 border-y px-4 py-4 flex flex-wrap gap-4">
            {data?.value}
          </div>
          <div className="flex justify-end gap-4">
            <button className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60">
              Next
            </button>
            <button className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            
          </div>
        </div>
      </div>
    )
}

export default PopUp