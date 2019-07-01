<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>
<script>
import VHeader from "./components/v-header/v-header";
import {getSeller} from 'api'

export default {
  name: "app",
  data() {
    return {
      seller: {}
    }
  },
  methods: {
    _getSeller(){
      getSeller().then((seller) =>{
      this.seller=seller
    })
    }
  },
  created() {
    this._getSeller()
  },
  components: {
    VHeader
  }
};
</script>
<style lang="stylus"></style>
