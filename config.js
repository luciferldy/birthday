// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
  // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
  // 每句话尽量不要超过15个字,不然展示效果可能不太好
  texts: [
    "亲爱的大力菇凉",
    "这一年我们旅行并不多，但也走过了不少地方", //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
    "出去露营",
    "在北京的胡同探店", // 同上...
    "一起拍了证件照",
    "逛城市公园",
    "早起去天津的海边看日出",
    "然后去海洋馆",
    "一起在北坞公园溜达",
    "一起双人成行",
    "在海淀公园踏青",
    "在植物园看郁金香",
    "搬入了新家",
    "拍完了婚纱照",
    "祝你在未来的每一天身体健康，心情愉快，BaBe",
    "最爱你的🐑，献上",
  ],
  /**
   * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
   * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
   * 例如
   * "心爱的小可爱": "./imgs/xiaokeai.jpg"
   *
   * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
   * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
   */
  imgs: {
    在北京的胡同探店: "./imgs/1.jpg",
    逛城市公园: "./imgs/2.jpg",
    早起去天津的海边看日出: "./imgs/3.jpg",
    然后去海洋馆: "./imgs/4.jpg",
    一起在北坞公园溜达: "./imgs/5.jpg",
    在海淀公园踏青: "./imgs/6.jpg",
    在植物园看郁金香: "./imgs/7.jpg",
    拍完了婚纱照: "./imgs/8.jpg",
    出去露营: "./imgs/10.jpg",
    一起拍了证件照: "./imgs/9.jpg",
    一起双人成行: "./imgs/11.jpg",
    搬入了新家: "./imgs/12.jpg",
    // "今天是你的生日": "./imgs/birthday.jpg",
  },
  // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
  desc: {
    turn_on: "戳下试试",
    play: "来点音乐",
    bannar_coming: "Happy Birthday",
    balloons_flying: "气球哪里去了",
    cake_fadein: "来个蛋糕",
    light_candle: "点个蜡烛",
    wish_message: "生日快乐",
    story: "A MESSAGE FOR YOU",
  },
};
