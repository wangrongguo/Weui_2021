// pages/index/index_one/index_one.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    w_height:100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    console.log(app.data.w_height)
    this.setData({
      w_height:app.data.w_height
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  }
})
//插件控制器
Component({
  properties: {
    w_height: {
      type: String,
      value: ''
    },
    triggered: {
      type: Boolean,
      value: false
    },
    index_one_data: {
      type: Array, 
      value: []
    }
  },
  methods:{
    index_one_methos(e){
      console.log(e)
      wx.navigateTo({
        url: '../logs/logs'
      })
    },
    onRefresh() {
      console.log("onRefresh")
      if (this._freshing) return
      this._freshing = true
      setTimeout(() => {
        this.setData({
          triggered: false,
        })
        this._freshing = false
      }, 3000)
    },
    onRestore(e) {
      console.log('onRestore:', e)
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }
  }
})