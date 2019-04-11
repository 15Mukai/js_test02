$(function (){

    // この中に処理を書きます
    $('#index').append("<li>メソッド</li>");
    $('h2').remove();

    var a = $('#index').text();

    alert(a);
    //$()でhtml要素を選択するのは、jQueryメソッドを使用するため。
    $("li").each(function( sample) {
      //console.logindex($(this).length());
      var str = $(this).text().length;
      alert(str);
    });

    //sampleでなくてもよい。定義をしているようなもの？

    $("li").each(function( sample) {
      var str = $(this).text().length;
      $(this).append("[" + str + "文字]");
    });
});


//jQueryとJSの区別をすること。$("")でHTMLの要素を取得することができる。この方法で呼び出した要素は、jQueryオブジェクトとよばれ
//jQueryメソッドを使うことができる。

//要素にメソッドを適応する場合は、その要素全てに対して設定が行われるが、取得する場合には一番最初の要素のみ。

//要素にメソッドを適応しようとしているのか、それとも要素のもつ要素を取得しようとしているのか。
//hrefやinputが属性。aやpが要素。通常hrefやinputは要素に含まれる？
