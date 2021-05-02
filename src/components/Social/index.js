import React from 'react'

import {FacebookShareButton, TwitterShareButton, WhatsappShareButton, RedditShareButton, EmailShareButton,} from "react-share"
import {FacebookIcon, TwitterIcon, WhatsappIcon, RedditIcon, EmailIcon} from "react-share"

import {SocialSection, SocialButtons} from './SocialElements'


const Social = ({page}) => {

    console.log(page)


    return (
        <SocialSection>
            <small>Like this article? Feel free to share!</small>
            <SocialButtons>
                <FacebookShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                    <FacebookIcon size={48} logoFillColor="white" round={true}></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                    <TwitterIcon size={48} logoFillColor="white" round={true}></TwitterIcon>
                </TwitterShareButton>
                <WhatsappShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                    <WhatsappIcon size={48} logoFillColor="white" round={true}></WhatsappIcon>
                </WhatsappShareButton>
                <RedditShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                    <RedditIcon size={48} logoFillColor="white" round={true}></RedditIcon>
                </RedditShareButton>
                <EmailShareButton url={page} quote="Check out this article by Rainbows and Brains!" hashtag="#RainbowsAndBrains">
                    <EmailIcon size={48} logoFillColor="white" round={true}></EmailIcon>
                </EmailShareButton>
            </SocialButtons>
        </SocialSection>
    )
}

export default Social
