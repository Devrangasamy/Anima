import { useState } from 'react'

function UseFormInp(init) {
    const[data, setData] = useState(init)
    const reset = () => {
        setData('')
    }
    const inputAttribute = {
        onChange : (event) => setData(event.target.value),
        required : true
    }
    return [data, inputAttribute, reset]
}

export default UseFormInp