# protractor scenario test demo(protractor场景测试完整例子)

## install

**node version lower 4.x.x , protractor version should be lower 2.5.1**

- npm install 

- npm install -g protractor 

- webdriver-manager update

- npm install -g http-server

**attentsion**

```js
npm install phantomjs
PHANTOMJS_CDNURL=http://cnpmjs.org/downloads npm install phantomjs
```

## run test

1 http-server app

2 protractor protractor.conf.js --params.username=karma --params.password=test

## demo运行效果图

![登录页](https://mmbiz.qlogo.cn/mmbiz/E7ia3F4UicMx8RToqqORPicQNcVklxGXicdR4qEyibbiae9SiawjJfC2croOeq7eFLPIW08I2CQaDbIDNuZuHUTLiaVDwA/0?wx_fmt=jpeg)
![列表页](https://mmbiz.qlogo.cn/mmbiz/E7ia3F4UicMx8RToqqORPicQNcVklxGXicdRaLnI3m7BpmNwUKotZgflic9c2XaZt7ViaVVh8htibzXeFyAkpZuyiacmibg/0?wx_fmt=jpeg)
![内容页](https://mmbiz.qlogo.cn/mmbiz/E7ia3F4UicMx8RToqqORPicQNcVklxGXicdR25sOZVsK4XoGjrJia4csLD2LSGFV4DibcZ0AzV1svjNEpRfexxtt1ianw/0?wx_fmt=jpeg)
![结果页，非angular应用](https://mmbiz.qlogo.cn/mmbiz/E7ia3F4UicMx8RToqqORPicQNcVklxGXicdRJpDl5icmzlTOoAjpZtFF1icfrnxhsNlyn8I2qPlcf1HiczKLEQmnZkd2Q/0?wx_fmt=jpeg)
![首页，退出登录](https://mmbiz.qlogo.cn/mmbiz/E7ia3F4UicMx8RToqqORPicQNcVklxGXicdR2f6PgAdf9EcvmO4AmrY015tEicv0un1tKyFfYwnjWMMdDOQWsibNZFYA/0?wx_fmt=jpeg)

## test note:

- test timeout

```
fix: Replacing timeout with interval for compatibility with Protractor

timeout $http is not auto complete.

webdriver(protractor) all function return promise.

why jasmine,not mocha:protractor control flow is promise,jasmine2 support,but mocha not(need to use and assetion framework such as chai as promised.)
```

- access angular scope variable

```
bind scope variable to element,and check variaable(访问angular scope 变量可通过 evaluate.先绑定一个元素，然后选择变量名即可)
```

- not angular page test

```js
beforeEach(function(){
	browser.ignoreSynchronization = true;
	browser.get('/test/e2e/not_angular_page.html');
});
```
- init some data ,such as login.

```
//protractor.conf.js
onPrepare:function(){
	//todo,login
}

```

- check current page 

```js
function isPage(expectUrl,waitUrl){
	waitUrl = waitUrl || expectUrl;
	browser.wait(function() {
		return browser.driver.getCurrentUrl().then(function(url) {
			return (waitUrl).test(url);
		});
	},5000);
	//Jasmine expect statement : compare actual and expected value
	expect(browser.driver.getCurrentUrl()).toMatch(expectUrl);
}
```

### Note(scenario test include the following )

- not angular page location to angular page
- operation not angular page dom by protractor
- angular page location to not angular page
- operation angular page dom by protractor(by model,by css)
- access angular scope variable by evaluate,(variable types can be general , object and function.) 
