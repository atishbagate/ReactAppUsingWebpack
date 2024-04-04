import React from 'react'
import Button from "../Button/Button.jsx"
import { useHistory } from 'react-router-dom';

function details() {
    const history = useHistory();
    return (
        <div>This is details page.
             <br/><br/><br/>
            <Button title="Go to Home" onClick={() => { history.push("/") }} />
        </div>
    )
}

export default details