import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>Page 404</p>
        <p>
            <Link to='/'>Link to Home</Link>
        </p>
    </div>
);

export default NotFoundPage;
