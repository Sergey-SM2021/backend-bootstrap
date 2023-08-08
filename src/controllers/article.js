import { ArticleService } from "../servicecs/articles.js";

class Article {
  async getArticles(req, res) {
    res.send([ArticleService.getArticle()])
  }

  async getArticleById(req, res) {
    const article = await ArticleService.getArticle()
    res.send(article)
  }
}

export const ArticlesController = new Article();
