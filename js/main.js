var headUrl = 'http://theoldnewbie.github.io/ajax_v1.01/';
var htmlList = ['simple1.html','simple2.html','simple3.html'];
var jsonList = ['some1.json','some2.json','some3.json'];
var imgList = ['img/Troll1.jpg','img/Troll2.jpg','img/Troll3.jpg'];
var isLoaded = {
	b1: false,
	b2: false,
	b3: false
}

$('#1').on('click', function() {
	if(!isLoaded.b1){
	htmlList.forEach( loadHtmlFiles );
	}
});
$('#2').on('click', function() {
	if(!isLoaded.b2){
	jsonList.forEach( loadJSONFiles );
	}
});
$('#3').on('click', function() {
	if(!isLoaded.b3){
		imgList.forEach( loadImgFiles );
	}
	
});


function loadHtmlFiles (element) {
	$.ajax({
		url: headUrl + element,
		async: false,
		success: function(data) {
			$('.main-content').append(data);
			isLoaded.b1 = true;
		},
		error: function(data) {
			console.error(data);
		}
	});
}

function loadJSONFiles (element) {
 $.ajax({
  	dataType: 'json',
  	method: 'GET',
    url: headUrl + element,
    async: false,
    success: function(data) {
     var wrapDiv = $('<div>');
     wrapDiv.html('<h2>' + data.title + '</h2><p>' + data.ty + '</p>');
     $('.main-content').append(wrapDiv);
     isLoaded.b2 =true;
    },
    error: function(data) {
     console.error(data);
    }
 });
}



function loadImgFiles (element) {
	$.ajax({
		url: headUrl + element,
		async: false,
		success: function(data) {
			$('.main-content').append('<img src = ' + this.url + '>');
			isLoaded.b3 =true;
		}
	});
}



