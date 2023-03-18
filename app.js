document.getElementById('get-fact').addEventListener('click', getTheFact);

const http = new EasyHTTP

function getTheFact(e){
    http.get('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then(function (data){
        // console.log(data);

        document.getElementById('fact').innerHTML = `<li>${data}</li>`;
     } )
    .catch(err => console.log(err));

    e.preventDefault()
}


  

