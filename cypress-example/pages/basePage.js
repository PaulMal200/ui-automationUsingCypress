const basePage = {
  baseUrl: 'https://www.premierinn.com/',

  /**
   * wrapper for visit so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   */
  goto (relativeUrl = '') {
    cy.visit(`${this.baseUrl}`)
  }
}
export default basePage
