import './FirstForm.scss';

function FirstForm () {

// function handleChange (e) {
//     e.preventDefault();
 
//     const input = e.target.firstForm;
    
//     if (typeof input !== "number") {
//         return "Please input a number!"
//     }

// }

    return (
        <form className="form1">
            <label className="form1__label" htmlFor="firstForm">Ounce</label>
            <input className="form1__field" type="number" name="firstForm" id="firstForm" placeholder="12" required />
        </form>
    )
}

export default FirstForm;