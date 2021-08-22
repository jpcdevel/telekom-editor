import React from 'react'
import {gql} from "@apollo/client";

export const CREATE_ROW = gql`
    mutation createRow($type: String!, $id: ID!, $cols: Int!, $text: String!, $value: String!, $isBox: Boolean!) {
        createRow(id: $id, text: $text, value: $value, cols: $cols, type: $type, isBox: $isBox) {
            block {
                id
                type
                order
                cols
            }
        }
    }
`

