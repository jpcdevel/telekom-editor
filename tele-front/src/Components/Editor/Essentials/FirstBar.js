import React, {useContext, useState} from 'react'
import { TabsClassicGroup, TabsClassicItem, TabsClassicPanel } from "@design-system-rt/rtk-ui-kit";

import MainTabLib from '../TabElemLib/MainTabLib'
import MainPageEdit from '../TabPageEdit/MainPageEdit'
import {PageContext} from "../../../Pages/Editor";

function FirstBar() {
    const [chosenTab, setChosenTab] = useState(0)
    const { themeTrigger } = useContext(PageContext)
    let bg_color = themeTrigger?  "rgb(29, 37, 51)": "#141C2C";

    return (
        <div className="bar" style={{backgroundColor: bg_color}}>
            <div className="barTabs">
                <TabsClassicGroup
                    value="0"
                >
                    <TabsClassicItem
                        onClick={() => {setChosenTab(0)}}
                        index="0"
                        label="Элементы"
                        className={chosenTab !== 0 ? "unactiveTab tabsHeight" : "tabsHeight"}
                    />
                    <TabsClassicItem
                        onClick={() => {setChosenTab(1)}}
                        index="1"
                        label="Страница"
                        className={chosenTab !== 1 ? "unactiveTab tabsHeight" : "tabsHeight"}
                    />
                </TabsClassicGroup>
                {chosenTab == 0 && (
                    <MainTabLib />
                )}

                {chosenTab == 1 && (
                    <MainPageEdit />
                )}
            </div>
        </div>
    )
}

export default FirstBar


//<div className="bar">
//             <div className="barTabs">
//                 <p>Библиотека элементов</p>
//                 <p>/</p>
//                 <p>Страница</p>
//             </div>
//         </div>