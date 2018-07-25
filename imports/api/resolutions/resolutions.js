import { Mongo } from 'meteor/mongo';

const Resolutions = new Mongo.Collection("resolutions");
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

export default Resolutions;
