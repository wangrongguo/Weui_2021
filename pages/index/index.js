// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    na_tabbar: {
      na_loading: false,
      na_show: true,
      na_animated: true,
      na_back: false,
      na_backcolor: "#D9FFFF",
      na_text: '橙子',
      na_icon: '../../images/caomei_select.png'
    },
    dialogShow: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    show_user: false,
    mask_user: false,
    title_user: '授权',
    buttons_user: [{
      text: '取消'
    }, {
      text: '确定',
    }],
    tabs: [],
    activeTab: 0,
    w_height: 500,
    index_one_data:[]
  },
  // 事件处理函数
  bindViewTap(e) {
    console.log(e)
    var that = this;
    if (e.detail.index == 0) {

    } else {
      wx.navigateTo({
        url: '../logs/logs'
      })
    }
    that.setData({
      dialogShow: false
    })

  },
  onLoad() {
    console.log(this.data.userInfo);
    console.log(wx.getSystemInfoSync().windowHeight)
    this.setData({
      w_height:wx.getSystemInfoSync().windowHeight
    })
    //本地是否有用户信息
    if (wx.getStorageSync("userInfo") == '') {
      this.setData({
        show_user: true,
        mask_user: true,
      })
    } else {
      var u_i = wx.getStorageSync("userInfo");
      var a = 'na_tabbar.na_icon';
      this.setData({
        userInfo: u_i,
        hasUserInfo: true,
        [a]: u_i.avatarUrl
      });
    }

    const tabs = [
      {
        title: '技术开发',
        title2: '小程序开发进阶',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
        desc: '本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。',
      },
      {
        title: '产品解析',
        title2: '微信小程序直播',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
        desc: '微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。',
      },
      {
        title: '运营规范',
        title2: '常见问题和解决方案',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg',
        desc: '提高审核质量',
      },
      {
        title: '营销经验',
        title2: '流量主小程序',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg',
        desc: '本课程共四节，将分阶段为开发者展示如何开通流量主功能、如何接入广告组件、不同类型小程序接入的建议，以及如何通过工具调优小程序变现效率。',
      },
      {
        title: '高校大赛',
        title2:'2020中国高校计算机大赛',
        img: 'http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg',
        desc: '微信小程序应用开发赛',
      },
    ]
    this.setData({ tabs })

    const index_one_data = [{
      title:'1'
    },{
      title:'2'
    },{
      title:'3'
    },{
      title:'4'
    },{
      title:'5'
    },{
      title:'6'
    },{
      title:'7'
    },{
      title:'8'
    },{
      title:'9'
    },{
      title:'10'
    },{
      title:'11'
    },{
      title:'12'
    },{
      title:'13'
    },{
      title:'14'
    }]

    this.setData({ index_one_data })

  },
  getUserProfile(e) {
    console.log(e)
    if (e.currentTarget.dataset.index == 0) {

    } else {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          var a = 'na_tabbar.na_icon';
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            [a]: res.userInfo.avatarUrl
          });
          wx.setStorageSync('userInfo', res.userInfo)
        }
      })
    }

    this.setData({
      show_user: false,
      mask_user: false
    })


  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onTabClick(e) {
    console.log("onTabClick")
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
    
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },
  handleClick(e) {
    
  }
})
