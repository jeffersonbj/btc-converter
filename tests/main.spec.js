const expect = require('chai').expect; //commonjs

const exec = require('child_process').exec;
const btcConverter = 'node.exe ./src/main.js';
const pkg =  require('../package.json');

describe('Main CLI', () => {
  it('should return `version` of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.replace('\n','')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return `description` when `btc-converter --help`', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('Converte Bitcoin em qualquer moeda definida.')).to.be.true;
      done();
    });
  });

  it('should return `currency` option when `btc-converter --help`', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('should return `amount` option when `btc-converter --help`', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });

});
