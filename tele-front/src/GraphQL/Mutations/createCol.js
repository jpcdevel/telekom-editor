import React from 'react'
import {gql} from "@apollo/client";

export const CREATE_COL = gql`
    mutation createCol($type: String!, $id: ID!, $cols: Int!, $text: String!, $value: String!) {
        createCol(id: $id, text: $text, value: $value, cols: $cols, type: $type) {
            block {
                id
                type
                order
                cols
            }
        }
    }
`

