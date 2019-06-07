export default class GooglePage {
  constructor() {
    this.path = "https://www.google.com"
  }

  open() {
    browser.url(this.path)
  }

  title() {
    return browser.getTitle()
  }
}