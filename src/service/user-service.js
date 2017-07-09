/*
* @Author: Administrator
* @Date:   2017-07-09 19:03:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-09 19:29:28
*/

'use strict';
var _mm = require('util/mm.js');

var _user = {
	//检查登录状态
	checkLogin: function(resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/user/get_user_info.do'),
			method: 'POST',
			success:　resolve,
			error: reject
		});
	},
	//退出
	logout: function(resolve, reject) {
		_mm.request({
			url: _mm.getServerUrl('/user/logout.do'),
			method: 'POST',
			success:　resolve,
			error: reject
		});
	}
};
module.exports = _user;