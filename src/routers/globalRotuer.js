import express from "express";
import passport from "passport";
import {
  FacebookLogin,
  getJoin,
  getLogin,
  getMe,
  githubLogin,
  logout,
  postFacebookLogin,
  postGithubLogin,
  postJoin,
  postLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPrivate, onlyPublic } from "../middlewares";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCb,
  passport.authenticate("github", { failureRedirect: routes.login }),
  postGithubLogin
);

globalRouter.get(routes.facebook, FacebookLogin);
globalRouter.get(
  routes.githubCb,
  passport.authenticate("facebook", { failureRedirect: routes.login }),
  postFacebookLogin
);

globalRouter.get(routes.me, getMe);
globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
