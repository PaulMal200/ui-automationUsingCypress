import basePage from './basePage'

const homePage = {
  url: '',
  username: 'tappsemail@gmail.com',
  password: 'Password01',
  loadMoreBtn: '#load-more',

  // littering a page object with getters is lame...
//  posts () {
//    return cy.get(this.postTitles)
//  },


}
export default { ...basePage, ...homePage }
