import IBuyable from './interfaces/ibuyable';

export default class Movie implements IBuyable {
       
    constructor(
        readonly id: number, 
        readonly name: string, 
        readonly price: number, 
        readonly onlyOne:boolean, 
        readonly production: number, 
        readonly tag: string, 
        readonly genries:string[], 
        readonly time:number ){
        
    }
   
}


