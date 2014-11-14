SuiteAPI.onPage('vcms', function() {

  SuiteAPI.VCMS.on('sectionSelected', function(section) {
    console.log(section);
  });

  var campaign = SuiteAPI.VCMS.getCampaign(),
    campaign_id = campaign.id,
    campaign_name = campaign.name,
    customer_name = 'ff_addon_demo';

  var panelHTML = '';
  panelHTML += '<div id="productSearch">';
  panelHTML += '<input type="text" id="txtProductSearch" size="30" />';
  panelHTML += '<div class="btn pull" id="btnProductSelector"><span>Search</span></div>';
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
