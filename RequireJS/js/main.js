require.config({
		paths: {
			"jquery": ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
			"a": "js/a"
		}
	})
/**
 *　require.config({

　　　　shim: {

　　　　　　'underscore':{
　　　　　　　　exports: '_'
　　　　　　},

　　　　　　'backbone': {
　　　　　　　　deps: ['underscore', 'jquery'],
　　　　　　　　exports: 'Backbone'
　　　　　　}

　　　　}

　　}); 
 */
	//可以使用shim对非AMD标准的插件进行“垫”操作，例如JQuery.form,每个模块要定义（
	//需要写清楚参数：1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。
	//可以指定基路径：　baseUrl: "js",则在写paths的时候，可以不写路径，直接写文件名（不用写后缀）
	//用法：
	/*require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){

	　　　　 some code here

	　　});
	*/