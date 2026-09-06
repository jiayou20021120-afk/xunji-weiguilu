/* 《循迹：追索录》完整版数据。六章合一。
   改文案只动这个文件，不用碰 index.html。 */


const WORLD = [
  ['一件东西被人拿走，多少会在原地落下点痕迹。'],
  ['经过谁的手，在哪个码头停过，',
   '在哪间不属于它的库房里待过，都算数。'],
  ['这些东西旁人看不出来，你能。'],
  ['干这行的叫循迹者。',
   '你只要碰到它，就能站到它当年走的那条路上去。'],
  ['麻烦在于，你什么都改不了。',
   '那笔买卖照样成，那只箱子照样上船，谁也拦不住。'],
  ['你能带走的只有证据。',
   '想让东西回家，靠的不是抢，',
   '是把它原本属于哪儿这件事，一条一条摆清楚。']
];

/* 游戏抬头。改名只改这一处，主界面和网页标题都跟着走。 */
const GAME = { title:'循迹：追索录', sub:'历史悬疑解谜游戏', chip:'第一案 · 帛书' };

/* 文物图鉴。
   status 只有“已回归”和“追索中”两种，决定右下角那枚章。
   flow 是流散与回归的时间线，一项一段。开头加 ? 的会显示成红色的待核项。
   img 留空就显示“待补图”的虚框，补进素材后自动换上。

   八条的文案出自团队《资料搜集》，《永乐大典》一条的入藏日另核过公开报道。 */
const RELICS = [
  { no:1, name:'子弹库帛书残卷', cat:'古籍文献', era:'战国', img:'assets/relic_1_boshu.jpg',
    hero:'assets/hero_1_boshu.jpg',
    status:'追索中',
    desc:'1942 年在长沙子弹库楚墓被盗掘出土，内容涉及四时、月令与天地开辟，是目前所见年代最早的帛书。\n' +
         '1946 年被美国人柯强以拍摄红外照片为由取走运美，此后三卷被分开寄存、辗转流散。\n' +
         '2024 年原装木盒盒盖归还中方。2025 年 5 月 18 日，《五行令》《攻守占》两卷返还中国，' +
         '同年 7 月在中国国家博物馆展出。《四时令》至今仍未归国。',
    flow:['1942 年\n长沙出土','1946 年\n被取走运美','2025 年 5 月\n两卷归国','《四时令》\n仍未归'] },

  { no:2, name:'彩绘浮雕武士石刻', cat:'石刻', era:'五代', img:'assets/relic_2_wushi.jpg',
    status:'已回归',
    desc:'河北曲阳王处直墓中的浮雕武士像，彩绘保存完好，被盗掘后流失美国。\n' +
         '2001 年通过司法程序从美国追回，是我国第一件无偿追回的海外流失文物，因此得名「海归天王」。\n' +
         '它的回归开创了依据国际法规无偿追索流失文物的先例。',
    flow:['五代\n曲阳王处直墓','被盗掘\n流失美国','2001 年\n司法程序追回'] },

  { no:3, name:'唐武惠妃石椁', cat:'石刻', era:'唐', img:'assets/relic_3_shiguo.jpg',
    status:'已回归',
    desc:'唐代体积最大、彩绘保存最完好的一具石椁，2004 年被盗后走私出境。\n' +
         '2010 年，经我国警方与海外藏家多轮谈判，石椁最终被无条件归还。\n' +
         '这是我国首次通过法律途径成功追索回国的国家一级文物。',
    flow:['唐代\n武惠妃石椁','2004 年\n被盗走私出境','2010 年\n无条件归还'] },

  { no:4, name:'春秋晋公盘', cat:'青铜器', era:'春秋', img:'assets/relic_4_jingongpan.jpg',
    status:'已回归',
    desc:'承载 183 字铭文的青铜重器，是研究晋国历史的活化石。\n' +
         '被盗后辗转多国，最终由山西警方在跨国追索中成功追回，彰显了我国打击文物犯罪的决心。',
    flow:['春秋\n晋国青铜盘','被盗后\n辗转多国','山西警方\n跨国追回'] },

  { no:5, name:'圆明园马首铜像', cat:'建筑构件', era:'清', img:'assets/relic_5_mashou.jpg',
    status:'已回归',
    desc:'圆明园海晏堂十二生肖水力钟的构件之一，1860 年被英法联军掠走。\n' +
         '2007 年，爱国人士何鸿燊出资购得并捐赠给国家；2020 年正式回归圆明园原址收藏。\n' +
         '它是十二兽首中唯一回到原址的一件。',
    flow:['清代\n海晏堂水力钟','1860 年\n英法联军掠走','2007 年\n何鸿燊购回捐赠','2020 年\n重归圆明园'] },

  { no:6, name:'皿方罍', cat:'青铜器', era:'商代晚期', img:'assets/relic_6_minfanglei.jpg',
    status:'已回归',
    desc:'商代晚期体量最大的青铜方罍，被称为方罍之王。1922 年在湖南出土后，器盖留在国内，器身流失海外近百年。\n' +
         '2014 年国家文物局牵头，国内收藏家跨国洽购，促成海外拍卖取消，器身与器盖在湖南省博物馆合璧，永久收藏。\n' +
         '这是民间协商回购国宝的标杆案例。',
    flow:['商代晚期\n方罍之王','1922 年\n身首分离','2014 年\n洽购取消拍卖','湖南省博物馆\n身首合璧'] },

  { no:7, name:'曾伯克父青铜八件组器', cat:'青铜器', era:'春秋', img:'assets/relic_7_zengbo.jpg',
    status:'已回归',
    desc:'春秋曾国的成套一级青铜器，被盗掘后非法走私日本，2019 年即将上拍。\n' +
         '国家文物局联合公安部门与驻外使馆，依据国际公约向日方施压，持有人无条件上交，' +
         '全套八件无损归国，现藏湖北省博物馆。\n' +
         '这一案例证明，我国可以依法拦截国际非法文物交易。',
    flow:['春秋\n曾国青铜组器','被盗掘\n走私日本','2019 年\n拦截拍卖','无条件上交\n全套归国'] },

  { no:8, name:'两册明嘉靖《永乐大典》', cat:'古籍文献', era:'明嘉靖', img:'assets/relic_8_yongledadian.jpg',
    status:'已回归',
    desc:'《永乐大典》全书一万一千余册，历经战火与流散，嘉靖副本存世仅四百余册。\n' +
         '2020 年，两册流失海外百余年的明写本现身法国拍卖行，由国内藏家竞得并运回国内。\n' +
         '2026 年 6 月 24 日正式入藏杭州国家版本馆，是现存规模最大的流失大典实物回归案例。',
    flow:['明嘉靖\n重录副本','流散海外\n存世仅四百余册','2020 年\n法国拍卖购回','2026 年 6 月\n入藏国家版本馆'] }
];

