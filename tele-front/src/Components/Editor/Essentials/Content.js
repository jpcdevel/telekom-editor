import React, {useContext, useEffect} from 'react'
import {
    User,
    DoorExit,
    Container,
    Row,
    Col,
    Button,
    Typography,
    Box,
    AddLarge,
    InputText, Checkbox, RadioButton, Switch
} from '@design-system-rt/rtk-ui-kit'
import { useMutation } from "@apollo/client";

import { CREATE_COL } from "../../../GraphQL/Mutations/createCol";
import { CREATE_ROW } from "../../../GraphQL/Mutations/createRow";

import { PageContext } from "../../../Pages/Editor";

import logo from "../../../static/images/logo.svg";
import BoxChildren from '../../etc/BoxChildren'
import Grid from '../../etc/Grid'
import Loader from '../../etc/Loader'


function Content({refetch}) {
    const { page, currentResolution, setCurrentResolution, isGrid, themeTrigger, edit, setEdit } = useContext(PageContext)

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
                block: data.createCol.block
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
                block: data.createRow.block
            })
        },
        onError: (err) => {
            console.log(err)
        }
    })


    let bg_color_nav = themeTrigger?  "#F5F5F5": "#101828"
    let bg_color_content = themeTrigger?  "#F4F4F5": "#272F3D"
    let text_color_content = themeTrigger?  "#272F3D": "#FFFFFF"
    return (
        <div id={"content"} className={currentResolution == 'mobile' ? "content widthMobile" : currentResolution == 'desktop' ? "contentDesktop" : "content"}  style={{backgroundColor: bg_color_content, color: text_color_content}}>
            <Loader loading={loading} color={"#000"} />
            <div style={{width: "100%"}}>
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
                    {currentResolution !== 'desktop' && isGrid && !edit.isEdit && (
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
                                <>
                                    <Row
                                        key={idx}
                                        className={
                                            row.blocks.length > 0 && row.blocks[0].type == 'box' && row.blocks[0].globalBox == true ? "rowRt centered" : "rowRt"
                                        }
                                    >
                                        {row.blocks.map((block, idy) => {
                                            return (
                                                <>
                                                    <Col
                                                        key={idy}
                                                        mobileS={row.blocks[0].type == 'box' && currentResolution == 'tablet' && row.blocks[0].cols < 10 ? 10 : block.cols}
                                                        className={"colRt"}
                                                        onClick={() => block.type !== 'box' && setEdit({
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
                                                                children={<BoxChildren box={block} refetch={refetch}/>}
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
                                                                className={"typElem"}
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

                                    {idx == page.rows.length - 1 && currentResolution !== 'desktop' && edit.isEdit == true && (
                                        <Row className={"rowRt"}>
                                            <Col
                                                mobileS={1}
                                                className={"emptyCol activeEmptyCol"}
                                                onClick={() => createRow({
                                                    variables: {
                                                        id: page.id,
                                                        type: edit.editElem,
                                                        cols: 2,
                                                        value: "Text",
                                                        text: "Text",
                                                        isBox: false
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
                        {page.rows && page.rows.length == 0 && edit.isEdit == true && (
                            <Row className={"rowRt"}>
                                <Col
                                    mobileS={1}
                                    className={"emptyCol activeEmptyCol"}
                                    onClick={() => createRow({
                                        variables: {
                                            id: page.id,
                                            type: edit.editElem,
                                            cols: 2,
                                            value: "Text",
                                            text: "Text",
                                            isBox: false
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

                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Content