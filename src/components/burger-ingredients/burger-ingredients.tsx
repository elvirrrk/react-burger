import { ReactElement } from "react";
import { BurgerTabs } from '../burger-tabs/burger-tabs';
import { IngredientMenuBlock } from "../ingredient-menu-block/ingredient-menu-block";
import styles from './burger-ingredients.module.scss';
import { IngredientData } from '../app/index';
interface Props {
  ingredientsData: IngredientData[];
}
export function BurgerIngredients({ingredientsData}:Props):ReactElement {
  return(
    <div className={styles.container}>
      <h1 className={`${styles.primaryTitle} text_type_main-large`}>Соберите бургер</h1>
      <BurgerTabs />
      <IngredientMenuBlock ingredientsData={ingredientsData}/>
    </div>
  );
}