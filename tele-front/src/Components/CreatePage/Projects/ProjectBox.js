import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../static/images/logo.svg'

function ProjectBox({page}) {
    return (
        <div className="projectBox">
            <div className="container" style={{height: '100%'}}>
                <div className="row" style={{height: '100%'}}>
                    <div className="col-7 projectContent">
                        <Link className="projectLink" to={'page/' + page.id}>
                            <h2 className="projectName">
                                {page.name}
                            </h2>
                        </Link>
                    </div>
                    <div className="col-5">
                        <img src={logo} alt="" width="100%" height="100%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox