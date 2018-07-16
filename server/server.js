const express = require('express');
const {searchengine} = require('./searchengine.js');
const _ = require('lodash');

let app = express();
app.use(express.static(__dirname+"/../public"));
app.get('/categories.js', (req, res)=>{
  let svalue = req.query.svalue;
  svalue = svalue.toLowerCase();
  let keywords = svalue.split(' ');
  let searchresultsproduct = [];
  let searchresultsservice = [];
  let searchresults = [];
  for(let i=0;i<keywords.length;i++)
  {
    searchresultsservice = searchengine(keywords[i], 'services');
    searchresultsproduct = searchengine(keywords[i], 'products');
    searchresults = searchresults.concat(searchresultsproduct, searchresultsservice);
  }
  res.send(_.uniqBy(searchresults, 'value'));
});
app.listen(3000);
