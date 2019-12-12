import React from 'react'
import './register.css'



const Register = ({tipo, handleChange, value}) => {
    return (
        <div className='table-register'>
            <div children={tipo}/> 
            <input placeholder={tipo} onChange={(e) => handleChange(e.target.value) } value={value}/>
        </div>
    )
}

export default Register