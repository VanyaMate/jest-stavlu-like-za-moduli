import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Link to={ '/' }>Main</Link><br/>
            <Link to={ '/about' }>About</Link><br/>
            <Link to={ '/users' }>Users</Link><br/>
            <Link to={ '/404' }>404</Link><br/>
        </div>
    );
};

export default Navbar;