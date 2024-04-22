# GeoQuiz | a Geography Quiz for all ages and backgrounds

![GeoQuiz displayed on various devices](docs/documentation/am-i-responsive.png)

[Visit my PP2 website here](https://hpesciotti.github.io/GeoQuiz/index.html)


## CONTENTS  

1. [Introduction](#1-introduction)

2. [UX Design](#2-ux-design)

    2.1. [Strategy](#21-strategy)

    2.2. [User Stories](#22-user-stories)
    
    2.3. [Wireframes](#23-wireframes)

    2.4. [Design](#24-design)

3. [Features](#3-features)

    3.1. [Existing Features](#31-existing-features)

    3.2. [Future Features](#32-future-features)

4. [Technologies Used](#4-technologies-used)

    4.1. [Languages Used](#41-languages-used)

    4.2. [Frameworks, Libraries & Programs Used](#42---frameworks-libraries-technologies--programs-used)

5. [Testing](#5-testing)

    5.1. [Further Testing](#51-futher-testing)

    5.2. [Bugs and Fixes](#52-bugs--fixes)

    5.3. [Unsolved Bugs](#53-unsolved-bugs)

6. [Deploymente](#6-deployment)

    6.1. [Forking the Github Repository](#61-forking-the-github-repository)

    6.2. [Github Pages](#62-github-pages)

    6.3. [Making a Local Clone](#63-making-a-local-clone)

7. [Credits](#7-credits)


## **1. Introduction**

This website/application is a quiz designed to test your geographical knowledge through a colourful and fun interface. The quiz, PP2 project of diploma in Full Stack Software Development by Code Institute, was designed to demonstrate proficiency with the front-end languages HTML, CSS, and JavaScript, especially the latter. 

The choice of a geography-themed quiz is deeply personal, stemming from my academic background in Geography (bachelor's degree). Before my journey to Ireland, I spent 12 years as an environmental analyst. Thus, this project is a unique fusion of my academic knowledge and newfound coding skills.

In principle, the quiz is comprised of questions that test the general notions of this area of knowledge without involving the memorization of capitals, flag colours or the names of countries. Part of the questions were designed by me, seeking to address 

The application features a dynamic leaderboard section where users can record their best performance in the game. The quiz randomly selects ten questions from a database, each with four randomized answer options, ensuring a unique experience with every play. The leaderboard serves as a motivator, encouraging users to improve their scores and compete with others.

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

## **2. UX Design**

### **2.1. Strategy**

In the app's planning stage, I visited some websites with quizzes that dealt with general geography issues, such as country capitals, landmarks, etc. However, I didn't find any of these quick quiz sites with more academically accurate content. So, I opted for a database of questions from the Brazilian vestibular exam (corresponding to the Irish leaving cert exam). I adapted most of the questions and inserted some others that would better portray Ireland's natural and geopolitical landscape. 

During my research, I came across websites that listed questions on a single page, which didn't align with the projects discussed in our weekly scrums. In one of these meetings, I shared my choice for PP2 with our cohort facilitator. She introduced us to the Geography for Kids project, a collaborative effort led by Deeksa Varma, which served as a valuable reference for our project. 

As a personal note, while analyzing the Geography for Kids project code, I noticed it was complex compared to the other app samples. Through a search on GitHub, I confirm that a person with a good background in the field developed it, which contrasts with my background of almost no coding experience before enrolling in Code Institute's course. The complexity ultimately led me to intensify my immersion in JavaScript and improve my skills.

The app is aimed at people of all ages and backgrounds, but it's best suited to people who have already completed elementary school. It also aims to create a ludic playful and colourful environment that introduces the user to the main themes of geography, such as Geopolitics, Climatology, Landforms, and Biogeography. 

Responsibility is essential for the app as it allows users to access the quiz from various devices. Finally, the high score/leaderboard system gives greater engagement by generating competition between friends and potential users. 

#### **Sites that I took inspriration for my project**

- [Geography for Kids](https://deeksha-varma.github.io/portfolio_project_2/)

- [Exercícios de Geografia(Geography Questions)](https://exercicios.brasilescola.uol.com.br/exercicios-geografia)

- [GreatStack's video tutorial](https://www.youtube.com/watch?v=PBcqGxrr9g8)

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

### **2.2. User Stories**

#### **First Time Visitor Goals**
- I want to navigate through the pages easily and have a good user interface.
- I want to feel challenged and amazed by the quiz.
- I want to get my score in an easy-to-read format.

#### **Returning Visitor Goals**
- I want to check the leaderboard.
- I want to get different questions (randomized shuffle of the data bank).

#### **Frequent User Goals**
- I want to set a highscore, compete for number 1 in the leaderboard.
- I want to get to answer different questions.
- I want to see new features.

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

### **2.3. Wireframes**

I generated the preliminary website wireframes utilizing Balsamiq. I had yet to finalize the colour scheme at this stage of the project's conception. Therefore, I focused solely on establishing the foundational elements of features and application flow.

In this sense, I have identified three essential stages for the app to meet the user stories requirements, which I have appointed as: 
- intro - "landing page" with the instructions and a form section to get the player name.
- game - the section of the game in which the questions and answer options would be displayed.
- score - showing how many questions were answered correctly and accompanied by a message that would reflect the score and an option to pay for the game again.

#### **Desktop/Laptop/Tablet Version**

-   [Intro](docs/documentation/wireframe-balsamic-geoquiz-intro-page-larger-screens.jpg)

-   [Game](docs/documentation/wireframe-balsamic-geoquiz-game-page-larger-screens.jpg)

-   [Score](docs/documentation/wireframe-balsamic-geoquiz-score-page-larger-screens.jpg)

#### **Mobile Version**

-   [Intro](docs/documentation/wireframe-balsamic-geoquiz-intro-page-mobile.jpg)

-   [Game](docs/documentation/wireframe-balsamic-geoquiz-game-page-mobile.jpg)

-   [Score](docs/documentation/wireframe-balsamic-geoquiz-score-page-mobile.jpg)

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

### **2.4. Design**

#### **Imagery**



[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

#### **Colour Scheme**

The colour scheme is inspired by tones of violet, indigo, and spotlights, as seen in the selected pictures. This theme is currently popular in software development, and it can be seen in the Microsoft 365 icon, Microsoft Clipchamp and [ESRI Ireland's website](https://www.esri-ireland.ie/en-ie/homehttps://www.esri-ireland.ie/en-ie/home), which heavily weighted on the chosen appearance of my website's nav bar. The colour scheme also matches the background hues of the [hero-image](docs/documentation/hero-image.png).

![Colour Scheme](docs/documentation/colour-scheme.png)

The selection of text and background took into consideration the contrast ratio of at least Level AA. [EightShape contrast grid](docs/documentation/contrast-grid.png) is present in the documentation. 

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

#### **Typography**

I employed three different fonts for the website design. The logo features the Bauhaus 93 font, which is not included in the style.css file as it was utilized in another software to create the logo image. The other two fonts, Inter and Rubik, are sourced from Google Fonts. Rubik font is applied to the navigation bar, while Inter is used in the rest of the website's sections, such as textual elements.

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

## **3. Features**

### **3.1. Existing Features**

#### **Index/Home Page**

##### **Navigation Bar**

![Nav Bar](docs/documentation/nav-bar-desktop-tablet.png)

- The navigation bar features links that allow users to scroll smoothly to any main page sections.

- The mobile version substitutes the links for a toggle menu indicated by stacked bars. The link area is available through a dropdown menu. 
I accomplished this design based on the Love Running Project.

![Nav Bar](docs/documentation/nav-bar-mobile.png)

![Toggle Menu](docs/documentation/drop-down-menu-mobile.png)

- A hover effect [transform scale](https://www.w3schools.com/cssref/css3_pr_transform.php) was added on the link anchors for the desktop version. This feature was suggested by a friend, Bruno Dias. I was using a transform font-size effect in early iterations.

![Hover transform](docs/documentation/hover-transform.png)

- The navigation bar's background has a degradé effect that changes from a three-colour gradient on the desktop/tablet version to a two-colour gradient on the mobile version. This choice was simply made by aesthetics. I drew inspiration from a degradé background from [ESRI Ireland's website](https://www.esri-ireland.ie/en-ie/homehttps://www.esri-ireland.ie/en-ie/home). The background css querry was obtainded through [CSS Gradient's website](https://cssgradient.io/).

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

##### **Hero Section**

![Hero Section](docs/documentation/hero-image.png)

- The Hero Section of my website occupies the full width of the screen and is located at the top of the index page. I intended to capture the visitor's attention with a captivating picture that would also match the website's colour scheme. 

- The Hero Section is responsive and maintains the shirtless man dancing at the centre of the page in all size versions of the website. 

![Hero Section Mobile and Tablet](docs/documentation/hero-image-mobile-tablet.png)

- This feature wasn't planned when the wireframes were created, but the spacing and lack of an eye-catching element drove me to add the current Hero Section. I took inspiration for this feature from the Love Running Project.

- There's also a "call to action" box that quickly informs the user of the website's main goal. This element was a source of a couple of errors due to its responsivity. The box was bleeding the Hero Section on smaller screens, which prompted me to change the hero image to a relative measure. In this case, I've used "em" unit for the length of the hero image.

[Back to top]((https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

#### **Error 404 Page**

This is a conventional 404 error page, with text explaining that a link is missing. I designed the page with a button to return to the index page; in fact, the button is just an anchor element. This customized page replaces the standard GitHub page.

![Error 404](docs/documentation/error-404.png)

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

### **3.2. Future Features**

- I intend to add a fully functional form that is able to store messages on a server.

- To employ numbered pages on the gallery-themed pages to improve performance.

- A functionality that could enlarge the selected picture on the gallery to full page.

- An option to acquire/download the website photos.

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

## **4. Technologies Used**

### **4.1. Languages Used**

- [HTML5](https://en.wikipedia.org/wiki/HTML5)

- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### **4.2 - Frameworks, Libraries, Technologies & Programs Used**  

- [Gitpod](https://www.gitpod.io): used form coding

- [GitHub](https://github.com/): to save and store all files for this website  

- [Git](https://git-scm.com/): used for version control

- [Google Fonts](https://fonts.google.com/): fonts were imported from here 

- [Font Awesome](https://fontawesome.com/): icons and their associated kit were downloaded from here  

- [Balsamiq](https://balsamiq.com): used to create wireframes

- [Adobe Firefly AI Image Generator](https://firefly.adobe.com/): used to create application background image

- [Favicon.io](https://favicon.io/): for ice cream favicon  

- [Tiny PNG](https://tinypng.com/): to compress images

- [ChatGPT](https://chat.openai.com/):  for improving and making text content more engaging

- [Grammarly](https://app.grammarly.com): for spelling or grammatical inaccuracies in the text

- [Google Dev Tools](https://developer.chrome.com/docs/devtools): to debug and for testing responsiveness 

- [Google Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk): for auditing the performance of the website

- [W3C Validator](https://validator.w3.org/#validate_by_input): for validating HTML code 

- [W3C Validator](https://jigsaw.w3.org/css-validator/#validate_by_input): for validating CSS code 

- [JSHint Validator](https://jshint.com/): for validating JavaScript code

- [Am I responsive](https://ui.dev/amiresponsive): check responsivity of websites

- [EightShapes Contrast Gradient](https://contrast-grid.eightshapes.com/): check WCAG 2.0 minimum contrast

- [MS Paint](https://www.microsoft.com/en-us/windows/paint): for editing the captured screenshots

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

## **5. Testing**

- Daily testing during the code stage was conducted through Google Chrome's DevTools. 

- Moreover, futher testing was executed through real-world devices, laptopts (Windows) and Apple Mobiles (Iphone 12 mini, Iphone X, Iphone 14). 
The browsers used were:  
    - Chrome (only Desktop)
    - Firefox  
    - Edge (only Desktop)
    - Safari (only Mobile)

### **5.1. Futher Testing**

#### **HTML Validation using W3C Validation** 

All of the pages are valid, showing no errors or warnings, except for the contact page.
The error was diagnosed as bad value URL attribute method on element form.
I opted to change the post method redirecting to Code Institute dump page to a URL method, as my mentor and cohort facilitator indicated.

![W3 validator Contact](docs/documentation/w3-checker-contact.png)

##### **W3C Validation Chart**
|	Page	|	Result	|	Screenshot	|
|	 :----	|	  :----	|	  :------------:|
|	[Index](https://hpesciotti.github.io/FGiubilei/index.html)	|	No erros/warnings	|	[W3 validator Index](docs/documentation/w3-checker-index.png)	|
|	[Contact](https://hpesciotti.github.io/FGiubilei/contact.html)	|	Error bad URL	|	[W3 validator Contact](docs/documentation/w3-checker-contact.png)	|
|	[About](https://hpesciotti.github.io/FGiubilei/about.html)	|	No erros/warnings	|	[W3 validator About](docs/documentation/w3-checker-about.png)	|
|	[Thank You](https://hpesciotti.github.io/FGiubilei/thank-you.html)	|	No erros/warnings	|	[W3 validator Thank-You](docs/documentation/w3-checker-thank-you.png)	|
|	[404](https://hpesciotti.github.io/FGiubilei/404.html)	|	No erros/warnings	|	[W3 validator 404](docs/documentation/w3-checker-404.png)	|
|	[Gallery](https://hpesciotti.github.io/FGiubilei/gallery.html)	|	No erros/warnings	|	[W3 validator Gallery](docs/documentation/w3-checker-gallery.png)	|
|	[Gallery-Family Moments](https://hpesciotti.github.io/FGiubilei/gallery-family.html)	|	No erros/warnings	|	[W3 validator Gallery-Family Moments](docs/documentation/w3-checker-gallery-family.png)	|
|	[Gallery-Concerts](https://hpesciotti.github.io/FGiubilei/gallery-concerts.html)	|	No erros/warnings	|	[W3 validator Gallery-Concerts](docs/documentation/w3-checker-gallery-concerts.png)	|
|	[Gallery-Solo Photoshoots](https://hpesciotti.github.io/FGiubilei/gallery-solo.html)	|	No erros/warnings	|	[W3 validator Gallery-Solo Photoshoots](docs/documentation/w3-checker-gallery-solo.png)	|
|	[Gallery-Urban Pictures](https://hpesciotti.github.io/FGiubilei/gallery-urban.html)	|	No erros/warnings	|	[W3 validator Gallery-Urban Pictures](docs/documentation/w3-checker-gallery-urban.png)	|
|	[Gallery-Videos](https://hpesciotti.github.io/FGiubilei/gallery-video.html )	|	No erros/warnings	|	[W3 validator Gallery-Videos](docs/documentation/w3-checker-gallery-video.png)	|
|	[Gallery-Weddings](https://hpesciotti.github.io/FGiubilei/gallery-weddings.html)	|	No erros/warnings	|	[W3 validator Gallery-Weddings](docs/documentation/w3-checker-gallery-weddings.png)	|
|	[Gallery-Institutional Events](https://hpesciotti.github.io/FGiubilei/gallery-i-events.html)	|	No erros/warnings	|	[W3 validator Gallery-Institutional Events](docs/documentation/w3-checker-gallery-i-events.png)	|

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

#### **CSS Validation using W3C Validation** 

![W3 Css.Style](docs/documentation/w3-css.png)

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

#### **Performance Lighthouse**

I have received relatively low-performance ratings from Google Chrome Lighthouse-DevTools. Although I thoroughly compact the images and convert them to WebP, the scores on some pages, notably the gallery pictures, are sometimes lower than 80. I asked my mentor([mine](docs/documentation/lighthouse-gallery-familly-desktop.png), [his](docs/documentation/lighthouse-mentor.png)) and a friend([mine](docs/documentation/lighthouse-index-desktop.png), [his](docs/documentation/lighthouse-friend.png)) to check the performance of some random pages, and they got good results. My internet connection was unstable during the tests. 

##### **Lighthouse performance Chart - Desktop**
Page	|	Score	|	Screenshots
 :----	|	  :----	|	  :------------
[Index](https://hpesciotti.github.io/FGiubilei/index.html)	|	79	|	[W3 validator Index](docs/documentation/lighthouse-index-desktop.png)
[Contact](https://hpesciotti.github.io/FGiubilei/contact.html)	|	95	|	[W3 validator Contact](docs/documentation/w3-checker-contact-desktop.png)
[About](https://hpesciotti.github.io/FGiubilei/about.html)	|	88	|	[W3 validator About](docs/documentation/w3-checker-about-desktop.png)
[Thank You](https://hpesciotti.github.io/FGiubilei/thank-you.html)	|	91	|	[W3 validator Thank-You](docs/documentation/w3-checker-thank-you-desktop.png)
[404](https://hpesciotti.github.io/FGiubilei/404.html)	|	92	|	[W3 validator 404](docs/documentation/w3-checker-404-desktop.png)
[Gallery](https://hpesciotti.github.io/FGiubilei/gallery.html)	|	79	|	[W3 validator Gallery](docs/documentation/w3-checker-gallery-desktop.png)
[Gallery-Family Moments](https://hpesciotti.github.io/FGiubilei/gallery-family.html)	|	86	|	[W3 validator Gallery-Family Moments](docs/documentation/w3-checker-gallery-family-desktop.png)
[Gallery-Concerts](https://hpesciotti.github.io/FGiubilei/gallery-concerts.html)	|	83	|	[W3 validator Gallery-Concerts](docs/documentation/w3-checker-gallery-concerts-desktop.png)
[Gallery-Solo Photoshoots](https://hpesciotti.github.io/FGiubilei/gallery-solo.html)	|	82	|	[W3 validator Gallery-Solo Photoshoots](docs/documentation/w3-checker-gallery-solo-desktop.png)
[Gallery-Urban Pictures](https://hpesciotti.github.io/FGiubilei/gallery-urban.html)	|	77	|	[W3 validator Gallery-Urban Pictures](docs/documentation/w3-checker-gallery-urban-desktop.png)
[Gallery-Videos](https://hpesciotti.github.io/FGiubilei/gallery-video.html )	|	87	|	[W3 validator Gallery-Videos](docs/documentation/w3-checker-gallery-video-desktop.png)
[Gallery-Weddings](https://hpesciotti.github.io/FGiubilei/gallery-weddings.html)	|	79	|	[W3 validator Gallery-Weddings](docs/documentation/w3-checker-gallery-weddings-desktop.png)
[Gallery-Institutional Events](https://hpesciotti.github.io/FGiubilei/gallery-i-events.html)	|	79	|	[W3 validator Gallery-Institutional Events](docs/documentation/w3-checker-gallery-i-events-desktop.png)

##### **Lighthouse performance Chart - Mobile**
|	Page	|	Score	|	Screenshots
|	 :----	|	  :----	|	  :------------
|	[Index](https://hpesciotti.github.io/FGiubilei/index.html)	|	78	|	[W3 validator Index](docs/documentation/lighthouse-index-mobile.png)
|	[Contact](https://hpesciotti.github.io/FGiubilei/contact.html)	|	94	|	[W3 validator Contact](docs/documentation/w3-checker-contact-mobile.png)
|	[About](https://hpesciotti.github.io/FGiubilei/about.html)	|	89	|	[W3 validator About](docs/documentation/w3-checker-about-mobile.png)
|	[Thank You](https://hpesciotti.github.io/FGiubilei/thank-you.html)	|	96	|	[W3 validator Thank-You](docs/documentation/w3-checker-thank-you-mobile.png)
|	[404](https://hpesciotti.github.io/FGiubilei/404.html)	|	92	|	[W3 validator 404](docs/documentation/w3-checker-404-mobile.png)
|	[Gallery](https://hpesciotti.github.io/FGiubilei/gallery.html)	|	79	|	[W3 validator Gallery](docs/documentation/w3-checker-gallery-mobile.png)
|	[Gallery-Family Moments](https://hpesciotti.github.io/FGiubilei/gallery-family.html)	|	84	|	[W3 validator Gallery-Family Moments](docs/documentation/w3-checker-gallery-family-mobile.png)
|	[Gallery-Concerts](https://hpesciotti.github.io/FGiubilei/gallery-concerts.html)	|	86	|	[W3 validator Gallery-Concerts](docs/documentation/w3-checker-gallery-concerts-mobile.png)
|	[Gallery-Solo Photoshoots](https://hpesciotti.github.io/FGiubilei/gallery-solo.html)	|	82	|	[W3 validator Gallery-Solo Photoshoots](docs/documentation/w3-checker-gallery-solo-mobile.png)
|	[Gallery-Urban Pictures](https://hpesciotti.github.io/FGiubilei/gallery-urban.html)	|	76	|	[W3 validator Gallery-Urban Pictures](docs/documentation/w3-checker-gallery-urban-mobile.png)
|	[Gallery-Videos](https://hpesciotti.github.io/FGiubilei/gallery-video.html )	|	88	|	[W3 validator Gallery-Videos](docs/documentation/w3-checker-gallery-video-mobile.png)
|	[Gallery-Weddings](https://hpesciotti.github.io/FGiubilei/gallery-weddings.html)	|	81	|	[W3 validator Gallery-Weddings](docs/documentation/w3-checker-gallery-weddings-mobile.png)
|	[Gallery-Institutional Events](https://hpesciotti.github.io/FGiubilei/gallery-i-events.html)	|	77	|	[W3 validator Gallery-Institutional Events](docs/documentation/w3-checker-gallery-i-events-mobile.png)

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

##### **JSHint Validator**


### **5.2. Bugs & Fixes** 

##### **Bugs & Fixes - Chart**
|	Bug	|	Sollution	|	Screenshots
|	 :----	|	  :----	|	  :------------
|	Font Awesome Icons wasn't being overridden by  footer style it keeps the open link appearance	|	Add to *wildcard operator: text-decoration: none; list-style: none; color: inherit;	|	[Fix](docs/documentation/error-1-font-awesome.png)
|	"Call to Action" pink box is not aligned to the hero section in mobile with large screens	|	Add relative units in mobile version (55em)	|	[Bug](docs/documentation/error-2-floating-box.png) / [Fix](docs/documentation/error-2-solution.png)
|	Contact Form was not aligned to left corner of the page in iPad Air	|	Add a media querry for 800px	|	[Bug](docs/documentation/error-3-issue-left-form.png) / [Fix](docs/documentation/error-3-solution-left-form.png)
|	Performance Issues due to high resolution photos in jpg format	|	Resize and compact images and transform JPG to WEBP by CloudConvert. <br>The image had been compacted once via Tiny Png, but it was needed further compression.	|	[Bug](docs/documentation/error-4-heavy-images)

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

### **5.3. Unsolved Bugs** 

- There is a thin white line at the bottom of the desktop version. This bug is due to the transfrom hover font-size in the social media icons. The transform scale effect doesn't work on Font-Awesome icons, so I opt to maintain the hover effect, regardless of the white bottom line.

![thin white line](error-persistent-1-footer-white-line)

- Another error, already mentioned before, was diagnosed by the W3C validator as a bad value URL attribute method on the element form on the contact page. 

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

## **6. Deployment**

The website was developed using Gitpod code editor, committed to Git as a local repository, and then pushed to GitHub for storage.

### **6.1. GitHub Pages**

The project was deployed to GitHub Pages using the following steps:

I. Log in to GitHub.
II. Navigate to the main page of GitHub Repository that will be deployed.
III. At the top of the Repository, find the "Settings" button on the menu and click on it.
IV. Inside the settings, on the left side of the page, there’s a list of tab menu. Find the “Pages” tab, and click on it.
V. Under "Source", click on the dropdown item called "None", select "Master", and then click on the “Save” button.
VI. The page will automatically refresh.
VII. Now you should see a notification message that provides the now published site link: “Your site is ready to be published at [https://hpesciotti.github.io/FGiubilei/](https://hpesciotti.github.io/FGiubilei/)”.

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

### **6.2. Forking the GitHub Repository**

By forking the GitHub repository you can make a copy of the original repository on your GitHub account. You can view and/or make changes to this copy, without affecting the original repository, by using the following steps:

I. Log in to GitHub.
II. Navigate to the main page of the GitHub Repository that you want to fork.
III. At the top right of the Repository, just below your profile picture, find the "Fork" button.
IV. You should now have a copy of the original repository in your GitHub account.
V. Changes made to the forked repository can be merged with the original repository via a pull request.

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

### **6.3. Making a Local Clone**

By cloning a GitHub Repository, you can create a local copy on your computer of the remote repository. This allows you to make all of your edits locally, rather than directly in the source files of the origin repository, by using the following steps:

I. Log in to GitHub
II. Navigate to the main page of the GitHub Repository that you want to clone.
III. Above the list of files, click on the dropdown item called "Code".
IV. To clone the repository using HTTPS, copy the link under "HTTPS".
V. Open Git Bash.
VI. Change the current working directory to the location where you want the cloned directory to be made.
VII. Type `git clone`, and then paste the URL you copied in Step 4.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

VIII. Finally, press Enter. Your local clone has now been created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Changes made on the local machine (cloned repository) can be pushed to the upstream repository directly if you have a write access for the repository. Otherwise, the changes made in the cloned repository are first pushed to the forked repository, and then a pull request is created.

[Click Here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) for a more comprehensive guide on how to complete the above process.

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

## **7. Credits**

### **7.1. Content**

- Code Institute - Love Maths projects: add event listener with the argument of loaded DOM as trigger to fecth questions.

- [W3Schools](https://www.w3schools.com/howto/howto_js_progressbar.asp): for the tutorial on progress bars.

- [W3Schools](https://www.w3schools.com/js/js_dates.asp): for date objects, used on the stop watch variable in the final score.

- [Stack Overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array): helped me how to shuffle an array.

- [Stack Overflow](https://stackoverflow.com/questions/52763765/push-3-random-names-into-a-new-array): helped me how to shuffle values of objects in an array.

- [GreatStack's video tutorial](https://www.youtube.com/watch?v=PBcqGxrr9g8)help me set the basic structure for assembling the quiz app.

- [Kevin Flanagan](https://github.com/KevinFlanagan7/Masters-quiz): for fetch a json file, used in the question databank.

- [Deeksa Varma](https://github.com/deeksha-varma/portfolio_project_2): same project in nature helped significantly with implementing the leaderboard.

- [Amy Richardson/scoops](https://github.com/amylour/irish_wildlife_matchup): for usarname section.

- [Codehal's video tutorial](https://www.youtube.com/watch?v=Vp8x8-reqZA): help put together the displayQuestion function, and I took some inspiration from him regarding the fonts and css effects.

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)

### **7.2. Media**

- [Adobe Firefly AI Image Generator](https://firefly.adobe.com/): used to create application background image

- [Font Awesome](https://fontawesome.com/): for the icons used in the footer of the application.

- [Favicon](https://favicon.io/): for the favicon used for the application.

### **7.3. Acknowlegements**

- My mentor, [Darío Carrasquel](https://github.com/jeetkunecoder/jeetkunecoder), for his support and constructive feedback.

- My informal mentor and great friend, [Bruno Dias](https://github.com/brunoald/), for his helpful and supportive advice.

- My cohort facilitator, [Amy Richardson](https://github.com/amylour/amylour), for indicating Adobe Firefly AI Image Generator, which essentially helped me set the tone for the application's appearance. 

- My partner, Joana, and my sister, Patrícia, for testing the application.

[Back to top](https://github.com/hpesciotti/GeoQuiz?tab=readme-ov-file#geoquiz--a-geography-quiz-for-all-ages-and-backgrounds)


