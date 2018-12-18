// pre内のタブ文字削除(タブインデントが出来る)
window.addEventListener("DOMContentLoaded", function(){
    // preを取得
    var pres = document.getElementsByTagName("pre");
    // 反復処理
    for (var i = 0; i < pres.length; i++){
    // タブ文字を消す
    pres[i].firstChild.data = pres[i].firstChild.data.replace(/^\t+/gm,"");
    }
},false);

function escape_html (string) {
    if(typeof string !== 'string') {
      return string;
    }
    return string.replace(/[&'`"<>]/g, function(match) {
      return {
        '&': '&amp;',
        "'": '&#x27;',
        '`': '&#x60;',
        '"': '&quot;',
        '<': '&lt;',
        '>': '&gt;',
      }[match]
    });
  }