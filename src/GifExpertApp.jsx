import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);



    const onAddCategory = (newCategory) => {

        const addCategory = newCategory[0].toUpperCase() + newCategory.slice(1).toLowerCase();

        if (categories.includes(addCategory)) return;

        //categories.push('Batman');
        setCategories([addCategory, ...categories]);
        //setCategories( cat => [...categories, 'Hola mundo'] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                //setCategories={ setCategories }
                onNewCategory={(value) => onAddCategory(value)}
            // onNewCategory={ event => onAddCategory(event) }
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }


        </>
    )
}
