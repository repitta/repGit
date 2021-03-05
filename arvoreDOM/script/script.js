//Buscar o elemento pelo id, retorna só o elemento
const element = document.getElementById('blog-title')
console.log(element)

//buscar todos os elementos que tem a mesma classe
//Ele retorna um HTMLCollection que não pode utilizar forEach
const element1 = document.getElementsByClassName("one")
console.log(element1)

//buscar todos os elementos que tem a mesma tag retorna um htmlCollection
const element2 = document.getElementsByTagName('meta')
console.log(element2)

//buscar por seletor e ele só retorna o primeiro, retorna o elemento
const element3 = document.querySelector('.one')
console.log(element3)

//buscar por seletor e retorna todos
//Ele retorna um NodeList e vc pode fazer um forEach
const elements = document.querySelectorAll('.one')
console.log(elements)
