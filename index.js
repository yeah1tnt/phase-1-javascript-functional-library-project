function myEach(collection, callback){
    let temp = [...collection];
    if (collection instanceof Array === false){
        temp = Object.values(collection);
    }
    for(let i = 0; i < temp.length; i++){
        callback(temp[i]);
    }
    return collection;
}

function myMap(collection, callback){
    let temp = [...collection];
    if(collection instanceof Array === false){
        temp = Object.values(collection);
    }
    for(let i = 0; i < temp.length; i++){
        temp[i] = callback(temp[i]);
    }
    return temp;
}

function myReduce(collection, callback, acc){
    let temp = [...collection];
    if(collection instanceof Array === false){
        temp = Object.values(collection);
    }
    if(!acc){
        acc = temp[0];
        temp = temp.slice(1);
    }
    for(let i = 0; i < temp.length; i++){
        acc = callback(acc,temp[i],temp);
    }
    return acc;
}

function myFind(collection, predicate){
    let temp = [...collection];
    if(collection instanceof Array === false){
        temp = Object.values(collection);
    }
    for(let i = 0; i < temp.length; i++){
        if(predicate(temp[i])){
            return temp[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate){
    let temp = [...collection];
    if(collection instanceof Array === false){
        temp = Object.values(collection);
    }
    let result = [];
    for(let i = 0; i < temp.length; i++){
        if(predicate(temp[i])){
            result.push(temp[i]);
        }
    }
    return result;
}

function mySize(collection){
    let temp = [...collection];
    if(collection instanceof Array === false){
        temp = Object.values(collection);
    }
    if(temp.length === 0){
        return undefined;
    }
    return temp.length;

}

function myFirst(array, n){
    if(typeof n !== "number"){
        return array[0];
    }
    let result = [];
    for(let i = 0; i < n; i++){
        result.push(array[i]);
    }
    return result;
}

function myLast(array, n){
    if(typeof n !== "number"){
        return array[array.length-1];
    }
    let result = [];
    for(let i = n; i > 0; i--){
        result.unshift(array[i]);
    }
    return result;
}

function myKeys(object){
    let temp = [];
    for(let i in object){
        temp.push(i);
    }
    return temp;
}

function myValues(object){
    let temp = [];
    for(let i in object){
        temp.push(object[i]);
    }
    return temp;
}