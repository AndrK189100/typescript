import Movie from "../movie";
import Cart from "../cart";

const m1 = new Movie(1, '1', 10, true,2022,'a',['1'],60);
const mm1 = new Movie(1, '1', 10, true,2022,'a',['1'],60);
const m2 = new Movie(3, '3', 30, false,2022,'a',['1'],60);


test('Carts methods', () => {
    const cart =new Cart();
    cart.add(m1);
    cart.add(mm1);
    cart.add(m2);
    cart.add(m2);
      
    expect(cart.items.length).toBe(2);
    expect(cart.cartPrice).toBe(70);
    expect(cart.getCartDiscountPrice(20)).toBe(56);
    expect(cart.reduceItem(10)).toBe(false);
    expect(cart.reduceItem(1)).toBe(false);
    expect(cart.reduceItem(3)).toBe(true);
    expect(cart.reduceItem(3)).toBe(false);
    expect(cart.items.length).toBe(2);
    expect(cart.cartPrice).toBe(40);
    expect(cart.deleteItem(10)).toBe(false);
    expect(cart.deleteItem(1)).toBe(true);

})
