$('button').on('click', function(){
		
	$.ajax({
			url: 'http://theoldnewbie.github.io/ajax_v1.01/simple1.html',
			success: function(data) {
				document.body.appendChildren(data);
			},
			error: function(data) {
	  			console.error(data);
			}
	});

	$.ajax({
			url: 'http://theoldnewbie.github.io/ajax_v1.01/simple2.html',
			success: function(data) {
				document.body.appendChildren(data);
			},
			error: function(data) {
				console.error(data);
			}
	});

	$.ajax({
			url: 'http://theoldnewbie.github.io/ajax_v1.01/simple3.html',
			success: function(data) {
				document.body.appendChildren(data);
			},
			error: function(data) {
				console.error(data);
			}
	});

	// $.ajax({
	// 		url: 'http://theoldnewbie.github.io/ajax_v1.01/some1.json',
	// 		success: function(data) {
	// 			document.body.appendChildren(data);
	// 		},
	// 		error: function(data) {
	// 			console.error(data);
	// 		}
	// });

	// $.ajax({
	// 		url: 'http://theoldnewbie.github.io/ajax_v1.01/some2.json',
	// 		success: function(data) {
	// 			document.body.appendChildren(data);
	// 		},
	// 		error: function(data) {
	// 			console.error(data);
	// }
	// });

	// $.ajax({
	// 		url: 'http://theoldnewbie.github.io/ajax_v1.01/some3.json',
	// 		success: function(data) {
	// 			document.body.appendChildren(data);
	// 		},
	// 		error: function(data) {
	// 			console.error(data);
	// }
	// });

	// $.ajax({
	// 		url: 'http://theoldnewbie.github.io/ajax_v1.01/img/Troll1.jpeg',
	// 		success: function(data) {
	// 			document.body.appendChildren(data);
	// 		},
	// 		error: function(data) {
	// 			console.error(data);
	// 		}
	// });

	// $.ajax({
	// 		url: 'http://theoldnewbie.github.io/ajax_v1.01/img/Troll2.jpeg',
	// 		success: function(data) {
	// 			document.body.appendChildren(data);
	// 		},
	// 		error: function(data) {
	// 		 	console.error(data);
	// 		}
	// });

	
	// $.ajax({
	// 		url: 'http://theoldnewbie.github.io/ajax_v1.01/img/Troll3.jpeg',
	// 		success: function(data) {
	// 			document.body.appendChildren(data);
	// 		},
	// 		error: function(data) {
	//  			console.error(data);
	// 		}
	// });	
})