import React from 'react'

export default function Displaydata({ name, age }) {
    return (
        <div className='Data'>
            <h1>Name is:{name}</h1>
            <h1> Age is:{age}</h1>
        </div>
    )
}
