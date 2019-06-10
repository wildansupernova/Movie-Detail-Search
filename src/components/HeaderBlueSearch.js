import React from 'react';

const HeaderBlueSearch = (props) => {
    return (
        <div className="flex-container-flex-direction-column search-name-header bg-primary">
                <div className="text-white">{props.headerText}</div>
        </div>
    );
};

export default HeaderBlueSearch;