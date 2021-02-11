var app
const TimezoneOffset = (new Date()).getTimezoneOffset() * 60000
const araboffset = TimezoneOffset + 4 * 60 * 60000
app=({
  data:[{
    game_id: 101,
    wiki_id: "A01",
    category: 1,
    type: 1,
    name: "はじめての「編成」！",
    detail: "２隻以上の艦で構成される「艦隊」を編成せよ！",
    reward_fuel: 20,
    reward_ammo: 20,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "白雪",
      category: "艦娘",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 102,
    wiki_id: "A02",
    category: 1,
    type: 1,
    name: "「駆逐隊」を編成せよ！",
    detail: "駆逐艦４隻以上で構成される「駆逐隊」を編成せよ！",
    reward_fuel: 30,
    reward_ammo: 30,
    reward_steel: 30,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速建造材",
      amount: 1
    }],
    prerequisite: [101],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "駆逐",
        amount: 4
      }]
    }
  }, {
    game_id: 103,
    wiki_id: "A03",
    category: 1,
    type: 1,
    name: "「水雷戦隊」を編成せよ！",
    detail: "軽巡洋艦を旗艦とし、数隻の駆逐艦で構成される「水雷戦隊」を編成せよ！",
    reward_fuel: 40,
    reward_ammo: 40,
    reward_steel: 0,
    reward_bauxite: 40,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [102],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "軽巡",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 3
      }]
    }
  }, {
    game_id: 104,
    wiki_id: "A04",
    category: 1,
    type: 1,
    name: "６隻編成の艦隊を編成せよ！",
    detail: "全6隻で構成される主力艦隊を編成せよ！",
    reward_fuel: 50,
    reward_ammo: 0,
    reward_steel: 50,
    reward_bauxite: 0,
    reward_other: [{
      name: "第2艦隊開放"
    }],
    prerequisite: [103],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "艦",
        amount: 6
      }]
    }
  }, {
    game_id: 105,
    wiki_id: "A05",
    category: 1,
    type: 1,
    name: "軽巡２隻を擁する隊を編成せよ！",
    detail: "軽巡洋艦２隻を擁する高速艦隊を編成せよ！",
    reward_fuel: 60,
    reward_ammo: 60,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [103],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "軽巡",
        amount: 2
      }]
    }
  }, {
    game_id: 106,
    wiki_id: "A07",
    category: 1,
    type: 1,
    name: "「重巡戦隊」を編成せよ！",
    detail: "重巡洋艦２隻を擁する重巡艦隊を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 70,
    reward_steel: 0,
    reward_bauxite: 30,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }],
    prerequisite: [105],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "重巡",
        amount: 2
      }]
    }
  }, {
    game_id: 107,
    wiki_id: "A12",
    category: 1,
    type: 1,
    name: "「空母機動部隊」を編成せよ！",
    detail: "空母1隻以上を旗艦とし、その護衛艦艇と共に、空母機動部隊を編成せよ！",
    reward_fuel: 50,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [106],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "空母",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 3
      }]
    }
  }, {
    game_id: 108,
    wiki_id: "A08",
    category: 1,
    type: 1,
    name: "「天龍」型軽巡姉妹の全２艦を編成せよ！",
    detail: "天龍型軽巡洋艦「天龍」「龍田」を同一艦隊に配属せよ！",
    reward_fuel: 100,
    reward_ammo: 100,
    reward_steel: 100,
    reward_bauxite: 50,
    reward_other: [{
      name: "高速建造材",
      amount: 2
    }],
    prerequisite: [105],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "天龍"
      }, {
        ship: "龍田"
      }]
    }
  }, {
    game_id: 109,
    wiki_id: "A14",
    category: 1,
    type: 1,
    name: "「川内」型軽巡姉妹の全３艦を編成せよ！",
    detail: "川内型軽巡洋艦「川内」「神通」「那珂」を同一艦隊に配属せよ！",
    reward_fuel: 100,
    reward_ammo: 0,
    reward_steel: 100,
    reward_bauxite: 0,
    reward_other: [{
      name: "第3艦隊開放"
    }],
    prerequisite: [106],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "川内"
      }, {
        ship: "神通"
      }, {
        ship: "那珂"
      }]
    }
  }, {
    game_id: 110,
    wiki_id: "A15",
    category: 1,
    type: 1,
    name: "「妙高」型重巡姉妹の全４隻を編成せよ！",
    detail: "妙高型重巡洋艦「妙高」「那智」「足柄」「羽黒」を同一艦隊に配属せよ！",
    reward_fuel: 150,
    reward_ammo: 100,
    reward_steel: 150,
    reward_bauxite: 100,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [109],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "妙高"
      }, {
        ship: "那智"
      }, {
        ship: "足柄"
      }, {
        ship: "羽黒"
      }]
    }
  }, {
    game_id: 111,
    wiki_id: "A17",
    category: 1,
    type: 1,
    name: "「扶桑」型戦艦姉妹の全２隻を編成せよ！",
    detail: "扶桑型戦艦「扶桑」「山城」を同一艦隊に配属せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 200,
    reward_bauxite: 200,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [108],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "扶桑"
      }, {
        ship: "山城"
      }]
    }
  }, {
    game_id: 112,
    wiki_id: "A18",
    category: 1,
    type: 1,
    name: "「伊勢」型戦艦姉妹の全２隻を編成せよ！",
    detail: "伊勢型戦艦「伊勢」「日向」を同一艦隊に配属せよ！",
    reward_fuel: 300,
    reward_ammo: 200,
    reward_steel: 300,
    reward_bauxite: 200,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [111],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "伊勢"
      }, {
        ship: "日向"
      }]
    }
  }, {
    game_id: 113,
    wiki_id: "A13",
    category: 1,
    type: 1,
    name: "戦艦と重巡による主力艦隊を編成せよ！",
    detail: "戦艦1隻以上、重巡2隻以上を主力とした水上打撃艦隊を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速建造材",
      amount: 2
    }],
    prerequisite: [107],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "戦艦",
        amount: 1
      }, {
        ship: "重巡",
        amount: 2
      }],
      disallowed: "航戦"
    }
  }, {
    game_id: 114,
    wiki_id: "A19",
    category: 1,
    type: 1,
    name: "「南雲機動部隊」を編成せよ！",
    detail: "一航戦「赤城」「加賀」二航戦「飛龍」「蒼龍」からなる第一機動部隊を編成せよ！",
    reward_fuel: 500,
    reward_ammo: 500,
    reward_steel: 500,
    reward_bauxite: 500,
    reward_other: [{
      name: "高速建造材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 4
    }],
    prerequisite: [113],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "赤城"
      }, {
        ship: "加賀"
      }, {
        ship: "飛龍"
      }, {
        ship: "蒼龍"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 115,
    wiki_id: "A06",
    category: 1,
    type: 1,
    name: "第２艦隊を編成せよ！",
    detail: "二つ目の艦隊、第２艦隊の旗艦を指定して、第２艦隊を編成せよ！",
    reward_fuel: 50,
    reward_ammo: 50,
    reward_steel: 100,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速建造材",
      amount: 1
    }],
    prerequisite: [104],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "艦",
        amount: 1
      }],
      fleetid: 2
    }
  }, {
    game_id: 116,
    wiki_id: "A09",
    category: 1,
    type: 1,
    name: "「水上機母艦」を配備せよ！",
    detail: "多数の水上偵察機を運用する「水上機母艦」を艦隊に配備せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [104],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "水母",
        amount: 1
      }]
    }
  }, {
    game_id: 117,
    wiki_id: "A11",
    category: 1,
    type: 1,
    name: "第２艦隊で空母機動部隊を編成せよ！",
    detail: "第２艦隊に空母を配備して、空母機動部隊を編成せよ！",
    reward_fuel: 100,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "高速建造材",
      amount: 2
    }],
    prerequisite: [215],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "空母",
        amount: 1
      }, {
        ship: "駆逐",
        amount: 2
      }],
      fleetid: 2
    }
  }, {
    game_id: 118,
    wiki_id: "A16",
    category: 1,
    type: 1,
    name: "「金剛」型による高速戦艦部隊を編成せよ！",
    detail: "金剛型戦艦「金剛」「比叡」「榛名」「霧島」全４隻の高速戦艦を集中配備せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "第4艦隊開放"
    }],
    prerequisite: [110],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "金剛"
      }, {
        ship: "比叡"
      }, {
        ship: "榛名"
      }, {
        ship: "霧島"
      }]
    }
  }, {
    game_id: 119,
    wiki_id: "A20",
    category: 1,
    type: 1,
    name: "「三川艦隊」を編成せよ！",
    detail: "「鳥海」「青葉」「加古」「古鷹」「天龍」を含む高速艦隊を編成せよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 200,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }],
    prerequisite: [113],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "鳥海"
      }, {
        ship: "青葉"
      }, {
        ship: "加古"
      }, {
        ship: "古鷹"
      }, {
        ship: "天龍"
      }, {
        ship: "高速艦",
        amount: 1
      }]
    }
  }, {
    game_id: 120,
    wiki_id: "A10",
    category: 1,
    type: 1,
    name: "「第六駆逐隊」を編成せよ！",
    detail: "「暁」「響」「雷」「電」4隻による第六駆逐隊を編成せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [116],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "暁"
      }, {
        ship: "響"
      }, {
        ship: "雷"
      }, {
        ship: "電"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 121,
    wiki_id: "A21",
    category: 1,
    type: 1,
    name: "「第四戦隊」を編成せよ！",
    detail: "「愛宕」「高雄」「鳥海」「摩耶」を基幹とした第四戦隊を編成せよ！",
    reward_fuel: 300,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [119],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "愛宕"
      }, {
        ship: "高雄"
      }, {
        ship: "鳥海"
      }, {
        ship: "摩耶"
      }]
    }
  }, {
    game_id: 122,
    wiki_id: "A22",
    category: 1,
    type: 1,
    name: "「西村艦隊」を編成せよ！",
    detail: "「扶桑」「山城」「最上」「時雨」を基幹とした西村艦隊を編成せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 200,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [121],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "扶桑"
      }, {
        ship: "山城"
      }, {
        ship: "最上"
      }, {
        ship: "時雨"
      }]
    }
  }, {
    game_id: 123,
    wiki_id: "A23",
    category: 1,
    type: 1,
    name: "「第五航空戦隊」を編成せよ！",
    detail: "「翔鶴」「瑞鶴」を基幹とし、駆逐艦2隻を加えた第五航空戦隊を編成せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [122],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "翔鶴"
      }, {
        ship: "瑞鶴"
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 124,
    wiki_id: "A24",
    category: 1,
    type: 1,
    name: "新「三川艦隊」を編成せよ！",
    detail: "「鳥海」「青葉」「衣笠」「加古」「古鷹」「天龍」からなる三川艦隊を編成せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [121],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "鳥海"
      }, {
        ship: "青葉"
      }, {
        ship: "衣笠"
      }, {
        ship: "加古"
      }, {
        ship: "古鷹"
      }, {
        ship: "天龍"
      }]
    }
  }, {
    game_id: 125,
    wiki_id: "A25",
    category: 1,
    type: 1,
    name: "潜水艦隊を編成せよ！",
    detail: "伊号潜水艦2隻からなる潜水艦隊を編成せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [121],
    requirements: {
      category: "fleet",
      groups: [{
        ship: ["潜水艦", "潜水空母"],
        amount: 2
      }]
    }
  }, {
    game_id: 126,
    wiki_id: "A26",
    category: 1,
    type: 1,
    name: "航空水上打撃艦隊を編成せよ！",
    detail: "航空戦艦2隻と航空巡洋艦2隻を基幹とする艦隊を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 200,
    reward_bauxite: 200,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }],
    prerequisite: [122],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "航戦",
        amount: 2
      }, {
        ship: "航巡",
        amount: 2
      }]
    }
  }, {
    game_id: 127,
    wiki_id: "A27",
    category: 1,
    type: 1,
    name: "中規模潜水艦隊を編成せよ！",
    detail: "伊号潜水艦3隻以上からなる潜水艦隊を編成せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [121],
    requirements: {
      category: "fleet",
      groups: [{
        ship: ["潜水艦", "潜水空母"],
        amount: 3
      }]
    }
  }, {
    game_id: 128,
    wiki_id: "A28",
    category: 1,
    type: 1,
    name: "「第六戦隊」を編成せよ！",
    detail: "「古鷹」「加古」「青葉」「衣笠」を基幹とした第六戦隊を編成せよ！",
    reward_fuel: 250,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [120],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "古鷹"
      }, {
        ship: "加古"
      }, {
        ship: "青葉"
      }, {
        ship: "衣笠"
      }]
    }
  }, {
    game_id: 129,
    wiki_id: "A29",
    category: 1,
    type: 1,
    name: "「第五艦隊」を編成せよ！",
    detail: "「那智」「足柄」「多摩」「木曾」を中核とした「第五艦隊」を編成せよ！",
    reward_fuel: 200,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }],
    prerequisite: [121],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "那智"
      }, {
        ship: "足柄"
      }, {
        ship: "多摩"
      }, {
        ship: "木曾"
      }]
    }
  }, {
    game_id: 130,
    wiki_id: "A30",
    category: 1,
    type: 1,
    name: "「第一水雷戦隊」を編成せよ！",
    detail: "「阿武隈」「曙」「潮」「霞」「不知火」を中核とした「第一水雷戦隊」を編成せよ！",
    reward_fuel: 200,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [129],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "阿武隈"
      }, {
        ship: "曙"
      }, {
        ship: "潮"
      }, {
        ship: "霞"
      }, {
        ship: "不知火"
      }]
    }
  }, {
    game_id: 131,
    wiki_id: "A31",
    category: 1,
    type: 1,
    name: "「第八駆逐隊」を編成せよ！",
    detail: "「朝潮」「満潮」「大潮」「荒潮」4隻による第八駆逐隊を編成せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }],
    prerequisite: [125],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "朝潮"
      }, {
        ship: "満潮"
      }, {
        ship: "大潮"
      }, {
        ship: "荒潮"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 132,
    wiki_id: "A32",
    category: 1,
    type: 1,
    name: "「第十八駆逐隊」を編成せよ！",
    detail: "「霞」「霰」「陽炎」「不知火」4隻による第十八駆逐隊を編成せよ！",
    reward_fuel: 180,
    reward_ammo: 180,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }, {
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [239],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "霞"
      }, {
        ship: "霰"
      }, {
        ship: "陽炎"
      }, {
        ship: "不知火"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 133,
    wiki_id: "A33",
    category: 1,
    type: 1,
    name: "「第三十駆逐隊(第一次)」を編成せよ！",
    detail: "「睦月」「如月」「弥生」「望月」4隻による第三十駆逐隊(第一次)を編成せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [131],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "睦月"
      }, {
        ship: "如月"
      }, {
        ship: "弥生"
      }, {
        ship: "望月"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 134,
    wiki_id: "WA01",
    category: 1,
    type: 1,
    name: "式の準備！(その参)",
    detail: "第一艦隊旗艦に練度の高い(Lv.90以上～99以下)艦娘を配備して気持ちを整理せよ！",
    reward_fuel: 88,
    reward_ammo: 88,
    reward_steel: 88,
    reward_bauxite: 88,
    reward_other: [{
      name: "家具箱（大）",
      amount: 1
    }],
    prerequisite: [306],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "艦",
        flagship: true,
        lv: [90, 99]
      }]
    }
  }, {
    game_id: 135,
    wiki_id: "WA02",
    category: 1,
    type: 1,
    name: "新たなる旅立ち！",
    detail: "第一艦隊旗艦に強い絆を結んだLv.100以上の艦娘を配備した6隻の艦隊を編成せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 200,
    reward_bauxite: 200,
    reward_other: [{
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [245],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "艦",
        flagship: true,
        lv: [100, 999]
      }, {
        ship: "艦",
        amount: 5
      }]
    }
  }, {
    game_id: 136,
    wiki_id: "A34",
    category: 1,
    type: 1,
    name: "「第三十駆逐隊(第二次)」を編成せよ！",
    detail: "「睦月」「弥生」「卯月」「望月」4隻による第三十駆逐隊(第二次)を編成せよ！",
    reward_fuel: 220,
    reward_ammo: 220,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }],
    prerequisite: [133],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "睦月"
      }, {
        ship: "弥生"
      }, {
        ship: "卯月"
      }, {
        ship: "望月"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 137,
    wiki_id: "A35",
    category: 1,
    type: 1,
    name: "「第五戦隊」を編成せよ！",
    detail: "「妙高」「那智」「羽黒」を基幹とした第五戦隊を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 5
    }],
    prerequisite: [248],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "妙高"
      }, {
        ship: "那智"
      }, {
        ship: "羽黒"
      }]
    }
  }, {
    game_id: 138,
    wiki_id: "A36",
    category: 1,
    type: 1,
    name: "新編「第二航空戦隊」を編成せよ！",
    detail: "「飛龍改二」(※旗艦)及び「蒼龍」を基幹とした二航戦(要駆逐艦2隻)を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [128],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "飛龍改二",
        flagship: true
      }, {
        ship: "蒼龍"
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 139,
    wiki_id: "A37",
    category: 1,
    type: 1,
    name: "潜水艦隊「第六艦隊」を編成せよ！",
    detail: "「潜水母艦」と複数の潜水艦(4隻以上)からなる潜水艦隊「第六艦隊」を編成せよ！",
    reward_fuel: 250,
    reward_ammo: 250,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }],
    prerequisite: [127],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "潜水母艦",
        flagship: true
      }, {
        ship: ["潜水艦", "潜水空母"],
        amount: 4
      }]
    }
  }, {
    game_id: 140,
    wiki_id: "A38",
    category: 1,
    type: 1,
    name: "新型電探を配備せよ！",
    detail: "新型電探運用試験のため、第一艦隊の旗艦に「妙高改二」を配備せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "22号対水上電探改四",
      category: "装備",
      amount: 1
    }],
    prerequisite: [137],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "妙高改二",
        flagship: true
      }],
      fleetid: 1
    }
  }, {
    game_id: 141,
    wiki_id: "A39",
    category: 1,
    type: 1,
    name: "再編成「第二航空戦隊」を強化せよ！",
    detail: "「蒼龍改二」(※旗艦)及び「飛龍改二」を基幹とした二航戦(要駆逐艦2隻)を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 450,
    reward_other: [{
      name: "高速建造材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [250],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "蒼龍改二",
        flagship: true
      }, {
        ship: "飛龍改二"
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 142,
    wiki_id: "A40",
    category: 1,
    type: 1,
    name: "精鋭「第三戦隊」全艦集結せよ！",
    detail: "第二次改装を完了した改装金剛型高速戦艦4隻を集結させよ！",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "試製35.6cm三連装砲",
      category: "装備",
      amount: 1
    }],
    prerequisite: [246],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "金剛改二"
      }, {
        ship: "比叡改二"
      }, {
        ship: "榛名改二"
      }, {
        ship: "霧島改二"
      }]
    }
  }, {
    game_id: 143,
    wiki_id: "A41",
    category: 1,
    type: 1,
    name: "「新型正規空母」を配備せよ！",
    detail: "雲龍型航空母艦一番艦「雲龍」を第一艦隊機旗艦に配備せよ！",
    reward_fuel: 100,
    reward_ammo: 100,
    reward_steel: 100,
    reward_bauxite: 300,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [123],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "雲龍",
        flagship: true
      }],
      fleetid: 1
    }
  }, {
    game_id: 144,
    wiki_id: "A42",
    category: 1,
    type: 1,
    name: "主力戦艦部隊「第二戦隊」を編成せよ！",
    detail: "長門型2隻及び扶桑型2隻の計4隻の主力戦艦からなる第二戦隊を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 250,
    reward_steel: 250,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }],
    prerequisite: [132],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "長門"
      }, {
        ship: "陸奥"
      }, {
        ship: "扶桑"
      }, {
        ship: "山城"
      }]
    }
  }, {
    game_id: 145,
    wiki_id: "A43",
    category: 1,
    type: 1,
    name: "戦艦を主力とした水上打撃部隊を編成せよ！",
    detail: "大和型・長門型・伊勢型・扶桑型のいずれか3隻と軽巡1隻他の水上打撃部隊を配備せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }],
    prerequisite: [258],
    requirements: {
      category: "fleet",
      groups: [{
        shipclass: ["大和", "長門", "伊勢", "扶桑"],
        amount: 3
      }, {
        ship: "軽巡",
        amount: 1
      }]
    }
  }, {
    game_id: 146,
    wiki_id: "A45",
    category: 1,
    type: 1,
    name: "改修工廠を準備せよ！",
    detail: "第一艦隊の旗艦に工作艦「明石」を配備、改修工廠の準備を実施せよ！",
    reward_fuel: 100,
    reward_ammo: 0,
    reward_steel: 100,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 5
    }, {
      name: "改修工廠開放"
    }],
    prerequisite: [116],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "明石",
        flagship: true
      }],
      fleetid: 1
    }
  }, {
    game_id: 147,
    wiki_id: "A44",
    category: 1,
    type: 1,
    name: "「西村艦隊」を再編成せよ！",
    detail: "「扶桑」「山城」「最上」「時雨」「満潮」を基幹とした西村艦隊を編成せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "改修資材",
      amount: 3
    }],
    prerequisite: [137, 224],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "扶桑"
      }, {
        ship: "山城"
      }, {
        ship: "最上"
      }, {
        ship: "時雨"
      }, {
        ship: "満潮"
      }]
    }
  }, {
    game_id: 148,
    wiki_id: "A46",
    category: 1,
    type: 1,
    name: "軽快な「水上反撃部隊」を編成せよ！",
    detail: "駆逐艦「霞」を旗艦とした重巡「足柄」及び軽巡1隻駆逐艦4隻の水上挺身部隊を編成せよ！",
    reward_fuel: 250,
    reward_ammo: 250,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [123],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "霞",
        flagship: true
      }, {
        ship: "足柄"
      }, {
        ship: "軽巡",
        amount: 1
      }, {
        ship: "駆逐",
        amount: 3
      }]
    }
  }, {
    game_id: 149,
    wiki_id: "A47",
    category: 1,
    type: 1,
    name: "「第十一駆逐隊」を編成せよ！",
    detail: "特I型駆逐艦「吹雪」「白雪」「初雪」「叢雲」4隻による第十一駆逐隊を編成せよ！",
    reward_fuel: 110,
    reward_ammo: 110,
    reward_steel: 110,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }],
    prerequisite: [132],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "吹雪"
      }, {
        ship: "白雪"
      }, {
        ship: "初雪"
      }, {
        ship: "叢雲"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 150,
    wiki_id: "A48",
    category: 1,
    type: 1,
    name: "「第二一駆逐隊」を編成せよ！",
    detail: "「初春」「子日」「若葉」「初霜」4隻による第二一駆逐隊を編成せよ！",
    reward_fuel: 210,
    reward_ammo: 210,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }],
    prerequisite: [267],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "初春"
      }, {
        ship: "子日"
      }, {
        ship: "若葉"
      }, {
        ship: "初霜"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 151,
    wiki_id: "A49",
    category: 1,
    type: 1,
    name: "「第二二駆逐隊」を編成せよ！",
    detail: "「皐月」「文月」「長月」他1隻計駆逐艦4隻による第二二駆逐隊を編成せよ！",
    reward_fuel: 220,
    reward_ammo: 220,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [271],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "皐月"
      }, {
        ship: "文月"
      }, {
        ship: "長月"
      }, {
        ship: "駆逐",
        amount: 1
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 152,
    wiki_id: "A50",
    category: 1,
    type: 1,
    name: "「三川艦隊」を新編、突入準備せよ！",
    detail: "第一艦隊において、「鳥海改ニ」を旗艦とする「三川艦隊」を編成せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }],
    prerequisite: [136, 227],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "鳥海改二",
        flagship: true
      }, {
        ship: ["天龍", "古鷹", "加古", "青葉", "夕張", "衣笠"],
        select: 5
      }],
      fleetid: 1
    }
  }, {
    game_id: 153,
    wiki_id: "A51",
    category: 1,
    type: 1,
    name: "「第十八戦隊」を新編成せよ！",
    detail: "軽巡洋艦「天龍」「龍田」を基幹戦力とした「第十八戦隊」を4隻以上で新編成せよ！",
    reward_fuel: 180,
    reward_ammo: 180,
    reward_steel: 0,
    reward_bauxite: 180,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [274],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "天龍"
      }, {
        ship: "龍田"
      }, {
        ship: "艦",
        amount: [2, 99]
      }]
    }
  }, {
    game_id: 154,
    wiki_id: "A52",
    category: 1,
    type: 1,
    name: "海上突入部隊を編成せよ！",
    detail: "戦艦「比叡」「霧島」軽巡「長良」駆逐艦「暁」「雷」「電」による海上突入部隊を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [227],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "比叡"
      }, {
        ship: "霧島"
      }, {
        ship: "長良"
      }, {
        ship: "暁"
      }, {
        ship: "雷"
      }, {
        ship: "電"
      }]
    }
  }, {
    game_id: 155,
    wiki_id: "A53",
    category: 1,
    type: 1,
    name: "新編「第六駆逐隊」を編成せよ！",
    detail: "「暁改二」を旗艦とした「響」「雷」「電」4隻による第六駆逐隊を編成せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "探照灯",
      category: "装備",
      amount: 1
    }],
    prerequisite: [224],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "暁改二",
        flagship: true
      }, {
        ship: "響"
      }, {
        ship: "雷"
      }, {
        ship: "電"
      }]
    }
  }, {
    game_id: 156,
    wiki_id: "A54",
    category: 1,
    type: 1,
    name: "「第一水雷戦隊」北方突入準備！",
    detail: "「阿武隈」を旗艦として「響」「初霜」「若葉」「五月雨」「島風」による一水戦を編成せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "家具箱（中）",
      amount: 1
    }],
    prerequisite: [201, 240],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "阿武隈",
        flagship: true
      }, {
        ship: "響"
      }, {
        ship: "初霜"
      }, {
        ship: "若葉"
      }, {
        ship: "五月雨"
      }, {
        ship: "島風"
      }]
    }
  }, {
    game_id: 157,
    wiki_id: "A55",
    category: 1,
    type: 1,
    name: "「第一水雷戦隊」北方再突入準備！",
    detail: "「阿武隈改二」を旗艦として「響」「夕雲」「長波」「秋雲」「島風」の一水戦を再編成せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "家具箱（中）",
      amount: 1
    }],
    prerequisite: [309],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "阿武隈改二",
        flagship: true
      }, {
        ship: "響"
      }, {
        ship: "夕雲"
      }, {
        ship: "長波"
      }, {
        ship: "秋雲"
      }, {
        ship: "島風"
      }]
    }
  }, {
    game_id: 158,
    wiki_id: "A92",
    category: 1,
    type: 1,
    name: "精鋭無比「第一戦隊」抜錨準備！",
    detail: "主力戦艦編成任務：第一艦隊旗艦に「長門改二」、同二番艦に「陸奥改二」から編成される第一戦隊を配備、精鋭無比の水上打撃艦隊を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 800,
    reward_steel: 800,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "41cm連装砲",
        amount: 2
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "開発資材",
        amount: 8
      }]
    }, {
      name: "三式弾改",
      amount: 1
    }],
    prerequisite: [856],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "長門改二",
        flagship: true
      }, {
        ship: "陸奥改二",
        place: 2
      }]
    }
  }, {
    game_id: 161,
    wiki_id: "A56",
    category: 1,
    type: 1,
    name: "「第五航空戦隊」を再編成せよ！",
    detail: "「翔鶴」「瑞鶴」と随伴駆逐艦「朧」「秋雲」を基幹とした第五航空戦隊を再編成せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }],
    prerequisite: [123, 264],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "翔鶴"
      }, {
        ship: "瑞鶴"
      }, {
        ship: "朧"
      }, {
        ship: "秋雲"
      }]
    }
  }, {
    game_id: 162,
    wiki_id: "A57",
    category: 1,
    type: 1,
    name: "新編「第二一戦隊」出撃準備！",
    detail: "「那智改二」「足柄改二」及び「多摩」「木曾」を基幹とした、第二一戦隊を編成せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 150,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "改修資材",
      amount: 2
    }],
    prerequisite: [152, 263],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "那智改二"
      }, {
        ship: "足柄改二"
      }, {
        ship: "多摩"
      }, {
        ship: "木曾"
      }]
    }
  }, {
    game_id: 163,
    wiki_id: "A58",
    category: 1,
    type: 1,
    name: "「第十六戦隊(第一次)」を編成せよ！",
    detail: "「足柄」を旗艦として「球磨」「長良」を擁する、第十六戦隊(第一次)を編成せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 150,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [119],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "足柄",
        flagship: true
      }, {
        ship: "球磨"
      }, {
        ship: "長良"
      }]
    }
  }, {
    game_id: 164,
    wiki_id: "A59",
    category: 1,
    type: 1,
    name: "「第三航空戦隊」を編成せよ！",
    detail: "「瑞鶴改」を旗艦とし、「瑞鳳」「千歳」「千代田」を加えた4隻の空母部隊を編成せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "熟練搭乗員",
      amount: 1
    }],
    prerequisite: [264, 624],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "瑞鶴改",
        flagship: true
      }, {
        ship: "瑞鳳"
      }, {
        ship: "千歳航",
        note: "軽母"
      }, {
        ship: "千代田航",
        note: "軽母"
      }]
    }
  }, {
    game_id: 165,
    wiki_id: "A60",
    category: 1,
    type: 1,
    name: "「第四航空戦隊」を編成せよ！",
    detail: "航空戦艦「伊勢改」及び「日向改」を基幹戦力とした第四航空戦隊を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "改修資材",
      amount: 2
    }, {
      name: "瑞雲(六三四空)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [293],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "伊勢改"
      }, {
        ship: "日向改"
      }]
    }
  }, {
    game_id: 166,
    wiki_id: "A61",
    category: 1,
    type: 1,
    name: "「小沢艦隊」を編成せよ！",
    detail: "「瑞鶴改」旗艦、空母「瑞鳳改」「千歳」「千代田」及び「伊勢改」「日向改」を配備せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [165, 266],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "瑞鶴改",
        flagship: true
      }, {
        ship: "瑞鳳改"
      }, {
        ship: "千歳航",
        note: "軽母"
      }, {
        ship: "千代田航",
        note: "軽母"
      }, {
        ship: "伊勢改"
      }, {
        ship: "日向改"
      }]
    }
  }, {
    game_id: 167,
    wiki_id: "A62",
    category: 1,
    type: 1,
    name: "新航空戦隊を編成せよ！",
    detail: "改二改装を終えた翔鶴型航空母艦2隻と同護衛艦による新航空戦隊を新編成せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 300,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 1
    }, {
      name: "熟練搭乗員",
      amount: 1
    }],
    prerequisite: [632],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "翔鶴改二"
      }, {
        ship: "瑞鶴改二"
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 168,
    wiki_id: "A63",
    category: 1,
    type: 1,
    name: "「第十六戦隊(第二次)」を編成せよ！",
    detail: "「名取」を旗艦として「五十鈴」「鬼怒」を擁する、第十六戦隊(第二次)を編成せよ！",
    reward_fuel: 160,
    reward_ammo: 160,
    reward_steel: 160,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [289],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "名取",
        flagship: true
      }, {
        ship: "五十鈴"
      }, {
        ship: "鬼怒"
      }]
    }
  }, {
    game_id: 169,
    wiki_id: "A64",
    category: 1,
    type: 1,
    name: "「新編成航空戦隊」を編成せよ！",
    detail: "空母2隻+航空戦艦/航空巡洋艦2隻+駆逐艦2隻の新航空戦隊を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "改修資材",
      amount: 2
    }],
    prerequisite: [287, 295],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "空母",
        amount: 2
      }, {
        ship: ["航巡", "航戦"],
        amount: 2
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 170,
    wiki_id: "A65",
    category: 1,
    type: 1,
    name: "精強な「水上反撃部隊」を再編成せよ！",
    detail: "駆逐艦「霞」旗艦、「足柄」「大淀」「朝霜」「清霜」他の水上反撃部隊を再編成せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }],
    prerequisite: [148, 296],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "霞",
        flagship: true
      }, {
        ship: "足柄"
      }, {
        ship: "大淀"
      }, {
        ship: "朝霜"
      }, {
        ship: "清霜"
      }]
    }
  }, {
    game_id: 171,
    wiki_id: "A66",
    category: 1,
    type: 1,
    name: "「第三十一戦隊(第一次)」を編成せよ！",
    detail: "「五十鈴改二」旗艦、「皐月改二」「卯月改」を含む、対潜機動水上部隊を編成せよ！",
    reward_fuel: 310,
    reward_ammo: 310,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [216, 295],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "五十鈴改二",
        flagship: true
      }, {
        ship: "皐月改二"
      }, {
        ship: "卯月改"
      }]
    }
  }, {
    game_id: 172,
    wiki_id: "A67",
    category: 1,
    type: 1,
    name: "「第二七駆逐隊」を編成せよ！",
    detail: "「白露改」旗艦、「時雨」「春雨」「五月雨」4隻による第二七駆逐隊を編成せよ！",
    reward_fuel: 0,
    reward_ammo: 270,
    reward_steel: 270,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [131, 216],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "白露改",
        flagship: true
      }, {
        ship: "時雨"
      }, {
        ship: "春雨"
      }, {
        ship: "五月雨"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 173,
    wiki_id: "A68",
    category: 1,
    type: 1,
    name: "強行高速輸送部隊を編成せよ！",
    detail: "「川内改二」旗艦、「江風改二」「時雨改二」他駆逐2隻による水雷戦隊を編成せよ！",
    reward_fuel: 100,
    reward_ammo: 100,
    reward_steel: 100,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }],
    prerequisite: [293],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "川内改二",
        flagship: true
      }, {
        ship: "江風改二"
      }, {
        ship: "時雨改二"
      }, {
        ship: "駆逐",
        amount: 2
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 174,
    wiki_id: "A69",
    category: 1,
    type: 1,
    name: "新編「水雷戦隊」を含む艦隊を再編成せよ！",
    detail: "軽巡級を旗艦とした駆逐艦4隻からなる強力な水雷戦隊を含む艦隊を再編成せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }],
    prerequisite: [104, 293],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "軽巡",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 4
      }]
    }
  }, {
    game_id: 175,
    wiki_id: "A70",
    category: 1,
    type: 1,
    name: "新編「第八駆逐隊」を再編成せよ！",
    detail: "「朝潮改二」を旗艦とした「満潮」「大潮」「荒潮」4隻による第八駆逐隊を再編成せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }],
    prerequisite: [239],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "朝潮改二",
        flagship: true
      }, {
        ship: "大潮"
      }, {
        ship: "満潮"
      }, {
        ship: "荒潮"
      }]
    }
  }, {
    game_id: 176,
    wiki_id: "A71",
    category: 1,
    type: 1,
    name: "精鋭！八駆第一小隊！",
    detail: "「朝潮改二丁」及び「大潮改二」を含む艦隊を編成せよ！",
    reward_fuel: 250,
    reward_ammo: 250,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [819],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "朝潮改二丁"
      }, {
        ship: "大潮改二"
      }]
    }
  }, {
    game_id: 177,
    wiki_id: "A72",
    category: 1,
    type: 1,
    name: "「第十九駆逐隊」を編成せよ！",
    detail: "特型駆逐艦「磯波」「浦波」「綾波」「敷波」4隻による第十九駆逐隊を編成せよ！",
    reward_fuel: 190,
    reward_ammo: 190,
    reward_steel: 190,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "戦闘糧食",
      amount: 1
    }],
    prerequisite: [201, 240],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "磯波"
      }, {
        ship: "浦波"
      }, {
        ship: "綾波"
      }, {
        ship: "敷波"
      }]
    }
  }, {
    game_id: 178,
    wiki_id: "A73",
    category: 1,
    type: 1,
    name: "「第十六戦隊(第三次)」を編成せよ！",
    detail: "「鬼怒」「青葉」「北上」「大井」を擁する、第十六戦隊(第三次)を編成せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 200,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [295],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "鬼怒"
      }, {
        ship: "青葉"
      }, {
        ship: "北上"
      }, {
        ship: "大井"
      }]
    }
  }, {
    game_id: 179,
    wiki_id: "A74",
    category: 1,
    type: 1,
    name: "精鋭「第十六戦隊」を再編成せよ！",
    detail: "「鬼怒改二」を旗艦として、「北上改二」「大井改二」「球磨改」及び<br>「青葉改」「浦波改」「敷波改」から5隻、計6隻の精鋭「第十六戦隊」を再編成せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [835],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "鬼怒改二",
        flagship: true
      }, {
        ship: ["北上改二", "大井改二", "球磨改", "青葉改", "浦波改", "敷波改"],
        select: 5
      }]
    }
  }, {
    game_id: 180,
    wiki_id: "A75",
    category: 1,
    type: 1,
    name: "新編「第一戦隊」を編成せよ！",
    detail: "編成任務：第一艦隊に新改装された長門型戦艦一番艦「長門改二」及び同二番艦「陸奥改」からなる<br>新編第一戦隊を配備せよ！",
    reward_fuel: 0,
    reward_ammo: 880,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [258],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "長門改二"
      }, {
        ship: "陸奥改"
      }],
      fleetid: 1
    }
  }, {
    game_id: 181,
    wiki_id: "A76",
    category: 1,
    type: 1,
    name: "新編「第七戦隊」を編成せよ！",
    detail: "編成任務：第一艦隊旗艦に新改装された改鈴谷型「熊野改二」、同二番艦に「鈴谷改二」、<br>僚艦に「最上改」「三隈改」を配した新編第七戦隊を配備せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 700,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [303, 851],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "熊野改二",
        flagship: true
      }, {
        ship: "鈴谷改二",
        place: 2
      }, {
        ship: "最上改"
      }, {
        ship: "三隈改"
      }],
      fleetid: 1
    }
  }, {
    game_id: 182,
    wiki_id: "A77",
    category: 1,
    type: 1,
    name: "精鋭「第四航空戦隊」を再編成せよ！",
    detail: "編成任務：第一艦隊旗艦及び同二番艦に練度50以上の航空戦艦「伊勢」「日向」を配備、<br>随伴艦に軽巡洋艦1隻、駆逐艦2隻他を伴う精鋭「第四航空戦隊」を再編成せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "開発資材",
      amount: 4
    }, {
      name: "熟練搭乗員",
      amount: 1
    }],
    prerequisite: [165, 224],
    requirements: {
      category: "fleet",
      groups: [{
        ship: ["伊勢改", "日向改"],
        flagship: true,
        lv: [50, 999]
      }, {
        ship: ["伊勢改", "日向改"],
        place: 2,
        lv: [50, 999]
      }, {
        ship: "軽巡",
        amount: 1
      }, {
        ship: "駆逐",
        amount: 2
      }, {
        ship: "艦",
        amount: 1
      }],
      fleetid: 1
    }
  }, {
    game_id: 183,
    wiki_id: "A78",
    category: 1,
    type: 1,
    name: "新編「第四水雷戦隊」を編成せよ！",
    detail: "編成任務：第一艦隊旗艦に「由良改二」を配備、随伴艦に二駆「村雨」「夕立」「春雨」「五月雨」<br>他1隻の駆逐艦を配備、新編「第四水雷戦隊」を編成せよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 4
    }, {
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [156, 225],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "由良改二",
        flagship: true
      }, {
        ship: "村雨"
      }, {
        ship: "夕立"
      }, {
        ship: "春雨"
      }, {
        ship: "五月雨"
      }, {
        ship: "駆逐",
        amount: 1
      }],
      fleetid: 1
    }
  }, {
    game_id: 184,
    wiki_id: "A79",
    category: 1,
    type: 1,
    name: "精鋭「第二二駆逐隊」を再編成せよ！",
    detail: "編成任務：「文月改二」「皐月改二」「水無月改」「長月改」の精強駆逐艦4隻の編成による<br>精鋭第二二駆逐隊を再編成せよ！",
    reward_fuel: 220,
    reward_ammo: 0,
    reward_steel: 220,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "戦闘糧食",
      amount: 2
    }],
    prerequisite: [270],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "文月改二"
      }, {
        ship: "皐月改二"
      }, {
        ship: "水無月改"
      }, {
        ship: "長月改"
      }]
    }
  }, {
    game_id: 185,
    wiki_id: "A80",
    category: 1,
    type: 1,
    name: "精強「任務部隊」を編成せよ！",
    detail: "編成任務：第一艦隊旗艦に「Saratoga Mk.II」または同「Mod.2」を配備、随伴艦に<br>軽巡洋艦1隻、駆逐艦2隻以上を配した夜間作戦可能な機動部隊を新編せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      choices: [{
        name: "F6F-3",
        amount: 1
      }, {
        name: "F4U-1D",
        amount: 1
      }]
    }, {
      choices: [{
        name: "TBF",
        amount: 1
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }]
    }],
    prerequisite: [114, 201],
    requirements: {
      category: "fleet",
      groups: [{
        ship: ["Saratoga Mk.II", "Saratoga Mk.II Mod.2"],
        flagship: true
      }, {
        ship: "軽巡洋艦",
        amount: 1
      }, {
        ship: "駆逐艦",
        amount: 2
      }],
      fleetid: 1
    }
  }, {
    game_id: 186,
    wiki_id: "A81",
    category: 1,
    type: 1,
    name: "最精鋭「第八駆逐隊」を編成せよ！",
    detail: "精鋭駆逐隊編成任務：「朝潮改二」「大潮改二」「荒潮改二」「満潮改二」の<br>最精鋭朝潮型駆逐艦4隻による新編「第八駆逐隊」の編成を完了せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "戦闘糧食",
      amount: 1
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [821, 870],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "朝潮改二"
      }, {
        ship: "大潮改二"
      }, {
        ship: "荒潮改二"
      }, {
        ship: "満潮改二"
      }]
    }
  }, {
    game_id: 187,
    wiki_id: "A82",
    category: 1,
    type: 1,
    name: "「西村艦隊」第二戦隊随伴部隊、集結せよ！",
    detail: "捷一号作戦準備任務：第一遊撃部隊第三部隊の中核となる第二戦隊の随伴艦を編成する。<br>各艦隊から艦艇を抽出、第三艦隊に「最上」「時雨」「満潮」「朝雲」「山雲」を配備せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "給糧艦「伊良湖」",
        amount: 2
      }, {
        name: "特注家具職人",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }]
    }, {
      name: "高速修復材",
      amount: 3
    }],
    prerequisite: [402, 429],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "最上"
      }, {
        ship: "時雨"
      }, {
        ship: "満潮"
      }, {
        ship: "朝雲"
      }, {
        ship: "山雲"
      }],
      fleetid: 3
    }
  }, {
    game_id: 188,
    wiki_id: "A83",
    category: 1,
    type: 1,
    name: "精鋭「三一駆」第一小隊、抜錨準備！",
    detail: "編成任務：「長波改二」旗艦、僚艦に「高波改」または「沖波改」「朝霜改」を配した、第三一駆逐隊第一小隊(2隻艦隊)を編成せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "特注家具職人",
        amount: 1
      }, {
        name: "戦闘糧食(特別なおにぎり)",
        amount: 2
      }]
    }, {
      name: "高速修復材",
      amount: 2
    }],
    prerequisite: [239, 673],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "長波改二",
        flagship: true
      }, {
        ship: ["高波改", "沖波改", "朝霜改"],
        select: 1
      }]
    }
  }, {
    game_id: 189,
    wiki_id: "A84",
    category: 1,
    type: 1,
    name: "精鋭「四水戦」抜錨準備！",
    detail: "四水戦(4Sd)特別編成：「村雨改二」旗艦と精鋭四水戦「由良改二」「夕立改二」「春雨改」「五月雨改」<br>「秋月改」より3隻、さらに主力艦2隻を配備した、有力な特務艦隊を編成、南方海域出撃に備えよ！",
    reward_fuel: 0,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "応急修理女神",
      amount: 1
    }],
    prerequisite: [183, 263],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "村雨改二",
        flagship: true
      }, {
        ship: ["由良改二", "夕立改二", "春雨改", "五月雨改", "秋月改"],
        select: 3
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 190,
    wiki_id: "A85",
    category: 1,
    type: 1,
    name: "精鋭「第二一駆逐隊」、抜錨準備！",
    detail: "精鋭駆逐隊編成任務：捷一号作戦を支援する。同決戦正面の基地航空への資材輸送任務のため、<br>「若葉改」「初春改二」「初霜改二」を含む3～4隻の精鋭「第二一駆逐隊」の編成を完了せよ！",
    reward_fuel: 100,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "戦闘糧食",
      amount: 1
    }],
    prerequisite: [269],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "若葉改"
      }, {
        ship: "初春改二"
      }, {
        ship: "初霜改二"
      }, {
        ship: "駆逐",
        amount: [0, 1]
      }]
    }
  }, {
    game_id: 191,
    wiki_id: "A86",
    category: 1,
    type: 1,
    name: "改装「第十七駆逐隊」、再編始め！",
    detail: "改装駆逐隊編成任務：改装した陽炎型駆逐艦「浦風改」「谷風改」、そして対空戦闘の激化に備え、<br>対空兵装を軸に大幅強化改装した「磯風乙改」「浜風乙改」による「第十七駆逐隊」を再編せよ！",
    reward_fuel: 170,
    reward_ammo: 170,
    reward_steel: 170,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 1
    }, {
      name: "補強増設",
      amount: 1
    }],
    prerequisite: [680, 808],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "浦風改",
        amount: 1
      }, {
        ship: "谷風改",
        amount: 1
      }, {
        ship: "磯風乙改",
        amount: 1
      }, {
        ship: "浜風乙改",
        amount: 1
      }]
    }
  }, {
    game_id: 192,
    wiki_id: "A87",
    category: 1,
    type: 1,
    name: "精鋭「第十八駆逐隊」を編成せよ！",
    detail: "精鋭駆逐隊編成任務：「霰改二」「霞改二/改二乙」「陽炎改」「不知火改」4隻による精鋭「第十八駆逐隊」を編成せよ！",
    reward_fuel: 180,
    reward_ammo: 0,
    reward_steel: 180,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "補強増設",
        amount: 1
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }],
    prerequisite: [805],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "霰改二",
        amount: 1
      }, {
        ship: ["霞改二", "霞改二乙"],
        amount: 1
      }, {
        ship: "陽炎改",
        amount: 1
      }, {
        ship: "不知火改",
        amount: 1
      }]
    }
  }, {
    game_id: 193,
    wiki_id: "A88",
    category: 1,
    type: 1,
    name: "最精鋭甲型駆逐艦、集結せよ！",
    detail: "甲型駆逐隊編成任務：「陽炎改二」「不知火改二」「黒潮改二」を集中配備、さらに練度70以上の甲型駆逐艦【陽炎型/夕雲型駆逐艦】を3隻集中配備、精鋭艦隊型駆逐隊を編成せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 150,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "12.7cm連装砲C型改二",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }],
    prerequisite: [603, 871],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "陽炎改二"
      }, {
        ship: "不知火改二"
      }, {
        ship: "黒潮改二"
      }, {
        shipclass: ["陽炎", "夕雲"],
        amount: 3,
        lv: [70, 999]
      }]
    }
  }, {
    game_id: 194,
    wiki_id: "A89",
    category: 1,
    type: 1,
    name: "精鋭「第十八戦隊」を再編成せよ！",
    detail: "旧式小型軽巡部隊の改装再編成：改天龍型軽巡「天龍改二」及び「龍田改二」の2隻で構成される精鋭「第十八戦隊」を再編成せよ！",
    reward_fuel: 180,
    reward_ammo: 0,
    reward_steel: 180,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "開発資材",
        amount: 5
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }],
    prerequisite: [275],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "天龍改二"
      }, {
        ship: "龍田改二"
      }]
    }
  }, {
    game_id: 195,
    wiki_id: "A90",
    category: 1,
    type: 1,
    name: "精強「第十七駆逐隊」を編成せよ！",
    detail: "改装甲型駆逐隊編成任務：対空兵装を軸に大幅強化改装した「磯風乙改」「浜風乙改」、そして対潜兵装を強化改装した「浦風丁改」「谷風丁改」による、精鋭「第十七駆逐隊」を編成せよ！",
    reward_fuel: 170,
    reward_ammo: 170,
    reward_steel: 0,
    reward_bauxite: 170,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 1
    }, {
      choices: [{
        name: "戦闘糧食",
        amount: 2
      }, {
        name: "高速修復材",
        amount: 3
      }]
    }],
    prerequisite: [191, 603],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "磯風乙改"
      }, {
        ship: "浜風乙改"
      }, {
        ship: "浦風丁改"
      }, {
        ship: "谷風丁改"
      }]
    }
  }, {
    game_id: 196,
    wiki_id: "A91",
    category: 1,
    type: 1,
    name: "精鋭「第十駆逐隊」、抜錨準備！",
    detail: "甲型駆逐艦編成任務：夕雲型駆逐艦「夕雲改二」および「巻雲改二」の2隻から成る精鋭第十駆逐隊(2隻編成)を編成せよ！",
    reward_fuel: 200,
    reward_ammo: 0,
    reward_steel: 200,
    reward_bauxite: 0,
    reward_other: [{
      name: "戦闘糧食",
      amount: 1
    }, {
      choices: [{
        name: "高速修復材",
        amount: 5
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }],
    prerequisite: [184],
    requirements: {
      category: "fleet",
      groups: [{
        ship: "夕雲改二"
      }, {
        ship: "巻雲改二"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 201,
    wiki_id: "Bd01",
    category: 2,
    type: 2,
    name: "敵艦隊を撃破せよ！",
    detail: "艦隊を出撃させ、敵艦隊を捕捉、これを撃滅せよ！",
    reward_fuel: 50,
    reward_ammo: 50,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [204],
    requirements: {
      category: "sortie",
      result: "B",
      times: 1
    }
  }, {
    game_id: 202,
    wiki_id: "B01",
    category: 2,
    type: 1,
    name: "はじめての「出撃」！",
    detail: "艦隊を出撃させ、敵艦隊と交戦せよ！",
    reward_fuel: 20,
    reward_ammo: 20,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "sortie",
      times: 1
    }
  }, {
    game_id: 203,
    wiki_id: "B02",
    category: 2,
    type: 1,
    name: "鎮守府正面海域を護れ！",
    detail: "鎮守府正面海域に艦隊を出撃させ、敵艦の跳梁を阻止せよ！",
    reward_fuel: 30,
    reward_ammo: 30,
    reward_steel: 30,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }],
    prerequisite: [202],
    requirements: {
      category: "sortie",
      map: "1-1",
      boss: true,
      result: "B",
      times: 1
    }
  }, {
    game_id: 204,
    wiki_id: "B04",
    category: 2,
    type: 1,
    name: "南西諸島沖に出撃せよ！",
    detail: "南西諸島沖に艦隊を出撃させ、敵艦隊と交戦せよ！",
    reward_fuel: 40,
    reward_ammo: 40,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }],
    prerequisite: [203],
    requirements: {
      category: "sortie",
      map: "1-2",
      times: 1
    }
  }, {
    game_id: 205,
    wiki_id: "B05",
    category: 2,
    type: 1,
    name: "接近する「敵前衛艦隊」を迎撃せよ！",
    detail: "南西諸島沖に接近する「敵前衛艦隊」を捕捉、これを撃滅せよ！",
    reward_fuel: 50,
    reward_ammo: 0,
    reward_steel: 50,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }, {
      name: "深雪",
      category: "艦娘",
      amount: 1
    }],
    prerequisite: [204],
    requirements: {
      category: "sortie",
      map: "1-2",
      boss: true,
      result: "B",
      times: 1
    }
  }, {
    game_id: 206,
    wiki_id: "B06",
    category: 2,
    type: 1,
    name: "「水雷戦隊」で出撃せよ！",
    detail: "軽巡洋艦1隻を旗艦とし、複数の駆逐艦からなる水雷戦隊で出撃せよ！",
    reward_fuel: 60,
    reward_ammo: 60,
    reward_steel: 0,
    reward_bauxite: 60,
    reward_other: [{
      name: "龍田",
      category: "艦娘",
      amount: 1
    }],
    prerequisite: [205],
    requirements: {
      category: "sortie",
      times: 1,
      groups: [{
        ship: "軽巡",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 3
      }]
    }
  }, {
    game_id: 207,
    wiki_id: "B07",
    category: 2,
    type: 1,
    name: "「重巡洋艦」を出撃させよ！",
    detail: "重巡洋艦を旗艦とした艦隊を編成、これを出撃させよ！",
    reward_fuel: 70,
    reward_ammo: 0,
    reward_steel: 70,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [206],
    requirements: {
      category: "sortie",
      times: 1,
      groups: [{
        ship: "重巡",
        flagship: true
      }]
    }
  }, {
    game_id: 208,
    wiki_id: "B08",
    category: 2,
    type: 1,
    name: "「戦艦」を出撃させよ！",
    detail: "海上の覇者、戦艦を旗艦とした艦隊を編成、これを出撃させよ！",
    reward_fuel: 0,
    reward_ammo: 150,
    reward_steel: 150,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [207],
    requirements: {
      category: "sortie",
      times: 1,
      groups: [{
        ship: "戦艦",
        flagship: true
      }],
      disallowed: "航戦"
    }
  }, {
    game_id: 209,
    wiki_id: "B09",
    category: 2,
    type: 1,
    name: "「空母機動部隊」出撃せよ！",
    detail: "空母1隻とその護衛艦艇で構成した空母機動部隊を出撃させよ！",
    reward_fuel: 200,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [208],
    requirements: {
      category: "sortie",
      times: 1,
      groups: [{
        ship: "空母",
        amount: 1
      }, {
        ship: "他の艦",
        amount: 3
      }]
    }
  }, {
    game_id: 210,
    wiki_id: "Bd03",
    category: 2,
    type: 2,
    name: "敵艦隊を10回邀撃せよ！",
    detail: "艦隊全力出撃！遊弋する敵艦隊を10回邀撃せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 200,
    reward_bauxite: 100,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [216],
    requirements: {
      category: "simple",
      subcategory: "battle",
      times: 10
    }
  }, {
    game_id: 211,
    wiki_id: "Bd04",
    category: 2,
    type: 4,
    name: "敵空母を３隻撃沈せよ！",
    detail: "艦隊の脅威となる敵空母群。これを捕捉撃滅し、3隻轟沈せよ！",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 150,
    reward_bauxite: 300,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }],
    prerequisite: [201],
    requirements: {
      category: "sink",
      amount: 3,
      ship: "敵空母"
    }
  }, {
    game_id: 212,
    wiki_id: "Bd06",
    category: 2,
    type: 5,
    name: "敵輸送船団を叩け！",
    detail: "敵の輸送船5隻以上を撃沈し、敵の補給路を寸断せよ！",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [201],
    requirements: {
      category: "sink",
      amount: 5,
      ship: "敵補給艦"
    }
  }, {
    game_id: 213,
    wiki_id: "Bw03",
    category: 2,
    type: 3,
    name: "海上通商破壊作戦",
    detail: "1週間で敵輸送船を20隻以上撃沈せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 400,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }],
    prerequisite: [216],
    requirements: {
      category: "sink",
      amount: 20,
      ship: "敵補給艦"
    }
  }, {
    game_id: 214,
    wiki_id: "Bw01",
    category: 2,
    type: 3,
    name: "あ号作戦",
    detail: "1週間の全力出撃を行い、可能な限り多くの敵艦隊を捕捉、これを迎撃せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 100,
    reward_other: [{
      name: "高速建造材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [216],
    requirements: {
      category: "a-gou"
    }
  }, {
    game_id: 215,
    wiki_id: "B03",
    category: 2,
    type: 1,
    name: "第２艦隊、出撃せよ！",
    detail: "新たに編成した「第２艦隊」を出撃させよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 200,
    reward_bauxite: 200,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [115],
    requirements: {
      category: "sortie",
      times: 1,
      fleetid: 2
    }
  }, {
    game_id: 216,
    wiki_id: "Bd02",
    category: 2,
    type: 2,
    name: "敵艦隊主力を撃滅せよ！",
    detail: "艦隊を出撃させ、敵艦隊「主力」を捕捉！これを撃滅せよ！",
    reward_fuel: 50,
    reward_ammo: 50,
    reward_steel: 50,
    reward_bauxite: 50,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [201],
    requirements: {
      category: "sortie",
      times: 1
    }
  }, {
    game_id: 217,
    wiki_id: "B10",
    category: 2,
    type: 1,
    name: "敵空母を撃沈せよ！",
    detail: "敵機動部隊を捕捉し、これを邀撃、敵空母を轟沈せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "赤城",
      category: "艦娘",
      amount: 1
    }],
    prerequisite: [117],
    requirements: {
      category: "sink",
      amount: 1,
      ship: "敵空母"
    }
  }, {
    game_id: 218,
    wiki_id: "Bd05",
    category: 2,
    type: 2,
    name: "敵補給艦を3隻撃沈せよ！",
    detail: "艦隊を出撃させ、敵補給艦を捕捉、これを撃滅せよ！",
    reward_fuel: 100,
    reward_ammo: 50,
    reward_steel: 200,
    reward_bauxite: 50,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [216],
    requirements: {
      category: "sink",
      amount: 3,
      ship: "敵補給艦"
    }
  }, {
    game_id: 219,
    wiki_id: "B11",
    category: 2,
    type: 1,
    name: "「三川艦隊」出撃せよ！",
    detail: "新編成した「三川艦隊」で出撃せよ！",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [119],
    requirements: {
      category: "sortie",
      times: 1,
      groups: [{
        ship: "鳥海"
      }, {
        ship: "青葉"
      }, {
        ship: "加古"
      }, {
        ship: "古鷹"
      }, {
        ship: "天龍"
      }, {
        ship: "高速艦",
        amount: 1
      }]
    }
  }, {
    game_id: 220,
    wiki_id: "Bw02",
    category: 2,
    type: 3,
    name: "い号作戦",
    detail: "有力な母艦航空隊で1週間の全力出撃を行い、可能な限り多くの敵空母を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 500,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [218],
    requirements: {
      category: "sink",
      amount: 20,
      ship: "敵空母"
    }
  }, {
    game_id: 221,
    wiki_id: "Bw04",
    category: 2,
    type: 3,
    name: "ろ号作戦",
    detail: "1週間の全力出撃を行い、敵輸送船団を捕捉・撃滅、敵の補給路を寸断せよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 800,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }],
    prerequisite: [214],
    requirements: {
      category: "sink",
      amount: 50,
      ship: "敵補給艦"
    }
  }, {
    game_id: 222,
    wiki_id: "B12",
    category: 2,
    type: 1,
    name: "「第六駆逐隊」出撃せよ！",
    detail: "「暁」「響」「雷」「電」による第六駆逐隊、出撃せよ！",
    reward_fuel: 200,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }],
    prerequisite: [120, 213],
    requirements: {
      category: "sortie",
      times: 1,
      groups: [{
        ship: "暁"
      }, {
        ship: "響"
      }, {
        ship: "雷"
      }, {
        ship: "電"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 223,
    wiki_id: "B13",
    category: 2,
    type: 1,
    name: "「第四戦隊」出撃せよ！",
    detail: "「愛宕」「高雄」「鳥海」「摩耶」を基幹とする第四戦隊で、バシー島沖の敵を撃滅せよ！",
    reward_fuel: 150,
    reward_ammo: 100,
    reward_steel: 150,
    reward_bauxite: 100,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }],
    prerequisite: [121],
    requirements: {
      category: "sortie",
      map: "2-2",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "愛宕"
      }, {
        ship: "高雄"
      }, {
        ship: "鳥海"
      }, {
        ship: "摩耶"
      }]
    }
  }, {
    game_id: 224,
    wiki_id: "B14",
    category: 2,
    type: 1,
    name: "「西村艦隊」出撃せよ！",
    detail: "「扶桑」「山城」「最上」「時雨」を基幹とする西村艦隊で、オリョール海の敵を撃滅せよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 400,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "家具箱（小）",
      amount: 1
    }],
    prerequisite: [122],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "扶桑"
      }, {
        ship: "山城"
      }, {
        ship: "最上"
      }, {
        ship: "時雨"
      }]
    }
  }, {
    game_id: 225,
    wiki_id: "B15",
    category: 2,
    type: 1,
    name: "「第五航空戦隊」出撃せよ！",
    detail: "「翔鶴」「瑞鶴」を基幹とする第五航空戦隊で、北方海域モーレイ海の敵を撃滅せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 700,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "家具箱（中）",
      amount: 1
    }],
    prerequisite: [123],
    requirements: {
      category: "sortie",
      map: "3-1",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "翔鶴"
      }, {
        ship: "瑞鶴"
      }]
    }
  }, {
    game_id: 226,
    wiki_id: "Bd07",
    category: 2,
    type: 2,
    name: "南西諸島海域の制海権を握れ！",
    detail: "艦隊を南西諸島海域に全力出撃させ、多数の敵艦隊「主力」群を捕捉、撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }, {
      name: "高速建造材",
      amount: 1
    }],
    prerequisite: [218],
    requirements: {
      category: "sortie",
      map: "2-1 ~ 2-5",
      boss: true,
      result: "B",
      times: 5
    }
  }, {
    game_id: 227,
    wiki_id: "B16",
    category: 2,
    type: 1,
    name: "新「三川艦隊」出撃せよ！",
    detail: "完全編成した「三川艦隊」をもって、オリョール海の敵を撃滅せよ！",
    reward_fuel: 100,
    reward_ammo: 150,
    reward_steel: 100,
    reward_bauxite: 150,
    reward_other: [{
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [124],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "鳥海"
      }, {
        ship: "青葉"
      }, {
        ship: "衣笠"
      }, {
        ship: "加古"
      }, {
        ship: "古鷹"
      }, {
        ship: "天龍"
      }]
    }
  }, {
    game_id: 228,
    wiki_id: "Bw05",
    category: 2,
    type: 3,
    name: "海上護衛戦",
    detail: "有力な対潜能力を持つ海上護衛隊によって、可能な限り多くの敵潜水艦を撃滅せよ！",
    reward_fuel: 600,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "改修資材",
      amount: 1
    }],
    prerequisite: [220],
    requirements: {
      category: "sink",
      amount: 15,
      ship: "敵潜水艦"
    }
  }, {
    game_id: 229,
    wiki_id: "Bw06",
    category: 2,
    type: 3,
    name: "敵東方艦隊を撃滅せよ！",
    detail: "西方海域に出撃し、敵東方艦隊の主力を捕捉、これを撃滅せよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 700,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [228],
    requirements: {
      category: "sortie",
      map: "4-1 ~ 4-5",
      boss: true,
      result: "B",
      times: 12
    }
  }, {
    game_id: 230,
    wiki_id: "Bd08",
    category: 2,
    type: 2,
    name: "敵潜水艦を制圧せよ！",
    detail: "対潜能力の充実した艦隊で出撃、敵潜水艦狩りを実施せよ！",
    reward_fuel: 300,
    reward_ammo: 30,
    reward_steel: 300,
    reward_bauxite: 30,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }],
    prerequisite: [226],
    requirements: {
      category: "sink",
      amount: 6,
      ship: "敵潜水艦"
    }
  }, {
    game_id: 231,
    wiki_id: "B17",
    category: 2,
    type: 1,
    name: "「潜水艦隊」出撃せよ！",
    detail: "伊号潜水艦2隻からなる潜水艦隊でオリョール海の敵を撃滅せよ！",
    reward_fuel: 150,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [125],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: ["潜水艦", "潜水空母"],
        amount: 2
      }]
    }
  }, {
    game_id: 232,
    wiki_id: "B18",
    category: 2,
    type: 1,
    name: "「航空水上打撃艦隊」出撃せよ！",
    detail: "航空戦艦2隻と航空巡洋艦2隻を基幹とする艦隊でカレー洋の制海権を握れ！",
    reward_fuel: 0,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [126],
    requirements: {
      category: "sortie",
      map: "4-2",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "航戦",
        amount: 2
      }, {
        ship: "航巡",
        amount: 2
      }]
    }
  }, {
    game_id: 233,
    wiki_id: "B19",
    category: 2,
    type: 1,
    name: "「第六戦隊」出撃せよ！",
    detail: "編成した「第六戦隊」をもって出撃し、オリョール海の敵を撃滅「完全勝利」せよ！",
    reward_fuel: 0,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "家具箱（中）",
      amount: 1
    }, {
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [128],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "古鷹"
      }, {
        ship: "加古"
      }, {
        ship: "青葉"
      }, {
        ship: "衣笠"
      }]
    }
  }, {
    game_id: 235,
    wiki_id: "B135",
    category: 2,
    type: 1,
    name: "近海哨戒を実施せよ!",
    detail: "哨戒任務：軽巡級1隻以上、駆逐艦または海防艦計3隻以上による艦隊で、鎮守府海域の南西諸島沖及び製油所地帯沿岸、南西諸島海域の南西諸島近海及びバシー海峡の哨戒を実施、敵を捕捉撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "開発資材",
        amount: 3
      }, {
        name: "高速修復材",
        amount: 3
      }, {
        name: "25mm三連装機銃",
        amount: 2
      }]
    }, {
      name: "戦闘詳報",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["1-2", "1-3", "2-1", "2-2"],
      boss: true,
      result: "S",
      groups: [{
        ship: "軽巡",
        flagship: true,
        amount: 1
      }, {
        ship: ["駆逐", "海防艦"],
        amount: 3
      }]
    }
  }, {
    game_id: 236,
    wiki_id: "B136",
    category: 2,
    type: 1,
    name: "精鋭「二四駆逐隊」出撃せよ！",
    detail: "二四駆出撃任務：「海風改二」を旗艦とし、「山風」「江風」「涼風」のうち2隻以上を含む艦隊を編成、東部オリョール海、沖ノ島海域、南方海域前面、サブ島沖海域に突入！敵艦隊を捕捉、撃滅せよ！",
    reward_fuel: 800,
    reward_ammo: 800,
    reward_steel: 800,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "13号対空電探",
        amount: 3
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }, {
      name: "12.7cm連装砲C型改二",
      amount: 1
    }],
    prerequisite: [235, 273],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["2-3", "2-4", "5-1", "5-3"],
      boss: true,
      result: "S",
      groups: [{
        ship: "海風改二",
        flagship: true
      }, {
        ship: ["山風", "江風", "涼風"],
        amount: 2
      }]
    }
  }, {
    game_id: 237,
    wiki_id: "B138",
    category: 2,
    type: 1,
    name: "「羽黒」「神風」、出撃せよ！",
    detail: "第五戦隊任務：「羽黒」「神風」を基幹として、他に重巡級1隻駆逐艦2隻、または駆逐艦4隻の艦隊で南西諸島近海、バシー海峡、東部オリョール海に出撃、敵艦隊と交戦、これを撃滅せよ！",
    reward_fuel: 516,
    reward_ammo: 0,
    reward_steel: 1945,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "新型航空兵装資材",
        amount: 1
      }, {
        name: "補強増設",
        amount: 1
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }, {
      name: "「羽黒の護り」掛け軸",
      category: "家具",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "or",
      list: [{
        category: "sortie",
        times: 1,
        map: ["2-1", "2-2", "2-3"],
        boss: true,
        result: "S",
        groups: [{
          ship: "羽黒"
        }, {
          ship: "神風"
        }, {
          ship: ["航巡", "重巡"],
          amount: 1
        }, {
          ship: "駆逐",
          amount: 2
        }]
      }, {
        category: "sortie",
        times: 1,
        map: ["2-1", "2-2", "2-3"],
        boss: true,
        result: "S",
        groups: [{
          ship: "羽黒"
        }, {
          ship: "神風"
        }, {
          ship: "駆逐",
          amount: 4
        }]
      }]
    }
  }, {
    game_id: 239,
    wiki_id: "B20",
    category: 2,
    type: 1,
    name: "「第八駆逐隊」出撃せよ！",
    detail: "編成した「第八駆逐隊」を含む艦隊で出撃し、オリョール海の敵を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 400,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }, {
      name: "家具箱（中）",
      amount: 1
    }],
    prerequisite: [131],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "朝潮"
      }, {
        ship: "満潮"
      }, {
        ship: "大潮"
      }, {
        ship: "荒潮"
      }]
    }
  }, {
    game_id: 240,
    wiki_id: "B21",
    category: 2,
    type: 1,
    name: "「第十八駆逐隊」出撃せよ！",
    detail: "編成した「第十八駆逐隊」を含む艦隊で出撃し、北方海域モーレイ海の敵を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "家具箱（大）",
      amount: 1
    }],
    prerequisite: [132],
    requirements: {
      category: "sortie",
      map: "3-1",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "霞"
      }, {
        ship: "霰"
      }, {
        ship: "陽炎"
      }, {
        ship: "不知火"
      }]
    }
  }, {
    game_id: 241,
    wiki_id: "Bw07",
    category: 2,
    type: 3,
    name: "敵北方艦隊主力を撃滅せよ！",
    detail: "北方海域の深部に出撃し、敵北方艦隊の主力艦隊を捕捉、これを撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 400,
    reward_bauxite: 300,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }, {
      name: "改修資材",
      amount: 3
    }],
    prerequisite: [228],
    requirements: {
      category: "sortie",
      map: "3-3 ~ 3-5",
      boss: true,
      result: "B",
      times: 5
    }
  }, {
    game_id: 242,
    wiki_id: "Bw08",
    category: 2,
    type: 3,
    name: "敵東方中枢艦隊を撃破せよ！",
    detail: "西方海域カスガダマ島沖に出撃し、敵東方中枢艦隊を捕捉、これを撃破せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 500,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [229],
    requirements: {
      category: "sortie",
      map: "4-4",
      boss: true,
      result: "B",
      times: 1
    }
  }, {
    game_id: 243,
    wiki_id: "Bw09",
    category: 2,
    type: 3,
    name: "南方海域珊瑚諸島沖の制空権を握れ！",
    detail: "南方海域珊瑚諸島沖に出撃し、敵機動部隊本体を捕捉撃滅、これに完全勝利せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 800,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "改修資材",
      amount: 2
    }],
    prerequisite: [242],
    requirements: {
      category: "sortie",
      map: "5-2",
      boss: true,
      result: "S",
      times: 2
    }
  }, {
    game_id: 244,
    wiki_id: "B22",
    category: 2,
    type: 1,
    name: "「第三十駆逐隊(第一次)」出撃せよ！",
    detail: "「第三十駆逐隊(第一次)」を含む艦隊で出撃し、キス島沖の主力艦隊と交戦せよ！",
    reward_fuel: 100,
    reward_ammo: 100,
    reward_steel: 100,
    reward_bauxite: 500,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [133],
    requirements: {
      category: "sortie",
      map: "3-2",
      boss: true,
      result: "C",
      times: 1,
      groups: [{
        ship: "睦月"
      }, {
        ship: "如月"
      }, {
        ship: "弥生"
      }, {
        ship: "望月"
      }]
    }
  }, {
    game_id: 245,
    wiki_id: "WB01",
    category: 2,
    type: 1,
    name: "式の準備！(最終)",
    detail: "練度の高い(Lv.90～99)第一艦隊旗艦で出撃し、オリョール海の暁に勝利を刻め！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "書類一式＆指輪",
      amount: 1
    }],
    prerequisite: [134],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "艦",
        flagship: true,
        lv: [90, 99]
      }],
      fleetid: 1
    }
  }, {
    game_id: 246,
    wiki_id: "WB02",
    category: 2,
    type: 1,
    name: "二人でする初めての任務！",
    detail: "強い絆を結んだ艦娘を旗艦とした第一艦隊でリランカ島へ出撃、敵中枢を撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 300,
    reward_other: [{
      name: "煎餅布団",
      category: "家具"
    }],
    prerequisite: [135],
    requirements: {
      category: "sortie",
      map: "4-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "艦",
        flagship: true,
        lv: [100, 999]
      }],
      fleetid: 1
    }
  }, {
    game_id: 247,
    wiki_id: "B23",
    category: 2,
    type: 1,
    name: "「航空戦艦」抜錨せよ！",
    detail: "航空戦艦2隻を基幹とする艦隊で、西方海域カスガダマ島の敵勢力を撃破せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 900,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "家具箱（大）",
      amount: 1
    }],
    prerequisite: [412],
    requirements: {
      category: "sortie",
      map: "4-4",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "航戦",
        amount: 2
      }]
    }
  }, {
    game_id: 248,
    wiki_id: "B24",
    category: 2,
    type: 1,
    name: "「第三十駆逐隊」対潜哨戒！",
    detail: "「第三十駆逐隊(第二次)」は直ちに抜錨！鎮守府正面の対潜哨戒を実施せよ！",
    reward_fuel: 330,
    reward_ammo: 330,
    reward_steel: 330,
    reward_bauxite: 0,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [136],
    requirements: {
      category: "sortie",
      map: "1-5",
      boss: true,
      result: "C",
      times: 1,
      groups: [{
        ship: "睦月"
      }, {
        ship: "弥生"
      }, {
        ship: "卯月"
      }, {
        ship: "望月"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 249,
    wiki_id: "Bm01",
    category: 2,
    type: 6,
    name: "「第五戦隊」出撃せよ！",
    detail: "「第五戦隊」は沖ノ島沖の戦闘哨戒を実施、敵艦隊主力を捕捉、これを撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 550,
    reward_steel: 550,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 5
    }, {
      name: "家具箱（大）",
      amount: 1
    }],
    prerequisite: [137],
    requirements: {
      category: "sortie",
      map: "2-5",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "妙高"
      }, {
        ship: "那智"
      }, {
        ship: "羽黒"
      }]
    }
  }, {
    game_id: 250,
    wiki_id: "B25",
    category: 2,
    type: 1,
    name: "新編「第二航空戦隊」出撃せよ！",
    detail: "新編「二航戦」を基幹とした艦隊で、珊瑚諸島沖に出撃、敵機動部隊を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 500,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [138],
    requirements: {
      category: "sortie",
      map: "5-2",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "飛龍改二",
        flagship: true
      }, {
        ship: "蒼龍"
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 251,
    wiki_id: "B26",
    category: 2,
    type: 1,
    name: "精鋭「第二航空戦隊」抜錨せよ！",
    detail: "錬成を終え再編成「二航戦」を基幹とした艦隊で、敵リランカ島を空襲、破砕せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 500,
    reward_bauxite: 0,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [141],
    requirements: {
      category: "sortie",
      map: "4-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "蒼龍改二",
        flagship: true
      }, {
        ship: "飛龍改二"
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 252,
    wiki_id: "B27",
    category: 2,
    type: 1,
    name: "戦艦「榛名」出撃せよ！",
    detail: "第二次改装実施した「榛名」を基幹とした艦隊で「南方海域」へ進出、敵艦隊主力を撃滅せよ！",
    reward_fuel: 100,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "試製35.6cm三連装砲",
      category: "装備",
      amount: 1
    }],
    prerequisite: [248],
    requirements: {
      category: "sortie",
      map: "5-1",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "榛名改二"
      }]
    }
  }, {
    game_id: 253,
    wiki_id: "B28",
    category: 2,
    type: 1,
    name: "「第六〇一航空隊」出撃せよ！",
    detail: "雲龍型航空母艦「雲龍改」含む機動部隊で珊瑚島沖に出撃、敵機動部隊を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "家具箱（大）",
      amount: 1
    }, {
      name: "熟練艦載機整備員",
      category: "装備",
      amount: 1
    }],
    prerequisite: [143],
    requirements: {
      category: "sortie",
      map: "5-2",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "雲龍改"
      }]
    }
  }, {
    game_id: 254,
    wiki_id: "B29",
    category: 2,
    type: 1,
    name: "「軽空母」戦隊、出撃せよ！",
    detail: "軽空母1～2隻、軽巡1隻、駆逐艦3～4隻の艦隊でカムラン半島の敵を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [105],
    requirements: {
      category: "sortie",
      map: "2-1",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "軽母",
        amount: [1, 2]
      }, {
        ship: "軽巡",
        amount: 1
      }, {
        ship: "駆逐",
        amount: [3, 4]
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 255,
    wiki_id: "B30",
    category: 2,
    type: 1,
    name: "「水雷戦隊」バシー島沖緊急展開",
    detail: "軽巡を旗艦とした水雷戦隊(軽巡最大2隻他駆逐艦)でバシー島沖の敵を撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "家具箱（大）",
      amount: 1
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [206],
    requirements: {
      category: "sortie",
      map: "2-2",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "軽巡",
        amount: [1, 2],
        flagship: true
      }, {
        ship: "駆逐",
        amount: [1, 99]
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 256,
    wiki_id: "Bm02",
    category: 2,
    type: 6,
    name: "「潜水艦隊」出撃せよ！",
    detail: "潜水艦戦力を中核とした艦隊で中部海域哨戒線へ反復出撃、敵戦力を漸減せよ！",
    reward_fuel: 0,
    reward_ammo: 600,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "家具箱（大）",
      amount: 2
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [255],
    requirements: {
      category: "sortie",
      map: "6-1",
      boss: true,
      result: "S",
      times: 3
    }
  }, {
    game_id: 257,
    wiki_id: "Bm03",
    category: 2,
    type: 6,
    name: "「水雷戦隊」南西へ！",
    detail: "軽巡旗艦の水雷戦隊(軽巡最大3隻他駆逐艦)を急派、南西諸島防衛線で敵を撃滅せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [221],
    requirements: {
      category: "sortie",
      map: "1-4",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "軽巡",
        flagship: true,
        amount: [1, 3]
      }, {
        ship: "駆逐",
        amount: [1, 99]
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 258,
    wiki_id: "B31",
    category: 2,
    type: 1,
    name: "「第二戦隊」抜錨！",
    detail: "「第二戦隊」を基幹とした艦隊でカレー洋に進出、反復出撃により敵海上兵力を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "一式徹甲弾",
      category: "装備",
      amount: 1
    }],
    prerequisite: [144],
    requirements: {
      category: "sortie",
      map: "4-2",
      boss: true,
      result: "S",
      times: 2,
      groups: [{
        ship: "長門"
      }, {
        ship: "陸奥"
      }, {
        ship: "扶桑"
      }, {
        ship: "山城"
      }]
    }
  }, {
    game_id: 259,
    wiki_id: "Bm04",
    category: 2,
    type: 6,
    name: "「水上打撃部隊」南方へ！",
    detail: "戦艦3隻軽巡1隻他を基幹とした水上打撃部隊で南方海域へ進出、敵艦隊を撃滅せよ！",
    reward_fuel: 350,
    reward_ammo: 400,
    reward_steel: 350,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "改修資材",
      amount: 4
    }],
    prerequisite: [145],
    requirements: {
      category: "sortie",
      map: "5-1",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        shipclass: ["大和", "長門", "伊勢", "扶桑"],
        amount: 3
      }, {
        ship: "軽巡",
        amount: 1
      }]
    }
  }, {
    game_id: 260,
    wiki_id: "B32",
    category: 2,
    type: 1,
    name: "「戦艦部隊」北方海域に突入せよ！",
    detail: "戦艦2隻と直援軽空母1隻(正規空母無し)基幹の艦隊で北方AL海域に突入、敵を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 250,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "一式徹甲弾",
      category: "装備",
      amount: 1
    }],
    prerequisite: [259],
    requirements: {
      category: "sortie",
      map: "3-5",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "戦艦",
        amount: [2, 2]
      }, {
        ship: "軽母",
        amount: [1, 1]
      }],
      disallowed: "空母"
    }
  }, {
    game_id: 261,
    wiki_id: "Bw10",
    category: 2,
    type: 3,
    name: "海上輸送路の安全確保に努めよ！",
    detail: "鎮守府正面の対潜哨戒を反復実施し、安全な海上輸送路を確保せよ！",
    reward_fuel: 100,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }],
    prerequisite: [146, 221],
    requirements: {
      category: "sortie",
      map: "1-5",
      boss: true,
      result: "A",
      times: 3
    }
  }, {
    game_id: 262,
    wiki_id: "B33",
    category: 2,
    type: 1,
    name: "「西村艦隊」南方海域へ進出せよ！",
    detail: "「西村艦隊」を南方海域に進出させ、敵主力艦隊へ突入、これを撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 500,
    reward_bauxite: 300,
    reward_other: [{
      name: "改修資材",
      amount: 5
    }, {
      name: "勲章",
      amount: 1
    }],
    prerequisite: [147],
    requirements: {
      category: "sortie",
      map: "5-1",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "扶桑"
      }, {
        ship: "山城"
      }, {
        ship: "最上"
      }, {
        ship: "時雨"
      }, {
        ship: "満潮"
      }]
    }
  }, {
    game_id: 263,
    wiki_id: "B34",
    category: 2,
    type: 1,
    name: "「第六戦隊」南西海域へ出撃せよ！",
    detail: "「古鷹」「加古」「青葉」「衣笠」を基幹とした「第六戦隊」で、沖ノ島沖の敵艦隊を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "家具箱（大）",
      amount: 1
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [233],
    requirements: {
      category: "sortie",
      map: "2-5",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "古鷹"
      }, {
        ship: "加古"
      }, {
        ship: "青葉"
      }, {
        ship: "衣笠"
      }]
    }
  }, {
    game_id: 264,
    wiki_id: "Bm06",
    category: 2,
    type: 6,
    name: "「空母機動部隊」西へ！",
    detail: "航空母艦2隻(随伴駆逐艦2隻)を基幹とする空母機動艦隊で、カレー洋の敵艦隊を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 600,
    reward_bauxite: 800,
    reward_other: [{
      name: "改修資材",
      amount: 2
    }, {
      name: "家具箱（大）",
      amount: 2
    }],
    prerequisite: [221, 239],
    requirements: {
      category: "sortie",
      map: "4-2",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "空母",
        amount: 2
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 265,
    wiki_id: "Bm05",
    category: 2,
    type: 6,
    name: "海上護衛強化月間",
    detail: "鎮守府正面海域の対潜哨戒を強化し、敵潜水艦を制圧、安全な海上輸送体制を確立せよ！",
    reward_fuel: 800,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 5
    }, {
      name: "改修資材",
      amount: 3
    }],
    prerequisite: [240, 249],
    requirements: {
      category: "sortie",
      map: "1-5",
      boss: true,
      result: "A",
      times: 10
    }
  }, {
    game_id: 266,
    wiki_id: "Bm07",
    category: 2,
    type: 6,
    name: "「水上反撃部隊」突入せよ！",
    detail: "駆逐艦を旗艦とした重巡1隻軽巡1隻駆逐艦4隻からなる水上挺身部隊、沖ノ島沖に突入せよ！",
    reward_fuel: 0,
    reward_ammo: 600,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "開発資材",
      amount: 4
    }, {
      name: "改修資材",
      amount: 2
    }],
    prerequisite: [148, 264],
    requirements: {
      category: "sortie",
      map: "2-5",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "駆逐",
        flagship: true,
        amount: 4
      }, {
        ship: "重巡",
        amount: 1
      }, {
        ship: "軽巡",
        amount: 1
      }]
    }
  }, {
    game_id: 267,
    wiki_id: "B35",
    category: 2,
    type: 1,
    name: "「第十一駆逐隊」出撃せよ！",
    detail: "「第十一駆逐隊」を含む艦隊で出撃し、オリョール海の敵を撃破せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [149],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "吹雪"
      }, {
        ship: "白雪"
      }, {
        ship: "初雪"
      }, {
        ship: "叢雲"
      }]
    }
  }, {
    game_id: 268,
    wiki_id: "B36",
    category: 2,
    type: 1,
    name: "「第十一駆逐隊」対潜哨戒！",
    detail: "「第十一駆逐隊」を含む艦隊で鎮守府正面へ展開、対潜哨戒を実施せよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "三式水中探信儀",
      category: "装備",
      amount: 1
    }],
    prerequisite: [149],
    requirements: {
      category: "sortie",
      map: "1-5",
      boss: true,
      result: "C",
      times: 1,
      groups: [{
        ship: "吹雪"
      }, {
        ship: "白雪"
      }, {
        ship: "初雪"
      }, {
        ship: "叢雲"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 269,
    wiki_id: "B37",
    category: 2,
    type: 1,
    name: "「第二一駆逐隊」出撃せよ！",
    detail: "「第二一駆逐隊」を含む艦隊で出撃し、北方海域モーレイ海の敵を撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "プレゼント箱",
      amount: 1
    }],
    prerequisite: [150],
    requirements: {
      category: "sortie",
      map: "3-1",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "初春"
      }, {
        ship: "子日"
      }, {
        ship: "若葉"
      }, {
        ship: "初霜"
      }]
    }
  }, {
    game_id: 270,
    wiki_id: "B39",
    category: 2,
    type: 1,
    name: "「第二二駆逐隊」出撃せよ！",
    detail: "「第二二駆逐隊」を含む艦隊で南西諸島防衛線に出撃、敵主力艦隊を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "家具箱（中）",
      amount: 1
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [151],
    requirements: {
      category: "sortie",
      map: "1-4",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "皐月"
      }, {
        ship: "文月"
      }, {
        ship: "長月"
      }, {
        ship: "駆逐",
        amount: 1
      }]
    }
  }, {
    game_id: 271,
    wiki_id: "B38",
    category: 2,
    type: 1,
    name: "「那智戦隊」抜錨せよ！",
    detail: "旗艦「那智」及び「初霜」「霞」「潮」「曙」他1隻の艦隊でバシー島沖の敵を撃滅せよ！",
    reward_fuel: 500,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 2
    }, {
      name: "家具箱（大）",
      amount: 1
    }],
    prerequisite: [249, 269],
    requirements: {
      category: "sortie",
      map: "2-2",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "那智",
        flagship: true
      }, {
        ship: "初霜"
      }, {
        ship: "霞"
      }, {
        ship: "潮"
      }, {
        ship: "曙"
      }, {
        ship: "艦",
        amount: 1
      }]
    }
  }, {
    game_id: 272,
    wiki_id: "B40",
    category: 2,
    type: 1,
    name: "「改装防空重巡」出撃せよ！",
    detail: "摩耶改または摩耶改二及び軽巡1駆逐2隻を含む艦隊でオリョール海の敵艦隊を撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "三式弾",
      category: "装備",
      amount: 1
    }, {
      name: "25mm三連装機銃",
      category: "装備",
      amount: 1
    }],
    prerequisite: [416],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: ["摩耶改", "摩耶改二"],
        flagship: true
      }, {
        ship: "軽巡",
        amount: 1
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 273,
    wiki_id: "B41",
    category: 2,
    type: 1,
    name: "新編「三川艦隊」ソロモン方面へ！",
    detail: "第一艦隊に編成した「三川艦隊」を南方海域に進出させ、同方面の敵艦隊を撃滅せよ！",
    reward_fuel: 480,
    reward_ammo: 480,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }, {
      name: "改修資材",
      amount: 3
    }],
    prerequisite: [307],
    requirements: {
      category: "sortie",
      map: "5-1",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "鳥海改二",
        flagship: true
      }, {
        ship: ["天龍", "古鷹", "加古", "青葉", "夕張", "衣笠"],
        select: 5
      }]
    }
  }, {
    game_id: 274,
    wiki_id: "B42",
    category: 2,
    type: 1,
    name: "「第六駆逐隊」対潜哨戒なのです！",
    detail: "「第六駆逐隊」を含む艦隊で鎮守府正面へ展開、対潜哨戒を実施せよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 200,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }, {
      name: "九三式水中聴音機",
      category: "装備",
      amount: 1
    }],
    prerequisite: [120],
    requirements: {
      category: "sortie",
      map: "1-5",
      boss: true,
      result: "C",
      times: 1,
      groups: [{
        ship: "暁"
      }, {
        ship: "響"
      }, {
        ship: "雷"
      }, {
        ship: "電"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 275,
    wiki_id: "B43",
    category: 2,
    type: 1,
    name: "抜錨！「第十八戦隊」",
    detail: "「天龍」「龍田」を基幹戦力とした「第十八戦隊」で出撃し、オリョール海の敵主力を撃滅せよ！",
    reward_fuel: 350,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 250,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [153],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "天龍"
      }, {
        ship: "龍田"
      }]
    }
  }, {
    game_id: 276,
    wiki_id: "B44",
    category: 2,
    type: 1,
    name: "海上突入部隊、進発せよ！",
    detail: "「比叡」「霧島」「長良」「暁」「雷」「電」の艦隊で、南方海域進出作戦を実施、敵を撃滅せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 500,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 5
    }, {
      name: "改修資材",
      amount: 2
    }],
    prerequisite: [154, 243],
    requirements: {
      category: "sortie",
      map: "5-1",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "比叡"
      }, {
        ship: "霧島"
      }, {
        ship: "長良"
      }, {
        ship: "暁"
      }, {
        ship: "雷"
      }, {
        ship: "電"
      }]
    }
  }, {
    game_id: 277,
    wiki_id: "B45",
    category: 2,
    type: 1,
    name: "「第六駆逐隊」対潜哨戒を徹底なのです！",
    detail: "「第六駆逐隊」を含む艦隊で鎮守府正面で対潜哨戒を実施、敵潜水艦部隊を痛打せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 2
    }, {
      name: "九三式水中聴音機",
      category: "装備",
      amount: 1
    }],
    prerequisite: [155, 274],
    requirements: {
      category: "sortie",
      map: "1-5",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "暁"
      }, {
        ship: "響"
      }, {
        ship: "雷"
      }, {
        ship: "電"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 278,
    wiki_id: "B46",
    category: 2,
    type: 1,
    name: "「第一水雷戦隊」ケ号作戦、突入せよ！",
    detail: "北方突入準備を完了した「一水戦」で北方キス島に突入！包囲網を破り、友軍を救出せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [156],
    requirements: {
      category: "sortie",
      map: "3-2",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "阿武隈",
        flagship: true
      }, {
        ship: "響"
      }, {
        ship: "初霜"
      }, {
        ship: "若葉"
      }, {
        ship: "五月雨"
      }, {
        ship: "島風"
      }]
    }
  }, {
    game_id: 279,
    wiki_id: "B47",
    category: 2,
    type: 1,
    name: "「第一水雷戦隊」北方ケ号作戦、再突入！",
    detail: "北方再突入準備の新編「一水戦」で北方キス島に再突入を敢行、同撤収作戦を完遂せよ！",
    reward_fuel: 0,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 500,
    reward_other: [{
      name: "開発資材",
      amount: 4
    }, {
      name: "改修資材",
      amount: 4
    }],
    prerequisite: [157, 309],
    requirements: {
      category: "sortie",
      map: "3-2",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "阿武隈改二",
        flagship: true
      }, {
        ship: "響"
      }, {
        ship: "夕雲"
      }, {
        ship: "長波"
      }, {
        ship: "秋雲"
      }, {
        ship: "島風"
      }]
    }
  }, {
    game_id: 280,
    wiki_id: "Bm08",
    category: 2,
    type: 6,
    name: "兵站線確保！海上警備を強化実施せよ！",
    detail: "海上警備任務：軽空母または軽巡級1隻、駆逐艦または海防艦を計3隻以上配備した海上護衛艦隊で、南西諸島沖警備、海上護衛作戦、南1号作戦、南西諸島哨戒を実施、各作戦海域の敵を撃滅せよ！",
    reward_fuel: 400,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      choices: [{
        name: "開発資材",
        amount: 4
      }, {
        name: "高速修復材",
        amount: 4
      }, {
        name: "改修資材",
        amount: 2
      }]
    }, {
      choices: [{
        name: "九五式爆雷",
        amount: 1
      }, {
        name: "25mm単装機銃",
        amount: 2
      }, {
        name: "給糧艦「伊良湖」",
        amount: 1
      }]
    }],
    prerequisite: [265, 311],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["1-2", "1-3", "1-4", "2-1"],
      boss: true,
      result: "S",
      groups: [{
        ship: ["軽空母", "軽巡"],
        amount: 1
      }, {
        ship: ["駆逐", "海防艦"],
        amount: [3, 99]
      }]
    }
  }, {
    game_id: 281,
    wiki_id: "B129",
    category: 2,
    type: 1,
    name: "精鋭無比「第一戦隊」まかり通る！",
    detail: "第一艦隊第一戦隊、改装主力戦艦「長門改二」及び「陸奥改二」を中核とした水上打撃艦隊を編成、バシー海峡、北方AL海域戦闘哨戒、カレー洋リランカ島沖及び南方海域前面の敵を捕捉撃滅せよ！",
    reward_fuel: 800,
    reward_ammo: 800,
    reward_steel: 800,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "41cm連装砲",
        amount: 4
      }, {
        name: "九一式徹甲弾",
        amount: 2
      }, {
        name: "三式弾",
        amount: 2
      }]
    }, {
      choices: [{
        name: "戦闘詳報",
        amount: 1
      }, {
        name: "試製46cm連装砲",
        amount: 1
      }, {
        name: "試製南山",
        amount: 1
      }]
    }],
    prerequisite: [158],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["2-2", "3-5", "4-5", "5-1"],
      boss: true,
      result: "S",
      groups: [{
        ship: ["長門改二", "陸奥改二"],
        flagship: true
      }, {
        ship: ["長門改二", "陸奥改二"],
        place: 2
      }, {
        ship: "艦",
        amount: 4
      }]
    }
  }, {
    game_id: 282,
    wiki_id: "B130",
    category: 2,
    type: 1,
    name: "精鋭無比「第一戦隊」まかり通る！【拡張作戦】",
    detail: "第一艦隊第一戦隊、改装主力戦艦「長門改二」及び「陸奥改二」を中核とした精鋭水上打撃艦隊を展開、南西諸島海域沖ノ島沖、南方海域サーモン海域北方、中部海域ピーコック島沖の敵戦力を撃滅せよ！",
    reward_fuel: 1000,
    reward_ammo: 1000,
    reward_steel: 1000,
    reward_bauxite: 1000,
    reward_other: [{
      choices: [{
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "改修資材",
        amount: 5
      }, {
        name: "試製46cm連装砲",
        amount: 1
      }]
    }, {
      name: "41cm連装砲改二",
      amount: 1
    }],
    prerequisite: [281],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["2-5", "5-5", "6-4"],
      boss: true,
      result: "S",
      groups: [{
        ship: ["長門改二", "陸奥改二"],
        flagship: true
      }, {
        ship: ["長門改二", "陸奥改二"],
        place: 2
      }, {
        ship: "艦",
        amount: 4
      }]
    }
  }, {
    game_id: 283,
    wiki_id: "B137",
    category: 2,
    type: 1,
    name: "精強！'第一航空戦隊'出撃せよ！",
    detail: "第一艦隊旗艦「赤城改二(改二戊)」同二番艦「加賀」の第一航空戦隊を中核とした艦隊で、カレー洋リランカ島沖、珊瑚諸島沖に展開！さらにKW環礁沖海域に反復出撃！鎧袖一触！敵を粉砕せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 1000,
    reward_bauxite: 1000,
    reward_other: [{
      choices: [{
        name: "改修資材",
        amount: 5
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }, {
        name: "熟練搭乗員",
        amount: 1
      }]
    }, {
      name: "流星改(一航戦)",
      amount: 1
    }],
    prerequisite: [272, 333],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: ["4-5", "5-2"],
        boss: true,
        result: "S",
        groups: [{
          ship: ["赤城改二", "赤城改二戊"],
          flagship: true
        }, {
          ship: ["加賀", "加賀改"],
          place: 2
        }]
      }, {
        category: "sortie",
        times: 2,
        map: "6-5",
        boss: true,
        result: "S",
        groups: [{
          ship: ["赤城改二", "赤城改二戊"],
          flagship: true
        }, {
          ship: ["加賀", "加賀改"],
          place: 2
        }]
      }]
    }
  }, {
    game_id: 284,
    wiki_id: "Bq11",
    category: 2,
    type: 7,
    name: "南西諸島方面「海上警備行動」発令！",
    detail: "海上警備任務：軽空母または軽巡級1隻、駆逐艦または海防艦を計3隻以上配備した海上護衛艦隊で、南1号作戦、南西諸島哨戒、柳作戦、オリョール哨戒を実施、各作戦海域に出没する敵を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 800,
    reward_steel: 800,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "改修資材",
        amount: 2
      }, {
        name: "九四式爆雷投射機",
        amount: 1
      }, {
        name: "ドラム缶(輸送用)",
        amount: 1
      }]
    }, {
      name: "戦果80"
    }, {
      name: "プレゼント箱"
    }],
    prerequisite: [280, 303],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["1-4", "2-1", "2-2", "2-3"],
      boss: true,
      result: "S",
      groups: [{
        ship: ["軽空母", "軽巡"],
        amount: 1
      }, {
        ship: ["駆逐", "海防艦"],
        amount: [3, 99]
      }]
    }
  }, {
    game_id: 285,
    wiki_id: "B49",
    category: 2,
    type: 1,
    name: "「空母機動部隊」北方海域に進出せよ！",
    detail: "航空母艦を旗艦とした空母機動部隊を北方AL海域方面に展開、敵戦力を撃滅せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 500,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "戦闘糧食",
      category: "装備",
      amount: 2
    }],
    prerequisite: [230, 260],
    requirements: {
      category: "sortie",
      map: "3-5",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "空母",
        flagship: true
      }]
    }
  }, {
    game_id: 286,
    wiki_id: "B48",
    category: 2,
    type: 1,
    name: "鎮守府正面の対潜哨戒を強化せよ！",
    detail: "鎮守府正面の対潜哨戒を強化し、海上資源輸送路の安全を確立せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [201, 205, 216],
    requirements: {
      category: "sortie",
      map: "1-5",
      boss: true,
      result: "A",
      times: 4
    }
  }, {
    game_id: 287,
    wiki_id: "B50",
    category: 2,
    type: 1,
    name: "「第五航空戦隊」珊瑚諸島沖に出撃せよ！",
    detail: "再編成した「第五航空戦隊」を珊瑚諸島沖に展開、敵機動部隊を捕捉撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [161],
    requirements: {
      category: "sortie",
      map: "5-2",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "翔鶴"
      }, {
        ship: "瑞鶴"
      }, {
        ship: "朧"
      }, {
        ship: "秋雲"
      }]
    }
  }, {
    game_id: 288,
    wiki_id: "B51",
    category: 2,
    type: 1,
    name: "新編「第二一戦隊」北方へ出撃せよ！",
    detail: "新編「第二一戦隊」を基幹とする艦隊で北方海域モーレイ海に出撃、敵を撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "プレゼント箱",
      amount: 1
    }, {
      name: "戦闘糧食",
      amount: 1
    }],
    prerequisite: [162],
    requirements: {
      category: "sortie",
      map: "3-1",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "那智改二"
      }, {
        ship: "足柄改二"
      }, {
        ship: "多摩"
      }, {
        ship: "木曾"
      }]
    }
  }, {
    game_id: 289,
    wiki_id: "B52",
    category: 2,
    type: 1,
    name: "「第十六戦隊(第一次)」出撃せよ！",
    detail: "「第十六戦隊(第一次)」をバシー島沖に展開、敵艦隊を撃滅せよ！",
    reward_fuel: 200,
    reward_ammo: 0,
    reward_steel: 200,
    reward_bauxite: 0,
    reward_other: [{
      name: "家具箱（中）",
      amount: 1
    }, {
      name: "プレゼント箱",
      amount: 1
    }],
    prerequisite: [163],
    requirements: {
      category: "sortie",
      map: "2-2",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "足柄",
        flagship: true
      }, {
        ship: "球磨"
      }, {
        ship: "長良"
      }]
    }
  }, {
    game_id: 290,
    wiki_id: "B128",
    category: 2,
    type: 1,
    name: "「比叡」の出撃",
    detail: "「比叡」南方海域出撃任務：高速戦艦「比叡」を旗艦とする有力な戦隊で、南方海域サブ島沖海域及びサーモン海域に出撃。同作戦海域の敵戦隊と交戦、これを撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 1113,
    reward_steel: 1942,
    reward_bauxite: 0,
    reward_other: [{
      name: "“比睿” 挂轴",
      amount: 1
    }, {
      name: "プレゼント箱",
      amount: 1
    }, {
      choices: [{
        name: "戦闘詳報",
        amount: 1
      }, {
        name: "96式150cm探照灯",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }],
    prerequisite: [287, 673, 674],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["5-3", "5-4"],
      boss: true,
      result: "S",
      groups: [{
        ship: "比叡",
        flagship: true
      }]
    }
  }, {
    game_id: 291,
    wiki_id: "B134",
    category: 2,
    type: 1,
    name: "艦隊司令部の強化 【実施段階】",
    detail: "艦隊司令部強化：「大淀」を旗艦、随伴艦に「明石」または水上機母艦を含む艦隊を編成、同艦隊で東部オリョール海、アルフォンシーノ方面、西方ジャム島沖に反復出撃、敵艦隊を捕捉撃滅せよ！",
    reward_fuel: 1200,
    reward_ammo: 1200,
    reward_steel: 1200,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "家具箱（大）",
        amount: 8
      }, {
        name: "補強増設",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }, {
      name: "司令部要員",
      amount: 1
    }],
    prerequisite: [431],
    requirements: {
      category: "sortie",
      times: 2,
      map: ["2-3", "3-3", "4-1"],
      boss: true,
      result: "S",
      groups: [{
        ship: "大淀",
        flagship: true
      }, {
        ship: ["明石", "水上機母艦"]
      }, {
        ship: "艦",
        amount: 4
      }]
    }
  }, {
    game_id: 292,
    wiki_id: "B133",
    category: 2,
    type: 1,
    name: "重改装高速戦艦「金剛改二丙」、南方突入！",
    detail: "南方海域出撃任務：「金剛改二丙」を旗艦、随伴艦に金剛型1隻、駆逐艦2隻以上を含む艦隊で、南方海域前面、サブ島沖海域、サーモン海域、同海域北方に反復突入、各海域の敵を撃滅せよ！",
    reward_fuel: 1944,
    reward_ammo: 2019,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "新型砲熕兵装資材",
        amount: 2
      }, {
        name: "戦闘詳報",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }, {
      name: "35.6cm連装砲改二",
      amount: 1
    }],
    prerequisite: [290],
    requirements: {
      category: "sortie",
      times: 2,
      map: ["5-1", "5-3", "5-4", "5-5"],
      boss: true,
      result: "S",
      groups: [{
        ship: "金剛改二丙",
        flagship: true
      }, {
        ship: ["比叡", "榛名", "霧島"],
        select: 1
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 293,
    wiki_id: "B53",
    category: 2,
    type: 1,
    name: "「第三航空戦隊」南西諸島防衛線に出撃！",
    detail: "編成した「第三航空戦隊」を南西諸島防衛線に展開、敵侵攻艦隊を捕捉撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [164],
    requirements: {
      category: "sortie",
      map: "1-4",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "瑞鶴改",
        flagship: true
      }, {
        ship: "瑞鳳"
      }, {
        ship: "千歳航",
        note: "軽母"
      }, {
        ship: "千代田航",
        note: "軽母"
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 294,
    wiki_id: "B54",
    category: 2,
    type: 1,
    name: "「小沢艦隊」出撃せよ！",
    detail: "「小沢艦隊」を沖ノ島海域前面に展開し、侵攻する敵機動部隊を捕捉、これを撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 300,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "零戦52型丙(六〇一空)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [166],
    requirements: {
      category: "sortie",
      map: "2-4",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "瑞鶴改",
        flagship: true
      }, {
        ship: "瑞鳳改"
      }, {
        ship: "千歳航",
        note: "軽母"
      }, {
        ship: "千代田航",
        note: "軽母"
      }, {
        ship: "伊勢改"
      }, {
        ship: "日向改"
      }]
    }
  }, {
    game_id: 295,
    wiki_id: "B55",
    category: 2,
    type: 1,
    name: "「第十六戦隊(第二次)」出撃せよ！",
    detail: "「第十六戦隊(第二次)」をオリョール海に展開、敵主力艦隊を捕捉、これを撃滅せよ！",
    reward_fuel: 320,
    reward_ammo: 0,
    reward_steel: 320,
    reward_bauxite: 0,
    reward_other: [{
      name: "家具箱（大）",
      amount: 1
    }, {
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [168],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "名取",
        flagship: true
      }, {
        ship: "五十鈴"
      }, {
        ship: "鬼怒"
      }, {
        ship: "艦",
        amount: 3
      }]
    }
  }, {
    game_id: 296,
    wiki_id: "B56",
    category: 2,
    type: 1,
    name: "新編成航空戦隊、北方へ進出せよ！",
    detail: "「新編成航空戦隊」をアルフォンシーノ方面へ進出、敵泊地の機動部隊を撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "改修資材",
      amount: 2
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [169],
    requirements: {
      category: "sortie",
      map: "3-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "空母",
        amount: 2
      }, {
        ship: ["航巡", "航戦"],
        amount: 2
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 297,
    wiki_id: "B57",
    category: 2,
    type: 1,
    name: "「礼号作戦」実施せよ！",
    detail: "精強な「水上反撃部隊」で、南西諸島沖ノ島沖に突入！同海域の敵戦力を撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 700,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "プレゼント箱",
      amount: 1
    }],
    prerequisite: [170, 265],
    requirements: {
      category: "sortie",
      map: "2-5",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "霞",
        flagship: true
      }, {
        ship: "足柄"
      }, {
        ship: "大淀"
      }, {
        ship: "朝霜"
      }, {
        ship: "清霜"
      }, {
        ship: "艦",
        amount: 1
      }]
    }
  }, {
    game_id: 298,
    wiki_id: "B124",
    category: 2,
    type: 1,
    name: "「第七駆逐隊」、南西諸島を駆ける！",
    detail: "「曙」「潮」「漣」「朧」からなる「第七駆逐隊」2隻以上を含む有力な艦隊を編成、南西諸島近海、バシー海峡、東部オリョール海、沖ノ島海域の敵戦力を撃滅、南西諸島海域の制海権を確保せよ！",
    reward_fuel: 700,
    reward_ammo: 700,
    reward_steel: 700,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "特注家具職人",
        amount: 1
      }, {
        name: "12.7cm連装砲B型改二",
        amount: 3
      }, {
        name: "大発動艇",
        amount: 1
      }]
    }, {
      choices: [{
        name: "開発資材",
        amount: 8
      }, {
        name: "改修資材",
        amount: 5
      }, {
        name: "零式水中聴音機",
        amount: 1
      }]
    }],
    prerequisite: [674],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["2-1", "2-2", "2-3", "2-4"],
      boss: true,
      result: "S",
      groups: [{
        ship: ["曙", "潮", "漣", "朧"],
        select: 2
      }]
    }
  }, {
    game_id: 299,
    wiki_id: "B125",
    category: 2,
    type: 1,
    name: "近海の警戒監視と哨戒活動を強化せよ！",
    detail: "軽巡旗艦、駆逐艦または海防艦2隻を含む艦隊を編成、南西諸島沖、製油所地帯沿岸、南西諸島防衛戦、南西諸島近海、バシー海峡を哨戒、敵艦隊を捕捉撃滅、近海の制海権を確立せよ！",
    reward_fuel: 800,
    reward_ammo: 800,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "補強増設",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }, {
      choices: [{
        name: "新型砲熕兵装資材",
        amount: 2
      }, {
        name: "探照灯",
        amount: 2
      }, {
        name: "戦闘詳報",
        amount: 1
      }]
    }],
    prerequisite: [303],
    requirements: {
      category: "sortie",
      map: ["1-2", "1-3", "1-4", "2-1", "2-2"],
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "軽巡",
        flagship: true
      }, {
        ship: ["駆逐", "海防艦"],
        amount: 2
      }]
    }
  }, {
    game_id: 301,
    wiki_id: "C01",
    category: 3,
    type: 1,
    name: "はじめての「演習」！",
    detail: "他の提督(プレイヤー)の艦隊と「演習」を行おう！",
    reward_fuel: 10,
    reward_ammo: 10,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "excercise",
      times: 1
    }
  }, {
    game_id: 302,
    wiki_id: "C04",
    category: 3,
    type: 3,
    name: "大規模演習",
    detail: "今週中に「演習」で他の提督の艦隊に対して20回「勝利」しよう！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 200,
    reward_bauxite: 200,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "改修資材",
      amount: 1
    }],
    prerequisite: [303],
    requirements: {
      category: "excercise",
      times: 20,
      victory: true
    }
  }, {
    game_id: 303,
    wiki_id: "C02",
    category: 3,
    type: 2,
    name: "「演習」で練度向上！",
    detail: "本日中に他の司令官の艦隊に対して3回「演習」を挑もう！",
    reward_fuel: 50,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "高速建造材",
      amount: 1
    }],
    prerequisite: [301],
    requirements: {
      category: "excercise",
      times: 3
    }
  }, {
    game_id: 304,
    wiki_id: "C03",
    category: 3,
    type: 2,
    name: "「演習」で他提督を圧倒せよ！",
    detail: "本日中に他の司令官の艦隊との「演習」で5回以上「勝利」をおさめよう！",
    reward_fuel: 0,
    reward_ammo: 50,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [303],
    requirements: {
      category: "excercise",
      times: 5,
      victory: true
    }
  }, {
    game_id: 306,
    wiki_id: "WC01",
    category: 3,
    type: 1,
    name: "式の準備！(その弐)",
    detail: "本日中に「演習」で2回以上「勝利」をおさめ、式への気持ちを整理しよう！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 88,
    reward_bauxite: 88,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [611],
    requirements: {
      category: "excercise",
      times: 2,
      victory: true,
      daily: true
    }
  }, {
    game_id: 307,
    wiki_id: "C05",
    category: 3,
    type: 1,
    name: "艦隊の練度向上に努めよ！",
    detail: "作戦前に艦隊の練度向上を図る！本日中に「演習」で3回以上「勝利」をおさめよう！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 300,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }],
    prerequisite: [152],
    requirements: {
      category: "excercise",
      times: 3,
      victory: true,
      daily: true
    }
  }, {
    game_id: 308,
    wiki_id: "C06",
    category: 3,
    type: 1,
    name: "演習を強化、艦隊の練度向上に努めよ！",
    detail: "艦隊のさらなる練度向上を図る！本日中に「演習」で4回以上「勝利」をおさめよう！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "改修資材",
      amount: 1
    }],
    prerequisite: [418],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true
    }
  }, {
    game_id: 309,
    wiki_id: "C07",
    category: 3,
    type: 1,
    name: "北方再突入に備え、練度向上に努めよ！",
    detail: "艦隊再突入に備え、艦隊練度向上を図る！本日中に「演習」で4回以上「勝利」せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "改修資材",
      amount: 1
    }],
    prerequisite: [278],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true
    }
  }, {
    game_id: 311,
    wiki_id: "C08",
    category: 3,
    type: 6,
    name: "精鋭艦隊演習",
    detail: "同日中に「演習」で7回以上「勝利」をおさめ、我が精鋭艦隊の練度を示そう！",
    reward_fuel: 0,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "戦闘糧食",
      category: "装備",
      amount: 1
    }],
    prerequisite: [216],
    requirements: {
      category: "excercise",
      times: 7,
      victory: true,
      daily: true
    }
  }, {
    game_id: 312,
    wiki_id: "C09",
    category: 3,
    type: 1,
    name: "上陸部隊演習",
    detail: "島嶼攻略部隊の練度向上のため、本日中に演習で4回以上「勝利」せよ！",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 200,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "戦闘糧食",
      category: "装備",
      amount: 1
    }],
    prerequisite: [216, 613, 635],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true
    }
  }, {
    game_id: 315,
    wiki_id: "C30",
    category: 3,
    type: 1,
    name: "春季大演習",
    detail: "春季大演習：春の一日中に「演習」で8回以上「勝利」をおさめ、艦隊の練度向上に努めよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 1000,
    reward_bauxite: 300,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }, {
      name: "プレゼント箱",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "excercise",
      times: 8,
      victory: true,
      daily: true
    }
  }, {
    game_id: 316,
    wiki_id: "C13",
    category: 3,
    type: 1,
    name: "輸送部隊の練度向上に努めよ！",
    detail: "演習任務：輸送部隊の練度向上を図る！本日中に演習で4回以上「勝利」せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "特注家具職人",
        amount: 1
      }, {
        name: "大発動艇",
        amount: 1
      }]
    }, {
      name: "改修資材",
      amount: 2
    }],
    prerequisite: [218, 418],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true
    }
  }, {
    game_id: 317,
    wiki_id: "C15",
    category: 3,
    type: 1,
    name: "甲型駆逐艦の戦力整備計画",
    detail: "甲型駆逐艦整備任務：甲型駆逐艦【夕雲型/陽炎型】を2隻以上配備した第一艦隊で演習で3回「勝利」、<br>その後、同艦隊を南西諸島海域に投入。各出撃で得られた戦訓を艦隊型駆逐艦戦力整備に活用せよ！",
    reward_fuel: 0,
    reward_ammo: 350,
    reward_steel: 0,
    reward_bauxite: 350,
    reward_other: [{
      choices: [{
        name: "戦闘詳報",
        amount: 1
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }, {
      choices: [{
        name: "高速修復材",
        amount: 5
      }, {
        name: "戦闘糧食",
        amount: 2
      }]
    }],
    prerequisite: [673],
    requirements: {
      category: "then",
      list: [{
        category: "excercise",
        times: 3,
        victory: true,
        daily: true,
        groups: [{
          shipclass: ["夕雲", "陽炎"],
          amount: 2
        }]
      }, {
        category: "sortie",
        times: 1,
        map: ["2-2", "2-3", "2-4", "2-5"],
        boss: true,
        result: "A",
        groups: [{
          shipclass: ["夕雲", "陽炎"],
          amount: 2
        }]
      }]
    }
  }, {
    game_id: 318,
    wiki_id: "C16",
    category: 3,
    type: 6,
    name: "給糧艦「伊良湖」の支援",
    detail: "伊良湖支援任務：軽巡を2隻以上配備した第一艦隊で本日中に演習で3回「勝利」、その後、<br>第一艦隊旗艦に戦闘糧食を二つ装備せよ！　※任務達成後、同戦闘糧食は消費します",
    reward_fuel: 100,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 1
    }, {
      choices: [{
        name: "開発資材",
        amount: 2
      }, {
        name: "高速修復材",
        amount: 2
      }]
    }],
    prerequisite: [676],
    requirements: {
      category: "then",
      list: [{
        category: "excercise",
        times: 3,
        victory: true,
        daily: true,
        groups: [{
          ship: "軽巡",
          amount: 2
        }]
      }, {
        category: "modelconversion",
        secretary: "艦",
        equipment: ["戦闘糧食", "戦闘糧食"]
      }]
    }
  }, {
    game_id: 319,
    wiki_id: "C17",
    category: 3,
    type: 1,
    name: "精鋭「第二一駆」、猛特訓！",
    detail: "駆逐隊演習任務：精鋭「第二一駆逐隊」3隻を含む艦隊を編成。作戦に先立ち、猛特訓を開始する！<br>同艦隊で、本日中に演習で4回勝利せよ！",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }, {
      choices: [{
        name: "開発資材",
        amount: 6
      }, {
        name: "戦闘詳報",
        amount: 1
      }]
    }],
    prerequisite: [190],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true,
      groups: [{
        ship: "若葉改"
      }, {
        ship: "初春改二"
      }, {
        ship: "初霜改二"
      }]
    }
  }, {
    game_id: 320,
    wiki_id: "C18",
    category: 3,
    type: 1,
    name: "駆逐隊、特訓始め！",
    detail: "駆逐隊演習任務：駆逐艦4隻で編成される駆逐隊。この駆逐隊を含む艦隊を編成。特訓を開始する！同艦隊で本日中に演習にて4回以上勝利せよ！",
    reward_fuel: 100,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速建造材",
      amount: 3
    }, {
      choices: [{
        name: "改修資材",
        amount: 2
      }, {
        name: "開発資材",
        amount: 4
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true,
      groups: [{
        ship: "駆逐",
        amount: 4
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 322,
    wiki_id: "C20",
    category: 3,
    type: 1,
    name: "海防艦、演習始め！",
    detail: "海防艦演習任務：海防艦を旗艦に配備し、随伴艦に駆逐艦2隻以上を配した演習艦隊を編成。本演習艦隊で、本日中に演習で2回以上勝利せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "「択捉型海防艦」掛け軸",
      category: "家具"
    }, {
      choices: [{
        name: "補強増設",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }],
    prerequisite: [682],
    requirements: {
      category: "excercise",
      times: 2,
      victory: true,
      daily: true,
      groups: [{
        ship: "海防艦",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 323,
    wiki_id: "C21",
    category: 3,
    type: 1,
    name: "最精鋭甲型駆逐艦、特訓始め！",
    detail: "甲型駆逐隊演習任務：練度70以上の甲型駆逐艦【陽炎型/夕雲型】駆逐艦4隻で編成される駆逐隊。この精鋭駆逐隊を含む艦隊を編成。演習を開始する！同艦隊で本日中に演習にて4回以上勝利せよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 400,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "開発資材",
        amount: 4
      }, {
        name: "高速修復材",
        amount: 4
      }]
    }, {
      choices: [{
        name: "戦闘詳報",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }],
    prerequisite: [193],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true,
      groups: [{
        shipclass: ["陽炎", "夕雲"],
        amount: 4,
        lv: [70, 999]
      }]
    }
  }, {
    game_id: 324,
    wiki_id: "C22",
    category: 3,
    type: 1,
    name: "戦闘航空母艦一番艦、演習始め！",
    detail: "改装航空戦艦(戦闘航空母艦)演習任務：旗艦「伊勢改二」、随伴艦に駆逐艦2隻以上を配した航空戦隊を編成。新改装艦の慣熟も兼ねた同航空戦隊の演習で、本日中に3回以上勝利せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 500,
    reward_other: [{
      choices: [{
        name: "彗星",
        amount: 2
      }, {
        name: "瑞雲",
        amount: 2
      }, {
        name: "二式艦上偵察機",
        amount: 1
      }]
    }, {
      choices: [{
        name: "22号対水上電探",
        amount: 2
      }, {
        name: "12cm30連装噴進砲",
        amount: 2
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }]
    }],
    prerequisite: [247],
    requirements: {
      category: "excercise",
      times: 3,
      victory: true,
      daily: true,
      groups: [{
        ship: "伊勢改二",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 2
      }, {
        ship: "艦",
        amount: 3
      }]
    }
  }, {
    game_id: 325,
    wiki_id: "C23",
    category: 3,
    type: 1,
    name: "改夕雲型、演習始め！",
    detail: "改夕雲型演習任務：改夕雲型駆逐艦「夕雲改二」「長波改二」の精鋭駆逐艦2隻を含む艦隊を編成。改夕雲型駆逐隊の慣熟演習を開始する！同艦隊で本日中に演習にて4回以上勝利せよ！",
    reward_fuel: 400,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "給糧艦「伊良湖」",
        amount: 3
      }, {
        name: "二式爆雷",
        amount: 1
      }]
    }, {
      choices: [{
        name: "補強増設",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }],
    prerequisite: [323, 875],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true,
      groups: [{
        ship: "夕雲改二"
      }, {
        ship: "長波改二"
      }, {
        ship: "艦",
        amount: 4
      }]
    }
  }, {
    game_id: 326,
    wiki_id: "C24",
    category: 3,
    type: 1,
    name: "夏季大演習",
    detail: "夏季大演習：夏季期間の一日中に「演習」で8回以上「勝利」をおさめ、艦隊の練度向上に努めよ！暑さに負けるな！　艦隊、抜錨！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 1000,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }, {
      name: "プレゼント箱",
      amount: 1
    }],
    prerequisite: [303],
    requirements: {
      category: "excercise",
      times: 8,
      victory: true,
      daily: true
    }
  }, {
    game_id: 327,
    wiki_id: "C25",
    category: 3,
    type: 1,
    name: "朝潮型集合！特訓始め！",
    detail: "朝潮型演習任務：朝潮型駆逐艦4隻による駆逐隊を含む艦隊を編成。同艦隊で本日中に演習にて4回以上勝利せよ！朝潮型駆逐艦、前へ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      choices: [{
        name: "開発資材",
        amount: 4
      }, {
        name: "三式爆雷投射機",
        amount: 1
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }],
    prerequisite: [210],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true,
      groups: [{
        shipclass: ["朝潮"],
        amount: 4
      }]
    }
  }, {
    game_id: 328,
    wiki_id: "C27",
    category: 3,
    type: 1,
    name: "精強「十七駆」、猛特訓！",
    detail: "駆逐隊演習任務：精強「第十七駆逐隊」4隻を含む艦隊を編成。新改装精強駆逐隊による猛特訓を開始する！同艦隊で、本日中に演習で4回以上勝利せよ！",
    reward_fuel: 170,
    reward_ammo: 170,
    reward_steel: 170,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "二式爆雷",
        amount: 1
      }, {
        name: "補強増設",
        amount: 1
      }]
    }],
    prerequisite: [195],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true,
      groups: [{
        ship: "磯風乙改"
      }, {
        ship: "浜風乙改"
      }, {
        ship: "浦風丁改"
      }, {
        ship: "谷風丁改"
      }]
    }
  }, {
    game_id: 330,
    wiki_id: "C29",
    category: 3,
    type: 1,
    name: "空母機動部隊、演習始め！",
    detail: "空母機動部隊演習任務：航空母艦旗艦他1隻計2隻以上及び駆逐艦2隻を含む空母機動部隊を編成。 機動部隊各艦の練度向上を図る！同艦隊で、本日中に演習で4回以上勝利せよ！",
    reward_fuel: 0,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      choices: [{
        name: "九九式艦爆",
        amount: 4
      }, {
        name: "彗星",
        amount: 2
      }, {
        name: "開発資材",
        amount: 3
      }]
    }, {
      choices: [{
        name: "零式艦戦21型",
        amount: 3
      }, {
        name: "零式艦戦52型",
        amount: 2
      }, {
        name: "洋上補給",
        amount: 1
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true,
      groups: [{
        ship: "空母",
        flagship: true,
        amount: 2
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 331,
    wiki_id: "C31",
    category: 3,
    type: 1,
    name: "艦載機演習",
    detail: "艦載機演習任務：正規空母旗艦他1隻計2隻以上及び駆逐艦2隻を含む空母機動部隊を編成。艦載機の練度向上と装備充実を図る！同機動部隊で、本日中に演習を【A判定】以上3回勝利せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "彗星一二型甲",
      amount: 1
    }, {
      choices: [{
        name: "新型航空兵装資材",
        amount: 1
      }, {
        name: "彗星",
        amount: 3
      }, {
        name: "開発資材",
        amount: 6
      }]
    }],
    prerequisite: [330],
    requirements: {
      category: "excercise",
      times: 3,
      victory: true,
      daily: true,
      groups: [{
        ship: "空母",
        flagship: true,
        amount: 2
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 332,
    wiki_id: "C32",
    category: 3,
    type: 1,
    name: "六周年記念演習",
    detail: "六周年記念演習：軽巡クラス1隻と駆逐艦または海防艦計3隻以上を含む6隻編成の特務艦隊を編成。同艦隊による演習で本日中に【S判定】以上4回勝利せよ！",
    reward_fuel: 600,
    reward_ammo: 600,
    reward_steel: 600,
    reward_bauxite: 600,
    reward_other: [{
      choices: [{
        name: "開発資材",
        amount: 6
      }, {
        name: "高速建造材",
        amount: 6
      }]
    }, {
      choices: [{
        name: "零式艦戦52型",
        amount: 6
      }, {
        name: "35.6cm連装砲",
        amount: 6
      }, {
        name: "勲章",
        amount: 1
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true,
      groups: [{
        ship: ["軽巡", "練習巡洋艦", "重雷装巡洋艦"],
        amount: 1
      }, {
        ship: ["駆逐", "海防艦"],
        amount: 3
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 333,
    wiki_id: "C33",
    category: 3,
    type: 1,
    name: "航空戦隊演習(その壱)",
    detail: "航空戦隊演習任務：航空母艦3隻以上及び駆逐艦2隻以上を含む航空戦隊を編成。艦隊戦演習により、戦技及び練度向上を図る。同航空戦隊で、本日中に演習を【S判定】勝利3回以上達成せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      choices: [{
        name: "開発資材",
        amount: 3
      }, {
        name: "高速建造材",
        amount: 3
      }]
    }, {
      choices: [{
        name: "九七式艦攻",
        amount: 3
      }, {
        name: "洋上補給",
        amount: 2
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "excercise",
      times: 3,
      victory: true,
      daily: true,
      groups: [{
        ship: "空母",
        amount: 3
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 334,
    wiki_id: "C34",
    category: 3,
    type: 1,
    name: "航空戦隊演習(その弐)",
    detail: "航空戦隊演習任務：航空母艦3隻以上及び駆逐艦2隻以上を含む航空戦隊を編成。大規模演習により、さらなる戦技及び練度向上を図る。同航空戦隊で、本日中に演習を【S判定】勝利6回以上達成せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 500,
    reward_other: [{
      choices: [{
        name: "13号対空電探",
        amount: 2
      }, {
        name: "開発資材",
        amount: 4
      }]
    }, {
      choices: [{
        name: "彩雲★+2",
        amount: 1
      }, {
        name: "天山★+2",
        amount: 2
      }, {
        name: "熟練搭乗員",
        amount: 1
      }]
    }],
    prerequisite: [333],
    requirements: {
      category: "excercise",
      times: 6,
      victory: true,
      daily: true,
      groups: [{
        ship: "空母",
        amount: 3
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 335,
    wiki_id: "C35",
    category: 3,
    type: 1,
    name: "新しき盾",
    detail: "「新しき盾」演習任務：重巡「摩耶」及び重巡「羽黒」を擁する艦隊による演習「新しき盾」を実施する。本「新しき盾」演習において、本日中に【S判定】勝利3回以上達成せよ！",
    reward_fuel: 0,
    reward_ammo: 179,
    reward_steel: 0,
    reward_bauxite: 180,
    reward_other: [{
      name: "新型航空兵装資材",
      amount: 1
    }, {
      choices: [{
        name: "開発資材",
        amount: 4
      }, {
        name: "25mm三連装機銃",
        amount: 3
      }, {
        name: "12cm30連装噴進砲",
        amount: 2
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "excercise",
      times: 3,
      victory: true,
      daily: true,
      groups: [{
        ship: "摩耶"
      }, {
        ship: "羽黒"
      }]
    }
  }, {
    game_id: 336,
    wiki_id: "C37",
    category: 3,
    type: 1,
    name: "輸送船団演習",
    detail: "輸送船団演習任務：補給艦または揚陸艦、海防艦を計2隻以上含む輸送船団を編成、同輸送船団及び護衛艦艇による演習で、本日中に【A判定】勝利4回以上達成せよ。",
    reward_fuel: 150,
    reward_ammo: 150,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "九四式爆雷投射機",
        amount: 1
      }, {
        name: "二式12cm迫撃砲改",
        amount: 1
      }, {
        name: "九五式爆雷",
        amount: 2
      }]
    }],
    prerequisite: [201, 335],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true,
      groups: [{
        ship: ["補給艦", "揚陸艦", "海防艦"],
        amount: [2, 99]
      }]
    }
  }, {
    game_id: 337,
    wiki_id: "C38",
    category: 3,
    type: 7,
    name: "「十八駆」演習！",
    detail: "駆逐艦演習任務：第十八駆逐艦『霞』『霰』『陽炎』『不知火』の4隻を含む演習艦隊を編成。同艦隊で本日中に演習で『S判定』勝利3回以上を達成せよ！精鋭十八駆に落ち度など無し！",
    reward_fuel: 180,
    reward_ammo: 180,
    reward_steel: 180,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }, {
      choices: [{
        name: "大発動艇",
        amount: 1
      }, {
        name: "12cm30連装噴進砲",
        amount: 2
      }, {
        name: "改修資材",
        amount: 3
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "excercise",
      times: 3,
      victory: true,
      daily: true,
      groups: [{
        ship: "霞"
      }, {
        ship: "霰"
      }, {
        ship: "陽炎"
      }, {
        ship: "不知火"
      }]
    }
  }, {
    game_id: 338,
    wiki_id: "C39",
    category: 3,
    type: 1,
    name: "睦月型集合！演習始め！",
    detail: "睦月型演習任務：睦月型駆逐艦4隻による駆逐隊を含む演習艦隊を編成。同艦隊で本日中に演習にて4回以上勝利せよ！睦月型、がんばるにゃしぃ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 1
    }, {
      choices: [{
        name: "開発資材",
        amount: 5
      }, {
        name: "特注家具職人",
        amount: 1
      }, {
        name: "新型噴進装備開発資材",
        amount: 1
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "excercise",
      times: 4,
      victory: true,
      daily: true,
      groups: [{
        shipclass: "睦月",
        amount: 4
      }]
    }
  }, {
    game_id: 339,
    wiki_id: "C42",
    category: 3,
    type: 1,
    name: "「十九駆」演習！",
    detail: "駆逐艦演習任務：第十九駆逐隊「磯波」「浦波」「綾波」「敷波」の4隻を含む演習艦隊を編成。<br>同艦隊で本日中に演習で【S判定】勝利3回以上を達成せよ！精鋭十九駆、じゃ、見ててよね！",
    reward_fuel: 190,
    reward_ammo: 190,
    reward_steel: 190,
    reward_bauxite: 100,
    reward_other: [{
      choices: [{
        name: "給糧艦「間宮」",
        amount: 1
      }, {
        name: "改修資材",
        amount: 3
      }]
    }, {
      choices: [{
        name: "三式爆雷投射機",
        amount: 1
      }, {
        name: "12.7cm連装砲B型改二",
        amount: 1
      }, {
        name: "開発資材",
        amount: 8
      }]
    }],
    prerequisite: [177, 337],
    requirements: {
      category: "excercise",
      times: 3,
      victory: true,
      daily: true,
      groups: [{
        ship: "綾波"
      }, {
        ship: "敷波"
      }, {
        ship: "磯波"
      }, {
        ship: "浦波"
      }]
    }
  }, {
    game_id: 401,
    wiki_id: "D01",
    category: 4,
    type: 1,
    name: "はじめての「遠征」！",
    detail: "艦隊を「遠征」に出発させよう！",
    reward_fuel: 30,
    reward_ammo: 30,
    reward_steel: 30,
    reward_bauxite: 30,
    reward_other: [{
      name: "家具箱（小）",
      amount: 1
    }],
    prerequisite: [105],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1
      }]
    }
  }, {
    game_id: 402,
    wiki_id: "D02",
    category: 4,
    type: 2,
    name: "「遠征」を３回成功させよう！",
    detail: "本日中に「遠征」３回成功させよう！",
    reward_fuel: 100,
    reward_ammo: 100,
    reward_steel: 100,
    reward_bauxite: 100,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [401],
    requirements: {
      category: "expedition",
      objects: [{
        times: 3
      }]
    }
  }, {
    game_id: 403,
    wiki_id: "D03",
    category: 4,
    type: 2,
    name: "「遠征」を１０回成功させよう！",
    detail: "本日中に「遠征」10回成功させよう！",
    reward_fuel: 150,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 150,
    reward_other: [{
      name: "家具箱（小）",
      amount: 1
    }, {
      name: "家具箱（中）",
      amount: 1
    }],
    prerequisite: [402],
    requirements: {
      category: "expedition",
      objects: [{
        times: 10
      }]
    }
  }, {
    game_id: 404,
    wiki_id: "D04",
    category: 4,
    type: 3,
    name: "大規模遠征作戦、発令！",
    detail: "今週中に「遠征」30回成功させよう！",
    reward_fuel: 300,
    reward_ammo: 500,
    reward_steel: 500,
    reward_bauxite: 300,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }, {
      name: "家具箱（大）",
      amount: 1
    }],
    prerequisite: [401],
    requirements: {
      category: "expedition",
      objects: [{
        times: 30
      }]
    }
  }, {
    game_id: 405,
    wiki_id: "D05",
    category: 4,
    type: 1,
    name: "第一次潜水艦派遣作戦",
    detail: "はじめての潜水艦派遣作戦を成功させよう！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 10,
    reward_bauxite: 10,
    reward_other: [{
      name: "応急修理要員",
      amount: 1
    }],
    prerequisite: [127],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 30
      }]
    }
  }, {
    game_id: 406,
    wiki_id: "D06",
    category: 4,
    type: 1,
    name: "第二次潜水艦派遣作戦",
    detail: "第二次潜水艦派遣作戦を成功させよう！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 10,
    reward_bauxite: 10,
    reward_other: [{
      name: "Ju87C改",
      category: "装備",
      amount: 1
    }],
    prerequisite: [405],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 30
      }]
    }
  }, {
    game_id: 408,
    wiki_id: "D07",
    category: 4,
    type: 1,
    name: "潜水艦派遣作戦による技術入手の継続！",
    detail: "第三次及び第四次潜水艦派遣作戦を成功させ、他国製技術の導入に努めよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 800,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }, {
      name: "Ju87C改",
      category: "装備",
      amount: 1
    }],
    prerequisite: [406],
    requirements: {
      category: "expedition",
      objects: [{
        times: 2,
        id: 30
      }]
    }
  }, {
    game_id: 409,
    wiki_id: "D08",
    category: 4,
    type: 1,
    name: "潜水艦派遣による海外艦との接触作戦",
    detail: "有力な潜水艦隊派遣による海外艦との接触作戦を成功させよ！",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "Z1",
      category: "艦娘",
      amount: 1
    }],
    prerequisite: [408],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 31
      }]
    }
  }, {
    game_id: 410,
    wiki_id: "D09",
    category: 4,
    type: 3,
    name: "南方への輸送作戦を成功させよ！",
    detail: "激戦海域である南方海域への「東京急行」系遠征を敢行、これを成功させよ！",
    reward_fuel: 150,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "家具箱（小）",
      amount: 1
    }],
    prerequisite: [130],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: [37, 38]
      }]
    }
  }, {
    game_id: 411,
    wiki_id: "D11",
    category: 4,
    type: 3,
    name: "南方への鼠輸送を継続実施せよ！",
    detail: "今週中に「東京急行」系遠征を継続的に実施、同種作戦を7回成功させよう！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "改修資材",
      amount: 1
    }],
    prerequisite: [410],
    requirements: {
      category: "expedition",
      objects: [{
        times: 7,
        id: [37, 38]
      }]
    }
  }, {
    game_id: 412,
    wiki_id: "D10",
    category: 4,
    type: 1,
    name: "航空火力艦の運用を強化せよ！",
    detail: "「航空戦艦運用演習」を実施し、航空火力艦の運用の強化に努めよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "瑞雲(六三四空)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [239],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 23
      }]
    }
  }, {
    game_id: 413,
    wiki_id: "D12",
    category: 4,
    type: 1,
    name: "(続)航空火力艦の運用を強化せよ！",
    detail: "「航空戦艦運用演習」を継続実施し、航空火力艦の運用の強化に引き続き努めよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "瑞雲(六三四空)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [412],
    requirements: {
      category: "expedition",
      objects: [{
        times: 3,
        id: 23
      }]
    }
  }, {
    game_id: 414,
    wiki_id: "D13",
    category: 4,
    type: 1,
    name: "遠洋潜水艦作戦を実施せよ！",
    detail: "「遠洋潜水艦作戦」を実施し、潜水艦隊の練度向上と敵艦隊漸減に努めよ！",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "潜水艦53cm艦首魚雷(8門)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [139],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 39
      }]
    }
  }, {
    game_id: 415,
    wiki_id: "D14",
    category: 4,
    type: 1,
    name: "遠洋潜水艦作戦の成果を拡大せよ！",
    detail: "「遠洋潜水艦作戦」を継続実施し、潜水艦隊の練度向上と敵艦隊漸減に努めよ！",
    reward_fuel: 0,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "潜水艦53cm艦首魚雷(8門)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [414],
    requirements: {
      category: "expedition",
      objects: [{
        times: 2,
        id: 39
      }]
    }
  }, {
    game_id: 416,
    wiki_id: "D15",
    category: 4,
    type: 1,
    name: "防空射撃演習を実施せよ！",
    detail: "「防空射撃演習」を複数回実施し、艦隊の防空能力を高めよ！",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "25mm三連装機銃",
      category: "装備",
      amount: 1
    }],
    prerequisite: [207],
    requirements: {
      category: "expedition",
      objects: [{
        times: 3,
        id: 6
      }]
    }
  }, {
    game_id: 417,
    wiki_id: "D16",
    category: 4,
    type: 1,
    name: "囮機動部隊支援作戦を実施せよ！",
    detail: "「囮機動部隊支援作戦」を実施し、これを成功させよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "91式高射装置",
      category: "装備",
      amount: 1
    }],
    prerequisite: [272],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 15
      }]
    }
  }, {
    game_id: 418,
    wiki_id: "D17",
    category: 4,
    type: 1,
    name: "観艦式予行を実施せよ！",
    detail: "観艦式を実施する。予行として「観艦式予行」を複数回実施し、これを2回成功させよ！",
    reward_fuel: 150,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 150,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }],
    prerequisite: [137],
    requirements: {
      category: "expedition",
      objects: [{
        times: 2,
        id: 7
      }]
    }
  }, {
    game_id: 419,
    wiki_id: "D18",
    category: 4,
    type: 1,
    name: "観艦式を敢行せよ！",
    detail: "練度の高い艦隊で観艦式本番を実施する。「観艦式」を実施し、これを成功させよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 1
    }, {
      name: "司令部要員",
      amount: 1
    }],
    prerequisite: [308],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 8
      }]
    }
  }, {
    game_id: 420,
    wiki_id: "D19",
    category: 4,
    type: 1,
    name: "機動部隊の運用を強化せよ！",
    detail: "機動部隊遠征を実施、「MO作戦」及び「敵母港空襲作戦」を展開、これを成功させよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 400,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 2
    }, {
      name: "家具箱（大）",
      amount: 1
    }],
    prerequisite: [287, 410],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 26
      }, {
        times: 1,
        id: 35
      }]
    }
  }, {
    game_id: 422,
    wiki_id: "D20",
    category: 4,
    type: 1,
    name: "潜水艦派遣作戦による航空機技術入手",
    detail: "潜水艦派遣作戦により、新型航空機技術の導入に努めよ！",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "新型航空機設計図",
      amount: 1
    }],
    prerequisite: [406],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 30
      }, {
        times: 1,
        id: 31
      }]
    }
  }, {
    game_id: 423,
    wiki_id: "D21",
    category: 4,
    type: 1,
    name: "潜水艦派遣作戦による噴式技術の入手",
    detail: "鉄鋼5,000及びボーキサイト1,500を準備して、潜水艦派遣作戦により<br>噴式エンジン技術の導入に努めよ！※任務達成後、準備した資源は消費します。",
    reward_fuel: 100,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "ネ式エンジン",
      amount: 1
    }],
    prerequisite: [422, 839],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 30
      }, {
        times: 1,
        id: 31
      }],
      resources: [0, 0, 5000, 1500]
    }
  }, {
    game_id: 424,
    wiki_id: "D22",
    category: 4,
    type: 6,
    name: "輸送船団護衛を強化せよ！",
    detail: "遠征任務：「海上護衛任務」を反復実施し、輸送船団の護衛に務めよ！",
    reward_fuel: 1000,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "家具箱（中）",
      amount: 2
    }],
    prerequisite: [402, 419],
    requirements: {
      category: "expedition",
      objects: [{
        times: 4,
        id: 5
      }]
    }
  }, {
    game_id: 425,
    wiki_id: "D23",
    category: 4,
    type: 1,
    name: "海上護衛総隊、遠征開始！",
    detail: "遠征任務：遠征任務「対潜警戒任務」「海上護衛任務」「タンカー護衛任務」を実施、<br>軽巡、駆逐艦、海防艦などから編成された護衛艦隊で各遠征を成功させよ！",
    reward_fuel: 700,
    reward_ammo: 700,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [424, 662],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 4
      }, {
        times: 1,
        id: 5
      }, {
        times: 1,
        id: 9
      }],
      groups: [{
        ship: ["軽巡", "駆逐艦", "海防艦"]
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 426,
    wiki_id: "D24",
    category: 4,
    type: 7,
    name: "海上通商航路の警戒を厳とせよ！",
    detail: "遠征任務：遠征任務「警備任務」「対潜警戒任務」「海上護衛任務」「強行偵察任務」<br>を実施し、敵の通商破壊部隊を制圧、海上通商航路の安全を確保せよ！",
    reward_fuel: 800,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 4
    }, {
      name: "戦闘糧食",
      amount: 2
    }],
    prerequisite: [810],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 3
      }, {
        times: 1,
        id: 4
      }, {
        times: 1,
        id: 5
      }, {
        times: 1,
        id: 10
      }]
    }
  }, {
    game_id: 427,
    wiki_id: "D25",
    category: 4,
    type: 1,
    name: "遠征「補給」支援体制を強化せよ！",
    detail: "遠征補給支援体制の強化：鋼材800を用意し、遠征任務「兵站強化任務」を実施。<br>同遠征任務を成功させ、艦隊遠征時における「補給」支援体制の拡充に努めよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "遠征「臨時補給」開放"
    }, {
      name: "戦闘糧食",
      amount: 2
    }],
    prerequisite: [869],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: "A1"
      }],
      resources: [0, 0, 800, 0]
    }
  }, {
    game_id: 428,
    wiki_id: "D26",
    category: 4,
    type: 7,
    name: "近海に侵入する敵潜を制圧せよ！",
    detail: "敵潜制圧任務：遠征任務「対潜警戒任務」「海峡警備行動」「長時間対潜警戒」を<br>それぞれ複数回実施し、近海に潜り込む敵潜部隊を制圧、我が領海から叩き出せ！",
    reward_fuel: 0,
    reward_ammo: 1000,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "九五式爆雷",
      category: "装備",
      amount: 1
    }],
    prerequisite: [426, 427],
    requirements: {
      category: "expedition",
      objects: [{
        times: 2,
        id: 4
      }, {
        times: 2,
        id: "A2"
      }, {
        times: 2,
        id: "A3"
      }]
    }
  }, {
    game_id: 429,
    wiki_id: "D27",
    category: 4,
    type: 1,
    name: "「捷一号作戦」、発動準備！",
    detail: "捷一号作戦準備任務：遠征任務「警備任務」「兵站強化任務」及び「南西方面航空偵察作戦」<br>を実施。これを無事完遂し、南西方面での作戦準備にあたれ！",
    reward_fuel: 0,
    reward_ammo: 600,
    reward_steel: 0,
    reward_bauxite: 600,
    reward_other: [{
      name: "高速修復材",
      amount: 4
    }, {
      name: "洋上補給",
      amount: 2
    }],
    prerequisite: [402, 870],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 3
      }, {
        times: 1,
        id: "A1"
      }, {
        times: 1,
        id: "B1"
      }]
    }
  }, {
    game_id: 430,
    wiki_id: "D28",
    category: 4,
    type: 1,
    name: "「海防艦」、進発せよ！",
    detail: "海上護衛任務：遠征任務「兵站強化任務」「海峡警備行動」「海上護衛任務」「タンカー護衛任務」を海防艦、駆逐艦などを主軸とした護衛艦隊で実施せよ！",
    reward_fuel: 800,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 600,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 1
    }, {
      choices: [{
        name: "洋上補給",
        amount: 2
      }, {
        name: "高速修復材",
        amount: 8
      }, {
        name: "改修資材",
        amount: 4
      }]
    }],
    prerequisite: [682],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: "A1"
      }, {
        times: 1,
        id: "A2"
      }, {
        times: 1,
        id: 5
      }, {
        times: 1,
        id: 9
      }],
      groups: [{
        ship: "海防艦"
      }, {
        ship: "駆逐艦"
      }]
    }
  }, {
    game_id: 431,
    wiki_id: "D29",
    category: 4,
    type: 1,
    name: "艦隊司令部の強化 【準備段階】",
    detail: "艦隊司令部強化の準備：遠征任務「敵地偵察作戦」「海峡警備行動」「南西方面航空偵察作戦」「兵站強化任務」を海防艦や水雷戦隊、水上機母艦等を投入、同遠征任務群を成功させよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 500,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      choices: [{
        name: "洋上補給",
        amount: 5
      }, {
        name: "零式水上偵察機11型乙",
        amount: 1
      }, {
        name: "紫雲",
        amount: 1
      }]
    }],
    prerequisite: [413, 430],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: "A1"
      }, {
        times: 1,
        id: "A2"
      }, {
        times: 1,
        id: "B1"
      }, {
        times: 1,
        id: 17
      }]
    }
  }, {
    game_id: 432,
    wiki_id: "D30",
    category: 4,
    type: 1,
    name: "警備及び哨戒偵察を強化せよ！",
    detail: "警備哨戒任務：遠征「海峡警備行動」「強行偵察任務」「南西方面航空偵察作戦」を実施、南方戦線遠征の前段作戦として、内地及び南西諸島方面の警備及び哨戒偵察を実施せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "給糧艦「間宮」",
        amount: 1
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }, {
      choices: [{
        name: "開発資材",
        amount: 4
      }, {
        name: "改修資材",
        amount: 2
      }, {
        name: "7.7mm機銃",
        amount: 1
      }]
    }],
    prerequisite: [416],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: "A2"
      }, {
        times: 1,
        id: "B1"
      }, {
        times: 1,
        id: 10
      }]
    }
  }, {
    game_id: 433,
    wiki_id: "D31",
    category: 4,
    type: 1,
    name: "南方戦線遠征を実施せよ！",
    detail: "南方戦線遠征：南方海域の作戦を援護する南方作戦遠征作戦を実施する。南方海域遠征「東京急行」「東京急行(弐)」「水上機基地建設」「水上機前線輸送」「MO作戦」を実施せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 750,
    reward_bauxite: 750,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 2
    }, {
      choices: [{
        name: "高速修復材",
        amount: 6
      }, {
        name: "大発動艇",
        amount: 2
      }, {
        name: "12.7mm単装機銃",
        amount: 3
      }]
    }],
    prerequisite: [432, 425],
    requirements: {
      category: "expedition",
      objects: [{
        times: 1,
        id: 35
      }, {
        times: 1,
        id: 36
      }, {
        times: 1,
        id: 37
      }, {
        times: 1,
        id: 38
      }, {
        times: 1,
        id: 40
      }]
    }
  }, {
    game_id: 434,
    wiki_id: "D32",
    category: 4,
    type: 1,
    name: "特設護衛船団司令部、活動開始！",
    detail: "海上護衛任務：遠征任務「警備任務」「海上護衛任務」「兵站強化任務」「海峡警備行動」<br>「タンカー護衛任務」の各任務を、海防艦・駆逐艦などを主軸とした護衛艦艇で実施せよ！",
    reward_fuel: 1000,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 500,
    reward_other: [{
      choices: [{
        name: "給糧艦「伊良湖」",
        amount: 2
      }, {
        name: "高速修復材",
        amount: 5
      }]
    }, {
      choices: [{
        name: "洋上補給",
        amount: 2
      }, {
        name: "改修資材",
        amount: 3
      }, {
        name: "緊急修理資材",
        amount: 2
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "expedition",
      objects: [{
        id: [3, 5, 9, "A1", "A2"],
        times: 1
      }],
      groups: [{
        ship: ["駆逐艦", "海防艦"]
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 501,
    wiki_id: "E01",
    category: 5,
    type: 1,
    name: "はじめての「補給」！",
    detail: "補給は大事です！燃料・弾薬を艦に「補給」しよう！",
    reward_fuel: 0,
    reward_ammo: 20,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }],
    prerequisite: [203],
    requirements: {
      category: "simple",
      subcategory: "resupply",
      times: 1
    }
  }, {
    game_id: 502,
    wiki_id: "E02",
    category: 5,
    type: 1,
    name: "はじめての「入渠」！",
    detail: "戦闘で傷ついた艦を「入渠」させて修理して、次の出撃に備えよう！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 30,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [203],
    requirements: {
      category: "simple",
      subcategory: "repair",
      times: 1
    }
  }, {
    game_id: 503,
    wiki_id: "E03",
    category: 5,
    type: 2,
    name: "艦隊大整備！",
    detail: "各艦隊から整備が必要な艦を5隻以上ドック入りさせ、大規模な整備をしよう！",
    reward_fuel: 30,
    reward_ammo: 30,
    reward_steel: 30,
    reward_bauxite: 30,
    reward_other: [{
      name: "高速修復材",
      amount: 2
    }],
    prerequisite: [502],
    requirements: {
      category: "simple",
      subcategory: "repair",
      times: 5
    }
  }, {
    game_id: 504,
    wiki_id: "E04",
    category: 5,
    type: 2,
    name: "艦隊酒保祭り！",
    detail: "艦隊酒保祭り！各艦に延べ15回以上の補給を実施しよう！",
    reward_fuel: 50,
    reward_ammo: 50,
    reward_steel: 50,
    reward_bauxite: 50,
    reward_other: [{
      name: "高速建造材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [503],
    requirements: {
      category: "simple",
      subcategory: "resupply",
      times: 15
    }
  }, {
    game_id: 601,
    wiki_id: "F01",
    category: 6,
    type: 1,
    name: "はじめての「建造」！",
    detail: "「工廠」で鋼材などの資材を使って新しい艦を「建造」しよう！",
    reward_fuel: 50,
    reward_ammo: 50,
    reward_steel: 50,
    reward_bauxite: 50,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "simple",
      subcategory: "ship",
      times: 1
    }
  }, {
    game_id: 602,
    wiki_id: "F02",
    category: 6,
    type: 1,
    name: "はじめての「開発」！",
    detail: "「工廠」でボーキサイトなどの資材を使って新しい装備アイテムを「開発」しよう！",
    reward_fuel: 100,
    reward_ammo: 100,
    reward_steel: 100,
    reward_bauxite: 100,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [601],
    requirements: {
      category: "simple",
      subcategory: "equipment",
      times: 1
    }
  }, {
    game_id: 603,
    wiki_id: "F03",
    category: 6,
    type: 1,
    name: "はじめての「解体」！",
    detail: "「工廠」で不要な艦を「解体」してみよう！",
    reward_fuel: 60,
    reward_ammo: 60,
    reward_steel: 60,
    reward_bauxite: 60,
    reward_other: [{
      name: "高速建造材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [602],
    requirements: {
      category: "simple",
      subcategory: "scrapship",
      times: 1
    }
  }, {
    game_id: 604,
    wiki_id: "F04",
    category: 6,
    type: 1,
    name: "はじめての「廃棄」！",
    detail: "「工廠」で装備アイテムを「廃棄」してみよう！",
    reward_fuel: 80,
    reward_ammo: 80,
    reward_steel: 80,
    reward_bauxite: 80,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [603],
    requirements: {
      category: "simple",
      subcategory: "scrapequipment",
      times: 1,
      batch: false
    }
  }, {
    game_id: 605,
    wiki_id: "F05",
    category: 6,
    type: 2,
    name: "新装備「開発」指令",
    detail: "「工廠」で装備アイテムを新たに「開発」しよう(失敗もOK)！",
    reward_fuel: 40,
    reward_ammo: 40,
    reward_steel: 40,
    reward_bauxite: 40,
    reward_other: [{
      name: "高速建造材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [602],
    requirements: {
      category: "simple",
      subcategory: "equipment",
      times: 1
    }
  }, {
    game_id: 606,
    wiki_id: "F06",
    category: 6,
    type: 2,
    name: "新造艦「建造」指令",
    detail: "「工廠」で艦娘を本日中に新たに「建造」しよう！",
    reward_fuel: 50,
    reward_ammo: 50,
    reward_steel: 50,
    reward_bauxite: 50,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [605],
    requirements: {
      category: "simple",
      subcategory: "ship",
      times: 1
    }
  }, {
    game_id: 607,
    wiki_id: "F07",
    category: 6,
    type: 2,
    name: "装備「開発」集中強化！",
    detail: "「工廠」で装備アイテムを本日中に3回「開発」しよう(失敗もOK)！",
    reward_fuel: 100,
    reward_ammo: 100,
    reward_steel: 100,
    reward_bauxite: 100,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [606],
    requirements: {
      category: "simple",
      subcategory: "equipment",
      times: 3
    }
  }, {
    game_id: 608,
    wiki_id: "F08",
    category: 6,
    type: 2,
    name: "艦娘「建造」艦隊強化！",
    detail: "艦隊強化のため、「工廠」で艦娘を本日中に3隻「建造」しよう！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 300,
    reward_bauxite: 100,
    reward_other: [{
      name: "高速建造材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [607],
    requirements: {
      category: "simple",
      subcategory: "ship",
      times: 3
    }
  }, {
    game_id: 609,
    wiki_id: "F09",
    category: 6,
    type: 2,
    name: "軍縮条約対応！",
    detail: "少し艦隊規模が大きくなりすぎました！「工廠」で不要な艦を2隻「解体」してください！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }],
    prerequisite: [608],
    requirements: {
      category: "simple",
      subcategory: "scrapship",
      times: 2
    }
  }, {
    game_id: 610,
    wiki_id: "F10",
    category: 6,
    type: 1,
    name: "「大型艦建造」の準備！(その弐)",
    detail: "大型艦建造の準備をします！「工廠」で装備アイテムを4回「廃棄」してみてください！",
    reward_fuel: 800,
    reward_ammo: 800,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "大型艦建造開放"
    }],
    prerequisite: [704],
    requirements: {
      category: "simple",
      subcategory: "scrapequipment",
      times: 4,
      batch: false
    }
  }, {
    game_id: 611,
    wiki_id: "WF01",
    category: 6,
    type: 1,
    name: "式の準備！(その壱)",
    detail: "式の準備をします！「工廠」で装備アイテムを2回「廃棄」して身の回りの整理を！",
    reward_fuel: 88,
    reward_ammo: 88,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [118],
    requirements: {
      category: "simple",
      subcategory: "scrapequipment",
      times: 2,
      batch: false
    }
  }, {
    game_id: 612,
    wiki_id: "F11",
    category: 6,
    type: 1,
    name: "輸送用ドラム缶の準備",
    detail: "「工廠」で装備アイテムを3回「廃棄」して、輸送用のドラム缶を準備します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 30,
    reward_bauxite: 0,
    reward_other: [{
      name: "ドラム缶(輸送用)",
      category: "装備",
      amount: 3
    }],
    prerequisite: [105],
    requirements: {
      category: "simple",
      subcategory: "scrapequipment",
      times: 3,
      batch: false
    }
  }, {
    game_id: 613,
    wiki_id: "F12",
    category: 6,
    type: 3,
    name: "資源の再利用",
    detail: "「工廠」で余剰の装備アイテムをなるべく多く「廃棄」して、鋼材の再利用に努めよう！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 100,
    reward_bauxite: 0,
    reward_other: [{
      name: "ドラム缶(輸送用)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [228],
    requirements: {
      category: "simple",
      subcategory: "scrapequipment",
      times: 24,
      batch: false
    }
  }, {
    game_id: 614,
    wiki_id: "F13",
    category: 6,
    type: 1,
    name: "機種転換",
    detail: "「九七式艦攻(友永隊)」搭載空母を秘書艦にした状態で新たに「天山」を2つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "天山一二型(友永隊)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [250],
    requirements: {
      category: "modelconversion",
      equipment: "九七式艦攻(友永隊)",
      scraps: [{
        name: "天山",
        amount: 2
      }]
    }
  }, {
    game_id: 615,
    wiki_id: "F14",
    category: 6,
    type: 1,
    name: "機種転換",
    detail: "「九九式艦爆(江草隊)」搭載空母を秘書艦にした状態で新たに「彗星」を2つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "彗星(江草隊)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [250],
    requirements: {
      category: "modelconversion",
      equipment: "九九式艦爆(江草隊)",
      scraps: [{
        name: "彗星",
        amount: 2
      }]
    }
  }, {
    game_id: 616,
    wiki_id: "F15",
    category: 6,
    type: 1,
    name: "機種転換",
    detail: "「零戦52型丙(六〇一空)」搭載空母を秘書艦にした状態で新たに「烈風」を2つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "烈風(六〇一空)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [253],
    requirements: {
      category: "modelconversion",
      equipment: "零戦52型丙(六〇一空)",
      scraps: [{
        name: "試製烈風 後期型",
        amount: 2
      }]
    }
  }, {
    game_id: 617,
    wiki_id: "F16",
    category: 6,
    type: 1,
    name: "「伊良湖」の準備",
    detail: "「工廠」で不要な装備アイテムをいくつか「廃棄」して、新型給糧艦召喚の準備をしましょう！",
    reward_fuel: 100,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 4
    }],
    prerequisite: [608],
    requirements: {
      category: "simple",
      subcategory: "scrapequipment",
      times: 10,
      batch: false
    }
  }, {
    game_id: 618,
    wiki_id: "F17",
    category: 6,
    type: 1,
    name: "はじめての「装備改修」！",
    detail: "「改修工廠」で「装備」を改修してみましょう！明石さん、お願いします！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 100,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 7
    }],
    prerequisite: [146],
    requirements: {
      category: "simple",
      subcategory: "improvement",
      times: 1
    }
  }, {
    game_id: 619,
    wiki_id: "F18",
    category: 6,
    type: 2,
    name: "装備の改修強化",
    detail: "「改修工廠」で「装備」の改修強化に努めます。",
    reward_fuel: 0,
    reward_ammo: 50,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 1
    }],
    prerequisite: [608, 618],
    requirements: {
      category: "simple",
      subcategory: "improvement",
      times: 1
    }
  }, {
    game_id: 620,
    wiki_id: "F88",
    category: 6,
    type: 1,
    name: "一航戦精鋭「流星改」隊の編成",
    detail: "一航戦任務：旗艦「赤城改二（改二戊）」第一装備スロに「流星改（一航戦）」※連度maxを搭載し、「流星改」×4「彩雲」×1「九七艦攻」×2廃棄、弾薬×2800、ボーキ9000、熟練搭乗員×2を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "流星改(一航戦/熟練)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [283, 623],
    requirements: {
      category: "modelconversion",
      use_skilled_crew: true,
      secretary: ["赤城改二", "赤城改二戊"],
      slots: [{
        slot: 1,
        equipment: "流星改(一航戦)",
        fullyskilled: true
      }],
      scraps: [{
        name: "流星改",
        amount: 4
      }, {
        name: "彩雲",
        amount: 1
      }, {
        name: "九七式艦攻",
        amount: 2
      }],
      resources: [0, 2800, 0, 9000]
    }
  }, {
    game_id: 621,
    wiki_id: "F89",
    category: 6,
    type: 1,
    name: "陸戦用装備の艦載運用研究",
    detail: "第一艦隊旗艦軽巡級の第一装備スロに「7.7mm機銃」装備。「25mm単装機銃」×2、「ドラム缶(輸送用)」×2、「12cm30連装噴進砲」×1を廃棄。弾薬1,700、開発資材×30、高速建造材×10を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "二式12cm迫撃砲改",
      category: "装備",
      amount: 1
    }],
    prerequisite: [605],
    requirements: {
      category: "modelconversion",
      secretary: "軽巡",
      slots: [{
        slot: 1,
        equipment: "7.7mm機銃"
      }],
      scraps: [{
        name: "25mm単装機銃",
        amount: 2
      }, {
        name: "ドラム缶(輸送用)",
        amount: 2
      }, {
        name: "12cm30連装噴進砲",
        amount: 1
      }],
      consumptions: [{
        name: "開発資材",
        amount: 30
      }, {
        name: "高速建造材",
        amount: 10
      }],
      resources: [0, 1700, 0, 0]
    }
  }, {
    game_id: 622,
    wiki_id: "F19",
    category: 6,
    type: 1,
    name: "機種転換",
    detail: "「九七式艦攻(村田隊)」搭載「翔鶴」を秘書艦にして、新たに「天山」を2つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "天山一二型(村田隊)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [287],
    requirements: {
      category: "modelconversion",
      equipment: "九七式艦攻(村田隊)",
      secretary: "翔鶴",
      scraps: [{
        name: "天山",
        amount: 2
      }]
    }
  }, {
    game_id: 623,
    wiki_id: "F20",
    category: 6,
    type: 1,
    name: "精鋭「九七式艦攻」部隊の編成",
    detail: "「翔鶴」または「赤城」を秘書艦にした状態で新たに「九七式艦攻」を3つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "九七式艦攻(村田隊)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [287],
    requirements: {
      category: "modelconversion",
      secretary: ["赤城", "翔鶴"],
      scraps: [{
        name: "九七式艦攻",
        amount: 3
      }]
    }
  }, {
    game_id: 624,
    wiki_id: "F21",
    category: 6,
    type: 1,
    name: "試作艤装の準備",
    detail: "「工廠」で装備アイテムを7つ「廃棄」して、「試製甲板カタパルト」を準備します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 100,
    reward_bauxite: 0,
    reward_other: [{
      name: "試製甲板カタパルト",
      amount: 1
    }],
    prerequisite: [420],
    requirements: {
      category: "simple",
      subcategory: "scrapequipment",
      times: 7,
      batch: true
    }
  }, {
    game_id: 625,
    wiki_id: "F23",
    category: 6,
    type: 1,
    name: "試製航空艤装の追加試作",
    detail: "「工廠」で装備アイテムを9つ「廃棄」して、「試製甲板カタパルト」を追加試作します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 100,
    reward_bauxite: 50,
    reward_other: [{
      name: "試製甲板カタパルト",
      amount: 1
    }],
    prerequisite: [294],
    requirements: {
      category: "simple",
      subcategory: "scrapequipment",
      times: 9,
      batch: true
    }
  }, {
    game_id: 626,
    wiki_id: "F22",
    category: 6,
    type: 6,
    name: "精鋭「艦戦」隊の新編成",
    detail: "要熟練搭乗員：練度max「零戦21型」搭載「鳳翔」秘書艦で「零戦21型」x2「九六艦戦」x1廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "零式艦戦21型(熟練)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [114, 264],
    requirements: {
      category: "modelconversion",
      equipment: "零式艦戦21型",
      secretary: "鳳翔",
      scraps: [{
        name: "零式艦戦21型",
        amount: 2
      }, {
        name: "九六式艦戦",
        amount: 1
      }],
      fullyskilled: true,
      use_skilled_crew: true
    }
  }, {
    game_id: 627,
    wiki_id: "F24",
    category: 6,
    type: 1,
    name: "機種転換",
    detail: "「零戦21型(熟練)」搭載空母を秘書艦にして、新たに「零戦52型」を2つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "零式艦戦52型(熟練)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [626],
    requirements: {
      category: "modelconversion",
      equipment: "零式艦戦21型(熟練)",
      scraps: [{
        name: "零式艦戦52型",
        amount: 2
      }]
    }
  }, {
    game_id: 628,
    wiki_id: "F25",
    category: 6,
    type: 6,
    name: "機種転換",
    detail: "練度max「零戦21型(熟練)」搭載空母を秘書艦にして、新たに「零戦52型」を2つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "零式艦戦52型(熟練)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [265, 627],
    requirements: {
      category: "modelconversion",
      equipment: "零式艦戦21型(熟練)",
      scraps: [{
        name: "零式艦戦52型",
        amount: 2
      }],
      fullyskilled: true
    }
  }, {
    game_id: 629,
    wiki_id: "F26",
    category: 6,
    type: 1,
    name: "「艦戦」隊の再編成",
    detail: "練度max「零戦52型(熟練)」搭載「瑞鶴」秘書艦で「零戦52型丙(六〇一空)」を廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "零戦52型丙(付岩井小隊)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [293, 624, 627],
    requirements: {
      category: "modelconversion",
      equipment: "零式艦戦52型(熟練)",
      secretary: "瑞鶴",
      scraps: [{
        name: "零戦52型丙(六〇一空)",
        amount: 1
      }],
      fullyskilled: true
    }
  }, {
    game_id: 630,
    wiki_id: "F28",
    category: 6,
    type: 1,
    name: "「艦戦」隊の再編成",
    detail: "練度max「零戦21型(熟練)」搭載「瑞鶴」が秘書の状態で、「零戦21型」を2つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "零戦21型(付岩本小隊)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [166, 626],
    requirements: {
      category: "modelconversion",
      equipment: "零式艦戦21型(熟練)",
      secretary: "瑞鶴",
      scraps: [{
        name: "零式艦戦21型",
        amount: 2
      }],
      fullyskilled: true
    }
  }, {
    game_id: 631,
    wiki_id: "F27",
    category: 6,
    type: 1,
    name: "機種転換＆部隊再編",
    detail: "練度max「零戦52型丙(付岩井小隊)」搭載「瑞鶴」秘書艦で、「零戦62型(爆戦)」を2つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "零戦62型(爆戦/岩井隊)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [294, 629],
    requirements: {
      category: "modelconversion",
      equipment: "零戦52型丙(付岩井小隊)",
      secretary: "瑞鶴",
      scraps: [{
        name: "零式艦戦62型(爆戦)",
        amount: 2
      }],
      fullyskilled: true
    }
  }, {
    game_id: 632,
    wiki_id: "F29",
    category: 6,
    type: 1,
    name: "機種転換",
    detail: "練度max「零戦21型(付岩本小隊)」搭載「瑞鶴」秘書艦で、「零戦52型」を2つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "零戦52型甲(付岩本小隊)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [625, 630],
    requirements: {
      category: "modelconversion",
      equipment: "零戦21型(付岩本小隊)",
      secretary: "瑞鶴",
      scraps: [{
        name: "零式艦戦52型",
        amount: 2
      }],
      fullyskilled: true
    }
  }, {
    game_id: 633,
    wiki_id: "F30",
    category: 6,
    type: 1,
    name: "機種転換＆部隊再編",
    detail: "部隊を再編する！練度max「零戦52型甲(付岩本小隊)」搭載「瑞鶴」秘書艦で、「彩雲」を2つ廃棄！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "零式艦戦53型(岩本隊)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [167],
    requirements: {
      category: "modelconversion",
      equipment: "零戦52型甲(付岩本小隊)",
      secretary: "瑞鶴",
      scraps: [{
        name: "彩雲",
        amount: 2
      }],
      fullyskilled: true
    }
  }, {
    game_id: 634,
    wiki_id: "F31",
    category: 6,
    type: 1,
    name: "新家具の準備",
    detail: "「工廠」で装備アイテムを9つ「廃棄」して、新家具の準備をします。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 90,
    reward_bauxite: 0,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [216],
    requirements: {
      category: "simple",
      subcategory: "scrapequipment",
      times: 9,
      batch: true
    }
  }, {
    game_id: 635,
    wiki_id: "F32",
    category: 6,
    type: 1,
    name: "新装備の準備",
    detail: "「工廠」で装備アイテムを5つ「廃棄」して、新装備配備の準備をします。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 50,
    reward_bauxite: 0,
    reward_other: [{
      name: "家具箱（中）",
      amount: 1
    }],
    prerequisite: [113, 220],
    requirements: {
      category: "simple",
      subcategory: "scrapequipment",
      times: 5,
      batch: true
    }
  }, {
    game_id: 636,
    wiki_id: "F33",
    category: 6,
    type: 1,
    name: "上陸戦用新装備の調達",
    detail: "「工廠」で「7.7mm機銃」及び「12.7mm単装機銃」を二つずつ廃棄！",
    reward_fuel: 50,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "特二式内火艇",
      category: "装備",
      amount: 1
    }],
    prerequisite: [278, 312],
    requirements: {
      category: "scrapequipment",
      list: [{
        name: "7.7mm機銃",
        amount: 2
      }, {
        name: "12.7mm単装機銃",
        amount: 2
      }]
    }
  }, {
    game_id: 637,
    wiki_id: "F35",
    category: 6,
    type: 7,
    name: "「熟練搭乗員」養成",
    detail: "勲章x2消費：「鳳翔」秘書艦に練度max及び改修max「九六式艦戦」を搭載、熟練搭乗員を養成せよ！<br>(任務達成後、部隊は消滅します)",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "改修資材",
      amount: 4
    }, {
      name: "熟練搭乗員",
      amount: 1
    }],
    prerequisite: [638],
    requirements: {
      category: "modelconversion",
      equipment: "九六式艦戦",
      secretary: "鳳翔",
      fullyskilled: true,
      maxmodified: true,
      consumptions: [{
        name: "勲章",
        amount: 2
      }]
    }
  }, {
    game_id: 638,
    wiki_id: "F34",
    category: 6,
    type: 3,
    name: "対空機銃量産",
    detail: "「機銃」系装備を量産し、工廠で6個廃棄！ 「装備改修」強化をサポートせよ！",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "改修資材",
      amount: 1
    }],
    prerequisite: [619],
    requirements: {
      category: "scrapequipment",
      list: [{
        name: "対空機銃",
        amount: 6
      }]
    }
  }, {
    game_id: 639,
    wiki_id: "F36",
    category: 6,
    type: 1,
    name: "新型魚雷兵装の開発",
    detail: "勲章x2消費：「島風」秘書艦に改修max「61cm五連装(酸素)魚雷」と<br>改修max「61cm三連装(酸素)魚雷」を装備！(任務達成後、各装備は消滅します)",
    reward_fuel: 0,
    reward_ammo: 600,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 6
    }, {
      name: "試製61cm六連装(酸素)魚雷",
      category: "装備",
      amount: 1
    }],
    prerequisite: [638, 818],
    requirements: {
      category: "modelconversion",
      equipment: ["61cm五連装(酸素)魚雷", "61cm三連装(酸素)魚雷"],
      secretary: "島風",
      maxmodified: true,
      consumptions: [{
        name: "勲章",
        amount: 2
      }]
    }
  }, {
    game_id: 641,
    wiki_id: "F37",
    category: 6,
    type: 1,
    name: "「航空基地設営」事前準備",
    detail: "「航空基地設営」の事前準備を開始する。「ドラム缶(輸送用)」を二つ「工廠」で廃棄し、「7.7mm機銃」及び「九六式艦戦」を各二つずつ用意せよ！(任務達成後、用意した必要装備は消滅します)",
    reward_fuel: 200,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "九六式陸攻",
      category: "装備",
      amount: 1
    }],
    prerequisite: [296],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "7.7mm機銃",
        amount: 2
      }, {
        name: "九六式艦戦",
        amount: 2
      }],
      scraps: [{
        name: "ドラム缶(輸送用)",
        amount: 2
      }]
    }
  }, {
    game_id: 642,
    wiki_id: "F38",
    category: 6,
    type: 1,
    name: "「陸攻」隊の増勢",
    detail: "「基地航空隊」開設に向け、「陸攻」の追加調達を行う。「7.7mm機銃」及び<br>「九九式艦爆」を各二つずつ準備せよ！(任務達成後、同装備は消滅します)",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "九六式陸攻",
      category: "装備",
      amount: 1
    }],
    prerequisite: [641, 825],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "7.7mm機銃",
        amount: 2
      }, {
        name: "九九式艦爆",
        amount: 2
      }]
    }
  }, {
    game_id: 643,
    wiki_id: "F39",
    category: 6,
    type: 7,
    name: "主力「陸攻」の調達",
    detail: "主力陸上攻撃機「一式陸攻」の新規調達を行う。「零式艦戦21型」を二つ「工廠」で廃棄し、<br>「九六式陸攻」一つと「九七式艦攻」二つを準備せよ！(任務達成後、用意した必要装備は消滅します)",
    reward_fuel: 250,
    reward_ammo: 250,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "一式陸攻",
      category: "装備",
      amount: 1
    }],
    prerequisite: [410, 642],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "九六式陸攻",
        amount: 1
      }, {
        name: "九七式艦攻",
        amount: 2
      }],
      scraps: [{
        name: "零式艦戦21型",
        amount: 2
      }]
    }
  }, {
    game_id: 644,
    wiki_id: "F40",
    category: 6,
    type: 1,
    name: "「一式陸攻」性能向上型の調達",
    detail: "「一式陸攻」性能向上型の配備を行う。「一式陸攻」一つと「天山」二つを準備せよ！<br>(任務達成後、用意した必要装備は消滅します/「一式陸攻」の熟練度は継承されます)",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "一式陸攻 二二型甲",
      category: "装備",
      amount: 1
    }],
    prerequisite: [643],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "一式陸攻",
        amount: 1
      }, {
        name: "天山",
        amount: 2
      }]
    }
  }, {
    game_id: 645,
    wiki_id: "F41",
    category: 6,
    type: 6,
    name: "「洋上補給」物資の調達",
    detail: "「三式弾」一つを廃棄し、燃料750及び弾薬750と「ドラム缶(輸送用)」二つと「九一式徹甲弾」一つを<br>用意せよ！※任務達成後、用意した資源及び必要装備(徹甲弾は改修値の低いもの優先)は消滅します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "洋上補給",
      amount: 1
    }],
    prerequisite: [228, 294],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "ドラム缶(輸送用)",
        amount: 2
      }, {
        name: "九一式徹甲弾",
        amount: 1
      }],
      scraps: [{
        name: "三式弾",
        amount: 1
      }],
      resources: [750, 750, 0, 0]
    }
  }, {
    game_id: 646,
    wiki_id: "F42",
    category: 6,
    type: 1,
    name: "「特注家具」の調達",
    detail: "「25mm単装機銃」一つを廃棄、家具コイン5,000と「25mm連装機銃」及び「25mm三連装機銃」を各<br>二つ準備せよ！　※任務達成後、用意した家具コイン及び必要装備(改修値の低いもの優先)は消滅します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [110, 302, 604],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "25mm連装機銃",
        amount: 2
      }, {
        name: "25mm三連装機銃",
        amount: 2
      }],
      scraps: [{
        name: "25mm単装機銃",
        amount: 1
      }],
      consumptions: [{
        name: "家具コイン",
        amount: 5000
      }]
    }
  }, {
    game_id: 647,
    wiki_id: "F43",
    category: 6,
    type: 1,
    name: "中部海域「基地航空隊」展開！",
    detail: "「ドラム缶(輸送用)」二つを廃棄、燃料1200及びボーキサイト3000、さらに「設営隊」一つを準備せよ！<br>※任務達成後、用意した資源及び「設営隊」は消滅します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "中部海域「基地航空隊」開放"
    }],
    prerequisite: [642, 809],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "ドラム缶(輸送用)",
        amount: 2
      }],
      resources: [1200, 0, 0, 3000],
      consumptions: [{
        name: "設営隊",
        amount: 1
      }]
    }
  }, {
    game_id: 648,
    wiki_id: "F44",
    category: 6,
    type: 1,
    name: "「特注家具」の調達",
    detail: "「12.7cm連装高角砲」二つを廃棄し、家具コイン5,000と「14cm単装砲」及び「15.2cm単装砲」を各二つずつ準備せよ！　※任務達成後、用意した家具コイン及び必要装備(低改修を優先)は消費します。",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [303, 646],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "14cm単装砲",
        amount: 2
      }, {
        name: "15.2cm単装砲",
        amount: 2
      }],
      scraps: [{
        name: "12.7cm連装高角砲",
        amount: 2
      }],
      consumptions: [{
        name: "家具コイン",
        amount: 5000
      }]
    }
  }, {
    game_id: 649,
    wiki_id: "F45",
    category: 6,
    type: 1,
    name: "新機軸偵察機の開発",
    detail: "新機軸の偵察機の調達を行う。「零式水上偵察機」を二つ「工廠」で廃棄し、<br>「一式陸攻」一つと「彩雲」二つを準備せよ！(任務達成後、用意した必要装備は消費します)",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "試製景雲(艦偵型)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [167, 647],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "一式陸攻",
        amount: 1
      }, {
        name: "彩雲",
        amount: 2
      }],
      scraps: [{
        name: "零式水上偵察機",
        amount: 2
      }]
    }
  }, {
    game_id: 650,
    wiki_id: "F46",
    category: 6,
    type: 1,
    name: "噴式戦闘爆撃機の開発",
    detail: "ネ式エンジンを搭載した新型戦闘爆撃機の開発を行う。「紫電改二」三つを「工廠」で廃棄し、「新型航空機設計図」二つと「ネ式エンジン」一つを準備せよ！(任務達成後、用意した必要アイテムは消費します)",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "開発資材",
      amount: 2
    }, {
      name: "橘花改",
      category: "装備",
      amount: 1
    }],
    prerequisite: [304, 649],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "紫電改二",
        amount: 3
      }],
      consumptions: [{
        name: "新型航空機設計図",
        amount: 2
      }, {
        name: "ネ式エンジン",
        amount: 1
      }]
    }
  }, {
    game_id: 651,
    wiki_id: "F47",
    category: 6,
    type: 1,
    name: "ネ式エンジンの増産",
    detail: "噴式航空機生産のため、ネ式エンジンの増産を行う。「零式艦戦52型」三つを「工廠」で廃棄し、「流星」「烈風」各二つと鉄鋼8,000を準備せよ！※任務達成後、用意した必要装備と資源は消費します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "ネ式エンジン",
      amount: 1
    }],
    prerequisite: [423, 649],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "流星",
        amount: 2
      }, {
        name: "試製烈風 後期型",
        amount: 2
      }],
      scraps: [{
        name: "零式艦戦52型",
        amount: 3
      }],
      resources: [0, 0, 8000, 0]
    }
  }, {
    game_id: 652,
    wiki_id: "F48",
    category: 6,
    type: 1,
    name: "「特注家具」の調達",
    detail: "主砲「12.7cm連装砲」を二つ廃棄、家具コイン5,000と「7.7mm機銃」及び「九六式艦戦」各二つずつ<br>準備せよ！　※任務達成後、用意した家具コイン及び必要装備(低改修値のもの優先)は消費します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [604, 648],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "7.7mm機銃",
        amount: 2
      }, {
        name: "九六式艦戦",
        amount: 2
      }],
      scraps: [{
        name: "12.7cm連装砲",
        amount: 2
      }],
      consumptions: [{
        name: "家具コイン",
        amount: 5000
      }]
    }
  }, {
    game_id: 653,
    wiki_id: "F90",
    category: 6,
    type: 7,
    name: "工廠稼働！次期作戦準備！",
    detail: "「14㎝単装砲」x6廢棄、家具コイン6000と「35.6㎝連装砲」「九六式艦戦」各三つを準備せよ！※任務達成後、用意した家具コイン及び必要装備（低改修値のもの優先）は消費します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 600,
    reward_bauxite: 600,
    reward_other: [{
      choices: [{
        name: "大発動艇",
        amount: 1
      }, {
        name: "零式艦戦21型",
        amount: 2
      }, {
        name: "九六式陸攻",
        amount: 1
      }]
    }, {
      choices: [{
        name: "九四式爆雷投射機",
        amount: 3
      }, {
        name: "12cm30連装噴進砲",
        amount: 2
      }, {
        name: "二式12cm迫撃砲改",
        amount: 1
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "35.6cm連装砲",
        amount: 3
      }, {
        name: "九六式艦戦",
        amount: 3
      }],
      scraps: [{
        name: "14cm単装砲",
        amount: 6
      }],
      consumptions: [{
        name: "家具コイン",
        amount: 6000
      }]
    }
  }, {
    game_id: 656,
    wiki_id: "F49",
    category: 6,
    type: 1,
    name: "六三一空「晴嵐」隊の編成",
    detail: "秘書艦に「伊401」または「伊14」または「伊13」を配備。「晴嵐」を一番スロットに搭載。「瑞雲(六三一空)」を二番スロットに搭載。「晴嵐(六三一空)」を新編せよ！　※任務達成後瑞雲は消滅します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "晴嵐(六三一空)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [828, 846],
    requirements: {
      category: "modelconversion",
      slots: [{
        slot: 1,
        equipment: "試製晴嵐"
      }, {
        slot: 2,
        equipment: "瑞雲(六三一空)"
      }],
      secretary: ["伊401", "伊14", "伊13"]
    }
  }, {
    game_id: 658,
    wiki_id: "F50",
    category: 6,
    type: 1,
    name: "潜水艦武装の強化",
    detail: "「61cm三連装魚雷」を四つ廃棄、開発資材x120と「61cm四連装(酸素)魚雷」「九三式水中聴音機」各三つを準備せよ！　※任務達成後、用意した開発資材及び必要装備(低改修値のもの優先)は消費します。",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "後期型艦首魚雷(6門)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [619, 846],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "61cm四連装(酸素)魚雷",
        amount: 3
      }, {
        name: "九三式水中聴音機",
        amount: 3
      }],
      scraps: [{
        name: "61cm三連装魚雷",
        amount: 4
      }],
      consumptions: [{
        name: "開発資材",
        amount: 120
      }]
    }
  }, {
    game_id: 659,
    wiki_id: "F51",
    category: 6,
    type: 1,
    name: "精鋭「水戦」隊の新編成",
    detail: "精鋭飛行隊の新編成：練度max及び改修maxの「二式水戦改」を一番スロットに搭載した秘書艦で、<br>「零式艦戦21型」x2「瑞雲」x2を廃棄！　※新飛行隊を編成する「熟練搭乗員」が必要です。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "二式水戦改(熟練)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [607, 839],
    requirements: {
      category: "modelconversion",
      secretary: "艦",
      use_skilled_crew: true,
      slots: [{
        slot: 1,
        equipment: "二式水戦改",
        fullyskilled: true,
        maxmodified: true
      }],
      scraps: [{
        name: "零式艦戦21型",
        amount: 2
      }, {
        name: "瑞雲",
        amount: 2
      }]
    }
  }, {
    game_id: 660,
    wiki_id: "F52",
    category: 6,
    type: 1,
    name: "精鋭「水戦」隊の増勢",
    detail: "精鋭飛行隊の増勢：練度max及び改修maxの「二式水戦改」を一番スロットに搭載した秘書艦で、<br>「零式艦戦21型」x2「瑞雲」x2を廃棄！　※新飛行隊を編成する「熟練搭乗員」が必要です。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 50,
    reward_other: [{
      name: "二式水戦改(熟練)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [659, 850],
    requirements: {
      category: "modelconversion",
      secretary: "艦",
      use_skilled_crew: true,
      slots: [{
        slot: 1,
        equipment: "二式水戦改",
        fullyskilled: true,
        maxmodified: true
      }],
      scraps: [{
        name: "零式艦戦21型",
        amount: 2
      }, {
        name: "瑞雲",
        amount: 2
      }]
    }
  }, {
    game_id: 661,
    wiki_id: "F53",
    category: 6,
    type: 1,
    name: "新型砲墳兵装、戦力化開始！",
    detail: "工廠任務：新型砲墳兵装の開発及び同戦力化を開始する。「副砲」系装備x10を廃棄、<br>鉄鋼6,000を準備せよ！　※任務達成後、準備した資源は消費します。",
    reward_fuel: 0,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "家具箱（中）",
      amount: 2
    }, {
      name: "新型砲熕兵装資材",
      amount: 1
    }],
    prerequisite: [607, 612],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "副砲",
        amount: 10
      }],
      resources: [0, 0, 6000, 0]
    }
  }, {
    game_id: 662,
    wiki_id: "F54",
    category: 6,
    type: 1,
    name: "新型艤装の開発研究",
    detail: "工廠任務：新型艤装の開発研究を実施する。「中口径主砲」系装備x10を廃棄、鉄鋼12,000を準備せよ！<br>※任務達成後、準備した資源は消費します。「勲章」と「新型砲墳兵装資材」の獲得選択が可能です。",
    reward_fuel: 0,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }]
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [618, 661],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "中口径主砲",
        amount: 10
      }],
      resources: [0, 0, 12000, 0]
    }
  }, {
    game_id: 663,
    wiki_id: "F55",
    category: 6,
    type: 7,
    name: "新型艤装の継続研究",
    detail: "工廠任務：新型艤装の開発を継続実施する。「大口径主砲」系装備x10を廃棄、鉄鋼18,000を準備せよ！<br>※任務達成後、準備した資源は消費します。「勲章」と「新型砲熕兵装資材」の獲得選択が可能です。",
    reward_fuel: 0,
    reward_ammo: 600,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }]
    }, {
      name: "開発資材",
      amount: 3
    }],
    prerequisite: [425],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "大口径主砲",
        amount: 10
      }],
      resources: [0, 0, 18000, 0]
    }
  }, {
    game_id: 664,
    wiki_id: "F56",
    category: 6,
    type: 1,
    name: "電探技術の射撃装置への活用",
    detail: "工廠任務：電探技術の射撃装置への活用を研究する。「電探」系装備x10を廃棄、弾薬及び鉄鋼を各8,000<br>準備せよ！※任務達成後、準備した資源は消費します。「勲章」と「兵装資材」の獲得選択が可能です。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }]
    }, {
      name: "開発資材",
      amount: 4
    }],
    prerequisite: [661],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "電探",
        amount: 10
      }],
      resources: [0, 8000, 8000, 0]
    }
  }, {
    game_id: 665,
    wiki_id: "F57",
    category: 6,
    type: 1,
    name: "民生産業への協力",
    detail: "工廠任務：軍需物資を放出し、民生産業に協力する。「小口径主砲」系装備x16を廃棄、燃料12,000を<br>準備せよ！※任務達成後、準備した資源は消費します。「勲章」と「兵装資材」の獲得選択が可能です。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 600,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }]
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [664],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "小口径主砲",
        amount: 16
      }],
      resources: [12000, 0, 0, 0]
    }
  }, {
    game_id: 666,
    wiki_id: "F58",
    category: 6,
    type: 1,
    name: "精鋭「瑞雲」隊の編成",
    detail: "秘書艦「日向改」の四番スロットに改修max「瑞雲(六三四空)」を搭載して、ドラム缶(輸送用)x2を廃棄。<br>さらに「九九式艦爆」x2「瑞雲」x2を用意せよ！　※新飛行隊を編成する「熟練搭乗員」が必要です。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "瑞雲(六三四空/熟練)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [607, 859],
    requirements: {
      category: "modelconversion",
      secretary: "日向改",
      use_skilled_crew: true,
      slots: [{
        slot: 4,
        equipment: "瑞雲(六三四空)",
        maxmodified: true
      }],
      consumptions: [{
        name: "九九式艦爆",
        amount: 2
      }, {
        name: "瑞雲",
        amount: 2
      }],
      scraps: [{
        name: "ドラム缶(輸送用)",
        amount: 2
      }]
    }
  }, {
    game_id: 667,
    wiki_id: "F59",
    category: 6,
    type: 1,
    name: "民生産業への協力を継続せよ！",
    detail: "工廠任務：軍需物資を放出し、民生産業への協力を継続する。「機銃」系装備x10を廃棄、鉄鋼15,000を<br>準備せよ！※任務達成後、準備した資源は消費します。「特注家具職人」と「勲章」の獲得選択が可能。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }, {
      name: "戦闘糧食",
      amount: 2
    }],
    prerequisite: [665],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "対空機銃",
        amount: 10
      }],
      resources: [0, 0, 15000, 0]
    }
  }, {
    game_id: 668,
    wiki_id: "F60",
    category: 6,
    type: 1,
    name: "新型戦闘糧食の試作",
    detail: "料理任務：手軽に食事をとることができて、なおかつ美味しく腹にがっつりたまる新型の戦闘糧食を<br>開発する。「戦闘糧食」x2と燃料800及びボーキサイト150を用意せよ！油入れ送気開始！調理始め！",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "戦闘糧食(特別なおにぎり)",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "equipexchange",
      equipments: [{
        name: "戦闘糧食",
        amount: 2
      }],
      scraps: [],
      resources: [800, 0, 0, 150]
    }
  }, {
    game_id: 669,
    wiki_id: "F61",
    category: 6,
    type: 1,
    name: "夜戦型艦上戦闘機の開発",
    detail: "練度&改修maxの「F6F-3」を秘書艦一番スロットに搭載、 「13号対空電探」x2 「22号対水上電探」x2<br>を廃棄、開発資材x30、改修資材x6、ボーキサイト5,000、「新型航空兵装資材」x1を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "F6F-3N",
      category: "装備",
      amount: 1
    }],
    prerequisite: [185, 608],
    requirements: {
      category: "modelconversion",
      secretary: "艦",
      slots: [{
        slot: 1,
        equipment: "F6F-3",
        fullyskilled: true,
        maxmodified: true
      }],
      scraps: [{
        name: "13号対空電探",
        amount: 2
      }, {
        name: "22号対水上電探",
        amount: 2
      }],
      consumptions: [{
        name: "開発資材",
        amount: 30
      }, {
        name: "改修資材",
        amount: 6
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }],
      resources: [0, 0, 0, 5000]
    }
  }, {
    game_id: 670,
    wiki_id: "F63",
    category: 6,
    type: 1,
    name: "夜戦型艦上戦闘機の性能強化",
    detail: "練度&改修maxの「F6F-5」を秘書艦一番スロットに搭載、 「13号対空電探」x2 「22号対水上電探」x2<br>を廃棄、開発資材x40、改修資材x8、ボーキサイト6,000、「新型航空兵装資材」x1を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "F6F-5N",
      category: "装備",
      amount: 1
    }],
    prerequisite: [669, 864],
    requirements: {
      category: "modelconversion",
      secretary: "艦",
      slots: [{
        slot: 1,
        equipment: "F6F-5",
        fullyskilled: true,
        maxmodified: true
      }],
      scraps: [{
        name: "13号対空電探",
        amount: 2
      }, {
        name: "22号対水上電探",
        amount: 2
      }],
      consumptions: [{
        name: "開発資材",
        amount: 40
      }, {
        name: "改修資材",
        amount: 8
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }],
      resources: [0, 0, 0, 6000]
    }
  }, {
    game_id: 671,
    wiki_id: "F62",
    category: 6,
    type: 1,
    name: "夜間作戦型艦上攻撃機の開発",
    detail: "「TBF」を秘書艦一番スロットに搭載、「13号対空電探」x2「22号対水上電探」x2廃棄、開発資材x40<br>改修資材x10、弾薬5,000、ボーキサイト8,000、「新型航空兵装資材」x1、「熟練搭乗員」を用意せよ！",
    reward_fuel: 100,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "TBM-3D",
      category: "装備",
      amount: 1
    }],
    prerequisite: [638, 669],
    requirements: {
      category: "modelconversion",
      secretary: "艦",
      use_skilled_crew: true,
      slots: [{
        slot: 1,
        equipment: "TBF"
      }],
      scraps: [{
        name: "13号対空電探",
        amount: 2
      }, {
        name: "22号対水上電探",
        amount: 2
      }],
      consumptions: [{
        name: "開発資材",
        amount: 40
      }, {
        name: "改修資材",
        amount: 10
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }],
      resources: [0, 5000, 0, 8000]
    }
  }, {
    game_id: 672,
    wiki_id: "F64",
    category: 6,
    type: 1,
    name: "「遊撃部隊」艦隊司令部の創設",
    detail: "遊撃部隊任務：「遊撃部隊 艦隊司令部」を創設する。「艦隊司令部施設」を秘書艦一番スロットに搭載、 <br>電探系装備x3を廃棄、開発資材x10、鋼材x2,000、そして「戦闘詳報」x2を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "遊撃部隊 艦隊司令部",
      category: "装備",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "modelconversion",
      secretary: "艦",
      slots: [{
        slot: 1,
        equipment: "艦隊司令部施設"
      }],
      scraps: [{
        name: "電探",
        amount: 3
      }, {
        name: "開発資材",
        amount: 10
      }],
      consumptions: [{
        name: "戦闘詳報",
        amount: 2
      }],
      resources: [0, 0, 2000, 0]
    }
  }, {
    game_id: 673,
    wiki_id: "F65",
    category: 6,
    type: 2,
    name: "装備開発力の整備",
    detail: "工廠整備任務：装備開発力を整備する。「小口径主砲」系装備x4を廃棄せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 100,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [607],
    requirements: {
      category: "scrapequipment",
      list: [{
        name: "小口径主砲",
        amount: 4
      }]
    }
  }, {
    game_id: 674,
    wiki_id: "F66",
    category: 6,
    type: 2,
    name: "工廠環境の整備",
    detail: "工廠整備任務：工廠環境の重整備を実施する。「機銃」系装備x3を廃棄、鋼材300を準備せよ！<br>※任務達成後、準備した資源は消費します。",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [673],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "対空機銃",
        amount: 3
      }],
      resources: [0, 0, 300, 0]
    }
  }, {
    game_id: 675,
    wiki_id: "F67",
    category: 6,
    type: 7,
    name: "運用装備の統合整備",
    detail: "運用装備統合任務：装備の統合整備を実施する。「艦上戦闘機」系装備x6、「機銃」系装備x4を廃棄、<br>ボーキサイト800を準備(本任務は時局により更新されます)。　※任務達成後、準備資源を消費します。",
    reward_fuel: 200,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "一式戦 隼II型",
        amount: 1
      }, {
        name: "紫電一一型",
        amount: 1
      }, {
        name: "改修資材",
        amount: 4
      }]
    }, {
      name: "開発資材",
      amount: 4
    }],
    prerequisite: [674],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "艦上戦闘機",
        amount: 6
      }, {
        name: "対空機銃",
        amount: 4
      }],
      resources: [0, 0, 0, 800]
    }
  }, {
    game_id: 676,
    wiki_id: "F68",
    category: 6,
    type: 3,
    name: "装備開発力の集中整備",
    detail: "工廠環境の集中整備を実施する！「中口径主砲」系装備x3、「副砲」系装備x3、「ドラム缶(輸送用)」x1<br>を廃棄、鋼材2,400を準備せよ！　※任務達成後、準備した資源は消費します。",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "開発資材",
      amount: 7
    }, {
      name: "高速修復材",
      amount: 1
    }],
    prerequisite: [674],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "中口径主砲",
        amount: 3
      }, {
        name: "副砲",
        amount: 3
      }, {
        name: "ドラム缶(輸送用)",
        amount: 1
      }],
      resources: [0, 0, 2400, 0]
    }
  }, {
    game_id: 677,
    wiki_id: "F69",
    category: 6,
    type: 3,
    name: "継戦支援能力の整備",
    detail: "艦娘の継戦支援体制の整備強化を実施する！「大口径主砲」系装備x4、「水上偵察機」系装備x2、<br>「魚雷」系装備x3を廃棄、鋼材3,600を準備せよ！　※任務達成後、準備した資源は消費します。",
    reward_fuel: 0,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 150,
    reward_other: [{
      name: "高速修復材",
      amount: 5
    }],
    prerequisite: [674],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "大口径主砲",
        amount: 4
      }, {
        name: "水上偵察機",
        amount: 2
      }, {
        name: "魚雷",
        amount: 3
      }],
      resources: [0, 0, 3600, 0]
    }
  }, {
    game_id: 678,
    wiki_id: "F70",
    category: 6,
    type: 7,
    name: "主力艦上戦闘機の更新",
    detail: "艦上戦闘機「九六式艦戦」x3、「零式艦戦21型」x5を廃棄。秘書艦の一番及び二番装備スロットに<br>「零式艦戦52型」を装備。ボーキサイト4,000を準備せよ。※任務達成後、準備資源は消費します。",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "紫電改二",
      amount: 2
    }, {
      choices: [{
        name: "開発資材",
        amount: 8
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }]
    }],
    prerequisite: [216, 676, 702],
    requirements: {
      category: "and",
      list: [{
        category: "modelconversion",
        secretary: "艦",
        slots: [{
          slot: 1,
          equipment: "零式艦戦52型"
        }, {
          slot: 2,
          equipment: "零式艦戦52型"
        }],
        scraps: [{
          name: "九六式艦戦",
          amount: 3
        }, {
          name: "零式艦戦21型",
          amount: 5
        }]
      }, {
        category: "equipexchange",
        resources: [0, 0, 0, 4000]
      }]
    }
  }, {
    game_id: 679,
    wiki_id: "F71",
    category: 6,
    type: 1,
    name: "対空兵装の拡充",
    detail: "対空兵装の整備拡充を実施する！「中口径主砲」系装備x6、「副砲」系装備x3を廃棄、<br>ボーキサイト900を準備せよ！　※任務達成後、準備した資源は消費します。",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "25mm三連装機銃",
        amount: 2
      }, {
        name: "12cm30連装噴進砲",
        amount: 2
      }, {
        name: "補強増設",
        amount: 1
      }]
    }],
    prerequisite: [605],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "中口径主砲",
        amount: 6
      }, {
        name: "副砲",
        amount: 3
      }],
      resources: [0, 0, 0, 900]
    }
  }, {
    game_id: 680,
    wiki_id: "F72",
    category: 6,
    type: 7,
    name: "対空兵装の整備拡充",
    detail: "対空兵装の整備拡充を継続実施する!「機銃」系装備x4、「電探」系装備x4を廃棄、ボーキサイト1,500を準備せよ!※任務達成後、準備した資源は消費します。",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "10cm連装高角砲",
        amount: 2
      }, {
        name: "12cm30連装噴進砲",
        amount: 2
      }]
    }, {
      choices: [{
        name: "8cm高角砲",
        amount: 2
      }, {
        name: "開発資材",
        amount: 6
      }]
    }],
    prerequisite: [605, 679],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "対空機銃",
        amount: 4
      }, {
        name: "電探",
        amount: 4
      }],
      resources: [0, 0, 0, 1500]
    }
  }, {
    game_id: 682,
    wiki_id: "F73",
    category: 6,
    type: 1,
    name: "「海防艦」整備計画",
    detail: "大型艦兵装を整理削減、警備及び海上護衛用小艦艇「海防艦」を整備する。「中口径主砲」x4、「大口径主砲」x4を破棄し、燃料500を準備せよ！※任務達成後、準備した資材は消費します。",
    reward_fuel: 200,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "特注家具職人",
        amount: 1
      }, {
        name: "開発資材",
        amount: 4
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }]
    }, {
      choices: [{
        name: "択捉",
        category: "艦娘",
        amount: 1
      }, {
        name: "松輪",
        category: "艦娘",
        amount: 1
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "中口径主砲",
        amount: 4
      }, {
        name: "大口径主砲",
        amount: 4
      }],
      resources: [500, 0, 0, 0]
    }
  }, {
    game_id: 683,
    wiki_id: "F74",
    category: 6,
    type: 1,
    name: "航空戦艦用強化型新主砲の研究",
    detail: "秘書艦「伊勢改二」一番スロに「試製41cm三連装砲」改修max搭載、「41cm連装砲」×3「22号対水上電探」×2を廃棄、開発資材×40、高速建造材×50、鋼材4500、新型砲熕兵装資材×2を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "41cm三連装砲改二",
      amount: 1
    }],
    prerequisite: [324, 664],
    requirements: {
      category: "modelconversion",
      secretary: "伊勢改二",
      slots: [{
        slot: 1,
        equipment: "試製41cm三連装砲",
        maxmodified: true
      }],
      consumptions: [{
        name: "開発資材",
        amount: 40
      }, {
        name: "高速建造材",
        amount: 50
      }, {
        name: "新型砲熕兵装資材",
        amount: 2
      }],
      scraps: [{
        name: "41cm連装砲",
        amount: 3
      }, {
        name: "22号対水上電探",
        amount: 2
      }],
      resources: [0, 0, 4500, 0]
    }
  }, {
    game_id: 684,
    wiki_id: "F75",
    category: 6,
    type: 1,
    name: "精鋭「航空戦艦」彗星隊の編成",
    detail: "精鋭彗星隊編成：旗艦「伊勢改二」第三スロに「彗星二二型(六三四空)」搭載、熟練搭載員、開発資材×30、新型航空兵装資材を用意、「九九艦爆」「彗星」各×3廃棄、ボーキサイト一定量確保せよ！",
    reward_fuel: 0,
    reward_ammo: 634,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "彗星二二型(六三四空/熟練)",
      amount: 1
    }],
    prerequisite: [886],
    requirements: {
      category: "modelconversion",
      secretary: "伊勢改二",
      slots: [{
        slot: 3,
        equipment: "彗星二二型(六三四空)"
      }],
      use_skilled_crew: true,
      consumptions: [{
        name: "開発資材",
        amount: 30
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }],
      scraps: [{
        name: "九九式艦爆",
        amount: 3
      }, {
        name: "彗星",
        amount: 3
      }],
      resources: [0, 0, 0, 3000]
    }
  }, {
    game_id: 685,
    wiki_id: "F76",
    category: 6,
    type: 1,
    name: "駆逐艦主砲兵装の戦時改修",
    detail: "旗艦特型駆逐艦の第一スロに「12.7cm連装砲A型改二」改修maxを装備、 「10cm連装高角砲」x4 「94式高射装置」x1を廃棄、開発資材x30、鋼材900、新型砲熕兵装資材x1を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "12.7cm連装砲A型改三(戦時改修)+高射装置",
      amount: 1
    }],
    prerequisite: [682],
    requirements: {
      category: "modelconversion",
      secretary: ["吹雪", "白雪", "初雪", "深雪", "叢雲", "磯波", "浦波"],
      slots: [{
        slot: 1,
        equipment: "12.7cm連装砲A型改二",
        maxmodified: true
      }],
      consumptions: [{
        name: "開発資材",
        amount: 30
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }],
      scraps: [{
        name: "10cm連装高角砲",
        amount: 4
      }, {
        name: "94式高射装置",
        amount: 1
      }],
      resources: [0, 0, 900, 0]
    }
  }, {
    game_id: 686,
    wiki_id: "F77",
    category: 6,
    type: 7,
    name: "戦時改修A型高角砲の量産",
    detail: "旗艦特型駆逐艦の第一スロに「12.7cm連装砲A型改二」改修maxを装備、「10cm連装高角砲」x4、「94式高射装置」x1を廃棄、開発資材x30、鋼材900、新型砲熕兵装資材x1を再び準備せよ！",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "12.7cm連装砲A型改三(戦時改修)+高射装置",
      amount: 1
    }],
    prerequisite: [680, 685],
    requirements: {
      category: "modelconversion",
      secretary: ["吹雪", "白雪", "初雪", "深雪", "叢雲", "磯波", "浦波"],
      slots: [{
        slot: 1,
        equipment: "12.7cm連装砲A型改二",
        maxmodified: true
      }],
      consumptions: [{
        name: "開発資材",
        amount: 30
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }],
      scraps: [{
        name: "10cm連装高角砲",
        amount: 4
      }, {
        name: "94式高射装置",
        amount: 1
      }],
      resources: [0, 0, 900, 0]
    }
  }, {
    game_id: 687,
    wiki_id: "F78",
    category: 6,
    type: 1,
    name: "駆逐艦主砲兵装の戦時改修【II】",
    detail: "旗艦「夕立改二」または「時雨改二」第一スロに「12.7cm連装砲B型改二」改修max装備、「10cm連装高角砲」×5及び「94式高射装置」×1廃棄、開発資材×50、鋼材1200、新型砲熕兵装資材×1を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 220,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "12.7cm連装砲B型改四(戦時改修)+高射装置",
      amount: 1
    }],
    prerequisite: [685],
    requirements: {
      category: "modelconversion",
      secretary: ["夕立改二", "時雨改二"],
      slots: [{
        slot: 1,
        equipment: "12.7cm連装砲B型改二",
        maxmodified: true
      }],
      consumptions: [{
        name: "開発資材",
        amount: 50
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }],
      scraps: [{
        name: "10cm連装高角砲",
        amount: 5
      }, {
        name: "94式高射装置",
        amount: 1
      }],
      resources: [0, 0, 1200, 0]
    }
  }, {
    game_id: 688,
    wiki_id: "F79",
    category: 6,
    type: 7,
    name: "航空戦力の強化",
    detail: "航空戦力強化任務：「艦戦」「艦爆」「艦攻」「水偵」を各3装備ずつ破棄、さらに熟練搭乗員x1、及びボーキサイト1,800を準備せよ！（任務達成後、熟練搭乗員x1及びボーキサイト1,800は消滅します）",
    reward_fuel: 100,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "零式艦戦32型(熟練)",
        amount: 1
      }, {
        name: "一式戦 隼II型",
        amount: 1
      }, {
        name: "瑞雲(六三一空)",
        amount: 1
      }]
    }],
    prerequisite: [674],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "艦上戦闘機",
        amount: 3
      }, {
        name: "艦上爆撃機",
        amount: 3
      }, {
        name: "艦上攻撃機",
        amount: 3
      }, {
        name: "水上偵察機",
        amount: 3
      }],
      equipments: [{
        name: "熟練搭乗員",
        amount: 1
      }],
      resources: [0, 0, 0, 1800]
    }
  }, {
    game_id: 689,
    wiki_id: "F80",
    category: 6,
    type: 1,
    name: "戦闘機隊戦力の拡充",
    detail: "戦闘機拡充任務：「艦戦」「水偵」各×4、「艦偵」×2装備を廃棄、熟練搭乗員×1、新型航空兵装資材×1、ボーキサイト3,000を準備せよ！（任務達成後、準備した資源・熟練搭乗員・新型航空兵装資材は消費）",
    reward_fuel: 0,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "烈風 一一型",
        amount: 1
      }, {
        name: "三式戦 飛燕",
        amount: 2
      }, {
        name: "Spitfire Mk.I",
        amount: 2
      }]
    }],
    prerequisite: [204, 225, 303, 619, 673, 702],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "艦上戦闘機",
        amount: 4
      }, {
        name: "水上偵察機",
        amount: 4
      }, {
        name: "艦上偵察機",
        amount: 2
      }],
      equipments: [{
        name: "熟練搭乗員",
        amount: 1
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }],
      resources: [0, 0, 0, 3000]
    }
  }, {
    game_id: 690,
    wiki_id: "F81",
    category: 6,
    type: 1,
    name: "基地航空隊戦力の拡充",
    detail: "基地航空隊拡充任務：「艦戦」「艦爆」「艦攻」各×4装備を廃棄、熟練搭乗員×1、新型航空兵装資材×2、ボーキサイト4,800を準備せよ！（任務達成後、準備した資源・熟練搭乗員・新型航空兵装資材は消費）",
    reward_fuel: 0,
    reward_ammo: 200,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "雷電",
        amount: 1
      }, {
        name: "試製東海",
        amount: 1
      }, {
        name: "紫電一一型",
        amount: 2
      }]
    }],
    prerequisite: [641, 689],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "艦上戦闘機",
        amount: 4
      }, {
        name: "艦上爆撃機",
        amount: 4
      }, {
        name: "艦上攻撃機",
        amount: 4
      }],
      equipments: [{
        name: "熟練搭乗員",
        amount: 1
      }, {
        name: "新型航空兵装資材",
        amount: 2
      }],
      resources: [0, 0, 0, 4800]
    }
  }, {
    game_id: 691,
    wiki_id: "F82",
    category: 6,
    type: 1,
    name: "提督室のリフォーム",
    detail: "提督室のリフォームを実施する！まずは装備の整理から！「中口径主砲」系装備x4、「副砲」系装備x4、「機銃」系装備x4を廃棄、ボーキサイト1,600を準備せよ！",
    reward_fuel: 200,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "開発資材",
        amount: 5
      }, {
        name: "家具箱(中)",
        amount: 3
      }]
    }, {
      choices: [{
        name: "特注家具職人",
        amount: 1
      }, {
        name: "家具箱(大)",
        amount: 3
      }]
    }],
    prerequisite: [303],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "中口径主砲",
        amount: 4
      }, {
        name: "副砲",
        amount: 4
      }, {
        name: "対空機銃",
        amount: 4
      }],
      resources: [0, 0, 0, 1600]
    }
  }, {
    game_id: 692,
    wiki_id: "F83",
    category: 6,
    type: 1,
    name: "水上艦艇装備工廠の整備",
    detail: "水上艦艇装備工廠の整備を実施する！「小口径主砲」系装備x5、「大口径主砲」系装備x5、「水偵」系装備x5を廃棄、鋼材3,000を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      choices: [{
        name: "特注家具職人",
        amount: 1
      }, {
        name: "改修資材",
        amount: 2
      }, {
        name: "開発資材",
        amount: 5
      }]
    }, {
      choices: [{
        name: "増設バルジ(中型艦)",
        amount: 2
      }, {
        name: "増設バルジ(大型艦)",
        amount: 1
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "小口径主砲",
        amount: 5
      }, {
        name: "大口径主砲",
        amount: 5
      }, {
        name: "水上偵察機",
        amount: 5
      }],
      resources: [0, 0, 3000, 0]
    }
  }, {
    game_id: 693,
    wiki_id: "F84",
    category: 6,
    type: 1,
    name: "回転翼機の開発",
    detail: "回転翼機装備の研究開発を実施する。「水偵」系装備x4、「艦戦」系装備x3、「艦攻」系装備x2を廃棄、ボーキサイト3,000、開発資材x20を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "新型航空兵装資材",
        amount: 2
      }, {
        name: "オ号観測機改",
        amount: 1
      }]
    }],
    prerequisite: [605, 682],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "水上偵察機",
        amount: 4
      }, {
        name: "艦上戦闘機",
        amount: 3
      }, {
        name: "艦上攻撃機",
        amount: 2
      }, {
        name: "開発資材",
        amount: 20
      }],
      resources: [0, 0, 0, 3000]
    }
  }, {
    game_id: 694,
    wiki_id: "F85",
    category: 6,
    type: 1,
    name: "新型航空艤装の研究",
    detail: "艦艇の航空運用能力を高める新型航空艤装の研究を行う。「瑞雲」x4、「彗星」x4、「流星」x2を廃棄、鋼材8,500、ボーキサイト4,000、開発資材x60を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "試製甲板カタパルト",
        amount: 1
      }, {
        name: "新型航空兵装資材",
        amount: 3
      }]
    }],
    prerequisite: [303, 693],
    requirements: {
      category: "equipexchange",
      scraps: [{
        name: "瑞雲",
        amount: 4
      }, {
        name: "彗星",
        amount: 4
      }, {
        name: "流星",
        amount: 2
      }, {
        name: "開発資材",
        amount: 60
      }],
      resources: [0, 0, 8500, 4000]
    }
  }, {
    game_id: 695,
    wiki_id: "F86",
    category: 6,
    type: 1,
    name: "「彗星」艦爆の新運用研究",
    detail: "三号爆弾運用：旗艦「伊勢改二」または「日向改二」第一スロに「彗星一二型甲」搭載、 「彗星」x4、「九九式艦爆」x3、「瑞雲」x2廃棄、弾薬x2,500、ボーキ5,000、新型航空兵装資材x1を準備せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "彗星一二型(六三四空/三号爆弾搭載機)",
      amount: 1
    }],
    prerequisite: [331, 693],
    requirements: {
      category: "modelconversion",
      secretary: ["伊勢改二", "日向改二"],
      slots: [{
        slot: 1,
        equipment: "彗星一二型甲"
      }],
      scraps: [{
        name: "彗星",
        amount: 4
      }, {
        name: "九九式艦爆",
        amount: 3
      }, {
        name: "瑞雲",
        amount: 2
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }],
      resources: [0, 2500, 0, 5000]
    }
  }, {
    game_id: 696,
    wiki_id: "F87",
    category: 6,
    type: 1,
    name: "最精鋭「瑞雲」隊の編成",
    detail: "旗艦「伊勢改二」「日向改二」 第一ス口に「瑞雲改二(六三四空)」※改修max。「瑞雲」x6「彗星」x3、「試製烈風 後期型」x1廃棄、弾薬2,000、ボ一キ8,000、新型航空兵装資材x1、熟練搭乗員x2を準備！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "瑞雲改二(六三四空/熟練)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [695, 897],
    requirements: {
      category: "modelconversion",
      use_skilled_crew: true,
      slots: [{
        slot: 1,
        equipment: "瑞雲改二(六三四空)",
        maxmodified: true
      }],
      secretary: ["伊勢改二", "日向改二"],
      scraps: [{
        name: "瑞雲",
        amount: 6
      }, {
        name: "彗星",
        amount: 3
      }, {
        name: "試製烈風 後期型",
        amount: 1
      }],
      consumptions: [{
        name: "新型航空兵装資材",
        amount: 1
      }],
      resources: [0, 2000, 0, 8000]
    }
  }, {
    game_id: 701,
    wiki_id: "G01",
    category: 7,
    type: 1,
    name: "はじめての「近代化改修」！",
    detail: "任意の艦を近代化改修(合成)して、強化せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 50,
    reward_bauxite: 50,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "simple",
      subcategory: "modernization",
      times: 1
    }
  }, {
    game_id: 702,
    wiki_id: "G02",
    category: 7,
    type: 2,
    name: "艦の「近代化改修」を実施せよ！",
    detail: "近代化改修を実施して、２回以上これを成功させよ！",
    reward_fuel: 20,
    reward_ammo: 20,
    reward_steel: 50,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 1
    }],
    prerequisite: [701],
    requirements: {
      category: "simple",
      subcategory: "modernization",
      times: 2
    }
  }, {
    game_id: 703,
    wiki_id: "G03",
    category: 7,
    type: 3,
    name: "「近代化改修」を進め、戦備を整えよ！",
    detail: "一週間の間に、近代化改修を１5回成功させよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 300,
    reward_bauxite: 100,
    reward_other: [{
      name: "高速建造材",
      amount: 1
    }, {
      name: "開発資材",
      amount: 2
    }],
    prerequisite: [702],
    requirements: {
      category: "simple",
      subcategory: "modernization",
      times: 15
    }
  }, {
    game_id: 704,
    wiki_id: "G04",
    category: 7,
    type: 1,
    name: "「大型艦建造」の準備！(その壱)",
    detail: "大型艦/新型艦建造のための準備を行う。任意の艦で近代化改修を4回成功させよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 400,
    reward_bauxite: 400,
    reward_other: [{
      name: "開発資材",
      amount: 1
    }],
    prerequisite: [109],
    requirements: {
      category: "simple",
      subcategory: "modernization",
      times: 4
    }
  }, {
    game_id: 705,
    wiki_id: "G05",
    category: 7,
    type: 1,
    name: "航空艤装の近代化改修",
    detail: "鉄鋼5,500及びボーキサイト2,500を準備して、任意の正規空母の近代化改修を<br>[航空母艦]x5隻同時使用により2回成功させよ！※任務達成後、準備した資源は消費します。",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "新型航空機設計図",
      amount: 1
    }],
    prerequisite: [703, 838],
    requirements: {
      category: "modernization",
      times: 2,
      ship: "空母",
      consumptions: [{
        ship: ["軽母", "空母"],
        amount: 5
      }],
      resources: [0, 0, 5500, 2500]
    }
  }, {
    game_id: 805,
    wiki_id: "B58",
    category: 2,
    type: 1,
    name: "旗艦「霞」北方海域を哨戒せよ！",
    detail: "旗艦「霞改二」で駆逐艦4隻を含む艦隊を北方海域に投入し、モーレイ海哨戒を実施せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "戦闘糧食",
      amount: 1
    }, {
      name: "13号対空電探改",
      category: "装備",
      amount: 1
    }],
    prerequisite: [132, 303],
    requirements: {
      category: "sortie",
      map: "3-1",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: "霞改二",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 3
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 806,
    wiki_id: "B59",
    category: 2,
    type: 1,
    name: "旗艦「霞」出撃！敵艦隊を撃滅せよ！",
    detail: "旗艦「霞改二」で駆逐艦3隻を含む艦隊で南西諸島沖ノ島沖に突入！敵主力を撃滅せよ！",
    reward_fuel: 500,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "25mm三連装機銃 集中配備",
      category: "装備",
      amount: 1
    }],
    prerequisite: [402, 805],
    requirements: {
      category: "sortie",
      map: "2-5",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "霞改二",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 2
      }, {
        ship: "艦",
        amount: 3
      }]
    }
  }, {
    game_id: 807,
    wiki_id: "B60",
    category: 2,
    type: 1,
    name: "「第三十一戦隊」出撃せよ！",
    detail: "第三十一戦隊(第一次)を鎮守府近海航路に出撃させ、同航路の安全確保に努めよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 600,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "菱餅",
      amount: 1
    }],
    prerequisite: [171, 201],
    requirements: {
      category: "sortie",
      map: "1-6",
      times: 1,
      groups: [{
        ship: "五十鈴改二",
        flagship: true
      }, {
        ship: "皐月改二"
      }, {
        ship: "卯月改"
      }, {
        ship: "艦",
        amount: 3
      }],
      result: "クリア"
    }
  }, {
    game_id: 808,
    wiki_id: "B61",
    category: 2,
    type: 1,
    name: "「第二七駆逐隊」出撃せよ！",
    detail: "「白露改」旗艦の第二七戦隊を含む艦隊をオリョール海に展開、同海域の敵艦隊を撃滅せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 500,
    reward_bauxite: 0,
    reward_other: [{
      name: "「春の一番」掛け軸",
      category: "家具"
    }],
    prerequisite: [172],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "白露改",
        flagship: true
      }, {
        ship: "時雨"
      }, {
        ship: "春雨"
      }, {
        ship: "五月雨"
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 809,
    wiki_id: "B62",
    category: 2,
    type: 1,
    name: "強襲上陸作戦用戦力を増強せよ！",
    detail: "中部海域における航空偵察「K作戦」を実施しつつ、強襲上陸作戦用戦力の強化を図れ！",
    reward_fuel: 0,
    reward_ammo: 600,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "大発動艇",
      category: "装備",
      amount: 1
    }],
    prerequisite: [243, 420],
    requirements: {
      category: "sortie",
      map: "6-3",
      boss: true,
      result: "B",
      times: 1
    }
  }, {
    game_id: 810,
    wiki_id: "B63",
    category: 2,
    type: 1,
    name: "製油所地帯を防衛せよ！",
    detail: "水雷戦隊を製油所地帯沿岸に展開！同海域に出没する敵艦隊を三回以上撃滅せよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "勲章",
      amount: 1
    }, {
      name: "戦闘糧食",
      amount: 1
    }],
    prerequisite: [216],
    requirements: {
      category: "sortie",
      map: "1-3",
      boss: true,
      result: "S",
      times: 3,
      groups: [{
        ship: "軽巡",
        amount: 1
      }, {
        ship: "駆逐"
      }],
      disallowed: "他の艦"
    }
  }, {
    game_id: 811,
    wiki_id: "B64",
    category: 2,
    type: 1,
    name: "南西諸島防衛線を強化せよ！",
    detail: "南西諸島防衛線に有力な艦隊を展開、同方面に来襲する敵艦隊を五回以上撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 400,
    reward_bauxite: 0,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }, {
      name: "戦闘糧食",
      amount: 1
    }],
    prerequisite: [634, 810],
    requirements: {
      category: "sortie",
      map: "1-4",
      boss: true,
      result: "S",
      times: 5
    }
  }, {
    game_id: 812,
    wiki_id: "B65",
    category: 2,
    type: 1,
    name: "オリョール海の制海権を確保せよ！",
    detail: "大潮を旗艦とする艦隊を東部オリョール海に反復出撃、同方面敵艦隊を完全撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "勲章",
      amount: 1
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [239, 811],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "S",
      times: 6,
      groups: [{
        ship: "大潮",
        flagship: true
      }, {
        ship: "艦",
        amount: 5
      }]
    }
  }, {
    game_id: 813,
    wiki_id: "B66",
    category: 2,
    type: 1,
    name: "旗艦「大潮」出撃せよ！",
    detail: "「大潮改二」旗艦の有力な艦隊を北方AL海域に展開、北方海域戦闘哨戒を実施せよ！",
    reward_fuel: 500,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "戦闘糧食",
      amount: 1
    }],
    prerequisite: [806, 812],
    requirements: {
      category: "sortie",
      map: "3-5",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "大潮改二",
        flagship: true
      }, {
        ship: "艦",
        amount: 5
      }]
    }
  }, {
    game_id: 814,
    wiki_id: "B68",
    category: 2,
    type: 1,
    name: "強行高速輸送部隊、出撃せよ！",
    detail: "「江風改二」「時雨改二」「川内改二」他駆逐2隻を含む艦隊で、ジャム島攻略作戦を実施せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 500,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 2
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [173],
    requirements: {
      category: "sortie",
      map: "4-1",
      boss: true,
      result: "A",
      times: 1,
      groups: [{
        ship: "川内改二",
        flagship: true
      }, {
        ship: "江風改二"
      }, {
        ship: "時雨改二"
      }, {
        ship: "駆逐",
        amount: 2
      }, {
        ship: "艦",
        amount: 1
      }]
    }
  }, {
    game_id: 815,
    wiki_id: "B69",
    category: 2,
    type: 1,
    name: "「第一航空戦隊」西へ！",
    detail: "旗艦「赤城」同僚艦「加賀」を中核とする艦隊で、深海東洋艦隊漸減作戦を貫徹せよ！",
    reward_fuel: 0,
    reward_ammo: 800,
    reward_steel: 0,
    reward_bauxite: 800,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "熟練搭乗員",
      amount: 1
    }],
    prerequisite: [636, 814],
    requirements: {
      category: "sortie",
      map: "4-5",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "赤城",
        flagship: true
      }, {
        ship: "加賀"
      }, {
        ship: "艦",
        amount: 4
      }]
    }
  }, {
    game_id: 816,
    wiki_id: "B67",
    category: 2,
    type: 1,
    name: "艦隊、三周年！",
    detail: "三周年を記念しバシー島沖及び東部オリョール海に出撃、同海域の敵艦隊を撃滅せよ！",
    reward_fuel: 1000,
    reward_ammo: 1000,
    reward_steel: 1000,
    reward_bauxite: 0,
    reward_other: [{
      name: "「三周年記念」掛け軸",
      category: "家具"
    }],
    prerequisite: [105, 206],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "2-2",
        boss: true,
        result: "S"
      }, {
        category: "sortie",
        times: 1,
        map: "2-3",
        boss: true,
        result: "S"
      }]
    }
  }, {
    game_id: 817,
    wiki_id: "B70",
    category: 2,
    type: 1,
    name: "新編艦隊、南西諸島防衛線へ急行せよ！",
    detail: "水雷戦隊を含む新編艦隊を南西諸島防衛線に展開、同方面に来襲する敵艦隊を撃破せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [174],
    requirements: {
      category: "sortie",
      map: "1-4",
      boss: true,
      result: "A",
      times: 1,
      groups: [{
        ship: "軽巡",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 4
      }, {
        ship: "艦",
        amount: 1
      }]
    }
  }, {
    game_id: 818,
    wiki_id: "B71",
    category: 2,
    type: 1,
    name: "鎮守府近海航路の安全確保を強化せよ！",
    detail: "水雷戦隊を含む新編艦隊を鎮守府近海航路に出撃させ、同航路の安全確保に努めよ！",
    reward_fuel: 0,
    reward_ammo: 900,
    reward_steel: 900,
    reward_bauxite: 900,
    reward_other: [{
      name: "開発資材",
      amount: 4
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [817],
    requirements: {
      category: "sortie",
      map: "1-6",
      times: 1,
      groups: [{
        ship: "軽巡",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 4
      }, {
        ship: "艦",
        amount: 1
      }],
      result: "クリア"
    }
  }, {
    game_id: 819,
    wiki_id: "B72",
    category: 2,
    type: 1,
    name: "「第三十一戦隊」敵潜を制圧せよ！",
    detail: "第三十一戦隊(第一次)を鎮守府近海航路に再投入！反復出撃し、敵潜を制圧せよ！",
    reward_fuel: 310,
    reward_ammo: 310,
    reward_steel: 0,
    reward_bauxite: 310,
    reward_other: [{
      name: "改修資材",
      amount: 2
    }, {
      name: "三式水中探信儀",
      category: "装備",
      amount: 1
    }],
    prerequisite: [171, 228],
    requirements: {
      category: "sortie",
      map: "1-6",
      times: 2,
      groups: [{
        ship: "五十鈴改二",
        flagship: true
      }, {
        ship: "皐月改二"
      }, {
        ship: "卯月改"
      }, {
        ship: "艦",
        amount: 3
      }],
      result: "クリア"
    }
  }, {
    game_id: 820,
    wiki_id: "B73",
    category: 2,
    type: 1,
    name: "新編「第八駆逐隊」出撃せよ！",
    detail: "新編「第八駆逐隊」を含む艦隊を鎮守府近海航路に出撃させ、同航路の安全確保に努めよ！",
    reward_fuel: 400,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "探照灯",
      category: "装備",
      amount: 1
    }, {
      name: "大発動艇",
      category: "装備",
      amount: 1
    }],
    prerequisite: [175],
    requirements: {
      category: "sortie",
      map: "1-6",
      times: 1,
      groups: [{
        ship: "朝潮改二",
        flagship: true
      }, {
        ship: "大潮"
      }, {
        ship: "満潮"
      }, {
        ship: "荒潮"
      }, {
        ship: "艦",
        amount: 2
      }],
      result: "クリア"
    }
  }, {
    game_id: 821,
    wiki_id: "B74",
    category: 2,
    type: 1,
    name: "精鋭「八駆第一小隊」対潜哨戒！",
    detail: "「第八駆逐隊第一小隊」を含む艦隊で鎮守府正面対潜哨戒を反復実施！敵潜を圧倒せよ！",
    reward_fuel: 0,
    reward_ammo: 800,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "改修資材",
      amount: 4
    }, {
      name: "四式水中聴音機",
      category: "装備",
      amount: 1
    }],
    prerequisite: [176],
    requirements: {
      category: "sortie",
      map: "1-5",
      boss: true,
      result: "S",
      times: 2,
      groups: [{
        ship: "朝潮改二丁"
      }, {
        ship: "大潮改二"
      }]
    }
  }, {
    game_id: 822,
    wiki_id: "Bq01",
    category: 2,
    type: 7,
    name: "沖ノ島海域迎撃戦",
    detail: "有力な艦隊を沖ノ島海域前面に反復投入、侵攻する敵機動部隊を迎撃、これを撃滅せよ！",
    reward_fuel: 800,
    reward_ammo: 800,
    reward_steel: 800,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 5
    }, {
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [233, 264],
    requirements: {
      category: "sortie",
      map: "2-4",
      boss: true,
      result: "S",
      times: 2
    }
  }, {
    game_id: 823,
    wiki_id: "B75",
    category: 2,
    type: 1,
    name: "水雷戦隊、南西防衛線に反復出撃せよ！",
    detail: "軽巡級旗艦と駆逐艦4隻の水雷戦隊を基幹とした艦隊を編成、<br>南西諸島防衛線に反復出撃し、同海域の制海権確保に努めよ！",
    reward_fuel: 0,
    reward_ammo: 350,
    reward_steel: 0,
    reward_bauxite: 350,
    reward_other: [{
      name: "高速修復材",
      amount: 4
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [817],
    requirements: {
      category: "sortie",
      map: "1-4",
      boss: true,
      result: "A",
      times: 2,
      groups: [{
        ship: "軽巡",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 4
      }, {
        ship: "艦",
        amount: 1
      }]
    }
  }, {
    game_id: 824,
    wiki_id: "B76",
    category: 2,
    type: 1,
    name: "製油所地帯沿岸の哨戒を実施せよ！",
    detail: "軽空母旗艦と駆逐艦3隻を基幹とした護衛艦隊を編成、<br>製油所地帯沿岸に展開し、同海域の哨戒を実施、同海域の安全を確保せよ！",
    reward_fuel: 600,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "家具箱（中）",
      amount: 1
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [209],
    requirements: {
      category: "sortie",
      map: "1-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "軽母",
        flagship: true
      }, {
        ship: "駆逐",
        amount: 3
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 825,
    wiki_id: "B77",
    category: 2,
    type: 1,
    name: "水雷戦隊、南西諸島海域を哨戒せよ！",
    detail: "水雷戦隊を基幹とした有力な艦隊で南西諸島海域バシー島沖及び東部オリョール海を哨戒、<br>同海域に遊弋する敵艦隊を捕捉、これを撃滅せよ！",
    reward_fuel: 600,
    reward_ammo: 600,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "特注家具職人",
      amount: 1
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [303],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "2-2",
        boss: true,
        result: "S",
        groups: [{
          ship: "軽巡",
          flagship: true
        }, {
          ship: "駆逐",
          amount: 4
        }, {
          ship: "艦",
          amount: 1
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "2-3",
        boss: true,
        result: "S",
        groups: [{
          ship: "軽巡",
          flagship: true
        }, {
          ship: "駆逐",
          amount: 4
        }, {
          ship: "艦",
          amount: 1
        }]
      }]
    }
  }, {
    game_id: 826,
    wiki_id: "B78",
    category: 2,
    type: 1,
    name: "「第十九駆逐隊」出撃せよ！",
    detail: "特型駆逐艦4隻による「第十九駆逐隊」を鎮守府近海に展開！<br>鎮守府正面対潜哨戒を実施し、跳梁する敵潜部隊の制圧に努めよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 3
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [177],
    requirements: {
      category: "sortie",
      map: "1-5",
      boss: true,
      result: "A",
      times: 1,
      groups: [{
        ship: "磯波"
      }, {
        ship: "浦波"
      }, {
        ship: "綾波"
      }, {
        ship: "敷波"
      }]
    }
  }, {
    game_id: 827,
    wiki_id: "B79",
    category: 2,
    type: 1,
    name: "「第十九駆逐隊」敵主力に突入せよ！",
    detail: "「第十九駆逐隊」を含む有力な艦隊を編成し、南西諸島海域沖ノ島沖に展開！<br>同方面に遊弋する敵主力を捕捉、これを撃破せよ！",
    reward_fuel: 600,
    reward_ammo: 600,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      name: "改修資材",
      amount: 4
    }, {
      name: "洋上補給",
      amount: 1
    }],
    prerequisite: [826],
    requirements: {
      category: "sortie",
      map: "2-5",
      boss: true,
      result: "A",
      times: 1,
      groups: [{
        ship: "磯波"
      }, {
        ship: "浦波"
      }, {
        ship: "綾波"
      }, {
        ship: "敷波"
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 828,
    wiki_id: "B80",
    category: 2,
    type: 1,
    name: "飛行場設営の準備を実施せよ！",
    detail: "中部海域における航空偵察「K作戦」を再度実施、さらに同方面に遊弋する敵艦隊を撃滅し、<br>中部海域における飛行場設営の準備を実施せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "設営隊",
      amount: 1
    }],
    prerequisite: [273, 809],
    requirements: {
      category: "sortie",
      map: "6-3",
      boss: true,
      result: "S",
      times: 1
    }
  }, {
    game_id: 829,
    wiki_id: "B81",
    category: 2,
    type: 1,
    name: "夜間突入！敵上陸部隊を叩け！",
    detail: "南方サブ島沖海域へ精鋭艦隊を突入！敵艦隊の邀撃を突破し、同方面の敵上陸部隊を叩け！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "設営隊",
      amount: 1
    }],
    prerequisite: [828],
    requirements: {
      category: "sortie",
      map: "5-3",
      boss: true,
      result: "A",
      times: 1
    }
  }, {
    game_id: 830,
    wiki_id: "B82",
    category: 2,
    type: 1,
    name: "夜の海を照らす「灯り」を入手せよ！",
    detail: "有力な艦隊をカムラン半島に投入、同方面に出没する敵艦隊を捕捉、これを撃滅せよ！<br>そして、夜を照らす「灯り」を入手せよ！　ある季節は夜戦以外にも使い道があるようだ！",
    reward_fuel: 100,
    reward_ammo: 100,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "戦闘糧食",
      amount: 1
    }, {
      name: "探照灯",
      category: "装備",
      amount: 1
    }],
    prerequisite: [206],
    requirements: {
      category: "sortie",
      map: "2-1",
      boss: true,
      result: "S",
      times: 1
    }
  }, {
    game_id: 833,
    wiki_id: "B139",
    category: 2,
    type: 1,
    name: "陸戦用装備の艦載運用実戦研究",
    detail: "陸戦用装備の艦載運用研究：水上機母艦または揚陸艦を含む艦隊を編成、西方海域カレー洋リランカ島沖及び中部北海域ピーコック島沖の各作戦において、敵地上戦力と交戦、これを複数回撃破せよ！",
    reward_fuel: 0,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "二式12cm迫撃砲改",
        amount: 3
      }, {
        name: "艦載型 四式20cm対地噴進砲",
        amount: 1
      }]
    }],
    prerequisite: [621, 828],
    requirements: {
      category: "sortie",
      times: 2,
      map: ["4-5", "6-4"],
      boss: true,
      result: "A",
      groups: [{
        ship: ["水上機母艦", "揚陸艦"],
        amount: [1, 99]
      }]
    }
  }, {
    game_id: 834,
    wiki_id: "B83",
    category: 2,
    type: 1,
    name: "南西諸島防衛線を増強せよ！",
    detail: "水上機母艦または航空巡洋艦を旗艦とする有力な艦隊を南西諸島防衛線に投入、<br>水上機戦力によって同防衛線を強化、同方面の敵艦隊を撃滅せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "家具箱（中）",
      amount: 1
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "sortie",
      map: "1-4",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: ["航巡", "水母"],
        flagship: true
      }]
    }
  }, {
    game_id: 835,
    wiki_id: "B84",
    category: 2,
    type: 1,
    name: "「第十六戦隊(第三次)」出撃せよ！",
    detail: "「第十六戦隊(第三次)」を沖ノ島海域前面に展開、敵主力艦隊を捕捉、これを撃破せよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 1
    }, {
      name: "艦娘座布団の床",
      category: "家具"
    }],
    prerequisite: [178],
    requirements: {
      category: "sortie",
      map: "2-4",
      boss: true,
      result: "A",
      times: 1,
      groups: [{
        ship: "鬼怒"
      }, {
        ship: "青葉"
      }, {
        ship: "北上"
      }, {
        ship: "大井"
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 836,
    wiki_id: "B85",
    category: 2,
    type: 1,
    name: "精鋭「第十六戦隊」突入せよ！",
    detail: "再編成を完了した精鋭「第十六戦隊」を南西諸島海域沖ノ島沖に展開、<br>同方面に遊弋する敵主力を捕捉、これを撃破せよ！",
    reward_fuel: 600,
    reward_ammo: 600,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "特大発動艇",
      category: "装備",
      amount: 1
    }],
    prerequisite: [179],
    requirements: {
      category: "sortie",
      map: "2-5",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "鬼怒改二",
        flagship: true
      }, {
        ship: ["北上改二", "大井改二", "球磨改", "青葉改", "浦波改", "敷波改"],
        select: 5
      }]
    }
  }, {
    game_id: 837,
    wiki_id: "B86",
    category: 2,
    type: 1,
    name: "輸送作戦を成功させ、帰還せよ！",
    detail: "「鬼怒改二」を旗艦、僚艦に「浦波改」他駆逐艦3隻の計5隻の艦隊で<br>バシー島沖における柳輸送作戦を実施、同輸送作戦を完全成功させ、帰還せよ！",
    reward_fuel: 1000,
    reward_ammo: 0,
    reward_steel: 1000,
    reward_bauxite: 3000,
    reward_other: [{
      name: "改修資材",
      amount: 5
    }, {
      name: "洋上補給",
      amount: 1
    }],
    prerequisite: [827, 836],
    requirements: {
      category: "sortie",
      map: "2-2",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "鬼怒改二",
        flagship: true
      }, {
        ship: "浦波改"
      }, {
        ship: "駆逐",
        amount: 3
      }, {
        ship: "艦",
        amount: 1
      }]
    }
  }, {
    game_id: 838,
    wiki_id: "B87",
    category: 2,
    type: 1,
    name: "重巡戦隊、抜錨せよ！",
    detail: "重巡4隻を基幹戦力とした重巡旗艦の艦隊を南西諸島海域東部オリョール海に展開し、<br>同海域の敵艦隊を撃滅、制海権を確保せよ！",
    reward_fuel: 400,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 1
    }, {
      name: "手編みとフローリング",
      category: "家具"
    }],
    prerequisite: [116],
    requirements: {
      category: "sortie",
      map: "2-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: ["重巡", "航巡"],
        flagship: true
      }, {
        ship: ["重巡", "航巡"],
        amount: 3
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 839,
    wiki_id: "B88",
    category: 2,
    type: 1,
    name: "戦艦戦隊、出撃せよ！",
    detail: "戦艦2隻を中核戦力とする戦艦旗艦の艦隊を北方海域アルフォンシーノ方面に進出させ、<br>同海域の敵艦隊を撃滅、北方海域の制海権確保に努めよ！",
    reward_fuel: 0,
    reward_ammo: 800,
    reward_steel: 0,
    reward_bauxite: 200,
    reward_other: [{
      name: "改修資材",
      amount: 2
    }, {
      choices: [{
        name: "二式水戦改",
        amount: 1
      }, {
        name: "PBY-5A Catalina",
        amount: 1
      }]
    }],
    prerequisite: [838],
    requirements: {
      category: "sortie",
      map: "3-3",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: ["戦艦", "航戦"],
        flagship: true
      }, {
        ship: ["戦艦", "航戦"],
        amount: 1
      }, {
        ship: "艦",
        amount: 4
      }]
    }
  }, {
    game_id: 842,
    wiki_id: "B89",
    category: 2,
    type: 1,
    name: "主力戦艦戦隊、抜錨せよ！",
    detail: "戦艦または航空戦艦2隻以上からなる強力な戦艦戦隊を中核とした艦隊を沖ノ島海域前面に展開、<br>侵攻する敵艦隊を捕捉、これを撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 800,
    reward_steel: 400,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 1
    }, {
      choices: [{
        name: "改良型艦本式タービン",
        amount: 1
      }, {
        name: "強化型艦本式缶",
        amount: 1
      }]
    }],
    prerequisite: [233],
    requirements: {
      category: "sortie",
      map: "2-4",
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: ["低速戦艦", "航戦"],
        amount: 2
      }, {
        ship: "艦",
        amount: 4
      }]
    }
  }, {
    game_id: 844,
    wiki_id: "B90",
    category: 2,
    type: 1,
    name: "精鋭「第八駆逐隊」突入せよ！",
    detail: "「荒潮改二」を旗艦とし、僚艦に「第八駆逐隊」から1隻を配備した精鋭第1艦隊で<br>サーモン海域北方に突入、同方面に接近する有力な敵艦隊を捕捉、同方面の敵戦力の漸減に努めよ！",
    reward_fuel: 800,
    reward_ammo: 800,
    reward_steel: 0,
    reward_bauxite: 800,
    reward_other: [{
      name: "改修資材",
      amount: 4
    }, {
      name: "補強増設",
      amount: 1
    }],
    prerequisite: [820, 829],
    requirements: {
      category: "sortie",
      map: "5-5",
      boss: true,
      result: "A",
      times: 2,
      groups: [{
        ship: "荒潮改二",
        flagship: true
      }, {
        ship: ["朝潮", "大潮", "満潮"],
        select: 1
      }]
    }
  }, {
    game_id: 845,
    wiki_id: "Bq12",
    category: 2,
    type: 7,
    name: "発令！「西方海域作戦」",
    detail: "大規模出撃任務：「西方海域作戦」が発令された！有力な艦隊を編成し、西方海域全海域に出撃、同海域に展開する敵戦力を完全撃破、これを殲滅せよ！艦隊、西へ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 2400,
    reward_bauxite: 0,
    reward_other: [{
      name: "戦果330"
    }, {
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "大発動艇",
        amount: 2
      }, {
        name: "新型噴進装備開発資材",
        amount: 1
      }]
    }],
    prerequisite: [247, 284],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["4-1", "4-2", "4-3", "4-4", "4-5"],
      boss: true,
      result: "S"
    }
  }, {
    game_id: 846,
    wiki_id: "B91",
    category: 2,
    type: 1,
    name: "潜水艦隊、中部海域の哨戒を実施せよ！",
    detail: "潜水艦を旗艦とし、4隻以上の有力な潜水艦を配備した第一艦隊、精鋭潜水艦隊で<br>中部海域哨戒線に進出、回航中の敵空母を捕捉、これを襲撃せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 3
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [218, 815],
    requirements: {
      category: "sortie",
      map: "6-1",
      boss: true,
      result: "B",
      times: 1,
      groups: [{
        ship: ["潜水艦", "潜水空母"],
        flagship: true
      }, {
        ship: ["潜水艦", "潜水空母"],
        amount: 3
      }]
    }
  }, {
    game_id: 848,
    wiki_id: "B92",
    category: 2,
    type: 1,
    name: "重装甲巡洋艦、鉄底海峡に突入せよ！",
    detail: "第一艦隊旗艦に「Zara due」を配備、同艦隊で南方サブ島沖海域へ突入！同方面の敵艦隊群を突破し、鉄底海峡に展開する敵戦力を撃破せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 700,
    reward_bauxite: 0,
    reward_other: [{
      name: "艦本新設計 増設バルジ(中型艦)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [846],
    requirements: {
      category: "sortie",
      map: "5-3",
      boss: true,
      result: "A",
      times: 1,
      groups: [{
        ship: "Zara due",
        flagship: true
      }]
    }
  }, {
    game_id: 849,
    wiki_id: "B93",
    category: 2,
    type: 1,
    name: "南西諸島方面の敵艦隊を撃破せよ！",
    detail: "軽巡を旗艦とした艦隊を編成し、南西諸島防衛線、バシー島沖及び<br>東部オリョール海に展開、同海域に遊弋する敵艦隊を撃破せよ！",
    reward_fuel: 300,
    reward_ammo: 0,
    reward_steel: 300,
    reward_bauxite: 300,
    reward_other: [{
      name: "給糧艦「間宮」",
      amount: 1
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "1-4",
        boss: true,
        result: "A",
        groups: [{
          ship: "軽巡",
          flagship: true
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "2-2",
        boss: true,
        result: "A",
        groups: [{
          ship: "軽巡",
          flagship: true
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "2-3",
        boss: true,
        result: "A",
        groups: [{
          ship: "軽巡",
          flagship: true
        }]
      }]
    }
  }, {
    game_id: 850,
    wiki_id: "B94",
    category: 2,
    type: 1,
    name: "洋上航空戦力を拡充せよ！",
    detail: "航空母艦、または水上機母艦を旗艦とした有力な艦隊を編成、北方AL海域、<br>西方海域カスガダマ沖 、中部海域MS諸島沖に展開し、各海域の敵艦隊を撃滅せよ！",
    reward_fuel: 500,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 1000,
    reward_other: [{
      name: "開発資材",
      amount: 5
    }, {
      name: "熟練搭乗員",
      amount: 1
    }],
    prerequisite: [846, 849],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "3-5",
        boss: true,
        result: "S",
        groups: [{
          ship: ["空母", "水母"],
          flagship: true
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "4-4",
        boss: true,
        result: "S",
        groups: [{
          ship: ["空母", "水母"],
          flagship: true
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "6-2",
        boss: true,
        result: "S",
        groups: [{
          ship: ["空母", "水母"],
          flagship: true
        }]
      }]
    }
  }, {
    game_id: 851,
    wiki_id: "B95",
    category: 2,
    type: 1,
    name: "改装航空巡洋艦、出撃！",
    detail: "改装航空巡洋艦「鈴谷改二」を旗艦とした精強な艦隊を編成、同艦隊を南方海域に展開、<br>南方海域前面、及びサブ島沖海域に遊弋する敵艦隊群を捕捉、これを撃破せよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 300,
    reward_bauxite: 700,
    reward_other: [{
      name: "改修資材",
      amount: 4
    }, {
      choices: [{
        name: "強風改",
        amount: 1
      }, {
        name: "艦本新設計 増設バルジ(中型艦)",
        amount: 1
      }]
    }],
    prerequisite: [287, 838],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "5-1",
        boss: true,
        result: "A",
        groups: [{
          ship: "鈴谷改二",
          flagship: true
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "5-3",
        boss: true,
        result: "A",
        groups: [{
          ship: "鈴谷改二",
          flagship: true
        }]
      }]
    }
  }, {
    game_id: 852,
    wiki_id: "B96",
    category: 2,
    type: 1,
    name: "改装攻撃型軽空母、前線展開せよ！",
    detail: "改装航空母艦「鈴谷航改二」を旗艦とした精強な機動部隊を編成、同艦隊を中部海域に進出。<br>MS諸島沖、KW環礁沖海域に展開し、同海域の敵機動部隊を捕捉、これを撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 1000,
    reward_steel: 0,
    reward_bauxite: 1000,
    reward_other: [{
      name: "零式艦戦63型(爆戦)",
      category: "装備",
      amount: 1
    }, {
      name: "8cm高角砲改+増設機銃",
      category: "装備",
      amount: 1
    }],
    prerequisite: [851],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "6-2",
        boss: true,
        result: "S",
        groups: [{
          ship: "鈴谷航改二",
          flagship: true
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "6-5",
        boss: true,
        result: "S",
        groups: [{
          ship: "鈴谷航改二",
          flagship: true
        }]
      }]
    }
  }, {
    game_id: 853,
    wiki_id: "B97",
    category: 2,
    type: 1,
    name: "鎮守府海域警戒を厳とせよ！",
    detail: "巡洋艦クラスを旗艦に配備、2隻以上の駆逐艦を擁する警戒艦隊を編成せよ。同警戒艦隊を以て、<br>鎮守府海域(南西諸島/製油所地帯沿岸/南西諸島防衛線/鎮守府近海)の警戒任務にあたれ！",
    reward_fuel: 400,
    reward_ammo: 400,
    reward_steel: 400,
    reward_bauxite: 0,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 2
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [839],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["1-2", "1-3", "1-4", "1-5"],
      boss: true,
      result: "A",
      groups: [{
        ship: ["軽巡洋艦", "練習巡洋艦", "重雷装巡洋艦", "航空巡洋艦", "重巡洋艦"],
        flagship: true
      }, {
        ship: "駆逐",
        amount: 2
      }, {
        ship: "艦"
      }]
    }
  }, {
    game_id: 854,
    wiki_id: "Bq02",
    category: 2,
    type: 7,
    name: "戦果拡張任務！「Z作戦」前段作戦",
    detail: "戦果拡張作戦：我が第一艦隊に精鋭艦艇を集中配備、同精鋭艦隊を以て、南西諸島の沖ノ島海域、<br>中部海域哨戒線、グアノ環礁沖の敵艦隊を撃破、中部北海域ピーコック島の敵戦力を破砕殲滅せよ！",
    reward_fuel: 0,
    reward_ammo: 2000,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 4
    }, {
      name: "給糧艦「伊良湖」",
      amount: 3
    }, {
      name: "戦果350"
    }],
    prerequisite: [220, 846],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "2-4",
        boss: true,
        result: "A"
      }, {
        category: "sortie",
        times: 1,
        map: "6-1",
        boss: true,
        result: "A"
      }, {
        category: "sortie",
        times: 1,
        map: "6-3",
        boss: true,
        result: "A"
      }, {
        category: "sortie",
        times: 1,
        map: "6-4",
        boss: true,
        result: "S"
      }]
    }
  }, {
    game_id: 855,
    wiki_id: "B98",
    category: 2,
    type: 1,
    name: "海上護衛体制の強化に努めよ！",
    detail: "海上護衛作戦：駆逐艦または海防艦3隻以上を含む護衛艦隊を編成し、鎮守府海域の製油所地帯沿岸、<br>南西諸島防衛線、鎮守府近海、鎮守府近海航路にそれぞれ展開、各海域における作戦を成功させよ！",
    reward_fuel: 400,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "開発資材",
      amount: 4
    }, {
      name: "特注家具職人",
      amount: 1
    }],
    prerequisite: [216],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "1-3",
        boss: true,
        result: "S",
        groups: [{
          ship: ["駆逐", "海防艦"],
          amount: 3
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "1-4",
        boss: true,
        result: "S",
        groups: [{
          ship: ["駆逐", "海防艦"],
          amount: 3
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "1-5",
        boss: true,
        result: "S",
        groups: [{
          ship: ["駆逐", "海防艦"],
          amount: 3
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "1-6",
        boss: true,
        groups: [{
          ship: ["駆逐", "海防艦"],
          amount: 3
        }],
        result: "クリア"
      }]
    }
  }, {
    game_id: 856,
    wiki_id: "B99",
    category: 2,
    type: 1,
    name: "新編「第一戦隊」、抜錨せよ！",
    detail: "新編「第一戦隊」出撃任務：戦艦「長門改二」を旗艦、二番艦に「陸奥改」を配備した第一艦隊で出撃！<br>カレー洋リランカ島沖、サーモン海域北方に展開し、同海域の敵艦隊主力を捕捉、これを撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 880,
    reward_steel: 880,
    reward_bauxite: 0,
    reward_other: [{
      name: "改修資材",
      amount: 4
    }, {
      name: "艦本新設計 増設バルジ(大型艦)",
      category: "装備",
      amount: 1
    }],
    prerequisite: [180, 855],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["4-5", "5-5"],
      boss: true,
      result: "S",
      groups: [{
        ship: "長門改二",
        flagship: true
      }, {
        ship: "陸奥改",
        place: 2
      }]
    }
  }, {
    game_id: 857,
    wiki_id: "B100",
    category: 2,
    type: 1,
    name: "増強海上護衛総隊、抜錨せよ！",
    detail: "出撃任務：軽巡1隻以上、駆逐艦または海防艦2隻以上、さらに航空巡洋艦または軽空母で増強した<br>第一護衛艦隊を第一艦隊に編成、南西諸島海域の各海域に展開、敵艦隊を撃破、各作戦を成功させよ！",
    reward_fuel: 700,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }]
    }, {
      name: "高速修復材",
      amount: 3
    }],
    prerequisite: [228, 855],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "2-2",
        boss: true,
        result: "A",
        groups: [{
          ship: "軽巡",
          amount: 1
        }, {
          ship: ["駆逐", "海防艦"],
          amount: 2
        }, {
          ship: ["航巡", "軽母"],
          amount: 1
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "2-3",
        boss: true,
        result: "A",
        groups: [{
          ship: "軽巡",
          amount: 1
        }, {
          ship: ["駆逐", "海防艦"],
          amount: 2
        }, {
          ship: ["航巡", "軽母"],
          amount: 1
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "2-4",
        boss: true,
        result: "A",
        groups: [{
          ship: "軽巡",
          amount: 1
        }, {
          ship: ["駆逐", "海防艦"],
          amount: 2
        }, {
          ship: ["航巡", "軽母"],
          amount: 1
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "2-5",
        boss: true,
        result: "A",
        groups: [{
          ship: "軽巡",
          amount: 1
        }, {
          ship: ["駆逐", "海防艦"],
          amount: 2
        }, {
          ship: ["航巡", "軽母"],
          amount: 1
        }]
      }]
    }
  }, {
    game_id: 858,
    wiki_id: "B101",
    category: 2,
    type: 1,
    name: "新編「第七戦隊」、出撃せよ！",
    detail: "出撃任務：新編「第七戦隊」を出撃！　カレー洋リランカ島沖「深海東洋艦隊漸減作戦」、<br>MS諸島沖「MS諸島防衛戦」において、敵艦隊主力を捕捉、これを撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 1000,
    reward_bauxite: 500,
    reward_other: [{
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "零式艦戦63型(爆戦)",
        amount: 1
      }]
    }, {
      name: "改修資材",
      amount: 4
    }],
    prerequisite: [181, 303],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: ["4-5", "6-2"],
        boss: true,
        result: "S",
        groups: [{
          ship: "熊野改二",
          flagship: true
        }, {
          ship: "鈴谷改二",
          place: 2
        }, {
          ship: "最上改"
        }, {
          ship: "三隈改"
        }, {
          ship: "艦",
          amount: 2
        }]
      }]
    }
  }, {
    game_id: 859,
    wiki_id: "B102",
    category: 2,
    type: 1,
    name: "精鋭「第四航空戦隊」、抜錨せよ！",
    detail: "精鋭「第四航空戦隊」出撃任務：精鋭航空戦艦を主戦力に再編された「第四航空戦隊」、抜錨せよ！<br>沖ノ島沖戦闘哨戒及び北方AL海域戦闘哨戒を実施、同方面の敵艦隊主力を捕捉、これを撃破せよ！",
    reward_fuel: 500,
    reward_ammo: 0,
    reward_steel: 500,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "熟練搭乗員",
        amount: 1
      }]
    }, {
      name: "改修資材",
      amount: 4
    }],
    prerequisite: [182],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["2-5", "3-5"],
      boss: true,
      result: "A",
      groups: [{
        ship: ["伊勢改", "日向改"],
        flagship: true,
        lv: [50, 999]
      }, {
        ship: ["伊勢改", "日向改"],
        place: 2,
        lv: [50, 999]
      }, {
        ship: "軽巡",
        amount: 1
      }, {
        ship: "駆逐",
        amount: 2
      }]
    }
  }, {
    game_id: 860,
    wiki_id: "B103",
    category: 2,
    type: 1,
    name: "旗艦「由良」、抜錨！",
    detail: "出撃任務：旗艦に「由良改二」、随伴艦に二駆「村雨」「夕立」「春雨」「五月雨」及び「秋月」から<br>二隻以上を配備した第一艦隊を展開、東部オリョール海及び南方海域前面の敵戦力を撃滅せよ！",
    reward_fuel: 400,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      choices: [{
        name: "大発動艇",
        amount: 1
      }, {
        name: "補強増設",
        amount: 1
      }]
    }, {
      name: "熟練搭乗員",
      amount: 1
    }],
    prerequisite: [183],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "2-3",
        boss: true,
        result: "S",
        groups: [{
          ship: "由良改二",
          flagship: true
        }, {
          ship: ["村雨", "夕立", "春雨", "五月雨", "秋月"],
          select: 2
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "5-1",
        boss: true,
        result: "S",
        groups: [{
          ship: "由良改二",
          flagship: true
        }, {
          ship: ["村雨", "夕立", "春雨", "五月雨", "秋月"],
          select: 2
        }]
      }]
    }
  }, {
    game_id: 861,
    wiki_id: "Bq03",
    category: 2,
    type: 7,
    name: "強行輸送艦隊、抜錨！",
    detail: "航路護衛任務：航空戦艦(または補給艦でも可)2隻を中核とした艦隊で、鎮守府近海航路における<br>輸送船団護衛作戦を実施。同輸送護衛作戦を2回成功させよ！",
    reward_fuel: 1000,
    reward_ammo: 400,
    reward_steel: 400,
    reward_bauxite: 0,
    reward_other: [{
      name: "高速修復材",
      amount: 4
    }, {
      name: "洋上補給",
      amount: 1
    }],
    prerequisite: [217],
    requirements: {
      category: "sortie",
      times: 2,
      map: "1-6",
      groups: [{
        ship: ["航空戦艦", "補給艦"],
        amount: 2
      }],
      result: "クリア"
    }
  }, {
    game_id: 862,
    wiki_id: "Bq04",
    category: 2,
    type: 7,
    name: "前線の航空偵察を実施せよ！",
    detail: "偵察任務：水上機母艦1隻と軽巡2隻を中核とした偵察艦隊を、中部海域グアノ環礁沖海域に展開、<br>航空偵察作戦「K作戦」を反復実施せよ！さらに同方面の敵艦隊を捕捉、敵戦力の撃破に努めよ！",
    reward_fuel: 0,
    reward_ammo: 800,
    reward_steel: 0,
    reward_bauxite: 1000,
    reward_other: [{
      name: "開発資材",
      amount: 8
    }, {
      name: "改修資材",
      amount: 4
    }],
    prerequisite: [846, 861],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 2,
        map: "6-3",
        boss: true,
        result: "A",
        groups: [{
          ship: "水上機母艦",
          amount: 1
        }, {
          ship: "軽巡洋艦",
          amount: 2
        }]
      }]
    }
  }, {
    game_id: 863,
    wiki_id: "B104",
    category: 2,
    type: 1,
    name: "精鋭「第二二駆逐隊」出撃せよ！",
    detail: "出撃任務：再編した精鋭「第二二駆逐隊」を含む精強な水雷戦隊で北方海域キス島沖に出撃、<br>キス島撤退作戦を完全成功させよ！",
    reward_fuel: 0,
    reward_ammo: 700,
    reward_steel: 0,
    reward_bauxite: 100,
    reward_other: [{
      name: "給糧艦「伊良湖」",
      amount: 2
    }, {
      choices: [{
        name: "大発動艇",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "補強増設",
        amount: 1
      }]
    }],
    prerequisite: [184, 303],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "3-2",
        boss: true,
        result: "S",
        groups: [{
          ship: "文月改二"
        }, {
          ship: "皐月改二"
        }, {
          ship: "水無月改"
        }, {
          ship: "長月改"
        }]
      }]
    }
  }, {
    game_id: 864,
    wiki_id: "B105",
    category: 2,
    type: 1,
    name: "精強大型航空母艦、抜錨！",
    detail: "出撃任務：「Saratoga Mk.II」または同「Mod.2」を旗艦とした「任務部隊」で、南方海域サーモン海域<br>北方及び中部海域MS諸島沖に展開、同海域敵戦力を捕捉撃滅、「MS諸島防衛戦」を成功させよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 700,
    reward_bauxite: 700,
    reward_other: [{
      choices: [{
        name: "F6F-3",
        amount: 1
      }, {
        name: "熟練搭乗員",
        amount: 1
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }]
    }, {
      choices: [{
        name: "TBF",
        amount: 1
      }, {
        name: "夜間作戦航空要員",
        amount: 1
      }]
    }],
    prerequisite: [185, 216],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["5-5", "6-2"],
      boss: true,
      result: "S",
      groups: [{
        ship: ["Saratoga Mk.II", "Saratoga Mk.II Mod.2"],
        flagship: true
      }, {
        ship: "軽巡洋艦",
        amount: 1
      }, {
        ship: "駆逐艦",
        amount: 2
      }]
    }
  }, {
    game_id: 865,
    wiki_id: "B106",
    category: 2,
    type: 1,
    name: "夜間作戦空母、前線に出撃せよ！",
    detail: "出撃任務：「Saratoga Mk.II」を旗艦とした第一艦隊を KW環礁沖海域に展開、敵機動部隊を迎撃！<br>「空母機動部隊迎撃戦」を見事成功させよ！　夜戦作戦空母、抜錨！　前線に出撃せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 1000,
    reward_other: [{
      choices: [{
        name: "TBF",
        amount: 1
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }, {
        name: "夜間作戦航空要員+熟練甲板員",
        amount: 1
      }]
    }, {
      choices: [{
        name: "補強増設",
        amount: 1
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }, {
        name: "熟練搭乗員",
        amount: 1
      }]
    }],
    prerequisite: [846, 864],
    requirements: {
      category: "sortie",
      times: 1,
      map: "6-5",
      boss: true,
      result: "S",
      groups: [{
        ship: "Saratoga Mk.II",
        flagship: true
      }]
    }
  }, {
    game_id: 869,
    wiki_id: "B107",
    category: 2,
    type: 1,
    name: "補給線の安全を確保せよ！",
    detail: "軽巡クラスの艦隊旗艦と2隻以上の駆逐艦または海防艦を中核とした警戒艦隊を編成、同艦隊で<br>鎮守府海域(製油所地帯沿岸/南西諸島防衛線/鎮守府近海)の警戒と補給線安全確保にあたれ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "洋上補給",
      amount: 1
    }, {
      name: "給糧艦「伊良湖」",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["1-3", "1-4", "1-5"],
      boss: true,
      result: "A",
      groups: [{
        ship: "軽巡",
        flagship: true
      }, {
        ship: ["駆逐", "海防艦"],
        amount: 2
      }]
    }
  }, {
    game_id: 870,
    wiki_id: "B108",
    category: 2,
    type: 1,
    name: "「第八駆逐隊」、南西へ！",
    detail: "第八駆逐隊任務：「第八駆逐隊」を含む艦隊で、鎮守府海域南西諸島沖、及び南西諸島海域バシー島沖に<br>展開！同海域に跳梁する敵艦隊戦力を捕捉、これを撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 250,
    reward_steel: 250,
    reward_bauxite: 250,
    reward_other: [{
      name: "開発資材",
      amount: 3
    }, {
      name: "給糧艦「間宮」",
      amount: 1
    }],
    prerequisite: [839],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "1-2",
        boss: true,
        result: "S",
        groups: [{
          ship: "朝潮"
        }, {
          ship: "満潮"
        }, {
          ship: "大潮"
        }, {
          ship: "荒潮"
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "2-2",
        boss: true,
        result: "S",
        groups: [{
          ship: "朝潮"
        }, {
          ship: "満潮"
        }, {
          ship: "大潮"
        }, {
          ship: "荒潮"
        }]
      }]
    }
  }, {
    game_id: 871,
    wiki_id: "B109",
    category: 2,
    type: 1,
    name: "最精鋭「第八駆逐隊」、全力出撃！",
    detail: "第八駆逐隊任務：最精鋭「第八駆逐隊」を中核戦力とした艦隊を編成、北方海域キス島沖、及び<br>南方海域サーモン海域に突入！同海域の敵艦隊を撃滅、第八駆逐隊による完全勝利を刻め！",
    reward_fuel: 800,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "12.7cm連装砲C型改二",
        amount: 1
      }, {
        name: "大発動艇",
        amount: 1
      }, {
        name: "22号対水上電探",
        amount: 2
      }]
    }, {
      name: "改修資材",
      amount: 4
    }],
    prerequisite: [186, 429],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: "3-2",
        boss: true,
        result: "S",
        groups: [{
          ship: ["朝潮改二", "朝潮改二丁"]
        }, {
          ship: "満潮改二"
        }, {
          ship: "大潮改二"
        }, {
          ship: "荒潮改二"
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "5-4",
        boss: true,
        result: "S",
        groups: [{
          ship: ["朝潮改二", "朝潮改二丁"]
        }, {
          ship: "満潮改二"
        }, {
          ship: "大潮改二"
        }, {
          ship: "荒潮改二"
        }]
      }]
    }
  }, {
    game_id: 872,
    wiki_id: "Bq10",
    category: 2,
    type: 7,
    name: "戦果拡張任務！「Z作戦」後段作戦",
    detail: "戦果拡張作戦：我が第一艦隊に精鋭艦艇を集中配備、同精鋭艦隊を以て、南西海域タウイタウイ泊地沖、南方海域サーモン海域北方、中部海域MS諸島沖及びKW環礁沖海域の敵艦隊を捕捉、これを撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 2000,
    reward_bauxite: 2000,
    reward_other: [{
      choices: [{
        name: "改修資材",
        amount: 4
      }, {
        name: "給糧艦「伊良湖」",
        amount: 3
      }, {
        name: "洋上補給",
        amount: 4
      }]
    }, {
      name: "戦果400"
    }],
    prerequisite: [854],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["7-2-P2", "5-5", "6-2", "6-5"],
      boss: true,
      result: "S"
    }
  }, {
    game_id: 873,
    wiki_id: "Bq05",
    category: 2,
    type: 7,
    name: "北方海域警備を実施せよ！",
    detail: "北方海域警備任務：北方海域の警備を実施する。軽巡を1隻以上含む艦隊で、北方海域モーレイ海、<br>キス島沖、アルフォンシーノ方面に艦隊を展開、北方海域方面の警備と制海権確保に努めよ！",
    reward_fuel: 500,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "特注家具職人",
        amount: 1
      }, {
        name: "12.7cm連装砲C型改二★+3",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }, {
      name: "戦闘糧食",
      amount: 1
    }],
    prerequisite: [],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["3-1", "3-2", "3-3"],
      boss: true,
      result: "A",
      groups: [{
        ship: "軽巡洋艦",
        amount: 1
      }, {
        ship: "艦",
        amount: 5
      }]
    }
  }, {
    game_id: 874,
    wiki_id: "B110",
    category: 2,
    type: 1,
    name: "北方海域戦闘哨戒を実施せよ！",
    detail: "北方海域戦闘哨戒任務：北方AL海域に軽空母と水上機母艦及び軽巡を基幹戦力とした精鋭艦隊を投入。<br>北方戦闘哨戒を反復実施、同方面の敵増援部隊主力を捕捉、これを撃滅し、北方海域戦線を防衛せよ！",
    reward_fuel: 0,
    reward_ammo: 1000,
    reward_steel: 0,
    reward_bauxite: 700,
    reward_other: [{
      choices: [{
        name: "紫電改二",
        amount: 2
      }, {
        name: "改修資材",
        amount: 4
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }]
    }, {
      name: "プレゼント箱",
      amount: 1
    }],
    prerequisite: [873],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 2,
        map: "3-5",
        boss: true,
        result: "S",
        groups: [{
          ship: "軽空母",
          amount: 1
        }, {
          ship: "水上機母艦",
          amount: 1
        }, {
          ship: "軽巡",
          amount: 1
        }]
      }]
    }
  }, {
    game_id: 875,
    wiki_id: "Bq06",
    category: 2,
    type: 7,
    name: "精鋭「三一駆」、鉄底海域に突入せよ！",
    detail: "強行東京急行任務：精鋭「三一駆」第一小隊を護衛戦力とした突入艦隊を編成、南方サーモン海域に投入。<br>鉄底海峡に突入し、同海域に展開する敵艦艇を実力で排除、強行鼠輸送作戦を反復完遂せよ！",
    reward_fuel: 310,
    reward_ammo: 310,
    reward_steel: 0,
    reward_bauxite: 310,
    reward_other: [{
      choices: [{
        name: "13号対空電探",
        amount: 2
      }, {
        name: "22号対水上電探",
        amount: 2
      }, {
        name: "戦闘詳報",
        amount: 1
      }]
    }, {
      choices: [{
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "プレゼント箱",
        amount: 1
      }]
    }],
    prerequisite: [188, 873],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 2,
        map: "5-4",
        boss: true,
        result: "S",
        groups: [{
          ship: "長波改二"
        }, {
          ship: ["高波改", "沖波改", "朝霜改"],
          select: 1
        }]
      }]
    }
  }, {
    game_id: 876,
    wiki_id: "B111",
    category: 2,
    type: 1,
    name: "松輸送作戦、開始せよ！",
    detail: "防衛ラインの強化のため、艦隊旗艦「龍田改二」または「龍田改」、3隻以上の駆逐艦または海防艦を<br>含む輸送護衛艦隊を編成、南西諸島防衛線及び鎮守府近海航路における作戦を複数回成功させよ！",
    reward_fuel: 200,
    reward_ammo: 200,
    reward_steel: 200,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }]
    }, {
      choices: [{
        name: "戦闘詳報",
        amount: 1
      }, {
        name: "特注家具職人",
        amount: 1
      }, {
        name: "大発動艇",
        amount: 1
      }]
    }],
    prerequisite: [255, 673],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        map: "1-4",
        times: 2,
        boss: true,
        result: "A",
        groups: [{
          ship: ["龍田改", "龍田改二"],
          flagship: true
        }, {
          ship: ["駆逐艦", "海防艦"],
          amount: 3
        }, {
          ship: "艦",
          amount: 2
        }]
      }, {
        category: "sortie",
        map: "1-6",
        times: 2,
        groups: [{
          ship: ["龍田改", "龍田改二"],
          flagship: true
        }, {
          ship: ["駆逐艦", "海防艦"],
          amount: 3
        }, {
          ship: "艦",
          amount: 2
        }],
        result: "クリア"
      }]
    }
  }, {
    game_id: 877,
    wiki_id: "B112",
    category: 2,
    type: 1,
    name: "精鋭「四水戦」、南方海域に展開せよ！",
    detail: "「村雨改二」旗艦含む精鋭四水戦(4Sd)より4隻(他主力艦2隻)計6隻の精鋭艦隊を南方海域に展開。<br>南方海域前面、サブ島沖海域、サーモン海域に突入、同南方海域方面の敵艦隊を撃破せよ！",
    reward_fuel: 400,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      choices: [{
        name: "12.7cm連装砲C型改二",
        amount: 1
      }, {
        name: "22号対水上電探",
        amount: 2
      }, {
        name: "12.7cm連装砲B型改二",
        amount: 2
      }]
    }, {
      choices: [{
        name: "洋上補給",
        amount: 2
      }, {
        name: "ドラム缶(輸送用)",
        amount: 3
      }, {
        name: "改修資材",
        amount: 4
      }]
    }],
    prerequisite: [189],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        map: ["5-1", "5-3", "5-4"],
        times: 1,
        boss: true,
        result: "A",
        groups: [{
          ship: "村雨改二",
          flagship: true
        }, {
          ship: ["由良改二", "夕立改二", "春雨改", "五月雨改", "秋月改"],
          select: 3
        }, {
          ship: "艦",
          amount: 2
        }]
      }]
    }
  }, {
    game_id: 878,
    wiki_id: "B113",
    category: 2,
    type: 1,
    name: "松輸送作戦、継続実施せよ！",
    detail: "「艦隊旗艦に軽巡級または駆逐艦、さらに3隻以上の駆逐艦または海防艦を含む輸送護衛艦隊を編成、<br>防衛ラインの強化のため、南西諸島防衛線及び鎮守府近海航路における作戦を継続的に成功させよ！",
    reward_fuel: 300,
    reward_ammo: 300,
    reward_steel: 0,
    reward_bauxite: 300,
    reward_other: [{
      choices: [{
        name: "大発動艇",
        amount: 1
      }, {
        name: "改修資材",
        amount: 3
      }]
    }, {
      choices: [{
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "12cm30連装噴進砲",
        amount: 2
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }],
    prerequisite: [876],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        map: "1-4",
        times: 3,
        boss: true,
        result: "S",
        groups: [{
          ship: ["軽巡", "駆逐"],
          flagship: true
        }, {
          ship: ["駆逐", "海防艦"],
          amount: [3, 99]
        }]
      }, {
        category: "sortie",
        map: "1-6",
        times: 3,
        groups: [{
          ship: ["軽巡", "駆逐"],
          flagship: true
        }, {
          ship: ["駆逐", "海防艦"],
          amount: [3, 99]
        }],
        result: "クリア"
      }]
    }
  }, {
    game_id: 879,
    wiki_id: "B114",
    category: 2,
    type: 1,
    name: "新編「四航戦」、全力出撃！",
    detail: "「航空戦艦「伊勢改」「日向改」及び軽巡「大淀改」と1隻以上の駆逐艦を含む新編第四航空戦隊を編成、<br>鎮守府近海航路、沖ノ島沖及び北方AL海域戦闘哨戒、カレー洋リランカ島沖の作戦に投入せよ！",
    reward_fuel: 400,
    reward_ammo: 400,
    reward_steel: 400,
    reward_bauxite: 400,
    reward_other: [{
      name: "12cm30連装噴進砲改二",
      amount: 1
    }, {
      choices: [{
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "戦闘詳報",
        amount: 1
      }]
    }],
    prerequisite: [165, 247],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        map: "1-6",
        times: 1,
        groups: [{
          ship: "伊勢改"
        }, {
          ship: "日向改"
        }, {
          ship: "大淀改"
        }, {
          ship: "駆逐",
          amount: [1, 99]
        }],
        result: "クリア"
      }, {
        category: "sortie",
        map: ["2-5", "3-5", "4-5"],
        times: 1,
        boss: true,
        result: "A",
        groups: [{
          ship: "伊勢改"
        }, {
          ship: "日向改"
        }, {
          ship: "大淀改"
        }, {
          ship: "駆逐",
          amount: [1, 99]
        }]
      }]
    }
  }, {
    game_id: 880,
    wiki_id: "B115",
    category: 2,
    type: 1,
    name: "精鋭駆逐隊、獅子奮迅！",
    detail: "十分な装備と練度を誇る駆逐艦4隻からなる精鋭駆逐隊を含む艦隊を編成。鎮守府近海航路、東部オリョール海、北方キス島沖、西方カレー洋に投入、各戦線の作戦展開を成功させよ！",
    reward_fuel: 480,
    reward_ammo: 480,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "特注家具職人",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }]
    }, {
      choices: [{
        name: "戦闘詳報",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }],
    prerequisite: [320, 680],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        map: "1-6",
        times: 1,
        groups: [{
          ship: "駆逐",
          amount: 4
        }, {
          ship: "艦",
          amount: 2
        }],
        result: "クリア"
      }, {
        category: "sortie",
        map: ["2-3", "3-2", "4-2"],
        times: 1,
        boss: true,
        result: "A",
        groups: [{
          ship: "駆逐",
          amount: 4
        }, {
          ship: "艦",
          amount: 2
        }]
      }]
    }
  }, {
    game_id: 881,
    wiki_id: "B116",
    category: 2,
    type: 1,
    name: "「十八駆」、北方海域キス島へ！",
    detail: "精鋭「第十八駆逐隊」を投入し、北方海域キス島撤退作戦を実施する！同作戦に反復出動し、キス島撤退作戦を完全成功させよ！",
    reward_fuel: 0,
    reward_ammo: 0,
    reward_steel: 480,
    reward_bauxite: 480,
    reward_other: [{
      choices: [{
        name: "大発動艇",
        category: "装備",
        amount: 1
      }, {
        name: "10cm連装高角砲改+増設機銃",
        category: "装備",
        amount: 1
      }, {
        name: "改修資材",
        amount: 5
      }]
    }],
    prerequisite: [192, 230],
    requirements: {
      category: "sortie",
      times: 2,
      map: ["3-2"],
      boss: true,
      result: "S",
      groups: [{
        ship: "霰改二",
        amount: 1
      }, {
        ship: ["霞改二", "霞改二乙"],
        amount: 1
      }, {
        ship: "陽炎改",
        amount: 1
      }, {
        ship: "不知火改",
        amount: 1
      }]
    }
  }, {
    game_id: 884,
    wiki_id: "B117",
    category: 2,
    type: 1,
    name: "最精鋭甲型駆逐艦、突入！敵中突破！",
    detail: "「黒潮改二」「不知火改二」「陽炎改二」のいずれかを旗艦、他2隻の練度75以上の甲型駆逐艦を配備した計6隻艦隊で西方カレー洋、北方キス島沖、南方サブ島沖海域に複数回突入、各作戦を完全成功させよ！",
    reward_fuel: 0,
    reward_ammo: 1000,
    reward_steel: 0,
    reward_bauxite: 500,
    reward_other: [{
      choices: [{
        name: "特注家具職人",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "戦闘詳報",
        amount: 1
      }]
    }, {
      choices: [{
        name: "勲章",
        amount: 2
      }, {
        name: "試製甲板カタパルト",
        amount: 1
      }, {
        name: "12.7cm連装砲D型改二",
        amount: 1
      }]
    }],
    prerequisite: [323, 880],
    requirements: {
      category: "sortie",
      times: 2,
      map: ["3-2", "4-2", "5-3"],
      boss: true,
      result: "S",
      groups: [{
        ship: ["陽炎改二", "不知火改二", "黒潮改二"],
        flagship: true
      }, {
        shipclass: ["陽炎", "夕雲"],
        amount: 2,
        lv: [75, 999]
      }]
    }
  }, {
    game_id: 885,
    wiki_id: "B118",
    category: 2,
    type: 1,
    name: "戦闘航空母艦、出撃せよ！",
    detail: "改装航空戦艦（戦闘航空母艦）一番艦、旗艦「伊勢改二」を中核とした航空火力打撃部隊を編成、北方AL海域戦闘哨戒、カレー洋リランカ島沖及びピーコック島沖の作戦に投入、敵を撃滅せよ！",
    reward_fuel: 1000,
    reward_ammo: 0,
    reward_steel: 634,
    reward_bauxite: 634,
    reward_other: [{
      choices: [{
        name: "熟練搭乗員",
        amount: 1
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }, {
        name: "改修資材",
        amount: 4
      }]
    }, {
      choices: [{
        name: "瑞雲(六三四空)",
        amount: 1
      }, {
        name: "彗星二二型(六三四空)",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 2
      }]
    }],
    prerequisite: [324],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["3-5", "4-5", "6-4"],
      boss: true,
      result: "S",
      groups: [{
        ship: "伊勢改二",
        flagship: true
      }]
    }
  }, {
    game_id: 886,
    wiki_id: "B119",
    category: 2,
    type: 1,
    name: "「伊勢改二」、敵機動部隊を迎撃せよ！",
    detail: "旗艦「伊勢改二」随伴駆逐艦2隻の航空戦隊を基幹とする艦隊をKW環礁沖空母機動部隊迎撃戦に投入！同反復出撃によって、同方面に来襲する敵機動部隊を迎撃、完全撃滅せよ！　「伊勢改二」、抜錨！",
    reward_fuel: 634,
    reward_ammo: 0,
    reward_steel: 1000,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "九六式艦戦",
        amount: 3
      }, {
        name: "九九式艦爆",
        amount: 3
      }, {
        name: "零式艦戦21型",
        amount: 2
      }]
    }, {
      choices: [{
        name: "紫電改二",
        amount: 2
      }, {
        name: "勲章",
        amount: 1
      }, {
        name: "戦闘詳報",
        amount: 1
      }]
    }],
    prerequisite: [324],
    requirements: {
      category: "sortie",
      times: 3,
      map: "6-5",
      boss: true,
      result: "S",
      groups: [{
        ship: "伊勢改二",
        flagship: true
      }, {
        ship: "駆逐艦",
        amount: 2
      }]
    }
  }, {
    game_id: 887,
    wiki_id: "B120",
    category: 2,
    type: 1,
    name: "精鋭「第十八戦隊」、展開せよ！",
    detail: "精鋭「第十八戦隊」随伴駆逐艦2隻を含む艦隊を、鎮守府海域に展開。同南西諸島沖海域、南西諸島防衛線、鎮守府近海、鎮守府近海航路の各作戦を完全成功させよ！改装軽巡「天龍」「龍田」、出撃！",
    reward_fuel: 0,
    reward_ammo: 1000,
    reward_steel: 0,
    reward_bauxite: 800,
    reward_other: [{
      choices: [{
        name: "高速修復材",
        amount: 5
      }, {
        name: "戦闘詳報",
        amount: 1
      }]
    }, {
      choices: [{
        name: "22号対水上電探",
        amount: 2
      }, {
        name: "改修資材",
        amount: 4
      }]
    }],
    prerequisite: [194],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: ["1-2", "1-4", "1-5"],
        boss: true,
        result: "S",
        groups: [{
          ship: "天龍"
        }, {
          ship: "龍田"
        }, {
          ship: "駆逐艦",
          amount: 2
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "1-6",
        result: "クリア",
        groups: [{
          ship: "天龍"
        }, {
          ship: "龍田"
        }, {
          ship: "駆逐艦",
          amount: 2
        }]
      }]
    }
  }, {
    game_id: 888,
    wiki_id: "Bq07",
    category: 2,
    type: 7,
    name: "新編成「三川艦隊」、鉄底海峡に突入せよ！",
    detail: "鉄底海峡戦果拡張：「鳥海」「青葉」「衣笠」「加古」「古鷹」「天龍」「夕張」の中から4隻を含む突入艦隊を編成。南方海域前面及びサブ島沖海域、サーモン海域に突入、敵艦隊を撃滅せよ！",
    reward_fuel: 800,
    reward_ammo: 800,
    reward_steel: 800,
    reward_bauxite: 800,
    reward_other: [{
      name: "戦果200"
    }, {
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "改修資材",
        amount: 5
      }]
    }],
    prerequisite: [243, 273],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["5-1", "5-3", "5-4"],
      boss: true,
      result: "S",
      groups: [{
        ship: ["鳥海", "青葉", "衣笠", "加古", "古鷹", "天龍", "夕張"],
        amount: 4
      }]
    }
  }, {
    game_id: 889,
    wiki_id: "B121",
    category: 2,
    type: 1,
    name: "精鋭「二七駆」第一小隊、出撃せよ！",
    detail: "「白露改二」及び「時雨改二」から成る精鋭駆逐隊「二七駆」第一小隊を含む有力な艦隊を編成、東部オリョール海、ジャム島攻略作戦、サーモン海域北方、KW環礁沖海域に出撃、敵を撃滅せよ！",
    reward_fuel: 1000,
    reward_ammo: 0,
    reward_steel: 1000,
    reward_bauxite: 0,
    reward_other: [{
      name: "12.7cm連装砲B型改四(戦時改修)+高射装置",
      amount: 1
    }, {
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "高速修復材",
        amount: 8
      }]
    }],
    prerequisite: [880],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["2-3", "4-1", "5-5", "6-5"],
      boss: true,
      result: "S",
      groups: [{
        ship: "白露改二"
      }, {
        ship: "時雨改二"
      }]
    }
  }, {
    game_id: 890,
    wiki_id: "B122",
    category: 2,
    type: 1,
    name: "精鋭「四戦隊」第二小隊、抜錨せよ！",
    detail: "「摩耶改二」及び「鳥海改二」から成る精鋭「第四戦隊」第二小隊を含む有力な艦隊を編成、南西諸島防衛線、東部オリョール海、アルフォンシーノ方面、カレー洋リランカ島沖に出撃、敵を撃滅せよ！",
    reward_fuel: 400,
    reward_ammo: 400,
    reward_steel: 0,
    reward_bauxite: 400,
    reward_other: [{
      name: "「摩耶の盾」掛け軸",
      category: "家具"
    }, {
      choices: [{
        name: "12.7cm連装高角砲(後期型)",
        amount: 2
      }, {
        name: "高速修復材",
        amount: 8
      }, {
        name: "勲章",
        amount: 1
      }]
    }],
    prerequisite: [223, 303],
    requirements: {
      category: "sortie",
      map: ["1-4", "2-3", "3-3", "4-5"],
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "鳥海改二"
      }, {
        ship: "摩耶改二"
      }, {
        ship: "艦",
        amount: 4
      }]
    }
  }, {
    game_id: 891,
    wiki_id: "B123",
    category: 2,
    type: 1,
    name: "精強「十七駆」、北へ、南へ！",
    detail: "改装甲型駆逐艦「磯風乙改」「浜風乙改」「浦風丁改」「谷風丁改」4隻の精強「十七駆」を含む艦隊で鎮守府近海、キス島沖、ブルネイ泊地沖、南方海域前面に出撃、敵戦力と交戦、これを撃破せよ！",
    reward_fuel: 1000,
    reward_ammo: 1000,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "三式水中探信儀",
        amount: 1
      }, {
        name: "12.7cm単装高角砲(後期型)",
        amount: 1
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }, {
      choices: [{
        name: "戦闘詳報",
        amount: 1
      }, {
        name: "12.7cm連装砲C型改二",
        amount: 1
      }, {
        name: "61cm四連装(酸素)魚雷後期型",
        amount: 1
      }]
    }],
    prerequisite: [195],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["1-5", "3-2", "7-1", "5-1"],
      boss: true,
      result: "A",
      groups: [{
        ship: "磯風乙改"
      }, {
        ship: "浜風乙改"
      }, {
        ship: "浦風丁改"
      }, {
        ship: "谷風丁改"
      }]
    }
  }, {
    game_id: 892,
    wiki_id: "B126",
    category: 2,
    type: 1,
    name: "主力オブ主力、抜錨開始！",
    detail: "甲型駆逐艦編成任務：夕雲型駆逐艦「夕雲改二」及び「巻雲改二」の2隻から成る精鋭第十駆逐隊を含む有力な艦隊を南方海域に投入、サブ島沖海域、サーモン海域、サーモン海域北方の敵を捕捉撃滅せよ！",
    reward_fuel: 500,
    reward_ammo: 500,
    reward_steel: 500,
    reward_bauxite: 1000,
    reward_other: [{
      choices: [{
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "新型航空兵装資材",
        amount: 1
      }, {
        name: "大発動艇",
        amount: 1
      }]
    }, {
      choices: [{
        name: "熟練搭乗員",
        amount: 1
      }, {
        name: "改修資材",
        amount: 4
      }]
    }],
    prerequisite: [196, 201],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["5-3", "5-4", "5-5"],
      boss: true,
      result: "S",
      groups: [{
        ship: "夕雲改二"
      }, {
        ship: "巻雲改二"
      }, {
        ship: "艦",
        amount: 4
      }]
    }
  }, {
    game_id: 893,
    wiki_id: "Bq08",
    category: 2,
    type: 7,
    name: "泊地周辺海域の安全確保を徹底せよ！",
    detail: "泊地近海警戒戦果拡張：有力な泊地哨戒部隊を編成、鎮守府近海、ブルネイ泊地沖、タウイタウイ泊地沖に反復出撃！各周辺海域に出没する敵船を制圧、さらに泊地周辺の脅威となる敵戦力を捕捉撃滅せよ！",
    reward_fuel: 2000,
    reward_ammo: 500,
    reward_steel: 0,
    reward_bauxite: 500,
    reward_other: [{
      name: "戦果300"
    }, {
      choices: [{
        name: "熟練見張員",
        amount: 1
      }, {
        name: "熟練搭乗員",
        amount: 1
      }, {
        name: "洋上補給",
        amount: 4
      }]
    }],
    prerequisite: [214, 299],
    requirements: {
      category: "sortie",
      times: 3,
      map: ["1-5", "7-1", "7-2-P1", "7-2-P2"],
      boss: true,
      result: "S"
    }
  }, {
    game_id: 894,
    wiki_id: "Bq09",
    category: 2,
    type: 7,
    name: "空母戦力の投入による兵站線戦闘哨戒",
    detail: "空母を含む有力な哨戒艦隊を編成、製油所地帯沿岸、南西諸島防衛戦、南西諸島近海、バシー海峡及び東部オリョール海を戦闘哨戒、各海域の敵艦隊を捕捉撃滅、各海域兵站線の安全を確保せよ！",
    reward_fuel: 600,
    reward_ammo: 0,
    reward_steel: 600,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "新型航空兵装資材",
        amount: 1
      }, {
        name: "開発資材",
        amount: 4
      }]
    }, {
      choices: [{
        name: "彩雲",
        amount: 1
      }, {
        name: "熟練搭乗員",
        amount: 1
      }, {
        name: "プレゼント箱",
        amount: 1
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["1-3", "1-4", "2-1", "2-2", "2-3"],
      boss: true,
      result: "S",
      groups: [{
        ship: ["軽空母", "正規空母", "装甲空母"]
      }, {
        ship: "艦",
        amount: 5
      }]
    }
  }, {
    game_id: 895,
    wiki_id: "B127",
    category: 2,
    type: 1,
    name: "冬季北方海域作戦",
    detail: "冬季北方作戦：軽巡級を旗艦とする有力な艦隊で、モーレイ海、アルフォンシーノ方面、北方海域全域及び北方AL海域に反復出撃！同海域に遊弋する敵艦隊を捕捉、これを撃滅し、北方海域制海権を確保せよ！",
    reward_fuel: 0,
    reward_ammo: 800,
    reward_steel: 0,
    reward_bauxite: 800,
    reward_other: [{
      choices: [{
        name: "零式艦戦21型",
        amount: 3
      }, {
        name: "零式艦戦32型",
        amount: 2
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }, {
      choices: [{
        name: "改修資材",
        amount: 4
      }, {
        name: "22号対水上電探",
        amount: 3
      }, {
        name: "新型航空兵装資材",
        amount: 2
      }]
    }],
    prerequisite: [894],
    requirements: {
      category: "sortie",
      times: 2,
      map: ["3-1", "3-3", "3-4", "3-5"],
      boss: true,
      result: "S",
      groups: [{
        ship: ["軽巡洋艦", "重雷装巡洋艦", "練習巡洋艦"],
        flagship: true
      }, {
        ship: "艦",
        amount: 5
      }]
    }
  }, {
    game_id: 896,
    wiki_id: "B131",
    category: 2,
    type: 1,
    name: "航空戦艦戦隊、戦闘哨戒！",
    detail: "航空戦艦二隻を中核とする艦隊を編成、同艦隊で南西諸島防衛線、鎮守府近海及び東部オリョール海、タウイタウイ泊地沖に展開。同海域の脅威となる敵艦隊主力を捕捉、これを撃滅せよ！",
    reward_fuel: 600,
    reward_ammo: 600,
    reward_steel: 0,
    reward_bauxite: 600,
    reward_other: [{
      choices: [{
        name: "戦闘詳報",
        amount: 1
      }, {
        name: "勲章",
        amount: 2
      }]
    }, {
      name: "勲章",
      amount: 1
    }],
    prerequisite: [112, 606],
    requirements: {
      category: "sortie",
      times: 1,
      map: ["1-4", "1-5", "2-3", "7-2-P2"],
      boss: true,
      result: "S",
      groups: [{
        ship: "航空戦艦",
        amount: 2
      }]
    }
  }, {
    game_id: 897,
    wiki_id: "B132",
    category: 2,
    type: 1,
    name: "最精鋭「第四航空戦隊」、出撃せよ！",
    detail: "｢日向改二」「伊勢改二」の最精鋭「四航戦」を含む第一艦隊で、鎮守府近海航路に反復出撃、さらに、カレー洋リランカ島沖、サーモン海域北方、KW環礁沖海域の敵艦隊を捕捉撃滅せよ！",
    reward_fuel: 1000,
    reward_ammo: 1000,
    reward_steel: 1000,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "S-51J",
        amount: 1
      }, {
        name: "勲章",
        amount: 2
      }]
    }, {
      name: "瑞雲改二(六三四空)",
      amount: 1
    }],
    prerequisite: [694, 896],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 2,
        map: "1-6",
        result: "クリア",
        groups: [{
          ship: "日向改二"
        }, {
          ship: "伊勢改二"
        }]
      }, {
        category: "sortie",
        times: 1,
        map: ["4-5", "5-5", "6-5"],
        boss: true,
        result: "S",
        groups: [{
          ship: "日向改二"
        }, {
          ship: "伊勢改二"
        }]
      }]
    }
  }, {
    game_id: 901,
    wiki_id: "B140",
    category: 2,
    type: 1,
    name: "「夕張改二」試してみてもいいかしら？",
    detail: "改装兵装実験軽巡「夕張改二」型を旗艦にした艦隊で、南西諸島沖ノ島沖、北方アルフォンシーノ方面、南方サブ島沖海域、中部グアノ環礁沖海域に展開！同戦域の敵艦隊主力を捜索、これを捕捉撃滅せよ！",
    reward_fuel: 0,
    reward_ammo: 3000,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "14cm連装砲改",
      amount: 1
    }, {
      choices: [{
        name: "二式爆雷",
        amount: 2
      }, {
        name: "大発動艇",
        amount: 2
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }],
    prerequisite: [605, 219],
    requirements: {
      category: "sortie",
      map: ["2-5", "3-3", "5-3", "6-3"],
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: ["夕張改二", "夕張改二特", "夕張改二丁"],
        flagship: true
      }, {
        ship: "艦",
        amount: 5
      }]
    }
  }, {
    game_id: 902,
    wiki_id: "B141",
    category: 2,
    type: 1,
    name: "新編「六水戦」出撃！後で感想、聞かせてね！",
    detail: "改装軽巡「夕張改二」型旗艦を含む第六水雷戦隊４隻以上を擁する艦隊で、鎮守府近海、鎮守府近海航路、さらに南西諸島バシー海峡、北方キス島沖、南西ブルネイ泊地沖の各作戦を、それぞれ完全成功させよ！",
    reward_fuel: 3000,
    reward_ammo: 0,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      name: "補強増設",
      amount: 1
    }, {
      choices: [{
        name: "開発資材",
        amount: 12
      }, {
        name: "甲標的 丁型改(蛟龍改)",
        amount: 1
      }, {
        name: "改修資材",
        amount: 6
      }]
    }],
    prerequisite: [901],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        times: 1,
        map: ["1-5", "2-2", "3-2", "7-1"],
        boss: true,
        result: "S",
        groups: [{
          ship: ["夕張改二", "夕張改二特", "夕張改二丁"],
          flagship: true
        }, {
          ship: ["睦月", "如月", "弥生", "卯月", "菊月", "望月"],
          select: 3
        }, {
          ship: "艦",
          amount: 2
        }]
      }, {
        category: "sortie",
        times: 1,
        map: "1-6",
        boss: true,
        groups: [{
          ship: ["夕張改二", "夕張改二特", "夕張改二丁"],
          flagship: true
        }, {
          ship: ["睦月", "如月", "弥生", "卯月", "菊月", "望月"],
          select: 3
        }, {
          ship: "艦",
          amount: 2
        }],
        result: "クリア"
      }]
    }
  }, {
    game_id: 903,
    wiki_id: "Bq13",
    category: 2,
    type: 7,
    name: "拡張「六水戦」、最前線へ！",
    detail: "軽巡「夕張改二」型の旗艦に随伴第六水雷戦隊駆逐艦２隻以上または「由良改二」を含む艦隊で、南方海域前面、南方サーモン海域、中部北海域ピーコック島沖、中部KW環礁沖海域に展開、敵戦力を撃滅せよ！",
    reward_fuel: 1000,
    reward_ammo: 1000,
    reward_steel: 1000,
    reward_bauxite: 0,
    reward_other: [{
      name: "戦果390"
    }, {
      choices: [{
        name: "高速修復材",
        amount: 10
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "勲章",
        amount: 1
      }]
    }],
    prerequisite: [902],
    requirements: {
      category: "or",
      list: [{
        category: "sortie",
        times: 1,
        map: ["5-1", "5-4", "6-4", "6-5"],
        boss: true,
        result: "S",
        groups: [{
          ship: ["夕張改二", "夕張改二特", "夕張改二丁"],
          flagship: true
        }, {
          ship: ["睦月", "如月", "弥生", "卯月", "菊月", "望月"],
          select: 2
        }, {
          ship: "艦",
          amount: 3
        }]
      }, {
        category: "sortie",
        times: 1,
        map: ["5-1", "5-4", "6-4", "6-5"],
        boss: true,
        result: "S",
        groups: [{
          ship: ["夕張改二", "夕張改二特", "夕張改二丁"],
          flagship: true
        }, {
          ship: "由良改二"
        }, {
          ship: "艦",
          amount: 4
        }]
      }]
    }
  }, {
    game_id: 904,
    wiki_id: "By1",
    category: 2,
    type: 1,
    name: "精鋭「十九駆」、躍り出る！",
    detail: "改装特II型駆逐艦「綾波改二」及び同「敷波改二」を含む精鋭艦隊を前線に投入、南西諸島海域沖ノ島沖、<br>北方海域全域、西方海域カレー洋リランカ島沖、南方サブ島沖海域に展開、各敵主力を捕捉撃滅せよ！",
    reward_fuel: 1900,
    reward_ammo: 0,
    reward_steel: 1900,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "特注家具職人",
        amount: 1
      }, {
        name: "給糧艦「間宮」",
        amount: 1
      }, {
        name: "家具箱（中）",
        amount: 1
      }]
    }, {
      choices: [{
        name: "高速修復材",
        amount: 8
      }, {
        name: "開発資材",
        amount: 10
      }, {
        name: "改修資材",
        amount: 4
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "sortie",
      map: ["2-5", "3-4", "4-5", "5-3"],
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "綾波改二"
      }, {
        ship: "敷波改二"
      }]
    }
  }, {
    game_id: 905,
    wiki_id: "By2",
    category: 2,
    type: 1,
    name: "「海防艦」、海を護る！",
    detail: "海防艦3隻を含む5隻以下の海上護衛隊を、鎮守府海域に展開。鎮守府正面海域、南西諸島沖海域、製油所<br>地帯沿岸、鎮守府近海、鎮守府近海航路の各海域の安全確保と対潜掃蕩を図れ！海防艦戦隊、抜錨せよ！",
    reward_fuel: 1200,
    reward_ammo: 600,
    reward_steel: 600,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "高速修復材",
        amount: 6
      }, {
        name: "開発資材",
        amount: 8
      }]
    }, {
      choices: [{
        name: "勲章",
        amount: 1
      }, {
        name: "二式爆雷",
        amount: 1
      }, {
        name: "特注家具職人",
        amount: 1
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "and",
      list: [{
        category: "sortie",
        map: "1-6",
        times: 1,
        groups: [{
          ship: "海防艦",
          amount: 3
        }, {
          ship: "艦",
          amount: 2
        }],
        result: "クリア",
        disallowed: "他の艦"
      }, {
        category: "sortie",
        map: ["1-1", "1-2", "1-3", "1-5"],
        times: 1,
        boss: true,
        result: "S",
        groups: [{
          ship: "海防艦",
          amount: 3
        }, {
          ship: "艦",
          amount: 2
        }],
        disallowed: "他の艦"
      }]
    }
  }, {
    game_id: 911,
    wiki_id: "B142",
    category: 2,
    type: 1,
    name: "再編「第三一駆逐隊」、抜錨せよ！",
    detail: "夕雲型駆逐艦「長波」「岸波」「朝霜」、そして「沖波改二」からなる再編第三一駆逐隊を含む艦隊を、製油所地帯沿岸、南西諸島防衛線、鎮守府近海、バシー海峡、東部オリョール海に展開、敵を撃破せよ！",
    reward_fuel: 880,
    reward_ammo: 880,
    reward_steel: 880,
    reward_bauxite: 500,
    reward_other: [{
      choices: [{
        name: "洋上補給",
        amount: 3
      }, {
        name: "高速修復材",
        amount: 6
      }, {
        name: "戦闘糧食(特別なおにぎり)",
        amount: 2
      }]
    }, {
      choices: [{
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "沖に立つ波",
        category: "家具"
      }, {
        name: "新型噴進装備開発資材",
        amount: 1
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "sortie",
      map: ["1-3", "1-4", "1-5", "2-2", "2-3"],
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "沖波改二"
      }, {
        ship: "長波"
      }, {
        ship: "岸波"
      }, {
        ship: "朝霜"
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 914,
    wiki_id: "By4",
    category: 2,
    type: 7,
    name: "重巡戦隊、西へ！",
    detail: "重巡(航空巡洋艦含まず)3隻以上、駆逐艦1隻以上を中核とした艦隊を編成。同艦隊を西方に展開。西方海域ジャム島沖、カレー洋海域、リランカ島、カスガダマ島の敵戦力と交戦、これを撃破せよ！",
    reward_fuel: 0,
    reward_ammo: 800,
    reward_steel: 800,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "高速修復材",
        amount: 5
      }, {
        name: "新型砲熕兵装資材",
        amount: 1
      }, {
        name: "増設バルジ(中型艦)",
        amount: 1
      }]
    }, {
      choices: [{
        name: "改修資材",
        amount: 4
      }, {
        name: "20.3cm(2号)連装砲",
        amount: 2
      }]
    }],
    prerequisite: [],
    requirements: {
      category: "sortie",
      map: ["4-1", "4-2", "4-3", "4-4"],
      boss: true,
      result: "A",
      times: 1,
      groups: [{
        ship: "重巡",
        amount: 3
      }, {
        ship: "駆逐",
        amount: 1
      }, {
        ship: "艦",
        amount: 2
      }]
    }
  }, {
    game_id: 916,
    wiki_id: "B144",
    category: 2,
    type: 1,
    name: "「比叡改二丙」見参！第三戦隊、南方突入！",
    detail: "「比叡改二丙」含む金剛型高速戦艦2隻以上、軽巡級1隻、駆逐艦1隻以上を含む艦隊を南方海域に投入！南方海域前面、珊瑚諸島沖、サブ島沖海域、サーモン海域、同北方の敵艦隊を捕捉、これを撃滅せよ！",
    reward_fuel: 1942,
    reward_ammo: 2020,
    reward_steel: 0,
    reward_bauxite: 0,
    reward_other: [{
      choices: [{
        name: "艦本新設計 増設バルジ(大型艦)★+2",
        amount: 1
      }, {
        name: "零式水上偵察機11型乙★+2",
        amount: 1
      }, {
        name: "戦闘詳報",
        amount: 1
      }]
    }, {
      choices: [{
        name: "35.6cm連装砲改二",
        amount: 1
      }, {
        name: "新型砲熕兵装資材",
        amount: 2
      }]
    }],
    prerequisite: [292],
    requirements: {
      category: "sortie",
      map: ["5-1", "5-2", "5-3", "5-4", "5-5"],
      boss: true,
      result: "S",
      times: 1,
      groups: [{
        ship: "比叡改二丙"
      }, {
        ship: ["金剛", "榛名", "霧島"],
        select: 1
      }, {
        ship: "軽巡",
        amount: 1
      }, {
        ship: "駆逐",
        amount: [1, 99]
      }]
    }
  }],
  branches: [
    ['所有任务',[]],
    ['第一甲板链', ['F21']],
    ['第二甲板链', ['F23']],
    ['第三甲板链', ['B117']],
    ['岩井队链', ['F27']],
    ['岩本队链', ['F30']],
    ['基地航空链', ['F43', 'B81']],
    ['喷气机', ['F46']],
    ['夜战甲板员链', ['F46']],
    ['F6F-5N链', 'F63'],
    ['司令部要员1', ['D18']],
    ['司令部要员2', ['B134']],
    ['司令部要员3', ['B159']],
    ['独立任务'],
    ['非独立任务'],
    ['自定义任务链', '']
  ],
  fb:2,
  target(wk){
    switches.fb=1
    those.branches[1]=["",[wk]]
    setchart()
  },
  onLaunch: function () {
    // app=this
    app.data.forEach(function (e, i) {
      app.wkid[String(e.game_id)] = e.wiki_id
      app.wktoi[String(e.wiki_id)] = i
      // gameid[String(e.wiki_id)] = e.game_id
    });
    console.time('计时器0')
    // 展示本地存储能力sss
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           app.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (app.userInfoReadyCallback) {
    //             app.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  wkid :{},
  wktoi : {},
  // let gameid = {},
  setstat: function (wkid, stat) {
    if (typeof wkid != 'string') x(wkid, stat);
    let history = app.get('history') || []
    if(history.constructor != Array)history=[];
    let add = [wkid, stat, new Date()]
    try {
      history.push(add)
      app.set('history', history)
    } catch (e) {
      x(e, wkid, stat, history)
    }
  },
  getstat: function (wkid) {
    // let history = app.get('history') || []
    try {
      // let l = history.length
      return app.valido[wkid][app.beginutc(wkid, new Date())][0]
    } catch (e) {
      // w(e, wkid, app.beginutc(wkid, new Date()),app.valido,)
      return 0
    }
  },
  initcache: function (key, def) {
    try {
      if (app.get(key) == null) {
        app.set(key, def)
        return def
      } else {
        return app.get(key)
      }
    } catch (error) {
      // x(error,key,def)
      return def
    }
  },
  set: function (key, value) {
    try {
      wx.setStorageSync(key.toString(), value)
    } catch (e) {
      x(e)
    }
  },
  get: function (key) {
    try {
      let value = wx.getStorageSync(key.toString())
      // if (value) {
        return value
      // }
    } catch (e) {
      x(e)
    }
  },
  addarr: function (arr, item) {
    let list = app.get(arr) || []
    if (list.indexOf(item) > -1) return;
    list.push(item)
    app.set(arr, list)
  },
  delarr: function (arr, item) {
    let list = app.get(arr)
    if (!list) return;
    app.remove(list, item)
    app.set(arr, list)
  },
  // staritem: function(e){
  //   app.addarr(('starreward'),e)
  // },
  // unstaritem: function(e){
  //  app.delarr(('starreward'),e)
  // },
  remove: function (arr, item) {
    if (!arr) return;
    let i = arr.length
    while (i--) {
      if (arr[i] == item) {
        arr.splice(i, 1)
      }
    }
  },
   getwk:function(wkid, key) {
    if (app.wktoi[wkid] != null && app.data[app.wktoi[wkid]] != null) {
      return app.data[app.wktoi[wkid]][key]
    } else {
      x(wkid, ' is not in data!', app.wktoi[wkid], app.data)
      option.title.text = '未找到目标任务：' + wkid
    }
  },
  beginutc: function (wkid, datestr) {
    let dt = new Date(datestr)
    if (!(dt instanceof Date)) {
      x(wkid, datestr, dt);
      return app.periodstart('once', new Date()).toISOString()
    }
    if (!app.getwk(wkid, 'period')) {
      // x(wkid,datawk(wkid))
      return app.periodstart('once', new Date()).toISOString()
    }
    var utc = app.periodstart(app.getwk(wkid, 'period'), dt).toISOString()
    if (utc.slice(10) != 'T20:00:00.000Z') x(utc, wkid, datestr)
    return utc
  },

  getMonthDays: function (myMonth, nowYear) {
    var monthStartDate = new Date(nowYear, myMonth, 1);
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
  },
  periodstart: function (period, dt) { //返回dt的上一个周期的起讫
    let myDate = new Date(dt)
    //当地时间转阿联酋时间(加法)
    myDate.setTime(myDate.getTime() + araboffset);
    //得到阿联酋时间，略去小时，即为当前日常任务开始时间
    myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate());
    var now = new Date(myDate); //当前日期
    var nowDayOfWeek = now.getDay(); //今天本周的第几天
    var nowDay = now.getDate(); //当前日
    var nowMonth = now.getMonth(); //当前月
    var nowYear = now.getFullYear(); //当前年
    var beginTime, endTime
    if (period == 'daily') {
      beginTime = new Date(nowYear, nowMonth, nowDay);
      endTime = new Date(nowYear, nowMonth, nowDay + 1);
    } else if (period == 'weekly') {
      beginTime = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
      endTime = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
    } else if (period == 'monthly') {
      beginTime = new Date(nowYear, nowMonth, 1);
      endTime = new Date(nowYear, nowMonth, app.getMonthDays(nowMonth, nowYear));
    } else if (period == 'seasonal') {
      var quarterStartMonth = 0;
      beginTime = new Date(nowYear, quarterStartMonth, 1);
      var quarterEndMonth = quarterStartMonth + 2;
      endTime = new Date(nowYear, quarterEndMonth, app.getMonthDays(quarterEndMonth, nowYear));
    } else if (period == 'annual') {
      beginTime = new Date(nowYear, 0, 1);
      endTime = new Date(nowYear + 1, 0, 1);
    } else if (period == 'once') {
      beginTime = new Date(2000, 0, 1);
      endTime = new Date(3000, 0, 1);
    } else {
      x(period, dt)
    }
    //当前各个周期任务的起讫，以阿联酋时间（+4）表示 , 阿联酋时间转当地时间(减法)
    beginTime.setTime(beginTime.getTime() - araboffset);
    // 当前各个周期任务的起讫，以阿联酋时间（+4）表示 , 转为日本时间+9
    // beginTime.setTime(beginTime.getTime() + 5*60*60000);
    return beginTime
  },
  valido: {},
  globalData: {
    userInfo: null
  }
})
app.onLaunch()
z(app.get('switches'))