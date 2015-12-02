var colors = require('colors');

//设置测试服务气参数
!function(){
	console.log([
		'  \nRun test tips : \n',
		'    Default e2e test backend server url is \'http:\/\/localhost:8006\' \n',
		'    You can change the server url such as : \n',
		'      protocol=http hostname=localhost port=8006 protractor protractor.conf.js --params.username=karma --params.password=test',
		'\n'
	].join('\n').green.bgBlack);
}();

//检查测试参数
!function(){
	var phone = browser.params.phone;
	var login_pwd = browser.params.login_pwd;
	var trade_pwd = browser.params.trade_pwd;
	if(!phone && !login_pwd && !trade_pwd){
		console.log('\n');
		console.log([
			'	You must run e2e test such as : \n',
			'		protractor protractor.conf.js --params.username=karma --params.password=test'
		].join('\n').red);
		console.log('\n');
		process.exit('e2e test missing params.');
	}
}();