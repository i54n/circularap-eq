function pad(number) {
	if(number < 10) {
		return "0" + number
	} else {
		return number;
	}
}

function resetPlayer() {
	console.log($("#pie").css("animation-delay"));
}

$(function () {
	$("#player").on("timeupdate", function () {
		var percent = Math.round((this.currentTime / this.duration * 100), 2);
		$("#pie").css({
			"animation-delay": "-" + percent + "s"
		});
		
		var seconds = Math.round(this.currentTime % 60, 0);
		var minutes = parseInt(this.currentTime / 60, 10);
		$(".time").html(pad(minutes) + ":" + pad(seconds));
	});
	
	$(".play").on("click", function () {
		$("#player")[0].play();
		$(this).hide();
		$(".pause").show();
	});
	
	$(".pause").on("click", function () {
		$("#player")[0].pause();
		$(this).hide();
		$(".play").show();
	});
	
});

