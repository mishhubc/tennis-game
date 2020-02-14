let totalVotes=0;
const player1={
name: 'Rafael Nadal',
votes:0,
};
const player2={
name: 'Novak Djokovic',
votes:0,
};

function vote(player){
  player.votes++;
totalVotes++;
}


//ask for votes
while(totalVotes<10){
  let choice= prompt('To vote Rafael Nadal, type 1, to vote Novak Djokovic type 2');
  ///11==>Rafael
  ///2 Novak
  if(choice === '1'){
    vote(player1);
  } else if(choice === '2'){
    vote(player2);
  }
}

const insert= document.querySelector('body');
console.log("Results:");
console.log(`Rafael: ${player1.votes} votes.`);
console.log(`Nowak: ${player2.votes} votes.`);
if(player1.votes > player2.votes){
  console.log(`${player1.name} is favourite to win`);
} else if(player1.votes< player2.votes) {
  console.log(`${player2.name} is favourite to win`);
}
else{
  console.log('No favourite to win');
}