import Vue from 'vue';
import {
	cbs,
	gbs
} from './settings.js';

var ajax = function(type, data, fn) {
	this.$store.dispatch('show_loading');
	var datas = data 
	if(datas.username === 'jz-1' && datas.password === '123456'){
		$.ajax({
			url: testAPI.getToken,
			type: 'POST',
			data: {
				username: datas.username,
				password: datas.password
			},
			success: function(d){
				if(d && d.success && d.token){
					fn({token: d.token})
				}
			}
		})		
	} else {
		//调用全局配置错误回调
		cbs.statusError.call(this, {status: 404, msg: '登录出错'});
	}
	this.$store.dispatch('hide_loading');	
}

module.exports = {
	//用户模块
	user: {
		login(data, fn) {
			ajax.call(this, 'post', data, fn);
		}
	}

};