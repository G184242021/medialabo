// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    console.log(kaisu+"回目の予想:"+yoso);
    if(kaisu >= 4) {
        console.log("答えは"+kotae+"ですよ。もうゲームは終わってます。");
        kaisu = kaisu + 1;
    }
    if(kaisu === 3) {
        console.log("ざんねん！答えは"+kotae+"でした。");
        kaisu = kaisu + 1;
    }
    if(kaisu < 3 && kotae===yoso) {
        console.log("正解です！おめでとう！");
        end();
    }else if(kaisu < 3 && kotae < yoso) {
        console.log("ざんねん！答えはもっと小さいですよ。");
        kaisu = kaisu + 1;
    }else if(kaisu < 3 && kotae > yoso){
        console.log("ざんねん！答えはもっと大きいですよ。");
        kaisu = kaisu + 1;
    }
    function end() {
        kaisu = kaisu + 3;
    }
}



    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること