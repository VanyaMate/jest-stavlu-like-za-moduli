import Users from '@/containers/users/users.tsx';
import AboutPage from '@/pages/about-page.tsx';
import ErrorPage from '@/pages/error-page.tsx';
import MainPage from '@/pages/main-page.tsx';
import UserDetailsPage from '@/pages/user-details-page.tsx';
import { Route, Routes } from 'react-router-dom';


const PathRoute = () => {
    return (
        <Routes>
            <Route path={ '/' } element={ <MainPage/> }/>
            <Route path={ '/about' } element={ <AboutPage/> }/>
            <Route path={ '/users' } element={ <Users/> }/>
            <Route path={ '/user/:id' } element={ <UserDetailsPage/> }/>
            <Route path={ '/*' } element={ <ErrorPage/> }/>
        </Routes>
    );
};

export default PathRoute;