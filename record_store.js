var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = 0;
}

recordStore.prototype = {
  addRecord: function(record){
   return this.records.push(record)
  }
}

inventory: function(){
  for(var record of this.records)
  {
    console.log(record)
  }

module.exports = RecordStore;

