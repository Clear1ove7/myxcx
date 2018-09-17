Page({
  data: {
    imgalist: ['http://chuantu.biz/t6/330/1529389689x-1404793238.jpg', 'http://chuantu.biz/t6/330/1529389689x-1404793238.jpg'],
    userinfo: [
      { key: '学历', val: '大专' },
      { key: '学校', val: '广州大学松田职业学院' }, 
      { key: '专业', val: '计算机应用技术'}, 
      { key: '职位', val: 'Web前端工程师' },
      { key: '邮箱', val: '727617616@qq.com' },
      { key: '爱好', val: '篮球、英雄联盟、听歌、电影' },
    ],
    selfTall: '给我一个机会,你会看到一个比简历上更强大的我！！！',
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://music.163.com/song/media/outer/url?id=152392.mp3',
    userCall:'18318355344',  
    majorlist: [
      { 'name': 'HTML', 'num': 90 },
      { 'name': 'CSS', 'num': 92 },
      { 'name': 'JavaScript', 'num': 85 },
      { 'name': 'jQuery', 'num': 90 },
      { 'name': 'bootstrap', 'num': 83 },
      { 'name': 'mui', 'num': 82 },
      { 'name': 'ajax', 'num': 85 },
      { 'name': 'json', 'num': 80 },
      { 'name': 'twig', 'num': 75 },
      { 'name': 'thinkphp', 'num': 75 },
      { 'name': 'mysql', 'num': 65 },
      { 'name': 'java', 'num': 75 },
      { 'name': 'git', 'num': 70 },
      { 'name': 'Photoshop', 'num': 65 },
    ],
    joblist: [
      {
        name:'东莞友才网络科技有限公司',
        al: '',
        textlist: [
          { name: '在职时间', val: '2017-07-03~至今' },
          { name: '就职岗位', val: '前端开发工程师' }
        ],
        detailName: '岗位职责',
        detailVal: '负责公司项目的前端开发（静态页面的制作、页面交互、数据交互等）'
      },
      {
        name: '广州大学松田职业学院',
        al: '',
        textlist: [
          { name: '在校时间', val: '2015-09-01~2018-06-28'},
          { name: '学历', val: '大专' },
          { name: '专业', val: '计算机应用' }
        ],
        detailName: '主修课程',
        detailVal: 'html+css+JavaScript、jQuery、php、java、c、SQL等'
      }
    ],
    project:[
      {
        name: '东莞市友才网络科技有限公司官网',
        textlist: [
          { name: '时间', val: '2017-09-15~2017-11-03' },
          { name: '链接', val: 'http://www.yc5158.com' },
          { name: '内容', val: '基本是自己独立开发前端，配合产品经理和UI完成页面布局,配合后端完成动态数据等' }
        ]
      },
      {
        name: '技友App',
        textlist: [
          { name: '时间', val: '2017-10-15~至今' },
          { name: '介绍', val: '友才网络科技有限公司主打产品之一' },
          { name: '内容', val: '基于H5+和mui框架,使用ajax对接接口数据的交互和页面制作等' }
        ]
      },
      {
        name: '技友OA',
        textlist: [
          { name: '时间', val: '2018-03-05~至今' },
          { name: '介绍', val: '友才网络科技有限公司主打产品之一' },
          { name: '内容', val: '主要负责公共html模块、css组件和js闭包开发等（如图片、文件上传等功能）' },
          { name: '链接', val: 'http://oa.yc5158.com' }
        ]
      },
      {
        name: '东莞市技师学院公众号--人才大厅',
        textlist: [
          { name: '时间', val: '2018-04-11~至今' },
          { name: '介绍', val: '技友OA子功能之一,为东莞技师学院提供求学招生、学生信息管理等功能' },
          { name: '内容', val: '主要负责页面的制作和数据交互' },
          { name: '链接', val: 'http://oa.yc5158.com/school/jobfair?cid=63' }
        ]
      }
    ]
  },
  asss: function(e){
    switch (e.detail.current){
      case 0:
        this.setData({ className1: 'active', classname2: '', classname3: '', classname4: ''})
        break;
      case 1:
        this.setData({ className1: '', classname2: 'active', classname3: '', classname4: '' })
        break;
      case 2:
        this.setData({ className1: '', classname2: '', classname3: 'active', classname4: '' })
        break;
      case 3:
        this.setData({ className1: '', classname2: '', classname3: '', classname4: 'active' })
        break;
    }
  },
  getInfo: function(e){
    wx.showActionSheet({
      itemList: ['是否复制选中信息'],
      success: function (res) {
        wx.setClipboardData({
          data: e.currentTarget.dataset.val,
          success: function (res) {
            wx.getClipboardData({
              success: function (res) {
                console.log(res.data)
              }
            })
          }
        })
      }
    })
  },
  callme: function(){
    wx.makePhoneCall({
      phoneNumber: '18318355344' 
    })
  },
  addActive: function () {
    wx.previewImage({
      current: this.data.imgalist,   
      urls: this.data.imgalist  
    })
  },
  textActive: function(e){
    var isavtive = e.currentTarget.dataset.class == 'active' ? '' : 'active';
    e.currentTarget.dataset.type == '0' ? this.setData({ 'joblist[0].al': isavtive }) : this.setData({ 'joblist[1].al': isavtive });
  },
  onReady: function () {
    this.setData({ className1: 'active'});
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  audioPlay: function (e) {
    var active = e.currentTarget.dataset.class;
    if (active == 'active'){
      this.setData({ music: '' })
      this.audioCtx.pause()
    }else{
      this.setData({ music: 'active' })
      this.audioCtx.play()
    }
  }
})