
function getMovieById(id){
 
    var movie = {
        id: '001',
        title: 'La dama y el vagabundo',
        gender: 'romantica',
        description: 'Era una vez...'
    };

    return movie;
}

function getMovies(){
 
    var movies = 
    [   
        {
            id: '001',
            title: 'La dama y el vagabundo',
            gender: 'romantica',
            description: 'Era una vez...'
        }
    ];

    return movies;
}

module.exports.getMovies = getMovies;
module.exports.getMovieById = getMovieById;
