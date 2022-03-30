export const getDay = (dayPrefix:string):string =>{
    const dayobj:Record<string, string> = {
        "tue": 'Tuesday',
        "wed": "Wednesday",
        "thu": "Thursday",
        "sat": "Saturday"
    }
    return dayobj[dayPrefix.toLowerCase()] || `${dayPrefix}day`
}

export const capitalize = (str: string): string => {
    const strCopy = str
    return strCopy.charAt(0).toUpperCase() + str.slice(1)
}