import React from 'react';
import IButtonClicks from './HigherOrder/IButtonClicks';
import IElementHover from './HigherOrder/IElementHover';
import DButtonClicks from './HigherOrder/DButtonClicks';
import DElementHover from './HigherOrder/DElementHover';

export default function HigherOrder() {
    return <div>
        <h3>Higher Order Components</h3>
            <h4>Inverted Inheritance</h4>
            <IButtonClicks />
            <IElementHover />
        <hr/>
            <h4>Direct Inheritance</h4>
            <DButtonClicks />
            <DElementHover />
    </div>;
}
