let voto = prompt ("Qual seu voto? 1- Julia. 2- Gabriela. 3- Claudia. 4- Debora 5 - Nulo/Branco")
    switch (voto) {
        case "1":
            console.log ("você votou no candidato Julia")
            break
        case "2":
            console.log ("você votou na candidata Gabriela")
            break
        case "3":
            console.log ("você votou na candidata Claudia")
            break
        case "4":
            console.log ("você votou na candidata Debora")
            break
        case "5":
            console.log ("você votou em nulo/branco")
            break
        default:
            console.log ("insira um candidato válido")
            break
    }