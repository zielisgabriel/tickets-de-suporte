import { routes } from "../routes/routes.js";
import { querySeparator } from "../utils/querySeparator.js";
import { Database } from "../utils/database.js";

const db = new Database()

export function pathRoute(req, res){
    const result = routes.find((route) => {
        return route.method === req.method && route.url.test(req.url)
    })

    if(result){
        const { query, ...params } = req.url.match(result.url).groups

        query ? req.query = querySeparator(query) : req.query = {}
        req.params = params
        return result.controler({ req, res, db })
    }

    return res.writeHead(404).end()
}