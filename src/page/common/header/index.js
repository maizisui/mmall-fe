/*
* @Author: Administrator
* @Date:   2017-07-09 19:38:55
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-09 20:07:00
*/

'use strict';
require('./index.css');
var _mm = require('util/mm.js');

//通用页面头部
var header = {
	init: function() {
		this.bindEvent();

	},
	onLoad: function() {
		var keyword = _mm.getUrlParam('keyword');
		//keyword存在，则回填输入框
		if (keyword) {
			$('#search-input').val(keyword);
		}
	},
	bindEvent: function() {
		var _this = this;
		// 点击搜索按钮后做搜索提交
		$('#search-btn').click(function() {
			_this.searchSubmit();
		});
		// 输入回车后做搜索提交
		$('#search-input').keyup(function(e) {
			// 13是enter键
			if (e.keyCode === 13) {
				_this.searchSubmit();
			}
		})
	},
	searchSubmit: function() {
		var keyword = $.trim($('#search-input').val());
		// 如果提交的时候有keyword，则正常跳转到list页
		if (keyword) {
			window.location.href = './list.html?keyword=' + keyword;
		}
		// 如果keyword为空，则直接返回首页
		else {
			_mm.goHome();
		}
	}

};

header.init();