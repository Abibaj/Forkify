import icons from 'url:../../img/icons.svg';
import PreviewView from './previewView';
import View from './views';

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet! find a nice recipe and bookmark it ;)`;

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new BookmarksView();
