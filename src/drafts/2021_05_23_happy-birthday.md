---
title: Happy Birthday!
author: MM
date: May 23, 2021
slug: happy-birthday
title_img: https://drive.google.com/uc?export=download&id=1mB4O5nVk4crBx7VRQHzdNv5urPfz0luy
description: This is a birthday message for PK.
---

Esteemed PK,

For this year's birthday I am proud to present the new look of Rainbows and Brains!

## Features

You will find the following features included in this birthday present:

1. A fully functional website with home page, about page and separate pages for each blog post
2. An easy way to produce and upload blog posts using markdown
3. Full control over the appearance of the website (change the CSS at will!)
4. Free website hosting on github and free image hosting on google drive (you only pay for domain name)

## How to do things


### setup

To add new posts you will need a copy of the rainbowsandbrains github repository ([download here](https://github.com/mandmeier/rainbowsandbrains)).

You also want to install [Node.js](https://nodejs.org/en/).

For a nice text editor, check out [VS code](https://code.visualstudio.com/download).


### how to create a new post

To create a new post, start a new markdown (.md) file in the **RNB>src>content** folder. The file that holds this post here is found in **RNB/src/content/2021_05_23_happy-birthday.md**

You can fill out some form fields at the top of the file with the metadata about the post, such as the title, author, date created, title image etc. Look at the markdown file for an example.

Once you have written a new post, open the terminal, go to the RNB folder, then run the server script:

    npm run server

This translates the markdown file into JSON that can be read by the browser.

Then you can open a preview.

    npm start

If you are happy with everything you can save your changes to github

```
git add -A
git commit -m "added new blog post"
git push
```

Lastly, you can deploy the latest blog post to publish it

    npm run deploy


### how to insert images

To insert an image, upload it to google drive in the folder that goes with your blog post.
The folder for this post would be **"2021_05_23_happy-birthday"**.

Next, copy the share link for the image and go to the [Google Drive Direct Download Link Generator](https://sites.google.com/site/gdocs2direct/home) to turn it into (you guessed it) a direct download link. This may sound a bit complicated, but shut up it's free!

Once you have the direct download link, you can create a **figure html** tag in the markdown document and paste it as the source of the image. (Check the example in this .md file)


<figure class="image">
  <img src="https://drive.google.com/uc?export=download&id=15zo2zJfjcbLPmsXSA0mgyk8b3TZpcBiv" style="max-width: 300px;" alt="PK and MM at a beautiful tropical beach">
  <figcaption>Fig.1 - PK and MM at a beautiful tropical beach.</figcaption>
</figure>



> Tip: to make the page load faster, head over to [TinyPNG](https://tinypng.com/) and compress your png image. Works with jpeg too!


### how to insert a video

To embed a youtube video, you can write an **iframe html** tag. (Check the example in this .md file). As the video source you want to type "https://www.youtube.com/embed/VIDEO_ID".

<div className="iframe-video">
    <iframe className="iframe-responsive" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
</div>


Or if you want to specify start and end time, simply add **"?start=START_SECONDS&end=END_SECONDS"** to the video url. (Check the .md file again)

<div className="iframe-video">
    <iframe className="iframe-responsive" src="https://www.youtube.com/embed/tgbNymZ7vqY?start=52&end=108"></iframe>
</div>

### More Markdown Magic

Markdown can do a lot more to make your posts look pretty.

Check out the official [Markdown Guide](https://www.markdownguide.org/basic-syntax/) to learn how to format things.

### Last things to do

Come find me so that we can change the weird github address to *rainbowsandbrains.com*. Once this is done we can fix the post-to-post links that are still missing and everything should be ready.

I shall also be of assistance in the likely case that the styling looks awful and there are a million bugs.

Happy birthday & have fun with the new website!

-MM