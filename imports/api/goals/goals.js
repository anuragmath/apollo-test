import { Mongo } from 'meteor/mongo';

const Goals = new Mongo.Collection("goals");
// CollectionName.allow({
//   insert: function(){
//     return true;
//   },
//   update: function(){
//     return true;
//   },
//   remove: function(){
//     return true;
//   }
// });

export default Goals;
