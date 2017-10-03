import Vue from 'vue'
// The path is relative to the project root.
import MyRE from '../../../src/components/MyRE'

describe('MyRE.vue', () => {
  it(`should test a string against RegExp generated from itemList`, () => {
    // build component
    const Constructor = Vue.extend(MyRE)
    const ListComponent = new Constructor().$mount()

    // set value of new item
    ListComponent.newItem = 'Das auto ist kapput'
    // find button
    const button = ListComponent.$el.querySelector('button')
    // simulate click event
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    ListComponent._watcher.run()
    // assert list contains new item
    // expect(ListComponent.$el.textContent).to.contain('Das auto ist kapput')
    expect(ListComponent.goodItems).to.contain('Das auto ist kapput')
  })
})
