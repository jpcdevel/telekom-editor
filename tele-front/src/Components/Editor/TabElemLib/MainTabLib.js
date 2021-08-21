import React, { useState } from 'react'

import AccordionBtn from '../../etc/AccordionBtn'

function MainTabLib() {
    const [activeAccordion, setActiveAccordion] = useState(0)

    return (
        <div className="tabElemLib">
            <AccordionBtn
                value={"Популярное"}
                isActive={activeAccordion == 1}
                number={1}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
            />
            {activeAccordion == 1 && (
                <div className="accordionOption">
                    <p>Button</p>
                    <p>Button</p>
                    <p>Button</p>
                </div>
            )}

            <AccordionBtn
                value={"Кнопки"}
                isActive={activeAccordion == 2}
                number={2}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
            />
            {activeAccordion == 2 && (
                <div className="accordionOption">
                    <p>Button</p>
                    <p>Button</p>
                    <p>Button</p>
                </div>
            )}

            <AccordionBtn
                value={"Навигация"}
                isActive={activeAccordion == 3}
                number={3}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
            />
            {activeAccordion == 3 && (
                <div className="accordionOption">
                    <p>Button</p>
                    <p>Button</p>
                    <p>Button</p>
                </div>
            )}

            <AccordionBtn
                value={"Контролы"}
                isActive={activeAccordion == 4}
                number={4}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
            />
            {activeAccordion == 4 && (
                <div className="accordionOption">
                    <p>Button</p>
                    <p>Button</p>
                    <p>Button</p>
                </div>
            )}

            <AccordionBtn
                value={"Всплывающие слои"}
                isActive={activeAccordion == 5}
                number={5}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}

            />
            {activeAccordion == 5 && (
                <div className="accordionOption">
                    <p>Button</p>
                    <p>Button</p>
                    <p>Button</p>
                </div>
            )}

            <AccordionBtn
                value={"Поля ввода"}
                isActive={activeAccordion == 6}
                number={6}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
            />
            {activeAccordion == 6 && (
                <div className="accordionOption">
                    <p>Button</p>
                    <p>Button</p>
                    <p>Button</p>
                </div>
            )}

            <AccordionBtn
                value={"Шаблоны"}
                isActive={activeAccordion == 7}
                number={7}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
            />
            {activeAccordion == 7 && (
                <div className="accordionOption">
                    <p>Button</p>
                    <p>Button</p>
                    <p>Button</p>
                </div>
            )}
        </div>
    )
}

export default MainTabLib