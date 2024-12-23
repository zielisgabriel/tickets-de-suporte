import { create } from "node:domain"
import { paramsPath } from "../utils/paramsPath.js"
import { randomUUID } from "node:crypto"

export const routes = [
    {
        method: 'GET',
        url: '/tickets',
        controler: ({ req, res, db }) => {
            const { status } = req.query
            const filters = status ? { status } : null

            const selectElement = db.selectElements("support")
            return res.writeHead(200).end(JSON.stringify(selectElement))
        }
    },
    {
        method: 'POST',
        url: '/tickets',
        controler: ({ req, res, db }) => {
            const {
                equipment,
                description,
                user_name
            } = req.body
            db.addElements("support", { id: randomUUID(), equipment, description, user_name, status: "open", create_at: new Date(), update_at: new Date() })
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