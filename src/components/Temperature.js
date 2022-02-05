import { React, useState } from 'react'
import { Link } from "react-router-dom";
const Temperature = (props) => {
    const [sel1, setsel1] = useState('')
    const [sel2, setsel2] = useState('')
    const [value, setvalue] = useState('')
    const [tail, settail] = useState('')
    const [result, setresult] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        if (sel1 === '' || sel2 === '' || value === '') {
            document.getElementById('error').innerHTML = "Please Fill All the InputField"

        }
        else {
            document.getElementById('error').innerHTML = ""
            if (sel1 === 'c' && sel2 === 'f') {
                setresult((Number(value) * 9/5) + 32)
                settail('F')

            }
            else if (sel1 === 'c' && sel2 === 'k') {
                setresult((Number(value)+273.15))
                settail('K')
            }
            else if (sel1 === 'f' && sel2 === 'c') {
                setresult((Number(value)-32) * 5/9)
                settail('C')
            }
            else if (sel1 === 'f' && sel2 === 'k') {
                setresult((Number(value) - 32) * 5/9 + 273.15)
                settail('K')
            }
            else if (sel1 === 'k' && sel2 === 'c') {
                setresult((Number(value) - 32) * 5/9 + 273.15)
                settail('C')
            }
            else if (sel1 === 'k' && sel2 === 'f') {
                setresult((Number(value)- 273.15) * 9/5 + 32)
                settail('F')
            }
            else if (sel1 === 'c' && sel2 === 'c') {
                setresult(Number(value))
                settail('C')
            }
            else if (sel1 === 'k' && sel2 === 'k') {
                setresult(Number(value))
                settail('K')
            }
            else if (sel1 === 'f' && sel2 === 'f') {
                setresult(Number(value))
                settail('F')
            }

        }
    }
    return (
        <div className='container'>
            <div className="main">
                <div className="top">
                    <h4> Convert {props.name}</h4>
                    <Link to='/'><i class="fa fa-home fa-2x" aria-hidden="true"></i></Link>

                </div>
                <hr />
                <div className="convert">
                    <span id='error'></span>
                    <form action="">
                        <h3>From</h3>
                        <select name="temp1" value={sel1} id="temp1" onChange={(e) => { setsel1(e.target.value) }} required>
                            <option value="" disabled selected hidden>Choose a Temperature</option>
                            <option value="c">Celsius</option>
                            <option value="f">Fahrenheit</option>
                            <option value="k">Kelvin</option>
                        </select>
                        <div className="data">
                            <h3 >Value</h3>
                            <input type="Number" namee='value' value={value} onChange={(e) => { setvalue(e.target.value) }} required />

                        </div>
                        <h3>To</h3>
                        <select name="temp1" value={sel2} id="temp1" onChange={(e) => { setsel2(e.target.value) }} required>
                            <option value="" disabled selected hidden>Choose a Temperature</option>
                            <option value="c">Celsius</option>
                            <option value="f">Fahrenheit</option>
                            <option value="k">Kelvin</option>
                        </select>

                        <input type="submit" value="Claculate" onClick={handleClick} />
                        <div className="result">
                            <h3>Result :</h3>
                            <span id='result'>{Number(result).toFixed(2)}{tail}</span>


                        </div>
                    </form>

                </div>


            </div>


        </div>
    )
}

export default Temperature
