var Vignette = L.Popup.extend({

	options: {
		minWidth: 50,
		maxWidth: 250,
		maxHeight: null,
		autoPan: true,
		closeButton: false,
		closeOnClick: false,
		offset: new L.Point(0, 6),
		autoPanPadding: new L.Point(5, 5),
		zoomAnimation: true
	},

	initialize: function (options, source) {
		L.setOptions(this, options);

		this.single = options.single;
		this.order = options.order;
		this.direction = options.direction;

		this._source = source;
		this._animated = L.Browser.any3d && this.options.zoomAnimation;
	},

	click: function() {
		var modal = $('.vig-modal');

		var url = '../../vigs/' + this.single + '.html';

		$.get(url, function(data) {
            modal.html(data);
            modal.modal('show');
        }).success(function() {
            // location.href = location.href + "#/" + html_src;
        });
	},

	next: function(){
		console.log('next');
	},

	prev: function(){
		console.log('prev');
	}
});