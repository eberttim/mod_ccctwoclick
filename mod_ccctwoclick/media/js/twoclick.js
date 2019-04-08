(function () {
  document.addEventListener('DOMContentLoaded', function () {
    (function () {

      let tccontainer = document.getElementById("tccontainer-<?php echo $moduleId; ?>");

      let content = document.getElementById("tccontent-<?php echo $moduleId; ?>");
      let iframecontainer = document.getElementById("tciframecontainer-<?php echo $moduleId; ?>");
      let enable = document.getElementById("tcreveal-<?php echo $moduleId; ?>");
      let enablebtn = document.getElementById("tcrevealbtn-<?php echo $moduleId; ?>");
      let disable = document.getElementById("tcdisable-<?php echo $moduleId; ?>");
      let disablebtn = document.getElementById("tcdisablebtn-<?php echo $moduleId; ?>");
      let contentafter = document.getElementById("tccontentafter-<?php echo $moduleId; ?>");
      let contentbefore = document.getElementById("tccontentbefore-<?php echo $moduleId; ?>");

      const origin = (new URL("<?php echo $isrc; ?>", window.location.href)).origin;

      function isLocalStorageAvailable() {
        return (typeof window.localStorage) !== 'undefined';
      }

      function setTwoClickState(enabled) {
        if (!isLocalStorageAvailable()) return;

        let state = JSON.parse(window.localStorage.getItem('tcstate') || '{}') || {};
        state[origin] = enabled === true;

        window.localStorage.setItem('tcstate', JSON.stringify(state));
      }

      function getTwoClickState(enabled) {
        if (!isLocalStorageAvailable()) return false;

        const state = JSON.parse(window.localStorage.getItem('tcstate') || '{}') || {};
        return state[origin] === true;
      }

      function enableContent(enabled) {
        if (enabled === true){
          let iframe = document.createElement("iframe");

          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allowfullscreen', 'true');
          iframe.setAttribute('allowtransparency', 'true');
          iframe.setAttribute('scrolling', 'no');
          iframe.setAttribute('title', '<?php echo $iframetitle; ?>');

          iframe.setAttribute('name', '<?php echo $iframename; ?>');
          iframe.setAttribute('width', content.dataset.width);
          iframe.setAttribute('height', content.dataset.height);

          iframe.setAttribute('src', content.dataset.source);

          iframecontainer.innerHTML = "";
          iframecontainer.appendChild(iframe);

          contentbefore.style.display = 'none';
          enable.style.display = 'none';

          contentafter.style.display = 'block';
          disable.style.display = 'block';

          setTwoClickState(true);
        } else {
          iframecontainer.innerHTML = "";

          contentbefore.style.display = 'block';
          enable.style.display = 'block';

          disable.style.display = 'none';
          contentafter.style.display = 'none';

          setTwoClickState(false);
        }
      }

      enablebtn.addEventListener("click", function (event) {
        enableContent(true);
      });

      disablebtn.addEventListener("click", function () {
        enableContent(false);
      });

      if (getTwoClickState()){
        enableContent(true);
      }

    })();
  });
})();