const sqlite3 = require('sqlite3').verbose() 

const bd = new sqlite3.Database("./ws.db")

bd.serialize(function(){

  //Criar a tabela
  /*
  bd.run(
    `CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link TEXT
    );
  `)
*/

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
    "https://www.flaticon.com/premium-icon/icons/svg/2853/2853460.svg",
    "Curso de programação" ,
    "Estudo" ,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo velit illum neque?" ,
    "http://rockeseat.com.br"
  ]
  /*
  bd.run(query, values, function(err){
    if(err) return console.log(err)
    console.log(this)
  })
*/
  // Deletar um dado da tabela
  /*
  bd.run(`DELETE FROM ideas WHERE id= ?`,[1], function(err){
    if (err) return console.log(err)
    console.log("DELETEI", this)
  })

  */
  //Consultar dados na tabela
  
  /*bd.all(`SELECT  * FROM ideas`, function(err, rows){
    if(err) return console.log(err)
    console.log(rows)
  })
*/
})

module.exports = bd