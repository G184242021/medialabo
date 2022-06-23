//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

//console.log(campus);  //これはダメ

console.log(campus.address);  //キャンパスの住所を表示

for(let b of campus.buildingD) {  //D館の教室名を表示(for-ofを使う)
console.log(b);
}

for(let o of gakka) {  //日本語の学科名を表示(for-ofを使う)
	console.log(o.name);
}