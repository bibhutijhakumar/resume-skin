import React from 'react';

export const HTMLView = ({ name, id, htmlView }) => {
    // Check if both name and id are provided
    if (name && id) {
        return (
            <div className={`inner-box ${name}${id}`}>
                {htmlView}
            </div>
        );
    } else {
        // Fallback to rendering without name and id
        return (
            <div className={`inner-box ${name}`}>
                <div dangerouslySetInnerHTML={{ __html: htmlView }} />
            </div>
        );
    }
};
