import React from 'react'
import {gql} from "@apollo/client";

export const CHANGE_PAGE_NAME = gql`
    mutation changePageName ($name: String!, $id: ID!) {
        changePageName (name: $name, id: $id) {
            page {
                id
                name
            }
        }
    }
`

