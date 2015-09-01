function Node(element) {
	this.element = element;
	this.next = null; //后继节点
	this.previous = null; //前驱节点
}

function List() {
		this.head = new Node('head');
		this.find = find;
		this.findPrevious = findPrevious;
		this.insert = insert;
		this.remove = remove;
		this.display = display;
		this.findLast = findLast;
		this.disReverse = disReverse;
		this.advance = advance;
		this.back = back;
		this.show = show;
	}
	/*查找元素*/

function find(item) {
		var current = this.head;
		while (current && current.element != item) {
			current = current.next;
		}
		return current;
	}
	//找到要删除元素的前一个节点

function findPrevious(item) {
	var current = this.head;
	while (current.next && current.next.element != item) {
		current = current.next;
	}
	return current;
}

function findLast() {
		var current = this.head;
		while (current.next) {
			current = current.next;
		}
		return current;
	}
	/*
	 * item：将新元素插入item元素之后
	 * newElement：新元素
	 */

function insert(newElement, item) {
	var current = this.find(item);
	var newNode = new Node(newElement);
	if (current.next) {
		newNode.next = current.next; //顺序不能反
		newNode.previous = current; //新节点的前驱指针指向current
		current.next.previous = newNode;
		current.next = newNode;
	} else {
		current.next = newNode;
		newNode.previous = current;
	}
}

function display() {
	var curNode = this.head;
	var arrs = [];
	while (curNode) {
		arrs.push(curNode.element);
		curNode = curNode.next;
	}
	return arrs;
}

function remove(item) {
	var current = this.find(item); //找到要删除的节点
	if (current.next) {
		current.previous.next = current.next;
		current.next.previous = current.previous;
		current.next = null;
		current.previous = null;
	} else {
		current.previous.next = null;
		current.previous = null;
	}
}

function disReverse() {
	var current = this.findLast();
	var arrs = [];
	while (current.previous) {
		arrs += current.element;
		current = current.previous;
	}
	return arrs;
}

function show(n) {
	var index = 0;
	var current = this.head;
	while (current.next && index < n) {
		current = current.next;
		index++;
	}
	if (index != n) {
		return false;
	}
	return current;
}

function advance(n, m) {
	var current = this.show(n);
	var index = 0;
	while (current.next && index < m) {
		current = current.next;
		index++;
	}
	if (index != m) {
		return false;
	}
	return current;
}

function back(n, m) {
	var current = this.show(n);
	var index = 0;
	while (current.previous && index < m) {
		current = current.previous;
		index++;
	}
	if (index != m) {
		return false;
	}
	return current;
}