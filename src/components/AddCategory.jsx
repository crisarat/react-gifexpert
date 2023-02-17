import { useState } from 'react';


export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
        //onChange={ (event) => onInputChange (event) }
        //onChange={ onInputChange } -> es igual al de arriba
    }

    const onSubmit = (event) => {
        event.preventDefault();      

        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        //setCategories( categories => [inputValue, ...categories] );

        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
