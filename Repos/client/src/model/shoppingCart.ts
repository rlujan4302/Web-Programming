import { type Product } from "@/model/product";
import { reactive } from "vue";
import { computed } from "vue";

export type ShoppingCartItem = {
    product: Product;
    quantity: number;
}

export const cart = reactive([] as ShoppingCartItem[]);

export const getCart = () => cart;

export const addToCart = (product: Product) => {
    const item = cart.find((item) => item.product.id === product.id)
    if(item){
        item.quantity++;
    }
    else{
        cart.push({product, quantity: 1});
    }
;}
export const removeFromCart = (product: Product, quantity?: number) => {
    const item = cart.find(item => item.product.id === product.id);
    if(item){
        quantity = quantity ?? item.quantity;
        item.quantity--;
        if(item.quantity == 0){
            const index = cart.indexOf(item);
            cart.splice(index, 1);
        }
    }
};

export const clearCart = () =>{
    cart.splice(0,cart.length);
};

export const total = computed(() => cart.reduce((sum, item) => sum + item.product.price + item.quantity, 0));