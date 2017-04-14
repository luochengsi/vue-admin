<template>
	<div style="width: 100%;">
		<pageTop :list="['综合管理', '用户管理']"></pageTop>

		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		  <el-form-item label="用户名称">
		    <el-input v-model="formInline.userName" placeholder="用户名称"></el-input>
		  </el-form-item>
		  <el-form-item label="登录帐号">
		    <el-input v-model="formInline.logName" placeholder="登录帐号"></el-input>
		  </el-form-item>
		  <el-form-item label="用户状态">
		    <el-select v-model="formInline.state" placeholder="用户状态">
		      <el-option label="激活" value="active"></el-option>
		      <el-option label="注销" value="logout"></el-option>
		    </el-select>
		  </el-form-item><el-form-item>
		    <el-button type="primary">查询</el-button>
		  </el-form-item>
		</el-form>


		
		<el-tooltip class="item" effect="dark" content="添加" placement="top-start">
	      <el-button type="primary" icon="plus" @click="add"></el-button>
	    </el-tooltip>
	    <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
	      <el-button type="primary" icon="delete" @click="del"></el-button>
	    </el-tooltip>
		

		<el-table :data="rowList" style="width: 99%" :row-class-name="$store.state.global.tableRowClassName"  
		  v-loading.body="$store.state.global.ajax_loading" id="Table" :row-style="rowStyle"
		  @selection-change="handleSelectionChange">  

	      	<el-table-column
		      type="selection"
		      width="55" align="center">
		    </el-table-column>    	

	      	<el-table-column prop="nickName" label="用户名称" align="center"></el-table-column>
	      	<el-table-column prop="loginName" label="登录帐号" align="center"></el-table-column>
	      	<el-table-column prop="status" label="用户状态" align="center" :formatter="formatter"></el-table-column>
	      	<el-table-column prop="mobile" label="手机号" align="center"></el-table-column>
	      	<el-table-column prop="identityCard" label="身份证号" align="center"></el-table-column>

	      	<el-table-column label="操作" width="150px" align="center">
			      <template scope="scope">
			        <el-button
			          size="small" @click="edit(scope.$index, scope.row)">编辑</el-button>
			      </template>
	    	</el-table-column>
	    	
	    </el-table>

	    <el-dialog :title="dialogTitle" v-model="visible" custom-class="form-dialog" label-width="100px;" @close="cancel">
	    	<el-row type="flex" justify="center">
			  <el-col :span="12">
			  		<el-form>
					    <el-form-item label="用户姓名">
					      <el-input v-model="form.nickName" auto-complete="off" :disabled="disabled"></el-input>
					    </el-form-item>
					    <el-form-item label="登录帐号">
					      <el-input v-model="form.loginName" auto-complete="off" :disabled="disabled"></el-input>
					    </el-form-item>
					    <el-form-item label="手机号码">
					      <el-input v-model="form.mobile" auto-complete="off"></el-input>
					    </el-form-item>
					    <el-form-item label="身份证">
					      <el-input v-model="form.identityCard" auto-complete="off" :disabled="disabled"></el-input>
					    </el-form-item>
					    <el-form-item label="用户状态">
					      	<el-radio class="radio" v-model="form.status" label="1">激活</el-radio>
			  				<el-radio class="radio" v-model="form.status" label="0">注销</el-radio>
					    </el-form-item>
				  	</el-form>				  
			  </el-col>
			</el-row>
		  	<div slot="footer" class="dialog-footer">
			    <el-button @click="cancel">取 消</el-button>
			    <el-button type="primary" @click="submit">确 定</el-button>
		  	</div>
		</el-dialog>
	</div>
</template>
<script>
import pageTop from '../../../../component/public/page_top.vue';
import jz from '../../../../JZ.js'
export default {
	components: {pageTop},
	data() {
		return {
			formInline: {
	          userName: '',
	          logName: '',
	          state: ''
	        },
	        colList: [
	          {prop: 'userName', label: '用户名称'},
	          {prop: 'logName', label: '登录帐号'},
	          {prop: 'state', label: '用户状态'},
	          {prop: 'phone', label: '手机号'},
	          {prop: 'IDcard', label: '身份证号'},
	        ],
	        rowList: [],
	        rowStyle: jz.tableRowStyle,
	        form: {
				nickName: '',
				status: '1',
				loginName: '',
				identityCard: '',
				mobile: ''
	        },
	        visible: false,
	        dialogTitle: '',
	        disabled: false,
	        userID: 0,
	        selected: []
		}
	},
	mounted() {
		var vm = this
		vm.getUserList()
	},
	methods: {
		add() {
			this.dialogTitle = '新增用户'
			this.visible = true
		},
		cancel() {
			this.dialogTitle = ''
			this.form.nickName = ''
			this.form.loginName = ''
			this.form.mobile = ''
			this.form.identityCard = ''
			this.form.status = '1'
			this.userID = 0
			this.disabled = false
			this.visible = false
		},
		del() {
			var vm = this
			if(this.selected.length > 0) {				
				$.post({
					url: jz.delUser,
					traditional: true,
					data: {
						userId: vm.selected,		
					}
				})
				.then(vm.getUserList)
			}
		},
		formatter(r, c) {
			return c.label === '用户状态' && r.status == 1 ? '激活' : '注销'
		},
		edit(index, row) {
			this.dialogTitle = '编辑用户'
			this.form.nickName = row.nickName
			this.form.loginName = row.loginName
			this.form.mobile = row.mobile
			this.form.identityCard = row.identityCard
			this.form.status = row.status.toString()
			this.userID = row.userId
			this.disabled = true
			this.visible = true			
		},
		handleSelectionChange(val) {
			var arr = []
			if(val.length > 0) {
				val.forEach(function(el) {
					arr.push(el.userId)
				})
			}			
			this.selected = arr
		},
		getUserList() {
			var vm = this
			return $.post(jz.getUserList, {})
					.then(function(d) {
						vm.rowList = d.aaData
					})
		},
		submit() {
			var vm = this
			var form = this.form
			var arr = this.rowList
			var o = {
				nickName: form.nickName,
	        	loginName: form.loginName,
	        	status: form.status,
	        	mobile: form.mobile,
	        	password: '123456',
	        	identityCard: form.identityCard,
			}
			if(this.dialogTitle === '新增用户') {
				$.post(jz.createUser, o)
				.then(vm.getUserList)				
			}else{
				o.userId = vm.userID
				$.post(jz.updateUser, o)
				.then(vm.getUserList)
			}
			this.cancel()
		},
	}
}
</script>