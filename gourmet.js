let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

let sn = document.querySelector('div#name');

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

  let sakujo = sn.querySelectorAll('*');
  for(n of sakujo) {
    n.remove();
  }

  //n.remove(sn.childNodes);

  for (n of data.results.shop) {
    let a = document.createElement('h2');//h2要素を作成(店舗名を代入するため)
    let c = document.createElement('p');//p要素を作成(店の詳細を代入するため)
    let d = document.createElement('p');
    let e = document.createElement('p');
    let f = document.createElement('p');
    let g = document.createElement('p');

    //メンバーp.textContentはp要素の子供のテキストノードです.
    //このメンバーに文字列を代入することで,p要素のテキストを設定できます
    //新しい要素は作ったあとに，その要素を DOM の木構造のどこかに追加しなくてはいけません

    a.textContent = n.name;//a要素のテキストを設定
    c.textContent = '【アクセス】 : ' + n.access;
    d.textContent = '【住所】 : ' + n.address;
    e.textContent = '【営業日・時間・ラストオーダー等】 : ' + n.open;
    f.textContent = '【予算】 : ' + n.budget.average;
    g.textContent = '【キャッチ】 : ' + n.genre.catch;

      sn.insertAdjacentElement('beforeend',a);//要素snの子要素の最後にaを追加
      sn.insertAdjacentElement('beforeend',g);
      sn.insertAdjacentElement('beforeend',c);
      sn.insertAdjacentElement('beforeend',d);
      sn.insertAdjacentElement('beforeend',e);
      sn.insertAdjacentElement('beforeend',f);
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