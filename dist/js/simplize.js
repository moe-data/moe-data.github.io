!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery) }(function (a) { function b(a) { return h.raw ? a : encodeURIComponent(a) } function c(a) { return h.raw ? a : decodeURIComponent(a) } function d(a) { return b(h.json ? JSON.stringify(a) : String(a)) } function e(a) { 0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a } catch (b) { } } function f(b, c) { var d = h.raw ? b : e(b); return a.isFunction(c) ? c(d) : d } var g = /\+/g, h = a.cookie = function (e, g, i) { if (void 0 !== g && !a.isFunction(g)) { if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) { var j = i.expires, k = i.expires = new Date; k.setTime(+k + 864e5 * j) } return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("") } for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) { var p = m[n].split("="), q = c(p.shift()), r = p.join("="); if (e && e === q) { l = f(r, g); break } e || void 0 === (r = f(r)) || (l[q] = r) } return l }; h.defaults = {}, a.removeCookie = function (b, c) { return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, { expires: -1 })), !a.cookie(b)) } });
var Default_isFT = 4 //默认是否繁体，0-简体，1-繁体 , 2- Japan 3 english
var StranLink_Obj
BodyIsFt = $.cookie('JF_cn')||Default_isFT
//转换文本
function StranText(txt) {
    if (txt == "" || txt == null||BodyIsFt==4) return txt;
    // toFT = toFT == null ? BodyIsFt : toFT
    // if (chgTxt)txt = txt.replace((toFT ? "简" : "繁"), (toFT ? "繁" : "简"))
    
    if (BodyIsFt) { if(BodyIsFt==2){return Japanized(txt)}else{return Traditionalized(txt) }}
    else { return Simplized(txt) }
}
//转换对象，使用递归，逐层剥到文本
var a = 1;
function StranBody(fobj) {
    console.log(BodyIsFt)
    if (typeof (fobj) == "object") { var obj = fobj.childNodes; }
    else {
        var tmptxt = StranLink_Obj.innerHTML.toString()
        if (tmptxt.indexOf("和") > -1) {
            BodyIsFt = 2
            StranLink_Obj.innerHTML = '繁體中文'// StranText(tmptxt, 0, 1)
            StranLink_Obj.title = '繁體中文'// StranText(StranLink_Obj.title, 0, 1)
        }
        else {
            if(tmptxt.indexOf("繁") > -1){
                BodyIsFt = 1
            StranLink_Obj.innerHTML = '简体中文'// StranText(tmptxt, 1, 1)
            StranLink_Obj.title = '简体中文'// StranText(StranLink_Obj.title, 1, 1)
            }else{BodyIsFt = 0
            StranLink_Obj.innerHTML = '和製漢字'// StranText(tmptxt, 1, 1)
            StranLink_Obj.title = '和製漢字'//  StranText(StranLink_Obj.title, 1, 1)}
        }}
        console.log(BodyIsFt)
        $.cookie('JF_cn', BodyIsFt, { expires: 365, path: '/' })
        // console.log('JF_cn',BodyIsFt)
        var obj = document.body.childNodes
    }
    for (var i = 0; i < obj.length; i++) {
        var OO = obj.item(i)
        if ("||BR|HR|TEXTAREA|".indexOf("|" + OO.tagName + "|") > 0 || OO == StranLink_Obj) continue;
        if (OO.title != "" && OO.title != null) OO.title = StranText(OO.title);
        if (OO.alt != "" && OO.alt != null) OO.alt = StranText(OO.alt);
        if (OO.tagName == "INPUT" && OO.value != "" && OO.type != "text" && OO.type != "hidden") OO.value = StranText(OO.value);
        if (OO.nodeType == 3) { OO.data = StranText(OO.data) }
        else StranBody(OO)
    }
}


