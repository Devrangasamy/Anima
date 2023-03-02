import { useState } from 'react'

function UseFormInp(init) {
    const[data, setData] = useState(init)
    const inputAttribute = {
        name : data,
        onChange : (event) => setData(event.target.value)
    }
    return [data, inputAttribute]
}

export default UseFormInp