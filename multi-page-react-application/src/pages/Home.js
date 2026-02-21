import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page">
            <h1>Welcome to the User Portal</h1>
            <p>A portal to list the users and their profile</p>
            <div className="btn-group">
                <Link to="/about" className="btn">About</Link>
                <Link to="/users" className="btn">Users</Link>
            </div>
        </div>
    );
};

export default Home;
