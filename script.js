$(document).ready(function () {

	//E-mail Ajax Send
	$(".modal__feedback-form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$('.modal__feedback-form, .modal-feedback___title').hide();
			$('.form__thank-you').css({
				display: 'block',
			});
			setTimeout(function () {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});