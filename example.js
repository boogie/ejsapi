SuiteAPI.onPage('vcms', function() {

  SuiteAPI.VCMS.on('sectionSelected', function(section) {
    console.log(section);
  });

  var customer_name = 'ff_addon_demo',
    loading_image = 'https://clientservices.emarsys.net/' + customer_name +
    '/images/ff_addon/loading_small.gif',
    ok_image = 'https://clientservices.emarsys.net/' + customer_name +
    '/images/ff_addon/haekchen.png',
    cancel_image = 'https://clientservices.emarsys.net/' + customer_name +
    '/images/ff_addon/delete_01.png';

  panelHTML = '';

  panelHTML +=
    '<div class="btn pull" id="btnUpdateDBSelector"><span>Datenbank aktualisieren</span></div>';
  panelHTML += '<span id="search_loading_update_db_btn" > <img src="' +
    loading_image + '"></span>';
  panelHTML += '<span id="db_refresh_ok"> <img src="' + ok_image +
    '"></span>';
  panelHTML += '<br /><br />';

  panelHTML += '<div id="divProduktschnittstelle">';
  panelHTML +=
    '<input type="text" id="txtProductSearch" class="key_event_ff_addon" size="30"/>';
  panelHTML += '<div id="clear_result"><img src="' + cancel_image +
    '"></div>';
  panelHTML +=
    '<div class="btn pull" id="btnProductSelector"><span>Produktsuche</span></div>';
  panelHTML += '<span id="search_loading" > <img src="' + loading_image +
    '"></span>';
  panelHTML += '<br class="clearer" />';
  panelHTML += '<div id="divProductSearchResults"></div>';
  panelHTML += '<br class="clearer" />';
  panelHTML += '</div>';

  SuiteAPI.VCMS.setPanelContent('JS-API-Demo', panelHTML);

});

SuiteAPI.onPage('email-campaigns', function() {

  SuiteAPI.DOM.addButton({
    'block': 'create',
    'icon': 'http://forums.imore.com/images/smilies/imore/beer.png',
    'title': 'Hello World',
    'onclick': function() {
      alert('ALERT');
    }
  });

});

console.log('Page: ', SuiteAPI.pageID);
