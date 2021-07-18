// TreeNode {
//   char val;
//   TreeNode left;
//   TreeNode right;
// };

function TreeNode(val, left, right) {
  this.val = val || ''
  this.left = left || null
  this.right = right || null
}

function createTree(arr) {
  // 判断是否为空树
  if (arr.length < 0 || arr[0] == '#') return null
  let tree = new TreeNode(arr[0])
  let Nodes = [tree]
  let i = 1
  for (let node of Nodes) {
    node.left = arr[i] != '#' ? new TreeNode(arr[i]) : null
    node.left && Nodes.push(node.left)
    if (++i == arr.length) return tree
    node.right = arr[i] != '#' ? new TreeNode(arr[i]) : null
    node.right && Nodes.push(node.right)
    if (++i == arr.length) return tree
  }
}

function printTree(tree) {
  let q = [], layer = 1
  q.push(tree)
  while (q.length != 0) {
    let size = q.length
    let logStr = layer + ' '
    while (size--) {
      let node = q.shift()
      logStr += node.val // 拼接节点的值
      node.left != null && q.push(node.left)
      node.right != null && q.push(node.right)
    }
    console.log(logStr)
    layer++
  }
}

let tree = createTree(['A', 'B', 'D', 'C', 'E', 'F', 'G', '#', '#', 'H', 'I', '#', '#', 'J'])
printTree(tree)