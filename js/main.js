var headUrl = 'http://theoldnewbie.github.io/ajax_v1.01/';
var htmlList = ['simple1.html','simple2.html','simple3.html'];

function loadHtmlFiles (element) {
	$.ajax({
		url: headUrl + element,
		success: function(data) {
			$('.main-content').append(data);
		},
		error: function(data) {
			console.error(data);
		}
	});
}

htmlList.forEach( loadHtmlFiles );