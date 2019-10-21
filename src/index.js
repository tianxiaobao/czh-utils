module.exports = {
    /**
     * 获取url参数值
     */
    getQueryParam(key, url) {
        let uri = url || window.location.search;
        let reg = new RegExp("" + key + "=([^&?#]*)", "i");
        let re = uri.match(reg);
        return re && re[1] || '';
    },
    /**
     * 获取url参数对象
     */
    getQueryObj(url) {
        let dt = url ? url : window.location.search;
        let qs = (dt || '').replace('?', ''),
            params = qs ? qs.split('&') : [],
            keyVal,
            result = {};
        params.forEach(item => {
            keyVal = item.split('=');
            result[keyVal[0]] = keyVal[1];
        });
        return result;
    },
    /**
     * 获取当前日期
     */
    getNowDate() {
        let nowDate = new Date();
        let date = nowDate.getDate();
        let month = nowDate.getMonth() + 1;
        let year = nowDate.getFullYear();
        return [year, month > 9 ? month : '0'+month, date > 9 ? date : '0'+date].join('-');
    },
    /**
     * 校验手机号
     */
    regPhone(phone) {
        let reg = /^1[3456789]\d{9}$/;
        return reg.test(phone);
    },
    /**
     * 校验身份证
     */
    regIDcard(idCard) { 
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
        return reg.test(idCard);
    },
    /**
     * 校验QQ
     */
    regQQ(qq) { 
        let reg = /^[1-9][0-9]{4,14}$/;
        return reg.test(qq);
    },
    /**
     * 校验邮箱
     */
    regEmail(email){
        let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);
    }
};