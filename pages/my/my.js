// pages/my/my.js
const types = ['default', 'primary', 'warn']
Page({
  /**
   * 页面的初始数据
   */
  data: {
    na_tabbar: {
      na_loading: false,
      na_show: true,
      na_animated: true,
      na_back: false,
      na_backcolor: "#D9FFFF",
      na_text: '西柚',
      na_icon: ''
    },
    showActionsheet: false,
    groups: [{
        text: '拍照',
        value: 1
      },
      {
        text: '上传图片',
        value: 2
      },
      {
        text: '上传视频',
        value: 3
      },
      {
        text: '从微信聊天导入',
        value: 4
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync("userInfo") == '') {

    } else {
      var u_i = wx.getStorageSync("userInfo");
      var a = 'na_tabbar.na_icon';
      this.setData({
        [a]: u_i.avatarUrl
      });
    }
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

  },
  getFile: function () {
    this.setData({
        showActionsheet: true
    })
  },
  close: function () {
    this.setData({
      showActionsheet: false
    })
  },
  btnClick(e) {
    console.log(e)
    this.close()
    if(e.detail.value == 1){
      //拍照
      wx.chooseImage({
        count: 1,
        sourceType: [ 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
        }
      })
    }else if(e.detail.value == 2){
      //图片
      wx.chooseImage({
        count: 10,
        sourceType: ['album'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          console.log(res.tempFilePaths)
          wx.previewImage({
            current: res.tempFilePaths[0], // 当前显示图片的http链接
            urls: res.tempFilePaths // 需要预览的图片http链接列表
          })
        }
      })
    }else if(e.detail.value == 3){
      //视频
      wx.chooseVideo({
        sourceType: ['album'],
        maxDuration: 60,
        camera: 'back',
        success(res) {
          console.log(res.tempFilePath)
        }
      })
    }else if(e.detail.value == 4){
      //聊天
      wx.chooseMessageFile({
        count: 1,
        type: 'file',
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles
        }
      })
    }
  },
  getVideo: function (){
    //录音
    wx.navigateTo({
      url: '../voice/voice'
    })
  },
  mock: function(){
    wx.navigateTo({
      url: '../mock/mock'
    })
  }
})