$(function(){
    Vue.config.delimiters = ['(%', '%)']
    
    var driverVue = new Vue({
        el: "#dvDrivers"
    });
    /*
    $.ajax({
    	type: 'GET',
    	url: "/driver",
    	dataType: 'json',
    	success: function (result, textStatus, jqXHR) {
			console.log(result);
			driverVue.$data = {
				drivers: result
			}		
		},
    });*/
});