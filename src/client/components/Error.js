import React from 'react';

export default function Error({ error }) {
    return (
        <div className="alert alert-danger" role="alert">
            <h3 className="alert-heading">Oops, Technical Error!</h3>
            <p>{error.message}</p>
        </div>
    );
}