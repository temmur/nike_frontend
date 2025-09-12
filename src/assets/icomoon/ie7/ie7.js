/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-cross': '&#xe912;',
		'icon-cancel': '&#xe912;',
		'icon-close': '&#xe912;',
		'icon-quit': '&#xe912;',
		'icon-remove': '&#xe912;',
		'icon-play': '&#xe900;',
		'icon-arrow-down': '&#xe901;',
		'icon-arrow-down-circle': '&#xe902;',
		'icon-arrow-right': '&#xe903;',
		'icon-arrow-right-circle': '&#xe904;',
		'icon-arrow-up': '&#xe905;',
		'icon-battle': '&#xe906;',
		'icon-bookmark': '&#xe907;',
		'icon-book-outline': '&#xe908;',
		'icon-books': '&#xe909;',
		'icon-buffer': '&#xe90a;',
		'icon-calendar': '&#xe90b;',
		'icon-calendar-outline': '&#xe90c;',
		'icon-call': '&#xe90d;',
		'icon-cash-outline': '&#xe90e;',
		'icon-charity': '&#xe90f;',
		'icon-check': '&#xe910;',
		'icon-checkmark-circle': '&#xe911;',
		'icon-chess-rook': '&#xe914;',
		'icon-chevron-down': '&#xe915;',
		'icon-chevron-up': '&#xe918;',
		'icon-chevron-up-down': '&#xe919;',
		'icon-clocks': '&#xe91a;',
		'icon-copy-outline': '&#xe91b;',
		'icon-crown': '&#xe91c;',
		'icon-edit': '&#xe91f;',
		'icon-energy': '&#xe920;',
		'icon-eye': '&#xe921;',
		'icon-facebook': '&#xe923;',
		'icon-flag': '&#xe925;',
		'icon-globe': '&#xe926;',
		'icon-graduation': '&#xe927;',
		'icon-grid': '&#xe928;',
		'icon-heart-outline': '&#xe929;',
		'icon-heart-solid': '&#xe92a;',
		'icon-home': '&#xe92b;',
		'icon-home-outline': '&#xe92c;',
		'icon-info': '&#xe92d;',
		'icon-instagram': '&#xe92e;',
		'icon-key': '&#xe930;',
		'icon-link': '&#xe931;',
		'icon-location': '&#xe932;',
		'icon-lock-closed': '&#xe933;',
		'icon-log-in': '&#xe934;',
		'icon-log-out': '&#xe935;',
		'icon-mail': '&#xe936;',
		'icon-minus': '&#xe937;',
		'icon-notification': '&#xe938;',
		'icon-phone': '&#xe939;',
		'icon-play1': '&#xe93a;',
		'icon-play-fill': '&#xe93b;',
		'icon-plus': '&#xe93c;',
		'icon-presentation': '&#xe93d;',
		'icon-quote-mark': '&#xe93e;',
		'icon-rabbit': '&#xe93f;',
		'icon-refresh': '&#xe940;',
		'icon-rocket': '&#xe941;',
		'icon-rocket-fill': '&#xe942;',
		'icon-search': '&#xe943;',
		'icon-share': '&#xe944;',
		'icon-shopping-cart': '&#xe945;',
		'icon-shopping-cart-check': '&#xe946;',
		'icon-star': '&#xe947;',
		'icon-student-ouline': '&#xe948;',
		'icon-telegram': '&#xe949;',
		'icon-thumb': '&#xe94b;',
		'icon-thumb-down': '&#xe94c;',
		'icon-train': '&#xe94d;',
		'icon-trophy': '&#xe94e;',
		'icon-twitter': '&#xe94f;',
		'icon-user': '&#xe951;',
		'icon-user-circle': '&#xe952;',
		'icon-vertical-menu': '&#xe953;',
		'icon-warning': '&#xe954;',
		'icon-x-mark': '&#xe955;',
		'icon-youtube': '&#xe956;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
