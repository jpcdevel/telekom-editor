import React from 'react'
import {gql} from "@apollo/client";

export const WIDEN_ELEM = gql`
    mutation widenElem($type: String!, $id: ID!) {
        widenElem(id: $id, type: $type) {
            block {
                type
                order
            }
        }
    }
`

