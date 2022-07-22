const element =document.getElementById("ADD");
element.innerHTML="+ADD";

const API_KEY='api_key=6f11994f99b00adf6d4cf47798fc74b9';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL=BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL='https://image.tmdb.org/t/p/w500';
const searchURL=BASE_URL+'/search/movie?'+API_KEY;
 
const main=document.getElementsByClassName('grid');

getMovies(API_URL);
function getMovies(url)
{
fetch(url).then(res=>res.json()).then(data=>{
    console.log(data.results)
    fetchMovies(data.results);
}
} 

function fetchMovies(data)
{
    grid.innerHTML=''; 
    data.forEach(card=>{
        const {title,poster_path,overview}=card;
        const movieEl=document.createElement('div');
        movieEl.classList.add('card');
        movieEl.innerHTML=
        `
        <img src="${IMG_URL+poster_path}" class="image1">
    <h3 class="Movie">${title}</h3>
    `
    grid.appendChild(movieEl);
    })
}
function find(url)
{
fetch(url).then(res=>res.json()).then(data=>{
    console.log(data.results)
    

    data.results.forEach(card=>{
        const {title,poster_path,overview}=card;
        const input=document.getElementById('Search');
        const query=input.value;
        const containsInTitle=title.includes(query);
        if(containsInTitle==true)
        {       
                main.innerHTML='';
                const movieEl=document.createElement('div');
                movieEl.classList.add('Card');
                movieEl.innerHTML=
                `
                <img src="${IMG_URL+poster_path}" class="image1">
            <h3 class="Movie">${title}</h3>
            `
            grid.appendChild(movieEl);
        }
       
    })
})

}

