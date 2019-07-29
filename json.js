let numbers  = "[0,1,2,3,4,5]"
let div = document.getElementById('json-1')
numbers = JSON.parse (numbers)
const parser =document.createElement('div')
parser.innerHTML = numbers[2]
div.appendChild(parser)
let user = '{"name":"Vasily","age":35,"Admin":false }'
user = JSON.parse(user)
parser.innerHTML = user.name
div.appendChild(parser)
let eve  = '{"type":"conference","date":"July 01, 1995 03:26:00"}'
let data  = JSON.parse(  //в значение передается JSON объект и фция
  eve, (key,value)=>{if(key=='date'){  //в фцию передается ключ и значение
     return new Date(value)}
   return value
 }
)
parser.innerHTML = data.date.getDate()
const human = {
  name : "Oleg",
  bhurtday :"01.01.2001",
  gender : "Male"
}
console.log(JSON.stringify(human, ["name", "gender"]));
// Далее попрет asynch/await спецификации
// Для создания асинхронного кода
//(кода который работает не по очереди) использовались коллбэки
const timefirst = 5000
setTimeout(()=>{
  console.log(`i'm run after ${timefirst} milleseconds`)
}, 5000)




console.log('Hi')
//но если код имеед последовательность коллэков, то это превращается в ад
// setTimeout(()=>{
//   setTimeout(()=>{
//     setTimeout(()=>{
//       setTimeout(()=>{
//        console.log(`Жестко`)
//       })
//     })
//   })
// })
//Для таких случаев существуют промисы
let promise = new Promise((res, rej)=>{// сея функция вызывается автоматически
  //в ней доступны любые асинх операции
  //Когда результат завершается выбирается из
  //resolve(res)-выполнено
  //reject(rej)-ошибка
  //пример с setTimeout
  setTimeout(()=>{
    res('result')
  })

})
///также промисы можно чейнить, создавая цепочку промисов
//let promise = new Promise()
promise.then (
  result => {console.log(`Fullfiled ${result}`)},
  error => {console.log(`Rejected ${error}`)}
);
//пример с делением , поскольку делить на ноль нельзя, то вызов ошибки
//будет вызвана отдельная функция по делению


let onDivision=(a,b)=>{
  if(b==0) { return false   }
  else{ return a/b  }
}
let division = new Promise((res,rej)=>{
        let resultdiv = onDivision(5,0)
        if  (resultdiv == false) {
          rej('0________0')
        }
        else{
          res(resultdiv)
        }
  })
