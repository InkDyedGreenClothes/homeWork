function fn1() {
    console.log('fn');
}
function todo1() {
    console.log('todo1');
}

/**
 * Module = {
 *  fn: fn1
 * }
 */
export const fn = fn1;
export const todo = todo1;

export default '开课吧';