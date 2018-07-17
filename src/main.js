#!/usr/bin/env node
var program = require('commander');
const pkg =  require('../package.json');
const convertBTC = require('./ConvertBTC');

program
  .version(pkg.version)
  .description('Converte Bitcoin em qualquer moeda definida.')
  .option('-C, --currency <currency>', 'Moeda a ser convertida. (Padrão: USD)' )
  .option('-A, --amount <amount>', 'Valor em Bitcoin a ser convertido. (Padrão: 1)' )
  .parse(process.argv)

convertBTC(program.currency, program.amount);
