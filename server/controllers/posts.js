import PostMessage from "../models/postMessage.js";

export const getPOST = async (request, response) =>{
    
    try {
        const postMessage = await PostMessage.find();

        response.status(200).json(postMessage);
    } catch (error) {
        response.status(404).json({message: error.message})
    }
};


export const createPOST = (req, res) =>{
    res.send("Post Created")
}