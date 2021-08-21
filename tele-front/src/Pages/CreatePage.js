import React, {useState} from 'react'
import {useQuery} from "@apollo/client";

import {GET_ALL_PAGES} from "../GraphQL/Queries/getAllPages";

import Navbar from '../Components/CreatePage/Essentials/Navbar'
import Content from '../Components/CreatePage/Essentials/Content'
import Loader from "../Components/etc/Loader";

function CreatePage() {
    const [pages, setPages] = useState([])
    const {loading} = useQuery(GET_ALL_PAGES, {
        onCompleted: (data) => {
            setPages(data.getAllPages)
        }
    })
    document.body.style.backgroundColor = "#1D1B1F";
    return (
        <>
            <Loader loading={loading} color={"#fff"} />
            <Navbar />
            <Content pages={{pages, setPages}} />
        </>
    )
}

export default CreatePage