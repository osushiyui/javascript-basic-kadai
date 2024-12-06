//id"text"を持つ要素（見出し　h2）を取得
const text = document.getElementById('text');


//id"btn"を持つ要素（ボタン）を取得
const btn = document.getElementById('btn');

//ボタンがクリックされた時に実行されるイベントリスナーを追加
btn.addEventListener('click',() =>{
  //見出しのテキストを変更
  text.textContent='ボタンをクリックしました';

});
