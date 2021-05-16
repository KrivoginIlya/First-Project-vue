<template>
  <div class="sale center">
    <div class="container_top">
      <catalog-item
        v-for="good of goods"
        :good="good"
        :key="good.id_product"
        @addToCart="onCartAdd"
      ></catalog-item>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CatalogItem from './CatalogItem.vue';

export default {
  components: { CatalogItem },
  name: 'CatalogList',
  computed: {
    ...mapGetters(['goods']),
  },
  methods: {
    ...mapActions(['getGoodsList']),
    onCartAdd(good) {
      this.$store.dispatch('addToCart', good);
    },
  },
  created() {
    this.getGoodsList();
  },
};
</script>
