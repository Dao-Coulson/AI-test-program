Page({
	onLoad: function () {
		const todoList = wx.getStorageSync('todoList');
		if (todoList) {
			this.setData({ todoList });
		}
	},
	saveTodoList: function () {
		wx.setStorageSync('todoList', this.data.todoList);
	},
	data: {
		todoList: [
			{ text: '完成微信小程序开发', completed: false },
			{ text: '整理办公桌', completed: false },
			{ text: '学习新技能', completed: false },
			{ text: '锻炼身体', completed: true },
			{ text: '参加线上会议', completed: false }
		],
		inputValue: ''
	},

  addItem: function () {
    if (!this.data.inputValue) return;
    this.setData({
      todoList: [...this.data.todoList, { text: this.data.inputValue, completed: false }],
      inputValue: ''
		});
		this.saveTodoList();
  },

  removeItem: function (e) {
    const index = e.currentTarget.dataset.index;
    const todoList = this.data.todoList.filter((item, idx) => idx !== index);
		this.setData({ todoList });
		this.saveTodoList();
  },

  toggleComplete: function (e) {
    const index = e.currentTarget.dataset.index;
    const todoList = this.data.todoList.map((item, idx) => {
      if (idx === index) {
        item.completed = !item.completed;
      }
      return item;
    });
		this.setData({ todoList });
		this.saveTodoList();
  },

  bindKeyInput: function (e) {
    this.setData({ inputValue: e.detail.value });
  }
})
