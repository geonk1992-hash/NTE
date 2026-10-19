import { registerPageModules, start } from "./common.js?v=20261012-personal-board";
import { renderHome } from "./home.js?v=20261012-personal-board";
import {
  initializeGuides,
  renderGuides
} from "./guide-board.js?v=20261012-personal-board";
import {
  initializePages,
  renderNotices,
  renderNoticeDetail,
  renderArcDatabase,
  renderWallpapers,
  renderRoster,
  renderProfile,
  closeWallpaperLightbox
} from "./pages.js?v=20261012-personal-board";

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
