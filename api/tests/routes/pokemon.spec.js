/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200',(done) =>{
      agent.get('/pokemons').expect(200)
    done();
  });

  });
  describe('GET /pokemons?name=...',() =>{
    it('should get 200 when name is right and a pokemon object',() =>{
      agent.get('/pokemons?name=pikachu').expect(200)
      .expect('Content-Type', /json/)
      .expect(function(res){
        expect(res.body.name).toEqual('pikachu');
      })
    });
    it('should get 404 when name is wrong',() => {
      agent.get('/pokemons?name=tuki').expect(404)
    });
  });
  describe('GET /pokemons/:id',() =>{
    it('should get 200 and a pokemon object when id is valid',() => {
      agent.get('/pokemons/25').expect(200)
      .expect('Content-Type', /json/)
      .expect(function(res){
        expect(res.body.name).toEqual('pikachu');
      });
    });
    it('should get 404 when id is invalid',() => {
      agent.get('/pokemons/1000').expect(404)
    });
  });
  describe('POST /pokemons',() => {
    it('should get 200 and a pokemon object when passing a valid obj',()=>{
      agent.post('/pokemons').send({name:'Pac-Man'})
      .expect(200)
      .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body.name).toEqual("Pac-Man");
        });
    });
    it('should get 404 when id is invalid',() => {
      agent.post('/pokemons').send({})
      .expect(404)
    })
  })
});
