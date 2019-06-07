import GooglePage from './googlePage'

class GooglePageObject extends GooglePage {
  get searchBarElement() { return $('.gLFyf') }
  searchInput(value) {
    this.searchBarElement.setValue(value)
  }
  getSearchInput() {
    return this.searchBarElement.getValue()
  }

  // press Enter
  search() {
    browser.keys("\uE007")
  }

  get searchResultElement() { return $('.e24Kjd') }
  waitForSearchResultLoading() {
    this.searchResultElement.waitForExist(undefined, false)
  }
  getFirstBoldTextFromSearchResult() {
    return this.searchResultElement.$$('b')[0].getText()
  }
  getSecondBoldTextFromSearchResult() {
    return this.searchResultElement.$$('b')[1].getText()
  }
  getThirdBoldTextFromSearchResult() {
    return this.searchResultElement.$$('b')[2].getText()
  }
  getFourthBoldTextFromSearchResult() {
    return this.searchResultElement.$$('b')[3].getText()
  }
}

export default new GooglePageObject()
