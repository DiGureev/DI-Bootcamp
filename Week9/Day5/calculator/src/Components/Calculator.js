import {useState} from 'react'


const Calc = () => {

    const [numbers, setNums] = useState({
        first: null,
        second: null,
        value: 'addition'
    })

    const getVal =(e) => {
        e.preventDefault();
        let newObj = {...numbers}
        newObj.first = Number(e.target.form.first.value)
        newObj.second = Number(e.target.form.second.value)
        setNums(newObj)
    }

    const changeResult = (val) => {
        if (val == 'addition'){
            return numbers.first + numbers.second
        } else if (val == 'substraction'){
            return numbers.first - numbers.second
        } else if (val == 'mutiplication'){
            return numbers.first * numbers.second
        } else if (val == 'division') {
            return numbers.first / numbers.second
        }
    }

    return (
        <div className='main'>
            <h2>Adding Two Numbers</h2>
            <form>
                <input type='number' name='first'/>
                <input type='number' name='second'/>

                <select onChange={(e)=> numbers.value = e.target.value}>
                    <option value='addition'>Addition</option>
                    <option value='substraction'>Substraction</option>
                    <option value='mutiplication'>Mutiplication</option>
                    <option value='division'>Division</option>
                </select>
                
                <br/><button onClick={(e)=> getVal(e)}>Add Them!</button>
            </form>
            <div className='result'>{changeResult(numbers.value)}</div>
        </div>
    )
}

export default Calc