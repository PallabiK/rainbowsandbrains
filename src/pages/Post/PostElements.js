import styled from 'styled-components'


export const PostContainer = styled.div`
    max-width: 650px;
    margin: auto;

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

    /* unvisited link */
    a:link {
        color: #cc5801;
        text-decoration: none;
    }

    /* visited link */
    a:visited {
        color: #cc5801;
        text-decoration: none;
    }

    /* mouse over link */
    a:hover {
        color: #c00001;
        text-decoration: underline;
    }

    /* selected link */
    a:active {
        color: #c00001;
        text-decoration: underline;
    }

`

export const PostFooter = styled.div`

`