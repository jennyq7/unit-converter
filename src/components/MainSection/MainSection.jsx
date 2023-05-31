import './MainSection.scss';
import { useState} from 'react';

function MainSection () {

    const [result, setResult] = useState("");


    function handleSubmit (e) {
        e.preventDefault();

        const ounceNum = Number(e.target.ounce.value);
        
        if (typeof ounceNum === "number") {
            setResult((ounceNum * 29.574).toFixed(2));
        } 
        else {return "Please enter a number in the box above."}
        
        
    }

    
    return (
        <main className="main">
           <h3 className="main__text">Use the form to get your conversion!</h3> 
           <form className="main__form" onSubmit={handleSubmit}>
              <label className="main__form-ounce-label" htmlFor="ounce">Ounce</label>
              <input className="main__form-ounce-field" type="number" name="ounce" id="ounce" placeholder="12" required />
              <button className="main__form-button">Convert!</button>
              <label className="main__form-mill-label">Millimeters</label>
              <aside className="main__form-result">{result}</aside>        
           </form>
        </main>
    )


}

export default MainSection;