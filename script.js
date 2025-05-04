const manchesterUnited = {
  name: "Manchester United Football Club",
  founded: 1878,
  stadium: {
    name: "Old Trafford",
    capacity: 74310,
    location: "Manchester, England"
  },
  nickname: "The Red Devils",
  manager: "Erik ten Hag",
  league: "Premier League",
  rivals: ["Manchester City", "Liverpool", "Leeds United"],
  achievements: {
    premierLeagueTitles: 20,
    faCups: 12,
    championsLeague: 3,
    europaLeague: 1,
    clubWorldCup: 1
  },
  legendaryPlayers: [
    "George Best",
    "Eric Cantona",
    "Ryan Giggs",
    "Paul Scholes",
    "David Beckham",
    "Wayne Rooney",
    "Cristiano Ronaldo"
  ],
  currentCaptain: "Bruno Fernandes",
  chant: function () {
    return "🎶 Glory Glory Man United! 🎶";
  }
};

// Display info
const infoDiv = document.getElementById("club-info");
infoDiv.innerHTML = `
  <p><strong>Nickname:</strong> ${manchesterUnited.nickname}</p>
  <p><strong>Founded:</strong> ${manchesterUnited.founded}</p>
  <p><strong>Stadium:</strong> ${manchesterUnited.stadium.name} (${manchesterUnited.stadium.capacity} seats)</p>
  <p><strong>Manager:</strong> ${manchesterUnited.manager}</p>
  <p><strong>Captain:</strong> ${manchesterUnited.currentCaptain}</p>
  <p><strong>Rivals:</strong> ${manchesterUnited.rivals.join(", ")}</p>
  <p><strong>Legendary Players:</strong> ${manchesterUnited.legendaryPlayers.join(", ")}</p>
  <p><strong>Achievements:</strong></p>
  <ul>
    <li>Premier League Titles: ${manchesterUnited.achievements.premierLeagueTitles}</li>
    <li>FA Cups: ${manchesterUnited.achievements.faCups}</li>
    <li>Champions League Titles: ${manchesterUnited.achievements.championsLeague}</li>
    <li>Europa League: ${manchesterUnited.achievements.europaLeague}</li>
    <li>Club World Cup: ${manchesterUnited.achievements.clubWorldCup}</li>
  </ul>
`;

// Button click to show chant
document.getElementById("chantBtn").addEventListener("click", () => {
  document.getElementById("chantOutput").textContent = manchesterUnited.chant();
});
