import { useEffect, useState } from 'react';
import s from './app.module.scss';
import { AppHeader } from '../app-header/app-header';

interface IngredientData {
	_id: number;
	name: string;
	type: string;
	proteins: number;
	fat: number;
	carbohydrates: number;
	calories: number;
	price: number;
	image: string;
	image_mobile: string;
	image_large: string;
	__v: number;
}

interface IngredientState {
	ingredientsDataState: IngredientData[];
	loading: boolean;
}

export const App: React.FC = () => {
	const INGREDIENTS_API = 'https://norma.nomoreparties.space/api/ingredients';
	const [ingredientsState, setIngredientsLoadingState] = useState<IngredientState>({
		ingredientsDataState: [],
		loading: true
	})

	useEffect(() => {
		try {
			const getIngredientsData = async () => {
				const requestResult = await fetch(INGREDIENTS_API);
				const data  = await requestResult.json();
				setIngredientsLoadingState({ingredientsDataState: data, loading: false })
			}
			getIngredientsData();
		} catch (e) {
			throw Error(`Error ${e}`);
		}
	}, []);
	return (
		<div className='page'>
			<AppHeader/>
		</div>
	);
};
