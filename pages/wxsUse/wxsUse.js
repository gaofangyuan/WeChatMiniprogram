// pages/wxsUse/wxsUse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: '16.1251222a',
    title: ['衣服', '裤子', '鞋帽'],
    time: 1368360620
  },
  clk_item(event) {
    console.log(event);
    const dataset = event.target.dataset;
    var vIndex = dataset.v_index;
    var vItem = dataset.v_item;
    console.log(vIndex, vItem);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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