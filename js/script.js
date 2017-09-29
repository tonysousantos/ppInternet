window.onload = function () {
    var buta = document.querySelector("#btnOrigem");
    var buta1 = document.querySelector("#btnUsab");
    var buta2 = document.querySelector("#btnFunc");
    var flag = true;
    buta.onclick = function () {

        var origem = document.querySelector("#idOrigem");
        if (flag) {
            origem.style.display = "none";
            flag = !flag;
        } else {

            origem.style.display = "inline";

            flag = !flag;

        }
    }
        buta1.onclick = function () {

        var usab = document.querySelector("#idUsabilidade");
        if (flag) {
            usab.style.display = "none";
            flag = !flag;
        } else {

            usab.style.display = "inline";

            flag = !flag;

        }
    }

        buta2.onclick = function () {

        var func = document.querySelector("#idFuncionalidade");
        if (flag) {
            func.style.display = "none";
            flag = !flag;
        } else {

            func.style.display = "inline";

            flag = !flag;

        }
    }
}

 $(document).ready(function(){

    $("td[id|='out']").css("border","0.5px dashed red" );

    $("li[id|='out'").mouseenter(function() {
        $("td#"+this.id).css({"color":"blue","border":"1.0px dashed blue"});
        $("#"+this.id+" + ol").css("color","blue");
    });
    
    $("li[id|='out'").mouseout(function() {
        $("td#"+this.id).css({"color":"black","border":"1.0px dashed red"});
        $("#"+this.id+" + ol").css("color","black");
    });

});

/*
window.onload = function () {
    var btnOrigin = document.querySelector("#btnOrigem");
    var btnOrigin2 = document.querySelector("#btnOrigem2");
    var btnUsa = document.querySelector("#btnUsab");
    var btnUsa2 = document.querySelector("#btnUsab2");
    var btnFuncionalidade = document.querySelector("#btnFunc");
    var btnFuncionalidade2 = document.querySelector("#btnFunc2");

    btnOrigin.onclick = function () {
        var contOrigin = document.querySelector("#idOrigem");
        contOrigin.style.display = "none";
    }
    btnOrigin2.onclick = function () {
        var mostOrigin = document.querySelector("#idOrigem");
        mostOrigin.style.display = "block";
    }

    btnUsa.onclick = function () {
        var oculUsab = document.querySelector("#idUsabilidade");
        oculUsab.style.display = "none";
    }
    btnUsa2.onclick = function () {
        var mosUsab2 = document.querySelector("#idUsabilidade");
        mosUsab2.style.display = "block";
    }

    btnFunc.onclick = function () {
        var oculFunc = document.querySelector("#idFuncionalidade");
        oculFunc.style.display = "none";
    }
    btnFunc2.onclick = function () {
        var mosFun2 = document.querySelector("#idFuncionalidade");
        mosFun2.style.display = "block";
    }

}
*/