import { Link } from 'react-router-dom';
import './ProductCard.css'
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

interface Props {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    rate: number;
}


export const ProductCard = (props: Props)  => {
    const dispath = useDispatch<AppDispatch>()

    const add = (e: MouseEvent) => {
        e.preventDefault()
        dispath(cartActions.add(props.id))
    }
    
    return (
        <Link to={`/product/${props.id}`} className='link'>
            <div className='card'>
                <div className='head-card' style={{backgroundImage: `url('${props.image}')`}}>
                    <div className='price'>
                        {props.price}&nbsp;
                        <span className='currency'>р</span>
                    </div>
                    <button className='add-to-cart' onClick={add}>
                        <img src="/shopping.svg" alt="" />
                    </button>
                    <div className='rating'>
                        {props.rate}&nbsp;&nbsp;
                        <img src="/star.svg" alt="" />
                    </div>
                </div>
                <div className='foot'>
                    <div className='title'>{props.name}</div>
                    <div className='description'>{props.description}</div>
                </div>
            </div>
        </Link>
    )
  }