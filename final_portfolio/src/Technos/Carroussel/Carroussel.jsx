/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { StepBack, StepForward } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export const Carroussel = ({ technos, selection, show, setShow }) => {
    const [index, setIndex] = useState(show);
    const length = technos.length;
    const [quantityStyle, setQuantityStyle] = useState({ '--quantity': length, '--rotation': index });

    useEffect(() => {
        setQuantityStyle({ '--quantity': length, '--rotation': index });
    }, [index]);

    return (
        <>
            <div className="banner">
                <div className="slider" style={quantityStyle}>
                    {
                        technos && technos.map((techno, number) => {
                            const source = `/technos/${techno.title}.png`;
                            const positionStyle = { '--position': number + 1 };
                            return (
                                <div key={number} style={positionStyle} className="item" onClick={() => setShow(number)}>
                                    <img src={source} alt={techno.title} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div id="carroussel_controllers">
                <StepBack size={60} onClick={() => setIndex(prev => prev - 1)} />
                <StepForward size={60} onClick={() => setIndex(prev => prev + 1)} />
            </div>
        </>
    );
}