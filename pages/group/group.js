// pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoad: true,
    albumImg: ''
  },
  is_load() {
    var dataLoad = false;
    this.setData({
      isLoad: dataLoad
    })
  },
  view_click() {
    console.log("view被点击了")
  },
  select_album(){
    // 系统API 让用户在相册中选择图片或者拍照
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        var img = res.tempFilePaths[0];
        this.setData({
          albumImg: img
        })
      },
    })
  },
  load_img() {
    console.log("加载完成")
  },
  input_in(event) {
    console.log("输入的内容", event)
  },
  input_focus(event) {
    console.log("获取焦点", event)
  },
  inout_blur(event) {
    console.log("失去焦点", event)
  },
  scroll_vY(event) {
    console.log("正在滚动", event)
  }
  
})