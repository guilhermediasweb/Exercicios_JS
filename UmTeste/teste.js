const missions = {
    Jedi: [
        "Proteger um planeta pacífico",
        "Resgatar um prisioneiro da Resistência",
        "Investigar uma presença sombria na força"
    ],
    Sith: [
        "Destruir uma base rebelde",
        "Corromper um jovem Padawan",
        "Roubar um holocron Jedi"
    ]
}

const getRandomMission = (missionsarray) => 
    missionsarray[Math,floor(Math.random() * missionsarray.length)]
const chooseMission = (faction, callback) => {
    if(!missions[faction]){
        console.log("Escolha inválida! Selecione 'Jedi' ou 'Sith'.")
        return
    }
    const mission = getRandomMission(missions[faction])
    callback(mission)
}

chooseMission("Jedi", (mission) => {
    console.log(`Sua missão Jedi: ${mission}`)
})
chooseMission("Sith", (mission) => {
    console.log(`Sua missão Sith: ${mission}`)
})