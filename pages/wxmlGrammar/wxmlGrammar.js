// pages/wxmlGrammar/wxmlGrammar.js
Page({

  data: {
    nowTime: new Date().toLocaleString(),
    age: 15,
    isActive: false,
    score: 80,
    isShow: true,
    video: ['大话西游', '功夫', '少林足球'],
    nummber1: [[1, 2, 3],[4, 5, 6],[7, 8]]
  },

  clk_v1() {
    this.setData({
      // '!'给Boolean类型数据取反
      isActive: !this.data.isActive
    })
  },

  //页面加载调用函数 
  onLoad() {
    // 添加定时器，使用setData实现每秒传值
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  }

})