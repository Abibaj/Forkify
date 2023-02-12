class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this._clearInput();

    console.log(query, 'from get query');
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this.#parentElement.querySelector('.search__field').value = ``;
  }
}

export default new SearchView();
