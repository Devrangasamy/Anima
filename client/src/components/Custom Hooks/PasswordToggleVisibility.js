import React, { useState } from 'react'

import {FaEye} from 'react-icons/fa'
export const PasswordToggleVisibility = () => {
    const[visibility, setVisibility] = useState(false)
    return [visibility, setVisibility]
}
