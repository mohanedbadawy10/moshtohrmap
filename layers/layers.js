ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32636").setExtent([325301.225589, 3356301.996470, 336203.907854, 3362214.447285]);
var wms_layers = [];


        var lyr_basemap_0 = new ol.layer.Tile({
            'title': 'basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_moshtohr_vegetation_map_1 = new ol.format.GeoJSON();
var features_moshtohr_vegetation_map_1 = format_moshtohr_vegetation_map_1.readFeatures(json_moshtohr_vegetation_map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_moshtohr_vegetation_map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moshtohr_vegetation_map_1.addFeatures(features_moshtohr_vegetation_map_1);
var lyr_moshtohr_vegetation_map_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moshtohr_vegetation_map_1, 
                style: style_moshtohr_vegetation_map_1,
                popuplayertitle: 'moshtohr_vegetation_map',
                interactive: true,
                title: '<img src="styles/legend/moshtohr_vegetation_map_1.png" /> moshtohr_vegetation_map'
            });

lyr_basemap_0.setVisible(true);lyr_moshtohr_vegetation_map_1.setVisible(true);
var layersList = [lyr_basemap_0,lyr_moshtohr_vegetation_map_1];
lyr_moshtohr_vegetation_map_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'صحه': 'صحه', 'رطوبه': 'رطوبه', });
lyr_moshtohr_vegetation_map_1.set('fieldImages', {'Id': '', 'gridcode': '', 'صحه': '', 'رطوبه': '', });
lyr_moshtohr_vegetation_map_1.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'صحه': 'inline label - visible with data', 'رطوبه': 'inline label - visible with data', });
lyr_moshtohr_vegetation_map_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});