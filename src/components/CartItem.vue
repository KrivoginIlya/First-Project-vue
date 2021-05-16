<template>
  <div class="cart_card cart_card_mb">
    <img class="cart_card__img" src="@/img/cart_img1.jpg" alt="photo" />
    <div class="cart_card__content">
      <a href="#" class="cart_card__h3">{{ cart.product_name }}</a>
      <p class="cart_card__text">Price: ${{ cart.price }}$</p>
      <p class="cart_card__text">Color: {{ cart.id_product }}$</p>
      <p class="cart_card__text">Size: M</p>
      <p class="cart_card__text">{{ cart.quality }}</p>
    </div>
    <button @click="delItem(cart.id_product)" class="cart_card__del">
      X
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['cart'],
  methods: {
    delItem(id) {
      this.$emit('remove', id);
    },
  },
};
</script>
