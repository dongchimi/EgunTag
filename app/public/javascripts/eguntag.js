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
		var $totalTagSize = $("#totalTagSize");
		var size = $totalTagSize.text();
		$totalTagSize.text( --size );
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