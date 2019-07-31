import React from 'react'

const CountDisplay = ({text, count}) => {
    console.log(count);
    return <pre>{text}: {count ? count : 0}</pre>;
}

export default React.memo(CountDisplay);
