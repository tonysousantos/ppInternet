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