
/**
 * check every node till leaf node which sum up for specific value or not;
 *
 */
function hasPathSum (node, sum) {
  // check it leaf node
  if (node.left === null && node.right === null) {
    return sum === node.key;
  }

  let subSum = sum - node.key; // subtract current node value from sum

  if (node.left !== null) { // if left node is not null find sum in left node
    let hasPath = this.hasPathSum(node.left, subSum); // recusive call hasPathSum with left node and subSum
    if (hasPath) {
      return true
    }
  }

  if (node.right !== null) {// if right node is not null find sum in right node
    let hasPath = this.hasPathSum(node.right, subSum);// recusive call hasPathSum with right node and subSum
    if (hasPath) {
      return true
    }
  }

  return false // return false if none of above condition run.

}

























