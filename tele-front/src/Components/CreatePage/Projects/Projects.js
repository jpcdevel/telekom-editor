import React, {useState} from 'react'
import {useQuery} from "@apollo/client";

import {GET_ALL_PAGES} from '../../../GraphQL/Queries/getAllPages'

import ProjectBox from '../Projects/ProjectBox'
import Loader from '../../etc/Loader'

function Projects({pages}) {
    return (
        <div className="projects d-flex">
            {pages !== undefined && pages.map((page, idx) => {
                return (
                    <ProjectBox key={idx} page={page} />
                )
            })}
        </div>
    )
}

export default Projects