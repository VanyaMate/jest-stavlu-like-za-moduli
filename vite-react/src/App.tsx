import React from 'react';
import Button from './components/ui/buttons/button/button.tsx';


const App: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
    return (
        <div>
            Hello
            <Button/>
        </div>
    );
};

export default App;