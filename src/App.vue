<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rattings">评分</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import VHeader from './components/v-header/v-header'
import { getSeller } from 'api'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  methods: {
    _getSeller() {
      getSeller().then(seller => {
        this.seller = seller
      })
    }
  },
  created() {
    this._getSeller()
  },
  components: {
    VHeader
  }
}
</script>
<style lang="stylus">
@import './common/stylus/mixin.styl'
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-1px(rgba(7, 17, 27, 0.1));
}

.tab-item {
  flex: 1;
  text-align: center;
}

.tab-item a {
  display: block;
  text-decoration: none;
  font-size: 14px;
  color: rgb(77, 85, 93);
}

a.active-link {
  color: rgb(240, 20, 20);
}
</style>
