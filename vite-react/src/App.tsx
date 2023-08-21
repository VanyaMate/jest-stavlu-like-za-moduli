import Users from '@/containers/users/users.tsx';
import { Input } from 'antd';
import React, { useCallback, useState } from 'react';
import Button from './components/ui/buttons/button/button.tsx';


const App: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
    const [ state, setState ] = useState<boolean>(false);
    const [ value, setValue ] = useState<string>('');

    const toggle = useCallback(() => {
        setState((prev) => !prev);
    }, [ setState ]);

    const onInput = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, [ setValue ]);


    return (
        <div>
            <h1>Status: { state.toString() }</h1>
            <Button onClick={ toggle }/>
            <Input value={ value } onChange={ onInput }/>
            <Users/>
        </div>
    );
};

export default App;