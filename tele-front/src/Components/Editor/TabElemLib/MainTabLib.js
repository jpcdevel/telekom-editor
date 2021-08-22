import React, { useState, useContext } from 'react'
import { RemoveSmall } from "@design-system-rt/rtk-ui-kit";

import {PageContext} from "../../../Pages/Editor";

import AccordionBtn from '../../etc/AccordionBtn'

function MainTabLib() {
    const [activeAccordion, setActiveAccordion] = useState(1)
    const { edit, setEdit } = useContext(PageContext)

    return (
        <div className="tabElemLib">
            <AccordionBtn
                value={"Популярные"}
                isActive={activeAccordion == 1}
                number={1}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
            />
            {activeAccordion == 1 && (
                <div className="accordionOptions">
                    <div className={"accordionOption"}>
                        <p
                            onClick={() => setEdit({
                                isEdit: true,
                                editElem: "typography"
                            })}
                            className={edit.editElem == "typography" ? "activeElemLink" : ""}
                        >
                            Typography
                        </p>

                        {edit.isEdit && edit.editElem == "typography" && (
                            <span
                                className="cross"
                                onClick={() => setEdit({
                                    isEdit: false
                                })}
                            >
                                <RemoveSmall
                                    fill="#fff"
                                    size={24}
                                />
                            </span>
                        )}
                    </div>

                    <div className={"accordionOption"}>
                        <p
                            onClick={() => setEdit({
                                isEdit: true,
                                editElem: "box"
                            })}
                            className={edit.editElem == "box" ? "activeElemLink" : ""}
                        >
                            Box
                        </p>

                        {edit.isEdit && edit.editElem == "box" && (
                            <span
                                className="cross"
                                onClick={() => setEdit({
                                    isEdit: false
                                })}
                            >
                                <RemoveSmall
                                    fill="#fff"
                                    size={24}
                                />
                            </span>
                        )}
                    </div>

                    <div className={"accordionOption"}>
                        <p
                            onClick={() => setEdit({
                                isEdit: true,
                                editElem: "button"
                            })}
                            className={edit.editElem == "button" ? "activeElemLink" : ""}
                        >
                            Button
                        </p>

                        {edit.isEdit && edit.editElem == "button" && (
                            <span
                                className="cross"
                                onClick={() => setEdit({
                                    isEdit: false
                                })}
                            >
                                <RemoveSmall
                                    fill="#fff"
                                    size={24}
                                />
                            </span>
                        )}
                    </div>

                    <div className={"accordionOption"}>
                        <p
                            onClick={() => setEdit({
                                isEdit: true,
                                editElem: "input"
                            })}
                            className={edit.editElem == "input" ? "activeElemLink" : ""}
                        >
                            Input
                        </p>

                        {edit.isEdit && edit.editElem == "input" && (
                            <span
                                className="cross"
                                onClick={() => setEdit({
                                    isEdit: false
                                })}
                            >
                                <RemoveSmall
                                    fill="#fff"
                                    size={24}
                                />
                            </span>
                        )}
                    </div>


                    {/*<div className={"accordionOption"}>*/}
                    {/*    <p*/}
                    {/*        onClick={() => setEdit({*/}
                    {/*            isEdit: true,*/}
                    {/*            editElem: "tabs"*/}
                    {/*        })}*/}
                    {/*        className={edit.editElem == "tabs" ? "activeElemLink" : ""}*/}
                    {/*    >*/}
                    {/*        Tabs*/}
                    {/*    </p>*/}

                    {/*    {edit.isEdit && edit.editElem == "tabs" && (*/}
                    {/*        <span*/}
                    {/*            className="cross"*/}
                    {/*            onClick={() => setEdit({*/}
                    {/*                isEdit: false*/}
                    {/*            })}*/}
                    {/*        >*/}
                    {/*            <RemoveSmall*/}
                    {/*                fill="#fff"*/}
                    {/*                size={24}*/}
                    {/*            />*/}
                    {/*        </span>*/}
                    {/*    )}*/}
                    {/*</div>*/}

                    {/*<div className={"accordionOption"}>*/}
                    {/*    <p*/}
                    {/*        onClick={() => setEdit({*/}
                    {/*            isEdit: true,*/}
                    {/*            editElem: "multiselect"*/}
                    {/*        })}*/}
                    {/*        className={edit.editElem == "multiselect" ? "activeElemLink" : ""}*/}
                    {/*    >*/}
                    {/*        Multiselect*/}
                    {/*    </p>*/}

                    {/*    {edit.isEdit && edit.editElem == "multiselect" && (*/}
                    {/*        <span*/}
                    {/*            className="cross"*/}
                    {/*            onClick={() => setEdit({*/}
                    {/*                isEdit: false*/}
                    {/*            })}*/}
                    {/*        >*/}
                    {/*            <RemoveSmall*/}
                    {/*                fill="#fff"*/}
                    {/*                size={24}*/}
                    {/*            />*/}
                    {/*        </span>*/}
                    {/*    )}*/}
                    {/*</div>*/}

                    {/*<div className={"accordionOption"}>*/}
                    {/*    <p*/}
                    {/*        onClick={() => setEdit({*/}
                    {/*            isEdit: true,*/}
                    {/*            editElem: "select"*/}
                    {/*        })}*/}
                    {/*        className={edit.editElem == "select" ? "activeElemLink" : ""}*/}
                    {/*    >*/}
                    {/*        Select*/}
                    {/*    </p>*/}

                    {/*    {edit.isEdit && edit.editElem == "select" && (*/}
                    {/*        <span*/}
                    {/*            className="cross"*/}
                    {/*            onClick={() => setEdit({*/}
                    {/*                isEdit: false*/}
                    {/*            })}*/}
                    {/*        >*/}
                    {/*            <RemoveSmall*/}
                    {/*                fill="#fff"*/}
                    {/*                size={24}*/}
                    {/*            />*/}
                    {/*        </span>*/}
                    {/*    )}*/}
                    {/*</div>*/}

                    <div className={"accordionOption"}>
                        <p
                            onClick={() => setEdit({
                                isEdit: true,
                                editElem: "switch"
                            })}
                            className={edit.editElem == "switch" ? "activeElemLink" : ""}
                        >
                            Switch
                        </p>

                        {edit.isEdit && edit.editElem == "switch" && (
                            <span
                                className="cross"
                                onClick={() => setEdit({
                                    isEdit: false
                                })}
                            >
                                <RemoveSmall
                                    fill="#fff"
                                    size={24}
                                />
                            </span>
                        )}
                    </div>

                    {/*<div className={"accordionOption"}>*/}
                    {/*    <p*/}
                    {/*        onClick={() => setEdit({*/}
                    {/*            isEdit: true,*/}
                    {/*            editElem: "icons"*/}
                    {/*        })}*/}
                    {/*        className={edit.editElem == "icons" ? "activeElemLink" : ""}*/}
                    {/*    >*/}
                    {/*        Icons*/}
                    {/*    </p>*/}

                    {/*    {edit.isEdit && edit.editElem == "icons" && (*/}
                    {/*        <span*/}
                    {/*            className="cross"*/}
                    {/*            onClick={() => setEdit({*/}
                    {/*                isEdit: false*/}
                    {/*            })}*/}
                    {/*        >*/}
                    {/*            <RemoveSmall*/}
                    {/*                fill="#fff"*/}
                    {/*                size={24}*/}
                    {/*            />*/}
                    {/*        </span>*/}
                    {/*    )}*/}
                    {/*</div>*/}

                    <div className={"accordionOption"}>
                        <p
                            onClick={() => setEdit({
                                isEdit: true,
                                editElem: "checkbox"
                            })}
                            className={edit.editElem == "checkbox" ? "activeElemLink" : ""}
                        >
                            Checkbox
                        </p>

                        {edit.isEdit && edit.editElem == "checkbox" && (
                            <span
                                className="cross"
                                onClick={() => setEdit({
                                    isEdit: false
                                })}
                            >
                                <RemoveSmall
                                    fill="#fff"
                                    size={24}
                                />
                            </span>
                        )}
                    </div>
                    <div className={"accordionOption"}>
                        <p
                            onClick={() => setEdit({
                                isEdit: true,
                                editElem: "radio"
                            })}
                            className={edit.editElem == "radio" ? "activeElemLink" : ""}
                        >
                            Radio button
                        </p>

                        {edit.isEdit && edit.editElem == "radio" && (
                            <span
                                className="cross"
                                onClick={() => setEdit({
                                    isEdit: false
                                })}
                            >
                                <RemoveSmall
                                    fill="#fff"
                                    size={24}
                                />
                            </span>
                        )}
                    </div>
                    {/*<p>Button</p>*/}
                    {/*<p>Input</p>*/}
                    {/*<p>Tabs</p>*/}
                    {/*<p>Multiselect</p>*/}
                    {/*<p>Select</p>*/}
                    {/*<p>Switch</p>*/}
                    {/*<p>Icons</p>*/}
                    {/*<p>Checkbox</p>*/}
                    {/*<p>Radio button</p>*/}
                </div>
            )}

            <AccordionBtn
                value={"Шаблоны"}
                isActive={activeAccordion == 2}
                number={2}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
            />
            {activeAccordion == 2 && (
                <div className="accordionOption">
                    <p>Шаблон</p>
                </div>
            )}
        </div>
    )
}

export default MainTabLib