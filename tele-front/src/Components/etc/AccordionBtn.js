import React from 'react'

import arrowDown from '../../static/images/arrow-down.svg'

function AccordionBtn({value, isActive, number, activeAccordion, setActiveAccordion}) {
    return (
        <button
            className={isActive ? "accordionBtn activeAccordion" : "accordionBtn"}
            onClick={() => {
                activeAccordion == number ? setActiveAccordion(0) : setActiveAccordion(number)
            }}
        >
            <span>{value}</span>
            <img
                src={arrowDown}
                alt=""
                className={isActive ? "rotate" : ""}
            />
        </button>
    )
}

export default AccordionBtn