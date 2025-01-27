import { Link } from 'react-router-dom';
import './ProductCard.css'

interface Props {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    rate: number;
}

export const ProductCard = (props: Props)  => {
    return (
        <Link to={`/product/${props.id}`} className='link'>
            <div className='card'>
                <div className='head-card' style={{backgroundImage: `url('${props.image}')`}}>
                    <div className='price'>
                        {props.price}&nbsp;
                        <span className='currency'>р</span>
                    </div>
                    <button className='add-to-cart'>
                        <img src="/shopping.svg" alt="" />
                    </button>
                    <div className='rating'>
                        {props.rate}&nbsp;&nbsp;
                        <img src="/star.svg" alt="" />
                    </div>
                </div>
                <div className='foot'>
                    <div className='title'>{props.title}</div>
                    <div className='description'>{props.description}</div>
                </div>
            </div>
        </Link>
    )
  }