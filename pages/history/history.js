
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'paula',
  },

  showHello: function () {
    console.log('1')
    wx.showToast({
      title: '成功',
      icon: 'sucess',
      duration: 2000,
    })
  },
})