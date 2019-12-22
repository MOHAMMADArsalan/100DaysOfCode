function leastCommonAncestor (root, node1, node2) {
  if (root === null) {
    return null
  }

  if (root === node1 || root === node2) {
    return root
  }

  let leftLCA = leastCommonAncestor(root.left, a, b);
  let rightLCA = leastCommonAncestor(root.right, a, b)

  if (leftLCA !== null && rightLCA !== null) {
    return root;
  }

  if (leftLCA !== null) {
    return leftLCA
  }

  return rightLCA
}