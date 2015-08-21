import should from 'should'
import leancloud from './'

describe('#classes', () => {
  it('It should create a class', function() {
    this.timeout(70000)

    return leancloud.createClass({
      className: 'testclass',
      body: {
        'demoKey': 'demoValue'
      }
    })
  })

  it('It should read a class', function() {
    this.timeout(70000)

    return leancloud.classes({
      className: 'testclass'
    })
  })

  it('It should read a object from a class', function() {
    return leancloud.fetchObject({
      className: 'testclass',
      objectId: '55d6e01f60b2b52c341f52a0'
    })
  })

  it('It should update a object from a class', function() {
    return leancloud.updateObject({
      className: 'testclass',
      objectId: '55d6e01f60b2b52c341f52a0',
      body: {
        'demoKey': 'newDemoValue',
        count: 1
      }
    })
  })

  it('It should update a count in a object from a class', function() {
    return leancloud.updateObject({
      className: 'testclass',
      objectId: '55d6e01f60b2b52c341f52a0',
      body: {
        count: {
          __op: 'Increment',
          amount: 1
        }
      }
    })
  })
})