import './SecondForm.scss';

function SecondForm () {

    return(
        <form className="form2">
            <label className="form2__label" htmlFor="secondForm">Millimeters</label>
            <input className="form2__field" type="number" name="secondForm" id="secondForm" placeholder="12" required />
        </form>
    )
}

export default SecondForm;