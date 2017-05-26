const _ = require("lodash");


const createSchedule = function (exercises){
  var schedule = ["cardio","leg", "leg", "back", "shoulder", "chest", "biceps", "triceps", "glutes", "abs","abs", "cardio" ];

  var scheduleArray = [];

  var shuffledArray = _.shuffle(exercises);

  for (var i = 0; i < schedule.length; i++) {
    for (var j = 0; j < shuffledArray.length; j++) {
      if(shuffledArray[j].muscles == schedule[i].toUpperCase()){
        scheduleArray.push(shuffledArray[j]);
        shuffledArray.splice(j, 1);
        break;
      }
    }
  }
  return scheduleArray;
};


module.exports = createSchedule;
