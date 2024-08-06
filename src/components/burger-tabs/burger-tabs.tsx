import React, {useState} from 'react';
import style from './burger-tabs.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerTabs(){
  const [current, setCurrent] = useState('bun')
  return (
    <div className={style.wrapper} style={{ display: 'flex' }}>
      <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
      Булки
      </Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
      Соусы
      </Tab>
      <Tab value="main" active={current === 'main'} onClick={setCurrent}>
      Начинки
      </Tab>
    </div>
  )
}