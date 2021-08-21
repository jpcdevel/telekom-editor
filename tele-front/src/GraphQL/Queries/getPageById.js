import {gql} from '@apollo/client'

export const GET_PAGE_BY_ID = gql`
    query($id:ID!) {
        getPageById(id: $id) {
            id
            name
        }
    }
`

