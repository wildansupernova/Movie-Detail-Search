import React from 'react';

const Section = (props) => {
    const { marginLeft, bold, sectionText} = props;
    const sectionStyle = {
        marginLeft: marginLeft + 'rem',
        fontWeight: bold ? 700 : null
    };

    return (
        <div className="section-1" style={sectionStyle}>{sectionText}</div>
    );
};

export default Section;




