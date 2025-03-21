//this is ai service that will be used to generate content
const aiService = require('../services/ai.service')

//this is the controller that will be used to get the response from the ai service
module.exports.getReview = async (req, res)=>{
    const code = req.body.code;

    if(!code){
        return res.status(400).json({message : 'prompt is required'});
    }

    const response = await aiService(code);

    res.send(response);
}