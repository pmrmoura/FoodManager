import React, { useState } from 'react';
import './BoxUpdates.css'


function BoxUpdates({ title, content, children }) {
    console.log(content, 'content')
    return (
        <div className="box-update-wrapper">
            <div className="box-update-info">
                <h3>{title}</h3>
                {content !== "NaN%" && (
                    <p>{content}</p>
                )}
                {content === "NaN%" && (
                    <p>0%</p>
                )}
            </div>

            {children}
        </div>
    )
}

export default BoxUpdates;
