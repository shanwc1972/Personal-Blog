// TODO: Create a variable that selects the main element
const mainEl = document.querySelector('main');
const buttonEl = document.querySelector('button');
const arrBlogItems =JSON.parse(localStorage.getItem('arrBlogItems'));
console.log(arrBlogItems);

// TODO: Create a function that builds an element and appends it to the DOM
const setupBlogPost = function(i) {
    const blogItemCard = document.createElement('div');
    blogItemCard.setAttribute("class","card");
    const blogItemArticle = document.createElement(`article`);
    const blogItemHeader = document.createElement('h2');
    const blogItemContent = document.createElement('blockquote');
    const blogItemUsername = document.createElement('p');
    mainEl.appendChild(blogItemCard);
    blogItemCard.appendChild(blogItemArticle);
    blogItemArticle.appendChild(blogItemHeader);
    blogItemArticle.appendChild(blogItemContent);
    blogItemArticle.appendChild(blogItemUsername);
}

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data
const populateBlogPost =function(i) {
    mainEl.children[i].children[0].children[0].textContent = arrBlogItems[i].title;
    mainEl.children[i].children[0].children[1].textContent = arrBlogItems[i].content;
    mainEl.children[i].children[0].children[2].textContent = "Posted by: " + arrBlogItems[i].username;
}

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
  };

function goBack(event) {
    redirectPage('index.html')
}

// TODO: Call the function to render the list of blog posts
for(let i=0; i<arrBlogItems.length; i++){
    setupBlogPost(i);
    populateBlogPost(i);
}


//Adding event listener for back button
buttonEl.addEventListener('click', goBack);