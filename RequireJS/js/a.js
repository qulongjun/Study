//define:如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。


define(["b"],function(b){
	alert("b的计算结果为："+b.add(1,1));
    function fun1(){
      alert("it works");
    }

    fun1();
})