import React from 'react'
import { Button, AddSmall } from "@design-system-rt/rtk-ui-kit";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import {CREATE_PAGE} from "../../../GraphQL/Mutations/createPage";

import Projects from '../Projects/Projects'
import Loader from '../../etc/Loader'

function Content({pages: {pages, setPages}}) {
    const history = useHistory()
    const [createPage, {loading}] = useMutation(CREATE_PAGE, {
        onCompleted: (data) => {
            history.push('page/' + data.createPage.page.id)
            setPages([...pages, data.createPage.page])
        }
    })

    return (
        <div className="container" style={{color: "white", marginTop: '80px'}}>
            <Loader color={"#fff"} loading={loading} />
            <div className="row">
                <div className="col-12 d-flex">
                    <h1 className="myProjects">Мои страницы</h1>
                    <div className="createProject">
                        <Button
                            icon={<AddSmall />}
                            iconPosition="right"
                            className={"createProjectBtn"}
                            onClick={() => createPage()}
                        >
                            Создать страницу
                        </Button>
                    </div>
                </div>
            </div>
            <div className="row">
                <Projects pages={pages} />
            </div>
        </div>
    )
}

export default Content