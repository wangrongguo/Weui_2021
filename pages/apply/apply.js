// pages/apply/apply.js
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
      na_text: '柠檬',
      na_icon: ''
    },
    grid_data:[{
      title:'add',
      icon:'add',
      color:'black'
    },{
      title:'clip',
      icon:'clip',
      color:''
    },{
      title:'comment',
      icon:'comment',
      color:''
    },{
      title:'email',
      icon:'email',
      color:''
    },{
      title:'error',
      icon:'error',
      color:''
    },{
      title:'me',
      icon:'me',
      color:''
    },{
      title:'lock',
      icon:'lock',
      color:''
    },{
      title:'location',
      icon:'location',
      color:''
    },{
      title:'music',
      icon:'music',
      color:''
    },{
      title:'note',
      icon:'note',
      color:''
    },{
      title:'pad',
      icon:'pad',
      color:''
    },{
      title:'setting',
      icon:'setting',
      color:''
    },{
      title:'search',
      icon:'search',
      color:''
    },{
      title:'delete',
      icon:'delete',
      color:''
    },{
      title:'help',
      icon:'help',
      color:''
    },{
      title:'home',
      icon:'home',
      color:''
    },{
      title:'info',
      icon:'info',
      color:''
    },{
      title:'tag',
      icon:'tag',
      color:''
    },{
      title:'shop',
      icon:'shop',
      color:''
    },{
      title:'star',
      icon:'star',
      color:''
    },{
      title:'time',
      icon:'time',
      color:''
    },{
      title:'more',
      icon:'more',
      color:''
    },{
      title:'mike',
      icon:'mike',
      color:''
    },{
      title:'pause',
      icon:'pause',
      color:''
    },{
      title:'back2',
      icon:'back2',
      color:''
    },{
      title:'imac',
      icon:'imac',
      color:''
    },{
      title:'play',
      icon:'play',
      color:''
    }],
    grid_data_:[{
      title:'baixiangguo',
      icon:'../../images/mianxingbaixiangguo.png',
      color:'black'
    },{
      title:'boluo',
      icon:'../../images/mianxingboluo.png',
      color:''
    },{
      title:'caomei',
      icon:'../../images/mianxingcaomei.png',
      color:''
    },{
      title:'chengzi',
      icon:'../../images/mianxingchengzi.png',
      color:''
    },{
      title:'ganzhe',
      icon:'../../images/mianxingganzhe.png',
      color:''
    },{
      title:'guiyuan',
      icon:'../../images/mianxingguiyuan.png',
      color:''
    },{
      title:'hamigua',
      icon:'../../images/mianxinghamigua.png',
      color:''
    },{
      title:'hongpingguo',
      icon:'../../images/mianxinghongpingguo.png',
      color:''
    },{
      title:'music',
      icon:'../../images/mianxinghongxinyou.png',
      color:''
    },{
      title:'note',
      icon:'../../images/mianxinghuolongguo.png',
      color:''
    },{
      title:'pad',
      icon:'../../images/mianxinglanmei.png',
      color:''
    },{
      title:'setting',
      icon:'../../images/mianxingli.png',
      color:''
    },{
      title:'search',
      icon:'../../images/mianxingliulian.png',
      color:''
    },{
      title:'delete',
      icon:'../../images/mianxinglizhi.png',
      color:''
    },{
      title:'help',
      icon:'../../images/mianxinglizi.png',
      color:''
    },{
      title:'home',
      icon:'../../images/mianxingmangguo.png',
      color:''
    },{
      title:'info',
      icon:'../../images/mianxingmihoutao.png',
      color:''
    },{
      title:'tag',
      icon:'../../images/mianxingningmeng.png',
      color:''
    },{
      title:'shop',
      icon:'../../images/mianxingniuyouguo.png',
      color:''
    },{
      title:'star',
      icon:'../../images/mianxingpipa.png',
      color:''
    },{
      title:'time',
      icon:'../../images/mianxingputao.png',
      color:''
    },{
      title:'more',
      icon:'../../images/mianxingsangshen.png',
      color:''
    },{
      title:'mike',
      icon:'../../images/mianxingshanzha.png',
      color:''
    },{
      title:'pause',
      icon:'../../images/mianxingshanzhu.png',
      color:''
    },{
      title:'back2',
      icon:'../../images/mianxingshengnvguo.png',
      color:''
    },{
      title:'imac',
      icon:'../../images/mianxingshiliu.png',
      color:''
    },{
      title:'play',
      icon:'../../images/mianxingshizi.png',
      color:''
    }],
    currentTab:0,
    w_height:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      w_height:wx.getSystemInfoSync().windowHeight
    })
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
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  //滑动切换
  changeTab: function (e) {
    console.log(e)
    var that = this;
    if (this.data.currentTab === e.detail.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.detail.current
      })
    }
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
})