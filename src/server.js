import http from "node:http"
import { getReqBody } from "./middlewares/getReqBody.js"
import { pathRoute } from "./middlewares/pathRoute.js"

const server = http.createServer(async(req, res) => {
    await getReqBody(req, res)
    pathRoute(req, res)
})

server.listen(3333)