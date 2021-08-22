import React, { useContext, useState, useEffect } from 'react'
import {useMutation} from "@apollo/client";
import {
    Select, Stepper, Trash, CheckLarge
} from '@design-system-rt/rtk-ui-kit'

import {WIDEN_ELEM} from "../../../GraphQL/Mutations/widenElem";
import {DELETE_ELEM} from "../../../GraphQL/Mutations/deleteElem";
import {EDIT_TYPO} from "../../../GraphQL/Mutations/editTypo";
import {EDIT_BUTTON} from "../../../GraphQL/Mutations/editButton";

import {PageContext} from "../../../Pages/Editor";

import Loader from '../../etc/Loader'

function SecondBar({refetch}) {
    const [widen, {loading}] = useMutation(WIDEN_ELEM, {
        onCompleted: (data) => {
            refetch()
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const [deleteEl, {loading: loadingDelete}] = useMutation(DELETE_ELEM, {
        onCompleted: (data) => {
            refetch()
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const [editTypo, {loading: loadingTypo}] = useMutation(EDIT_TYPO, {
        onCompleted: (data) => {
            refetch()
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const [editButton, {loading: loadingBtn}] = useMutation(EDIT_BUTTON, {
        onCompleted: (data) => {
            refetch()
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const { themeTrigger, edit, setEdit } = useContext(PageContext)

    const [variant, setVariant] = useState()
    const [text, setText] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [value, setValue] = useState('')

    useEffect(() => {
        if (edit.block !== undefined) {
            setValue(edit.block.value)
            setColor(edit.block.color)
            setSize(edit.block.elemSize)
            setText(edit.block.text)
            setVariant(edit.block.variant)
        }
    }, [edit.block])



    let bg_color = themeTrigger?  "rgb(29, 37, 51)": "#141C2C";
    return (
        <div className="bar" style={{backgroundColor: bg_color}}>
            <Loader color={"#000"} loading={loading} />
            <Loader color={"#000"} loading={loadingDelete} />
            <Loader color={"#000"} loading={loadingTypo} />
            <Loader color={"#000"} loading={loadingBtn} />
            {edit.isEditing && (
                <div className="">
                    <div className="stepperArea d-flex">
                        <p>Ширина</p>
                        <Stepper
                            onLeftClick={() => {
                                widen({
                                    variables: {
                                        type: 'decrease',
                                        id: edit.id
                                    }
                                })
                                setEdit({
                                    ...edit,
                                    cols: --edit.cols
                                })
                            }}
                            onRightClick={() => {
                                widen({
                                    variables: {
                                        type: 'increase',
                                        id: edit.id
                                    }
                                })
                                setEdit({
                                    ...edit,
                                    cols: ++edit.cols
                                })
                            }}
                            disabled={edit.cols > 11 ? "right" : edit.cols < 2 ? "left" : ""}
                            size="small"
                            className={"stepper secondBarMargin"}
                        />
                    </div>
                    <div className="centered">
                            <div>
                                <h1>{edit.cols}</h1>
                            </div>
                    </div>
                    {edit.type == 'typography' && edit.block && (
                        <>
                            <div>
                                <Select
                                    label="Цвет"
                                    onChange={(value) => setColor(value)}
                                    defaultValue={edit.block.color}
                                    options={[
                                        {
                                            key: 'main',
                                            value: 'main'
                                        },
                                        {
                                            key: 'error',
                                            value: 'error'
                                        },
                                        {
                                            key: 'warning',
                                            value: 'warning'
                                        },
                                        {
                                            key: 'info',
                                            value: 'info'
                                        },
                                        {
                                            key: 'primary1',
                                            value: 'primary1'
                                        },
                                        {
                                            key: 'primary2',
                                            value: 'primary2'
                                        }
                                    ]}
                                    className={"select"}
                                />

                            </div>
                            <div>
                                <Select
                                    label="Размер"
                                    onChange={(value) => {setVariant(value)}}
                                    defaultValue={edit.block.variant}
                                    options={[
                                        {
                                            key: 'h1',
                                            value: 'h1'
                                        },
                                        {
                                            key: 'h2',
                                            value: 'h2'
                                        },
                                        {
                                            key: 'h3',
                                            value: 'h3'
                                        },
                                        {
                                            key: 'h4',
                                            value: 'h4'
                                        },
                                        {
                                            key: 'bodyL',
                                            value: 'bodyL'
                                        },
                                        {
                                            key: 'bodyM',
                                            value: 'bodyM'
                                        }
                                    ]}
                                    className={"select"}
                                />
                            </div>
                            <div
                                className="centered align-items-center"
                                style={{cursor: "pointer"}}

                            >

                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                className={"pageNameInput"}
                                placeholder={"Текст"}
                                defaultValue={edit.block.text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            </div>
                        </>
                    )}

                    {edit.type == 'button' && edit.block && (
                        <>
                            <div>
                                <Select
                                    label="Цвет"
                                    onChange={(value) => setColor(value)}
                                    defaultValue={edit.block.color}
                                    options={[
                                        {
                                            key: 'primary1',
                                            value: 'primary1'
                                        },
                                        {
                                            key: 'primary2',
                                            value: 'primary2'
                                        },
                                        {
                                            key: 'secondary1',
                                            value: 'secondary1'
                                        },
                                        {
                                            key: 'secondary2',
                                            value: 'secondary2'
                                        }
                                    ]}
                                    className={"select"}
                                />

                            </div>
                            <div>
                                <Select
                                    label="Размер"
                                    onChange={(value) => {setSize(value)}}
                                    defaultValue={edit.block.sizeElem}
                                    options={[
                                        {
                                            key: 'small',
                                            value: 'small'
                                        },
                                        {
                                            key: 'medium',
                                            value: 'medium'
                                        },
                                        {
                                            key: 'large',
                                            value: 'large'
                                        }
                                    ]}
                                    className={"select"}
                                />
                            </div>
                            <div
                                className="centered align-items-center"
                                style={{cursor: "pointer"}}
                            >
                                <input
                                    type="text"
                                    className="pageNameInput"
                                    defaultValue={edit.block.value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder={"Текст"}
                                    style={{width: '100%'}}
                                />
                            </div>
                        </>
                    )}

                    {edit.type == 'typography' && edit.block && (
                        <div
                            className="centered align-items-center mt-4"
                            style={{cursor: "pointer"}}
                            onClick={() => {
                                editTypo({
                                    variables: {
                                        id: edit.id,
                                        color,
                                        variant,
                                        text
                                    }
                                })
                                setEdit({
                                    ...edit,
                                    isEditing: false
                                })
                            }}
                        >
                            <CheckLarge
                                fill="#fff"
                                size={24}
                            />
                            <p className={"ms-2"}>Сохранить</p>
                        </div>
                    )}
                    {edit.type == 'button' && edit.block && (
                        <div
                            className="centered align-items-center mt-4"
                            style={{cursor: "pointer"}}
                            onClick={() => {
                                editButton({
                                    variables: {
                                        id: edit.id,
                                        color,
                                        size,
                                        value
                                    }
                                })
                                setEdit({
                                    ...edit,
                                    isEditing: false
                                })
                            }}
                        >
                            <CheckLarge
                                fill="#fff"
                                size={24}
                            />
                            <p className={"ms-2"}>Сохранить</p>
                        </div>
                    )}
                    <div
                        className="centered align-items-center mt-4"
                        style={{cursor: "pointer"}}
                        onClick={() => {
                            deleteEl({
                                variables: {id: edit.id}
                            })
                            setEdit({
                                ...edit,
                                isEditing: false
                            })
                        }}
                    >
                        <Trash
                            fill="#fff"
                            size={24}
                        />
                        <p className={"ms-2"}>Удалить блок</p>
                    </div>


                </div>
            )}
        </div>
    )
}

export default SecondBar