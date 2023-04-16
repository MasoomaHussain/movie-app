(async function(){
    const access = await fetch("./data.json");
    const movies = await access.json();
    // console.log(movies);check1

    // const genre = document.getElementById("genre");
    // const submitButton = document.getElementById("submit-button");

    // function search(){
    //     const query=genre.value;
    //     // console.log(query);check2
    //     const result=movies.filter(function(movie){
    //       return movie.title.toLowerCase().includes(query);
    //     });
    //     console.log(result);//check3
    //   }
    //   submitButton.addEventListener("click", search);



    // const genre = document.getElementById("genre");
    // const year = document.getElementById("year");
    // const language = document.getElementById("language");



//     function getSelectedValues(selectIds) {
//   const selectedValues = {};
//   selectIds.forEach(selectId => {
//     const selectElement = document.getElementById(selectId);
//     const selectedValue = selectElement.value;
//     selectedValues[selectId] = selectedValue;
//   });
//   return selectedValues;
// }
// function fetchMoviesByPreferences() {
  function getSelectedValues(selectIds) {
    const selectedValues = {};
    selectIds.forEach(function(selectId) {
      const selectElement = document.getElementById(selectId);
      const selectedValue = selectElement.value;
      selectedValues[selectId] = selectedValue;
    });
    return selectedValues;
  }


const selectIds = ["genre", "year", "language", "rating"];
const selectedValues = getSelectedValues(selectIds);
console.log(selectedValues);


function search(){
        // const selectedValues=selectedValues.value;
        // console.log(query);check2
        const result=movies.filter(function(movie){
          return movie.title.toLowerCase().includes(selectedValues);
        });
        console.log(result);//check3
      }
      const submitButton = document.getElementById("submit-button");
      submitButton.addEventListener("click", search);




// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click",getSelectedValues )
// const filteredMovies = await fetchMoviesByPreferences();
// console.log(filteredMovies);
// });


// function search(){
//   const query=selectIds.value;
//   const result=movies.filter(function(movie){
//     return movie.title.toLowerCase().includes(query);
//   });
//   console.log(result);
// }
// search();

// try {
//   const response = await fetch("./data.json");
//   const movies = await response.json();

//   const filteredMovies = movies.filter(movie => {
//     return (
//       movie.genre === selectedValues["genre"] &&
//       movie.rating === selectedValues["rating"] &&
//       movie.year === selectedValues["year"] &&
//       movie.language === selectedValues["language"]
//     );
//   });

//   return filteredMovies;
// } catch (error) {
//   console.error(error);
// }


// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", async event => {
// event.preventDefault();
// const filteredMovies = await fetchMoviesByPreferences();
// console.log(filteredMovies);
// });



})();