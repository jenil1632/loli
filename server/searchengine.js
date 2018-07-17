const {categories} = require('./categories.js');


  function searchengine(svalue, choice)
  {
  let searchresults = [];
  for(let key in categories[choice])
  {
    let skip = false;
    if(key.startsWith(svalue))
    {
      if(Array.isArray(categories[choice][key]))
      {
        getArrayElements(categories[choice][key], searchresults, key, 1);
        skip = true;
      }
      else
      {
        getArrayElements(Object.keys(categories[choice][key]), searchresults, key, 1);
        skip = true;
      }
    }
    else if(key.includes(svalue))
    {
      if(Array.isArray(categories[choice][key]))
      {
        getArrayElements(categories[choice][key], searchresults, key, 2);
        skip = true;
      }
      else
      {
        getArrayElements(Object.keys(categories[choice][key]), searchresults, key, 2);
        skip = true;
      }
    }
    if(Array.isArray(categories[choice][key]))
    {
      if(skip==false)
      {
      categories[choice][key].forEach((element)=>{
        if(element.startsWith(svalue))
        {
          let obj = {
            "sub1": key,
            "value": element,
            "priority": 1
          };
          searchresults.push(obj);
        }
        else if(element.includes(svalue))
        {
          let obj = {
            "sub1": key,
            "value": element,
            "priority": 2
          };
          searchresults.push(obj);
        }
      });
    }
  }
    else{
      for(let subkey in categories[choice][key])
      {
        let skipsub = false;
        if(subkey.startsWith(svalue)){
            getArrayElements(categories[choice][key][subkey], searchresults, subkey, 1);
            skipsub = true;
        }
        else if(subkey.includes(svalue))
        {
          getArrayElements(categories[choice][key][subkey], searchresults, subkey, 2);
          skipsub = true;
        }
        categories[choice][key][subkey].forEach((element)=>{
          if(element.startsWith(svalue)&&skipsub==false)
          {
            let obj2 = {
              "sub1": subkey,
              "value": element,
              "priority": 1
            };
            searchresults.push(obj2);
          }
          else if(element.includes(svalue)&&skipsub==false)
          {
            let obj2 = {
              "sub1": subkey,
              "value": element,
              "priority": 2
            };
            searchresults.push(obj2);
          }
        });
      }
    }
  }
  return searchresults;
}

function getArrayElements(arr, searchresults, key, pr){
  arr.forEach((element)=>{
    let obj = {
      "sub1": key,
      "value": element,
      "priority": pr
    };
    searchresults.push(obj);
  });
}

module.exports = {searchengine};
