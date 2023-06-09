export default interface IBuyable {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly onlyOne: boolean;
    countInCart?:number;
}