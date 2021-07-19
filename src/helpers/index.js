
export const getRange = (startIndex=1, endIndex=4) => {
    return (new Array(endIndex - startIndex + 1)).fill(undefined).map((_, i) => i + startIndex);
}


export const paginateData = (data, pageNumber, pageSize=4) => {
    const startIndex = (pageNumber - 1) * pageSize; 

    return data.slice(startIndex, startIndex+pageSize)
}

export const checkNameExists = (list, name) => {
    return list.some(item => item.name.toLowerCase() === name.toLowerCase())
}