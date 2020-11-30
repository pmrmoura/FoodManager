import React, { useState } from 'react';
import './BoxUpdates.css'


function BoxUpdates({ title, content, children }) {
    const [clicked, setClicked] = useState(false);

    function handleBoxClick() {
        setClicked(!clicked);
    }

    if (clicked) {
        return (
            <div className="box-update-wrapper" onClick={handleBoxClick} id="change-color">
                <div>
                    <h3 id="change-color">{title}</h3>
                    <p id="change-color" >{content}</p>
                </div>

                {children}
            </div>
        );
    }
    return (
        <div className="box-update-wrapper" onClick={handleBoxClick}>
            <div className="box-update-info">
                <h3>{title}</h3>
                <p >{content}</p>
            </div>

            {children}
        </div>
    )
}

export default BoxUpdates;
