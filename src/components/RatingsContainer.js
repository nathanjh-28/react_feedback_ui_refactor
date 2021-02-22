import { useState } from 'react'
import Rating from './Rating'


const happyImgLink = 'https://image.flaticon.com/icons/svg/187/187133.svg';
const neutralImgLink = 'https://image.flaticon.com/icons/svg/187/187136.svg';
const unhappyImgLink = 'https://image.flaticon.com/icons/svg/187/187150.svg';



const RatingsContainer = (props) => {

    const [selectedRating, setRating] = useState('Satisfied')

    const removeActive = () => {
        const ratings = document.querySelectorAll('.rating')
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.remove('active')
        }
    }

    const handleClick = (e) => {
        if (e.target.parentNode.classList.contains('rating')) {
            removeActive()
            e.target.parentNode.classList.add('active')
            setRating(e.target.nextElementSibling.innerHTML)
            console.log(selectedRating)
        }
    }


    return (

        <div onClick={handleClick} className="ratings-container">
            <Rating title="Unhappy" imageLink={unhappyImgLink} selectedClass="" />
            <Rating title="Neutral" imageLink={neutralImgLink} selectedClass="" />
            <Rating title="Satisfied" imageLink={happyImgLink} selectedClass="active" />
        </div>

    )
}

export default RatingsContainer


// const handleClickUnhappy = (e) => {
//     e.preventDefault();
//     if (e.target.parentNode.classList.contains('rating') || e.target.classList.contains('rating')) {
//         console.log('hello')
//         // removeActive()
//         // e.target.parentNode.classList.add('active')
//         // selectedRating = e.target.nextElementSibling.innerHTML
//     }
// }
// const handleClickNeutral = (e) => {
//     e.preventDefault();
//     console.log(e.target)
// }
// const handleClickSatisfied = (e) => {
//     e.preventDefault();
//     console.log(e.target)
// }