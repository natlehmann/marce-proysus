function mostrarsubmenu(valor) {
	oDocument = document.all;
	if (valor == "1") {
		oDocument.submenu01.style.visibility = 'visible';
		oDocument.submenu01.style.display = 'block';

	} else {
		oDocument.submenu01.style.visibility = 'hidden';
		oDocument.submenu01.style.display = 'none';
	}
	if (valor == "2") {
		oDocument.submenu02.style.visibility = 'visible';
		oDocument.submenu02.style.display = 'block';

	} else {
		oDocument.submenu02.style.visibility = 'hidden';
		oDocument.submenu02.style.display = 'none';
	}
	if (valor == "3") {
		oDocument.submenu03.style.visibility = 'visible';
		oDocument.submenu03.style.display = 'block';

	} else {
		oDocument.submenu03.style.visibility = 'hidden';
		oDocument.submenu03.style.display = 'none';
	}
}

function MM_preloadImages() { //v3.0
	var d = document;
	if (d.images) {
		if (!d.MM_p)
			d.MM_p = new Array();
		var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
		for (i = 0; i < a.length; i++)
			if (a[i].indexOf("#") != 0) {
				d.MM_p[j] = new Image;
				d.MM_p[j++].src = a[i];
			}
	}
}

function MM_findObj(n, d) { //v4.01
	var p, i, x;
	if (!d)
		d = document;
	if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
		d = parent.frames[n.substring(p + 1)].document;
		n = n.substring(0, p);
	}
	if (!(x = d[n]) && d.all)
		x = d.all[n];
	for (i = 0; !x && i < d.forms.length; i++)
		x = d.forms[i][n];
	for (i = 0; !x && d.layers && i < d.layers.length; i++)
		x = MM_findObj(n, d.layers[i].document);
	if (!x && d.getElementById)
		x = d.getElementById(n);
	return x;
}

function MM_reloadPage(init) { //reloads the window if Nav4 resized
	if (init == true)
		with (navigator) {
			if ((appName == "Netscape") && (parseInt(appVersion) == 4)) {
				document.MM_pgW = innerWidth;
				document.MM_pgH = innerHeight;
				onresize = MM_reloadPage;
			}
		}
	else if (innerWidth != document.MM_pgW || innerHeight != document.MM_pgH)
		location.reload();
}
MM_reloadPage(true);

function MM_showHideLayers() { //v6.0
	var i, p, v, obj, args = MM_showHideLayers.arguments;
	for (i = 0; i < (args.length - 2); i += 3)
		if ((obj = MM_findObj(args[i])) != null) {
			v = args[i + 2];
			if (obj.style) {
				obj = obj.style;
				v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
			}
			obj.visibility = v;
		}
}