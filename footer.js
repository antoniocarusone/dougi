(function () {
  var SUN_SVG = '<svg viewBox="0 0 18 18" fill="none" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round">'
    + '<path d="M9 13.875C11.6924 13.875 13.875 11.6924 13.875 9C13.875 6.30761 11.6924 4.125 9 4.125C6.30761 4.125 4.125 6.30761 4.125 9C4.125 11.6924 6.30761 13.875 9 13.875Z"/>'
    + '<path d="M14.355 14.355L14.2575 14.2575M14.2575 3.7425L14.355 3.645M3.645 14.355L3.7425 14.2575M9 1.56V1.5M9 16.5V16.44M1.56 9H1.5M16.5 9H16.44M3.7425 3.7425L3.645 3.645" stroke-width="1.5"/>'
    + '</svg>';

  var SYSTEM_SVG = '<svg viewBox="0 0 18 18" fill="none" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round">'
    + '<path d="M4.5 4.6875V6.1875"/>'
    + '<path d="M7.5 4.6875V6.1875"/>'
    + '<path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"/>'
    + '<path d="M4.5 12V13.5"/>'
    + '<path d="M7.5 12V13.5"/>'
    + '<path d="M10.5 5.4375H13.5"/>'
    + '<path d="M10.5 12.75H13.5"/>'
    + '<path d="M1.5 9H16.5"/>'
    + '</svg>';

  var MOON_SVG = '<svg viewBox="0 0 15.3 15.3" fill="none" stroke-width="0.95625" stroke-linecap="round" stroke-linejoin="round">'
    + '<path d="M1.29388 7.91774C1.52338 11.2009 4.30925 13.872 7.64338 14.0186C9.99575 14.1206 12.0995 13.0241 13.3618 11.2965C13.8845 10.5889 13.604 10.1171 12.7306 10.2765C12.3035 10.353 11.8636 10.3849 11.4046 10.3657C8.28725 10.2382 5.73725 7.63087 5.7245 4.55175C5.71813 3.723 5.89025 2.93887 6.20263 2.22487C6.54688 1.43437 6.1325 1.05825 5.33563 1.39612C2.81113 2.46075 1.0835 5.00437 1.29388 7.91774Z"/>'
    + '</svg>';

  var CSS = ''
    + '.sf { display: flex; align-items: center; justify-content: space-between; padding: 20px 0; margin-top: auto; }'
    + '.sf-left { display: flex; align-items: center; gap: 16px; }'
    + '.sf-copyright { font-size: 10px; color: var(--c-sub); text-transform: uppercase; }'
    + '.sf-link { font-size: 10px; color: var(--c-sub); text-transform: uppercase; text-decoration: none; transition: opacity 0.15s; }'
    + '.sf-link:hover { opacity: 0.7; }'
    + '.sf-switch { display: flex; align-items: center; box-shadow: inset 0 0 0 1px var(--c-switch); border-radius: 999px; position: relative; }'
    + '.sf-indicator { position: absolute; width: 30px; height: 30px; border-radius: 999px; border: 1px solid var(--c-switch); background: var(--bg); pointer-events: none; transition: transform 0.2s ease-out; }'
    + '.no-transitions .sf-indicator { transition: transform 0.2s ease-out !important; }'
    + '.sf-btn { display: flex; align-items: center; justify-content: center; padding: 5px; border-radius: 999px; border: 1px solid transparent; background: transparent; cursor: pointer; position: relative; z-index: 1; }'
    + '.sf-btn.active svg { stroke: var(--c-primary) !important; }'
    + '.sf-btn:not(.active):hover svg { stroke: var(--c-sub); }'
    + '.sf-btn svg { width: 18px; height: 18px; stroke: var(--c-switch); transition: stroke 0.15s; }'
    + '@media (max-width: 768px) {'
    + '  .sf { flex-wrap: wrap; gap: 28px; }'
    + '  .sf-left { display: contents; }'
    + '  .sf-link { order: -1; }'
    + '  .sf-switch { margin-left: auto; }'
    + '  .sf-copyright { order: 1; width: 100%; text-align: center; }'
    + '}';

  function buildFooter() {
    return '<style>' + CSS + '</style>'
      + '<footer class="sf">'
      + '<div class="sf-left">'
      + '<span class="sf-copyright">&copy; 2026 Antonio Carusone. All rights reserved.</span>'
      + '<a href="privacy.html" class="sf-link">Privacy Policy</a>'
      + '</div>'
      + '<div class="sf-switch">'
      + '<div class="sf-indicator"></div>'
      + '<button class="sf-btn" data-theme="light" title="Light">' + SUN_SVG + '</button>'
      + '<button class="sf-btn" data-theme="system" title="System">' + SYSTEM_SVG + '</button>'
      + '<button class="sf-btn" data-theme="dark" title="Dark">' + MOON_SVG + '</button>'
      + '</div>'
      + '</footer>';
  }

  var STORAGE_KEY = 'dougi-theme';

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(choice) {
    var resolved = choice === 'system' ? getSystemTheme() : choice;
    document.documentElement.setAttribute('data-theme', resolved);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = resolved === 'light' ? '#fafafa' : '#000000';
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = buildFooter();

      var self = this;
      var buttons = self.querySelectorAll('.sf-btn');
      var indicator = self.querySelector('.sf-indicator');
      var themeOrder = { light: 0, system: 1, dark: 2 };

      function moveIndicator(choice, animate) {
        var idx = themeOrder[choice] || 0;
        if (!animate) indicator.style.transition = 'none';
        indicator.style.transform = 'translateX(' + (idx * 30) + 'px)';
        if (!animate) {
          indicator.offsetHeight;
          indicator.style.transition = '';
        }
      }

      function setActive(choice, animate) {
        buttons.forEach(function (btn) {
          btn.classList.toggle('active', btn.getAttribute('data-theme') === choice);
        });
        moveIndicator(choice, animate);
      }

      var saved = localStorage.getItem(STORAGE_KEY) || 'system';
      applyTheme(saved);
      setActive(saved, false);

      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function () {
        var current = localStorage.getItem(STORAGE_KEY) || 'system';
        if (current === 'system') {
          document.documentElement.classList.add('no-transitions');
          applyTheme('system');
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              document.documentElement.classList.remove('no-transitions');
            });
          });
        }
      });

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var choice = this.getAttribute('data-theme');
          localStorage.setItem(STORAGE_KEY, choice);
          document.documentElement.classList.add('no-transitions');
          applyTheme(choice);
          setActive(choice, true);
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              document.documentElement.classList.remove('no-transitions');
            });
          });
        });
      });
    }
  }

  customElements.define('site-footer', SiteFooter);
})();
