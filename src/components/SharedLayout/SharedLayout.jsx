// import { Container, Header, Logo } from 'components/App/App.styled';
import { Outlet } from 'react-router-dom';
import { Link, Container, Header, Logo, Nav  } from './SharedLayout.styled';

const SharedLayout = () => {
   return (
      <>
         <Container>
            <Header>               
               <Logo> <span role="img" aria-label="film icon">💻</span>{" "}
               Movie search
               </Logo>
               <Nav>
                  <Link to="/" end>Home {" "}</Link>
                  <Link to="/movies"> Movies</Link>
               </Nav>
            </Header>   
         </Container>
         <Outlet />
      </>
   );
};

export default SharedLayout;