import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        const{ className, title, input, type, placeholder} = this.props;
        return (
            <div className={`${className} searchbar`}>
            <label className='searchbar__title'>{title}</label>
            <input className='searchbar__input'
            type={type}
            {...input}
            placeholder={placeholder}/>
            </div>
        );
    }
}