import React, {useState, useContext, useEffect, useRef} from 'react'
import { Download, Desktop, Switch, InputText, Button } from "@design-system-rt/rtk-ui-kit";
import { Link } from 'react-router-dom'
import {useMutation} from "@apollo/client";

import {CHANGE_PAGE_NAME} from '../../../GraphQL/Mutations/changePageName'

import { PageContext } from "../../../Pages/Editor";
import logo from '../../../static/images/logo.svg'

import Loader from '../../etc/Loader'
import html2canvas from "html2canvas";

function Navbar() {
    const [isPageNameEdit, setIsPageNameEdit] = useState(false)
    const [inputFocus, setInputFocus] = useState(false)

    const { page, setPage, currentResolution, setCurrentResolution, themeTrigger, setThemeTrigger} = useContext(PageContext)
    const { isGrid, setIsGrid } = useContext(PageContext)

    const inputRef = useRef(null)

    const [changePageName, {loading}] = useMutation(CHANGE_PAGE_NAME, {
        onCompleted: (data) => {
            setPage({
                ...page,
                name: data.changePageName.page.name,
            })
        }
    })

    useEffect(() => {
        setTimeout(() => {
            if (document.activeElement !== inputRef.current) {
                setIsPageNameEdit(false)
            }
        }, 100)
    }, [inputFocus])

    return (
        <div className="navbar">
            <Loader color={"#000"} loading={loading} />
            <div className="d-flex">
                <Link to={"/"}>
                    <img src={logo} alt="" height="30px" />
                </Link>
                <div className="navbarIcons">
                    <a  style={{cursor: "pointer"}} onClick={() => {

                        html2canvas(document.getElementById("content"), {ignoreElements: (element) =>{
                            if (element!== null && element.className !== null && typeof element.className === 'string'){
                                return element && element.className !== null && element.className.includes("gridCol")

                            }
                            return false;
                        }
                        } ) .then(
                            function (canvas) {
                                var a = document.createElement('a');
                                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                                a.download = 'somefilename.jpg';
                                a.click();
                            });
                    }}>
                        <Download
                            fill="#fff"
                            size={24}
                        />
                    </a>
                </div>
            </div>
            <div className="pageName">
                {page && !isPageNameEdit && (
                    <p onClick={() => {
                        setIsPageNameEdit(true)
                        setTimeout(() => {
                            inputRef.current.focus()
                        }, 100)
                    }}>
                        {page.name}
                    </p>
                )}
                {isPageNameEdit && (
                    <input
                        type="text"
                        className="pageNameInput"
                        defaultValue={page.name}
                        placeholder={"Название страницы"}
                        ref={inputRef}
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                        onKeyPress={(e) => e.key == 'Enter' && inputRef.current.value.replace(/ /g, '') !== "" ? changePageName({
                            variables: {
                                id: page.id,
                                name: inputRef.current.value
                            }
                        }) && setIsPageNameEdit(false) : {}}
                        required
                    />
                )}
            </div>
            <div className="d-flex me-1 align-items-center">
                <Switch
                    // className={"rtCircularBtn"}
                    style={{backgroundColor: themeTrigger? "rgb(29, 37, 51)": ""}}
                    color="primary2"
                    onChange={() => setThemeTrigger(!themeTrigger)}
                    shape="circular"
                    defaultChecked={!themeTrigger}
                    text="Тёмная тема"
                    textPosition="left"
                    textClassName={"textSwitch"}
                />
                <div className="resolutionBox">
                    <button
                        className={currentResolution == 'mobile' ? "rtCircularBtn rtBtnActive" : "rtCircularBtn"}
                        onClick={() => setCurrentResolution('mobile')}
                    >
                        Mobile
                    </button>

                    <button
                        className={currentResolution == 'tablet' ? "rtCircularBtn rtBtnActive" : "rtCircularBtn"}
                        onClick={() => setCurrentResolution('tablet')}
                    >
                        Tablet
                    </button>
                    <button
                        className={currentResolution == 'desktop' ? "rtCircularBtn rtBtnActive" : "rtCircularBtn"}
                        onClick={() => setCurrentResolution('desktop')}
                    >
                        Desktop
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
