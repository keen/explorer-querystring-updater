#!/usr/bin/env node
var _ = require('lodash');
var Qs = require('qs');
var argv = require('yargs').argv;

var queryString = argv.query;

var oldObj = Qs.parse(queryString);
var newObj = { query: _.omit(oldObj, ['id', 'name', 'project_id', 'chart_type']) };
if (oldObj.chart_type) newObj.visualization = { chart_type: oldObj.chart_type };
if (oldObj.id) newObj.id = oldObj.id;
if (oldObj.name) newObj.name = oldObj.name;

console.log("The new query string is: \n");
console.log(Qs.stringify(newObj));