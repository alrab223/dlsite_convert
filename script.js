// 置き換える単語のリスト（JSON形式）
const replacements = {
   "メスガキ": "ざぁ～こ♡",
   "レイプ": "合意なし",
   "ロリ": "ひよこ",
   "ロリババア": "ひよこババア",
   "監禁": "閉じ込め",
   "鬼畜": "調ひどい",
   "拷問": "責め苦",
   "催眠": "トランス",
   "獣姦": "動物なかよし",
   "痴漢": "秘密さわさわ",
   "調教": "しつけ",
   "逆レイプ": "逆レ",
   "強制": "命令",
   "近親相姦": "近親もの",
   "洗脳": "精神支配",
   "奴隷": "下僕",
   "陵辱": "屈辱",
   "輪姦": "回し",
   "蟲姦": "虫エッチ",
   "モブ姦": "モブおじさん",
   "異種姦": "異種えっち",
   "機械姦": "機械責め",
   "睡眠姦": "すやすやえっち",
   "催眠音声": "暗示ボイス"
};

function replaceText() {
   // 入力テキストを取得
   let text = document.getElementById('inputText').value;

   // 置き換え処理
   for (const [original, replacement] of Object.entries(replacements)) {
      const regex = new RegExp(original, 'g');
      text = text.replace(regex, replacement);
   }

   // 結果を表示
   document.getElementById('resultText').innerText = text;
}
