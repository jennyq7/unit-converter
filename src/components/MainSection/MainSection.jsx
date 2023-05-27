import './MainSection.scss';
import { useState} from 'react';

function MainSection () {

    const [result, setResult] = useState("");


    function handleSubmit (e) {
        e.preventDefault();

        const ounceNum = e.target.ounce.value;
         console.log(e.target.ounce);
        if (typeof ounceNum === "number") {
            setResult(ounceNum * 29.574);
        }
        else {return "Please enter a number in the box above."}

        
    }


    return (
        <main className="main">
           <h3 className="main__text">Use the form to get your conversion!</h3> 
           <form className="main__form">
              <label className="main__form-ounce-label" htmlFor="ounce">Ounce</label>
              <input className="main__form-ounce-field" type="number" name="ounce" id="ounce" placeholder="12" required />
              <button className="main__form-button" onClick={handleSubmit}>Convert!</button>
              <label className="main__form-mill-label" htmlFor="mill">Millimeters</label>
              <span>{result}</span>        
           </form>
        </main>
    )


}

export default MainSection;