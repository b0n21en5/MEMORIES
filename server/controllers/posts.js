import PostMessage from "../models/postMessage.js";

export const getPosts = async (request, response) =>{
    
    try {
        const postMessage = await PostMessage.find();

        response.status(200).json(postMessage);
    } catch (error) {
        response.status(404).json({message: error.message})
    }
};


export const createPost = async (req, res) =>{
    const post = req.body;

    const newPost = new PostMessage(post);


    try {
        await newPost.save();
        
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}