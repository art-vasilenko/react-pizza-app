import { useState } from 'react'
import { Button } from './components/Button/Button'


export function App() {

  const [counter, setCounter] = useState<string>('Кнопка')

  return (
    <>
      <Button onClick={() => setCounter(counter + ' ' + 'нажатая')}>{counter}</Button>
    </>
  )
}