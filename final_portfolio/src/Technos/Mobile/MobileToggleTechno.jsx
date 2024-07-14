/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { ChevronDown, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

export const MobileToggleTechno = ({ technos }) => {
    const [open, setOpen] = useState(false);
    return (
        <div id="mobileToggle">
            <div className="mobileToggleTechno">
                {
                    technos && technos.map((techno) => (
                        <div key={techno.id} className={`mobileToggleTechno__tab${open == techno.id ? " open" : ""}`} onClick={() => {
                            setOpen(prev => prev == techno.id ? false : techno.id)
                        }}>
                            <div className="mobileToggleTechno__tab__title">
                                <div className="mobileToggleTechno__tab__title__name">
                                    {techno.title.toUpperCase()}
                                </div>
                                <div className="mobileToggleTechno__tab__title__icon">
                                    {
                                        open != techno.id ? <ChevronRight /> : <ChevronDown />
                                    }
                                </div>
                            </div>
                            <div className="mobileToggleTechno__tab__content">
                                <ul className="techno_list">
                                    {techno.description.map((element, index) => (
                                        <li key={index}>
                                            <img src={`/technos/${element}.png`} alt={element}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
