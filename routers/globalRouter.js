import express from "express";
import passport from "passport";
import routes from "../routes";

import { home, search } from "../controllers/videoController";
import {
  logout,
  postJoin,
  getJoin,
  getLogin,
  postLogin,
  githubLogin,
  postGithubLogIn,
  getMe,
  facebookLogin,
  postFacebookLogIn
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, onlyPrivate, search);

globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: routes.login }),
  postGithubLogIn
);

globalRouter.get(routes.faceBook, facebookLogin);
globalRouter.get(
  routes.faceBookCallback,
  passport.authenticate("facebook", { failureRedirect: routes.login }),
  postFacebookLogIn
);

globalRouter.get(routes.me, getMe);
export default globalRouter;
