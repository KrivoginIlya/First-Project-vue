<template>
  <div class="sale center">
    <div class="container_top">
      <cart-item
        v-for="cart of carts"
        :cart="cart"
        :key="cart.id_product"
        @remove="delItem"
      ></cart-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from './CartItem.vue';

export default {
  components: { CartItem },
  name: 'CartList',
  computed: {
    ...mapGetters(['carts']),
  },
  methods: {
    // ...mapActions(['getCartsList']),
    delItem(id) {
      // console.log('cart list', id);
      this.$store.dispatch('removeCartItem', id);
    },
  },
  created() {
    // this.getCartsList();
  },
};
</script>
