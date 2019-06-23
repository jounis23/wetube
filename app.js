import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";
const app = express();

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res)=> res.send("You are on my profile");

app.use(cookieParser());
//bodyparser -> 서버가 데이터 형식을 이해 하도록 돕는 것
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//helmet -> 보안 그냥 쓰면 좋음
app.use(helmet());
//morgan -> 로그를 띄어줘서 여러가지 정보를 제공
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);
//누가 이걸 임포트 할때 app object를 가져간다
export default app;