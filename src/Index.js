var time = "Time do vava formado";

console.log("Time do vava formado");

// Agentes
var herois = ["Reyna", "DeadLock", "Viper", "Omen", "Breach"];

// Caixinha pra guardar os que já saíram do case
var agentesResgatados = [];

// rng js 1k até 10001
function gerarXp() {
    return Math.floor(Math.random() * (10001 - 1000 + 1)) + 1000;
}

for (var i = 0; i < 5; i++) {
    // repete pra encontrar quem nao saiu do case ainda
    var agentesDisponiveis = herois.filter(function (agente) {
        return !agentesResgatados.includes(agente);
    });

    if (agentesDisponiveis.length === 0) {
        console.log("Pt tá full meu nobre faz o complete");
        break;
    }

    // Pega um dos agentes no switch case
    var agenteAleatorio = Math.floor(Math.random() * agentesDisponiveis.length);
    var agenteEscolhido = agentesDisponiveis[agenteAleatorio];
    agentesResgatados.push(agenteEscolhido);

    console.log("Lock " + (i + 1) + ": " + agenteEscolhido);

    //resultado do xp
    var xp = gerarXp();
    console.log("XP do agente: " + xp);
    
    if (xp === 1000) {
        console.log("Elo do nilba: Ferro");
    } else if (xp >= 1001 && xp <= 2000) {
        console.log("Elo do nilba: Bronze");
    } else if (xp >= 2001 && xp <= 5000) {
        console.log("Elo do nilba: Prata");
    } else if (xp >= 5001 && xp <= 7000) {
        console.log("Elo do nilba: Ouro");
    } else if (xp >= 7001 && xp <= 8000) {
        console.log("Elo do nilba: Platina");
    } else if (xp >= 8001 && xp <= 9000) {
        console.log("Elo do esforçado: Famoso Acidente");
    } else if (xp >= 9001 && xp <= 10000) {
        console.log("Elo do MONSTRO: Imortalzola");
    } else if (xp === 10001) {
        console.log("Elo do Monstro:Radiante");
    }
}
