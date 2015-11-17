import { TypeEffect, ClassEffect } from './GeneralEffect';

let ShipInfo = [
  {
    "name": "酒桶小船",
    "level": [
      {
        "text": "將船長回復力提升30點"
      },
      {
        "text": "將船長回復力提升40點"
      },
      {
        "text": "將船長回復力提升50點"
      },
      {
        "text": "將船長回復力提升60點"
      },
      {
        "text": "將船長回復力提升70點"
      },
      {
        "text": "將船長回復力提升80點\n將海賊團體力提升1.1倍"
      },
      {
        "text": "將船長回復力提升90點\n將海賊團體力提升1.1倍"
      },
      {
        "text": "將船長回復力提升100點\n將海賊團體力提升1.1倍"
      },
      {
        "text": "將船長回復力提升110點\n將海賊團體力提升1.1倍"
      },
      {
        "text": "將船長回復力提升120點\n將海賊團體力提升1.3倍"
      }
    ]
  },
  {
    "name": "前進梅利號",
    "level": [
      {
        "text": "將船長體力提升100點"
      },
      {
        "text": "將船長體力提升130點"
      },
      {
        "text": "將船長體力提升150點"
      },
      {
        "text": "將船長體力提升170點"
      },
      {
        "text": "將船長體力提升190點"
      },
      {
        "text": "將船長體力提升210點\n將海賊團攻擊力提升1.2倍"
      },
      {
        "text": "將船長體力提升230點\n將海賊團攻擊力提升1.2倍"
      },
      {
        "text": "將船長體力提升250點\n將海賊團攻擊力提升1.2倍"
      },
      {
        "text": "將船長體力提升270點\n將海賊團攻擊力提升1.2倍"
      },
      {
        "text": "將船長體力提升300點\n將海賊團攻擊力提升1.5倍"
      }
    ]
  },
  {
    "name": "海軍船",
    "level": [
      {
        "text": "將射擊型角色攻擊力\n提升10點"
      },
      {
        "text": "將射擊型角色攻擊力\n提升20點"
      },
      {
        "text": "將射擊型角色攻擊力\n提升30點"
      },
      {
        "text": "將射擊型角色攻擊力\n提升40點"
      },
      {
        "text": "將射擊型角色攻擊力提升50點\n將海賊團體力提升1.2倍"
      },
      {
        "text": "將射擊型角色攻擊力提升60點\n將海賊團體力提升1.2倍"
      },
      {
        "text": "將射擊型角色攻擊力提升70點\n將海賊團體力提升1.2倍"
      },
      {
        "text": "將射擊型角色攻擊力提升80點\n將海賊團體力提升1.2倍"
      },
      {
        "text": "將射擊型角色攻擊力提升90點\n將海賊團體力提升1.2倍"
      },
      {
        "text": "將射擊型角色攻擊力提升100點\n將海賊團體力提升1.5倍"
      }
    ]
  },
  {
    "name": "芭拉蒂",
    "level": [
      {
        "text": "將船長體力提升500點"
      },
      {
        "text": "將船長體力提升600點"
      },
      {
        "text": "將船長體力提升700點"
      },
      {
        "text": "將船長體力提升800點"
      },
      {
        "text": "將船長體力提升900點"
      },
      {
        "text": "將船長體力提升1000點"
      },
      {
        "text": "將船長體力提升1100點"
      },
      {
        "text": "將船長體力提升1200點"
      },
      {
        "text": "將船長體力提升1300點"
      },
      {
        "text": "將船長體力提升2000點"
      }
    ]
  },
  {
    "name": "棺船",
    "level": [
      {
        "text": "斬撃タイプキャラの\n攻撃と体力を1.1倍\n船長の回復を700ダウンする"
      },
      {
        "text": "斬撃タイプキャラの\n攻撃と体力を1.1倍\n船長の回復を700ダウンする"
      },
      {
        "text": "斬撃タイプキャラの\n攻撃と体力を1.2倍\n船長の回復を700ダウンする"
      },
      {
        "text": "斬撃タイプキャラの\n攻撃と体力を1.2倍\n船長の回復を700ダウンする"
      },
      {
        "text": "斬撃タイプキャラの\n攻撃と体力を1.3倍\n船長の回復を700ダウンする"
      },
      {
        "text": "斬撃タイプキャラの\n攻撃と体力を1.3倍\n船長の回復を700ダウンする"
      },
      {
        "text": "斬撃タイプキャラの\n攻撃と体力を1.3倍\n船長の回復を700ダウンする"
      },
      {
        "text": "斬撃タイプキャラの\n攻撃と体力を1.4倍\n船長の回復を700ダウンする"
      },
      {
        "text": "斬撃タイプキャラの\n攻撃と体力を1.4倍\n船長の回復を700ダウンする"
      },
      {
        "text": "斬撃タイプキャラの\n攻撃と体力を1.5倍\n船長の回復を700ダウンする"
      }
    ]
  },
  {
    "name": "Missラブ・ダック号",
    "level": [
      {
        "text": "受けるダメージを1%減らす"
      },
      {
        "text": "受けるダメージを2%減らす"
      },
      {
        "text": "受けるダメージを3%減らす"
      },
      {
        "text": "受けるダメージを4%減らす"
      },
      {
        "text": "受けるダメージを5%減らす"
      },
      {
        "text": "受けるダメージを6%減らす"
      },
      {
        "text": "受けるダメージを7%減らす\n打突タイプキャラの攻撃を50上げる"
      },
      {
        "text": "受けるダメージを8%減らす\n打突タイプキャラの攻撃を50上げる"
      },
      {
        "text": "受けるダメージを9%減らす\n打突タイプキャラの攻撃を50上げる"
      },
      {
        "text": "受けるダメージを10%減らす\n打突タイプキャラの攻撃を100上げる"
      }
    ]
  },
  {
    "name": "ゴーイング・メリー号 フライングモデル",
    "level": [
      {
        "text": "ターン終了後に体力を50回復する"
      },
      {
        "text": "ターン終了後に体力を100回復する"
      },
      {
        "text": "ターン終了後に体力を125回復する"
      },
      {
        "text": "ターン終了後に体力を150回復する"
      },
      {
        "text": "ターン終了後に体力を175回復する"
      },
      {
        "text": "ターン終了後に体力を200回復する"
      },
      {
        "text": "ターン終了後に体力を250回復する\n一味の攻撃を1.1倍にする"
      },
      {
        "text": "ターン終了後に体力を275回復する\n一味の攻撃を1.1倍にする"
      },
      {
        "text": "ターン終了後に体力を300回復する\n一味の攻撃を1.1倍にする"
      },
      {
        "text": "ターン終了後に体力を350回復する\n一味の攻撃を1.2倍にする"
      }
    ]
  },
  {
    "name": "モビー・ディック号",
    "level": [
      {
        "text": "冒険開始時、体力が残り50%の状態になる\n一味の攻撃を1.2倍にする"
      },
      {
        "text": "冒険開始時、体力が残り50%の状態になる\n一味の攻撃を1.2倍、体力を1.1倍にする"
      },
      {
        "text": "冒険開始時、体力が残り50%の状態になる\n一味の攻撃を1.25倍、体力を1.1倍にする"
      },
      {
        "text": "冒険開始時、体力が残り50%の状態になる\n一味の攻撃を1.3倍、体力を1.1倍にする"
      },
      {
        "text": "冒険開始時、体力が残り50%の状態になる\n一味の攻撃を1.3倍、体力を1.2倍にする"
      },
      {
        "text": "冒険開始時、体力が残り50%の状態になる\n一味の攻撃を1.35倍、体力を1.2倍"
      },
      {
        "text": "冒険開始時、体力が残り50%の状態になる\n一味の攻撃を1.4倍、体力を1.2倍にする"
      },
      {
        "text": "冒険開始時、体力が残り50%の状態になる\n一味の攻撃を1.4倍、体力を1.25倍にする"
      },
      {
        "text": "冒険開始時、体力が残り50%の状態になる\n一味の攻撃を1.4倍、体力を1.3倍にする"
      },
      {
        "text": "冒険開始時、体力が残り50%の状態になる\n一味の攻撃を1.5倍、体力を1.4倍にする"
      }
    ]
  },
  {
    "name": "ビッグトップ号",
    "level": [
      {
        "text": "コスト15以下のキャラの攻撃を1.1倍\n☆4以下のキャラの体力を1.1倍にする"
      },
      {
        "text": "コスト15以下のキャラの攻撃を1.1倍\n☆4以下のキャラの体力を1.2倍にする"
      },
      {
        "text": "コスト15以下のキャラの攻撃を1.2倍\n☆4以下のキャラの体力を1.2倍にする"
      },
      {
        "text": "コスト15以下のキャラの攻撃を1.2倍\n☆4以下のキャラの体力を1.3倍にする"
      },
      {
        "text": "コスト15以下のキャラの攻撃を1.2倍\n☆4以下のキャラの体力を1.3倍にする"
      },
      {
        "text": "コスト20以下のキャラの攻撃を1.2倍\n☆4以下のキャラの体力を1.3倍にする"
      },
      {
        "text": "コスト20以下のキャラの攻撃を1.3倍\n☆4以下のキャラの体力を1.3倍にする"
      },
      {
        "text": "コスト20以下のキャラの攻撃を1.3倍\n☆4以下のキャラの体力を1.4倍にする"
      },
      {
        "text": "コスト20以下のキャラの攻撃を1.4倍\n☆4以下のキャラの体力を1.4倍にする"
      },
      {
        "text": "コスト20以下のキャラの攻撃を1.5倍\n☆4以下のキャラの体力を1.4倍にする"
      }
    ]
  },
  {
    "name": "ベザン・ブラック号",
    "level": [
      {
        "text": "冒険開始時の必殺ターンを1短縮\n速属性キャラの攻撃を1.1倍にする"
      },
      {
        "text": "冒険開始時の必殺ターンを1短縮\n速属性キャラの攻撃を1.1倍、\n体力を1.1倍にする"
      },
      {
        "text": "冒険開始時の必殺ターンを1短縮\n速属性キャラの攻撃を1.15倍、\n体力を1.1倍にする"
      },
      {
        "text": "冒険開始時の必殺ターンを1短縮\n速属性キャラの攻撃を1.2倍、\n体力を1.1倍にする"
      },
      {
        "text": "冒険開始時の必殺ターンを1短縮\n速属性キャラの攻撃を1.2倍、\n体力を1.15倍にする"
      },
      {
        "text": "冒険開始時の必殺ターンを1短縮\n速属性キャラの攻撃を1.2倍、\n体力を1.2倍にする"
      },
      {
        "text": "冒険開始時の必殺ターンを1短縮\n速属性キャラの攻撃を1.25倍、\n体力を1.2倍にする"
      },
      {
        "text": "冒険開始時の必殺ターンを1短縮\n速属性キャラの攻撃を1.3倍、\n体力を1.2倍にする"
      },
      {
        "text": "冒険開始時の必殺ターンを1短縮\n速属性キャラの攻撃を1.3倍、\n体力を1.3倍にする"
      },
      {
        "text": "冒険開始時の必殺ターンを1短縮\n速属性キャラの攻撃を1.4倍、\n体力を1.3倍にする"
      }
    ]
  },
  {
    "name": "サウザンド・サニー号",
    "level": [
      {
        "text": "一味の攻撃を1.2倍にする\n必殺技\n敵全体に32,000の無属性ダメージ(25ターン)"
      },
      {
        "text": "一味の攻撃を1.2倍にする\n必殺技\n敵全体に32,000の無属性ダメージ(23ターン)"
      },
      {
        "text": "一味の攻撃を1.2倍にする\n必殺技\n敵全体に32,000の無属性ダメージ(21ターン)"
      },
      {
        "text": "一味の攻撃を1.2倍にする\n必殺技\n敵全体に35,000の無属性ダメージ(21ターン)"
      },
      {
        "text": "一味の攻撃を1.2倍にする\n必殺技\n敵全体に35,000の無属性ダメージ(20ターン)"
      },
      {
        "text": "一味の攻撃を1.2倍にする\n必殺技\n敵全体に35,000の無属性ダメージ(19ターン)"
      },
      {
        "text": "一味の攻撃を1.2倍にする\n必殺技\n敵全体に40,000の無属性ダメージ(19ターン)"
      },
      {
        "text": "一味の攻撃を1.2倍にする\n必殺技\n敵全体に40,000の無属性ダメージ(17ターン)"
      },
      {
        "text": "一味の攻撃を1.2倍にする\n必殺技\n敵全体に45,000の無属性ダメージ(17ターン)"
      },
      {
        "text": "一味の攻撃を1.5倍にする\n必殺技\n敵全体に50,000の無属性ダメージ(15ターン)"
      }
    ]
  }
];

