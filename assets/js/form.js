// TODO: Create a variable that selects the form element
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitEl = document.querySelector('#submit');


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

function storeFormdata(event) {
  const blogItem = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value.trim(),
  };
  let arrBlogItems = JSON.parse(localStorage.getItem('arrBlogItems'));
  event.preventDefault();
  if (arrBlogItems == null) {
    arrBlogItems = [];
  };
  arrBlogItems.push(blogItem);
  localStorage.setItem('arrBlogItems', JSON.stringify(arrBlogItems));
  redirectPage('blog.html');
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submitEl.addEventListener('click', storeFormdata);