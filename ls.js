document.getElementById('adding').addEventListener('click', function () {
      const namevalue = document.getElementById('text-field');
      const name = namevalue.value;
      console.log(name);
      localStorage.setItem('Name', name);


});

document.getElementById('adding-ages').addEventListener('click', function () {
      const agefield = document.getElementById('age-field');
      const age = agefield.value;
      console.log(age);
      localStorage.setItem('Age', age);
})



// remove
document.getElementById('removed').addEventListener('click', function () {
      localStorage.removeItem('Name');
})
document.getElementById('removed-ages').addEventListener('click', function () {
      localStorage.removeItem('Age');
})


document.getElementById('clear').addEventListener('click', function () {
      localStorage.clear();
})