// reset ship skills
ShipInfo.forEach(ship => {
  ship.level.forEach(content => {
    content.add  = () => 0;
    content.plus = () => 1;
  });
});

// 0. 酒桶小船

// 1. 前進梅利號
ShipInfo[1].level.forEach((ship, index) => {
  const level = index + 1;

  let magni = 1;
  if      (level <= 5) magni = 1;   // 1 ~ 5
  else if (level <= 9) magni = 1.2; // 6 ~ 9
  else                 magni = 1.5; // 10

  ship.plus = () => magni;
});

// 2. 海軍船
ShipInfo[2].level.forEach((ship, index) => {
  const level = index + 1;
  ship.add = function ({ character }) {
    return character.classes.indexOf('射擊') >= 0 ? level * 10 : 0;
  }
});

// 3. 芭拉蒂

// 4. 棺船
ShipInfo[4].level.forEach((ship, index) => {
  const level = index + 1;

  let magni = 1;
  if      (level <= 2) magni = 1.1;   // 1 ~ 2
  else if (level <= 4) magni = 1.2;   // 3 ~ 4
  else if (level <= 7) magni = 1.3;   // 5 ~ 7
  else if (level <= 9) magni = 1.4;   // 8 ~ 9
  else                 magni = 1.5;   // 10

  ship.plus = ClassEffect('斬擊', magni);
});

