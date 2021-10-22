describe('百度', () => {
  it('能搜索掘金', () => {
    cy.visit('https://www.baidu.com')
    cy.get('input#kw').type('掘金')
    cy.contains('百度一下').click()
    cy.contains('掘金- 代码不止,掘金不停').should('exist')
    cy.contains('juejin.cn').should('exist')
  })
})