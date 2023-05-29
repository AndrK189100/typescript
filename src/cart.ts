import IBuyable from "./interfaces/ibuyable";
export default class Cart {

    private _items: IBuyable[] =[];

    get items():IBuyable[] {
        return [...this._items]
    }

    add(item:IBuyable):boolean {
        const indexItem = this._items.findIndex( (element) => element.id === item.id)
        
        if(indexItem === -1) {
            const cloneItem = JSON.parse(JSON.stringify(item));
            cloneItem.countInCart = 1;
            this._items.push(cloneItem);
            return true;
        }
        
        if(this._items[indexItem].onlyOne) {return false}
        
        this._items[indexItem].countInCart! += 1;
        return true;
    }

    get cartPrice():number {
        return this._items.reduce((acc:number, curr:IBuyable) => acc + curr.price*curr.countInCart!,0 )
    }

    getCartDiscountPrice(discount: number): number {
        return this.cartPrice *((100-discount)/100)
    }

    deleteItem(id:number):boolean {
        const indexItem = this._items.findIndex( (element) => element.id === id);
        
        if(indexItem === -1) {return false}

        this._items.splice(indexItem, 1);
        return true;
    }

    reduceItem(id:number):boolean {
        const indexItem = this._items.findIndex( (element) => element.id === id);
        
        if(indexItem === -1) {return false}
            
        if(this._items[indexItem].onlyOne) {return false}

        if(this._items[indexItem].countInCart! === 1) {return false}

        this._items[indexItem].countInCart! -= 1;

        return true;
    }

}