// 5. Missラブ・ダック号
ShipInfo[5].level.forEach((ship, index) => {
  const level = index + 1;

  let attack = 0;
  if      (level <= 6) attack = 0;   // 1 ~ 6
  else if (level <= 9) attack = 50;  // 7 ~ 9
  else                 attack = 100; // 10

  ship.add = function({ character }) {
    return character.classes.indexOf('打擊') >= 0 ? attack : 0;
  }
});

// 6. ゴーイング・メリー号 フライングモデル
ShipInfo[6].level.forEach((ship, index) => {
  const level = index + 1;

  let magni = 1;
  if      (level <= 6) magni = 1;     // 1 ~ 6
  else if (level <= 9) magni = 1.1;   // 7 ~ 9
  else                 magni = 1.2;   // 10

  ship.plus = () => magni;
});

// 7. モビー・ディック号
ShipInfo[7].level.forEach((ship, index) => {
  const level = index + 1;

  let magni = 1;
  if      (level <= 2) magni = 1.2;   // 1 ~ 2
  else if (level <= 3) magni = 1.25;  // 3
  else if (level <= 5) magni = 1.3;   // 4 ~ 5
  else if (level <= 6) magni = 1.35;  // 6
  else if (level <= 9) magni = 1.4;   // 7 ~ 9
  else                 magni = 1.5;   // 10

  ship.plus = () => magni;
});

