```
npm install czh-utils
```

```
import {方法} from 'czh-utils';
```

```
方法简介：

获取url参数值，url不传默认取浏览器url
调用：getQueryParam(key, url)
return String;

获取url参数对象，url不传默认取浏览器url
调用：getQueryObj(url)
return Object;

获取当前日期，返回值格式'2019-10-18'
调用：getNowDate()
return String;

校验手机号
调用：regPhone(phone)
return Boolean;

校验身份证
调用：regIDcard(idCard)
return Boolean;

校验QQ
调用：regQQ(qq)
return Boolean;

校验邮箱
调用：regEmail(email)
return Boolean;
```