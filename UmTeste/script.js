const getRandomMission = (missionsArray) => 
    missionsArray[Math.floor(Math.random() * missionsArray.length)];
const chooseMission = (faction) => {
    const missionDisplay = document.getElementById("missionDisplay");
    if(!missions[faction]){
        missionDisplay.innerHTML = "Escolha Inválida!";
        return;
    }
    missionDisplay.style.display = "block";
    missionDisplay.innerHTML =" Gerando missão";

    setTimeout (() =>{
        const mission = getRandomMission(missions[faction]);
        missionDisplay.innerHTML = (faction === "Jedi" ? "🌟" : "🔥") + ` Sua missão ${faction}: <strong>${mission}</strong>`;
    }, 2000);
}