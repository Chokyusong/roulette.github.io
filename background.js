chrome.action.onClicked.addListener(function(tab) {
	chrome.tabs.create({ url: 'v2/roulette.html' });
  });
  