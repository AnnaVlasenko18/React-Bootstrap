import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/">Home</NavLink>
          <NavLink className={css.navLink} to="/forms">Forms</NavLink>
          <NavLink className={css.navLink} to="/components">Components</NavLink>
          <NavLink className={css.navLink} to="/utilities">Utilities</NavLink>
        </nav>
      </header>

      <div className={css.div}>
        <Outlet />
      </div>
    </>
  );
};