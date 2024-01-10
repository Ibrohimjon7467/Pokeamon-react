import { useState } from "react"
import { useFetch } from "./hooks/useFetch"

function App() {

  const randomID = Math.floor(Math.random() * 150) + 1

  const [id, setID] = useState(randomID)
  const { data, ispending, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  return (
    <div className="w-full max-w-screen flex flex-col items-center select-none">
      {data && (
        <div className="bg-white shadow-xl flex flex-col shadow-slate-300 px-7 py-5 relative rounded-lg">
          <div className="bg-neutral-300 font-bold uppercase right-3 py-1 px-4 rounded-full absolute">
            hp {data.stats[0].base_stat}
          </div>
          <div className="flex flex-col items-center mt-12">
            {ispending ? <div className="my-[95px]" role="status">
              <svg aria-hidden="true" className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span class="sr-only">Loading...</span>
            </div> : <img className="object-contain w-[230px] h-[230px] mb-8" src={data.sprites.other.dream_world.front_default} />}
            <h1 className="text-3xl capitalize font-bold mb-6">{data.name}</h1>
            <div className="mb-10 text-white bg-orange-500 py-1 px-5 rounded-full">
              {ispending ? <div role="status" className="py-1 px-5">
                <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div> : data.types[0].type.name}
            </div>
          </div>
          <div className="flex gap-16 justify-between items-center">
            <div className="text-center">
              <h2 className="text-lg font-bold">{data.stats[1].base_stat}</h2>
              <span>Attack</span>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">{data.stats[2].base_stat}</h2>
              <span>Defense</span>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">{data.stats[5].base_stat}</h2>
              <span>Speed</span>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setID(randomID)} className="bg-black text-white py-3 px-12 text-lg rounded-lg mt-7">
        Generate
      </button>
      {error && <h1>Something went wrong!</h1>}
    </div>
  );
}

export default App
