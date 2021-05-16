<template>
  <div class="container_top">
    <div class="sale_card">
      <a href="#">
        <img class="img_card" src="@/img/pict2.jpg" alt="sale" />
      </a>

      <button @click="addToCart(good)" class="buy-btn">
        <img src="@/img/cart.svg" alt="cart" />
        Add to Card
      </button>
      <a href="product.html" class="sale_h4_card">{{ good.product_name }}</a>
      <p class="sale_p_card">{{ good.id_product }}</p>
      <p class="sale_price">{{ good.price }}$</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: ['good'],
  methods: {
    addToCart(good) {
      this.$emit('addToCart', good);
    },
  },
};
</script>
