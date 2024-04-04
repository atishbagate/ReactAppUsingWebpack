import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button.jsx';

function login() {
    const history = useHistory();
    return (
        <div>this is login Page
            <br/><br/><br/>
            <Button title="Go to Home" onClick={() => { history.push("/") }} />
        </div>
    )
}

export default login