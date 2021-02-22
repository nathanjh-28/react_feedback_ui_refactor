import { useState } from 'react'
import './App.css';
import RatingsContainer from './components/RatingsContainer'
import Button from './components/Button'



function App() {




  const formSubmit = (se) => {
    const panel = document.querySelector('#panel')
    panel.innerHTML =
      `<i class='fas fa-heart'></i>
        <strong>Thank You! </strong>
        <br>` +
      /* <strong>Feedback: ${selectedRating}</strong> */
      `<p>We'll use your feedback to improve our customer support </p>`
  }

  return (
    <div className="panel-container" id="panel">
      <strong>How satisfied are you with our <br />
        customer support performance?</strong>
      <RatingsContainer />

      <Button formSubmit={formSubmit} />

    </div>
  );
}

export default App;
