ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([117.876067, 15.418888, 124.067908, 19.014671]);
var wms_layers = [];

var format_REgionwang_0 = new ol.format.GeoJSON();
var features_REgionwang_0 = format_REgionwang_0.readFeatures(json_REgionwang_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_REgionwang_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REgionwang_0.addFeatures(features_REgionwang_0);
var lyr_REgionwang_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REgionwang_0, 
                style: style_REgionwang_0,
                popuplayertitle: 'REgion wang',
                interactive: true,
    title: 'REgion wang<br />\
    <img src="styles/legend/REgionwang_0_0.png" /> Adams<br />\
    <img src="styles/legend/REgionwang_0_1.png" /> Agno<br />\
    <img src="styles/legend/REgionwang_0_2.png" /> Agoo<br />\
    <img src="styles/legend/REgionwang_0_3.png" /> Aguilar<br />\
    <img src="styles/legend/REgionwang_0_4.png" /> Alaminos City<br />\
    <img src="styles/legend/REgionwang_0_5.png" /> Alcala<br />\
    <img src="styles/legend/REgionwang_0_6.png" /> Alilem<br />\
    <img src="styles/legend/REgionwang_0_7.png" /> Anda<br />\
    <img src="styles/legend/REgionwang_0_8.png" /> Aringay<br />\
    <img src="styles/legend/REgionwang_0_9.png" /> Asingan<br />\
    <img src="styles/legend/REgionwang_0_10.png" /> Bacarra<br />\
    <img src="styles/legend/REgionwang_0_11.png" /> Bacnotan<br />\
    <img src="styles/legend/REgionwang_0_12.png" /> Badoc<br />\
    <img src="styles/legend/REgionwang_0_13.png" /> Bagulin<br />\
    <img src="styles/legend/REgionwang_0_14.png" /> Balaoan<br />\
    <img src="styles/legend/REgionwang_0_15.png" /> Balungao<br />\
    <img src="styles/legend/REgionwang_0_16.png" /> Banayoyo<br />\
    <img src="styles/legend/REgionwang_0_17.png" /> Bangar<br />\
    <img src="styles/legend/REgionwang_0_18.png" /> Bangui<br />\
    <img src="styles/legend/REgionwang_0_19.png" /> Bani<br />\
    <img src="styles/legend/REgionwang_0_20.png" /> Banna<br />\
    <img src="styles/legend/REgionwang_0_21.png" /> Bantay<br />\
    <img src="styles/legend/REgionwang_0_22.png" /> Basista<br />\
    <img src="styles/legend/REgionwang_0_23.png" /> Batac City<br />\
    <img src="styles/legend/REgionwang_0_24.png" /> Bauang<br />\
    <img src="styles/legend/REgionwang_0_25.png" /> Bautista<br />\
    <img src="styles/legend/REgionwang_0_26.png" /> Bayambang<br />\
    <img src="styles/legend/REgionwang_0_27.png" /> Binalonan<br />\
    <img src="styles/legend/REgionwang_0_28.png" /> Binmaley<br />\
    <img src="styles/legend/REgionwang_0_29.png" /> Bolinao<br />\
    <img src="styles/legend/REgionwang_0_30.png" /> Bugallon<br />\
    <img src="styles/legend/REgionwang_0_31.png" /> Burgos<br />\
    <img src="styles/legend/REgionwang_0_32.png" /> Caba<br />\
    <img src="styles/legend/REgionwang_0_33.png" /> Cabugao<br />\
    <img src="styles/legend/REgionwang_0_34.png" /> Calasiao<br />\
    <img src="styles/legend/REgionwang_0_35.png" /> Candon City<br />\
    <img src="styles/legend/REgionwang_0_36.png" /> Caoayan<br />\
    <img src="styles/legend/REgionwang_0_37.png" /> Carasi<br />\
    <img src="styles/legend/REgionwang_0_38.png" /> Cervantes<br />\
    <img src="styles/legend/REgionwang_0_39.png" /> Currimao<br />\
    <img src="styles/legend/REgionwang_0_40.png" /> Dagupan City<br />\
    <img src="styles/legend/REgionwang_0_41.png" /> Dasol<br />\
    <img src="styles/legend/REgionwang_0_42.png" /> Dingras<br />\
    <img src="styles/legend/REgionwang_0_43.png" /> Dumalneg<br />\
    <img src="styles/legend/REgionwang_0_44.png" /> Galimuyod<br />\
    <img src="styles/legend/REgionwang_0_45.png" /> Gregorio Del Pilar<br />\
    <img src="styles/legend/REgionwang_0_46.png" /> Infanta<br />\
    <img src="styles/legend/REgionwang_0_47.png" /> Labrador<br />\
    <img src="styles/legend/REgionwang_0_48.png" /> Laoac<br />\
    <img src="styles/legend/REgionwang_0_49.png" /> Laoag City<br />\
    <img src="styles/legend/REgionwang_0_50.png" /> Lidlidda<br />\
    <img src="styles/legend/REgionwang_0_51.png" /> Lingayen<br />\
    <img src="styles/legend/REgionwang_0_52.png" /> Luna<br />\
    <img src="styles/legend/REgionwang_0_53.png" /> Mabini<br />\
    <img src="styles/legend/REgionwang_0_54.png" /> Magsingal<br />\
    <img src="styles/legend/REgionwang_0_55.png" /> Malasiqui<br />\
    <img src="styles/legend/REgionwang_0_56.png" /> Manaoag<br />\
    <img src="styles/legend/REgionwang_0_57.png" /> Mangaldan<br />\
    <img src="styles/legend/REgionwang_0_58.png" /> Mangatarem<br />\
    <img src="styles/legend/REgionwang_0_59.png" /> Mapandan<br />\
    <img src="styles/legend/REgionwang_0_60.png" /> Marcos<br />\
    <img src="styles/legend/REgionwang_0_61.png" /> Nagbukel<br />\
    <img src="styles/legend/REgionwang_0_62.png" /> Naguilian<br />\
    <img src="styles/legend/REgionwang_0_63.png" /> Narvacan<br />\
    <img src="styles/legend/REgionwang_0_64.png" /> Natividad<br />\
    <img src="styles/legend/REgionwang_0_65.png" /> Nueva Era<br />\
    <img src="styles/legend/REgionwang_0_66.png" /> Pagudpud<br />\
    <img src="styles/legend/REgionwang_0_67.png" /> Paoay<br />\
    <img src="styles/legend/REgionwang_0_68.png" /> Paoay Lake<br />\
    <img src="styles/legend/REgionwang_0_69.png" /> Pasuquin<br />\
    <img src="styles/legend/REgionwang_0_70.png" /> Piddig<br />\
    <img src="styles/legend/REgionwang_0_71.png" /> Pinili<br />\
    <img src="styles/legend/REgionwang_0_72.png" /> Pozzorubio<br />\
    <img src="styles/legend/REgionwang_0_73.png" /> Pugo<br />\
    <img src="styles/legend/REgionwang_0_74.png" /> Quirino<br />\
    <img src="styles/legend/REgionwang_0_75.png" /> Rosales<br />\
    <img src="styles/legend/REgionwang_0_76.png" /> Rosario<br />\
    <img src="styles/legend/REgionwang_0_77.png" /> Salcedo<br />\
    <img src="styles/legend/REgionwang_0_78.png" /> San Carlos City<br />\
    <img src="styles/legend/REgionwang_0_79.png" /> San Emilio<br />\
    <img src="styles/legend/REgionwang_0_80.png" /> San Esteban<br />\
    <img src="styles/legend/REgionwang_0_81.png" /> San Fabian<br />\
    <img src="styles/legend/REgionwang_0_82.png" /> San Fernando City<br />\
    <img src="styles/legend/REgionwang_0_83.png" /> San Gabriel<br />\
    <img src="styles/legend/REgionwang_0_84.png" /> San Ildefonso<br />\
    <img src="styles/legend/REgionwang_0_85.png" /> San Jacinto<br />\
    <img src="styles/legend/REgionwang_0_86.png" /> San Juan<br />\
    <img src="styles/legend/REgionwang_0_87.png" /> San Manuel<br />\
    <img src="styles/legend/REgionwang_0_88.png" /> San Nicolas<br />\
    <img src="styles/legend/REgionwang_0_89.png" /> San Quintin<br />\
    <img src="styles/legend/REgionwang_0_90.png" /> San Vicente<br />\
    <img src="styles/legend/REgionwang_0_91.png" /> Santa<br />\
    <img src="styles/legend/REgionwang_0_92.png" /> Santa Barbara<br />\
    <img src="styles/legend/REgionwang_0_93.png" /> Santa Catalina<br />\
    <img src="styles/legend/REgionwang_0_94.png" /> Santa Cruz<br />\
    <img src="styles/legend/REgionwang_0_95.png" /> Santa Lucia<br />\
    <img src="styles/legend/REgionwang_0_96.png" /> Santa Maria<br />\
    <img src="styles/legend/REgionwang_0_97.png" /> Santiago<br />\
    <img src="styles/legend/REgionwang_0_98.png" /> Santo Domingo<br />\
    <img src="styles/legend/REgionwang_0_99.png" /> Santo Tomas<br />\
    <img src="styles/legend/REgionwang_0_100.png" /> Santol<br />\
    <img src="styles/legend/REgionwang_0_101.png" /> Sarrat<br />\
    <img src="styles/legend/REgionwang_0_102.png" /> Sigay<br />\
    <img src="styles/legend/REgionwang_0_103.png" /> Sinait<br />\
    <img src="styles/legend/REgionwang_0_104.png" /> Sison<br />\
    <img src="styles/legend/REgionwang_0_105.png" /> Solsona<br />\
    <img src="styles/legend/REgionwang_0_106.png" /> Sual<br />\
    <img src="styles/legend/REgionwang_0_107.png" /> Sudipen<br />\
    <img src="styles/legend/REgionwang_0_108.png" /> Sugpon<br />\
    <img src="styles/legend/REgionwang_0_109.png" /> Suyo<br />\
    <img src="styles/legend/REgionwang_0_110.png" /> Tagudin<br />\
    <img src="styles/legend/REgionwang_0_111.png" /> Tayug<br />\
    <img src="styles/legend/REgionwang_0_112.png" /> Tubao<br />\
    <img src="styles/legend/REgionwang_0_113.png" /> Umingan<br />\
    <img src="styles/legend/REgionwang_0_114.png" /> Urbiztondo<br />\
    <img src="styles/legend/REgionwang_0_115.png" /> Urdaneta City<br />\
    <img src="styles/legend/REgionwang_0_116.png" /> Vigan City<br />\
    <img src="styles/legend/REgionwang_0_117.png" /> Villasis<br />\
    <img src="styles/legend/REgionwang_0_118.png" /> Vintar<br />\
    <img src="styles/legend/REgionwang_0_119.png" /> <br />\
    <img src="styles/legend/REgionwang_0_120.png" /> Burgos (IN)<br />\
    <img src="styles/legend/REgionwang_0_121.png" /> Burgos (IS)<br />\
    <img src="styles/legend/REgionwang_0_122.png" /> Burgos (LU)<br />\
    <img src="styles/legend/REgionwang_0_123.png" /> Burgos (P)<br />\
    <img src="styles/legend/REgionwang_0_124.png" /> San Juan (IS)<br />\
    <img src="styles/legend/REgionwang_0_125.png" /> San Juan (LU)<br />\
    <img src="styles/legend/REgionwang_0_126.png" /> San Nicolas (IN)<br />\
    <img src="styles/legend/REgionwang_0_127.png" /> San Nicolas (P)<br />\
    <img src="styles/legend/REgionwang_0_128.png" /> Santa Maria (IS)<br />\
    <img src="styles/legend/REgionwang_0_129.png" /> Santa Maria (P)<br />\
    <img src="styles/legend/REgionwang_0_130.png" /> Santo Tomas (LU)<br />\
    <img src="styles/legend/REgionwang_0_131.png" /> Santo Tomas (P)<br />' });

lyr_REgionwang_0.setVisible(true);
var layersList = [lyr_REgionwang_0];
lyr_REgionwang_0.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_2': 'NAME_2', ' Province': ' Province', ' Mechnical Rice Transplanter': ' Mechnical Rice Transplanter', ' Mechnical Rice Seeder': ' Mechnical Rice Seeder', ' Mechnical Rice Dryer': ' Mechnical Rice Dryer', });
lyr_REgionwang_0.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_2': 'TextEdit', ' Province': 'TextEdit', ' Mechnical Rice Transplanter': 'Range', ' Mechnical Rice Seeder': 'Range', ' Mechnical Rice Dryer': 'Range', });
lyr_REgionwang_0.set('fieldLabels', {'fid': 'no label', 'ISO': 'no label', 'NAME_2': 'inline label - always visible', ' Province': 'inline label - always visible', ' Mechnical Rice Transplanter': 'inline label - visible with data', ' Mechnical Rice Seeder': 'inline label - visible with data', ' Mechnical Rice Dryer': 'inline label - visible with data', });
lyr_REgionwang_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});