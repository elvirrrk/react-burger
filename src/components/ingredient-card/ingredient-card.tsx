import styles from './ingredient-card.module.scss';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientData } from '../app/index';

interface Props {
  ingredient: IngredientData;
}
export function IngredientCard({ingredient}: Props) {
  const {image, name, price} = ingredient;
  return(
    <div className={styles.container}>
      <img src={image}/>
      <div className={styles.price}>
        <span>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p>{name}</p>
    </div>
  );
}