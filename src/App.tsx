import { useState } from 'react'
import Lottie from 'lottie-react'
import './App.css'
import AnimRocket from './assets/animations/AnimRocket.json'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='anim'>
      <Lottie animationData={AnimRocket}></Lottie>
      </div>
      <h1>Vite + React starter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
