import React from 'react'
import {gql} from "@apollo/client";

export const EDIT_BUTTON = gql`
    mutation editButton($id: ID!, $value: String!, $color: String!, $size: String) {
        editButton(id: $id, value: $value, color: $color, size: $size) {
            block {
                id
                type
                order
                cols
            }
        }
    }
`

