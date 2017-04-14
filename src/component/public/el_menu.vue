<template>
	<div>
		<el-tooltip 
            class="item" 
            effect="dark" 
            placement="right"
            :disabled="$store.state.leftmenu.menu_flag" 
            :content="menuname">
            <i :class="icon"></i>
        </el-tooltip>
        <span class='menu-name' v-if="$store.state.leftmenu.menu_flag">{{menuname}}</span>
	</div>
</template>
<script>
	export default {
		props: ['menuname', 'icon'],
	}
</script>