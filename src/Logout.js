import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {

        localStorage.removeItem('isLoggedIn');


        navigate('/login');
    }, [navigate]);

    return (
        <div>
            <h2>Logging you out...</h2>
        </div>
    );
};

export default Logout;
