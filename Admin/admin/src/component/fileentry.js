import { useState } from 'react';

const Entry = (init) => {
    const[a,seta]=useState(init)
    const reset = () => {
        seta('')
    }
    const inp={
        value:a,
        onChange:(e)=>seta(e.target.value),
    }
    return [a,inp, reset];
}

export default Entry;
