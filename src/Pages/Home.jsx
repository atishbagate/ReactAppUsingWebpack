import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from "../Button/Button.jsx"

function Home() {
    const history = useHistory();
  return (
    <div>
       this is Home page.
       <br/><br/><br/>
       <Button title="Go to Login" onClick={() => { history.push("/login") }} />
       <Button title="Go to Details" onClick={() => { history.push("/details") }} />
    </div>
  )
}

export default Home