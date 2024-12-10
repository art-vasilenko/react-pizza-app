import { useState } from 'react'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'


export function App() {

  const [counter, setCounter] = useState<string>('Кнопка')

  return (
    <>
      <Button onClick={() => setCounter(counter + ' ' + 'нажатая')}>{counter}</Button>
      <Button appearence='big' onClick={() => setCounter(counter + ' ' + 'нажатая')}>{counter}</Button>
      <Input isValid placeholder='Email'/>
    </>
  )
}