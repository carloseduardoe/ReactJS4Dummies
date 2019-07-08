import React from 'react';

const Placeholder = React.forwardRef(
  (props, ref) => {
    return <input type="text" placeholder="Placeholder" ref={ref} />;
  }
);

export default Placeholder;
