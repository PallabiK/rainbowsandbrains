import React, {useLayoutEffect} from 'react'
import { Link } from "react-router-dom"
import postlist from "../../posts.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Nextpost} from './NextPostElements'


const NextPost = ({post}) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    // get previous and next post
    const i = postlist.findIndex(el => el.id === post.id)
    const next = postlist[i===0?postlist.length-1:i-1]
    const previous = postlist[i===postlist.length-1?0:i+1]

    return (
        <Nextpost>
                <Link className="links" to={`/post/${previous.slug}`}><FontAwesomeIcon icon={faChevronLeft} /> Prev Post</Link>
                <Link className="links" to={`/post/${next.slug}`}>Next Post <FontAwesomeIcon icon={faChevronRight} /></Link>
        </Nextpost>
    )
}

export default NextPost
