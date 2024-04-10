import React from 'react';

import { Consumer } from '../provider';

const BrotherB = (props) => {
    return (
        <Consumer>
            {
                value => (
                <div>
                    <h4>子组件B --- {value}</h4>
                </div>
                )
            }
        </Consumer>
    );
};

export default BrotherB;
