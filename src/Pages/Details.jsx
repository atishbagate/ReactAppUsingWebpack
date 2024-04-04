import React from 'react'
import Button from "../Button/Button"
import { useHistory } from 'react-router-dom';

function details() {
    const history = useHistory();
    return (
        <div>This is details page.
            <Button title="Go to Home" onClick={() => { history.push("/") }} />
        </div>
    )
}

export default details