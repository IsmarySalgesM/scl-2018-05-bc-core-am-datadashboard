window.onload = () => {
  const prueba = document.getElementById("menuButton");
  const container = document.getElementById("tablePrint");

  let users = [];
  let progress = [];
  let courses = [];

  const usersJSON = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";
  const progressJson = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json";
  const cohortJson = "../data/cohorts.json";

  Promise.all([
    // Ejecuta todas las llamadas de manera paralela
    fetch(usersJSON),
    fetch(progressJson),
    fetch(cohortJson)
  ])
    .then(responses => {
      // Aqui estan mis tres promesas
      return Promise.all(
        responses.map(response => {
          // con map itero dentro de mis 3 promesas
          return response.json();
        })
      );
    })
    .then(jsonResponses => {
      users = jsonResponses[0]; // arreglo
      progress = jsonResponses[1]; // objecto
      courses = jsonResponses[2]; // arreglo
      console.log(progress);
      console.log(courses);
      console.log(users);
    })
    .catch(error => {
      console.log("Falló la promesa de los fetch", error);
    });

  prueba.addEventListener("click", () => {
    const usersDatos = window.computeUsersStats(users, progress, courses);
  //  const usersASC = window.sortUsers(users, orderBy, orderDirection);
  //  for (let usersEstudent of usersASC) {
      users.forEach(user => {
        container.innerHTML += `<tr>
      <td> ${user.name.toUpperCase()} </td> 
      <td> ${JSON.stringify(user.stats.exercises)} % </td> 
      <td> ${JSON.stringify(user.stats.quizzes)} % </td> 
      <td> ${JSON.stringify(user.stats.reads)} % </td>
      <td> ${user.stats.percentTotal} % </td>
      </tr>`;

      })
    })
  }


