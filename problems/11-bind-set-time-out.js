function boundFuncTimer(obj, func, delay) {
  // Your code here 
  const boundFunc = func.bind(obj);
  setTimeout(boundFunc, delay);

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
