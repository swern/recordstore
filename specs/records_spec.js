var Record = require('../record')
var RecordStore = require('../record_store')
var assert = require('chai').assert


describe('record', function(){

  it('record has an artist', function(){
    record1 = new Record ('Jerry C', 'Canon Rock', 5)
    assert.equal('Jerry C', record1.artist)
  })

  it('record can be added to store', function(){
    recordStore1 = new recordStore('HMV', 'Aberdeen')
    record2 = new Record ('Green Day', 'Dookie', 6)
    recordStore1.addRecord(record2)
    assert.equal(1, recordStore1.records.length)
  })

  it('record store has balance', function(){
    recordStore2 = new recordStore ('Virgin', 'Dundee')
    record3 = ('blink 182', 'cheshire cat', 4)
    recordStore2.addRecord(record3)
    assert.equal(4, recordStore2.balance)
  })

})