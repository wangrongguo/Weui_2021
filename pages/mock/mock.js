// pages/mock/mock.js
const mockjs = require('../../miniprogram_npm/mockjs/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    na_tabbar: {
      na_loading: false,
      na_show: true,
      na_animated: true,
      na_back: true,
      na_backcolor: "#D9FFFF",
      na_text: 'Mockjs',
      na_icon: '../../images/caomei_select.png'
    },
    w_height:0,
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      w_height:wx.getSystemInfoSync().windowHeight
    })
    var data = mockjs.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        'foo':function(){
          return mockjs.mock('@cword(3, 5)')
        },
        'name': function () {
          return mockjs.mock('@ctitle(3, 5)')
        },
        'coment':function (){
          return mockjs.mock('@cparagraph(1, 3)')
        },
        'create_time':function(){
          return mockjs.mock('@now()')
        },
        'user_name':function(){
          return mockjs.mock('@cname()')
        },
        'city':function(){
          return mockjs.mock('@province()')
        }
      }]
    })
    this.setData({
      dataList: data.list
    })
    console.log(this.data.dataList)
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
    
    wx.stopPullDownRefresh()
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
  onRefresh() {
    console.log("onRefresh")
    if (this._freshing) return
    this._freshing = true
    var data = mockjs.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        'foo':function(){
          return mockjs.mock('@ctitle(3, 5)')
        },
        'name': function () {
          return this.foo
        },
        'coment':function (){
          return mockjs.mock('@cparagraph(1, 20)')
        },
        'create_time':function(){
          return mockjs.mock('@now()')
        },
        'user_name':function(){
          return mockjs.mock('@cname()')
        },
        'city':function(){
          return mockjs.mock('@province()')
        }
      }]
    })
    
    console.log(this.data.dataList)
    setTimeout(() => {
      this.setData({
        triggered: false,
        dataList: data.list
      })
      this._freshing = false
    }, 2000)
  },
  onRestore(e) {
    console.log('onRestore:', e)
    wx.showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 2000
    })
  }
})