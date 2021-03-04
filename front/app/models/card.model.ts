export class CardModel {
    private name: String;
    private skillValue: number;
    private combatValue: number;
    private bootValue: number;
    private effect: String; // a voir comment modéliser un effet, peut etre avec une interface qui contient un nom et ce qu'on doit faire?
    private reward: String;
    private finalValue: number;
    private skillCost: number;
    
    constructor () {

    }
}