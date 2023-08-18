import React, { useEffect, useState } from 'react';

const App = () => {
    const [ data, setData ]     = useState(null);
    const [ toggle, setToggle ] = useState(false);
    const [ value, setValue ]   = useState('');

    const onClick = function () {
        setToggle((prev) => !prev);
    }

    const onChange = function (event) {
        setValue(event.target.value);
    }

    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    }, [])

    return (<div>
        <div data-testid={ 'input-value' }>{ value }</div>
        { toggle && <div data-testid={ "toggle-element" }>Toggled</div> }
        { data && <div style={ { color: 'red' } }>data</div> }
        <h1>Hello</h1>
        <button onClick={ onClick }
                data-testid={ 'toggle-button' }>Click
        </button>
        <input placeholder={ 'input' }
               data-testid={ 'input' }
               value={ value }
               onChange={ onChange }/>
    </div>);
};

export default App;