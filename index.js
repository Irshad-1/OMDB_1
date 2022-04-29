document.querySelector('form').addEventListener('submit',searchFn);

    function searchFn(){
        event.preventDefault();
        var searchVal=document.querySelector('#movieSearch').value;
        const response=fetch(`https://www.omdbapi.com/?t=${searchVal}&apikey=c82dc22a`);
       response.then((response2)=>{
           console.log(response2);
           return response2.json();
       }).then((result)=>{
           console.log(result);
        var image=document.createElement('img');
        image.src=result.Poster;
        var name=document.createElement('h1');
        name.innerText=result.Title;
        var box=document.createElement('div');
        var year=document.createElement('p');
        var duration=document.createElement('p');
        var genre=document.createElement('p');
        year.innerText=result.Year;
        duration.innerText=result.Runtime;
        genre.innerText=result.Genre;
        box.append(year,duration,genre);
        var actors=document.createElement('h4');
        actors.innerText="Actors: "+result.Actors;
        var plot=document.createElement('p');
        plot.innerText="Plot: "+result.Plot;

        document.querySelector('#description').append(name,box,actors,plot);
        document.querySelector('#imageContainer').append(image);
    });
    }
    