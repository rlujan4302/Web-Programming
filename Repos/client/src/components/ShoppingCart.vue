<script setup lang="ts">
    import { type ShoppingCartItem,total,addToCart,removeFromCart,getCart} from '@/model/shoppingCart';
    const cart = getCart();
</script>

<template>
    <div class="cart">
        Cart: {{ total }} items, total: ${{ total }}
    </div>

    <div class="cart-items">
        <div v-for="item in cart" :key="item.product.id" class="item">
            <img :src="item.product.thumbnail" :alt="item.product.title" />
            <div class="item-details">
                <h2 class="title is-5"> {{ item.product.title }}</h2>
                <p class="subtitle is-6">
                    {{ item.product.price }}
                    {{ item.quantity }} = ${{ item.product.price * item.quantity }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>