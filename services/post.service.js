let posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the content of the first post'
  }
];

let currentId = 1;

function findAllPosts() {
  return posts;
}

function findPostById(id) {
  return posts.find((post) => post.id === id);
}

function addPost(title, content) {
  currentId += 1;
  const newPost = { id: currentId, title, content };
  posts.push(newPost);
  return newPost;
}

module.exports = {
  findAllPosts,
  findPostById,
  addPost,
};
