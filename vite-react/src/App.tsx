import Navbar from '@/components/navbar/navbar.tsx';
import PathRoute from '@/containers/path-route/path-route.tsx';
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
            <Navbar/>
            <h2>Status: { state.toString() }</h2>
            <Button onClick={ toggle }/>
            <Input value={ value } onChange={ onInput }/>
            <PathRoute/>
        </div>
    );
};

export default App;