function JTPYStr() {
    return '增标炮铳胧矶峰黑确皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄';
}
function FTPYStr() {
    return '増標炮銃朧磯峰黑確皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩';
}
function JapanStr() {
    return '増標砲銃朧磯峯黒確皚藹礙愛翺襖奥壩罷擺敗頒弁絆幫綁鎊謗剝飽宝報鮑輩貝鋇狽備憊繃筆畢斃閉辺編貶変弁弁鼈癟瀕濱賓擯餅撥缽鉑駁蔔補参蚕残慚惨燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐称懲誠騁痴遅馳恥歯熾沖虫寵疇躊籌綢醜櫥廚鋤雛礎儲触処伝瘡闖創錘純綽辞詞賜聰蔥囪従叢湊竄錯達帯貸担単鄲撣胆憚誕弾当擋党蕩檔搗島禱導盗灯鄧敵滌逓締点墊電澱釣調叠諜畳釘頂錠訂東動棟凍闘犢独読賭鍍鍛断緞兌隊対噸頓鈍奪鵝額訛悪餓児爾餌弐発罰閥琺礬釩煩範販飯訪紡飛廃費紛墳奮憤糞豊楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋干趕稈贛岡剛鋼綱崗皐鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮関観館慣貫広規矽帰亀閨軌詭櫃貴劊輥滾鍋国過駭韓漢閡鶴賀横轟鴻紅後壺護滬戸嘩華画劃話懐壊歓環還緩換喚瘓煥渙黄謊揮輝毀賄穢会燴彙諱誨絵葷渾夥獲貨禍撃機積飢譏鶏績緝極輯級擠幾薊剤済計記際継紀夾莢頰賈鉀価駕殲監堅箋間艱緘繭検堿鹼揀撿簡倹減薦檻鑑践賤見鍵艦剣餞漸濺澗漿蔣槳奨講醬膠澆驕嬌攪鉸矯僥脚餃繳絞轎較稭階節茎驚経頸静鏡径痙競浄糾廄旧駒挙拠鋸懼劇鵑絹傑潔結誡届緊錦僅謹進晉燼尽勁荊覚決訣絶鈞軍駿開凱顆殻課墾懇摳庫褲誇塊儈寛鉱曠況虧巋窺饋潰拡闊蠟臘萊来頼藍欄攔籃闌蘭瀾讕攬覧懶纜爛濫撈労澇楽鐳塁類涙籬離里鯉礼麗厲励礫暦瀝隷倆聯蓮連鐮憐漣簾斂臉鏈恋錬練糧涼両輛諒療遼鐐猟臨隣鱗凜賃齢鈴淩霊嶺領餾劉龍聾嚨籠壟攏隴楼婁摟簍蘆盧顱廬炉擄鹵虜魯賂祿録陸驢呂鋁侶屢縷慮濾緑巒攣孿灤乱掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麦売邁脈瞞饅蛮満謾猫錨鉚貿麽黴没鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓脳悩鬧餒膩攆撚醸鳥聶齧鑷鎳檸獰寧擰濘鈕紐膿濃農瘧諾欧鷗殴嘔漚盤龐国愛賠噴鵬騙飄頻貧蘋憑評潑頗撲舗樸譜臍斉騎豈啓気棄訖牽扡釺鉛遷簽謙銭鉗潜浅譴塹槍嗆牆薔強搶鍬橋喬僑翹竅窃欽親軽氫傾頃請慶瓊窮趨区軀駆齲顴権勧却鵲譲饒擾繞熱韌認紉栄絨軟鋭閏潤灑薩鰓賽傘喪騒掃渋殺紗篩曬閃陝贍繕傷賞焼紹賒摂懾設紳審嬸腎滲声縄勝聖師獅湿詩屍時蝕実識駛勢釈飾視試寿獣枢輸書贖属術樹豎数帥双誰税順説碩爍絲飼聳慫頌訟誦擻蘇訴粛雖綏歳孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談嘆湯燙濤縧騰謄銻題体屜条貼鉄庁聴烴銅統頭図塗団頹蛻脱鴕駄駝橢窪襪彎湾頑万網韋違囲為濰維葦偉偽緯謂衛温聞紋穏問甕撾蝸渦窩嗚鎢烏誣無蕪呉塢霧務誤錫犠襲習銑戯細蝦轄峡俠狭廈鍁鮮繊鹹賢銜閑顕険現献県餡羨憲線廂鑲郷詳響項蕭銷暁嘯蠍協挟携脅諧写潟謝鋅釁興洶鏽繡虚噓須許緒続軒懸選癬絢学勲詢尋馴訓訊遜圧鴉鴨啞亜訝閹煙塩厳顔閻豔厭硯彥諺験鴦楊揚瘍陽癢養様瑤揺堯遙窯謡薬爺頁業葉医銥頤遺儀彜蟻芸億憶義詣議誼訳異繹蔭陰銀飲桜嬰鷹応纓瑩蛍営熒蠅穎喲擁傭癰踊詠湧優憂郵鈾猶遊誘輿魚漁娯与嶼語籲御獄誉預馭鴛淵轅園員円縁遠願約躍鑰岳粵悦閲雲鄖勻隕運蘊醞暈韻雑災載攢暫賛贓髒鑿棗竈責択則沢賊贈紮劄軋鍘閘詐斎債氈盞斬辗嶄桟戦綻張漲帳賬脹趙蛰轍锗這貞針偵診鎮陣掙睜猙帧鄭証織職執紙摯擲幟質鐘終種腫衆诌軸皺昼驟豬諸诛燭瞩嘱貯鋳築駐専磚転賺樁荘装粧壮状錐贅墜綴諄濁兹資渍蹤綜総縦邹詛組鑽致鐘麽為隻凶准啓板里雳余鏈泄';
}
function Traditionalized(cc) {
    var str = '', ss = JTPYStr(), tt = FTPYStr(), jp = JapanStr();
    for (var i = 0; i < cc.length; i++) {
        temp = single(cc, jp, ss, str, i);
        str = single(temp, ss, tt, str, i);
        // if(cc.charCodeAt(i)>10000&&ss.indexOf(cc.charAt(i))!=-1){str+=tt.charAt(ss.indexOf(cc.charAt(i)));}
        // else str+=cc.charAt(i);
    }
    return str;
}
function Simplized(cc) {
    var str = '', ss = JTPYStr(), tt = FTPYStr(), jp = JapanStr();
    for (var i = 0; i < cc.length; i++) {
        temp = single(cc, jp, tt, str, i);
        str = single(temp, tt, ss, str, i);
        // if(cc.charCodeAt(i)>10000&&yy.indexOf(cc.charAt(i))!=-1)str+=ss.charAt(tt.indexOf(cc.charAt(i)));
        // else str+=cc.charAt(i);
    }
    return str;
}
function Japanized(cc) {
    var str = '', ss = JTPYStr(), tt = FTPYStr(), jp = JapanStr();
    for (var i = 0; i < cc.length; i++) {
        temp = single(cc, ss, tt, str, i);
        str = single(temp, tt, jp, str, i);
    }
    return str;
}
function single(cc, o, n, str, i) {
    if (cc.charCodeAt(i) > 10000 && o.indexOf(cc.charAt(i)) != -1) str += n.charAt(o.indexOf(cc.charAt(i)));
    else str += cc.charAt(i);
    return str
}


