// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    na_tabbar: {
      na_loading: false,
      na_show: true,
      na_animated: true,
      na_back: true,
      na_backcolor: "#D9FFFF",
      na_text: '日志'
    },
    vtabs: [],
    activeTab: 0,
    w_height:0,
    index_one_data: [],
    titles_name:''
  },
  onLoad() {
    this.setData({
      w_height:wx.getSystemInfoSync().windowHeight
    })
    const titles = ['热搜推荐', '手机数码', '家用电器',
      '生鲜果蔬', '酒水饮料', '生活美食', 
      '美妆护肤', '个护清洁', '女装内衣', 
      '男装内衣', '鞋靴箱包', '运动户外', 
      '生活充值', '母婴童装', '玩具乐器', 
      '家居建材', '计生情趣', '医药保健', 
      '时尚钟表', '珠宝饰品', '礼品鲜花', 
      '图书音像', '房产', '电脑办公']
    const vtabs = titles.map(item => ({title: item}))
    this.setData({vtabs})

    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })

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
  onTabCLick(e) {
    const index = e.detail.index
    console.log('tabClick', index)
    const index_one_data = [{
      title:'11'
    },{
      title:'22'
    },{
      title:'33'
    },{
      title:'44'
    },{
      title:'55'
    },{
      title:'66'
    },{
      title:'77'
    },{
      title:'88'
    },{
      title:'99'
    },{
      title:'1010'
    },{
      title:'1111'
    },{
      title:'1212'
    },{
      title:'1313'
    },{
      title:'1414'
    }]

    this.setData({ index_one_data })
    console.log(this.data.vtabs)
    this.setData({
      activeTab:index,
      titles_name:this.data.vtabs[index].title
    })
  },

  onChange(e) {
    const index = e.detail.index
    console.log('change', index)
  }
})
