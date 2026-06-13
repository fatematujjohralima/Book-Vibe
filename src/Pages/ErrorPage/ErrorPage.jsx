import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Go back to the <span style={{ textDecoration: 'underline', color: 'blue' }}>Homepage</span></a>

        </div>
    );
};

export default ErrorPage;