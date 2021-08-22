import {gql} from '@apollo/client'

export const GET_PAGE_BY_ID = gql`
    query($id:ID!) {
        getPageById(id: $id) {
            id
            name
            rows {
                id
                order
                colsLasted
                blocks {
                    id
                    order
                    type
                    cols
                    depth
                    btnView
                    value
                    icon
                    iconPosition
                    cornersRounding
                    color
                    sizeElem
                    shape
                    disabled
                    className
                    typColor
                    variant
                    tag
                    text
                    spacingBottom
                    spacingTop
                    spacing
                    label
                    hint
                    title
                    defaultOpen
                    selectItems {
                        key
                        value
                    }
                    fill
                    size
                    checked
                    textPosition
                    tabItems {
                        index
                        value
                        icon
                        iconPosition
                    }
                    boxChildren {
                        order
                        id
                        colsLasted
                        blocks {
                            id
                            order
                            type
                            cols
                            depth
                            btnView
                            value
                            icon
                            iconPosition
                            cornersRounding
                            color
                            sizeElem
                            shape
                            disabled
                            className
                            typColor
                            variant
                            tag
                            text
                            spacingBottom
                            spacingTop
                            spacing
                            label
                            hint
                            title
                            defaultOpen
                            selectItems {
                                key
                                value
                            }
                            fill
                            size
                            checked
                            textPosition
                            tabItems {
                                index
                                value
                                icon
                                iconPosition
                            }
                            offset
                        }
                    }
                    globalBox
                    offset
                }
            }
        }
    }
`

