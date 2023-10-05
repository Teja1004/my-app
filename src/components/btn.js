import React from 'react'
import './btn.css'

export default function btn({ onClick }) {
    return (
        <div className='BtnFileld'>
            <button className="addbtn"> Add</button>
            <button onClick={onClick} className="clearbtn">Clear</button>
        </div>
    )
}
