import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database{
    #database = {}

    constructor(){
        fs.readFile(DATABASE_PATH, "utf8").then((data) => {
            this.#database = JSON.parse(data)
        }).catch(() => {
            this.#persist()
        })
    }

    #persist(){
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }

    addElements(element, data){
        if(Array.isArray(this.#database[element])){
            this.#database[element].push(data)
        } else {
            this.#database[element] = [data]
        }
        this.#persist()
    }

    selectElements(element, filters){
        let data = this.#database[element] ?? []
        if(filters){
            data = data.filter((row) => {
                return Object.entries(filters).some(([ key, value ]) => {
                    return row[key] === value
                })
            })
        }
        return data
    }

    updateElement(element, id, data){
        const rowIndex = this.#database[element].findIndex((row) => row.id === id)
        if(rowIndex > -1){
            this.#database[element][rowIndex] = {
                ...this.#database[element][rowIndex],
                ...data
            }
        }

        this.#persist()
    }
}