<template>
  <div style="width: 100%;height: 100%;">
      <leftmenu name="money"></leftmenu>
      <div class="main-content" :style="{marginLeft:$store.state.leftmenu.width}">
        <div class="m-cont">
          <transition name="custom-classes-transition"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut" mode="out-in">         

            <router-view></router-view>

          </transition> 
        </div>
      </div>       
  </div>
</template>

<script>
import leftmenu from '../../component/leftmenu/left_menu.vue';
  export default {
    components: {leftmenu},
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
        closeLoading.call(this)   
      },
    },
  }
</script>

