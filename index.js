function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedClassLists = document.querySelectorAll('.ranked-list')

  for (var i = 0, l = rankedClassLists.length; i < l; i++) {
    var children = rankedClassLists[i].children

    for (var j = 0, k = children.length; j < k; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  var node = document.getElementById('grand-node')
  var nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
