const articleModel = require('../models/article');

module.exports = class ArticleService {
    async getAllArticle(){
        try{
            const allArticles = await articleModel.find();
            return allArticles;
        } catch(err){
            console.log("Coudn't fetch articles");
        }
    }
}