// 8. ビッグトップ号
ShipInfo[8].level.forEach((ship, index) => {
  const level = index + 1;

  let cost = level <= 5 ? 15 : 20;

  let magni = 1;
  if      (level <= 1) magni = 1.1;   // 1
  else if (level <= 3) magni = 1.2;   // 2 ~ 3
  else if (level <= 7) magni = 1.3;   // 4 ~ 7
  else                 magni = 1.4;   // 8 ~ 10

  ship.plus = ({ character }) => {
    return character.cost <= cost ? magni : 1;
  }
});

// 9. ベザン・ブラック号
ShipInfo[9].level.forEach((ship, index) => {
  const level = index + 1;

  let magni = 1;
  if      (level <= 2) magni = 1.1;   // 1 ~ 2
  else if (level <= 3) magni = 1.15;  // 3
  else if (level <= 6) magni = 1.2;   // 4 ~ 6
  else if (level <= 7) magni = 1.25;  // 7
  else if (level <= 9) magni = 1.3;   // 8 ~ 9
  else                 magni = 1.4;   // 10

  ship.plus = TypeEffect('速', magni);
});

// 10. サウザンド・サニー号
ShipInfo[10].level.forEach((ship, index) => {
  const level = index + 1;

  let magni = 1;
  if      (level <= 3) magni = 1.2;   // 1 ~ 3
  else if (level <= 7) magni = 1.3;   // 4 ~ 7
  else if (level <= 9) magni = 1.4;   // 8 ~ 9
  else                 magni = 1.5;   // 10

  ship.plus = ClassEffect('打擊', magni);
});

ShipInfo.get = function (no, level) {
  if (typeof no !== 'number' || 0 > no || no > ShipInfo.length - 1) {
    throw new Error(`no ${no} range should be 0 ~ ${ShipInfo.length - 1}`);
  }

  if (typeof level !== 'number' || 1 > level || level > 10) {
    throw new Error(`level ${level} range should be 1 ~ 10`);
  }

  return ShipInfo[no].level[level - 1];
}

export default ShipInfo;
