const searchForm = document.querySelector(".search-form");
const searchIcon = searchForm.querySelector("i");
const searchInput = document.querySelector(".search__input");
const searchOption = document.querySelector(".search__options");


function handleSearch(event){
    event.preventDefault();

    let option = searchOption.value;
    let search = searchInput.value;
   
     if(option === 'Google'){
        location.href = `https://www.google.com/search?q=${search}`;
     }else if(option === 'Naver'){
         location.href = `https://search.naver.com/search.naver?query=${search}`;
     }else if(option === 'Google-new'){
         window.open(`https://www.google.com/search?q=${search}`);
     }else{
         window.open(`https://search.naver.com/search.naver?query=${search}`);
     }
}

searchForm.addEventListener("submit",handleSearch);
