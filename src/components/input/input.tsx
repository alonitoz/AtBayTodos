import React from 'react';
import './input.scss';

const Input = ({ placeholder, onChange, ...rest }: React.ComponentProps<'input'>) => {
	return <input className="primary-input" type="text" placeholder={placeholder} onChange={onChange} {...rest} />;
};

export default Input;
