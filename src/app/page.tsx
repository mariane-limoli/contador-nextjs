"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] =   useState(0);
 
  function incrementar(){
    setCount(count+1);
  }

  function decrementar(){
    setCount(count-1);
  }

  const [inputValue, setInputValue] = useState('');
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setInputValue(e.target.value);
  }

useEffect(() => {
  console.log('useEffect funcionando');
  return () => {
    console.log('Cleanup function: O componente será desmontado ou useEffect será executado novamente.');
  };
},[])

  return (
    <main className="main-container flex flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        <p className='text-4xl font-semibold' >Contador</p>
        <button onClick={decrementar} >-</button>
        <span>{count}</span>
        <button onClick={incrementar} >+</button>
      </div>
      <div>
        <input 
          type="text"
          placeholder="Digite aqui"
          className='text-black text-2xl bg-red border-2 border-black rounded-lg p-3 w-[auto]'
          value={inputValue}
          onChange={handleChange}
         />
         <p>Texto digitado aparece abaixo:</p>
         <div className='border-2 border-white rounded-lg h-8 p-2'>
          <p>{inputValue}</p>
         </div>
      </div>
    
    </main>
  )
}
