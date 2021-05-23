export class FoodItem {
    public name: string;
    public price: number;
    public allModifiers: string[];
    public appliedModifiers: string[];
    public quantity: number;

    constructor(itemName,itemPrice,itemModifiers)
    {
        this.name=itemName
        this.price=itemPrice
        this.allModifiers = itemModifiers
        this.appliedModifiers = itemModifiers //Change later.
        this.quantity = 1
    }

    public appliedMods()
    {
        var modString = ""
        for (var i = 0; i < this.appliedModifiers.length; i++)
            modString = modString + this.appliedModifiers[i] + ", "

        return modString
    }

    public applyMod(modNum:number)
    {
        if (modNum < this.allModifiers.length)
        {
            if (!this.appliedModifiers.includes(this.allModifiers[modNum]))
                this.appliedModifiers.push(this.allModifiers[modNum])
        }
    }
            
}