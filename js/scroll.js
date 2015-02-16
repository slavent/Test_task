(function($){

	$.fn.scroller = function(options){

		// defaults
		options = $.extend({

		}, options);

		return this.each(function(){

			var $this = $(this),
				msgWrap = $this.find("#ch-msg-wrap"),
				handler = $this.find("#ch-handler"),
				outerHeight = $this.height(),
				msgWrapHeight = msgWrap.height(),
				handlerHeight = outerHeight - (msgWrapHeight - outerHeight),
				topVal = parseInt(handler.css("top")),
				yFirst = 0;

			handler.height(handlerHeight);

			handler.on("mousedown", function(e){
				yFirst = parseInt(e.pageY); //console.log(yFirst);
				$(this).parents().on("mousemove", function(e){
					var y = parseInt(e.pageY); //console.log(typeof(topVal));

					//console.log(y - yFirst);

					//console.log(topVal);
					handler.css({"top" : (y - yFirst) });
					console.log(topVal);
				});
				//console.log("down");
			});

			$("body").on("mouseup", function(e){
				handler.parents().unbind("mousemove");
				yFirst = topVal;
				//console.log("up");
			});

		});

	}

})(jQuery);