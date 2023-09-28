export default class HolbertonClass {

    constructor(size, location){
        if (!Number.isInteger(size)) throw new TypeError("size must be an integer");
        if (typeof location !== "string") throw new TypeError("location must be a string");
        this._size = size;
        this._location = location;
    }

    get size(){
        return this._size;
    }

    get location(){
        return this._location;
    }

    valueOf(){
        return this._size;
    }

    toString(){
        return this._location;  
    }
}