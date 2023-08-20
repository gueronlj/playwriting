
import { useState } from 'react';
import './App.css'

const ZipcodeInput = () => {
  const [zipcode, setZipcode] = useState(null);
  const [userInput, setUserInput] = useState(null);

  const handleInput = (e) => {
    setUserInput(e.target.value)
   }
 
   const handleSubmit = () => {
     setZipcode(userInput)
   }
 
   const handleChangeZipcode = () => {
     setZipcode(null)
   }
   
  return (<>
    { zipcode ? <>
      <h2>Current zip-code: {zipcode}</h2> 
      <button onClick={handleChangeZipcode}>Change</button>
    </>
    :
      <div className="zipcode-input">
        <h2>Enter your zipcode:</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleInput}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    }       
  </>)
}

function App() {

  return (
    <div>
      <h1>Grocery Pro</h1>
      <ZipcodeInput/>
    </div>
  )
}

export default App
