
jQuery(document).ready(function(){
	
$('#nav li').click(function(e) {
    $('#nav li.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
	});
});