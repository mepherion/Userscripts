// ==UserScript==
// @name        Fix FFZ Twitch VOD Chat Rich Content Wrapping
// @namespace   Violentmonkey Scripts
// @updateURL https://gist.github.com/mepherion/25d876f538eb055cb21a6bac2c0219b3/raw/04a09298c48402d1f11f229e0e57b2bf4e1bdb11/fix_ffz_rich_content.user.js
// @downloadURL https://gist.github.com/mepherion/25d876f538eb055cb21a6bac2c0219b3/raw/04a09298c48402d1f11f229e0e57b2bf4e1bdb11/fix_ffz_rich_content.user.js
// @match       https://www.twitch.tv/videos/*
// @version     1.0
// @author      -
// @description 8/15/2023, 8:03:19 AM
// @grant GM_addStyle
// @run-at       document-start
// ==/UserScript==

/*
function GM_addStylea(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}
*/

GM_addStyle( `
  div.ffz-card-rich div.tw-ellipsis {
    white-space: break-spaces !important;
  }
` );
