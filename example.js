
SuiteAPI.onPage('vcms', function() {

  SuiteAPI.VCMS.on('sectionSelected', function(section) {
    console.log(section);
  });

});

SuiteAPI.onPage('email-campaigns', function() {

  SuiteAPI.DOM.addButton({
    'block': 'create',
    'title': 'Hello World',
    'onclick': function() { alert('ALERT'); }
  });

});

console.log('Page: ', SuiteAPI.pageID);