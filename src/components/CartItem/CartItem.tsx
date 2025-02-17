import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import './CartItem.css'


export interface CartItemProps {
    id: number;
    name: string;
    image: string;
    price: number;
    count: number
}

export const CartItem = (props: CartItemProps) => {
    const dispath = useDispatch<AppDispatch>()

    const increase = () => {
            dispath(cartActions.add(props.id))
    }
    const descrease = () => {
           
    }
    const remove= () => {
           
    }

    return (
        <div className='item'>
            <div 
                className="image" style={{ backgroundImage: `url('${props.image}')` }}>
            </div>
            <div className='description'>
                <div className="name-cart">{props.name}</div>
                <div className='currency'>{props.price}&nbsp;</div>
            </div>
            <div className="actions">
                <button className='button' onClick={descrease}>
                    <img src="/shopping.svg" alt="Удалить" />
                </button>
                <div>{props.count}</div>
                <button className='button' onClick={increase}>
                    <img src="/shopping.svg" alt="Добавить" />
                </button>
                <button className='remove' onClick={remove}>
                    <img src="/shopping.svg" alt="Удалить все" />
                </button>
            </div>
        </div>
    )
}
