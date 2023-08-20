// ==UserScript==
// @name        Fix FFZ Twitch VOD Chat Rich Content Wrapping
// @namespace   Violentmonkey Scripts
// @updateURL https://github.com/mepherion/Userscripts/raw/main/FFZ/fix_vod_rich_content.user.js
// @downloadURL https://github.com/mepherion/Userscripts/raw/main/FFZ/fix_vod_rich_content.user.js
// @match       https://www.twitch.tv/videos/*
// @version     1.1
// @author      -
// @description 8/15/2023, 8:03:19 AM
// @grant GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle( `
  div.ffz-card-rich div.tw-ellipsis {
    white-space: break-spaces !important;
  }
` );
