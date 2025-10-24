const receita = {
  receita: "Bolo de laranja",
  porcoes: 8,
  tempo: 95,
  ingredientes:[
    {id:0, item:"ovo", quantidade: 5, unidade: "unidades", precoUnitario: 0.10},
    {id:1, item:"açucar", quantidade: 300, unidade: "gramas", precoUnitario: 0.10},
    {id:2, item:"manteiga", quantidade: 100, unidade: "gramas", precoUnitario: 0.10},
    {id:3, item:"creme de leite fresco", quantidade: 150, unidade: "ml", precoUnitario: 0.05},
    {id:4, item:"raspa de laranja", quantidade: 50, unidade: "gramas", precoUnitario: 0.10},
    {id:5, item:"farinha de trigo", quantidade: 270, unidade: "gramas", precoUnitario: 0.01},
    {id:6, item:"sal", quantidade: 1, unidade: "pitada", precoUnitario: 0.01},
    {id:7, item:"fermento biologico", quantidade: 10, unidade: "colher", precoUnitario: 0.10},
    {id:8, item:"Suco de laranja", quantidade: 1, unidade: "copo", precoUnitario: 2.00},
    {id:9, item:"geleia de damasco", quantidade: 1, unidade: "colher", precoUnitario: 2.50}
  ],
  preparo:[
    {passo:1, descricao:"Reuna todos os ingredientes"},
    {passo:2, descricao:"Misture os ovos e o açúcar"},
    {passo:3, descricao:"Adicione a manteiga derretida, o creme de leite, as raspas de laranja e misture"},
    {passo:4, descricao:"Em outro recipiente, misture os secos (farinha, sal e fermento)"},
    {passo:5, descricao:"Peneire a mistura dos secos na massa e misture até formar uma massa homogênea"},
    {passo:6, descricao:"Transfira a massa para uma forma de bolo inglês e leve ao forno por 50 minutos"},
    {passo:7, descricao:"Para a calda, misture o suco de laranja e a geleia"},
    {passo:8, descricao:"Leve para o fogo médio, deixe levantar fervura e conte um minuto mexendo sempre"},
    {passo:9, descricao:"Desenforme o bolo e banhe o topo com a calda quente"}
  ]
}

export default receita