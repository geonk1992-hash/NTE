import { registerPageModules, start } from "./common.js";
import { renderHome } from "./home.js";
import { initializeGuides, renderGuides } from "./guide-board.js?v=20261012-guide-board-focus-recovery";
import {
  initializePages,
  renderNotices,
  renderNoticeDetail,
  renderArcDatabase,
  renderWallpapers,
  renderRoster,
  renderProfile,
  closeWallpaperLightbox
} from "./pages.js";

registerPageModules({
  initialize: () => {
    initializePages();
    initializeGuides();
  },
  renderHome,
  renderNotices,
  renderNoticeDetail,
  renderArcDatabase,
  renderGuides,
  renderWallpapers,
  renderRoster,
  renderProfile,
  closeWallpaperLightbox
});

start();
