import Currency from "./3-currency";

export default class Pricing{
    constructor(amount, currency){
        if (typeof amount !== "number") throw new TypeError("Amount must be a number");
        if (! currency instanceof Currency) throw new TypeError("Currency must be an instance of Currency");
        this._amount = amount;
        this._currency = currency;
    }

    get amount(){
        return this._amount;
    }

    get currency(){
        return this._currency;
    }

    get #currencyName(){
        return this._currency.name;
    }

    get #currencyCode(){
        return this._currency.code;
    }
    set amount(amount){
        if (typeof amount !== "number") throw new TypeError("Amount must be a number");
        this._amount = amount;
    }

    set currency(currency){
        if (! currency instanceof Currency) throw new TypeError("Currency must be an instance of Currency");
        this._currency = currency;
    }

    displayFullPrice(){
        return `${this._amount} ${this.#currencyName} (${this.#currencyCode})`;
    }

    static convertPrice(amount, conversionRate){
        if (typeof amount !== "number") throw new TypeError("Amount must be a valid number");
        if (typeof conversionRate !== "number") throw new TypeError("conversionRate must be a valid number");
        return amount * conversionRate;
    }
}