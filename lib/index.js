"use strict";

module.exports = {
    /**
     * 获取url参数值
     */
    getQueryParam: function getQueryParam(key, url) {
        var uri = url || window.location.search;
        var reg = new RegExp("" + key + "=([^&?#]*)", "i");
        var re = uri.match(reg);
        return re && re[1] || '';
    },

    /**
     * 获取url参数对象
     */
    getQueryObj: function getQueryObj(url) {
        var dt = url ? url : window.location.search;
        var qs = (dt || '').replace('?', ''),
            params = qs ? qs.split('&') : [],
            keyVal = void 0,
            result = {};
        params.forEach(function (item) {
            keyVal = item.split('=');
            result[keyVal[0]] = keyVal[1];
        });
        return result;
    },

    /**
     * 获取当前日期
     */
    getNowDate: function getNowDate() {
        var nowDate = new Date();
        var date = nowDate.getDate();
        var month = nowDate.getMonth() + 1;
        var year = nowDate.getFullYear();
        return [year, month > 9 ? month : '0' + month, date > 9 ? date : '0' + date].join('-');
    },

    /**
     * 校验手机号
     */
    regPhone: function regPhone(phone) {
        var reg = /^1[3456789]\d{9}$/;
        return reg.test(phone);
    },

    /**
     * 校验身份证
     */
    regIDcard: function regIDcard(idCard) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(idCard);
    },

    /**
     * 校验QQ
     */
    regQQ: function regQQ(qq) {
        var reg = /^[1-9][0-9]{4,14}$/;
        return reg.test(qq);
    },

    /**
     * 校验邮箱
     */
    regEmail: function regEmail(email) {
        var reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);
    }
};