// จงสร้าง array ให้ได้แบบนี้ {0,1,2,3,4,5,6,7,8,9,10}, แล้วก็เอาเลขคู่ออกทั้งหมดจนเป็นแบบนี้ {1,3,5,7,9}


let arr = [ 0,1,2,3,4,5,6,7,8,9]
arr.splice(0,1)
arr.splice(1,1)
arr.splice(2,1)
arr.splice(3,1)
arr.splice(4,1)


console.log(arr)