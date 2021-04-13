//utilizei o express para criar e configurar o meu servidor
const express = require("express")
const server = express()

const bd = require("./bd")
/*
const ideas = [
  {
    image: "https://www.flaticon.com/premium-icon/icons/svg/2853/2853460.svg",
    title:"Curso de programação" ,
    category:"Estudo" ,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo velit illum neque?" ,
    url :"http://rockeseat.com.br"
  },
  {
    image: "https://www.flaticon.com/premium-icon/icons/svg/2533/2533667.svg",
    title: "Exercícios" ,
    category: "Saúde",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo velit illum neque?" ,
    url :"http://rockeseat.com.br"
  },
  {
    image: "https://www.flaticon.com/svg/vstatic/svg/3233/3233061.svg?token=exp=1617730824~hmac=296c479bf3eeb2b97661bc1ec5ea7394" ,
    title: "Meditação" ,
    category: "Meditação",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo velit illum neque?" ,
    url :"http://rockeseat.com.br"
  },
  {
    image: "https://www.flaticon.com/svg/vstatic/svg/3656/3656968.svg?token=exp=1617807743~hmac=c53c7744d0e3eaf18357237119b4b117",
    title: "karaokê",
    category: "Diversão em Família",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo velit illum neque?" ,
    url :"http://rockeseat.com.br"
  },
  {
    image: "https://www.flaticon.com/svg/vstatic/svg/4185/4185501.svg?token=exp=1617827441~hmac=bce803da49f52c155c1aa910243510bd" ,
    title: "Jogos" ,
    category: "Competição",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo velit illum neque?" ,
    url :"http://rockeseat.com.br"
  },
  {
    image: "https://www.flaticon.com/svg/vstatic/svg/4185/4185776.svg?token=exp=1617827441~hmac=a461536039bdcaebf771879e005ca510" ,
    title: "Leitura" ,
    category: "Criatividade",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo velit illum neque?" ,
    url :"http://rockeseat.com.br"
  }
]*/

// configurar arquivos estáticos (css, script, imagens)
server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

//configuração Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
  express: server,
  noCache: true,
})

//criei uma rota /
// captura o pedido do cliente para responder
server.get("/", function(req, res){
  
  bd.all(`SELECT  * FROM ideas`, function(err, rows){
    if(err) {
      console.log(err)
      return res.send("Erro no banco de dados !")
    }

      const reverseIdeas = [...rows].reverse()
      let lastIdeas = []
      for (idea of reverseIdeas){
        if(lastIdeas.length < 2){
          lastIdeas.push(idea)
        }
      }
  return res.render("index.html", {ideas: lastIdeas})
  })
  
  
  
})

//rota para ideias
server.get("/ideias", function(req, res){
  bd.all(`SELECT  * FROM ideas`, function(err, rows) {
    if(err) {
      console.log(err)
      return res.send("Erro no banco de dados !")
    }
    const reverseIdeas = [...rows].reverse()
    return res.render("ideias.html", { ideas: reverseIdeas})
  })
})
server.post("/",  function(req, res){
  //Inserir dado na tabela
  const query = `
      INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
      )  VALUES (?,?,?,?,?);
  `
  const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.link,
  ]
  
  bd.run(query, values, function(err){
    if(err) {
      console.log(err)
      return res.send("Erro no banco de dados !")
    }
    return res.redirect("/ideias")
  })

})


server.get("/del",  function(req, res){

  const codigo_remocao = req.query.id
  bd.run(`DELETE FROM ideas WHERE id= ?`,codigo_remocao , function(err){
    if (err) return console.log(err)
    console.log("DELETEI", this)
  })
  return res.redirect("/ideias")
})

// Essa é porta que esta aberta para a aplicação
server.listen(3000)