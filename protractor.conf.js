//初始化测试地址参数开始
var baseUrlParams = {
    protocol:'http',
    hostname:'localhost',
    port:8080
};
initBaseUrlParams();
function initBaseUrlParams() {
  process.env.protocol && (baseUrlParams.protocol = process.env.protocol);
  process.env.hostname && (baseUrlParams.hostname = process.env.hostname);
  process.env.port && (baseUrlParams.port = process.env.port);
};
//初始化测试地址参数结束
exports.config = {
  //测试参数，登录账号，密码和交易密码
  params:{
    phone:'',
    login_pwd:'',
    trade_pwd:'',
    testResult:{
      success:0,
      failure:0
    }
  },

  allScriptsTimeout: 60000,

  specs: [
    'test/scenario.js'
  ],

  capabilities:{
    //phantomjs,firefox,chrome
    'browserName':'firefox'
  },

  // capabilities: {
  //   'browserName': 'phantomjs',
  //   'phantomjs.binary.path': require('phantomjs').path,
  //   'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  // },

  baseUrl: baseUrlParams.protocol+':'+'//'+baseUrlParams.hostname+':'+baseUrlParams.port,

  framework: 'jasmine2',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },

  onPrepare: function(){
    // jasmine.getEnv().addReporter(new function() {
    //   this.specDone = function(result) {
    //     if(result.status !== 'passed'){
    //       browser.params.testResult.failure += 1;
    //     }else{
    //       browser.params.testResult.success += 1;
    //     }
    //   };
    // });
    //login
    // browser.driver.get(env.baseUrl + '/login.html');
    // browser.driver.findElement(by.id('username')).sendKeys('Jane');
    // browser.driver.findElement(by.id('password')).sendKeys('1234');
    // browser.driver.findElement(by.id('clickme')).click();

    // // Login takes some time, so wait until it's done.
    // // For the test app's login, we know it's done when it redirects to
    // // index.html.
    // return browser.driver.wait(function() {
    //   return browser.driver.getCurrentUrl().then(function(url) {
    //     return /index/.test(url);
    //   });
    // }, 10000);
  },

  //ng-app rootElement , selector class,id,tag
  rootElement: 'html'
};