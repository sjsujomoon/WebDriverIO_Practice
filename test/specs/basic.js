import assert from 'assert'
import GooglePageObject from '../../pageObjects/googlePageObject'

const SEARCH_INPUT = 'Smoke Testing'

describe('Google Search Bar Input Test', () => {
    it('should write and retrieve input value from search bar', () => {
        GooglePageObject.open()
        GooglePageObject.searchInput(SEARCH_INPUT)
        
        assert.equal(GooglePageObject.title(), "Google")
        assert.equal(GooglePageObject.getSearchInput(), SEARCH_INPUT)
    })

    it('should reach search result page', () => {
        GooglePageObject.search()
        GooglePageObject.waitForSearchResultLoading()

        assert.equal(GooglePageObject.title(), `${SEARCH_INPUT} - Google Search`)
        // Testing for specific case where bold texts relavant to search keyword
        assert.equal(GooglePageObject.getFirstBoldTextFromSearchResult(), "SMOKE TESTING")
        assert.equal(GooglePageObject.getSecondBoldTextFromSearchResult(), "Testing")
        assert.equal(GooglePageObject.getThirdBoldTextFromSearchResult(), "testing")
        assert.equal(GooglePageObject.getFourthBoldTextFromSearchResult(), "tests")
    })
})
