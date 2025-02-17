import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import './Success.css'

export const Success = () => {
    const navigate = useNavigate()
  return (
    <div className="success">
        <p className="text">Ваш заказ успешно оформлен</p>
        <Button appearence="big" onClick={() => navigate('/')}>Сделать новый заказ</Button>
    </div>
  )
}
