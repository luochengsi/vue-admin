<template>
  <div style="width: 100%;">
  	<topNav></topNav>
  	<div style="width: 100%;height: calc(100vh - 50px);">
      <transition name="custom-classes-transition"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut" mode="out-in">        

          <router-view></router-view>

      </transition>  	
  	</div>    
    <navBottom :name="$route.matched[1].name"></navBottom>
  </div>
</template>

<script>
import topNav from '../component/index/topNav.vue';
import navBottom from '../component/public/nav_bottom.vue' 
  export default {
  	components: {topNav, navBottom},
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
        closeLoading.call(this)  
      }
    },
  }
</script>

