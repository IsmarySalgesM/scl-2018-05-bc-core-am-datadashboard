window.computeUsersStats = (users, progress, courses) => {

  let percentGral = 0;
  let lectures = 0;
  let lecturesCompleted = 0;
  let lecturesPercent = 0;
  let quizzes = 0;
  let quizzesCompleted = 0;
  let quizzesPercent = 0;
  let exercises = 0;
  let exercisesCompleted = 0;
  let exercisesPercent = 0;

  for (let i = 0; i < users.length; i++) {
    let userId = users[i].id;
    let userProgress = progress[userId];


    for (let unidades in userProgress) {
      let element = userProgress[unidades];
      let unit;


      for (unit of Object.values(element.units)) {
        for (let part of Object.values(unit.parts)) {
          if (part.type === "read") {
            lectures++;
          }
          if (part.length === 0) {
            lectures = 0;
            percentGral = 0;
          }
          if (part.type === "read" && part.completed === 1) {
            lecturesCompleted++;
          }

          lecturesPercent = Math.round((lecturesCompleted * 100) / lectures);
          if (part.type === "quiz") {
            quizzes++;
          }
          if (part.length === 0) {
            quizzes = 0;
            percentGral = 0;
          }
          if (part.type === "quiz" && part.completed === 1) {
            quizzesCompleted++;
          }
          quizzesPercent = Math.round((quizzesCompleted * 100) / quizzes);
          if (part.type === "practice") {
            exercises++;
          }
          if (part.length === 0) {
            exercises = 0;
            percentGral = 0;
          }
          if (part.type === "practice" && part.completed === 1) {
            exercisesCompleted++;
          }
          exercisesPercent = Math.round(
            (exercisesCompleted * 100) / exercises || 1
          );
          percentGral = Math.round(
            (lecturesPercent + quizzesPercent + exercisesPercent) / 3
          );
        }
      }
     
    }

    users[i].stats = {
      percentTotal: percentGral,
      exercises: {
        total: exercises,
        completed: exercisesCompleted,
        percent: lecturesPercent
      },
      quizzes: {
        total: quizzes,
        completed: quizzesCompleted,
        percent: quizzesPercent
      },
      reads: {
        total: lectures,
        completed: lecturesCompleted,
        percent: lecturesPercent
      }
    };
    console.log(users[i].stats);
  }
};

//window.sortUsers(users,"name", "ASC")
window.sortUsers = (users, orderBy, orderDirection) => {
  if (orderBy == "name") {
    return users.sort(function(a, b) {
      if (orderDirection == "ASC") return a.name.localeCompare(b.name);
      else return a.name.localeCompare(b.name) * -1;
    });
  }
};
window.filterUsers = (users, search) => {};
window.processCohortData = options => {};
