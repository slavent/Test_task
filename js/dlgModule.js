var dlgModule = (function() {

	// Module's options
	var options = {
		container: $("#ch-msg-wrap"),
		marginAnimSpeed: 500,
		opacityAnimSpeed: 100,
		elMarginBottom: 15,
		elOpacity: 1,
		elTmpl: $("#msg-tpml") // underscore tmpl
	}

    return {
       	renderMsg: function(data){
    		var tmpl = _.template(options.elTmpl.html());

			options.container
				.append(tmpl(data))
				.children().last()
					.animate({marginBottom: options.elMarginBottom}, options.opacityAnimSpeed)
    				.animate({opacity: options.elOpacity}, options.marginAnimSpeed);
    	}
    }

}());