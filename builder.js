let allEls = document.querySelectorAll("builder");
//let i = 0, len = allEls.length;
//for(;i<len;i++){allEls[i].style.visibility="hidden"};

NodeList.prototype.filter = function(callback, context) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this))
      arr.push(this[i]);
  }
  return arr;
};

let builder = {
  "list": allEls,
  "render": (bID, data, els) => {
    let coreEl = builder.list.filter(n=>n.getAttribute("bid")==bID)
    let nodeString = coreEl[0].innerHTML.repeat(els);
    Object.keys(data).forEach((el,i)=>{
      data[el].forEach((dataEl,dataI)=>{
        nodeString = nodeString.replace(`{{${el}}}`,dataEl);
      });
    });
    coreEl[0].innerHTML = nodeString;
    coreEl[0].style.visibility = "visible";
  },
  "build": (bID, data, els) => {
    let coreEl = builder.list.filter(n=>n.getAttribute("bid")==bID)
    let nodeString = coreEl[0].innerHTML.repeat(els);
    let newEl = coreEl[0];
    Object.keys(data).forEach((el,i)=>{
      data[el].forEach((dataEl,dataI)=>{
        nodeString = nodeString.replace(`{{${el}}}`,dataEl);
      });
    });
    return nodeString;
  }
}
