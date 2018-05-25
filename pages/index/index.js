//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: ['../../images/banner_1.jpg', '../../images/banner_1.jpg'],
    classImgUrls: [
      {
        imageUrl: '//img20.360buyimg.com/jdphoto/jfs/t14248/291/2237344671/7958/3d5d5e09/5a77ff15N55150676.png.webp',
        text: '京东超市'
      },
      {
        imageUrl: '//img11.360buyimg.com/jdphoto/jfs/t16168/327/1883619399/6648/33d78e2b/5a780febNaa014b66.png.webp',
        text: '充值缴费'
      },
      {
        imageUrl: '//img10.360buyimg.com/jdphoto/jfs/t17563/304/456748134/7017/6e03894b/5a77ff39N92989d09.png.webp',
        text: '京东服饰'
      },
      {
        imageUrl: '//img13.360buyimg.com/jdphoto/jfs/t14725/117/2201389848/7962/19258170/5a77ff25Nd489ed1d.png.webp',
        text: '京东生鲜'
      },
      {
        imageUrl: '//img12.360buyimg.com/jdphoto/jfs/t17836/299/437406255/6279/2721a1d4/5a77ff54N6014d885.png.webp',
        text: '物流查询'
      },
    ],
    classImgUrls1: [
      {
        imageUrl: '//img30.360buyimg.com/jdphoto/jfs/t17188/306/453451730/6773/5729d835/5a781307N55fdfb49.png.webp',
        text: '机票火车票'
      },
      {
        imageUrl: '//img11.360buyimg.com/jdphoto/jfs/t14233/200/2236406318/6965/f521d4bd/5a781046N088e488a.png.webp',
        text: '全球购'
      },
      {
        imageUrl: '//img11.360buyimg.com/jdphoto/jfs/t18979/257/434869770/6298/d9d51680/5a77ff46N6a5c8ee3.png.webp',
        text: '领券'
      },
      {
        imageUrl: '//img11.360buyimg.com/jdphoto/jfs/t17071/64/457965579/5342/48d712c/5a781348Nc0895f3d.png.webp',
        text: '赚钱'
      },
      {
        imageUrl: '//img11.360buyimg.com/jdphoto/jfs/t16099/95/2000329354/6399/cfe6874b/5a780f87Nb7bcc63d.png.webp',
        text: '排行榜'
      }

    ],
    goodlist: [
      {
        goodsImg: '//m.360buyimg.com/mobilecms/s220x220_jfs/t17431/30/1714927899/377655/82c26500/5ad6aa6fN29e59e0f.jpg!q70.jpg.dpg',
        price: 11,
        discPrice: 8,
      },
      {
        goodsImg: '//m.360buyimg.com/mobilecms/s220x220_jfs/t17431/30/1714927899/377655/82c26500/5ad6aa6fN29e59e0f.jpg!q70.jpg.dpg',
        price: 11,
        discPrice: 8,
      },
      {
        goodsImg: '//m.360buyimg.com/mobilecms/s220x220_jfs/t17431/30/1714927899/377655/82c26500/5ad6aa6fN29e59e0f.jpg!q70.jpg.dpg',
        price: 11,
        discPrice: 8,
      },
      {
        goodsImg: '//m.360buyimg.com/mobilecms/s220x220_jfs/t17431/30/1714927899/377655/82c26500/5ad6aa6fN29e59e0f.jpg!q70.jpg.dpg',
        price: 11,
        discPrice: 8,
      },
      {
        goodsImg: '//m.360buyimg.com/mobilecms/s220x220_jfs/t17431/30/1714927899/377655/82c26500/5ad6aa6fN29e59e0f.jpg!q70.jpg.dpg',
        price: 11,
        discPrice: 8,
      },
      {
        goodsImg: '//m.360buyimg.com/mobilecms/s220x220_jfs/t17431/30/1714927899/377655/82c26500/5ad6aa6fN29e59e0f.jpg!q70.jpg.dpg',
        price: 11,
        discPrice: 8,
      },
      {
        goodsImg: '//m.360buyimg.com/mobilecms/s220x220_jfs/t17431/30/1714927899/377655/82c26500/5ad6aa6fN29e59e0f.jpg!q70.jpg.dpg',
        price: 11,
        discPrice: 8,
      },
    ],
    fuliImage: '//img20.360buyimg.com/jdphoto/jfs/t17320/7/429795398/60028/e3517eb1/5a781552N0d991b6c.jpg.dpg',
    goodsArray: [
      {
      image: '//m.360buyimg.com/mobilecms/s276x276_jfs/t19759/300/2468527180/231343/3a0eb468/5af81d34Nd3594dd9.jpg!q70.jpg.dpg',
      desc: '洗澡刷洗澡利器软毛长柄防滑沐浴搓澡后背浴刷沐浴刷子长柄沐浴刷子软毛刷洗澡刷洗浴搓背刷子 标准号蓝色',
      price: 12,
      rate: '90%'
    }, {
      image: '//m.360buyimg.com/mobilecms/s276x276_jfs/t17020/44/927988144/150696/b3ec1ebd/5ab3588fN020dfbdd.jpg!q70.jpg.dpg',
      desc: '洗澡刷洗澡利器软毛长柄防滑沐浴搓澡后背浴刷沐浴刷子长柄沐浴刷子软毛刷洗澡刷洗浴搓背刷子 标准号蓝色',
      price: 12,
      rate: '90%'
    }, {
      image: '//m.360buyimg.com/mobilecms/s276x276_jfs/t17191/263/2596493658/133167/37110284/5afec6dfNb5660e48.jpg!q70.jpg.dpg',
      desc: '洗澡刷洗澡利器软毛长柄防滑沐浴搓澡后背浴刷沐浴刷子长柄沐浴刷子软毛刷洗澡刷洗浴搓背刷子 标准号蓝色',
      price: 12,
      rate: '90%'
    }, {
      image: '//m.360buyimg.com/mobilecms/s276x276_jfs/t17191/263/2596493658/133167/37110284/5afec6dfNb5660e48.jpg!q70.jpg.dpg',
      desc: '洗澡刷洗澡利器软毛长柄防滑沐浴搓澡后背浴刷沐浴刷子长柄沐浴刷子软毛刷洗澡刷洗浴搓背刷子 标准号蓝色',
      price: 12,
      rate: '90%'
    }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  openPage: function () {
    wx.navigateTo({
      url: '../class-search/class-search'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  lower:function(){
    console.log(111)
    wx.navigateTo({
      url: '../rob-goods/rob-goods'
    })
  }
})
