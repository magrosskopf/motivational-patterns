openPattern = function ( uiElement ) {

	var divId = uiElement.id.substring( 0,uiElement.id.length-5);

	if(jQuery('#' + divId).css("display") != "none") {
		jQuery('#' + divId).slideUp(1000);
		jQuery(  '#' + uiElement.id ).css('color', '');
		jQuery("." + divId + "_pfeil").attr("src", "images/pfeil_nach_unten.svg");
	}
	else {
		jQuery('#' + divId).slideDown(1000);
		jQuery( '#' + uiElement.id ).css('color', '#D50000');
		jQuery("." + divId + "_pfeil").attr("src", "images/pfeil_nach_oben.svg");
	}
};

hidePatterns = function () {
	jQuery('#gamefulpatterns').hide();
	jQuery('#socialpatterns').hide();
	jQuery('#interfacepatterns').hide();
	jQuery('#informationpatterns').hide();
	jQuery('#monetarypatterns').hide();
	jQuery('#socialcapital').hide();
	jQuery('#temporalpatterns').hide();
};