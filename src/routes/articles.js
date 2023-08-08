import express from "express"
import { ArticlesController } from "../controllers/article.js"
export const ArticlesRouter = express.Router()

ArticlesRouter.get("/", ArticlesController.getArticles)

ArticlesRouter.get("/:id", ArticlesController.getArticleById)
