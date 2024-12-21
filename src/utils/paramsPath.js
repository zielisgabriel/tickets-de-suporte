export function paramsPath(url){
    const regex = /:([a-zA-Z]+)/g
    const replaceUrl = url.replaceAll(regex, '(?<$1>[a-z0-9-_]+)')
    const regexClass = RegExp(`${replaceUrl}(?<query>\\?(.*))?$`)
    return regexClass
}