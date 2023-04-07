const objectIsEqual = (data1, data2, ...ingoredKeys) => {
    let biggest
    let smallest
    let alterado = true
    if(typeof data1 === "object"){
        if(typeof data2 !== "object") return false
        debugger
        [smallest,biggest] = sortObjectsByKeysLength(data1,data2)
        if(isArray(biggest)) {
            if(!isArray(smallest)) return false
            const temp = biggest
            biggest = biggest.length > smallest.length ? biggest : smallest
            smallest = temp.length > smallest.length ? smallest : temp
            biggest.sort()
            smallest.sort()
            for(let i=0; i < biggest.length; i++) {
                if(biggest[i] !== smallest[i]) return false
            }
        } else if(isDate(biggest)) {
            if(!isDate(smallest)) return false
            if(biggest.getTime() !== smallest.getTime()) return false
        } else {
            if(isArray(smallest) || isDate(smallest)) return false
            for(key in biggest) {
                debugger
                if(!ingoredKeys.includes(key)) {
                    alterado = objectIsEqual(biggest[key], smallest[key])
                    if (alterado) return alterado
                }                
            }
        }
    } else {
        if(data1 !== data2) return false
    }

    return alterado
}

const isArray = (object) => {
    return object.constructor === Array
}

const isDate = (object) => {
    return object.constructor === Date
}

const sortObjectsByKeysLength = (...objects) => {
    const objectsSorted = []
    for (object of objects) {
        let count = 0
        for(key in object) {
            count++
        }
        objectsSorted.push({qtde:count, object})
    }
    return objectsSorted.sort((a,b)=>a.qtde-b.qtde).map(obj => obj.object)
}

module.exports = {
    objectIsEqual,
    isArray,
    isDate,
    sortObjectsByKeysLength
}