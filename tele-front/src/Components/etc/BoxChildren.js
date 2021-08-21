import React from 'react'
import {Box, Button, Col, Container, Row, Typography} from "@design-system-rt/rtk-ui-kit";

function BoxChildren({box}) {
    return (
        <Container
            className={
                "mobileContainerGap"
            }
            noGapMobileS
        >
            {box.boxChildren !== undefined && box.boxChildren.map((row, idx) => {
                return (
                    <Row key={idx} className={row.order !== 1 ? "rowRt" : ""}>
                        {row.blocks !== undefined && row.blocks.map((block, idy) => {
                            return (
                                <Col
                                    key={idy}
                                    mobileS={block.cols}
                                    className={"colRt"}
                                >
                                    {block.type == 'box' && (
                                        <Box
                                            spacing={block.spacing}
                                            spacingTop={block.spacingTop}
                                            spacingBottom={block.spacingBottom}
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
                                        />
                                    )}

                                    {block.type == 'typography' && (
                                        <Typography
                                            children={block.text}
                                            variant={block.variant}
                                            color={block.color}
                                            spacing={block.spacing}
                                            spacingTop={block.spacingTop}
                                            spacingBottom={block.spacingBottom}
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
    )
}

export default BoxChildren