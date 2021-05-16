import styled from 'styled-components'

export const Nextpost = styled.div`
    display: flex;
    justify-content: space-between;

    & .links {
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
    }

    @media(hover: hover) {
        & .links:hover {
            color: #c00001;
        }
    }
`