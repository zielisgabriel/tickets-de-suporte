import { paramsPath } from "../utils/paramsPath.js"

export const routes = [
    {
        method: 'GET',
        url: '/tickets',
        controler: ({ req, res, db }) => {
            const selectElement = db.selectElements("support")
            return res.writeHead(200).end(JSON.stringify(selectElement))
        }
    },
    {
        method: 'POST',
        url: '/tickets',
        controler: ({ req, res, db }) => {
            const { equipment, description, user_name } = req.body
            db.addElements("support", { equipment, description, user_name })
            return res.writeHead(201).end()
        }
    },
    {
        method: 'DELETE',
        url: '/tickets/:id',
        controler: ({ req, res, db }) => {
            return res.writeHead(200).end(`id: ${req.params.id} DELETADO`)
        }
    }
].map((route) => ({
    ...route,
    url: paramsPath(route.url)
}))