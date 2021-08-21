import React, { useContext } from 'react'
import {
    Container,
    Row,
    Col,
} from '@design-system-rt/rtk-ui-kit'

import {PageContext} from "../../Pages/Editor";

function Grid() {
    const { currentResolution } = useContext(PageContext)
    return (
        <Container
            className={
                currentResolution == 'mobile' ?
                    "mobileContainerGap gridContainer" :
                    currentResolution == 'tablet' ?
                        "tabletContainerGap gridContainer" : "gridContainer"
            }
            noGapMobileS
        >
            <Row className={"gridRow"}>
                <Col
                    className={"gridCol"}
                    mobileS={currentResolution == 'mobile' ? 2 : currentResolution == 'tablet' ? 1.5 : 2}
                />
                <Col
                    className={"gridCol"}
                    mobileS={currentResolution == 'mobile' ? 2 : currentResolution == 'tablet' ? 1.5 : 2}
                />
                <Col
                    className={"gridCol"}
                    mobileS={currentResolution == 'mobile' ? 2 : currentResolution == 'tablet' ? 1.5 : 2}
                />
                <Col
                    className={"gridCol"}
                    mobileS={currentResolution == 'mobile' ? 2 : currentResolution == 'tablet' ? 1.5 : 2}
                />
                <Col
                    className={"gridCol"}
                    mobileS={currentResolution == 'mobile' ? 2 : currentResolution == 'tablet' ? 1.5 : 2}
                />
                <Col
                    className={"gridCol"}
                    mobileS={currentResolution == 'mobile' ? 2 : currentResolution == 'tablet' ? 1.5 : 2}
                />
                {currentResolution == 'tablet' && (
                    <>
                        <Col
                            className={"gridCol"}
                            mobileS={currentResolution == 'mobile' ? 2 : currentResolution == 'tablet' ? 1.5 : 2}
                        />
                        <Col
                            className={"gridCol"}
                            mobileS={currentResolution == 'mobile' ? 2 : currentResolution == 'tablet' ? 1.5 : 2}
                        />
                    </>
                )}
            </Row>
        </Container>
    )
}

export default Grid