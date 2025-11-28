const postService = require('../services/post.service');

function getAllPosts(req, res) {
  const posts = postService.findAllPosts();
  res.status(200).json(posts);
}

function getPostById(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'Invalid post id' });
  }
  const post = postService.findPostById(id);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.status(200).json(post);
}

function createPost(req, res) {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  const newPost = postService.addPost(title, content);
  res.status(201).json(newPost);
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
};
