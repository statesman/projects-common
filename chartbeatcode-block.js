// Head Tag:
<script type="text/javascript">var _sf_startpt=(new Date()).getTime()</script>

// At the close of the <body> tag:
// need to figure out a way to set the domain here
<script type="text/javascript">
  var _sf_async_config = { uid: 31585, domain: 'statesman.com', useCanonical: true };
  (function() {
    function loadChartbeat() {
      window._sf_endpt = (new Date()).getTime();
      var e = document.createElement('script');
      e.setAttribute('language', 'javascript');
      e.setAttribute('type', 'text/javascript');
      e.setAttribute('src','//static.chartbeat.com/js/chartbeat.js');
     document.body.appendChild(e);
    };
    var oldonload = window.onload;
    window.onload = (typeof window.onload != 'function') ?
      loadChartbeat : function() { oldonload(); loadChartbeat(); };
  })();
</script>
