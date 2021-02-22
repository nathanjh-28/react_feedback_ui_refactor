import React from 'react'

const Button = ({ formSubmit }) => {
    return (
        <button onClick={formSubmit} className="btn" id="send">Send Review</button>
    )
}

export default Button