const CASES = {
  title: '文物追索图',
  hint: '亮着的那一桩可以打开',
  /* 底图 ui_map.jpg 上八桩案子的位置。案名和文物名都画在图里了，
     这里的 x/y/w/h 只是盖在上面的透明热区，按百分比对位。 */
  items: [
    { id:'boshu', playable:true,
      name:'帛书迷踪', sub:'子弹库帛书残卷',
      route:'长沙 → 上海 → 美国 → 北京 → 长沙',
      span:'1943 至 2026', chapters:6,
      x:40.5, y:62, w:14.5, h:12.5 },

    /* 其余七桩只画在图上，还不能进。定了案子把 playable 转 true 就行。 */
    { id:'wushi',  playable:false, name:'天王首归', sub:'彩绘浮雕武士石刻',
      route:'', span:'', chapters:0, x:54.5, y:27.5, w:12.5, h:9.5 },
    { id:'shiguo', playable:false, name:'椁还唐韵', sub:'唐武惠妃石椁',
      route:'', span:'', chapters:0, x:18,   y:45.5, w:14.5, h:10 },
    { id:'jgp',    playable:false, name:'晋盘重光', sub:'春秋晋公盘',
      route:'', span:'', chapters:0, x:35.5, y:30.5, w:14,   h:10.5 },
    { id:'mashou', playable:false, name:'马首识途', sub:'圆明园马首铜像',
      route:'', span:'', chapters:0, x:71,   y:16.5, w:13.5, h:11.5 },
    { id:'lei',    playable:false, name:'罍合璧',   sub:'皿方罍',
      route:'', span:'', chapters:0, x:14,   y:72,   w:13.5, h:9.5 },
    { id:'zengbo', playable:false, name:'一锤定金', sub:'曾伯克父青铜八件组器',
      route:'', span:'', chapters:0, x:38,   y:46,   w:15.5, h:9.5 },
    { id:'yldd',   playable:false, name:'文心典藏', sub:'两册明嘉靖《永乐大典》',
      route:'', span:'', chapters:0, x:69.5, y:58,   w:10.5, h:12.5 }
  ]
};

/* 五件物证。locked 的那几条在对应章打完之前是暗的。 */
const EVIDENCE = [
  { id:'e1', ch:1, title:'《晚周缯书考证》手稿底稿', year:'1943 · 长沙',
    img:'assets/card_e1.jpg',
    quote:'两千年前楚人的月令、创世记载，总得有人整理留存。',
    desc:'蔡季襄耗费数年写成的帛书考证底稿。是他为完整留存楚帛书，决意远赴上海的初心佐证。' },
  { id:'e2', ch:2, title:'蔡季襄致柯强催款信', year:'1946.7.18 · 上海',
    img:'assets/card_e2.jpg',
    quote:'如缯书寄往美国途中发生事故，或不寄还，赔偿美金九千元，为据。',
    desc:'蔡季襄写给柯强的信，落款七月十八日。他把不寄还的后果一条条写死了，' +
         '白纸黑字。谁也没想到，这张纸后来成了整桩事里最说得清的一件证据。' },
  { id:'e3', ch:3, title:'码头托运单（残件）', year:'1946.7.25 · 十六铺',
    img:'assets/card_e3.jpg',
    quote:'货物名称：私人书籍。目的地：哈佛大学福格博物馆。',
    desc:'一张谁也没多看一眼的单子。国宝出境那个晚上，岸上就剩这么一角纸。' },
  { id:'e4', ch:4, title:'原装木盒盒盖', year:'2024.6 · 美国',
    img:'assets/card_e4.jpg',
    quote:'Fogg-1946-0916。三卷帛书是一整批抵美的。',
    onCollect:'这件盒盖，串联起帛书抵美后迄今七十九年的寄存岁月。',
    desc:'Fogg-1946-0916。装帛书的木盒盒盖。它记得三卷是一起来的，也先替它们探了回家的路。' },
  { id:'e5', ch:5, title:'归国新闻见证', year:'2025.5.18 · 北京',
    img:'assets/card_e5.jpg',
    quote:'离家七十九年，两卷回来了。',
    desc:'七十九年之后头一回落地。这件证据不是从旧纸堆里翻出来的，是眼下正在发生的事。' }
];


