import React from 'react'
import {gql} from "@apollo/client";

export const EDIT_TYPO = gql`
    mutation editTypo($id: ID!, $text: String!, $color: String!, $variant: String!) {
        editTypo(id: $id, text: $text, color: $color, variant: $variant) {
            block {
                id
                type
                order
                cols
            }
        }
    }
`

