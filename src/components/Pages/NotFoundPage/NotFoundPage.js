import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div className="text-center mx-auto px-10 pt-10 pb-32">
                <h1 className="text-2xl md:text-4xl font-bold">404 Page Not Found</h1>
                <FontAwesomeIcon className="text-red-600 py-5" size="8x" icon={faSearchengin}/>
            </div>
        </div>
    );
};

export default NotFoundPage;