/* ---------- 第一章 ---------- */
const CHAP1 = {
  id: 'ch1',
  name: '第一章 · 长沙蔡宅',
  year: '1943',
  transition: 'flash',   // 这一章的转场：白闪
  epigraph: '惟天作福，神则格之　《子弹库帛书甲篇》',
  /* 出场转场那一下的电铃，用真音效，接第二章的上海 */
  exitSnd: { src:'assets/sfx_bell.mp3', vol:.85,
               at:'远处传来电车铃响。' },   /* 新稿：跟着这一句响 */
  amb: { src:'assets/amb_ch1_crickets.mp3', vol:1, loopFrom:3 },
  bgmStopAtEnd: true,
  bgDim: 'assets/scene_study_dim.jpg',   // 点灯前
  bgLit: 'assets/scene_study_lit.jpg',   // 点灯后
  cutin: 'assets/scene_cai.jpg',         // 蔡季襄对话镜头

  /* 开场：2026 年的库房，玩家亲手触碰那卷仿制帛书才穿越 */
  prologue: [
    '2026 年，长沙，湖南省博物馆的库房。',
    '手上这批是第三十七箱，蔡季襄的遗物。',
    '箱子底下压着一卷仿制的帛书，上面什么字都没有。'
  ],
  storage: 'assets/scene_storage.jpg',                 // 2026 库房实景
  relic: { dim:'assets/relic_0.jpg', lit:'assets/relic_1.jpg' },
  relicHot: { x:34, y:50, w:27, h:17 },                // 库房图里那卷帛书的位置（百分比）
  avatar: 'assets/avatar_cai.jpg',
  cardEmpty: 'assets/card_empty.jpg',
  touchPrompt: '伸手触碰',
  touchLine: '你的手指触到一卷空白仿制帛书……',

  /* 穿越落地后的引入。他这会儿还没发现你，要等你碰了书架那卷底稿才抬头。 */
  intro: [
    { who:'os', text:'我这会儿站的是 1943 年的长沙。' },
    { who:'os', text:'蔡先生伏在案上写信，帛书还好端端摊在他手边。' }
  ],
  introTip: '这一夜留下的东西，你要一件件带走',

  /* 热区。x/y/w/h 均为舞台百分比，与背景图一一对应。
     step 表示它是第几步的主线目标；null 表示随时可点的支线。 */
  hotspots: [
    { id:'lamp',   step:0, x:30,   y:33, w:9.5, h:37, label:'油灯' },
    { id:'scroll', step:1, x:82,   y:2,  w:18,  h:64, label:'书架上的手稿卷' },
    { id:'silk',   step:2, x:51,   y:66, w:21,  h:30, label:'帛书残片' },
    { id:'letter', step:3, x:32.5, y:70, w:19,  h:20, label:'信纸' },
    { id:'wall',   step:null, x:57, y:2,  w:25,  h:56, label:'墙上摹本' },
    { id:'window', step:null, x:0,  y:2,  w:28,  h:56, label:'窗' },
    { id:'brush',  step:null, x:6,  y:56, w:12,  h:23, label:'笔筒' }
  ],

  /* 主线五步 */
  steps: [
    { /* ① 点油灯 */
      hotspot:'lamp',
      closeup:{ imgs:['assets/prop_lamp_0.jpg','assets/prop_lamp_1.jpg'],
                title:'铜油灯',
                caption:'灯芯往上挑了挑，光跟着往外推开一圈，桌上那封摊着的信这才看得清。',
                sfx:'lamp' },
      after:{ lit:true, os:'蔡先生停了笔。' }
    },
    { /* ② 点书架上露出来的那卷底稿 → 对白 A */
      hotspot:'scroll',
      closeup:{ imgs:['assets/prop_manuscript.jpg'],
                title:'晚周缯书考证',
                caption:'摊在外头那一卷露出了封题，六个字写得很稳。',
                sfx:'paper' },
      dialogue:[
        { who:'蔡季襄', act:'闻声侧头看向书架，再转过来望着你', text:'你来了。' },
        { who:'蔡季襄', text:'这卷底稿是对着残片一点点抄下来的。两千年前楚人记的月令、天地怎么开的，总得有人替他们收着。' },
        { who:'蔡季襄', text:'屋里这点条件不成。字一糊，笔描下来总要差一点意思。上海有红外的相机，我想带它们去一趟，趁我还看得清，把这些字照下来。' },
        { who:'os', text:'这叠稿子他写了很久，纸边都磨软了。' }
      ]
    },
    { /* ③ 点帛书残片 → 特写 → 长卷展开 → 对白 B */
      hotspot:'silk',
      closeup:{ imgs:['assets/prop_silk_0.jpg','assets/prop_silk_1.jpg'],
                title:'楚帛书残片',
                caption:'手指从上面划过去，神树那几道线跟着亮了一下，没两秒又暗回去了。',
                sfx:'glow' },
      unfurl:'silk12',
      /* 脚本：对白 B 起，弱进一支独奏埙 */
      bgmOnDialogue:{ src:'assets/bgm_ch1_gumeng.mp3', vol:.75, loopFrom:6, keepAmb:true,
                      fade:4000 },   /* 新稿：出现时声音逐渐变大 */
      dialogue:[
        { who:'蔡季襄', text:'轻些。这一片，我从土里的竹笥中取出来时，比现在还碎。' },
        { who:'蔡季襄', text:'两千多年了。楚人把四时、月令、天地开辟都写在这一幅帛上。十二个月神，各司其职。' }
      ]
    },
    { /* ④ 点桌上的信纸 → 信件徐徐展开 */
      hotspot:'letter',
      reveal:'letter1',
      dialogue:[
        { who:'os', text:'他要去上海，是为了把这些字照清楚。信里交代的都是这一件事。' }
      ]
    },
    { /* ⑤ 手稿自动收拢入槽 → 情绪锚点 */
      auto:true,
      collect:'e1',
      bgmStop: 6000,          /* 脚本：情绪锚点处收 */
      dialogue:[
        { who:'蔡季襄', text:'年轻人，帛书上的字，是楚人写给后人的。你要让后人读到。' }
      ]
    }
  ],

  /* 从中间向两侧展开的长卷。key 对应 steps 里的 unfurl 字段 */
  unfurls: {
    silk12: {
      img: 'assets/silk_scroll_wide.jpg',
      title: '十二月神',
      caption: '一年十二个月，一个月配一位神。有长着鸟头的，有下半身是蛇的，还有拎着斧子的。' +
               '两千三百年前，楚人把一整年该守的规矩，全画进了这一幅帛里。'
    }
  },

  /* 徐徐展开的信。key 对应 steps 里的 reveal 字段 */
  reveals: {
    letter1: {
      img: 'assets/prop_letter_wide.jpg',
      title: '蔡季襄致助手的亲笔信',
      date: '民国三十二年冬 · 长沙',
      lines: [
        '劳汝提前备妥行囊与帛书收纳匣，我不日动身赴上海。',
        '$当地有新式光学设备，可精细拓印、修缮帛书残字。',
        '务必周全整理妥当，随我同行。'
      ],
      sign: '季襄　手启'
    }
  },

  /* 支线点击 */
  extras: {
    wall:{ closeup:{ imgs:['assets/wall_facsimile.jpg'],
             title:'墙上的摹本',
             caption:'照着真迹描的。挂在墙上这幅是摹本，真的那卷就在他手边桌上摊着。' },
           os:'看这笔法，他描过不止一遍。' },
    window:'1943 年的长沙。城是烧过一回的，灯还亮着。',
    brush:'笔洗得挺干净。看得出来他天天都在写东西。'
  },

  /* 顺序锁提示 */
  locked: {
    scroll:'太暗了，先把灯挑亮。',
    silk:'先看看他书架上摊出来的那卷底稿。',
    letter:'先看看蔡先生手边的帛书。'
  },

  /* 误触 */
  idle: ['夜太深了。', '别碰蔡先生的砚台。', '灯影里什么都像在动。'],

  outro: [
    '油灯暗下去了，屋子一点点沉回黑里。',
    '远处传来电车铃响。',
    '那是上海的声音……'
  ]
};

/* ---------- 第二章 ---------- */
const CHAP2 = (() => {
  const IMG = {
    office : 'assets/scene_office_front.jpg',
    officeB: 'assets/scene_office_back.jpg',
    cox    : 'assets/scene_cox.jpg',
    env0   : 'assets/prop_envelope_0.jpg',
    env1   : 'assets/prop_envelope_1.jpg'
  };
  
  const CHAP2 = {
    id: 'ch2',
    name: '第二章 · 上海 柯强办公室',
    year: '1946',
    transition: 'shutter',   // 这一章的转场：快门
    epigraph: '暗度陈仓。',
  
    /* 这一章的场景有两态：柯强面向桌子 / 转身背对。第三步要趁他转身才能开抽屉。 */
    /* 开场黑幕里一串电车铃，收场一声汽笛，直接把人送进第三章 */
    enterSnd: { src:'assets/sfx_bell.mp3', vol:.7 },
    exitSfx: 'horn',
    /* 弄堂底噪从黑幕就进，一直垫到步骤②对白 B，那时候换成曲子 */
    amb: { src:'assets/amb_ch2.mp3', vol:1, loopFrom:4 },
    bgmStopAtEnd: true,
    bgDim:   IMG.office,
    bgLit:   IMG.office,
    bgFront: IMG.office,
    bgBack:  IMG.officeB,
    cutin:   IMG.cox,
  
    /* 开场：循迹者落到 1946 年的上海 */
    prologue: [
      '1946 年 7 月，上海。',
      '一间拉着百叶窗的西式办公室，零碎的阳光洒在桌面上。',
      '桌子中间摊着一幅帛书摹本，一台相机正对着拍。'
    ],
    storage: IMG.office,
    relic: { dim:IMG.env0, lit:IMG.env1 },
    relicHot: { x:62, y:60, w:12, h:8 },
    avatar: 'assets/avatar_cox.jpg',
    cardEmpty: 'assets/card_empty.jpg',
    touchPrompt: '走近那张桌子',
    touchLine: '你站进了这间屋子，没有人抬头……',
  
    /* 落地引入：蔡季襄看得见你，这个人不会 */
    intro: [
      { who:'os', text:'面前这个人，蔡先生提到过的。他似乎沉浸在自己的世界里。' },
      { who:'os', text:'他只是在做他的事，一件我拦不住的事情。' }
    ],
    introTip: '这屋子里有三样东西该看',
  
    /* 热区。x/y/w/h 是舞台百分比，与背景图一一对应。 */
    hotspots: [
      { id:'camera',   step:0, x:62,  y:33, w:15,  h:29, label:'相机' },
      { id:'envelope', step:1, x:61,  y:60, w:13,  h:9,  label:'信封' },
      { id:'drawer',   step:2, x:3,   y:73, w:32,  h:24, label:'抽屉' },
      { id:'scroll', step:null, x:16, y:47, w:40,  h:29, label:'帛书摹本' },
      { id:'photo',  step:null, x:54, y:2,  w:15,  h:23, label:'墙上合影' },
      { id:'window', step:null, x:0,  y:2,  w:44,  h:42, label:'窗' },
      { id:'cox',    step:null, x:79, y:4,  w:19,  h:90, label:'柯强' },
      { id:'cup',    step:null, x:0,  y:45, w:11,  h:13, label:'咖啡杯' }
    ],
  
    /* 主线四步 */
    steps: [
      { /* ① 点相机 */
        hotspot:'camera',
        closeup:{ imgs:['assets/prop_camera_0.jpg','assets/prop_camera_1.jpg'],
                  title:'皮腔相机',
                  caption:'快门一落，旁边的灯泡炸开一团白光，这张拍的是摹本，不是真迹。',
                  sfx:'flash' },
        dialogue:[
          { who:'柯强', act:'不回头，调着镜头', text:'用红外线来拍摄帛书文字，最合适不过。人眼看不见的字，它看得见。' },
          { who:'柯强', text:'蔡先生的宝贝，在我这里会得到最好的对待。' },
          { who:'os', text:'拍照是真的。可申请书上写的目的地，蔡先生知道吗？' }
        ]
      },
      { /* ② 点相机底下压着的信 */
        hotspot:'envelope',
        closeup:{ imgs:[IMG.env0, IMG.env1],
                  title:'一封压在相机底下的信',
                  caption:'一个红框信封，让相机底座压着。抽出来看，是长沙寄过来的。',
                  sfx:'paper' },
        reveal:'letterDun',
        /* 对白 B 开口这一下，弄堂声退下，曲子起 */
        bgmOnDialogue:{ src:'assets/bgm_ch2.mp3', vol:.75, loopFrom:6 },
        dialogue:[
          { who:'柯强', act:'扫了一眼，折起，随手塞进西装内袋', text:'赔偿？' },
          { who:'柯强', act:'轻笑', text:'He wrote it down. How very careful of him.<span class="sub">他还写下来了，真是谨慎啊。</span>' },
          { who:'os', text:'蔡先生心里是有数的，才留了这么一手。只是这封信搁在这儿，看着没人动过。' }
        ],
        after:{ watch:true, os:'柯强收好信，转身去了窗边。' }
      },
      { /* ③ 趁他转身，开抽屉 */
        hotspot:'drawer',
        requireBack:true,
        closeup:{ imgs:['assets/prop_loanform_0.jpg','assets/prop_loanform_1.jpg'],
                  title:'学术借出申请（草稿）',
                  caption:'抬头那行写的是临时借出，收件方福格博物馆。日期空着，签名也空着，就等填。',
                  sfx:'paper' },
        dialogue:[
          { who:'os', text:'借出。跟蔡先生谈的是寄存拍照，这上面写的是借出。' },
          { who:'os', text:'而且要借到的地方，在太平洋另一边。' }
        ]
      },
      { /* ④ 收物证 + 情绪锚点 */
        auto:true,
        collect:'e2',
        dialogue:[
          { who:'柯强', act:'背对着这边，声音很平', text:'中国人不懂国际规则，到了美国，就是我的了。' }
        ]
      }
    ],
  
    /* 徐徐展开的信 */
    reveals: {
      letterDun: {
        img: 'assets/letter_dun_wide.jpg',
        title: '蔡季襄致柯强催款信',
        date: '民国三十五年七月十八日 · 长沙寄上海',
        lines: [
          '柯强先生：',
          '此项古代缯书，系弟与叶君公司。',
          '先生云，对于此书付款日期，限在两月内一次付清。',
          '$如缯书寄往美国途中发生事故，或不寄还，',
          '$按照缯书代价，除去保证金一千元，赔偿美金九千元，为据。'
        ],
        sign: '蔡季襄　拜托'
      }
    },
  
    /* 支线点击 */
    extras: {
      scroll:'镜头底下这幅是摹本。真迹这会儿搁在哪儿，他没提。',
      photo :'墙上挂着张大学合影。他从那边过来的，将来也是要回那边去的。',
      window:'窗外是上海的屋顶，晾着几件衣服。这屋里最旧的一样东西，还是桌上那卷帛书。',
      cox   :'他一直没抬头。手上这点活儿，比屋里多出来的这个人要紧多了。',
      cup   :'咖啡还冒着气。看这屋子，他不缺钱，缺的大概是时间。'
    },
  
    /* 顺序锁提示 */
    locked: {
      envelope:'先看清楚他在拍什么。',
      drawer  :'他还看着这边，等他转身。'
    },
  
    /* 误触 */
    idle: ['咖啡还是热的，他似乎要时刻保持精神。',
           '窗外的弄堂里，有人在收衣服。',
           '这间屋子里，只有帛书是旧的。'],
  
    outro: [
      '汽笛声压过了屋子里所有的声音。',
      '画面往窗外去，白得耀眼。',
      '那声音是从江边来的。今晚十六铺有船要走。'
    ]
  };
  return CHAP2;
})();

/* ---------- 第三章 ---------- */
const CHAP3 = (() => {
  const IMG = {
    pv1:'assets/pv1.jpg', pv2:'assets/pv2.jpg', pv3:'assets/pv3.jpg',
    pv4:'assets/pv4.jpg', pv5:'assets/pv5.jpg', pv6:'assets/pv6.jpg'
  };
  
  const CHAP3 = {
    id: 'ch3',
    name: '第三章 · 上海 十六铺码头',
    year: '1946',
    transition: 'fog',   // 这一章的转场：雾
    epigraph: '风没有拦住它。',
  
    /* 海浪从章头垫到章末；镜 5 叠进码头轮船，镜 6 轮船退、飞行进 */
    amb: { src:'assets/amb_ch3_sea.mp3', vol:1, loopFrom:3 },
    /* 脚本：整章覆盖《海浪声》，叠加《一直飞行在大海之上（节选）》 */
    bgm: { src:'assets/bgm_ch3_fly.mp3', vol:.75, once:true },
    bgmStopAtEnd: true,
    /* 歌词按团队给的时间轴，逐句跟着曲子自己的播放位置显示 */
    lyrics: { ch:'bgm', lines:[
    { t0:10.233, t1:19.833, text:'那是我出生的地方' },
    { t0:19.833, t1:28.133, text:'事实在我没在意远方' },
    { t0:28.133, t1:36.966, text:'远离这满足盐码的苦海' },
    { t0:36.966, t1:43.566, text:'可冲动与海风禁锢着' },
    { t0:43.566, t1:48.066, text:'我的翅膀' }
    ] },
    bgDim: IMG.pv1, bgLit: IMG.pv1, bgFront: IMG.pv1, bgBack: IMG.pv1,
    cutin: IMG.pv6,
    storage: IMG.pv1,
    relic: { dim:IMG.pv1, lit:IMG.pv2 },
    relicHot: { x:40, y:44, w:20, h:16 },
    avatar: 'assets/card_e3.jpg',
    cardEmpty: 'assets/card_empty.jpg',
    touchPrompt: '往码头走',
    touchLine: '你跟到了江边，脚下的石板是湿的……',
  
    prologue: [
      '1946 年 7 月 25 号，后半夜。',
      '上海，十六铺码头。',
      '江上雾大，看什么都隔着一层。'
    ],
  
    /* 这一章没有对白，落地就是一段旁白 */
    intro: [
      { who:'os', text:'我赶到江边的时候，箱子已经钉好了。' },
      { who:'os', text:'能赶上的只有它离岸这一段。我伸不出手。'}
    ],
    introTip: '这一夜，你只能看着',
  
    /* PV 分镜。每一镜一张图，dur 是停留毫秒，move 是缓慢的推拉方向。 */
    isPV: true,
    shots: [
      { img:IMG.pv1, dur:4200, move:'in',
        line:'江上起了雾，整个码头就吊臂那一盏灯还亮着。' },
      { img:IMG.pv2, dur:5000, move:'up',
        line:'一只木箱让绳网兜住，慢慢离了地。' },
      { img:IMG.pv3, dur:4600, move:'in',
        line:'箱子侧面那张标签上写着私人书籍，四个字。' },
      { img:IMG.pv4, dur:5200, move:'down',
        line:'风把地上一张托运单吹起了一角，眼看要飞走。',
        collect:'e3' },
      { img:IMG.pv5,
        audio:[{ ch:'bg2', src:'assets/sfx_ch3_ship.mp3', vol:1, fade:1200, loopFrom:2 }], dur:4800, move:'out',
        line:'跳板上有人喊了一声，最后一件，起锚。' },
      { img:IMG.pv6,
        audio:[{ ch:'bg2', stop:3200 }], dur:9000, move:'slow',   /* 轮船退场，歌从章头就一直在 */
        lines:['那天晚上，三卷帛书就这么离开了。',
               '风没拦住，海也没拦住。',
               '倒是有人把这事记下来了。'] }
    ],
  
    hotspots: [],
    steps: [],
  
    reveals: {
      waybill: {
        img: 'assets/waybill_wide.jpg',
        title: '码头托运单（存根）',
        date: '民国三十五年七月二十五日 · 十六铺',
        lines: [
          '发货人：柯强',
          '货物名称：私人书籍，木箱一只',
          '$目的地：美国 · 哈佛大学福格博物馆',
          '起运港：上海十六铺',
          '备注栏空白，没有申报文物。'
        ],
        sign: '存根 · 第七联'
      }
    },
  
    extras: {},
    locked: {},
    idle: ['雾大得看不清对岸。', '江水一下一下拍着石阶。', '来往的人没谁多看那只箱子一眼。'],
  
    outro: [
      '雾从两边涌上来，几下就把船影吞掉了。',
      '那只箱子冲着大洋对面去了，船尾的灯越来越小。',
      '这只箱子再被人打开，是三年以后。',
      '至于它哪天能回家，那时候没人敢算。'
    ]
  };
  return CHAP3;
})();

/* ---------- 第四章 ---------- */
const CHAP4 = (() => {
  const IMG = {
    v1946 : 'assets/vault_1946.jpg',
    v2024 : 'assets/vault_2024.jpg',
    point : 'assets/scene_harper_point.jpg',   // 同机位，他站进来抬手指路
    shadow: 'assets/cutin_shadow.jpg',
    harper: 'assets/scene_harper.jpg',
    boxes : 'assets/threeboxes.jpg',
    lid0  : 'assets/boxlid_0.jpg',
    lid1  : 'assets/boxlid_1.jpg'
  };
  
  const CHAP4 = {
    id: 'ch4',
    name: '第四章 · 哈佛大学福格博物馆',
    year: '1949 至 2024',
    transition: 'sepia',   // 这一章的转场：旧照片
    epigraph: '唯有旧木盒，替它守住最初的完整。',
  
    /* 1949 库房的木地板与脚步声，从章头垫着 */
    /* 脚本：前段《悬疑3》从「一拍两散」那张字卡起，到画面褪色收 */
    bgm: { src:'assets/bgm_ch4_xuanyi.mp3', vol:.75, loopFrom:2 },
    bgmStopAtEnd: true,
    bgDim: IMG.v1946, bgLit: IMG.v1946,
    bgFront: IMG.v1946, bgBack: IMG.v1946,
    bg2024 : IMG.v2024,   // 芝加哥大学图书馆库房
    bg2024b: IMG.point,   // 同机位，跳完年他才站进来
    cutin: IMG.shadow,
    cutinHarper: IMG.harper,
  
    prologue: [
      '1949 秋 · 一拍两散',
      '哈佛大学，福格博物馆的库房。',
      '三卷帛书在这儿寄存满了期，该有个去处了。'
    ],
    storage: IMG.v1946,
    relic: { dim:IMG.lid0, lit:IMG.lid1 },
    relicHot: { x:38, y:55, w:18, h:20 },   // 跟着新版库房图挪到木盒上
    /* 每个说话的人配自己的头像。助手只有声音，不给脸。 */
    avatar: 'assets/avatar_cox.jpg',
    avatars: {
      '柯强'  : 'assets/avatar_cox.jpg',
      '夏德安': 'assets/avatar_harper.jpg',
      '盖登斯': null           // 福格修复部主任，只出剪影和声音
    },
    avatarHarper: 'assets/avatar_harper.jpg',
    cardEmpty: 'assets/card_empty.jpg',
    touchPrompt: '往架子后面走',
    touchLine: '你贴着木架站住了，里面有人在说话……',
  
    intro: [
      { who:'os', text:'它们早就登记入库了，这会儿轮到给它们定去处。' },
      { who:'os', text:'我贴着架子站着，前头有两个人在说话，声音压得挺低。' }
    ],
    introTip: '尽头那盏灯底下有两个人',
  
    hotspots: [
      /* era 标明这个热区属于哪一段。三段的热区在画面上会重叠，
         必须分开显示，否则鼠标会点中另一段的东西。 */
      { id:'gap',  step:0, era:'1949', x:38, y:4,  w:24, h:30, label:'尽头那两道人影' },
      { id:'box',  step:1, era:'1949', x:36, y:52, w:22, h:28, label:'木盒' },
      { id:'shelf',step:null, era:'1949', x:64, y:10, w:34, h:48, label:'右边那排钢架' },
      { id:'floor',step:null, era:'1949', x:6,  y:74, w:20, h:24, label:'钢架底层' },
  
      { id:'rack',   step:null, era:'2024', x:5,  y:10, w:20, h:82, label:'左边那排储柜' },
      { id:'inner',  step:null, era:'2024', x:36, y:26, w:28, h:38, label:'里侧的玻璃柜' },
  
      { id:'lidL', step:3, era:'boxes', x:6,  y:47, w:28, h:33, label:'左边那只' },
      { id:'lidM', step:3, era:'boxes', x:36, y:47, w:26, h:33, label:'中间那只' },
      { id:'lidR', step:3, era:'boxes', x:65, y:47, w:31, h:33, label:'右边那只' },
      { id:'row',  step:null, era:'boxes', x:2, y:8, w:96, h:30, label:'这一格架子' }
    ],
  
    steps: [
      { /* ① 贴着缝隙偷听 */
        hotspot:'gap',
        cutinOverride: IMG.shadow,
        dialogue:[
          { who:'盖登斯', text:'三卷都拍完照了。接下来一起收着吗？' },
          { who:'柯强', text:'在福格的寄存期满了。《四时令》寄存去大都会博物馆吧，最完整的一卷，那边也许有人识货。' },
          { who:'盖登斯', text:'那《攻守占》《五行令》呢？' },
          { who:'柯强', text:'继续存放在这里。也不知什么时候能够转手卖掉。' },
          { who:'os', text:'三卷就这么分开了。他们谈的一直是价钱，从头到尾没提过那上头写的是什么。' }
        ]
      },
      { /* ② 看那只木盒 */
        hotspot:'box',
        closeup:{ imgs:[IMG.lid0, IMG.lid0],
                  title:'一只合着的木盒',
                  caption:'盖子上贴着两张福格的馆藏标签，编号 Fogg-1946-0916，标的是 1946 年入馆寄存的日子。' +
                          '标签底下还压着几行钢笔字，一时看不清。',
                  sfx:'paper' },
        cutinOverride: IMG.point,   // 这两句旁白在跳完年之后才说，别切回 1949 的剪影
        dialogue:[
          { who:'os', text:'那只木箱。它寄存的日子，标签记得清清楚楚。' },
          { who:'os', text:'出去的日子空着。这一栏要再等七十五年才有人来填。' }
        ],
        after:{ jump2024:true, bgmStop:3400 }   /* 画面褪色的同时，悬疑渐渐消失 */
      },
      { /* ③ 夏德安指路 */
        auto:true,
        /* 脚本：换场景后《如诗般宁静》铺满。不带 keepAmb，1949 的木地板底噪就此交班 */
        bgm:{ src:'assets/bgm_ch4_ningjing.mp3', vol:.75, loopFrom:4, fade:3200 },
        cutinOverride: IMG.point,
        dialogue:[
          { who:'夏德安', act:'抬手指向高架上的某一格', harper:true, text:'在那里。它一直在。' }
        ],
        after:{ boxes:true }
      },
      { /* ④ 三只木盒里挑对的那只 */
        hotspot:'lidM',
        isPick:true,
        pickWrong:'不是这只。编号对不上。',
        closeup:{ imgs:[IMG.lid0, IMG.lid1],
                  title:'原装木盒的盖子',
                  caption:'灰被抹掉一道，底下的编号露出来了。Fogg-1946-0916，就是这只，当年跟帛书一块儿进的门。',
                  sfx:'glow' },
        dialogue:[
          { who:'夏德安', act:'把盒盖交到你手中', harper:true,
            text:'我耗费半生时间追查这套帛书的流转脉络，2006 年起便协同李零教授梳理柯强全部遗留档案，2013 年才寻访到这枚盒盖，它随柯强后人档案入藏芝加哥大学图书馆。' },
          { who:'os', text:'一起来的。我要的就是这句话，别的都在其次。' }
        ]
      },
      { /* ⑤ 收物证 + 情绪锚点 */
        auto:true,
        reveal:'boxlid',
        collect:'e4',
        dialogue:[
          { who:'夏德安', harper:true, text:'这份盒盖也许能帮到你。文物总该回到它的文化母体去。' },
          { who:'夏德安', act:'浑浊的眼里闪过一点光', harper:true,
            text:'这份盒盖承载完整流转记忆，若能借你之手，让三卷流散帛书终有一日重逢故土，便是我数十年研究最大的心愿。真诚的学术合作，终将跨越所有隔阂，盼《四时令》早日踏上归途。' },
          { who:'os', text:'他微微颔首，身影退进书架深处的阴影里。空气里全是陈纸和檀木混在一起的气味。' },
          { who:'os', text:'盒盖握在手里，木头是温的。我攥了一会儿才松开。' }
        ]
      }
    ],
  
    reveals: {
      boxlid: {
        img: 'assets/boxlid_wide.jpg',
        title: '原装木盒盒盖',
        date: 'Fogg-1946-0916 · 2024 年交还',
        lines: [
          /* 盖登斯写在盒面上的四行，按原样分行 */
          '$This box opened for',
          '$inspection by JHC and RJG',
          '$for first time at Fogg',
          '$Sept.20 1949',
          '盖登斯写下这四行那天，他们头一回打开这只盒子。'
        ],
        sign: '福格博物馆 · 库房记录'
      }
    },
  
    extras: {
      shelf:'钢架一格一格全是编号，木箱侧面都是手写的墨字。',
      rack :'柜子上全换了打印的新标签，还带二维码。这一格一格排下来，谁也不比谁特别。',
      inner:'里侧那排玻璃柜关着，里头一函一函全是线装书。',
      row  :'三只并排摆着，新的旧的挨在一块儿。灰的厚薄不一样。',
      floor:'底层堆着旧木箱和一沓卷了边的纸，走到这一格来的人不多。'
    },
  
    locked: {
      box :'先听他们把话说完。',
      lidL:'先听他们把话说完。',
      lidM:'先听他们把话说完。',
      lidR:'先听他们把话说完。'
    },
  
    idle: ['库房里全是编号。', '架子最高处的灰尘很厚。'],
  
    outro: [
      '盖子这会儿在我手里。',
      '它换不回什么，只能证明这三卷本来是一起的。',
      '这份证明递上去之后，事情就不再只靠我一个人了。',
      '一架飞机往东飞，越过整个太平洋。',
      '后来新闻里说，两卷帛书残片到了北京。'
    ]
  };
  return CHAP4;
})();

/* ---------- 第五章 ---------- */
const CHAP5 = (() => {
  const IMG = { hall:'assets/hall.jpg', case0:'assets/case_0.jpg', case1:'assets/case_1.jpg' };
  
  const CHAP5 = {
    id: 'ch5',
    name: '第五章 · 北京 国家博物馆',
    year: '2025',
    transition: 'dim',   // 这一章的转场：暗转
    epigraph: '欢迎回家。',
  
    bgmStopAtEnd: true,   // 第五章结束时把曲子淡掉
    /* 新稿改成从第五章开场的黑幕就起，音量 50% */
    bgm: { src:'assets/bgm_days.mp3', from:0, vol:.38, loopFrom:24 },
    bgDim: IMG.hall, bgLit: IMG.hall, bgFront: IMG.hall, bgBack: IMG.hall,
    cutin: IMG.hall,
    storage: IMG.hall,
    relic: { dim:IMG.case0, lit:IMG.case1 },
    relicHot: { x:32, y:38, w:32, h:32 },
    avatar: 'assets/card_e5.jpg',
    cardEmpty: 'assets/card_empty.jpg',
    touchPrompt: '走进展厅',
    touchLine: '灯光压得很低，只有那只柜子是亮的……',
  
    prologue: [
      '2025 年 7 月，北京。',
      '中国国家博物馆。',
      '隔了七十九年，两卷帛书残片就摊在这只恒温柜里。'
    ],
  
    intro: [
      { who:'os', text:'回来了，不过不是全部，是其中两卷。' },
      { who:'os', text:'我在这展厅里站了挺久。谁也不知道我是从哪一年过来的。' }
    ],
    introTip: '柜子、留言簿、那台电视，都可以看看',
  
    hotspots: [
      { id:'case',  step:0, x:32, y:38, w:32, h:32, label:'展柜' },
      { id:'book',  step:1, x:5,  y:61, w:23, h:21, label:'留言簿' },
      { id:'tv',    step:2, x:78, y:27, w:20, h:26, label:'电视' },
      { id:'window',step:null, x:0, y:2,  w:24, h:52, label:'窗格' },
      { id:'people',step:null, x:62,y:28, w:14, h:20, label:'远处的观众' },
      { id:'floor', step:null, x:30,y:80, w:44, h:18, label:'地面' }
    ],
  
    steps: [
      { /* ① 隔着玻璃看它，玻璃里映出自己 */
        hotspot:'case',
        closeup:{ imgs:[IMG.case0, IMG.case1],
                  title:'恒温展柜',
                  caption:'玻璃上浮出一张脸，是我自己的。它跟柜子里那两卷字叠在了一块儿。',
                  sfx:'glow' },
        dialogue:[
          { who:'os', text:'中间就隔着一层玻璃。可这层玻璃后头是七十九年。' },
          { who:'os', text:'蔡先生当年说，要让后人读到。这会儿总算是读到了。' }
        ]
      },
      { /* ② 翻留言簿 */
        hotspot:'book',
        closeup:{ imgs:['assets/book_0.jpg','assets/book_1.jpg'],
                  title:'观众留言簿',
                  caption:'笔迹粗的细的都有，一页写满就翻下一页。',
                  sfx:'paper' },
        reveal:'guestbook',
        dialogue:[
          { who:'os', text:'最后那一行写得特别用力，笔尖把纸背都戳透了。' }
        ]
      },
      { /* ③ 看新闻 */
        hotspot:'tv',
        reveal:'news',
        dialogue:[
          { who:'os', text:'五月十八号那天，箱子从飞机上卸下来。' },
          { who:'os', text:'从十六铺上船那晚算起，差二十几天就满七十九年。' }
        ]
      },
      { /* ④ 收物证 */
        auto:true,
        collect:'e5',
        dialogue:[
          { who:'os', text:'回来两卷，剩下那一卷《四时令》还在大洋彼岸，只能接着等。' }
        ]
      }
    ],
  
    reveals: {
      /* 留言簿：一条一条翻过去，最后一条落在金色里 */
      guestbook: {
        img: 'assets/book_1.jpg',
        title: '观众留言簿',
        date: '2025 年 7 月 · 中国国家博物馆',
        lines: [
          '带孩子来看的。他问我上面写的什么，我说，是很老很老的中国字。',
          '从长沙坐高铁来的。它出发的地方，就是我家。',
          '等了这么多年，终于。',
          '$欢迎回家。'
        ],
        bgmSeek: { at: 53, vol: .38 },   // 这一行金色落下时，曲子接到 00:53
        sign: '一个普通中国人'
      },
      news: {
        img: 'assets/news_wide.jpg',
        title: '两卷帛书残片抵达北京',
        date: '2025 年 5 月 18 日 · 新闻画面',
        lines: [
          '美国史密森尼学会把两卷楚帛书残片移交给了中方。',
          '五月十八号专机落地北京，木箱当天就入了库。',
          '$当年离开长沙的是三卷，回来的是两卷。',
          '同年七月，这两卷在中国国家博物馆公开展出。',
          '剩下那一卷还在美国。'
        ],
        sign: '2025 · 归国记录'
      }
    },
  
    extras: {
      floor :'地面擦得很干净，柜子的光都映在上面。',
      window:'侧墙那排格窗，把走廊的光漏进来一点。',
      people:'远处有个大人带着孩子在看。孩子仰头问，上面写的是什么字。'
    },
  
    locked: {
      book:'先看看柜子里的东西。',
      tv  :'先去翻翻那本留言簿。'
    },
  
    idle: ['展厅里只听得见零星的脚步声。', '射灯打得很暗，怕光把字晒坏了。', '空调的风开得很轻。'],
  
    outro: [
      '展柜的灯一盏一盏暗下去，快闭馆了。',
      '两卷帛书今晚就留在这儿。',
      '还有一卷没回来。长沙那边的柜子里，一直给它空着位置。'
    ]
  };
  return CHAP5;
})();

/* ---------- 第六章 ---------- */
const CHAP6 = (() => {
  const IMG = { hall:'assets/hall_ch6.jpg', label0:'assets/label_0.jpg', label1:'assets/label_1.jpg',
                fascimile:'assets/label_2.jpg' };
  
  const CHAP6 = {
    id: 'ch6',
    name: '第六章 · 长沙 湖南省博物馆',
    year: '2026',
    transition: 'glass',   // 这一章的转场：玻璃
    epigraph: '案未了。',
  
    /* 展厅底噪从黑幕就进，垫到点开空展柜 */
    amb: { src:'assets/amb_ch6.mp3', vol:1, loopFrom:3 },
    bgDim: IMG.hall, bgLit: IMG.hall, bgFront: IMG.hall, bgBack: IMG.hall,
    cutin: 'assets/reflection.jpg',
    storage: IMG.hall,
    relic: { dim:IMG.label0, lit:IMG.label1 },
    relicHot: { x:40, y:30, w:22, h:40 },
    avatar: 'assets/card_empty.jpg',   // 这一章没有出镜的人，这里只是占位
    cardEmpty: 'assets/card_empty.jpg',
    touchPrompt: '走到展柜前',
    touchLine: '你回到了出发的那座城市……',
  
    prologue: [
      '2026 年，长沙，湖南省博物馆。',
      '三个展柜并排摆着，中间那个是空的。'
    ],
  
    intro: [
      { who:'os', text:'绕了一大圈，最后又回到长沙。' },
      { who:'os', text:'我手上的证据比出发时多了不少。可这屋里该有的，还是缺一件。' }
    ],
    introTip: '两个亮着的柜子，和中间那个空位',
  
    hotspots: [
      { id:'caseL',  step:0, x:2,  y:22, w:26, h:50, label:'左边的柜子' },
      { id:'caseR',  step:1, x:70, y:22, w:28, h:50, label:'右边的柜子' },
      { id:'empty',  step:2, x:35, y:22, w:28, h:50, label:'空着的那个' },
      { id:'floor',  step:null, x:20, y:80, w:44, h:18, label:'地面' }
    ],
  
    steps: [
      { /* ① 左边那卷 */
        hotspot:'caseL',
        dialogue:[
          { who:'os', text:'这卷是五行令，2025 年 5 月回来的。' },
          { who:'os', text:'流落他乡约有七十九年，算下来抵得上人的一辈子。' }
        ]
      },
      { /* ② 右边那卷 */
        hotspot:'caseR',
        dialogue:[
          { who:'os', text:'这卷是攻守占，跟前面那卷一块回来的。' },
          { who:'os', text:'两卷中间空着一格。那一格不是没摆，是还没有。' }
        ]
      },
      { /* ③ 空着的那一格 */
        hotspot:'empty',
        /* 新稿：点空展柜这一下起《美丽千年》，底噪退下，一路放到结局最后一张标签 */
        bgm:{ src:'assets/bgm_mei.mp3', from:0, vol:.75, loopFrom:6 },
        closeup:{ imgs:[IMG.label0, IMG.label0],
                  title:'空展位上的标签',
                  caption:'标签上写着四时令，后面跟着三个字，追索中。灯还照着，可展台上什么都没有。',
                  sfx:'glow' },
        dialogue:[
          { who:'os', text:'四时令，三卷中保存得最好的一卷。' },
          { who:'os', text:'柯强当年说最全的一卷要单独收，结果到今天它也还没回来。' }
        ]
      },
      { /* ④ 手上的证据连成一条线。这一步只做展示，不再入槽 */
        auto:true,
        unfurl:'chain',
        ending:true
      }
    ],
  
    /* 手上的五件物证摊开成一条时间线 */
    unfurls: {
      chain: {
        img: 'assets/timeline.jpg',
        title: '一条完整的线',
        caption: '五件证据摆到一块儿，中间没有断口。',
        segments: [
          { year:'1943', what:'蔡季襄预警' },
          { year:'1946', what:'骗盗 · 出境' },
          { year:'1960 年代', what:'拆分转卖' },
          { year:'2024', what:'盒盖归' },
          { year:'2025', what:'残卷归' },
          { year:'2026', what:'案未了' }
        ]
      }
    },
  
    reveals: {},
  
    extras: {
      floor:'地面把柜子的光反上来。你现在站的位置，正对着中间那个空格。'
    },
  
    locked: {
      caseR:'先看左边那一卷。',
      empty:'两卷都看过了，再看中间。'
    },
  
    idle: ['快闭馆了，展厅里安静得能听见空调声。', '三个柜子，两个里头有东西，一个亮着，是空的。'],
  
    /* 结局：三个选项，选哪个画面都一样。选择本身就是表态。 */
    ending: {
      prompt: '证据齐了。接下来你打算怎么办',
      options: [
        '交给追索组，让谈判接着往下走',
        '归进档案，留给以后要查的人',
        '摆到那个空位旁边，让来看展的人自己看'
      ],
      after: [
        '这三条路你挑哪一条，最后停下来的地方都一样。',
        '展柜玻璃上映着你自己的脸。'
      ],
      credits: [
        '蔡季襄没有等到帛书回来。',
        '但有人等到了。',
        '还有人，在继续等。'
      ],
      lastShot: {
        img: IMG.fascimile,
        line: '有人走过来，在那个空展位旁边放下一幅《四时令》的摹本，配上一张新标签。',
        label: '四时令 · 归途有期'
      }
    },
  
    outro: []
  };
  return CHAP6;
})();

/* 章节表。引擎按 state.chapter 取当前这一章。 */
const CHAPTERS = [CHAP1, CHAP2, CHAP3, CHAP4, CHAP5, CHAP6];

