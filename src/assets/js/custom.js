/** ********************************************** **
	Your Custom Javascript File
	Put here all your custom functions
*************************************************** **/



/** Remove Panel
	Function called by app.js on panel Close (remove)
 ************************************************** **/
	function _closePanel(panel_id) {
		/**
			EXAMPLE - LOCAL STORAGE PANEL REMOVE|UNREMOVE

			// SET PANEL HIDDEN
			localStorage.setItem(panel_id, 'closed');

			// SET PANEL VISIBLE
			localStorage.removeItem(panel_id);
		**/
	}
// _panels();

$(function () {
  $(document).on('click', '#print', function () {
    var elm = $("body").find('#HTMLcontent');
    console.log(elm);
  });

  $(document).on('click', '#hold-on-click', function (e) {
    e.stopPropagation();
	});


});
