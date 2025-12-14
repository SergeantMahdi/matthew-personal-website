import sanitize from "sanitize-html";

export default function sanitizeHtml(req, res, next) {
    for (const key in req.body) {
        req.body[key] = sanitize(req.body[key], { allowedAttributes: {}, allowedTags: [] })
    }
    next();
}