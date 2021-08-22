import React from 'react'
import {gql} from "@apollo/client";

export const DELETE_ELEM = gql`
    mutation deleteElem($id: ID!) {
        deleteElem(id: $id) {
            block {
                type
                order
            }
        }
    }
`

