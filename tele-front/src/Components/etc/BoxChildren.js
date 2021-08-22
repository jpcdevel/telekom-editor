import React, { useContext } from 'react'
import {
    AddLarge,
    Box,
    Button,
    Checkbox,
    Col,
    Container,
    InputText, RadioButton,
    Row,
    Typography,
    Switch
} from "@design-system-rt/rtk-ui-kit";
import {useMutation} from "@apollo/client";

import {CREATE_COL} from "../../GraphQL/Mutations/createCol";
import {CREATE_ROW} from "../../GraphQL/Mutations/createRow";

import {PageContext} from "../../Pages/Editor";

function BoxChildren({box, refetch}) {
    const { currentResolution, edit, setEdit } = useContext(PageContext)

    const [createCol, {loading}] = useMutation(CREATE_COL, {
        onCompleted: (data) => {
            refetch()
            setEdit({
                isEdit: false,
                isEditing: true,
                editElem: data.createCol.block.type,
                id: data.createCol.block.id,
                cols: data.createCol.block.cols,
                type: data.createCol.block.type,
                block: data.createCol.block,

            })
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const [createRow, {loading: loadingRow}] = useMutation(CREATE_ROW, {
        onCompleted: (data) => {
            refetch()
            setEdit({
                isEdit: false,
                isEditing: true,
                editElem: data.createRow.block.type,
                id: data.createRow.block.id,
                cols: data.createRow.block.cols,
                type: data.createRow.block.type,
                block: data.createRow.block,
            })
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return (
        <Container
            className={
                "mobileContainerGap"
            }
            noGapMobileS
        >
            {box.boxChildren !== undefined && box.boxChildren.map((row, idx) => {
                return (
                    <>
                        <Row key={idx} className={row.order !== 1 ? "rowRt" : ""}>
                            {row.blocks !== undefined && row.blocks.map((block, idy) => {
                                return (
                                    <>
                                        <Col
                                            key={idy}
                                            mobileS={block.cols}
                                            className={"colRt"}
                                            onClick={() => setEdit({
                                                isEdit: false,
                                                isEditing: true,
                                                type: block.type,
                                                id: block.id,
                                                cols: block.cols,
                                                block
                                            })}
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
                                            {block.type == 'input' && (
                                                <InputText
                                                    label={block.label}
                                                    defaultValue={block.value}
                                                    color={block.color}
                                                    shape={block.shape}
                                                    className={"typElem"}
                                                />
                                            )}
                                            {block.type == 'checkbox' && (
                                                <Checkbox
                                                    children={block.value}
                                                    color={block.color}
                                                    shape={block.shape}
                                                    className={"typElem"}
                                                />
                                            )}
                                            {block.type == 'radio' && (
                                                <RadioButton
                                                    children={block.value}
                                                    color={block.color}
                                                    className={"typElem"}
                                                    disabled={block.disabled}
                                                    checked={block.checked}
                                                />
                                            )}
                                            {block.type == 'switch' && (
                                                <Switch
                                                    color={block.color}
                                                    text={block.value}
                                                    shape={block.shape}
                                                    textPosition={block.textPosition}
                                                />
                                            )}
                                        </Col>

                                        {idy == row.blocks.length - 1 && currentResolution !== 'desktop' && row.blocks[idy].cols !== 12 && row.colsLasted > 0 && edit.isEdit == true && (
                                            <Col
                                                mobileS={1}
                                                className={"emptyCol activeEmptyCol"}
                                                onClick={() => edit.editElem !== 'box' && createCol({
                                                    variables: {
                                                        id: row.id,
                                                        type: edit.editElem,
                                                        cols: 2,
                                                        value: "Text",
                                                        text: "Text",
                                                    }
                                                })}
                                            >
                                                <AddLarge
                                                    fill=""
                                                    size={24}
                                                />
                                            </Col>
                                        )}
                                    </>
                                )
                            })}
                        </Row>
                        {idx == box.boxChildren.length - 1 && currentResolution !== 'desktop' && edit.isEdit == true && (
                            <Row className={box.boxChildren.length > 0 ? "rowRt" : ""}>
                                <Col
                                    mobileS={1}
                                    className={"emptyCol activeEmptyCol"}
                                    onClick={() => edit.editElem !== 'box' && createRow({
                                        variables: {
                                            id: box.id,
                                            type: edit.editElem,
                                            cols: 2,
                                            value: "Text",
                                            text: "Text",
                                            isBox: true
                                        }
                                    })}
                                >
                                    <AddLarge
                                        fill=""
                                        size={24}
                                    />
                                </Col>
                            </Row>
                        )}
                    </>

                )
            })}
            {box.boxChildren && box.boxChildren.length == 0 && edit.isEdit == true && (
                <Row className={box.boxChildren.length > 0 ? "rowRt" : ""}>
                    <Col
                        mobileS={1}
                        className={"emptyCol activeEmptyCol"}
                        onClick={() => edit.editElem !== 'box' && createRow({
                            variables: {
                                id: box.id,
                                type: edit.editElem,
                                cols: 2,
                                value: "Text",
                                text: "Text",
                                isBox: true
                            }
                        })}
                    >
                        <AddLarge
                            fill=""
                            size={24}
                        />
                    </Col>
                </Row>
            )}
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