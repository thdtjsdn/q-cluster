$(document).ready(function(){
	
	var map = L.map('map').setView([38.5, -97], 4);
            
    map.addLayer(L.tileLayer('http://{s}.tiles.mapbox.com/v3/643gwozdz.h00dfolo/{z}/{x}/{y}.png', {}));
           
	$.ajax({
	context: this,
	type: 'GET',
	dataType: "json",
	url: 'data/fires2012.json',
	success: function(data, textStatus, jqXHR){
		
		
		var pointClusterer = new QCluster.PointClusterer(data, 'testLayer', map, {});
		
		
	},
	error: function(jqXHR, textStatus, errorThrown){
		
	}
});
	
});