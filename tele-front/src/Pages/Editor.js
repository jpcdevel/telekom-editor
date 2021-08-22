import React, {useState} from 'react'
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom'

import {GET_PAGE_BY_ID} from "../GraphQL/Queries/getPageById";

import Navbar from "../Components/Editor/Essentials/Navbar";
import Main from "../Components/Editor/Essentials/Main";

import Loader from "../Components/etc/Loader";
import useLocalStorageState from "use-local-storage-state";

export const PageContext = React.createContext([])

function Editor() {
    const [page, setPage] = useState({})
    const [currentResolution, setCurrentResolution] = useState('tablet')
    const [themeTrigger, setThemeTrigger] = useLocalStorageState('todos', true);
    const [isGrid, setIsGrid] = useState(false)
    const [edit, setEdit] = useState({
        isEdit: false
    })

    const { id } = useParams()

    const {data, loading, error, refetch} = useQuery(GET_PAGE_BY_ID, {
        variables: { id },
        onCompleted: (data) => {
            console.log(data)
            setPage(data.getPageById)
        },
        onError: (err) => {
            console.log(err)
        },
        fetchPolicy: 'cache-and-network'
    })

    document.body.style.backgroundColor = "#E8E8EE";
    return (
        <PageContext.Provider value={{
            page,
            setPage,
            currentResolution,
            setCurrentResolution,
            isGrid,
            setIsGrid,
            themeTrigger,
            setThemeTrigger,
            edit,
            setEdit,
        }}
        >
            <Loader loading={loading} color={"#000"} />
            {currentResolution !== 'desktop' && (
                <Navbar />
            )}
            <Main refetch={refetch} />
        </PageContext.Provider>
    )
}

export default Editor