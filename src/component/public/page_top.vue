<template>
	<div class="page-top flex-x-between">
		<div style="height: 100%;" class="flex-y-center flex-x-xenter">
			<h3>{{title}}</h3>
		</div>
		<div class='bread flex-y-center flex-x-between'>
	        <el-breadcrumb>
		        <el-breadcrumb-item style="cursor: text;" v-for="item in list">{{item}}</el-breadcrumb-item>
	        </el-breadcrumb>
	    </div>
	</div>
</template>
<script>
export default {
	data() {
		var vm = this
		var title = _.last(vm.list)
		return {
			title: title
		}
	},
	props: ['list']
}
</script>