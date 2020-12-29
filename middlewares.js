import routes from './routes'

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    next();
}

export const videoSetPolicy = (req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
}