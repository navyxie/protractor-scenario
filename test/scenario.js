describe('app scenario',function(){
	var userParams = browser.params;
	//判断某条URL是否是当前指定URL
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
	//登录页
	describe('login page',function(){
		// not one angular page , login redirect to angular app.
		beforeAll(function(){
			browser.ignoreSynchronization = true;
			browser.get('/page/login.html');				
		});
		it('title',function(){
			expect(browser.getTitle()).toEqual('login');	
		});
		it('input username and password,redirect to angular app.',function(){
			element(by.id('username')).sendKeys(userParams.username);
			element(by.id('password')).sendKeys(userParams.password);
			element(by.id('loginBtn')).click().then(function(){
				expect(browser.getTitle()).toEqual('index');
			});
		});
		afterAll(function(){
			browser.ignoreSynchronization = false;
		});
	});
	//首页
	describe('index page',function(){
		// one angular app page
		it('title',function(){
			expect(browser.getTitle()).toEqual('index');	
		});
		it('access scope variable',function(){
			element(by.id('evaluateContainer')).evaluate('name').then(function(v){
				expect(v).toEqual('karma-unit-demo');
			});
		});
		it('access scope function',function(){
			element(by.id('evaluateContainer')).evaluate('testFn()').then(function(fn){
				expect(fn).toBe(true);
			});
		});
		it('access scope variable by ng-model',function(){
			element(by.model('name')).evaluate('name').then(function(v){
				expect(v).toEqual("");
			});
		});
		it('filter list',function(){
			element(by.model('name')).clear();
			expect(element.all(by.css('.list ul li')).count()).toBe(6);
			element(by.model('name')).sendKeys("angular");
			expect(element.all(by.css('.list ul li')).count()).toBe(2);
		});
		it('click a tag to content page.',function(){
			var firstLi = element.all(by.css('.list ul li')).first();
			firstLi.element(by.tagName('a')).click().then(function(){
				isPage(/list\/1/);
			});
		});
	});
	//详情页
	describe('index content page',function(){
		//angualr single page app.
		it('title',function(){
			isPage(/list\/1/);	
		});
		it('click a tag redirect to not angular page.',function(){
			element(by.css('.list a')).click().then(function(){
				isPage(/page\/result.html/);
			});
		});
	});
	//结束页
	describe('operation not angular page',function(){
		//angular app redirect to not one angular page
		beforeAll(function(){
			//because current page is not one angular page , set ignoreSynchronization true to ignore capture the angular object
			browser.ignoreSynchronization = true;
		});
		it('input text',function(){
			var inputText = "input I can get all.";
			element(by.id('result')).sendKeys(inputText);
			expect(element(by.id('result')).getAttribute('value')).toBe(inputText);
		});
		afterAll(function(){
			browser.ignoreSynchronization = false;
		});
	});
})