import icons from 'url:../../img/icons.svg';
import PreviewView from './previewView';
import View from './views';

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No results found for your query! please try again ;)`;
}

export default new ResultsView();
