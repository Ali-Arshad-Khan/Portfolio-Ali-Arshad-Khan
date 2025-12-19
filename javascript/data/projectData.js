const reactIcon = `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React"></img>`
const nodeIcon = `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js">`
const expressIcon = `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express">`
const mongodbIcon = `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB">`
const tailwindIcon = `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS">`
const javascriptIcon = `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript">`
const cssIcon = `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3">`
const htmlIcon = `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5">`
const firebaseIcon = `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg" alt="Firebase">`
const netlifyIcon = `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg" alt="Netlify">`
const rendericon = `<img class="render-icon" src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/render.svg" alt="Render">`
const npmIcon = `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" alt="npm">`
const reactrouterIcon = `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" alt="React Router">`
const jasmineIcon = `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg" alt="Jasmine">`
const pythonIcon = `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python">`
const flaskIcon = `<img class="invert-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask">`
const githubIcon = `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg`
const huggingfaceIcon = `<img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/huggingface.svg" alt="Hugging Face">`

export const projects=[{
    img : "./javascript/data/data-images/spendwise.png",
    heading : "Hosted Project",
    title : "Spendwise",
    description : "Spendwise is a modern, smart, and intuitive full-stack expense tracker that helps users manage finances effortlessly. With AI-powered insights, a clean UI, interactive analytics, charts, and export features — Spendwise makes personal finance simple and stress-free.",
    teckStack : {
        span1:reactIcon,
        span2:nodeIcon,
        span3:expressIcon,
        span4:mongodbIcon,
        span5:tailwindIcon,
        span6:javascriptIcon,
    },
    cardLinks:{
        github:"https://github.com/Ali-Arshad-Khan/spendwise",
        external:"https://spendwise-mqxp.onrender.com/",
    },
},
    {
    img : "./javascript/data/data-images/vanlife.png",
    heading : "Hosted Project",
    title : "Van Life",
    description : "A responsive van rental app built with React, React Router, Vite, Firebase (for data), and MirageJS (for demo auth). Explore vans, filter listings, and access a host dashboard with seamless routing.",
    teckStack : {
        span1:reactIcon,
        span2:javascriptIcon,
        span3:cssIcon,
        span4:firebaseIcon,
        span5:netlifyIcon,
        span6:reactrouterIcon,
    },
    cardLinks:{
        github:"https://github.com/Ali-Arshad-Khan/van-life",
        external:"https://tryvanlife.netlify.app/",
    },
},{
    img : "./javascript/data/data-images/reaxify.png",
    heading : "Hosted Project",
    title : "Reaxify Component Library",
    description : "Reaxify is a customizable, lightweight React component library featuring reusable UI components like Badge, Banner, Testimonial, Tooltip, ToastPopup, Card, and Loading Screen for building modern interfaces quickly.",
    teckStack : {
        span1:reactIcon,
        span2:javascriptIcon,
        span3:cssIcon,
        span4:npmIcon,
        span5:netlifyIcon,
        span6:"",
    },
    cardLinks:{
        github:"https://github.com/Ali-Arshad-Khan/reaxify-component-library",
        external:"https://reaxify-component-library.netlify.app/",
    },
},{
    img : "./javascript/data/data-images/assembly.png",
    heading : "Hosted Project",
    title : "Assembly Endgame",
    description : "Assembly Endgame is a responsive word guessing game built with React, HTML, CSS, and JavaScript, showcasing state management, conditional rendering, modern UI, and interactive gameplay with 8 guess attempts.",
    teckStack : {
        span1:reactIcon,
        span2:cssIcon,
        span3:javascriptIcon,
        span4:netlifyIcon,
        span5:"",
        span6:"",
    },
    cardLinks:{
        github:"https://github.com/Ali-Arshad-Khan/Assembly-Endgame",
        external:"https://assembly-endgame-project.netlify.app/",
    },
},
{
    img : "./javascript/data/data-images/amazone.png",
    heading : "Hosted Project",
    title : "Amazon Clone",
    description : "A responsive e-commerce website with product search, listings, shopping cart, and a simulated checkout process, optimized for both mobile and desktop.",
    teckStack : {
        span1:htmlIcon,
        span2:cssIcon,
        span3:javascriptIcon,
        span4:jasmineIcon,
        span5:netlifyIcon,
        span6:"",
    },
    cardLinks:{
        github:"https://github.com/Ali-Arshad-Khan/Amazon-clone-project",
        external:"https://amazon-clone-project-by-aliarshadkhan.netlify.app/",
    },
},{
    img : "./javascript/data/data-images/book.png",
    heading : "Hosted Project",
    title : "Book Recommendation System",
    description : "Book Recommendation System is a flask based mini project which uses collaborative filtering to recommend related books to the user based on author's rating.",
    teckStack : {
        span1:htmlIcon,
        span2:cssIcon,
        span3:javascriptIcon,
        span4:flaskIcon,
        span5:pythonIcon,
        span6:rendericon,
    },
    cardLinks:{
        github:"https://github.com/Ali-Arshad-Khan/Book-Recommendation-System",
        external:"https://book-recommendation-system-je8a.onrender.com/",
    },
},
// {
//     img : "./javascript/data/data-images/project2.png",
//     heading : "Hosted Project",
//     title : "Youtube-clone",
//     description : "This is a mini project of youtube clone which is based on html & css only. The main focus of this project is on the layout of the elements and how important layout is in making responsive websites.",
//     teckStack : {
//         span1:"Html",
//         span2:"Css",
//         span3:"Github-Pages",
//         span4:"",
//         span5:"",
//         span6:"",
//     },
//     cardLinks:{
//         github:"https://github.com/Ali-Arshad-Khan/Youtube-clone",
//         external:"https://ali-arshad-khan.github.io/Youtube-clone/",
//     },
// },

{
    img : "./javascript/data/data-images/calculator.png",
    heading : "Hosted Project",
    title : "Calculator",
    description : "This is a simple calculator application that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The project is designed to demonstrate fundamental programming concepts and user interface development.",
    teckStack : {
        span1:htmlIcon,
        span2:cssIcon,
        span3:javascriptIcon,
        span4:netlifyIcon,
        span5:"",
        span6:"",
    },
    cardLinks:{
        github:"https://github.com/Ali-Arshad-Khan/Calculator",
        external:"https://calci-mini-project.netlify.app/",
    },
},
{
    img : "./javascript/data/data-images/rock.png",
    heading : "Hosted Project",
    title : "Rock Paper Scissor",
    description : "A simple yet engaging Rock Paper Scissors game implemented using JavaScript, HTML, and CSS. This project provides a fun way to interact with basic game logic and user interface elements.",
    teckStack : {
        span1:htmlIcon,
        span2:cssIcon,
        span3:javascriptIcon,
        span4:netlifyIcon,
        span5:"",
        span6:"",
    },
    cardLinks:{
        github:"https://github.com/Ali-Arshad-Khan/Rock-Paper-Scissor-Game",
        external:"https://rock-paper-scissor-game-mini-project.netlify.app/",
    },
},
{
    img : "./javascript/data/data-images/tenzies.png",
    heading : "Hosted Project",
    title : "Tenzies",
    description : "Tenzies is a responsive dice game using HTML, CSS, JavaScript, and React. It features state management, conditional rendering, and user interaction, allowing players to freeze dice and roll until all match.",
    teckStack : {
        span1:reactIcon,
        span2:javascriptIcon,
        span3:cssIcon,
        span4:netlifyIcon,
        span5:"",
        span6:"",
    },
    cardLinks:{
        github:"https://github.com/Ali-Arshad-Khan/Tenzies",
        external:"https://tenzies-mini-project.netlify.app/",
    },
},
{
    img : "./javascript/data/data-images/chef.png",
    heading : "Hosted Project",
    title : "Chef Claude",
    description : "Chef Claude is a responsive recipe suggestion app built with React. It takes user-provided ingredients and fetches matching recipes using API integration. The project demonstrates state management, props, conditional rendering, and responsive design.",
    teckStack : {
        span1:reactIcon,
        span2:jasmineIcon,
        span3:cssIcon,
        span4:huggingfaceIcon,
        span5:netlifyIcon,
        span6:"",
    },
    cardLinks:{
        github:"https://github.com/Ali-Arshad-Khan/Chef-Claude-Project",
        external:"https://project-chef-claude.netlify.app/",
    },
},

]
