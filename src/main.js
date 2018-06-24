/*window.database = {};
window.database.users = [];
window.database.progress = [];
window.database.cohorts = [];
*/

const btnSearch = document.getElementById('menuButton');
const container = document.getElementById('datosTabla');
const inputText = document.getElementById('root'); 



inputText.addEventListener('keypress', (event) => {
let key = event.which || event.keyCode;
if (key === 13) { // código 13 es enter
let search = inputText.value;
}
});

  btnSearch.addEventListener('click', () => {
  const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
  const cohortJson = '../data/cohorts.json';

  Promise.all([ // Ejecuta todas las llamadas de manera paralela
    fetch(usersJSON),
    fetch(progressJson),
    fetch(cohortJson)
 
  ]).then(
    (responses) => { // Responde a todas las promesas
      return Promise.all(responses.map((response) => { //me devolvía un arreglo.json de los 3
        return response.json();
        console.log(response.json);
      }));
    }
  ).then((responseJsons) => { // Arreglo de respuestas en json
    responseJsons[0].forEach((estudiante) => {
      const progreso = Object.entries(responseJsons[1]);
      const courses = Object.entries(responseJsons)
      const progresoEstudiante = progreso.find(elemento => elemento[0] === estudiante.id);
      // renderUsers(window.sortUsers(data, "name", "ASC")); 
    
      return container.innerHTML += '<tr>' +
      '<td>' + estudiante.name.toUpperCase() + '</td>' +
      '<td>' + + '</td>' +
      '<td>' + + '</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '</tr>';
    });
  });
});


  /*
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error en búsqueda');
      }
    }).then((usersJson) => {
      console.log(usersJson);
      Object.entries(usersJson).forEach((jsonElement) => {
        Object.entries(jsonElement).forEach((name) => {
          let myJSON = JSON.stringify(usersJson);
          document.getElementById('infoStudent').innerHTML = myJSON;
        });
      });
    });*/

      //  renderUsers(window.sortUsers(data, "name", "ASC")); 
  /*  inputText.addEventListener('keypress', (event) => {
      let key = event.which || event.keyCode;
      if (key === 13) { // código 13 es enter
        let search = inputText.value;
        inputText.value = '';
        console.log(search);
      
    */

  
 
 /* function searchStudents() {
        const searchText = inputText.value;
        const estudiantesFilter = filterUsers(estudiantes, searchText);
        const table = document.getElementById('datosTable');
        table.innerHTML = estudiantesFilter;
         return estudiantesFilter
      }
*/
/*
const renderseUsers = usersJSON => {
  let rankingNumber = 0;
    const render = data.forEach(user => {
      rankingNumber ++;
      let userProgress = progress[user.id]; // aqui se hace el match de users.json con progress.json
      // Cuando se cumpla la condicion entragara el valor correspondiente, si la condicion es falsa, entregara 'sin   info'
      let percent = 'Sin info';
      if (userProgress.intro) {
        percent = userProgress.intro.percent;
      }
      return container.innerHTML += '<tr>' +
      '<td>' + rankingNumber + '</td>' +
      '<td>' + user.name.toUpperCase() + '</td>' +
      '<td>' + percent + '</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '</tr>';
    });
    return render;
  }
*/
  /*
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error en búsqueda');
      }
    }).then((usersJson) => {
      console.log(usersJson);
      Object.entries(usersJson).forEach((jsonElement) => {
        Object.entries(jsonElement).forEach((name) => {
          let myJSON = JSON.stringify(usersJson);
          document.getElementById('infoStudent').innerHTML = myJSON;
        });
      });
    });*/

 /*
const btn = document.getElementById('menuButton');
const container = document.getElementById('studentsName');
const dataUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const dataProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; 

fetch(dataUser)
.then(response => response.json())
.then(data => {
  console.log(data);
  // renderUsers(window.sortUsers(data, "name", "ASC"));
  window.database.users = data;
  })

  fetch(dataProgress)
  .then(response => response.json())
  .then(progress => {
    console.log(progress);
    renderseUsers(data, progress);
  });

const renderseUsers = (data) => {
  let rankingNumber = 0;
  btnTwo.addEventListener('click', () => {
    const render = data.forEach(user => {
      rankingNumber ++;
      let userProgress = progress[user.id]; // aqui se hace el match de users.json con progress.json
      // Cuando se cumpla la condicion entragara el valor correspondiente, si la condicion es falsa, entregara 'sin   info'
      let percent = 'Sin info';
      if (userProgress.intro) {
        percent = userProgress.intro.percent;
      }
      return container.innerHTML += '<tr>' +
      '<td>' + rankingNumber + '</td>' +
      '<td>' + user.name.toUpperCase() + '</td>' +
      '<td>' + percent + '</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '</tr>';
    });
    return render;

    function doSearch()
		{
			var tableReg = document.getElementById('datos');
			var searchText = document.getElementById('searchTerm').value.toLowerCase();
			var cellsOfRow="";
			var found=false;
			var compareWith="";
 
			// Recorremos todas las filas con contenido de la tabla
			for (var i = 1; i < tableReg.rows.length; i++)
			{
				cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
				found = false;
				// Recorremos todas las celdas
				for (var j = 0; j < cellsOfRow.length && !found; j++)
				{
					compareWith = cellsOfRow[j].innerHTML.toLowerCase();
					// Buscamos el texto en el contenido de la celda
					if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
					{
						found = true;
					}
				}
				if(found)
				{
					tableReg.rows[i].style.display = '';
				} else {
					// si no ha encontrado ninguna coincidencia, esconde la
					// fila de la tabla
					tableReg.rows[i].style.display = 'none';
				}
			}
		}
  });
};
}
}
}
}
}
*/
