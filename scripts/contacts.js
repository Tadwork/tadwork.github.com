var address = '2 William Street, White Plains, NY';
function on_form_submit() {
	$("form").validate();
	if ($("form").valid()) {
		submitted = true;
		//console.log("valid");
	}
}
head.ready(function () {
	head.js("/scripts/jquery-gmap.js");
	head.js("http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.0/jquery.validate.min.js");
	head.ready(function () {
		(function ($) {
			$('form').validate({
				rules : {
					"entry.1019392704" : {
						required : true
					},
					"entry.2097698303" : {
						required : true
					},
					"entry.280453518" : {
						required : true
					},
					"entry.1012848206" : {
						required : true
					},
					"entry.1912244836" : {
						minlength : 3,
						email : true,
						required : true
					}
				},
				highlight : function (element) {},

				showErrors : function (errorMap, errorList) {

					$.each(this.successList, function (index, value) {
						$(value).popover('hide');
						$(value).text('OK!').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
					});

					$.each(errorList, function (index, value) {
						$(value).closest('.control-group').removeClass('success').addClass('error');
						//console.log(value.message);

						var popover = $(value.element).popover({
								trigger : 'manual',
								placement : 'right',
								content : value.message,
								template : '<div class="popover"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>'
							});

						popover.data('popover').options.content = value.message;

						$(value.element).popover('show');

					});

				}
			});
		}
			(jQuery));

	});
});
