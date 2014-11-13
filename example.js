
SuiteAPI.VCMS.on('sectionSelected', function(section) {
  console.log(section);
});

SuiteAPI.DOM.addButton({
  'pageId': 'email-campaigns',
  'block': 'create',
  'title': 'Hello World',
  'onclick': function() { alert('ALERT'); }
});

console.log(SuiteAPI.pageID);