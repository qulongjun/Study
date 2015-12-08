//model,理解成一个数据个体
var People = Backbone.Model.extend({
	//每个人都有他自身的属性
	defaults: {
		"name": null
	}
});
//collection，理解成数据队列
var Peoples = Backbone.Collection.extend({
	//对集合的类型进行设定，这里设定为人的集合
	model: People
});
//view，每个伟大的视图背后，都有默默的collection或者model
var View = Backbone.View.extend({
	//设定这个视图的dom元素，也可以通过设定tagName, className, id 或者 attributes。如果没有特别设定，Backbone会为它套上空的div标签
	el: $("body"),
	initialize: function() {
		//集合的事件绑定，用来自动更新视图
		this.collection.bind("add", this.addOne);
		this.collection.bind("remove", this.delOne);
	},
	//使用了jquery的on方法，提供对视图的事件代理
	events: {
		"click #add": "add",
		"click .del": "del",
		"click #clear": "clear",
	},
	add: function() {
		var name = prompt("请输入人名");
		//创建一个新model
		var people = new People({
			'name': name
		});
		//并添加到人员队列中,会触发collection的add事件
		peoples.add(people);
	},
	del: function(obj) {
		//获取要删除的是哪个model
		var delWho = obj.currentTarget.id;
		//会触发collection的remove事件
		peoples.remove(delWho);
	},
	//当collection发生了add事件
	addOne: function(model) {
		//每个model会随机生成一个唯一的cid，用来识别，区分
		$("#list").append("<li>" + model.get('name') + "说：hello world！<button class='del' id='" + model.cid + "'>删除</button></li>");
	},
	//当collection触发了remove事件
	delOne: function(model) {
		//使用jquery的remove方法，删除dom和解除绑定的事件
		$('#' + model.cid).parent().remove();
	},
	//清空数据
	clear: function() {
		this.collection.reset();
		this.clearAll();
	},
	//清空dom
	clearAll: function() {
		$('#list').empty();
	}
});
//实例化
var peoples = new Peoples;
var app = new View({
	collection: peoples
});