function hasPathSum (node, sum) {
  if (node.left === null && node.right === null) {
    return sum === node.key
  }

  let subSum = sum - node.key;
  if (node.left !== null) {
    let hasPath = this.hasPathSum(node.left, subSum);
    if (hasPath) {
      return true
    }
  }

  if (node.right !== null) {
    let hasPath = this.hasPathSum(node.right, subSum);
    if (hasPath) {
      return true
    }
  }

  return false
}