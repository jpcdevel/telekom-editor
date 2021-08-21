import React from 'react'
import {gql} from "@apollo/client";

export const CREATE_PAGE = gql`
    mutation createPage {
        createPage {
            page {
                id
                name
            }
        }
    }
`

