import React from 'react'
import { useHistory } from 'react-router-dom';

function login() {
    const history = useHistory();
    return (
        <div>this is login Page

            <Button title="Go to Home" onClick={() => { history.push("/") }} />
        </div>
    )
}

export default login