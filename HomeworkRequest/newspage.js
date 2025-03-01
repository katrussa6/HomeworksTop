const apiPost = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async () => {
  const response = await fetch(apiPost).then((response) => {
    return response.json();
  });
  
  displayPosts(response);
};

getPosts();

//const getPosts = () => {
//fetch(apiPost)
//.then((response) => {
//  return response.json();
//})
//.then((posts) => console.log(posts));
//};
//getPosts();

function displayPosts(posts) {
  const postsContainer = document.getElementById("comments");
  const slicePost = posts.slice(0, 2);

  slicePost.forEach((element) => {
    const postElement = document.createElement("div");

    postElement.setAttribute('style','border: 1px solid blue;')
    postsContainer.setAttribute('style','color:green')
    postsContainer.innerHTML += `
<p>${element.userId}</p>
<p>${element.title}</p>
<p>${element.body}</p>

`;
    postsContainer.appendChild(postElement);
  });
}

const apiComment = "https://jsonplaceholder.typicode.com/comments";
const getComment = async () => {
  const response = await fetch(apiComment).then((response) => {
    return response.json();
  });

  displayComments(response);
};
getComment();

function displayComments(comment) {
  const commentsContainer = document.getElementById("comments");

  const sliceComment = comment.slice(0, 2);

  sliceComment.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.setAttribute('style','border: 1px solid blue;','	backgroundColor:red')

    commentsContainer.innerHTML += `
          <p>${comment.name}</p>
          <p>${comment.email}</p>
          <p>${comment.body}</p>
          <hr>
      `;
    commentsContainer.appendChild(commentElement);
  });
}
