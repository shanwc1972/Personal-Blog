// Create a variable that selects the form elements
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitEl = document.querySelector('#submit');

//Check the app mode and render the page accordingly
renderMode();

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// The function storeFormData handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
function storeFormdata(event) {
  //Check if any of the form inputs are blank, if so give an alert and let the user submit another entry.
  if((usernameInput.value == "") || (titleInput.value == "") || (contentInput.value =="")) {
    alert("This blog entry is incomplete. Please ensure that you complete all the fields for username, title and content accordingly");
    return storeFormdata;
  }
  const blogItem = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value.trim(),
  };
  let arrBlogItems = JSON.parse(localStorage.getItem('arrBlogItems'));
  event.preventDefault();
  //If our array is empty i.e. null - create an empty array
  if (arrBlogItems == null) {
    arrBlogItems = [];
  };
  //Append the new item to the array
  arrBlogItems.push(blogItem);
  //Push our new augmented array into LocalStorage
  localStorage.setItem('arrBlogItems', JSON.stringify(arrBlogItems));
  redirectPage('blog.html');
}

// Adding an event listener to call the function to handle the form submission.
submitEl.addEventListener('click', storeFormdata);