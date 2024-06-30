// Setting upsome global scope variables
const mainEl = document.querySelector('main');
const buttonEl = document.querySelector('button');
const arrBlogItems =JSON.parse(localStorage.getItem('arrBlogItems'));

//Check for and render the app mode accordingly
renderMode();

// Here is a function that builds a set of element and appends it to the DOM
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
const noBlogPosts = function() {
    if(arrBlogItems == []){
        return true;
    }
}

// TODO: Create a function that reads from local storage and returns the data
const populateBlogPost = function(i) {
    mainEl.children[i].children[0].children[0].textContent = arrBlogItems[i].title;
    mainEl.children[i].children[0].children[1].textContent = arrBlogItems[i].content;
    mainEl.children[i].children[0].children[2].textContent = "Posted by: " + arrBlogItems[i].username;
}

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
  };

// The following function allows the user togo back to the landing page when the back button is clicked
  function goBack(event) {
    redirectPage('index.html')
}



// The following function renders the list of blog posts within loop, dependng on how many blog posts there are.
// If there are no Blogs reder the page to show that there are no blogs to show
if (!noBlogPosts())
{
    for(let i=0; i<arrBlogItems.length; i++){
        setupBlogPost(i);
        populateBlogPost(i);
    }
} else {
    mainEl.textContent = "No blogs to show here."
}

//Adding event listener for back button
buttonEl.addEventListener('click', goBack);