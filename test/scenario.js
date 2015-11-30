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
	//场景测试欢迎页
	describe('login page',function(){
		beforeEach(function(){
			browser.ignoreSynchronization = true;
			browser.get('/page/login.html');				
		});
		it('title',function(){
			expect(browser.getTitle()).toEqual('login');
			browser.sleep(3000);	
		});
	});
})