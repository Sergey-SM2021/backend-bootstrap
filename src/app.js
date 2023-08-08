import express from "express"
import indexRouter from "./routes/index.js"
import usersRouter from "./routes/users.js"
import profileRouter from "./routes/profile.js"
import { RegisterRouter } from "./routes/register.js"
import { LoginRouter } from "./routes/login.js"
import { auth } from "./middleware/auth.js"
import { ArticlesRouter } from "./routes/articles.js"
import cors from "cors"

var app = express()
app.use(cors())
app.use(express.json())

app.use("/login", LoginRouter)

app.use(auth)

app.use("/", indexRouter)
app.use("/articles", ArticlesRouter)
app.use("/users", usersRouter)
app.use("/profile", profileRouter)
app.use("/register", RegisterRouter)

app.listen(3000)
