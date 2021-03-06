import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        //console.log(e.target.value)
        setInputValue( e.target.value )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.trim().length > 0 ){
            //console.log('submit hecho')
            //console.log(typeof setCategories)
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory