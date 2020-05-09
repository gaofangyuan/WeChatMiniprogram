// pages/home/home.js
// getApp()获取App()产生的示例对象
const app = getApp();
console.log(app.globalData.globaVar_1);
console.log(app.globalData.globaVar_2);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    number : 0,
    content: [
      {id : "1", name : "高方原", age : "24", sex : "男", work : "前端"},
      {id : "2", name : "张三", age : "30", sex : "男", work : "后端"}
    ],
    listd: []
  },
  plus_1() {
    this.setData({
      number: this.data.number + 1
    })
  },
  reduce_1() {
    this.setData({
      number: this.data.number - 1
    })
  },
  gain_userInfo(user) {
    console.log(user)
  },
  /**
   * 生命周期函数--监听页面加载 http://123.207.32.32:8000/recommend
   */
  onLoad() {
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res);
        const data = res.data.listd;
        this.setData({
          listd: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})