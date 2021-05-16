<template>
  <div id="app">
    <div class="header center">
      <div class="header-left">
        <router-link to="/Home"
          ><img class="img-logo" src="@/img/logo.svg" alt="logo" />
        </router-link>
        <form action="" class="search-form ">
          <button class="btn-search">
            <img src="@/img/search.svg" alt="" />
          </button>
          <input type="text" class="search-field" placeholder="Поиск" />
        </form>
      </div>
      <div class="header-right">
        <input id="switcher" type="checkbox" />
        <label for="switcher"
          ><img class="menuLogo" src="@/img/menu.svg" alt="menu"
        /></label>
        <nav class="drop">
          <span class="drop__name">MENU</span>
          <router-link to="/catalog">
            <div class="drop__box">
              <a class="drop__heading">MAN</a>
              <ul class="drop__ul">
                <li class="drop__link">Accessories</li>
                <li class="drop__link">Bags</li>
                <li class="drop__link">Denim</li>
                <li class="drop__link">T-Shirts</li>
              </ul>
              <a class="drop__heading">WOMAN</a>
              <ul class="drop__ul">
                <li class="drop__link">Accessories</li>
                <li class="drop__link">Jackets & Coats</li>
                <li class="drop__link">Polos</li>
                <li class="drop__link">T-Shirts</li>
                <li class="drop__link">Shirts</li>
              </ul>
              <a class="drop__heading">KIDS</a>
              <ul class="drop__ul">
                <li class="drop__link">Accessories</li>
                <li class="drop__link">Jackets & Coats</li>
                <li class="drop__link">Polos</li>
                <li class="drop__link">T-Shirts</li>
                <li class="drop__link">Shirts</li>
                <li class="drop__link">Bags</li>
              </ul>
            </div>
          </router-link>
        </nav>
        <router-link to="/Reg"
          ><a class="img-use">
            <img class="menuLogo" src="@/img/use.svg" alt="use"/></a
        ></router-link>
        <div>
          <div class="btn-cart" type="button" @click="showCart = !showCart">
            <img src="@/img/bay.svg" alt="bay" />
            <p class="total-quantity">
              {{ cartItemsCount }}
            </p>
          </div>
        </div>

        <div v-if="showCart" class="cart-block">
          <div class="cart-item">
            <cart-list-app @remove="delItem"> </cart-list-app>
          </div>
          <div class="cart-none">
            <p v-if="!cartItemsCount">Корзина пуста</p>
          </div>
          <div class="right-block"></div>
          <div class="by-goods">
            <router-link to="/Cart">
              <button class="by-goods-button">
                Корзина
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>

    <section class="box_info center">
      <div class="info">
        <img src="@/img/deliv.png" alt="deliv" />
        <h4 class="info_h4">Free Delivery</h4>
        <p class="info_p">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="info">
        <img src="@/img/sale.png" alt="sale" />
        <h4 class="info_h4">Sales & discounts</h4>
        <p class="info_p">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="info">
        <img src="@/img/quality.png" alt="quality" />
        <h4 class="info_h4">Quality assurance</h4>
        <p class="info_p">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
    </section>
    <section class="subscribe">
      <div class="sub_box center">
        <div class="sub_left">
          <img src="@/img/sub_fase.png" alt="" />
          <p class="p_safe">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
            purus condimentum“
          </p>
        </div>
        <div class="sub_right">
          <h4 class="h4_sub">SUBSCRIBE</h4>
          <p class="p_sub">FOR OUR NEWLETTER AND PROMOTION</p>
          <div class="sub_email">
            <form class="sub_form">
              <input
                class="sub_input"
                type="email"
                placeholder="Enter Your Email"
              />
              <button class="sub_button" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="footer">
      <div class="all_rights">© 2021 Brand All Rights Reserved.</div>
      <div class="media">
        <div class="media_icon">
          <a href="#" class="media_link"
            ><img class="link_icon" src="@/img/f.png" alt=""
          /></a>
          <a href="#" class="media_link"
            ><img class="inst_icon" src="@/img/inst.png" alt=""
          /></a>
          <a href="#" class="media_link"
            ><img class="link_icon" src="@/img/p.png" alt=""
          /></a>
          <a href="#" class="media_link"
            ><img class="link_icon" src="@/img/twit.png" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartListApp from '@/components/CartListApp.vue';

export default {
  components: { CartListApp },
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    cartItemsCount() {
      const { carts } = this.$store.state.cart;
      const count = carts
        // example [1, 2, 3, 4]
        .map((item) => item.quantity)
        .reduce((acc, quantity) => {
          // eslint-disable-next-line no-param-reassign
          acc += quantity;
          return acc;
        }, 0);
      return count;
    },
  },
  methods: {
    delItem(id) {
      console.log('app ', id);
    },
  },
};
</script>

<style lang="scss">
.header-right {
  display: flex;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
