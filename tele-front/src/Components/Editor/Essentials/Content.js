import React, {useContext} from 'react'
import {
    User,
    DoorExit,
    Container,
    Row,
    Col,
} from '@design-system-rt/rtk-ui-kit'

import { PageContext } from "../../../Pages/Editor";

import logo from "../../../static/images/logo.svg";

function Content() {
    const { currentResolution, setCurrentResolution } = useContext(PageContext)
    return (
        <div>
            <p>Test</p>
        </div>
    )
}

export default Content