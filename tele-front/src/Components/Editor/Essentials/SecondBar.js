import React, {useContext} from 'react'
import {PageContext} from "../../../Pages/Editor";

function SecondBar() {
    const { themeTrigger } = useContext(PageContext)
    let bg_color = themeTrigger?  "rgb(29, 37, 51)": "#141C2C";
    return (
        <div className="bar" style={{backgroundColor: bg_color}}   >

        </div>
    )
}

export default SecondBar