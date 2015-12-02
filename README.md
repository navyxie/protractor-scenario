# protractor scenario test demo

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

2 protractor protractor.conf.js


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
