const express = require('express');
const postRoutes = require('./routes/post.routes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'This is BlogFlow layered API' });
});

app.use('/api/posts', postRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
