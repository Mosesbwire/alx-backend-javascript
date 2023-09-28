export default class Building{
    constructor(sqft){
        if (typeof sqft !== "number") throw new TypeError("sqft must be a number");
        this._sqft = sqft;

    }
    get sqft(){
        return this._sqft;
    }

    evacuationWarningMessage(){}

}