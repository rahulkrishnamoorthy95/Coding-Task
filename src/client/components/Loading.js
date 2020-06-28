import React from 'react';

export default function Loading() { // Spinner component to show for page load wait time.
    return (
        <>
        <div className="justify-content-center">
            <div className="spinner-border" role="status"></div>
        </div>
         <span className="bd-content-title">Loading...</span>
         <span className="bd-content-title">Please Wait!!</span>
         </>
      );
}