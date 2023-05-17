// import { Container, Header, Logo } from 'components/App/App.styled';
import {Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
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
                  {/* клік на посилання (Link) передає значення (to) в рядок адреси браузера  */}
                  <Link to="/" end>Home {" "}</Link> 
                  <Link to="/movies"> Movies</Link>
               </Nav>
            </Header>   
         </Container>
         <Suspense fallback={<Loader/> }>
            <Outlet />
         </Suspense>
      </>
   );
};

export default SharedLayout;