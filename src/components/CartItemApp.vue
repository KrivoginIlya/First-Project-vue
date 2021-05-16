<template>
  <div>
    <div class="product-bio">
      <img src="@/img/quality.png" alt="Some image" />
      <div class="product-desc">
        <p class="product-title">{{ cart.product_name }}</p>
        <p class="product-quantity">Количество: {{ cart.quantity }}</p>
        <p class="product-single-price">{{ cart.price }} ₽ за единицу</p>
      </div>
      <button @click="delItem(cart.id_product)" class="cart_card__del">
        X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItemApp',
  props: ['cart'],
  methods: {
    delItem(id) {
      console.log(this.$store.state.cart.carts.length);
      this.$emit('remove', id);
    },
  },
};
</script>
