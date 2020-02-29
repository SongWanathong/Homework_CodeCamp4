// จงสร้าง array ให้ได้แบบนี้ {0,1,2,3,4,5,6,7,8,9,10}, แล้วก็เอาเลขคู่ออกทั้งหมดจนเป็นแบบนี้ {1,3,5,7,9} แต่รอบนี้ทำโดยการใช้ for loop หรือ while


// //3
let arr2 = []
var arr4 = [0,1,2,3,4,5,6,7,8,9];
arr4.filter(function(item){
 if((item % 2)==1){
  return item;
}
arr2.push(item)
console.log(arr2)

});
