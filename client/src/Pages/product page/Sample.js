import React, { useState } from 'react'

export const Sam = (init) => {
  const [name, setName] = useState(init)
  const updateName = (event) => {
    setName(event.target.value)
  }
  return [name, updateName]
}
