function getFirstSelector(selector){
  return document.querySelector(`${selector}`);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function deepestChild(){
  return document.querySelector("#grand-node div div div div");
}

function  increaseRankBy(n){
  let parents = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < parents.length; i++){
    let values = parents[i].children;
    for (let j = 0; j < values.length; j++){
      values[j].innerHTML = (parseInt(values[j].innerHTML) + n);
    }
  }
}
