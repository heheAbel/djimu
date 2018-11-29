import sortingFun from "../public/sorting";

let article = [
  {
    id: 0,
    date: "2018-11-11",
    writeTime: "2018-12-11",
    days: 4,
    peoples: 5,
    cost: 10000,
    imgUrl: require("../component/userArticle/images/index_banner1.jpg"),
    title: "夏天约定好冬天要做一回白雪公主 哈尔滨茫茫茫茫雪",
    comments: 2356,
    authorName: "Abc",
    readNumber: 56547,
    givelike: {
      number: 6589,
      isChoose: false
    },
    collection: {
      number: 564,
      isChoose: false
    },
    content: `
    <p>
      对于我来说， 京都 已经不算是一个陌生的城市。出 京都站那天，出租车经过东本愿寺，突然想对这个城市说声“我回来了”，而非”我来了“。毕竟，浪漫的樱花之行，仿佛就在昨天。
    </p>
    <p>
      这次不想再写长篇大论的游记，但还是想有些输出。所以，就写写我这次出行的所见所感所想吧~
    </p>
    <h2>体验日本胶囊旅店</h2>
    <p>
      其实，我一直特别向往的，是 东京那种像太空舱一样的胶囊旅店。不过，这家满满的日式风情也很有味道。虽然门外就是京都 商业街的繁华，但是走进门的一瞬间，仿佛就穿越了。
    </p>
    <img src=${require("../component/readArticle/images/1.jpeg")} alt="pic" />
    <p>
      住在这里的客人， 日本 人>欧美人> 中国 人。因为赶上 日本的周末连休，周末时更是热闹无比，很多拉着小小的行李箱到 京都进行短途旅行的 日本人。可能欧美游客也很多的缘故，这里工作人员的英语程度很好，沟通完全没问题。
    </p>
    <img src=${require("../component/readArticle/images/2.jpeg")} alt="pic" />
    <p>
      和传说中的一样，也有加完班错过末班车的打工族。身穿西服裙和黑丝的日本妹子，带着一脸疲惫前来。这不禁让我想起从前经常需要熬夜加班的季度末、财年末，如果公司附近有这样的旅店，也可以省去我的奔波之苦了。
    </p>
    <p>
      由于浴室和洗漱间是公共的，”邻居“们免不了碰面，通常都是微笑点头而已。欧美人绝不会跨进大温泉池，而日本 人则刻板地保持着和陌生人的距离。有趣的是：每次我说着”excuseme“借过时，欧美人往往回复すみません，可见他们根本区分不出 亚洲人的不同。
    </p>
    <h2>全世界最热衷排队的民族</h2>
    <p>
      众所周知， 日本给游客带来的舒适感，很大程度上来自他们良好的秩序。而这秩序，与日本民众的自觉分不开。可以说：大和民族真的是全世界最热衷排队的民族了。
    </p>
    <img src=${require("../component/readArticle/images/3.jpeg")} alt="pic" />
    <p>
      正赶上 京都的旅游旺季，不论是买门票、入场还是吃饭，都需要排队。一般的外国观光客会皱着眉离开，而日本人则是很开心地排着。印象最深的是去东寺夜拜那次，真的是一条见不到尽头的队伍，但前前后后的人都在说着笑着。不过，队伍行进的速度也不慢，因为日本人恪守着”不给别人添麻烦“的原则，按工作人员的提示准备好门票钱。
    </p>
    <img src=${require("../component/readArticle/images/4.jpeg")} alt="pic" />
    <p>
      日本的公车也是如此，车上的人再多，大家也是按顺序上下，绝不会争抢。下车时，哪怕再慢，司机也会耐心等待。只有在高峰时段，人最多的几个车站，交通局会派出工作人员，引导大家下车后在机器上付款刷卡，以免堵住后面的队伍。
    </p>
    <img src=${require("../component/readArticle/images/5.jpeg")} alt="pic" />
    <p>
      不论两个国家和民族之间有什么过结，必须承认的是： 日本 民众，尤其是昭和时代的民众，素质绝对过硬。而在国内，很多地方依然是”队伍不长但很粗“，或者理直气壮地插队。于是，在日本 的几天，我经常会反省”刚才是不是不小心插队了“。
    </p>
    <img src=${require("../component/readArticle/images/6.jpeg")} alt="pic" />
    <h2>日本妹子的优雅从何而来</h2>
    <p>我们经常感叹樱花妹子的软萌，她们的优雅到底从何而来呢？</p>
    <p>
      首先，日语就是相对软萌的语言，学过日语的人都知道，它的特点就是口型小，所以不大可能做到声音很大。
    </p>
    <img src=${require("../component/readArticle/images/7.jpeg")} alt="pic" />
    <p>
      还有， 日本妹子个个都很精致。走在景区，凡是头发一丝不乱、化着精致妆容的，大多是樱花妹子。而像我这样素面朝天，任由头发乱飞的，恐怕只有我们中国 北方人，尤其是 北京 人。在去往 宇治 的JR上，几位极为精致的日本老太太一起出行，一下让我想起每周爬山的朋友们。后来转念一想，这绝对不是我们北京 大妞儿的风格。
    </p>
    <img src=${require("../component/readArticle/images/8.jpeg")} alt="pic" />
    <p>
      和大嗓门的国人相比， 日本人说话的声音也小。可能因为他们从小接受的教育就是不困扰别人。所以感觉这个国家的人总是静悄悄的。当然啦，很多日本 人到国外非常放肆，可能也是因为国内太压抑了。
    </p>
    <h2>用眼睛看 VS. 用取景器看</h2>
    <p>
      这个问题是在过了好几天之后，我才意识到的。虽然时间很是宽裕，但是每到一个地方，我总是急于寻找取景的角度，或者给眼前的美食凹造型，而忽视了视觉上的享受。
    </p>
    <img src=${require("../component/readArticle/images/9.jpeg")} alt="pic" />
    <p>
      大自然的美，是我们无论如何也不可能用相机百分之百捕捉的。然而随着社交媒体的兴起，旅行更多地成了“打卡”。都急于寻找那个网红的角度，相机的取景器代替了眼睛，虽然，只有眼睛看到的才是最立体的最美的。
    </p>
    <img src=${require("../component/readArticle/images/10.jpeg")} alt="pic" />
    <p>
      在很多日式庭园，可以买上一份茶点（有的是门票就含），坐在廊子下面欣赏风景。在南禅寺，上茶的小哥用传统茶道的方式为我递上茶杯，非常具有仪式感。突然明白，在这里，不该用相机的“咔嚓”声打破这特有的宁静。
    </p>
    <p>
      宝泉院，是最具有这种意境的地方之一，开放的窗子给眼前的风景添加了宽银幕效果，日本人真的就是这样静静坐着看风景，或者在放空自己，或者在默默想着心事。
    </p>
    <img src=${require("../component/readArticle/images/11.jpeg")} alt="pic" />
    <p>
      旅行的意义不在于走了多少景点，而是发现一个地方的美。于是，在 高台寺，我也试着放慢脚步，坐在这里静观枯山水。想象几百年前，或许宁宁就坐在这里怀念亡夫丰臣秀吉，可能在怀念醍醐寺赏花会，也可能在担忧丰臣家的命运。
    </p>
    <h2>享受一个人的旅行</h2>
    <p>
      有人说，独自旅行是最纯粹的旅行。想想也是，在旅途中唯一不会和你发生冲突的，就是自己。完全可以按照自己的兴趣、身体状况，随意安排路线。所以，这次我基本上没有安排逛街，要不是其中一天实在太冷放弃了夜间参拜，恐怕连逛药妆店的时间都没有。
    </p>
    <img src=${require("../component/readArticle/images/12.jpeg")} alt="pic" />
    <p>
      日本是个很适合独自旅行的国家，因为这里每个地方都为独行侠提供了便利。而在旅途中，也完全可以沉浸在自己的心事里。
    </p>
    <p>
      在享受孤独的同时，也有很大的机会去“遇见”。在飞机上认识了陈姐，我们一路搭伴从关西 机场到 京都。感谢大姐姐的宽容，即便是我买错了票需要补交钱，还是对我充满了信任。
    </p>
    <img src=${require("../component/readArticle/images/13.jpeg")} alt="pic" />
    <p>
      在去往瑠璃光院的路上，认识了一位小弟，巧合的是，还同是/曾是IT人。在后来的旅途中，我们不停地交换信息，为我后面的行程提供了不少指引。需要拼饭吃顿大餐，就约一下，然后各自开始行走。而且，要不是他的提议，我很可能就错过了青莲院的夜间参拜。
    </p>
    <p>
      在旅店里，和一位开朗的 日本妹子也聊得很开心，虽然很多时候，我们可能根本不知道对方在说什么。但是快乐会传染，不是吗？
    </p>
    `
  },
  {
    id: 1,
    date: "2018-10-11",
    writeTime: "2018-12-1",
    days: 7,
    peoples: 2,
    cost: 13000,
    imgUrl: require("../component/userArticle/images/index_banner2.jpg"),
    title: "坦桑尼亚之 《你好，乞力马扎罗的“暴风雪”》",
    comments: 2136,
    authorName: "Bbc",
    readNumber: 2365,
    givelike: {
      number: 1289,
      isChoose: false
    },
    collection: {
      number: 230,
      isChoose: true
    },
    content: `
      <p>
        对于我来说， 京都 已经不算是一个陌生的城市。出 京都站那天，出租车经过东本愿寺，突然想对这个城市说声“我回来了”，而非”我来了“。毕竟，浪漫的樱花之行，仿佛就在昨天。
      </p>
      <p>
        这次不想再写长篇大论的游记，但还是想有些输出。所以，就写写我这次出行的所见所感所想吧~
      </p>
      <h2>体验日本胶囊旅店</h2>
      <p>
        其实，我一直特别向往的，是 东京那种像太空舱一样的胶囊旅店。不过，这家满满的日式风情也很有味道。虽然门外就是京都 商业街的繁华，但是走进门的一瞬间，仿佛就穿越了。
      </p>
      <img src=${require("../component/readArticle/images/1.jpeg")} alt="pic" />
      <p>
        住在这里的客人， 日本 人>欧美人> 中国 人。因为赶上 日本的周末连休，周末时更是热闹无比，很多着小小的行李箱到 京都进行短途旅行的 日本人。可能欧美游客也很多的缘故，这里工作人员的英语程度很好，沟通完全没问题。
      </p>
      <img src=${require("../component/readArticle/images/2.jpeg")} alt="pic" />
      <p>
        和传说中的一样，也有加完班错过末班车的打工族。身穿西服裙和黑丝的日本妹子，带着一脸疲惫前来。这不禁让我想起从前经常需要熬夜加班的季度末、财年末，如果公司附近有这样的旅店，也可以省去我的奔波之苦了。
      </p>
    `
  },
  {
    id: 2,
    date: "2014-10-11",
    writeTime: "2018-12-05",
    days: 1,
    peoples: 1,
    cost: 1000,
    imgUrl: require("../component/userArticle/images/index_banner3.jpg"),
    title: "在这待久了，大抵会变成诗人吧",
    comments: 6587,
    authorName: "Cbc",
    readNumber: 23657,
    givelike: {
      number: 554,
      isChoose: true
    },
    collection: {
      number: 0,
      isChoose: false
    },
    content: `
      <p>
        由于浴室和洗漱间是公共的，”邻居“们免不了碰面，通常都是微笑点头而已。欧美人绝不会跨进大温泉池，而日本 人则刻板地保持着和陌生人的距离。有趣的是：每次我说着”excuseme“借过时，欧美人往往回复すみません，可见他们根本区分不出 亚洲人的不同。
      </p>
      <h2>全世界最热衷排队的民族</h2>
      <p>
        众所周知， 日本给游客带来的舒适感，很大程度上来自他们良好的秩序。而这秩序，与
        日本民众的自觉分不开。可以说：大和民族真的是全世界最热衷排队的民族了。
      </p>
      <img src=${require("../component/readArticle/images/3.jpeg")} alt="pic" />
    `
  },
  {
    id: 3,
    date: "2016-02-11",
    writeTime: "2018-02-11",
    days: 3,
    peoples: 2,
    cost: 10000,
    imgUrl: require("../component/userArticle/images/index_banner4.jpg"),
    title: "信仰和旧时光——迪拜跨年之旅（2）",
    comments: 6987123,
    authorName: "Dbc",
    readNumber: 4458,
    givelike: {
      number: 2365124,
      isChoose: false
    },
    collection: {
      number: 1475,
      isChoose: true
    },
    content: `
      <p>
        正赶上 京都的旅游旺季，不论是买门票、入场还是吃饭，都需要排队。一般的外国观光客会皱着眉离开，而日本人则是很开心地排着。印象最深的是去东寺夜拜那次，真的是一条见不到尽头的队伍，但前前后后的人都在说着笑着。不过，队伍行进的速度也不慢，因为日本人恪守着”不给别人添麻烦“的原则，按工作人员的提示准备好门票钱。
      </p>
      <img src=${require("../component/readArticle/images/4.jpeg")} alt="pic" />
      <p>
        日本的公车也是如此，车上的人再多，大家也是按顺序上下，绝不会争抢。下车时，哪怕再慢，司机也会耐心等待。只有在高峰时段，人最多的几个车站，交通局会派出工作人员，引导大家下车后在机器上付款刷卡，以免堵住后面的队伍。
      </p>
      <img src=${require("../component/readArticle/images/5.jpeg")} alt="pic" />
      <p>
        不论两个国家和民族之间有什么过结，必须承认的是： 日本 民众，尤其是昭和时代的民众，素质绝对过硬。而在国内，很多地方依然是”队伍不长但很粗“，或者理直气壮地插队。于是，在日本 的几天，我经常会反省”刚才是不是不小心插队了“。
      </p>
      <img src=${require("../component/readArticle/images/6.jpeg")} alt="pic" />
      <h2>日本妹子的优雅从何而来</h2>
      <p>我们经常感叹樱花妹子的软萌，她们的优雅到底从何而来呢？</p>
      <p>
        首先，日语就是相对软萌的语言，学过日语的人都知道，它的特点就是口型小，所以不大可能做到声音很大。
      </p>
      <img src=${require("../component/readArticle/images/7.jpeg")} alt="pic" />
      <p>
        还有， 日本妹子个个都很精致。走在景区，凡是头发一丝不乱、化着精致妆容的，大多是樱花妹子。而像我这样素面朝天，任由头发乱飞的，恐怕只有我们中国 北方人，尤其是 北京 人。在去往 宇治 的JR上，几位极为精致的日本老太太一起出行，一下让我想起每周爬山的朋友们。后来转念一想，这绝对不是我们北京 大妞儿的风格。
      </p>
      <img src=${require("../component/readArticle/images/8.jpeg")} alt="pic" />
      <p>
        和大嗓门的国人相比， 日本人说话的声音也小。可能因为他们从小接受的教育就是不困扰别人。所以感觉这个国家的人总是静悄悄的。当然啦，很多日本 人到国外非常放肆，可能也是因为国内太压抑了。
      </p>
      <h2>用眼睛看 VS. 用取景器看</h2>
      <p>
        这个问题是在过了好几天之后，我才意识到的。虽然时间很是宽裕，但是每到一个地方，我总是急于寻找取景的角度，或者给眼前的美食凹造型，而忽视了视觉上的享受。
      </p>
    `
  },
  {
    id: 4,
    date: "2018-03-11",
    writeTime: "2018-06-22",
    days: 2,
    peoples: 2,
    cost: 6000,
    imgUrl: require("../component/userArticle/images/index_banner1.jpg"),
    title: "秋游十日在杭州：江南水乡多雨霖，秋意渐浓枫叶红",
    comments: 6987123,
    authorName: "Ebc",
    readNumber: 369,
    givelike: {
      number: 2365124,
      isChoose: false
    },
    collection: {
      number: 1475,
      isChoose: true
    },
    content: `
      <p>
        大自然的美，是我们无论如何也不可能用相机百分之百捕捉的。然而随着社交媒体的兴起，旅行更多地成了“打卡”。都急于寻找那个网红的角度，相机的取景器代替了眼睛，虽然，只有眼睛看到的才是最立体的最美的。
      </p>
      <img src=${require("../component/readArticle/images/10.jpeg")} alt="pic" />
      <p>
        在很多日式庭园，可以买上一份茶点（有的是门票就含），坐在廊子下面欣赏风景。在南禅寺，上茶的小哥用传统茶道的方式为我递上茶杯，非常具有仪式感。突然明白，在这里，不该用相机的“咔嚓”声打破这特有的宁静。
      </p>
      <p>
        宝泉院，是最具有这种意境的地方之一，开放的窗子给眼前的风景添加了宽银幕效果，日本人真的就是这样静静坐着看风景，或者在放空自己，或者在默默想着心事。
      </p>
      <img src=${require("../component/readArticle/images/11.jpeg")} alt="pic" />
      <p>
        旅行的意义不在于走了多少景点，而是发现一个地方的美。于是，在 高台寺，我也试着放慢脚步，坐在这里静观枯山水。想象几百年前，或许宁宁就坐在这里怀念亡夫丰臣秀吉，可能在怀念醍醐寺赏花会，也可能在担忧丰臣家的命运。
      </p>
      <h2>享受一个人的旅行</h2>
      <p>
        有人说，独自旅行是最纯粹的旅行。想想也是，在旅途中唯一不会和你发生冲突的，就是自己。完全可以按照自己的兴趣、身体状况，随意安排路线。所以，这次我基本上没有安排逛街，要不是其中一天实在太冷放弃了夜间参拜，恐怕连逛药妆店的时间都没有。
      </p>
      <img src=${require("../component/readArticle/images/12.jpeg")} alt="pic" />
      <p>
        日本是个很适合独自旅行的国家，因为这里每个地方都为独行侠提供了便利。而在旅途中，也完全可以沉浸在自己的心事里。
      </p>
      <p>
        在享受孤独的同时，也有很大的机会去“遇见”。在飞机上认识了陈姐，我们一路搭伴从关西 机场到 京都。感谢大姐姐的宽容，即便是我买错了票需要补交钱，还是对我充满了信任。
      </p>
      <img src=${require("../component/readArticle/images/13.jpeg")} alt="pic" />
      <p>
        在去往瑠璃光院的路上，认识了一位小弟，巧合的是，还同是/曾是IT人。在后来的旅途中，我们不停地交换信息，为我后面的行程提供了不少指引。需要拼饭吃顿大餐，就约一下，然后各自开始行走。而且，要不是他的提议，我很可能就错过了青莲院的夜间参拜。
      </p>
      <p>
        在旅店里，和一位开朗的 日本妹子也聊得很开心，虽然很多时候，我们可能根本不知道对方在说什么。但是快乐会传染，不是吗？
      </p>
    `
  }
];

const articleStore = (state = sortingFun(article, "date"), action) => {
  switch (action.type) {
    case "CHANGE_ARTICLE":
      const temporaryIsC = state[action.dataNumber][action.dataName];
      const temporaryNum = state[action.dataNumber][action.dataName];
      Object.assign(temporaryIsC, temporaryIsC, { isChoose: action.dataValue });
      Object.assign(temporaryNum, temporaryNum, {
        number: temporaryNum.number + (1 * action.dataValue ? 1 : -1)
      });
      return Object.assign([], state);
    default:
      return state;
  }
};
export default articleStore;