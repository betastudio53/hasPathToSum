var hasPathToSum = function(node, targetSum) {
  // your code here
  var targetSum = targetSum - node.value;

  if (targetSum===0 && node.children === null){
  	return true;
  }
  

  for (var i=0; i<node.children.length; i++){
  	hasPathToSum(node.children[i],targetSum);

  }
  return false;


};
