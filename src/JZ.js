var api_url = 'http://10.2.10.220:5050/api/'
module.exports = {
	initMenusService: 'http://10.2.15.66:8081/center-pre-interface/web/permission/tsysRoleModlePermission/initMenusService',
	tableRowStyle: {
	  height: '50px', 'line-height': '50px', 'text-align': 'center'
	},
	getUserList: api_url + 'user/user/list',
	createUser: api_url + 'user/user/create',
	updateUser: api_url + 'user/user/updateDetail',
	delUser: api_url + 'user/user/delete',
	// login: api_url + 'user/login/login',
	login: 'http://10.2.15.96:8080/center-pre-interface/login/login'
}