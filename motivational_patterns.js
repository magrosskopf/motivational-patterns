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


openSocialcapital = function () {
	jQuery('#temporalpatterns').hide();
	jQuery('#monetarypattern').hide();
	jQuery('#socialcapital').show();

	jQuery('#temporalpatterns_link').css('color', '#ffffff');
	jQuery('#monetarypatterns_link').css('color', '#ffffff');
	jQuery('#socialcapital_link').css('color', '#D50000');
};
openMonetarypattern = function () {
	jQuery('#temporalpatterns').hide();
	jQuery('#monetarypattern').show();
	jQuery('#socialcapital').hide();

	jQuery('#temporalpatterns_link').css('color', '#ffffff');
	jQuery('#monetarypatterns_link').css('color', '#D50000');
	jQuery('#socialcapital_link').css('color', '#ffffff');
};
openTemporalpattern = function () {
	jQuery('#temporalpatterns').show();
	jQuery('#monetarypattern').hide();
	jQuery('#socialcapital').hide();

	jQuery('#temporalpatterns_link').css('color', '#D50000');
	jQuery('#monetarypatterns_link').css('color', '#ffffff');
	jQuery('#socialcapital_link').css('color', '#ffffff');
};

