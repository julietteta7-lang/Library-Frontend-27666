
import React from 'react';
import { Link } from 'react-router-dom';

function LibraryHeader() {
    return (
        <div>
            <header>
                <h1>Library Management System</h1>

                <Link to="/books" style={{ marginRight: '10px' }}>
                    Books
                </Link>

                <Link to="/offices" style={{ marginRight: '10px' }}>
                    Offices
                </Link>

                <Link to="/">
                    Logout
                </Link>
            </header>
        </div>
    );
}

export default LibraryHeader;
