export function querySeparator(query){
    return query.slice(1).split('&').reduce((queryParams, param) => {
        const [ key, value ] = param.split('=')
        queryParams[key] = value
        return queryParams
    }, {})
}

// ?category=computer&price=5000

/*
query: {
    category: computer,
    price: 500
}
*/