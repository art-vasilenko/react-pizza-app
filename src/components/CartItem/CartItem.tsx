import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import styles from './CartItem.module.css';


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
        dispath(cartActions.remove(props.id))   
    }
    const remove = () => {
        dispath(cartActions.delete(props.id))  
    }

    return (
        <div className={styles['item']}>
            <div 
                className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}>
            </div>
            <div className={styles['description']}>
                <div className={styles['name']}>{props.name}</div>
                <div className={styles['price']}>{props.price}&nbsp;р</div>
            </div>
            <div className={styles['actions']}>
                <button className={styles['minus']} onClick={descrease}>
                    <img className={styles['icon']} src="/minuc.png" alt="Удалить" />
                </button>
                <div className={styles['number']}>{props.count}</div>
                <button className={styles['plus']} onClick={increase}>
                    <img className={styles['icon']} src="/pluc.png" alt="Добавить" />
                </button>
                <button className={styles['remove']} onClick={remove}>
                    <img className={styles['icon']} src="/delete.png" alt="Удалить все" />
                </button>
            </div>
        </div>
    )
}
