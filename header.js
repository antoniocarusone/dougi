(function () {
  var LOGO_SVG = '<svg viewBox="0 0 81 27" fill="currentColor">'
    + '<path d="M25.1084 9.5C25.1084 6.44966 24.4911 4.50934 23.2891 3.3125C22.0862 2.11505 20.1354 1.5 17.0703 1.5H9.53809C6.47292 1.5 4.52219 2.11496 3.31934 3.3125C2.1173 4.50934 1.5 6.44966 1.5 9.5V17C1.5 20.0503 2.1173 21.9907 3.31934 23.1875C4.52219 24.385 6.47292 25 9.53809 25H17.0703C20.1354 25 22.0862 24.385 23.2891 23.1875C24.4911 21.9907 25.1084 20.0503 25.1084 17V9.5ZM26.6084 17C26.6084 20.1996 25.9703 22.6343 24.3477 24.25C22.7258 25.8649 20.2822 26.5 17.0703 26.5H9.53809C6.32622 26.5 3.88262 25.8649 2.26074 24.25C0.638201 22.6343 0 20.1995 0 17V9.5C0 6.30046 0.638201 3.86566 2.26074 2.25C3.88262 0.635136 6.32622 0 9.53809 0H17.0703C20.2822 0 22.7258 0.635136 24.3477 2.25C25.9703 3.86566 26.6084 6.30038 26.6084 9.5V17Z"/>'
    + '<path d="M17.1679 8.3257C17.4608 8.03284 17.9356 8.03282 18.2284 8.3257C18.5213 8.61859 18.5213 9.09337 18.2284 9.38625L9.44036 18.1743C9.14747 18.4672 8.6727 18.4672 8.37981 18.1743C8.08693 17.8815 8.08695 17.4067 8.37981 17.1138L17.1679 8.3257Z"/>'
    + '<path d="M10.8919 8.34376C11.1854 8.05158 11.6602 8.05242 11.9525 8.34571C12.2447 8.6392 12.244 9.11399 11.9505 9.40626L9.4398 11.9063C9.14633 12.1985 8.67152 12.1977 8.37925 11.9043C8.08705 11.6108 8.08785 11.136 8.38121 10.8438L10.8919 8.34376Z"/>'
    + '<path d="M17.1688 14.5938C17.4623 14.3016 17.9371 14.3024 18.2293 14.5957C18.5216 14.8892 18.5208 15.364 18.2274 15.6563L15.7167 18.1563C15.4232 18.4485 14.9484 18.4477 14.6561 18.1543C14.3639 17.8608 14.3647 17.386 14.6581 17.0938L17.1688 14.5938Z"/>'
    + '<path d="M35.46 18.162H38.304C38.496 18.162 38.736 18.15 39.024 18.126C39.312 18.09 39.618 18.018 39.942 17.91C40.266 17.79 40.584 17.622 40.896 17.406C41.22 17.19 41.508 16.896 41.76 16.524C42.012 16.152 42.216 15.69 42.372 15.138C42.54 14.574 42.624 13.896 42.624 13.104C42.624 12.336 42.546 11.652 42.39 11.052C42.246 10.44 42 9.924 41.652 9.504C41.316 9.072 40.878 8.748 40.338 8.532C39.798 8.304 39.132 8.19 38.34 8.19H35.46V18.162ZM33.75 6.75H38.16C40.14 6.75 41.664 7.254 42.732 8.262C43.8 9.27 44.334 10.806 44.334 12.87C44.334 13.95 44.214 14.91 43.974 15.75C43.734 16.578 43.362 17.28 42.858 17.856C42.354 18.42 41.712 18.852 40.932 19.152C40.152 19.452 39.228 19.602 38.16 19.602H33.75V6.75Z"/>'
    + '<path d="M47.6478 14.958C47.6478 15.522 47.7198 16.026 47.8638 16.47C48.0198 16.902 48.2298 17.268 48.4938 17.568C48.7578 17.856 49.0638 18.078 49.4118 18.234C49.7718 18.39 50.1498 18.468 50.5458 18.468C50.9418 18.468 51.3138 18.39 51.6618 18.234C52.0218 18.078 52.3338 17.856 52.5978 17.568C52.8618 17.268 53.0658 16.902 53.2098 16.47C53.3658 16.026 53.4438 15.522 53.4438 14.958C53.4438 14.394 53.3658 13.896 53.2098 13.464C53.0658 13.02 52.8618 12.648 52.5978 12.348C52.3338 12.048 52.0218 11.82 51.6618 11.664C51.3138 11.508 50.9418 11.43 50.5458 11.43C50.1498 11.43 49.7718 11.508 49.4118 11.664C49.0638 11.82 48.7578 12.048 48.4938 12.348C48.2298 12.648 48.0198 13.02 47.8638 13.464C47.7198 13.896 47.6478 14.394 47.6478 14.958ZM46.0278 14.958C46.0278 14.274 46.1238 13.638 46.3158 13.05C46.5078 12.45 46.7958 11.934 47.1798 11.502C47.5638 11.058 48.0378 10.71 48.6018 10.458C49.1658 10.206 49.8138 10.08 50.5458 10.08C51.2898 10.08 51.9378 10.206 52.4898 10.458C53.0538 10.71 53.5278 11.058 53.9118 11.502C54.2958 11.934 54.5838 12.45 54.7758 13.05C54.9678 13.638 55.0638 14.274 55.0638 14.958C55.0638 15.642 54.9678 16.278 54.7758 16.866C54.5838 17.454 54.2958 17.97 53.9118 18.414C53.5278 18.846 53.0538 19.188 52.4898 19.44C51.9378 19.68 51.2898 19.8 50.5458 19.8C49.8138 19.8 49.1658 19.68 48.6018 19.44C48.0378 19.188 47.5638 18.846 47.1798 18.414C46.7958 17.97 46.5078 17.454 46.3158 16.866C46.1238 16.278 46.0278 15.642 46.0278 14.958Z"/>'
    + '<path d="M64.932 19.602H63.492V18.126H63.456C63.132 18.702 62.718 19.128 62.214 19.404C61.71 19.668 61.116 19.8 60.432 19.8C59.82 19.8 59.31 19.722 58.902 19.566C58.494 19.398 58.164 19.164 57.912 18.864C57.66 18.564 57.48 18.21 57.372 17.802C57.276 17.382 57.228 16.92 57.228 16.416V10.296H58.758V16.596C58.758 17.172 58.926 17.628 59.262 17.964C59.598 18.3 60.06 18.468 60.648 18.468C61.116 18.468 61.518 18.396 61.854 18.252C62.202 18.108 62.49 17.904 62.718 17.64C62.946 17.376 63.114 17.07 63.222 16.722C63.342 16.362 63.402 15.972 63.402 15.552V10.296H64.932V19.602Z"/>'
    + '<path d="M75.6179 18.81C75.6179 20.334 75.2699 21.474 74.5739 22.23C73.8779 22.986 72.7859 23.364 71.2979 23.364C70.8659 23.364 70.4219 23.316 69.9659 23.22C69.5219 23.124 69.1139 22.968 68.7419 22.752C68.3819 22.536 68.0819 22.254 67.8419 21.906C67.6019 21.558 67.4699 21.132 67.4459 20.628H68.9759C68.9879 20.904 69.0719 21.138 69.2279 21.33C69.3959 21.522 69.5939 21.678 69.8219 21.798C70.0619 21.918 70.3199 22.002 70.5959 22.05C70.8719 22.11 71.1359 22.14 71.3879 22.14C71.8919 22.14 72.3179 22.05 72.6659 21.87C73.0139 21.702 73.3019 21.462 73.5299 21.15C73.7579 20.85 73.9199 20.484 74.0159 20.052C74.1239 19.62 74.1779 19.146 74.1779 18.63V18.018H74.1419C73.8779 18.594 73.4759 19.02 72.9359 19.296C72.4079 19.56 71.8439 19.692 71.2439 19.692C70.5479 19.692 69.9419 19.566 69.4259 19.314C68.9099 19.062 68.4779 18.726 68.1299 18.306C67.7819 17.874 67.5179 17.376 67.3379 16.812C67.1699 16.236 67.0859 15.63 67.0859 14.994C67.0859 14.442 67.1579 13.878 67.3019 13.302C67.4459 12.714 67.6859 12.186 68.0219 11.718C68.3579 11.238 68.8019 10.848 69.3539 10.548C69.9059 10.236 70.5839 10.08 71.3879 10.08C71.9759 10.08 72.5159 10.212 73.0079 10.476C73.4999 10.728 73.8839 11.112 74.1599 11.628H74.1779V10.296H75.6179V18.81ZM71.3339 18.36C71.8379 18.36 72.2639 18.258 72.6119 18.054C72.9719 17.838 73.2599 17.562 73.4759 17.226C73.6919 16.878 73.8479 16.488 73.9439 16.056C74.0519 15.624 74.1059 15.192 74.1059 14.76C74.1059 14.352 74.0579 13.95 73.9619 13.554C73.8659 13.158 73.7099 12.804 73.4939 12.492C73.2899 12.168 73.0199 11.91 72.6839 11.718C72.3479 11.526 71.9399 11.43 71.4599 11.43C70.9679 11.43 70.5479 11.526 70.1999 11.718C69.8519 11.898 69.5639 12.144 69.3359 12.456C69.1199 12.768 68.9579 13.128 68.8499 13.536C68.7539 13.944 68.7059 14.37 68.7059 14.814C68.7059 15.234 68.7479 15.654 68.8319 16.074C68.9159 16.494 69.0599 16.878 69.2639 17.226C69.4679 17.562 69.7379 17.838 70.0739 18.054C70.4099 18.258 70.8299 18.36 71.3339 18.36Z"/>'
    + '<path d="M79.906 8.622H78.376V6.75H79.906V8.622ZM78.376 10.296H79.906V19.602H78.376V10.296Z"/>'
    + '</svg>';

  var HEART_SVG = '<svg width="12" height="11" viewBox="0 0 12.3 11.105" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">'
    + '<path d="M6.48 10.31C6.3 10.37 5.99 10.37 5.81 10.31C4.25 9.78 0.75 7.54999 0.75 3.76999C0.75 2.09999 2.09 0.75 3.75 0.75C4.73 0.75 5.59999 1.21999 6.14999 1.95999C6.68999 1.22999 7.56999 0.75 8.54999 0.75C10.21 0.75 11.55 2.09999 11.55 3.76999C11.55 7.54999 8.05 9.78 6.48 10.31Z"/>'
    + '</svg>';

  var CSS = ''
    + '.sh { display: flex; flex-direction: column; gap: 20px; padding: 20px 0; }'
    + '.sh-top { display: flex; align-items: center; justify-content: space-between; }'
    + '.sh-logo { display: flex; align-items: center; color: var(--c-primary); text-decoration: none; }'
    + '.sh-logo svg { width: 79.156px; height: 25px; }'
    + '.sh-buttons { display: flex; gap: 24px; align-items: center; }'
    + '.sh-nav { display: flex; gap: 12px; align-items: center; }'
    + '.sh-btn { display: flex; align-items: center; justify-content: center; padding: 9px 8px 10px; border-radius: 8px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 12px; letter-spacing: 0.12px; color: var(--c-btn); text-decoration: none; border: 1px solid transparent; background: none; cursor: pointer; transition: background 0.15s, border-color 0.15s; }'
    + '.sh-btn:hover { background: var(--c-btn-fill); }'
    + '.sh-btn--active { border-color: var(--c-btn-border); }'
    + '.sh-btn--active:hover { background: none; }'
    + '.sh-donate { display: flex; gap: 6px; align-items: center; justify-content: flex-end; padding: 6px 6px 6px 10px; border: 1px solid var(--c-grid); border-radius: 14px; }'
    + '.sh-donate-text { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 10px; line-height: 11px; letter-spacing: 0.1px; color: var(--c-donate-text); white-space: pre-line; }'
    + '.sh-donate-btn { display: flex; align-items: center; gap: 6px; height: 28px; padding: 0 8px; border-radius: 8px; background: var(--c-btn-fill); font-family: var(--font); font-size: 11px; color: var(--c-donate-btn); text-decoration: none; transition: opacity 0.15s; }'
    + '.sh-donate-btn:hover { opacity: 0.7; }'
    + '.sh-donate svg { stroke: var(--c-heart); }'
    + '.sh-sub { font-family: var(--font); font-size: 10px; color: var(--c-sub); text-transform: uppercase; display: flex; flex-direction: column; line-height: normal; }'
    + '.sh-bottom { display: flex; align-items: center; justify-content: space-between; }'
    + '@media (max-width: 768px) {'
    + '  .sh-buttons .sh-donate { display: none; }'
    + '  .sh-bottom .sh-donate { display: flex; }'
    + '  .sh-sub { flex-direction: column; }'
    + '}'
    + '@media (min-width: 769px) {'
    + '  .sh-bottom .sh-donate { display: none; }'
    + '  .sh-bottom { display: block; }'
    + '}';

  function buildHeader(active, isHome) {
    var logoTag = isHome ? 'div' : 'a';
    var logoHref = isHome ? '' : ' href="index.html"';

    var navItems = [
      { label: 'About', href: 'about.html', key: 'about' },
      { label: 'Changelog', href: 'changelog.html', key: 'changelog' },
      { label: 'Feedback', href: '#', key: 'feedback', id: 'sh-feedback' }
    ];

    var navHTML = navItems.map(function (item) {
      var cls = 'sh-btn' + (item.key === active ? ' sh-btn--active' : '');
      var idAttr = item.id ? ' id="' + item.id + '"' : '';
      return '<a class="' + cls + '" href="' + item.href + '"' + idAttr + '>' + item.label + '</a>';
    }).join('');

    var donateHTML = '<div class="sh-donate">'
      + '<span class="sh-donate-text">support ongoing\ndevelopment</span>'
      + '<a class="sh-donate-btn" href="https://donate.stripe.com/fZu28tfn13AGeJOdtA7bW00" target="_blank" rel="noopener">'
      + HEART_SVG
      + '<span>Donate</span>'
      + '</a>'
      + '</div>';

    return '<style>' + CSS + '</style>'
      + '<header class="sh">'
      + '<div class="sh-top">'
      + '<' + logoTag + ' class="sh-logo"' + logoHref + '>' + LOGO_SVG + '</' + logoTag + '>'
      + '<div class="sh-buttons">'
      + '<div class="sh-nav">' + navHTML + '</div>'
      + donateHTML
      + '</div>'
      + '</div>'
      + '<div class="sh-bottom">'
      + '<div class="sh-sub"><span>A dough calculator</span><span>V1.5</span></div>'
      + donateHTML
      + '</div>'
      + '</header>';
  }

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      var active = this.getAttribute('active') || '';
      var isHome = this.hasAttribute('home');
      this.innerHTML = buildHeader(active, isHome);

      // Obfuscate feedback email
      var a = 'hi', b = 'dougi.app';
      var f = this.querySelector('#sh-feedback');
      if (f) f.href = 'mailto:' + a + '@' + b + '?subject=%E2%9C%A8%20Dougi%20App%20Feedback';
    }
  }

  customElements.define('site-header', SiteHeader);
})();
