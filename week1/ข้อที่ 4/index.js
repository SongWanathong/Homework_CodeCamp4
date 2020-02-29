// จงสร้าง map ที่เก็บชื่อคนเป็นkey และอายุเป็น value {{Adam:28},{Sophie:22},{Aorum,13}} แล้วลองเรียกkeyของแต่ละelement


const myMap = new Map([[28,'Adam'],[22,'Sophie'],[13,"Aorum"]])
console.log(myMap)
console.log(myMap.get(28))
console.log(myMap.get(22))
console.log(myMap.get(13))
