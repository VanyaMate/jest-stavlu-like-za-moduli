import React from 'react';
import { cn } from '@/helpers/react/className-merger.ts';
import css from './button.module.scss';


export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { loading, className, ...other } = props;
    return (
        <button { ...other }
                className={ cn(css.container, loading ? css.loading : '', className) }>
            Button
        </button>
    );
};

export default Button;