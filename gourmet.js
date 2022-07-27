  //let search = document.querySelector(`input[name='search']`);
//let submit = document.querySelector(`input[name='submit']`);


/*let c1 = document.querySelector('#print');
c1.addEventListener('click',genre);*/
    
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
//let tn = sn;
//let kensakukaisu = 0;

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
  //if(kensakukaisu%2 === 0) {
  for (n of data.results.shop) {
    while( sn.childNodes ){
      sn.removeChild(sn.childNodes);
    }
    let a = document.createElement('h2');//h2要素を作成
    let c = document.createElement('p');//p要素を作成
    let d = document.createElement('p');
    let e = document.createElement('p');
    let f = document.createElement('p');
    let g = document.createElement('p');
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
  /*while( tn.childNodes ){
    tn.removeChild(tn.childNodes);
  }*/
  //kensakukaisu = kensakukaisu + 1;
  
//}else {
  /*while( sn.childNodes ){
    sn.removeChild(sn.childNodes);
  }
  for (n of data.results.shop) {
    let a = document.createElement('h2');//h2要素を作成
    let c = document.createElement('p');//p要素を作成
    let d = document.createElement('p');
    let e = document.createElement('p');
    let f = document.createElement('p');
    let g = document.createElement('p');
    a.textContent = n.name;//a要素のテキストを設定
    c.textContent = '【アクセス】 : ' + n.access;
    d.textContent = '【住所】 : ' + n.address;
    e.textContent = '【営業日・時間・ラストオーダー等】 : ' + n.open;
    f.textContent = '【予算】 : ' + n.budget.average;
    g.textContent = '【キャッチ】 : ' + n.genre.catch;
    tn.insertAdjacentElement('beforeend',a);//要素tnの子要素の最後にaを追加
    tn.insertAdjacentElement('beforeend',g);
    tn.insertAdjacentElement('beforeend',c);
    tn.insertAdjacentElement('beforeend',d);
    tn.insertAdjacentElement('beforeend',e);
    tn.insertAdjacentElement('beforeend',f);
  }
  while( sn.childNodes ){
    sn.removeChild(sn.childNodes);
  }
  kensakukaisu = kensakukaisu + 1;
}*/

	

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