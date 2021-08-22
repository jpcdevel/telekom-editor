import React, { useContext } from 'react'
import { Checkbox } from "@design-system-rt/rtk-ui-kit";

import {PageContext} from "../../../Pages/Editor";

function MainPageEdit() {
    const { isGrid, setIsGrid } = useContext(PageContext)

    return (
        <div className="tabPageEdit" style={{width: "100%"}}>
            <h1 className="tabHeading">Настройки страницы</h1>
            <div style={{width: "100%", marginTop: "15px"}}>
                <Checkbox
                    onClick={() => setIsGrid(!isGrid)}
                    defaultChecked={true}
                    checked={isGrid}
                    className={"checkBoxGrid"}
                >
                    Показывать сетку
                </Checkbox>
            </div>
        </div>
    )
}

export default MainPageEdit