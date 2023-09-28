import Building from "./5-building";

export default class SkyHighBuilding extends Building{
    constructor(sqft,floors){
        super(sqft);
        
        if (!Number.isInteger(floors)) throw new TypeError("floors must be an Integer");
        this._floors = floors;
    }

    get floors(){
        return this._floors;
    }

    evacuationWarningMessage(){
        return `Evacuate slowly the ${this.floors} floors`;
    }
}