// ==UserScript==
// @name        Fix FFZ Twitch VOD Chat Rich Content Wrapping
// @namespace   Violentmonkey Scripts
// @updateURL https://github.com/mepherion/Userscripts/raw/main/FFZ/fix_vod_rich_content.user.js
// @downloadURL https://github.com/mepherion/Userscripts/raw/main/FFZ/fix_vod_rich_content.user.js
// @match       https://www.twitch.tv/videos/*
// @match       https://www.twitch.tv/*/video/*
// @version     1.8.0
// @author      -
// @description 2/17/2026
// @grant GM_addStyle
// ==/UserScript==

GM_addStyle( `
  div.ffz-card-rich {
    max-width: 230px !important
  }
` );
