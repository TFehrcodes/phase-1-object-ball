function gameObject() {
  return {
    home: {
      teamName: 'Brooklyn Nets', colors: ['Black', 'White'], players: {
       'Alan Anderson': {jerseyNumber: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1},
       'Reggie Evans': {jerseyNumber: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7},
       'Brook Lopez': {jerseyNumber: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15},
       'Mason Plumlee': {jerseyNumber: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5},
       'Jason Terry': {jerseyNumber: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1}
      }
    },
    away:
    {
      teamName: 'Charlotte Hornets', colors: ['Turquoise', 'Purple'], players: {
        'Jeff Adrien': {jerseyNumber: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2},
        'Bismack Biyombo': {jerseyNumber: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10},
        'DeSagna Diop': {jerseyNumber: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5},
        'Ben Gordon': {jerseyNumber: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0},
        'Brendan Haywood': {jerseyNumber: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12}
      }
    }
  }
};

function homeTeam() {
  return gameObject().home
}

function awayTeam() {
  return gameObject().away
}
function players() {
  return Object.assign({}, homeTeam().players, awayTeam().players)
}


function numPointsScored(playerInput) {
  const playerArrays = Object.entries(players())
  const player = playerArrays.find(playerArray => playerArray[0] === playerInput)
      return player[1].points
}

console.log('desagna number of points', numPointsScored('DeSagna Diop'))

function shoeSize(playerName) {
  const playerArrays = Object.entries(players())
  const player = playerArrays.find(playerArray => playerArray[0] === playerName)
      return player[1].shoe
}

console.log('desagna shoe size', shoeSize('DeSagna Diop'))

function teamColors(teamName) {
  if (teamName === gameObject().home.teamName) {
    return gameObject().home.colors
  }
  else if (teamName === gameObject().away.teamName) {
    return gameObject().away.colors
  }
}

console.log(teamColors('Brooklyn Nets'))

function teamNames() {
  let object = gameObject()
  let homeTeamName = object.home.teamName
  let awayTeamName = object.away.teamName
  return [homeTeamName, awayTeamName]
}

console.log(teamNames())

function playerNumbers(teamName) {
  debugger
  if (teamName === 'Brooklyn Nets') {
    let homePlayers = Object.values(gameObject()['home']['players']);
    return homePlayers.map((player) => player.jerseyNumber)
  }
  else if (teamName === 'Charlotte Hornets') {
    let awayPlayers = Object.values(gameObject()['away']['players']);
    return awayPlayers.map((player) => player.jerseyNumber)
  }
}

console.log(playerNumbers('Charlotte Hornets'))
console.log(playerNumbers('Brooklyn Nets'))

function playerStats(playerName) {
  return players()[playerName]
}

console.log(playerStats('DeSagna Diop'))

console.log(Object.values(gameObject()['home']['players']))

function bigShoeRebounds() {
  let homePlayers = Object.values(gameObject()['home']['players']);
  let awayPlayers = Object.values(gameObject()['away']['players']);
  let bigShoeMan = homePlayers[0]
  console.log(bigShoeMan)
  for (const player of homePlayers) {
    if (player.shoe > bigShoeMan.shoe) {
       bigShoeMan = player
    }
  }
  return bigShoeMan.rebounds
}


console.log(bigShoeRebounds())