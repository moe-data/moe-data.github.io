
function finish(){
  current=9;
  for(let i=0;i<data.nodes.length;i++){
    if(data.nodes[i].id==current){
      data.nodes[i].cluster='a';
      data.nodes[i].style.stroke='#aaa';
      break;
    }
  }
  // graph.data(data);
  // graph.paint()
  graph.refresh()
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
      
//       const tipDiv = document.createElement('div');
// tipDiv.innerHTML = '点击查看详细信息';
const graphDiv = document.getElementById('container');
// graphDiv.appendChild(tipDiv);

const container = document.getElementById('container');
const nodes = data.nodes;
const nodeMap = new Map();
const clusterMap = new Map();
let clusterId = 0;
nodes.forEach((node) => {
  nodeMap.set(node.id, node);
  // cluster
  if (node.cluster && clusterMap.get(node.cluster) === undefined) {
    clusterMap.set(node.cluster, clusterId);
    clusterId++;
  }
  const cid = clusterMap.get(node.cluster);
  if (!node.style) node.style = {};
  node.style.fill = colors[cid % colors.length];
  node.style.stroke = strokes[cid % strokes.length];
  node.style.lineWidth = 5
  // node.x = width / 2 + 200 * (Math.random() - 0.5);
  // node.y = height / 2 + 200 * (Math.random() - 0.5);
});

// map the value to node size
let maxNodeValue = -9999,
  minNodeValue = 9999;
nodes.forEach(function (n) {
  nval=n.value/2
  if (maxNodeValue < nval) maxNodeValue = nval;
  if (minNodeValue > nval) minNodeValue = nval;
});
const nodeSizeRange = [10, 30];
const nodeSizeDataRange = [minNodeValue, maxNodeValue];
scaleNodeProp(nodes, 'size', 'value', nodeSizeDataRange, nodeSizeRange);

nodes.forEach(function (node) {
  node.oriSize = node.size;
  node.oriLabel = node.label;
});

function refreshDragedNodePosition(e) {
  const model = e.item.get('model');
  model.fx = e.x;
  model.fy = e.y;
}
// if (typeof window !== 'undefined')
//   window.onresize = () => {
//     if (!graph || graph.get('destroyed')) return;
//     if (!container || !container.scrollWidth || !container.scrollHeight) return;
//     graph.changeSize(container.scrollWidth, container.scrollHeight - 20);
//   };


function scaleNodeProp(elements, propName, refPropName, dataRange, outRange) {
  const outLength = outRange[1] - outRange[0];
  const dataLength = dataRange[1] - dataRange[0];
  elements.forEach(function (n) {
    if (propName.split('.')[0] === 'style') {
      if (n.style) {
        n.style[propName.split('.')[1]] =
          ((n[refPropName] - dataRange[0]) * outLength) / dataLength + outRange[0];
      } else {
        n.style = _defineProperty(
          {},
          propName.split('.')[1],
          ((n[refPropName] - dataRange[0]) * outLength) / dataLength + outRange[0],
        );
      }
    } else {
      n[propName] = ((n[refPropName] - dataRange[0]) * outLength) / dataLength + outRange[0];
    }
  });
}
function newline(str){
  l=str.length
  var res=''
  for(let i=0;i<l;i++){
    if(i%8==7){
      res+=str[i]+'\n'
    }else{res+=str[i]}
  }
  return res
}
function seplink(str){
  var link=''
  var m=str.split(",")
  for(let i=0;i<m.length;i++){
    link+=`<a href='javascript:jump("`+m[i]+`")'>`+m[i]+"</a> "
  }
  console.log(22)
  return link
}
function jump(str){
  graph.focusItem(str, true);
  for(let i=0;i<data.nodes.length;i++){
    if(data.nodes[i].id==str){
          console.log(data.nodes[i])
      var model=data.nodes[i]
      $('.description').html(model.description)
      $('.id').html(model.id)
      $('.content').html(model.content.replace(/\n/g,'<br/>'))
      $('.after').html(seplink(model.after))
      $('.ammo').html(model.ammo)
      $('.bauxite').html(model.bauxite)
      $('.before').html(seplink(model.before));
      $('.bonus').html(model.bonus.replace(/\n/g,'<br/>'))
      $('.fuel').html(model.fuel)
      $('.memo').html(model.memo)
      $('.period').html(model.period)
      return
    }
  }
  return
}