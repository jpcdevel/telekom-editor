import React, { useContext } from 'react'

import {PageContext} from "../../../Pages/Editor";

import FirstBar from "./FirstBar";
import SecondBar from "./SecondBar";
import Content from "./Content";

function Main() {
    const { currentResolution } = useContext(PageContext)

    return (
        <div className="main">
            {currentResolution !== 'desktop' && (
                <FirstBar />
            )}
            <Content />
            {currentResolution !== 'desktop' && (
                <SecondBar />
            )}
        </div>
    )
}

export default Main