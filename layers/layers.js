ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([119.948848, 16.232001, 121.273176, 16.986634]);
var wms_layers = [];

var format_R1Blockbuster_0 = new ol.format.GeoJSON();
var features_R1Blockbuster_0 = format_R1Blockbuster_0.readFeatures(json_R1Blockbuster_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_R1Blockbuster_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R1Blockbuster_0.addFeatures(features_R1Blockbuster_0);
var lyr_R1Blockbuster_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R1Blockbuster_0, 
                style: style_R1Blockbuster_0,
                popuplayertitle: 'R1 Blockbuster',
                interactive: true,
    title: 'R1 Blockbuster<br />\
    <img src="styles/legend/R1Blockbuster_0_0.png" /> <br />\
    <img src="styles/legend/R1Blockbuster_0_1.png" /> Adams<br />\
    <img src="styles/legend/R1Blockbuster_0_2.png" /> Agno<br />\
    <img src="styles/legend/R1Blockbuster_0_3.png" /> Agoo<br />\
    <img src="styles/legend/R1Blockbuster_0_4.png" /> Aguilar<br />\
    <img src="styles/legend/R1Blockbuster_0_5.png" /> Alaminos City<br />\
    <img src="styles/legend/R1Blockbuster_0_6.png" /> Alcala<br />\
    <img src="styles/legend/R1Blockbuster_0_7.png" /> Alilem<br />\
    <img src="styles/legend/R1Blockbuster_0_8.png" /> Anda<br />\
    <img src="styles/legend/R1Blockbuster_0_9.png" /> Aringay<br />\
    <img src="styles/legend/R1Blockbuster_0_10.png" /> Asingan<br />\
    <img src="styles/legend/R1Blockbuster_0_11.png" /> Bacarra<br />\
    <img src="styles/legend/R1Blockbuster_0_12.png" /> Bacnotan<br />\
    <img src="styles/legend/R1Blockbuster_0_13.png" /> Badoc<br />\
    <img src="styles/legend/R1Blockbuster_0_14.png" /> Bagulin<br />\
    <img src="styles/legend/R1Blockbuster_0_15.png" /> Balaoan<br />\
    <img src="styles/legend/R1Blockbuster_0_16.png" /> Balungao<br />\
    <img src="styles/legend/R1Blockbuster_0_17.png" /> Banayoyo<br />\
    <img src="styles/legend/R1Blockbuster_0_18.png" /> Bangar<br />\
    <img src="styles/legend/R1Blockbuster_0_19.png" /> Bangui<br />\
    <img src="styles/legend/R1Blockbuster_0_20.png" /> Bani<br />\
    <img src="styles/legend/R1Blockbuster_0_21.png" /> Banna<br />\
    <img src="styles/legend/R1Blockbuster_0_22.png" /> Bantay<br />\
    <img src="styles/legend/R1Blockbuster_0_23.png" /> Basista<br />\
    <img src="styles/legend/R1Blockbuster_0_24.png" /> Batac City<br />\
    <img src="styles/legend/R1Blockbuster_0_25.png" /> Bauang<br />\
    <img src="styles/legend/R1Blockbuster_0_26.png" /> Bautista<br />\
    <img src="styles/legend/R1Blockbuster_0_27.png" /> Bayambang<br />\
    <img src="styles/legend/R1Blockbuster_0_28.png" /> Binalonan<br />\
    <img src="styles/legend/R1Blockbuster_0_29.png" /> Binmaley<br />\
    <img src="styles/legend/R1Blockbuster_0_30.png" /> Bolinao<br />\
    <img src="styles/legend/R1Blockbuster_0_31.png" /> Bugallon<br />\
    <img src="styles/legend/R1Blockbuster_0_32.png" /> Burgos (IN)<br />\
    <img src="styles/legend/R1Blockbuster_0_33.png" /> Burgos (IS)<br />\
    <img src="styles/legend/R1Blockbuster_0_34.png" /> Burgos (LU)<br />\
    <img src="styles/legend/R1Blockbuster_0_35.png" /> Burgos (P)<br />\
    <img src="styles/legend/R1Blockbuster_0_36.png" /> Caba<br />\
    <img src="styles/legend/R1Blockbuster_0_37.png" /> Cabugao<br />\
    <img src="styles/legend/R1Blockbuster_0_38.png" /> Calasiao<br />\
    <img src="styles/legend/R1Blockbuster_0_39.png" /> Candon City<br />\
    <img src="styles/legend/R1Blockbuster_0_40.png" /> Caoayan<br />\
    <img src="styles/legend/R1Blockbuster_0_41.png" /> Carasi<br />\
    <img src="styles/legend/R1Blockbuster_0_42.png" /> Cervantes<br />\
    <img src="styles/legend/R1Blockbuster_0_43.png" /> Currimao<br />\
    <img src="styles/legend/R1Blockbuster_0_44.png" /> Dagupan City<br />\
    <img src="styles/legend/R1Blockbuster_0_45.png" /> Dasol<br />\
    <img src="styles/legend/R1Blockbuster_0_46.png" /> Dingras<br />\
    <img src="styles/legend/R1Blockbuster_0_47.png" /> Dumalneg<br />\
    <img src="styles/legend/R1Blockbuster_0_48.png" /> Galimuyod<br />\
    <img src="styles/legend/R1Blockbuster_0_49.png" /> Gregorio Del Pilar<br />\
    <img src="styles/legend/R1Blockbuster_0_50.png" /> Infanta<br />\
    <img src="styles/legend/R1Blockbuster_0_51.png" /> Labrador<br />\
    <img src="styles/legend/R1Blockbuster_0_52.png" /> Laoac<br />\
    <img src="styles/legend/R1Blockbuster_0_53.png" /> Laoag City<br />\
    <img src="styles/legend/R1Blockbuster_0_54.png" /> Lidlidda<br />\
    <img src="styles/legend/R1Blockbuster_0_55.png" /> Lingayen<br />\
    <img src="styles/legend/R1Blockbuster_0_56.png" /> Luna<br />\
    <img src="styles/legend/R1Blockbuster_0_57.png" /> Mabini<br />\
    <img src="styles/legend/R1Blockbuster_0_58.png" /> Magsingal<br />\
    <img src="styles/legend/R1Blockbuster_0_59.png" /> Malasiqui<br />\
    <img src="styles/legend/R1Blockbuster_0_60.png" /> Manaoag<br />\
    <img src="styles/legend/R1Blockbuster_0_61.png" /> Mangaldan<br />\
    <img src="styles/legend/R1Blockbuster_0_62.png" /> Mangatarem<br />\
    <img src="styles/legend/R1Blockbuster_0_63.png" /> Mapandan<br />\
    <img src="styles/legend/R1Blockbuster_0_64.png" /> Marcos<br />\
    <img src="styles/legend/R1Blockbuster_0_65.png" /> Nagbukel<br />\
    <img src="styles/legend/R1Blockbuster_0_66.png" /> Naguilian<br />\
    <img src="styles/legend/R1Blockbuster_0_67.png" /> Narvacan<br />\
    <img src="styles/legend/R1Blockbuster_0_68.png" /> Natividad<br />\
    <img src="styles/legend/R1Blockbuster_0_69.png" /> Nueva Era<br />\
    <img src="styles/legend/R1Blockbuster_0_70.png" /> Pagudpud<br />\
    <img src="styles/legend/R1Blockbuster_0_71.png" /> Paoay<br />\
    <img src="styles/legend/R1Blockbuster_0_72.png" /> Paoay Lake<br />\
    <img src="styles/legend/R1Blockbuster_0_73.png" /> Pasuquin<br />\
    <img src="styles/legend/R1Blockbuster_0_74.png" /> Piddig<br />\
    <img src="styles/legend/R1Blockbuster_0_75.png" /> Pinili<br />\
    <img src="styles/legend/R1Blockbuster_0_76.png" /> Pozzorubio<br />\
    <img src="styles/legend/R1Blockbuster_0_77.png" /> Pugo<br />\
    <img src="styles/legend/R1Blockbuster_0_78.png" /> Quirino<br />\
    <img src="styles/legend/R1Blockbuster_0_79.png" /> Rosales<br />\
    <img src="styles/legend/R1Blockbuster_0_80.png" /> Rosario<br />\
    <img src="styles/legend/R1Blockbuster_0_81.png" /> Salcedo<br />\
    <img src="styles/legend/R1Blockbuster_0_82.png" /> San Carlos City<br />\
    <img src="styles/legend/R1Blockbuster_0_83.png" /> San Emilio<br />\
    <img src="styles/legend/R1Blockbuster_0_84.png" /> San Esteban<br />\
    <img src="styles/legend/R1Blockbuster_0_85.png" /> San Fabian<br />\
    <img src="styles/legend/R1Blockbuster_0_86.png" /> San Fernando City<br />\
    <img src="styles/legend/R1Blockbuster_0_87.png" /> San Gabriel<br />\
    <img src="styles/legend/R1Blockbuster_0_88.png" /> San Ildefonso<br />\
    <img src="styles/legend/R1Blockbuster_0_89.png" /> San Jacinto<br />\
    <img src="styles/legend/R1Blockbuster_0_90.png" /> San Juan<br />\
    <img src="styles/legend/R1Blockbuster_0_91.png" /> San Manuel<br />\
    <img src="styles/legend/R1Blockbuster_0_92.png" /> San Nicolas (IN)<br />\
    <img src="styles/legend/R1Blockbuster_0_93.png" /> San Nicolas (P)<br />\
    <img src="styles/legend/R1Blockbuster_0_94.png" /> San Quintin<br />\
    <img src="styles/legend/R1Blockbuster_0_95.png" /> San Vicente<br />\
    <img src="styles/legend/R1Blockbuster_0_96.png" /> Santa<br />\
    <img src="styles/legend/R1Blockbuster_0_97.png" /> Santa Barbara<br />\
    <img src="styles/legend/R1Blockbuster_0_98.png" /> Santa Catalina<br />\
    <img src="styles/legend/R1Blockbuster_0_99.png" /> Santa Cruz<br />\
    <img src="styles/legend/R1Blockbuster_0_100.png" /> Santa Lucia<br />\
    <img src="styles/legend/R1Blockbuster_0_101.png" /> Santa Maria (IS)<br />\
    <img src="styles/legend/R1Blockbuster_0_102.png" /> Santa Maria (P)<br />\
    <img src="styles/legend/R1Blockbuster_0_103.png" /> Santiago<br />\
    <img src="styles/legend/R1Blockbuster_0_104.png" /> Santo Domingo<br />\
    <img src="styles/legend/R1Blockbuster_0_105.png" /> Santo Tomas (LU)<br />\
    <img src="styles/legend/R1Blockbuster_0_106.png" /> Santo Tomas (P)<br />\
    <img src="styles/legend/R1Blockbuster_0_107.png" /> Santol<br />\
    <img src="styles/legend/R1Blockbuster_0_108.png" /> Sarrat<br />\
    <img src="styles/legend/R1Blockbuster_0_109.png" /> Sigay<br />\
    <img src="styles/legend/R1Blockbuster_0_110.png" /> Sinait<br />\
    <img src="styles/legend/R1Blockbuster_0_111.png" /> Sison<br />\
    <img src="styles/legend/R1Blockbuster_0_112.png" /> Solsona<br />\
    <img src="styles/legend/R1Blockbuster_0_113.png" /> Sual<br />\
    <img src="styles/legend/R1Blockbuster_0_114.png" /> Sudipen<br />\
    <img src="styles/legend/R1Blockbuster_0_115.png" /> Sugpon<br />\
    <img src="styles/legend/R1Blockbuster_0_116.png" /> Suyo<br />\
    <img src="styles/legend/R1Blockbuster_0_117.png" /> Tagudin<br />\
    <img src="styles/legend/R1Blockbuster_0_118.png" /> Tayug<br />\
    <img src="styles/legend/R1Blockbuster_0_119.png" /> Tubao<br />\
    <img src="styles/legend/R1Blockbuster_0_120.png" /> Umingan<br />\
    <img src="styles/legend/R1Blockbuster_0_121.png" /> Urbiztondo<br />\
    <img src="styles/legend/R1Blockbuster_0_122.png" /> Urdaneta City<br />\
    <img src="styles/legend/R1Blockbuster_0_123.png" /> Vigan City<br />\
    <img src="styles/legend/R1Blockbuster_0_124.png" /> Villasis<br />\
    <img src="styles/legend/R1Blockbuster_0_125.png" /> Vintar<br />' });

lyr_R1Blockbuster_0.setVisible(true);
var layersList = [lyr_R1Blockbuster_0];
lyr_R1Blockbuster_0.set('fieldAliases', {'fid': 'fid', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', ' WBTransplanter': ' WBTransplanter', ' RTTransplanter': ' RTTransplanter', ' RPSeeder': ' RPSeeder', });
lyr_R1Blockbuster_0.set('fieldImages', {'fid': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', ' WBTransplanter': 'TextEdit', ' RTTransplanter': 'TextEdit', ' RPSeeder': 'TextEdit', });
lyr_R1Blockbuster_0.set('fieldLabels', {'fid': 'hidden field', 'ID_0': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'ID_1': 'hidden field', 'NAME_1': 'hidden field', 'ID_2': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', ' WBTransplanter': 'inline label - visible with data', ' RTTransplanter': 'inline label - visible with data', ' RPSeeder': 'inline label - visible with data', });
lyr_R1Blockbuster_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});