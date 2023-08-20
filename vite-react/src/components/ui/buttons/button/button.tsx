import React from 'react';
import css from './button.module.scss';


export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { loading, className, ...other } = props;
    return (
        <button { ...other }
                className={ [ css.container, className, loading ? css.loading
                                                                : '' ].join(' ') }>
            Button
        </button>
    );
};

export default Button;