// 置き換える単語のリスト（JSON形式）
const replacements = {
   "メスガキ": "ざぁ～こ♡",
   "レイプ": "合意なし",
   "ロリ": "ひよこ",
   "ロリババア": "ひよこババア",
   "監禁": "閉じ込め",
   "鬼畜": "超ひどい",
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
   let text = document.getElementById('inputText').value;

   // 置き換えルールを単語の長さに基づいて降順にソート
   const sortedReplacements = Object.entries(replacements).sort((a, b) => b[0].length - a[0].length);

   // テキストを一文字ずつスキャン
   let resultText = "";
   let i = 0;
   while (i < text.length) {
       let replaced = false;
       for (const [original, replacement] of sortedReplacements) {
           // テキストの現在位置から始まる部分文字列が置き換え対象にマッチするかチェック
           if (text.substr(i, original.length) === original) {
               // マッチした場合は置き換え
               resultText += replacement;
               i += original.length;
               replaced = true;
               break; 
           }
       }
       if (!replaced) {
           // どの単語にもマッチしない場合は、現在の文字を結果に追加し、次の文字へ
           resultText += text[i];
           i++;
       }
   }

   document.getElementById('resultText').innerText = resultText;
}
