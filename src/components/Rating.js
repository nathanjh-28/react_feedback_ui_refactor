import React from 'react'



const Rating = ({ title, imageLink, selectedClass }) => {

    return (
        <div className={`rating ${selectedClass}`}>
            <img src={imageLink} />
            <small>{title}</small>
        </div>
    )
}

export default Rating
