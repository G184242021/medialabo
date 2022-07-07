// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用


let c1 = document.querySelector('#print');
c1.addEventListener('click',hantei);

let kaisu = 1;

// hantei() の定義
function hantei() {
    let k = document.querySelector('input[yoso="kaito"]');
    let yoso = Math.floor(k.value);
    let pr = document.querySelector('span#result');
    let py = document.querySelector('span#yoso');
    py.textContent = kaisu + "回目の予想:" + yoso;
    if(kaisu >= 4) {  //4回目以降の処理
        pr.textContent="答えは"+kotae+"でした。すでにゲームは終わっています。";
        kaisu = kaisu + 1;
    }
    if(kaisu === 3) {   //3回目の処理
        if(yoso === kotae) {
            pr.textContent="正解です！おめでとう！";
        }else {
            pr.textContent="まちがい！答えは"+kotae+"でした。";
        }
        kaisu = kaisu + 1;
    }
    if(kaisu < 3 && kotae===yoso) {  //1,2回目の処理
        pr.textContent="正解です！おめでとう！";
        end();
    }else if(kaisu < 3 && kotae < yoso) {
       pr.textContent="まちがい！答えはもっと小さいですよ。";
        kaisu = kaisu + 1;
    }else if(kaisu < 3 && kotae > yoso){
        pr.textContent="まちがい！答えはもっと大きいですよ。";
        kaisu = kaisu + 1;
    }
    function end() {  //1,2回目に正解した場合に呼び出されるメソッド
        kaisu = kaisu + 3;
    }
}