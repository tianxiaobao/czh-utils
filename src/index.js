module.exports = {
    /**
     * 获取url参数值
     */
    getQueryParam(key, url) {
        const uri = url || window.location.search;
        const reg = new RegExp(`${ key }=([^&?#]*)`, "i");
        const re = uri.match(reg);
        return re && re[1] || '';
    },
    /**
     * 获取url参数对象
     */
    getQueryObj(url) {
        const dt = url ? url : window.location.search;
        const qs = (dt || '').replace('?', '');
        const params = qs ? qs.split('&') : [];
        const result = {};
        let keyVal;
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
        const nowDate = new Date();
        const date = nowDate.getDate();
        const month = nowDate.getMonth() + 1;
        const year = nowDate.getFullYear();
        return [year, month > 9 ? month : `0${month}`, date > 9 ? date : `0${date}`].join('-');
    },
    /**
     * 校验手机号
     */
    regPhone(phone) {
        const reg = /^1[3456789]\d{9}$/;
        return reg.test(phone);
    },
    /**
     * 校验身份证
     */
    regIDcard(idCard) { 
        const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
        return reg.test(idCard);
    },
    /**
     * 校验QQ
     */
    regQQ(qq) { 
        const reg = /^[1-9][0-9]{4,14}$/;
        return reg.test(qq);
    },
    /**
     * 校验邮箱
     */
    regEmail(email) {
        const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);
    }
};