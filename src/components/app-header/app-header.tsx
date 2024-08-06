import { useState } from 'react';
import style from './app-header.module.scss';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

export function AppHeader() {
  // const [iconType, setIconType] = useState();
  // для изменения типа иконки
  return (
    <header className={style.header}>
      <nav className={style.navigation}>
        <ul className={style.navigationList}>
          <li>
            <a className={`text_type_main-default ${style.navigationButtonLinkActive} pr-5 pl-5 pt-4 pb-4`} href=''>
              <BurgerIcon type="primary" />
              Конструктор
            </a>
          </li>
          <li>
            <a className={`text_type_main-default ${style.navigationButtonLink} pr-5 pl-5 pt-4 pb-4`} href=''>
              <ListIcon type="secondary" />
              Лента заказов
            </a>
          </li>
          <li className={style.mainLogo}>
            <a href='#'>
              <Logo />
            </a>
          </li>
          <li>
            <a className={`text_type_main-default ${style.navigationButtonLink} pr-5 pl-5 pt-4 pb-4`} href=''>
              <ProfileIcon type="secondary" />
              Личный кабинет
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}