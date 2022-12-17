const postService = require('../service/post.service');  

const allPosts = async (_req, res) => {
    try {
        const posts = await postService.allPosts();
      return res.status(200).json(posts);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const { post, status, message } = await postService.getPostById(id);
        if (message) {
         return res.status(status).json({ message });
     }
        return res.status(status).json(post);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};


module.exports = {
    allPosts,
    getPostById
}