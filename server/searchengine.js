const {categories} = require('./categories.js');


  function searchengine(svalue, choice)
  {
  let searchresults = [];
  for(let key in categories[choice])
  {
    if(key.startsWith(svalue))
    {
      let obj = {
        "value": key,
        "priority": 1
      }
      searchresults.push(obj);
    }
    else if(key.includes(svalue))
    {
      let obj = {
        "value": key,
        "priority": 2
      }
      searchresults.push(obj);
    }
    if(Array.isArray(categories[choice][key]))
    {
      for(let j=0; j<categories[choice][key].length; j++)
      {
        if(categories[choice][key][j].startsWith(svalue)&&categories[choice][key][j]!=(key))
        {
          let obj = {
            "sub1": key,
            "value": categories[choice][key][j],
            "priority": 1
          };
          searchresults.push(obj);
        }
        else if(categories[choice][key][j].includes(svalue)&&categories[choice][key][j]!=(key))
        {
          let obj = {
            "sub1": key,
            "value": categories[choice][key][j],
            "priority": 2
          };
          searchresults.push(obj);
        }
      }
    }
    else{
      for(let subkey in categories[choice][key])
      {
        if(subkey.startsWith(svalue)){
          let obj2 = {
            "sub1": key,
            "value": subkey,
            "priority": 1
          };
          searchresults.push(obj2);
        }
        else if(subkey.includes(svalue))
        {
          let obj2 = {
            "sub1": key,
            "value": subkey,
            "priority": 2
          };
          searchresults.push(obj2);
        }
        for(let k=0; k<categories[choice][key][subkey].length;k++)
        {
          if(categories[choice][key][subkey][k].startsWith(svalue)&&categories[choice][key][subkey][k]!=(subkey))
          {
            let obj2 = {
              "sub1": subkey,
              "value": categories[choice][key][subkey][k],
              "priority": 1
            };
            searchresults.push(obj2);
          }
          else if(categories[choice][key][subkey][k].includes(svalue)&&categories[choice][key][subkey][k]!=(subkey))
          {
            let obj2 = {
              "sub1": subkey,
              "value": categories[choice][key][subkey][k],
              "priority": 2
            };
            searchresults.push(obj2);
          }
        }
      }
    }
  }
  return searchresults;
}

module.exports = {searchengine};
