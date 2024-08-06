import style from './ingredient-menu-block.module.scss';
import { IngredientCard } from '../ingredient-card/ingredient-card';
import { IngredientData } from '../app/index';

interface Props {
  ingredientsData: IngredientData[];
}
export function IngredientMenuBlock({ingredientsData}:Props) {
  return(
    <>
    <h2 className='text_type_main-medium'></h2>
    <div className={style.wrapper}>
    {ingredientsData.map(ingredient => {
        return <IngredientCard key={ingredient._id} ingredient={ingredient}/>
      })}
    </div>
    </>
  );
}