import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'



export const PostContainer = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 20px;

    & img {
        max-width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`

export const PostHeader = styled.div`

`

export const PostBody = styled.div`
    text-align: justify;
    overflow-wrap: break-word;
    line-height: 2;

    & p {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

`

export const PostFooter = styled.div`

`