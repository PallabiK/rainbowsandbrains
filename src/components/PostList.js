import React, { useState } from 'react'
import PostCard from "./PostCard"
import "./components.css"
import postlist from "../posts.json"
import ReactPaginate from 'react-paginate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const PostList = () => {

    const [posts, setPosts] = useState(postlist)
    const [pageNumber, setPageNumber] = useState(0)

    const postsPerPage = 2
    const pagesVisited = pageNumber * postsPerPage

    const displayPosts = posts
        .slice(pagesVisited, pagesVisited + postsPerPage)
        .map((post, i) => {
            return <PostCard post={post} key={i}/>
        })

    const pageCount = Math.ceil(posts.length / postsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <div className="postlist">
            { posts.length && displayPosts }
            <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtns"}
                previousLinkClassName = {"previousBtn"}
                nextLinkClassName = {"nextBtn"}
                disabledClassName = {"paginationDisabled"}
                activeClassName = {"paginationActive"}
            />
        </div>
    )
}

export default PostList
