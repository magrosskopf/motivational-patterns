openGamefulPatterns = function () {
	jQuery('#gamefulpatterns').show();
	jQuery('#socialpatterns').hide();
	jQuery('#interfacepatterns').hide();
	jQuery('#informationpatterns').hide();

	jQuery('#gamfulpatterns_link').css('color', '#D50000');
	jQuery('#socialpatterns_link').css('color', '#000000');
	jQuery('#interface_link').css('color', '#000000');
	jQuery('#information_link').css('color', '#000000');
};

openSocialPatterns = function () {
	jQuery('#gamefulpatterns').hide();
	jQuery('#socialpatterns').show();
	jQuery('#interfacepatterns').hide();
	jQuery('#informationpatterns').hide();

	jQuery('#gamfulpatterns_link').css('color', '#000000');
	jQuery('#socialpatterns_link').css('color', '#D50000');
	jQuery('#interface_link').css('color', '#000000');
	jQuery('#information_link').css('color', '#000000');
};

openInterfacePatterns = function () {
	jQuery('#gamefulpatterns').hide();
	jQuery('#socialpatterns').hide();
	jQuery('#interfacepatterns').show();
	jQuery('#informationpatterns').hide();

	jQuery('#gamfulpatterns_link').css('color', '#000000');
	jQuery('#socialpatterns_link').css('color', '#000000');
	jQuery('#interface_link').css('color', '#D50000');
	jQuery('#information_link').css('color', '#000000');
};

openInformationPatterns = function () {
	jQuery('#gamefulpatterns').hide();
	jQuery('#socialpatterns').hide();
	jQuery('#interfacepatterns').hide();
	jQuery('#informationpatterns').show();

	jQuery('#gamfulpatterns_link').css('color', '#000000');
	jQuery('#socialpatterns_link').css('color', '#000000');
	jQuery('#interface_link').css('color', '#000000');
	jQuery('#information_link').css('color', '#D50000');
};