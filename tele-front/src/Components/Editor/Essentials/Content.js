import React, {useContext} from 'react'
import {
    User,
    DoorExit,
    Container,
    Row,
    Col,
    Button,
    Typography,
    Box
} from '@design-system-rt/rtk-ui-kit'

import { PageContext } from "../../../Pages/Editor";

import logo from "../../../static/images/logo.svg";
import BoxChildren from '../../etc/BoxChildren'
import Grid from '../../etc/Grid'

function Content() {
    const { page, currentResolution, setCurrentResolution, isGrid, themeTrigger } = useContext(PageContext)

    let bg_color_nav = themeTrigger?  "#FFFFFF": "#101828"
    let bg_color_content = themeTrigger?  "#F4F4F5": "#272F3D"
    let text_color_content = themeTrigger?  "#272F3D": "#FFFFFF"
    return (
        <div className={currentResolution == 'mobile' ? "content widthMobile" : currentResolution == 'desktop' ? "contentDesktop" : "content"} >
            <div style={{backgroundColor: bg_color_content, color: text_color_content, width: "100%"}}>
                <div className="navbarContent" style={{backgroundColor: bg_color_nav}}>
                    <img src={logo} alt="" height="30px" />
                    <div className="d-flex align-items-center">
                        <User
                            fill=""
                            size={30}
                        />
                        <p className="ms-2">Василий П.</p>
                        {currentResolution == 'desktop' && (
                            <DoorExit
                                fill=""
                                size={24}
                                style={{cursor: 'pointer'}}
                                onClick={() => setCurrentResolution('tablet')}
                                className={"ms-3 mb-1"}
                            />
                        )}
                    </div>
                </div>
                <div className="mainContent">
                    {currentResolution !== 'desktop' && isGrid && (
                        <Grid />
                    )}
                    <Container
                        className={
                            currentResolution == 'mobile' ?
                            "mobileContainerGap" :
                                currentResolution == 'tablet' ?
                                "tabletContainerGap" : ""
                        }
                        noGapMobileS
                    >
                        {page.rows !== undefined && page.rows.map((row, idx) => {
                            return (
                                <Row key={idx} className={row.blocks[0].type !== 'undefined' && row.blocks[0].type == 'box' && row.blocks[0].globalBox == true ? "rowRt centered" : "rowRt"}>
                                    {row.blocks !== undefined && row.blocks.map((block, idy) => {
                                        return (
                                            <Col
                                                key={idy}
                                                mobileS={row.blocks[0].type == 'box' && currentResolution == 'tablet' && row.blocks[0].cols < 10 ? 10 : block.cols}
                                                // mobileS={
                                                //     currentResolution == 'mobile' ?
                                                //         block.cols * (0.67) :
                                                //         currentResolution == 'desktop' ?
                                                //             block.cols / (0.67) : block.cols
                                                // }
                                                className={"colRt"}
                                            >
                                                {block.type == 'box' && (
                                                    <Box
                                                        spacing={block.spacing}
                                                        spacingTop={block.spacingTop}
                                                        spacingBottom={block.spacingBottom}
                                                        cornersRounding={block.cornersRounding}
                                                        className={"box"}
                                                        shadow={"bottomXL"}
                                                        children={<BoxChildren box={block} />}
                                                    />
                                                )}
                                                {block.type == 'button' && (
                                                    <Button
                                                        children={block.value}
                                                        color={block.color}
                                                        size={block.sizeElem}
                                                        shape={block.shape}
                                                        disabled={block.disabled}
                                                        view={block.btnView}
                                                        className={"typElem"}
                                                    />
                                                )}

                                                {block.type == 'typography' && (
                                                    <Typography
                                                        children={block.text}
                                                        variant={block.variant}
                                                        color={block.color}
                                                        spacing={block.spacing}
                                                        spacingTop={block.spacingTop}
                                                        spacing={block.spacingBottom}
                                                        tag={block.tag}
                                                    />
                                                )}
                                            </Col>
                                        )
                                    })}
                                </Row>
                            )
                        })}
                        {/*<Row>*/}
                        {/*    <Col mobileS={12}>*/}
                        {/*        <p>test</p>*/}
                        {/*    </Col>*/}
                        {/*    <Col>*/}
                        {/*        <p>test</p>*/}
                        {/*    </Col>*/}
                        {/*    <Col>*/}
                        {/*        <p>test</p>*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Content