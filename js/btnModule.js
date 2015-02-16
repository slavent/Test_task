var btnModule = (function() {
    
    return {
        getData: function(){
            var fileInd = Math.round(Math.random() * (5 - 1) + 1),
                fromUser = $(this).data("user"),
                path = "msg/" + fromUser + "/msg",
                dataUrl = path + fileInd + ".json";

        	$.getJSON(dataUrl, function(data){ 
                dlgModule.renderMsg(data);
            });
        }
    }

}());