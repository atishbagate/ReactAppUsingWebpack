import React from 'react'
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
  return (
    <div>
       this is Home page.
       <Button title="Go to Login" onClick={() => { history.push("/login") }} />
       <Button title="Go to Details" onClick={() => { history.push("/details") }} />
    </div>
  )
}

export default Home