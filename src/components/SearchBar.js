import React, { useState } from "react";

const SearchBar = ({ onSubmitted }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = event =>{
        event.preventDefault();
        onSubmitted(term);
    }


    return (
        <div className="ui segment">
            <form onSubmit= {onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search Video:</label>
                    <input 
                        type= "text"
                        value={term}
                        onChange={ e => setTerm(e.target.value) }
                    />
                </div>
            </form>
        </div>
    );

};



export default SearchBar;