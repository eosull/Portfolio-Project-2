# World Cup 2022 Stats

## HTML/CSS/JavaScript Portfolio Project 2

![Am I responsive Screenshot](/assets/readme-images/am-i-responsive-screenshot.png)

## Site Info

This website is designed present information about the 2022 World Cup in Qatar in a clear way and allow a user to interact with data from the competition.

Data analysis in sport has been used historically to help gain insights into performance that allow athletes and coaches to make improvements that affect results. This is also crossing over to the fans, who are presented data during live events and in post-event analysis. The data presented is used by fans as a conversation starter or a debate point, comparing one team or player with another. The goal of this site is to provide some of these talking points and highlight data that enhances the narrative that builds around events like the World Cup.

There are three main stats presented (goals,assists,clean sheets) which are seen as indications of a players effectivness in their position. These are presented in a table which allows comparison between players and to highlight the difference in performances. Alongside this there is an option for the user to generate a commonly used statistic such as goals per game or clean sheet percentage, which gives an indication of the average performance of a player on a game-by-game basis. At the bottom of the site is a flip card which displays the player of the tournament.

## Features

### Existing Features
- Highlights Section
  - This section gives some highlighted statistics from the World Cup. It also contains links that the user can use to navigate to individual sections.

![Highlights Section Screenshot](/assets/readme-images/highlight-section-screenshot.png)

- Table Section
  - There are 3 tables on the site; one for goals, assists and clean sheets.
  - Each table holds data for 6 players; their name, games played at the world cup and amount of goals, assists or clean sheets.
  - There is an expand option on each table that allows the user to interact. This displays the country they play for and when pressed again this is hidden.

![Goals Table Screenshot](/assets/readme-images/goal-table-screenshot.png)

![Goals Table Expanded Screenshot](/assets/readme-images/goal-table-expanded-screenshot.png)

- Calculate Section
  - There are also 3 calculate sections on the site, alongside the table whose data they work with.
  - One section calculates goals per game, one calculates assists per game, and the last calculates clean sheet percentage.
  - When the user presses one of the buttons that contains a players name, a statistic and statement corresponding to that player is formulated and returned to them.

![Assists Calculate Screenshot](/assets/readme-images/assist-calculate-screenshot.png)

![Assists Calculate Pressed Screenshot](/assets/readme-images/assist-calculate-pressed-screenshot.png)

- Award Section
  - At the bottom of the page there is an award card with a button. It invites the user to press a button to reveal who the player of the tournament was.

![Award Front Screenshot](/assets/readme-images/award-card-front-screenshot.png)

  - Once clicked, this award card flips over and presents an image and some information on the player of the tournament.
  - If hovered over, this image also flips to display some further statistics.

![Award Back Screenshot](/assets/readme-images/award-card-back-screenshot.png)

![Award Back Flip Screenshot](/assets/readme-images/award-card-back-flip-screenshot.png)

- Home & Refresh Icon
  - In the top left corner of the screen there are 2 icons; a home icon and a refresh icon.
  - The home icon can be used to return to the top of the page after scrolling down.
  - The refresh icon reloads the page and will clear any statistics that have been generated.
  - This icon recolates to the bottom left for smaller screens.

![Home and Refresh Screenshot](/assets/readme-images/home-refresh-screenshot.png)

### Features for Future Implementation
- Data sources
  - One idea for future implementation would be to source data from external sources, such as an API or an .xml file.
  - On this site all data is stored in tables on the index.html page which is not an efficient solution for larger data samples.

## Testing

### Goal Testing

### Functionality Testing
- Chrome Developer tools and Mozilla Firefox Web Developer Tools were used throughout the development of the site to test functionality, diagnose and solve issues with responsivness and assist with styling work. The console on developer tools was used to test and debug Javascript code during development of the site.
- The site was tested on Chrome, Safari & Firefox using a Macbook pro and Safari & Google Chrome using an Iphone 8.

- Lighthouse Testing
  - The lighthouse tool was used in Chrome to test and pointed to 3 improvements that could be made; contrast of text in headings and list boxes, descriptive text on home/refresh link and meta info for increased SEO performance

![Lighthouse Test Screenshot](/assets/readme-images/lighthouse-test-screenshot.png)

- WAVE Accesibility Testing
  - The [WAVE](https://wave.webaim.org/report#/https://eosull.github.io/Portfolio-Project-2/) tool was used to test accessibility on the site and this pointed to improvements that could be made with contrast of heading text and descriptive text for home/refresh icon

![WAVE Accesibility Test Screenshot](/assets/readme-images/wave-test-screenshot.png)

### Issues faced during development

### Validator Testing
- HTML
  - No errors were detected when passing site through the [W3C Markup Validation Service](https://validator.w3.org/nu/?doc=https%3A%2F%2Feosull.github.io%2FPortfolio-Project-2%2F)
- CSS
  - No errors were detected when passing site through the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feosull.github.io%2FPortfolio-Project-2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Javascript
  - No errors were detected when JS code was validated using [JSHint](https://jshint.com/)

### Unfixed Bugs

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the Github repository, navigate to the Settings tab
  - From the source section drop-down menu, select the master branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment
- A live link for the site can be found here: [INSERT LIVE LINK]

## Credits
- All of the statistics for this site were sourced from [fbref](https://fbref.com/en/comps/1/World-Cup-Stats) 
- The image used on this site was sourced from [People Magazine](https://people.com/thmb/E2kiLjE9bmFgnx9TiMYhq-OVOuQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x438:1001x440):format(webp)/lionel-messi-most-liked-instagram-picute-122222-2e46f8ce2f8444948fce28f2c84c72f2.jpg)
- The football favicon was sourced from [favicon.io](https://favicon.io/emoji-favicons/soccer-ball)
- [coolors.co](https://coolors.co/00072d-e08d79-c4dacf-0e6ba8-65524d) was used to help create a complimentary color palette
- Sites such as [W3Schools](www.w3shcools.com),[Stack Overflow](https://stackoverflow.com/) and [mdn web docs](https://developer.mozilla.org/en-US/docs/Web) were of great use during development especially when troubleshooting or trying to resolve issues
- Specific tutorials and resources were used for a number of features:
  - Flexbox:
    - [CSS tricks guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    - [Codepen Flexbox grids guide](https://codepen.io/mogpt/pen/ebXdzg)
  - Flipcards:
    - [W3Schools flipcard how to](https://www.w3schools.com/howto/howto_css_flip_card.asp )
    - [Jefferson Cuartas JS flipcard tutorial](https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c)
    - [Implementation of JS flipcards Youtube](https://www.youtube.com/watch?v=OV8MVmtgmoY&ab_channel=ArjunKhara)
- Code Institute materials were used to assist writing README file, such as the [README template](https://github.com/Code-Institute-Solutions/readme-template) and the [Markdown Cheatsheet](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- The Code Institute [Gitpod Full Template](https://github.com/Code-Institute-Org/gitpod-full-template) was used as a template to begin building this site
- Site responsivness visualised using [Am I Responsive?](https://ui.dev/amiresponsive)
    
