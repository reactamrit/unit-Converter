import { React, useState } from 'react'
import { Link } from "react-router-dom";
// http://www.liangshunet.com/en/202005/857299982.htm
const Numberconvert = (props) => {
    const [sel1, setsel1] = useState('')
    const [sel2, setsel2] = useState('')
    const [value, setvalue] = useState('')
    const [result, setresult] = useState('')
    // const [binary, setbinary] = useState('')
    // function to check whether string is nary or not 
    function checkString(str) {
        let isBinary = false;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "0" || str[i] === "1") {
                isBinary = true;
            } else {
                isBinary = false;
            }
        }
        return isBinary;
    }
    const handleClick = (e) => {
        e.preventDefault()
        if (sel1 === '' || sel2 === '' || value === '') {
            document.getElementById('error').innerHTML = "Please Fill All the InputField"
        }
        else {
            document.getElementById('error').innerHTML = ""
            if (sel1 === 'd' && sel2 === 'b') {
                setresult(Number(value).toString(2));
            }
            else if (sel1 === 'd' && sel2 === 'o') {
                setresult((Number(value).toString(8)))
            }
            else if (sel1 === 'b' && sel2 === 'd') {
                if (checkString(value.toString())) {
                    setresult((parseInt(Number(value), 2)))
                }
                else {
                    document.getElementById('error').innerHTML = "Number you have Enter is Not Binary. Please enter number containing 0 and 1 only"
                    setresult('')
                }




            }
            else if (sel1 === 'b' && sel2 === 'o') {

                setresult(parseInt(Number(value), 2).toString(8));
                // first convert binary to decimal Convert decimal to octal

            }

            else if (sel1 === 'o' && sel2 === 'd') {
                setresult((parseInt(Number(value), 8)))

            }
            else if (sel1 === 'o' && sel2 === 'b') {

                setresult(Number(value).toString(2))
            }


            else if (sel1 === 'd' && sel2 === 'd') {
                setresult(Number(value))

            }
            else if (sel1 === 'b' && sel2 === 'b') {
                setresult(Number(value))

            }
            else if (sel1 === 'o' && sel2 === 'o') {
                setresult(Number(value))

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
                            <option value="" disabled selected hidden>Choose a Number System</option>
                            <option value="d">Decimal</option>
                            <option value="b">Binary</option>
                            <option value="o">Octal</option>

                        </select>
                        <div className="data">
                            <h3 >Value</h3>
                            <input type="number" name='value' value={value} onChange={(e) => { setvalue(e.target.value) }} required />

                        </div>
                        <h3>To</h3>
                        <select name="temp1" value={sel2} id="temp1" onChange={(e) => { setsel2(e.target.value) }} required>
                            <option value="" disabled selected hidden>Choose a Number System</option>
                            <option value="d">Decimal</option>
                            <option value="b">Binary</option>
                            <option value="o">Octal</option>

                        </select>

                        <input type="submit" value="Claculate" onClick={handleClick} />
                        <div className="result">
                            <h3>Result :</h3>
                            <span id='result'>{(result)}</span>


                        </div>
                    </form>

                </div>


            </div>


        </div>
    )
}

export default Numberconvert
