import React, { useState } from 'react'
import PostCard from "./PostCard"
import "./components.css"
import postlist from "../posts.json"
import ReactPaginate from 'react-paginate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const PostList = () => {


    const [pageNumber, setPageNumber] = useState(0)

    const postsPerPage = 5
    const pagesVisited = pageNumber * postsPerPage

    const displayPosts = postlist
        .slice(pagesVisited, pagesVisited + postsPerPage)
        .map((post, i) => {
            return <PostCard post={post} key={i}/>
        })

    const pageCount = Math.ceil(postlist.length / postsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

            return (
            
                <div className="postlist">
                    { postlist.length && displayPosts }
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
