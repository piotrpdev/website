---
title: "CAO Calculator"
date: "2021-02-26"
updated: "2022-08-18"
categories: 
  - "mobile"
  - "design"
coverImage: "/project-media/cao-calculator/thumb.png"
coverWidth: 16
coverHeight: 9
excerpt: Android app that helps calculate how many CAO points you need to qualify for a course.
---

<script>
    import FigmaFrame from '$lib/components/FigmaFrame.svelte'
</script>

> *DISCLAIMER: This is an adaptation of a Word document I have written that showcases parts of the creation process for this app (for the ISE module of my course). You can download it [here](/project-media/cao-calculator/app.docx). <br><br> [I actually made the app](https://leavingcertcao.xyz/) long **before** writing the document, but wrote it in past-tense anyway.*

## Introduction

As you probably saw in the description, this project is dedicated to a [CAO](https://www.cao.ie/) point calculator android app. It is directed towards [Leaving Certificate](https://www.citizensinformation.ie/en/education/state_examinations/established_leaving_certificate.html) students and is meant to help them keep track of the points they need for their desired CAO course more easily.

There are many similar apps on the Google Play store:

* [“*Leaving Cert CAO Points Calculator*”](https://play.google.com/store/apps/details?id=com.pointscalculate) by “*CareersPortal*”
    * This is an app that performs exactly what I want my app to do. However, I am not a fan of its UI; I think the design isn’t very modern. I would also prefer if I could see all the subjects, grades and points presented at the same time in a nice-looking way. I do like the simple colour scheme which makes the app easy to look at.

* [“*Leaving Cert Points Calculator*”](https://play.google.com/store/apps/details?id=ie.psdcon.paul.leavingcertcalculator) by “*Paul Connolly*”
    * This app also performs all the features I would like to have, it even displays all the data at the same time. However, again, I think the UI isn’t very nice; It is very plain-looking and the lack of contrast doesn’t add emphasis on the important elements. Again, I like the simple colour scheme, and I wouldn’t mind using this app.

## Product Vision

This app will be made for Irish Leaving Certificate students who are looking for an easier, and more modern way of keeping track of desired CAO points. The CAO point calculator is a productivity tool that will be able to save and record a student’s desired CAO points and grades on their phone unlike the currently existing apps and websites which don’t remember any of your details. Our product is a modern, efficient, and easy-to-use alternative to the other apps on the market.

## Features

### What are features?

App features are the functions and capabilities of an app. They are the reasons why users download and use an app.

I have decided on four main features:

1. Save & Load
    * There will be a Save/Load button at the bottom of the main screen that lets you save and load sets of subjects and grades.
    * It will let you set the name for a new set, and rename other sets.
    * It will store these in the phone's storage in easy to access files so the user can copy them over to other devices.

2. Dark and Light themes
    * The app will have an option to switch between dark and light mode in the settings.
    * This option will change the colour scheme of the app.
    * It will let you customize the look of the app.
    * It will make the app look nicer and more modern.

3. Subject and Grade input
    * You will be presented with a list of default/typical subjects at the start.
    * You will be able to easily change the subject and the grade you are planning to get.
    * There will be options for all subject and all levels including ordinary and higher level.
    * The subject and grade will be shown beside each other, and sets of these will be displayed in an aesthetically pleasing, and easy to read list.
    * You will be able to add and remove subjects to suit your needs.

4. Point calculation
    * There will be a number beside the subject and grade that shows how many CAO points the aforementioned combination will achieve.
    * There will be a circular loading bar around the points that visually shows how good the amount of points is.
    * This loading bar will be animated and smoothly transition to different lengths when the points change.
    * The total points from all the grades combined will be shown at the bottom of the main screen to easily display what points you will get from the set.
    * There calculator will factor in and display bonus points e.g. for higher level maths.

I have decided on these features because I think they are the most essential elements that the app must have. The main reason for the existence of the app is to help calculate and keep track of CAO points, so calculation and storage of CAO points must be the two main features. I decided on the two themes as a main feature because there are already some competitors in the field, however they aren't very modern; these themes will make the app stand out and appeal to the new generation of Leaving Certificate students.

## Prototype

### What is a Prototype?

A prototype is an early model of what the final product will be like. It usually has some of the main features and lets you experience what the usage experience of the app will mostly be.

### Sketches of Prototype

![](/project-media/cao-calculator/sketch.png)

### Tool used to create Prototype

I decided to use Figma to create my prototype. I believe Figma is a good choice for designing an app because it is easy to use and has a variety of features that make designing an app easy. Figma also has a community of designers who can offer feedback and support. It is also fully free, and you have access to all the features on the website.

I mainly chose it because I have worked in it many times, and find it is a very efficient tool.

### Figma prototype

<FigmaFrame src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FVd90Qx4URSvcwz3UpCjjFs%2FOverall-score%3Fnode-id%3D0%253A1" />

## Technology Research

If I was making this app, I would use [Expo](https://expo.dev/) and [React Native Paper](https://callstack.github.io/react-native-paper/). Expo is tool that allows you to easily create apps for both iOS and Android; It lets you write the app once, and then creates and publishes the actual app files to the respective app stores on both platforms. It uses the JavaScript programming language, which is easy to learn and I think is quite intuitive.

React Native Paper is a *component library*, put simply it provides pre-written pieces of code that can be used to add elements such as buttons to your app. I would use this specific component library because it is popular among apps, and I think it looks nice.

*Many* other tools and programming languages could also be used to make this app. The most popular choices include Android Studio (an IDE used to make Android apps), Flutter (UI SDK used to create cross-platform apps) and others.

## Conclusion

I believe this would be a very useful app for Leaving Certificate students. I think this is an app that takes a simple idea, and develops it into a useful, easy-to-use, and intuitive product.

When I was attending secondary school, I always wanted an app like this. I would usually keep my CAO points stored on a notepad app on my phone or on a piece of paper; This was annoying because I would have to remake it often when I changed my mind about subject or scores.

I think that with the features and prototypes provided in this document, realising the ideas and implementing them in a real product would be very manageable. Researching this app idea was fun, and I definitely learned a lot about planning and determining the feasibility of an idea.

> *Like I said before, I actually already made the app. Check it out [here](https://leavingcertcao.xyz/).*