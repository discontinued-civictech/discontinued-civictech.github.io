/*This function will load script and call the callback once the script has loaded*/

function loadScriptAsync(scriptSrc, callback) {
  if (typeof callback !== 'function') {
      throw new Error('Not a valid callback for async script load');
  }
  var script = document.createElement('script');
  script.onload = callback;
  script.src = scriptSrc;
  document.head.appendChild(script); }
  
  loadScriptAsync("https://www.googletagmanager.com/gtag/js?id=G-6MM46DN2JB", function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-6MM46DN2JB', { 'anonymize_ip': true }); })
  