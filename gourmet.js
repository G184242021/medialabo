  //let search = document.querySelector(`input[name='search']`);
//let submit = document.querySelector(`input[name='submit']`);


/*let c1 = document.querySelector('#print');
c1.addEventListener('click',genre);*/


// genre() の定義
/*function genre() {
  let k = document.querySelector('input[word="kaito"]');
  let word = Math.floor(k.value);
  let pr = document.querySelector('span#result');
  let py = document.querySelector('span#word');
    py.textContent = kaisu + "回目の予想:" + yoso;*/


/*
    if(word === '居酒屋' || word === 'G001') {
      pr.textContent="居酒屋を検索しました。";
    }else if(word === 'ダイニングバー・バル || word === G002') {
      pr.textContent="ダイニングバー・バルを検索しました。";
    }else if(word ==='創作料理' || word === 'G003') {
      pr.textContent="創作料理を検索しました。";
    }else if(word === '和食' || word === 'G004') {
      pr.textContent="和食を検索しました。";
    }else if(word === '洋食' || word === 'G005') {
      pr.textContent="洋食を検索しました。";
    }else if(word === 'イタリアン・フレンチ' || word === 'G006') {
      pr.textContent="イタリアン・フレンチを検索しました。";
    }else if(word === '中華' || word === 'G007') {
      pr.textContent="中華を検索しました。";
    }else if(word === '焼き肉・ホルモン' || word === 'G008') {
      pr.textContent="焼き肉・ホルモンを検索しました。";
    }else if(word === 'アジア・エスニック料理' || word === 'G009') {
      pr.textContent="アジア・エスニック料理を検索しました。";
    }else if(word === '各国料理' || word === 'G010') {
      pr.textContent="各国料理を検索しました。";
    }else if(word === 'カラオケ・パーティ' || word === 'G011') {
      pr.textContent="カラオケ・パーティを検索しました。";
    }else if(word === 'バー・カクテル' || word === 'G012') {
      pr.textContent="バー・カクテルを検索しました。";
    }else if(word === 'ラーメン' || word === 'G013') {
      pr.textContent="ラーメンを検索しました。";
    }else if(word === 'カフェ・スイーツ' || word === 'G014') {
      pr.textContent="カフェ・スイーツを検索しました。";
    }else if(word === 'その他グルメ' || word === 'G015') {
      pr.textContent="その他グルメを検索しました。";
    }else if(word === 'お好み焼き・もんじゃ' || word === 'G016') {
      pr.textContent="お好み焼き・もんじゃを検索しました。";
    }else if(word === '韓国料理' || word === 'G017') {
      pr.textContent="韓国料理を検索しました。";
    }else {
      pr.textContent="もう一度入力し直してください";
      */
    
  /*window.addEventListener('DOMContentLoaded', function() {
    //select要素を取得
    var selected_genre = document.querySelector("select[name=genre]");
    selected_genre.addEventListener('change',function(){
      console.log(selected_genre.value+":");
    });
  });
*/




















  let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


let sn = document.querySelector('span#name');
  // 通信を開始する処理
function sendRequest() {
  let id = document.getElementById("genre").value;
	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + id + '.json';

	// 通信開始
	axios.get(url) 
		.then(showResult)
		.catch(showError)
		.then(finish);
}


// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

  	// data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  for (n of data.results.shop) {
    let a = document.createElement('p');
  a.textContent = '店舗名:' + n.name;
  sn.insertAdjacentElement('beforeend',a);
  }


	

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}


