import { useLoaderData, useNavigate} from 'react-router-dom'
import { Products } from '../../interfaces/product.interface';
import styles from './Product.module.css';
import { Button } from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

export function Product()  {
    const data = useLoaderData() as Products
    const ingredients = data.ingredients;
    const navigate = useNavigate()
    const dispath = useDispatch<AppDispatch>()

    const addCard = () => {
      dispath(cartActions.add(data.id))
    }
  return (
    <>
      <div className={styles['head']}>
        <button className={styles['back']} onClick={() => navigate('/')}>Назад</button>
        <div className={styles['title']}>{data.name}</div>
        <Button appearence='small' className={styles['addCart']} onClick={addCard}>В корзину</Button>
      </div>
      <div className={styles['wrapper']}>
          <div className={styles['image-block']}>
              <img className={styles['image']} src={data.image} alt="Картинка товара" />
          </div>
          <div className={styles['description']}>
              <div className={styles['price']}>
                <p>Цена</p>
                <p>{data.price} р</p>
              </div>
              <div className={styles['rate']}>
                <p>Рейтинг</p>
                <p>{data.rating} <img src="/star.svg" alt="" /></p>
              </div>
              <ul>
                  Состав:
                  <br />
                  {ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                  ))}
              </ul>
          </div>
      </div>
    </>
  )
}
