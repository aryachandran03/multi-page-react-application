import { Link } from 'react-router-dom';
import { users } from '../data/users';

const Users = () => {
    return (
        <div className="page">
            <h1>Users List</h1>
            <ul className="list">
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            <strong>{user.name}</strong><br />
                            <small>{user.email}</small>
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Users;
