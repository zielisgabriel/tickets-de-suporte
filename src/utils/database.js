import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database{
    database = {}

    constructor(){
        fs.readFile(DATABASE_PATH, "utf8").then((data) => {
            this.database = JSON.parse(data)
        }).catch(() => {
            this.persist()
        })
    }

    persist(){
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.database))
    }

    addElements(element, data){
        if(Array.isArray(this.database[element])){
            this.database[element].push(data)
        } else {
            this.database[element] = [data]
        }
        this.persist()
    }

    selectElements(element){
        return this.database[element] ?? []
    }
}