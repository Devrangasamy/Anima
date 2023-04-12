import { useState } from 'react'

export const Singlechange = (init) => {
  const [name, setName] = useState(init)
  const updateName = (e) => {
    setName(e.target.value)
  }
  return [name, updateName]
}
