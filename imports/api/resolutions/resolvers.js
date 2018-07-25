import Resolutions from './resolutions'
import Goals from '../goals/goals';

export default {
  Query : {
    resolutions(obj, args, { userId=null }){
      const res = Resolutions.find({
        userId
      }).fetch();
      return res;
    }
  },

  Resolution: {
      goals: resolution =>
       Goals.find({
          resolutionId: resolution._id
        }).fetch(),

      completed: resolution => {
        const goals = Goals.find({
           resolutionId: resolution._id
         }).fetch();
        if(goals.length === 0) return false;
        const completedGoals = goals.filter( goal => goal.completed);
        return goals.length === completedGoals.length;
      }
  },

  Mutation: {
    createResolution(obj, { name }, {userId}){
      if(userId){
        const ResolutionId = Resolutions.insert({
          name,
          userId
        });
        return Resolutions.findOne(ResolutionId);
      }
      throw new Error("un-authorized");
    }
  }
};
