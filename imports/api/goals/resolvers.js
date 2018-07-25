import Goals from './goals'


export default {

  Mutation: {
    createGoal(obj, { name, resolutionId }, {userId}){
      if(userId){
        const GoalId = Goals.insert({
          name,
          resolutionId,
          completed: false
        });
        return Goals.findOne(GoalId);
      }
      throw new Error("un-authorized");
    },
    toggleGoal(obj, {_id}){
      const goal = Goals.findOne(_id);
      Goals.update(_id, {
        $set: {
          completed: !goal.completed
        }
      });
      return Goals.findOne(_id);
    }
  }
};
