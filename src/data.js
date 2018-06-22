window.computeUsersStats = (users,progress,courses) => {

}
//window.sortUsers(users,"name", "ASC")
window.sortUsers = (users, orderBy, orderDirection) =>{
    if(orderBy == "name"){
        return users.sort(function(a, b){
            if(orderDirection == "ASC")
                return a.name.localeCompare(b.name);
            else 
                return a.name.localeCompare(b.name) * -1;
        });
    }
}
window.filterUsers = (users, search) =>{
    let  filterUser = [];
    return users.filter((estudiante) => {    
      return estudiante.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    });
    return filterUser;

  };

window.processCohortData = (options) =>{
}
