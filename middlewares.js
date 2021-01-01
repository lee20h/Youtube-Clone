import routes from './routes'
import multer from 'multer';

const VideoMulter = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
}

export const videoSetPolicy = (req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
}

export const uploadVideo = VideoMulter.single('videoFile');