'use strict';
     
const chai = require('chai');  
const should = require('chai').should();
const model = require('../lib/movies/model');

describe('MODEL TEST :: Movies Module tests', function() {  
 
  before(function() {
 
  });
 
  after(function() {
 
  });

  it('should GET a movie by id', function(done) {
    
    var movie = model.getMovieById('001');
    
    should.exist(movie);
    movie.should.have.property('id');
    movie.should.have.property('title');
    movie.should.have.property('gender');
    movie.should.have.property('description');
    
    movie.id.should.equal('001');
    movie.title.should.equal('La dama y el vagabundo');
    movie.gender.should.equal('romantica');
    movie.description.should.equal('Era una vez...');

    done();
  });

  it('should GET ALL movies', function(done) {
    
    var movies = model.getMovies();
    should.exist(movies);
    movies[0].should.have.property('id');
    movies[0].should.have.property('title');
    movies[0].should.have.property('gender');
    movies[0].should.have.property('description');
    
    movies[0].id.should.equal('001');
    movies[0].title.should.equal('La dama y el vagabundo');
    movies[0].gender.should.equal('romantica');
    movies[0].description.should.equal('Era una vez...');

    done();
  });
});