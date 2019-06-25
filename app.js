import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.set("view engine", "pug");

//helmet -> 보안 그냥 쓰면 좋음
app.use(helmet());
app.use(cookieParser());
//bodyparser -> 서버가 데이터 형식을 이해 하도록 돕는 것
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//morgan -> 로그를 띄어줘서 여러가지 정보를 제공
app.use(morgan("dev"));
app.use(localsMiddleware);


app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
//누가 이걸 임포트 할때 app object를 가져간다
export default app;