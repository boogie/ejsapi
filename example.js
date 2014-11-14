SuiteAPI.onPage('vcms', function() {

  SuiteAPI.VCMS.on('sectionSelected', function(section) {
    // console.log(section);
  });

  var campaign = SuiteAPI.VCMS.getCampaign(),
    campaign_id = campaign.id,
    campaign_name = campaign.name,
    customer_name = 'ff_addon_demo';

  var panelHTML = '';
  panelHTML += '<div id="productSearch">';
  panelHTML += '<input type="text" id="txtProductSearch" size="30" />';
  panelHTML += '<div class="btn pull" id="btnProductSelector"><span>Search</span></div>';
  panelHTML += '<div id="divProductSearchResults"></div>';
  panelHTML += '</div>';

  SuiteAPI.VCMS.setPanelContent('JS-API-Demo', panelHTML);
  $('#section-editor-api').css('overflow-y', 'auto');

  $("#txtProductSearch").bind("keydown", function(e) {
    if (e.keyCode == 13 || e.keyCode == 10) {
      $('#btnProductSelector').click();
      e.preventDefault();
    }
  });

  $('#btnProductSelector').bind('click', function() {

    var section_name = SuiteAPI.VCMS.getSectionGroupName();

    var url = 'https://clientservices.emarsys.net/' + customer_name + '/firefox_addon/productsearch.html?';
    url += 'term=' + encodeURIComponent($('#txtProductSearch').val());
    url += '&camp_id=' + encodeURIComponent(campaign_id);
    url += '&section=' + encodeURIComponent(section_name);

    $.getJSON(url, function(data) {

      if (typeof data[0] != 'undefined') {
        if (data[0].productId != '' && data[0].productId != '0') {
          var phtml = '';

          for (a = 0; a < data.length; a++) {

            var top_border = 0;
            if (a != 0) {
              top_border = 1;
            }

            phtml += '<div class="divProductSearchResult" style="padding:5px;border-top:' + top_border +
              'px solid #aaaaaa" onmouseover="$(this).css(\'background\',\'#dddddd\');" onmouseout="$(this).css(\'background\',\'#ffffff\');" data-productid="' +
              data[a].item + '">';
            phtml +=
              '<span id="articlenumber_label"><strong>Artikelnummer:</strong> <input type="hidden" class="articlenumber" value="' +
              data[a].item + '">' + data[a].item + '</span></span><br/><br/>';
            phtml += '<strong>Bezeichnung:</strong> ' + data[a].title + '<br/><br/>';

            phtml += '<strong>Preis:</strong> ' + data[a].price + ' €<br/>';

            if (data[a].image != '') {
              phtml += '<br/><br/><strong>Bild:</strong>';
              phtml += '<table style="width:250px;><tr>';
              phtml += '<td align="center"><img src="' + data[a].image + '" data-productid="' + data[a].image +
                '" class="divProductPicture"></td>';
              phtml += '</tr>';
              phtml += '</table>';
              phtml += '<br /><br />';
            }

            phtml += '</div>';
          }

          $('#divProductSearchResults').html(phtml);
          $('#divProductSearchResults').css('display', 'block');

          $('.divProductSearchResult').on('click', function() {
            var pid = $(this).data('productid');
            var selected_image = $(this).attr('src');
            var section_name = SuiteAPI.VCMS.getSectionGroupName();

            var url = 'https://clientservices.emarsys.net/' + customer_name +
              '/firefox_addon/productsearch.html?choiced=yes';
            url += '&term=' + encodeURIComponent(pid);
            url += '&camp_id=' + encodeURIComponent(campaign_id);
            url += '&section=' + encodeURIComponent(section_name);
            url += '&selected_image=' + encodeURIComponent(selected_image);

            $.getJSON(url, function(data) {
              SuiteAPI.VCMS.setSectionData({
                'header': data[0].ff_addon.header,
                'image': data[0].ff_addon.ImageDesktop,
                'mobile_image': data[0].ff_addon.ImageMobileURL,
                'image_alt_text': data[0].ff_addon.image_alt,
                'image_link': data[0].ff_addon.set_link_image,
                'header_link': data[0].ff_addon.set_link_header,
                'url': data[0].ff_addon.link
              });
            });


          });

        };

      };
    });
  });
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

//console.log('Page: ', SuiteAPI.pageID);
