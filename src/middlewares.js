import multer from "multer";
import routes from "./routes";

const VideoMulter = multer({ dest: "uploads/videos/" });
const AvatarMulter = multer({ dest: "uploads/avatars/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube Clone";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const videoSetPolicy = (req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-eval'; object-src 'self'"
  );
  return next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = VideoMulter.single("videoFile");
export const uploadAvatar = AvatarMulter.single("avatar");
