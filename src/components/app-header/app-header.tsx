import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './app-header.module.scss';

export function AppHeader() {
  return(
    <header className=''>
      <nav className={style.navigation}>
        <ul>
          <li>
            <a className={`здесьТипограф ${style.navigationButtonLink}`} href=''>Конструктор</a>
          </li>
          <li>
            <a className='здесьТипограф' href=''>Лента заказов</a>
          </li>
          <li>
            <a href='#'>
              <Logo />
            </a>
          </li>
          <li>
            <a className='здесьТипограф' href=''>Личный кабинет</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}