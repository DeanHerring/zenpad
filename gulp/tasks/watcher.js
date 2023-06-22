import gulp from 'gulp';
import { autoreload } from './autoreload.js';

// Tasks
import { html } from './html.js';
import { images } from './images.js';
import { js } from './js.js';

import { config } from '../config/config.js';

export const watcher = () => {
  autoreload();

  gulp.watch(config.HTML_DIR, html);
  gulp.watch(config.IMAGES_DIR, images);
  gulp.watch(config.JS_DIR, js);
};
