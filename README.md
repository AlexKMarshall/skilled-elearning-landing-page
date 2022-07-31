# Frontend Mentor - Equalizer landing page solution

This is a solution to the [Skilled e-learning landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![image](https://user-images.githubusercontent.com/48052439/182014279-47ae7f92-aa56-472e-b667-5b0dbcb189ba.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://hilarious-zuccutto-26d3b9.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CUBE CSS with Tailwind

### What I learned

This was a good challenge to mainly use intrinsic design principles on. For instance, the main card grid works very well with an `auto-fit` layout, avoiding the need for specific media queries.

The main problem I hit building this was the hero image. The designers had combined the image, the stats and the decorative stripe all into a single image file. This was problematic for two reasons. Firstly it meant the statistics were only available in alt text. Secondly positioning the image with the stripe extending the full range of the screen was difficult. Absolute positioning techniques would not work because the whole image would be removed from the document flow. Any change to the text content of the hero, or font-size would have risked serious overflow issues.

To solve these problems I broke up the image and recreated its parts with HTML and CSS. This meant the data was actually in the document, rather than just alt text. And now the data and the main image could take up space in the layout, and only have the stripe take an absolute position. This does leave small inconsistancies where the stripe meets the main image, but I think this is an acceptable compromise as it prevents layout breaks on all screen-sizes.

## Author

- Github - [Alex Marshall](https://github.com/AlexKMarshall)
- Frontend Mentor - [@AlexKMarshall](https://www.frontendmentor.io/profile/AlexKMarshall)
- Twitter - [@AlexKMarshall1](https://twitter.com/alexkmarshall1)
