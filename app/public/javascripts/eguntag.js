var eguntag = function() {};

eguntag.remove = function(element){
	var $this = $(element);
	var url = "/deleteById/" + $this.attr("data-tagid");
	$.get(url, function(data){
		$this.fadeIn();
	});
	var $thisRow = $this.parent().parent();
	$thisRow.fadeOut('slow', function() {
		$thisRow.remove();
<<<<<<< HEAD
		var $totalTagSize = $("#totalTagSize");
		var size = $totalTagSize.text();
		$totalTagSize.text( --size );
=======
>>>>>>> 80e96bd8291f66a90c98f557f3f2aa3015957699
	})
};

eguntag.new = function(element) {
	var $newTagForm = $("#newTagForm");
	if($newTagForm.css('display') == 'none') {
		$newTagForm.show();
	}
	else {
		$newTagForm.hide();
	}
};

eguntag.save = function(element) {
	var $newTagForm = $("#newTagForm");
	var tableWidth = $("#tagTable").width();
	$newTagForm.width(tableWidth);

	var $tagNameEl =  $newTagForm.find(":[name=tagname]");

	var tagName = $tagNameEl.val();
	if(tagName.length < 1) {
		alert("태그명을 입력하세요.");
		return $tagNameEl.focus();
	}

	var url = "/save/" + tagName;
	$.get(url, function(data){
		location.reload(true);
	});
};