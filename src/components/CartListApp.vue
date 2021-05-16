<template>
  <div class="sale center">
    <div class="container_top">
      <cart-item-app
        v-for="cart of carts"
        :cart="cart"
        :key="cart.id_product"
        @remove="delItem"
      ></cart-item-app>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItemApp from './CartItemApp.vue';

export default {
  components: { CartItemApp },
  name: 'CartListApp',
  computed: {
    ...mapGetters(['carts']),
  },
  methods: {
    // ...mapActions(['getCartsList']),
    delItem(id) {
      this.$store.dispatch('removeCartItem', id);
    },
  },
  created() {
    // this.getCartsList();
  },
};
</script>
