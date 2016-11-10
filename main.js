var posts=[];

var newPost = function (textEntry) {
	var obj = {text: textEntry, id: null};
	if (posts.length===0) {
		var newId = 1;
	} else {
		var newId=posts[posts.length-1].id+1;
	}
	obj.id=newId;
	posts.push(obj);
	updatePosts();
}

var updatePosts = function() {
	$('.posts').empty();
	for(var i=0; i<posts.length; i++) {
		var _commentP = $('<p class="post" data-id="' + posts[i].id + '"></p>"');
		var _removeOpt = $('<a href="#" class="remove">Remove</a>');
		var _postText = " " + posts[i].text;
		var _post = _commentP.append(_removeOpt);
		var _post = _commentP.append(_postText);
		$('.posts').append(_post);
	}
	$('.remove').click(removePost);
}

$('.add-post').click(
	function()
{
	var postText = $('#post-name').val();
	$('#post-name').val('');

	newPost(postText);

	updatePosts();
});

var removePost = function()
	{
		var relId = $(this).closest('p').data().id;
		var _location =posts.findIndex(function(element) {
			return element['id']===relId
		});
		posts.splice(_location,1);
		updatePosts();
	}

	
