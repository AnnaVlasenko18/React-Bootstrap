import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  const handleClick = (e) => {
    e.preventDefault(); // Предотвращаем действие по умолчанию для клика
  };
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/">Home</NavLink>
          <NavLink className={css.navLink} to="forms" >Forms</NavLink>
          <NavLink className={css.navLink} to="components" >Components</NavLink>
          <NavLink className={css.navLink} to="utilities">Utilities</NavLink>
        </nav>
      </header>

      <div className={css.div}>
        <Outlet />
      </div>
    </>
  );
};




// import { NavLink } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// export const Header = () => {
//   return (
//     <Navbar fixed="top" bg="light" data-bs-theme="light">
//       <Container>
//         <Nav className="me-auto">
//           <Nav.Link as={NavLink} to="/" activeClassName="active">
//             Home
//           </Nav.Link>
//           <Nav.Link as={NavLink} to="/forms" activeClassName="active">
//             Forms
//           </Nav.Link>
//           <Nav.Link as={NavLink} to="/components" activeClassName="active">
//             Components
//           </Nav.Link>
//           <Nav.Link as={NavLink} to="/utilities" activeClassName="active">
//             Utilities
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };
