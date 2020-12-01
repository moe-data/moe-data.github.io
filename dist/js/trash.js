  
// switch(value) {
//     case 1:
//         str = "面试";
//         break;
//     default:
//         str = "其他";
// }

// function kanji(){
//     z(1)
// var n=false
// // if(locallang()==null){console.log("langnull",locallang()); return true}
// var country=locallang().slice(0,2)
// if(country=='zh'||country=='ja'){
//     n=true}
// return n
// }
var colx=[    {
//     checkbox: true,
//     field: 'uid',
//     formatter: formatcheck,
// }, {
    title: getname('api_id'),
    field: 'api_id',
    sortable: true,
    checked: true,
    filterControl: "input",
    visible: false
}, {
    title: '艦名',
    field: 'api_name',
    filterControl: "input",
    control: "input",
    formatter: formatname,
    switchable: false
}, {
    title: '種類',
    field: 'stype',
    sortable: true,
    filterControl: "select",
    formatter: formatStype

}, {
    title: '建造',
    field: 'api_buildtime',
    filterControl: "input",
    // sortName: "true",
    sortable: true,
    formatter: formatTime
},{
    title: '最终形态',
    sortable: true,
    field: 'final_form',
    filterControl: "select",
    formatter: formatLv
}, {
    title: '改造lv',
    sortable: true,
    field: 'api_afterlv',
    filterControl: "select",
}, {
    title: '耐久',
    sortable: true,
    field: 'api_taik',
    filterControl: "input",
}, {
    title: '装甲',
    sortable: true,
    field: 'api_souk',
    // formatter: formathoug,
    filterControl: "input",
}, {
    title: '火力',
    sortable: true,
    field: 'api_houg',
    // formatter: formathoug,
    filterControl: "input"
}, {
    title: '雷装',
    sortable: true,
    field: 'api_raig',
    // formatter: formathoug,
    filterControl: "input"
}, {
    title: '対空',
    sortable: true,
    field: 'api_tyku',
    // formatter: formathoug,
    filterControl: "input"
}, {
    title: '運',
    field: 'api_luck',
    filterControl: "input"
}, {
    title: '搭載',
    field: 'api_maxeq',
    sortable: true,
    filterControl: "input"
}, {
    title: '总<br>搭<br>載',
    field: 'total_eq',
    sortable: true,
    // filterControl: "input"
}, {
    title: 'slot',
    sortable: true,
    field: 'api_slot_num',
    filterControl: "select",
}, {
    title: '艦型',
    sortable: true,
    field: 'api_ctype',
    filterControl: "input",
    // formatter: formatSex
}, {
    title: '登場',
    formatter: paramsMatter,
    field: 'api_getmes',
    filterControl: "input",
}, {
    title: '改修',
    sortable: true,
    filterControl: "input",
    field: 'api_powup'
}, {
    title: '拆解',
    sortable: true,
    filterControl: "input",
    field: 'api_broken'
}, {
    title: '油',
    sortable: true,
    filterControl: "input",
    field: 'api_fuel_max',
}, {
    title: '彈',
    sortable: true,
    filterControl: "input",
    field: 'api_bull_max',
}, {
    title: '射程',
    sortable: true,
    field: 'api_leng',
    filterControl: "select",
    formatter: formatRange
}, {
    title: '速力',
    sortable: true,
    field: 'api_soku',
    filterControl: "select",
    formatter: formatSoku
}, {
    title: '削<br>除<br><br>',
    // field: 'api_id', 
    formatter: Trash
}]


// 删除按钮事件
//   $("#remove").on("click", function() {

//       if(!confirm("是否确认删除？"))
//           return;
//       var rows = $("#mytab").bootstrapTable('getSelections'); // 获得要删除的数据
//       if(rows.length == 0) { // rows 主要是为了判断是否选中，下面的else内容才是主要
//           alert("请先选择要删除的记录!");
//           return;
//       } else {
//           var ids = new Array(); // 声明一个数组
//           $(rows).each(function() { // 通过获得别选中的来进行遍历
//               ids.push(this.id); // cid为获得到的整条数据中的一列
//           });

//           //后端删除的方法
//           deleteMs(ids)
//       }

//   })

//   // 删除访客,删除数据库内容，刷新表格即可删除
//   function deleteMs(ids) {
//       $.ajax({
//           url: basePath + "/caller/dels?ids=" + ids,
//           dataType: "json",
//           type: "get",
//           success: function(data) {
//               if(data > 0) {
//                   msg(6, "操作成功")
//                   $('#mytab').bootstrapTable('refresh', {
//                       url: basePath + '/caller/list'
//                   });
//               }
//           }
//       });
//   }

// function clone(){
//     var tar = document.getElementsByClassName("form-control bootstrap-table-filter-control-stype")[0]; 
//     var cstype = document.getElementsByClassName("cstype")[0]; 
//     oNewSel =tar.cloneNode(true);
//     cstype.appendChild(oNewSel);
//     $(cstype.firstChild).change(function () {  
//         var index=this.selectedIndex
//         console.log(tar[index])
//         tar[index].selected = true;
//     });
// }

function sortByNumber(a,b) {
    return parseInt(b.total,10) - parseInt(a.total,10);
}


    // replaceByClass('dropdown-item-marker',"<br>",'');
    // setTimeout(function(){
    // replaceByClass('dropdown-item-marker',"<br>",'');
    // if(Width()<1080){
    //     replaceBy('tag','thead',RegExp(/([\u4e00-\u9fa5]+)([\u0000-\u9fa5])/,'gi'),"$1<br>$2");
        // replaceBy('tag','thead',RegExp(/([\u4e00-\u9fa5])([\u4e00-\u9fa5])/,'g'),"$1<br>$2");
        // replaceBy('tag','thead',RegExp(/([\u4e00-\u9fa5])([\u4e00-\u9fa5])/,'g'),"$1<br>$2");
    // }
            // },     1300);
// function formatcheck(value, row, index) {
//     return {
//         checked: false
//     }
//     // return value
//     }
// function formathoug(value, row, index) {
//     var str;
//     if(typeof value == "undefined"){}else{str=value[1]}
//     return str;
// }
a={
    "api_id": 1,
    "api_name": "睦月",
    "stype": 2,
    "api_buildtime": 18,
    "api_afterlv": 20,
    "final_form": "yes",
    "HP":13,
    "api_souk": [5,18],
    "evasion": 79,
    "api_houg": [6,29],
    "api_raig": [18,59],
    "api_tyku": [7,29],
    "anti_submarine": 39,
    "sight": 17,
    "api_luck": [12,49],
    "api_maxeq": [0,0,0,0,0],
    "total_eq": 0,
    "api_soku": 10,
    "api_leng": 1,
    "api_fuel_max": 15,
    "api_bull_max": 15,
    "api_getmes": "睦月です。<br>はりきって、まいりましょー！",
    "api_backs": 3,
    "api_aftershipid": 254,
    "api_broken": [1,1,4,0],
    "api_powup": [1,1,0,0],
    "api_ctype": 28,
    "api_slot_num": 2,
    "api_sort_id": 13251,
    "api_sortno": 31,
    "api_voicef": 0,
    "api_yomi": "むつき",
    "api_afterfuel": 100,
    "api_afterbull": 100,
    "api_taik": [13,24],
  },
  {
    "api_afterbull": "100",
    "api_afterfuel": "100",
    "api_afterlv": "20",
    "api_aftershipid": "254",
    "final_form": "no",
    "api_backs": 3,
    "api_broken": [1,1,4,0],
    "api_buildtime": "18",
    "api_bull_max": "15",
    "api_ctype": "28",
    "api_fuel_max": "15",
    "api_getmes": "睦月です。<br>はりきって、まいりましょー！",
    "api_houg": [6,29],
    "api_id": 1,
    "api_leng": 1,
    "api_luck": [12,49],
    "api_maxeq": [0,0,0,0,0],
    "api_name": "睦月",
    "api_powup": [1,1,0,0],
    "api_raig": [18,59],
    "api_slot_num": 2,
    "anti_submarine": "39",
    "api_soku": "10",
    "api_sort_id": "13251",
    "api_sortno": "31",
    "api_souk": [5,18],
    "stype": 2,
    "api_taik": [13,24],
    "api_tyku": [7,29],
    "api_voicef": 0,
    "api_yomi": "むつき",
    "total_eq": 0,
    "evasion": "79",
    "sight": "17",
    "uid": 0
    }

    // function charPYStr(){
//   return '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄';
// }



// function ftPYStr(){
//   return  '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩';
// }

// function traditionalized(cc){
//   var str='';
//   for(var i=0;i<cc.length;i++){
//           if(charPYStr().indexOf(cc.charAt(i))!=-1)
//                   str+=ftPYStr().charAt(charPYStr().indexOf(cc.charAt(i)));
//           else
//                   str+=cc.charAt(i);
//   }
//   return str;
// }

// function simplized(cc){
//   var str='';
//   for(var i=0;i<cc.length;i++){
//           if(ftPYStr().indexOf(cc.charAt(i))!=-1)
//                   str+=charPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)));
//           else
//                   str+=cc.charAt(i);
//   }
//   return str;
// }

// console.log(simplized('案發餓哦if發哦'))

        // toolbox: {
        //     show : true,
        //     feature : {
        //         dataView : {show: true, readOnly: false},
        //         myAsc:{
        //             show:true,
        //             title: "正序",
        //             icon: 'image://'+ 'https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/zh/images/logo.png',
        //             onclick:function () {
        //                 //克隆对象
        //                 var tem = JSON.parse(JSON.stringify(gseries[1]));
        //                 tem.sort(sortByNumber).reverse();
        //                 myChart.setOption(editOption(tem,allTotalForOrder));
        //             }
        //         },
        //         myDesc:{
        //             show:true,
        //             title: "逆序",
        //             // icon: 'image://'+ ctx + "/images/dataAnalysis/descending.png",
        //             onclick:function () {
        //                 var tem = JSON.parse(JSON.stringify(gseries[1]));
        //                 tem.sort(sortByNumber);
        //                 myChart.setOption(editOption(tem,allTotalForOrder));
        //             }
        //         },
        //         myRestore : {
        //             show: true,
        //             title: "还原",
        //             // icon: 'image://'+ ctx + "/images/dataAnalysis/order.png",
        //             onclick:function () {
        //               myChart.setOption(editOption(gseries[1],allTotalForOrder));
        //             }
        //         },
        //         saveAsImage : {show: true}
        //     }
        // }
    


`.loading {
    /* width: 100%;
    height: 100%; */
    /* top: 0;
    left: 0;
    position: fixed; */
    display: block;
    opacity: 0.7;
    background-color: #fffd;
    z-index: 99;
    text-align: center;
    }

/*
 * Sidebar
 */

/* Hide for mobile, show later */
/* .sidebar {
  display: none;
} */
/* Scrollable contents if viewport is shorter than content. */
/* @media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; 
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
} */
.bg {
    background: url('1.jpg');
    height:600px;
    text-align: center;
    line-height: 600px;
}
.bg-blur {
    float: left;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
}
/* Sidebar navigation 20px padding + 1px border */
/* .nav-sidebar {
  margin-right: -21px;
  margin-bottom: 20px;
  margin-left: -20px;
}
.nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
}
.nav-sidebar > .active > a,
.nav-sidebar > .active > a:hover,
.nav-sidebar > .active > a:focus {
  color: #fff;
  background-color: #428bca;
} */`
// function groupBy( array , id ) {
//     let groups = {};
//     array.forEach( function( o ) {
//         let group = JSON.stringify( o[id] );
//         groups[group] = groups[group] || [];
//         groups[group].push( o );
//     });
//     return Object.values(groups);
// }
function group2By( array, i,s ) {
    let groups = {};
    array.forEach( function( o ) {
        let group = JSON.stringify( o[i]+o[s] );
        groups[group] = groups[group] || [];
        groups[group].push( o );
    });
    return Object.values(groups);
}
// let name = "name"
// let list = [
//     {"name": "John","Average":15,"High":10,"DtmStamp":1358226000000},
//     {"name": "Jane","Average":16,"High":92,"DtmStamp":1358226000000},
//     {"name": "Jane","Average":16,"High":45,"DtmStamp":1358226000000},
//     {"name": "John","Average":18,"High":87,"DtmStamp":1358226000000},
//     {"name": "Jane","Average":15,"High":10,"DtmStamp":1358226060000},
//     {"name": "John","Average":16,"High":87,"DtmStamp":1358226060000},
//     {"name": "John","Average":16,"High":45,"DtmStamp":1358226060000},
//     {"name": "Jane","Average":18,"High":92,"DtmStamp":1358226060000}
// ];
// // let sorted = groupBy(list, name);
// // console.log(sorted);
// let sorted = group2By(list, name,"Average");
// console.log(sorted);

getRootPath = function(){
    //获取当前网址，如： http://localhost:8080/ems/Pages/Basic/Person.jsp
    var curWwwPath = window.document.location.href;
    //获取主机地址之后的目录，如： /ems/Pages/Basic/Person.jsp
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8080
    var localhostPath = curWwwPath.substring(0, pos);
    //获取带"/"的项目名，如：/ems
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    return localhostPath;
};
    console.log(getRootPath())

    var emoji=""
    switch(type) {
        // case 1:
        //     emoji= "🧨"
        //   break;
        // case 2:
        //     emoji= "🧨"
        //   break;
        // case 3:
        //     emoji= "🧨"
        //   break;
        // case 16:
        //     emoji= "🍾"
        //   break;
        case 6:
            emoji= "🛫🟩"
          break;
        case 7:
            emoji= "🛫🟥"
          break;
        case 8:
            emoji= "🛫🟦"
          break;
        case 10:
            emoji= "✈️"
          break;
        case 11:
            emoji= "〽️"
          break;
        case 19:
            emoji= "⚙️"
          break;
        case 23:
            emoji= "🟪"
          break;
        case 13:
            emoji= "🖍️"
          break;
        // case 18:
        //     emoji= "🧿"
        //   break;
        // case 17:
        //     emoji= ""
        //   break;
        case 9:
            emoji= "🛩️"
          break;
        case 25:
            emoji= "🛢️"
          break;
        // case 30:
        //     emoji= "📤"
        //   break;
        // case 37:
        //     emoji= ""
        //   break;
        // case 44:
        //     emoji= "🛩️"
        //   break;
        }
        