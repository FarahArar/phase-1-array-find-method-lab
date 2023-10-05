// code your solution here

const records = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"},
    {year: "2015", result: "W"},

    
  ]

  function superbowlWin(record) {
    const winGame = record.find(game => game.result === "W");
  
    return winGame ? winGame.year : undefined;
  }
