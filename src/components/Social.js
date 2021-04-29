import React from 'react'
import "./components.css"

import {FacebookShareButton, WhatsappShareButton} from "react-share"
import {FacebookIcon, WhatsappIcon} from "react-share"


const Social = ({page}) => {

    console.log(page)


    return (
        <div className="social">
            <FacebookShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
            </FacebookShareButton>
            <WhatsappShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
            </WhatsappShareButton>
        </div>
    )
}

export default Social
