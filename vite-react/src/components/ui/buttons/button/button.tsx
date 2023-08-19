import React from 'react';
import css from './button.module.scss';


const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = () => {
    return (
        <button className={ css.container }>
            Button
        </button>
    );
};

export default Button;