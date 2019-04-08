(function () {
  document.addEventListener('DOMContentLoaded', function () {
    (function () {

      function isLocalStorageAvailable() {
        return (typeof window.localStorage) !== 'undefined';
      }

      function setTwoClickState(origin, enabled) {
        if (!isLocalStorageAvailable()) return;

        let state = JSON.parse(window.localStorage.getItem('tcstate') || '{}') || {};
        state[origin] = enabled === true;

        window.localStorage.setItem('tcstate', JSON.stringify(state));
      }

      function getTwoClickState(origin) {
        if (!isLocalStorageAvailable()) return false;

        const state = JSON.parse(window.localStorage.getItem('tcstate') || '{}') || {};
        return state[origin] === true;
      }

      function setContentEnabled(origin, enabled) {
        setTwoClickState(origin, enabled === true);

        let tccontainers = document.querySelectorAll(".tccontainer");

        for (var i = 0; i < tccontainers.length; i++) {
          let tccontainer = tccontainers[i];

          let content = tccontainer.querySelector(".tccontent");

          if (content.dataset.origin !== origin)
            continue;

          let iframecontainer = tccontainer.querySelector(".tciframecontainer");
          let reveal = tccontainer.querySelector(".tcreveal");
          let disable = tccontainer.querySelector(".tcdisable");
          let contentafter = tccontainer.querySelector(".tccontentafter");
          let contentbefore = tccontainer.querySelector(".tccontentbefore");

          if (enabled === true) {
            let iframe = document.createElement("iframe");

            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.setAttribute('allowtransparency', 'true');
            iframe.setAttribute('scrolling', 'no');

            iframe.setAttribute('title', content.dataset.title);
            iframe.setAttribute('name', content.dataset.name);
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');

            iframe.setAttribute('src', content.dataset.source);

            iframecontainer.innerHTML = "";
            iframecontainer.appendChild(iframe);
            iframecontainer.style.display = 'block';

            contentbefore.style.display = 'none';
            reveal.style.display = 'none';

            contentafter.style.display = 'block';
            disable.style.display = 'block';
          } else {
            iframecontainer.innerHTML = "";
            iframecontainer.style.display = 'none';

            contentbefore.style.display = 'block';
            reveal.style.display = 'block';

            disable.style.display = 'none';
            contentafter.style.display = 'none';
          }
        }
      }

      let tccontainers = document.querySelectorAll(".tccontainer");

      for (var i = 0; i < tccontainers.length; i++) {
        let tccontainer = tccontainers[i];

        let content = tccontainer.querySelector(".tccontent");
        let enablebtn = tccontainer.querySelector(".tcrevealbtn");
        let disablebtn = tccontainer.querySelector(".tcdisablebtn");

        const origin = (new URL(content.dataset.source, window.location.href)).origin;
        content.dataset.origin = origin;

        enablebtn.addEventListener("click", function (event) {
          setContentEnabled(origin, true);
        });

        disablebtn.addEventListener("click", function () {
          setContentEnabled(origin, false);
        });

        if (getTwoClickState(origin)) {
          setContentEnabled(origin, true);
        }
      }

    })();
  });
})();
