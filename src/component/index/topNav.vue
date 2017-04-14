<template>
	<div class="top-head clearfix">
		<div class="top-left clearfix" :style="{'width':$store.state.leftmenu.width}">
			 
		</div> 
		<div class="top-mid flex-x-center flex-y-center">
			<div class="toggle-menu flex-y-center flex-x-center" @click="toggleMenu">
				<i :class="$store.state.leftmenu.menu_flag ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'"></i>
			</div>
		</div>  
		<div class="top-right clearfix">					
			<div class="head-pic flex-y-center flex-x-center">
				<img :src="$store.state.user.headPic">
			</div>
			<div class="user-name flex-y-center">jz-1</div>
			<div class="log-out flex-y-center flex-x-center" @click="logOut">
				<i class="iconfont icon-zhuxiao"></i>
			</div>
		</div>
	</div>
</template>

<script>

import dataAPI from '../../util/api.js'
import showDate from '../public/showDate.vue'
import Bus from '../../bus.js';
	export default {
		components: {showDate},
		methods: {
	      toggleMenu() {
	      	this.$store.dispatch(this.$store.state.leftmenu.menu_flag?'set_menu_close':'set_menu_open');
	      },
	      logOut() {
	        this.$confirm('你确定退出登录么?', '确认退出', {
	            confirmButtonText: '确定',
	            cancelButtonText: '取消',
	            type: 'warning'
	        }).then(() => {
	            // this.$store.dispatch('remove_token').then(() => {
	            //     this.$router.push('/login');
	            // });
	        });
	      }
	    }
	}
</script>