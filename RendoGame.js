
//Photo getter thingy https://www.publicalbum.org/blog/embedding-google-photos-image
// Big quiz resource https://readymadepubquiz.com/pub-quizzes-main-menu/
//Ditloids https://www.quizmasters.biz/DB/Que/Static/Brainteasers/Ditloids_01.html
//Horror  https://metro.co.uk/2016/03/24/quiz-can-you-guess-these-terrifying-horror-movies-5769102/

//https://www.edinburghnews.scotsman.com/whats-on/arts-and-entertainment/25-funny-pub-quiz-questions-2020-hilarious-and-quirky-trivia-ask-your-online-quiz-plus-answers-2540427
//  https://www.mylondon.news/whats-on/family-kids-news/take-really-random-questions-quiz-18168558
//  https://www.stokesentinel.co.uk/whats-on/whats-on-news/ultimate-virtual-pub-quiz-with-4141015



var meta = document.createElement('meta');
meta.httpEquiv = "X-Clacks-Overhead";
meta.content = "GNU Terry Pratchett";
document.getElementsByTagName('head')[0].appendChild(meta);




today = new Date();
month = today.getMonth() + 1
todayString = "" + today.getDate() + "/" + month + "/" + today.getFullYear();

questionStyle = 'style="font-family:verdana;color:Black;font-size:30px;topMargin=10px;bottomMargin=10px"';
answerStyle = 'style="font-family:Courier New;color:Black;font-size:30px;topMargin=0px;bottomMargin=0px;"';
previousButton = "<input type='button' class='userBtnStop' value='Previous' title='Previous' id='Previous' onclick='runPreviousQuestStage()' />";
nextButton = "<input type='button' class='userBtnNext' value='Next' title='Next' id='Next' onclick='runNextQuestStage()' />";
answerButton = "<input type='button' class='userBtnNext' value='Answers' title='Answers' id='Next' onclick='runNextQuestStage()' />";
tagsButton = "<input type='button' class='userBtnStop' value='Categories' title='Categories' id='Categories' onclick='showCategories()' />";
Table4ColumnStart="<table style='font-family:verdana;color:Black;font-size:30px;topMargin=10px;bottomMargin=10px' width='70%' border='1'><tr><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>";
Table4ColumnEnd=" </td></tr></table>";
puncture = 'Puncture';
lost = 'Lost';
MaintenanceLow = 1;
MaintenanceMedium = 2;
MaintenanceHigh  = 3

FitnessLardass = 1;
FitnessOK = 2;
FitnessHigh =  3;

startCell = 'AG3';
gameflowTypeDiceRoll='DiceRoll';
gameflowTypeConditional='Conditional';
gameflowTypeChoice='Choice';


twitterFeedBadCount = -1;
twitterFeedBadSource = new Array();
twitterFeedBadSource[twitterFeedBadCount++] = " - looks like he did some training for once";
twitterFeedBadSource[twitterFeedBadCount++] = " is blowing out of his arse";
twitterFeedBadSource[twitterFeedBadCount++] = " is turning those pedals as if he's making super soft butter";
twitterFeedBadSource[twitterFeedBadCount++] = "'s kids can't have seen much of the Quality Street this Christmas";
twitterFeedBadSource[twitterFeedBadCount++] = "'s girlfriend must give him 3 biscuits after a shag";
twitterFeedBadSource[twitterFeedBadCount++] = "- He tells me he's a Strava Legend. More like a pie eating legend";
twitterFeedBadSource[twitterFeedBadCount++] = "- He loves his new ebike";
twitterFeedBadSource[twitterFeedBadCount++] = "- He desperately wants an ebike";
twitterFeedBadSource[twitterFeedBadCount++] = "- He hasn't told anyone yet, but he's secretly been riding an ebike since April 2020";
twitterFeedBadSource[twitterFeedBadCount++] = "- He thinks you are all secretly riding ebikes";
twitterFeedBadSource[twitterFeedBadCount++] = "- He knows which of you has an ebike";
twitterFeedBadSource[twitterFeedBadCount++] = "- I love a man in Lycra, but not this man";
twitterFeedBadSource[twitterFeedBadCount++] = "- He's just bought some fancy new shorts. Apparently the washing machine shrunk his old pair";
twitterFeedBadSource[twitterFeedBadCount++] = "- Train harder you lazy shagwit";
twitterFeedBadSource[twitterFeedBadCount++] = "- Suck it up and train harder";
twitterFeedBadSource[twitterFeedBadCount++] = "- Harden the fuck up";
twitterFeedBadSource[twitterFeedBadCount++] = "- Was this a recovery ride?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Is your poorly knee playing up again?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Are your brakes binding?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Were you gears slipping?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Slow puncture?";
twitterFeedBadSource[twitterFeedBadCount++] = "- He says he's faster on the road than everyone";
twitterFeedBadSource[twitterFeedBadCount++] = "- This route not hilly enough for you?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Apparently he's still recovering from big ride at the weekend";
twitterFeedBadSource[twitterFeedBadCount++] = "- Why so slow? Bedding in new brake pads?";
twitterFeedBadSource[twitterFeedBadCount++] = "- He says it about the flow, not the segment. Liar.";
twitterFeedBadSource[twitterFeedBadCount++] = "- At least you didn't break your toe putting your shorts on";
twitterFeedBadSource[twitterFeedBadCount++] = "- He says he bonked. Not with me since at least 2009";
twitterFeedBadSource[twitterFeedBadCount++] = "- He's thinking of taking up golf";
twitterFeedBadSource[twitterFeedBadCount++] = "-- Perhaps you should consider golf lessons?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Melton bowls club is looking for new members";
twitterFeedBadSource[twitterFeedBadCount++] = "- How come the old boys are so much faster than you?";
twitterFeedBadSource[twitterFeedBadCount++] = "- He says a badger slowed him down";
twitterFeedBadSource[twitterFeedBadCount++] = "- A squirrel distracted him";
twitterFeedBadSource[twitterFeedBadCount++] = "- He swerved to avoid an adder";
twitterFeedBadSource[twitterFeedBadCount++] = "- He gets intimidated by the dirty pigeons";
twitterFeedBadSource[twitterFeedBadCount++] = "- He swallowed a fly";
twitterFeedBadSource[twitterFeedBadCount++] = "- Did you stop mid-segment to take a photo?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Don't believe him if he tells you he's been training hard during lock-down. He's mainly been watching YouTube and eating cheesy Wotsits";
twitterFeedBadSource[twitterFeedBadCount++] = "- It's not surprising you are so slow. You've spent lock-down drinking port and eating cheese";
twitterFeedBadSource[twitterFeedBadCount++] = "- You'd go faster if you cleaned your bike once in a while. Some of that mud is from the Mary Towneley Loop in 2015";
twitterFeedBadSource[twitterFeedBadCount++] = "- Please tell him I don't know if he should have 28 or 38 PSI in his front tyre";
twitterFeedBadSource[twitterFeedBadCount++] = "- Tubed or tubeless? Who gives a shit?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Apparently he needs a more expensive bike to go faster";
twitterFeedBadSource[twitterFeedBadCount++] = "- He said he needs a lighter bike to go faster. I told to tubby f-er to skip a few breakfasts";
twitterFeedBadSource[twitterFeedBadCount++] = "- He'd go faster if it were a proper race";
twitterFeedBadSource[twitterFeedBadCount++] = "- It's not the segment that's wibbly-wobbly, it's you, you lard arse";
twitterFeedBadSource[twitterFeedBadCount++] = "- He thinks he's badass, but he's just a fat ass";
twitterFeedBadSource[twitterFeedBadCount++] = "- He thinks he's a badass, but he's actually a lard arse";
twitterFeedBadSource[twitterFeedBadCount++] = "- It's faster in the opposite direction";
twitterFeedBadSource[twitterFeedBadCount++] = "- He prefers Fynn Valley";
twitterFeedBadSource[twitterFeedBadCount++] = "- he prefers Tunstall";
twitterFeedBadSource[twitterFeedBadCount++] = "- Gravel bikes are cheating";
twitterFeedBadSource[twitterFeedBadCount++] = "- He be faster if he had a gravel bike";
twitterFeedBadSource[twitterFeedBadCount++] = "- He'd be faster on a new bike";
twitterFeedBadSource[twitterFeedBadCount++] = "- His last PB was for a six pack of Stella";
twitterFeedBadSource[twitterFeedBadCount++] = "- He slowed so not to catch the rider in front";
twitterFeedBadSource[twitterFeedBadCount++] = "- He'd be faster without the face covering";
twitterFeedBadSource[twitterFeedBadCount++] = "- He thinks he's suffering the effects of long covid";
twitterFeedBadSource[twitterFeedBadCount++] = "- Is this your local area?";
twitterFeedBadSource[twitterFeedBadCount++] = "- He's careful, not slow";
twitterFeedBadSource[twitterFeedBadCount++] = "- He's actually really quick for his age";
twitterFeedBadSource[twitterFeedBadCount++] = "- He served to avoid a lady and her pig";
twitterFeedBadSource[twitterFeedBadCount++] = "- Huskies on the trail again?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too sandy?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too muddy?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too many fir cones?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Wrong tyres?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Tyre pressure too low?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Tyre pressures too high?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too windy?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too cold?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Head wind?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too many roots?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too many trees?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too much gravel?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Not enough corners?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too flat?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too many layers?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Didn't need the ski jacket?";
twitterFeedBadSource[twitterFeedBadCount++] = "- Too much beetroot juice?";
twitterFeedBadSource[twitterFeedBadCount++] = "- He's not a competitive person";
twitterFeedBadSource[twitterFeedBadCount++] = "- He says he's not competitive. I say he's not very fast";
twitterFeedBadSource[twitterFeedBadCount++] = "- It's about mindfulness, not KoMs";
twitterFeedBadSource[twitterFeedBadCount++] = "- It's about mindfulness, not PBs";
twitterFeedBadSource[twitterFeedBadCount++] = "- I can't wait for lock-down to end so I can't get some peace and quiet on Thursday night";
twitterFeedBadSource[twitterFeedBadCount++] = "- I bet you that you look good on the dancefloor";
twitterFeedBadSource[twitterFeedBadCount++] = "- Looks like the muscles went to Brussels";
twitterFeedBadSource[twitterFeedBadCount++] = "- Daisy, daisy give me your answer do";
twitterFeedBadSource[twitterFeedBadCount++] = "- On yer bike!";
twitterFeedBadSource[twitterFeedBadCount++] = "- What a motley crew! But with more Lycra";
twitterFeedBadSource[twitterFeedBadCount++] = "- What did you get for Christmas grandad";
twitterFeedBadSource[twitterFeedBadCount++] = "- You should stick to 3 wheels mate!";
twitterFeedBadSource[twitterFeedBadCount++] = "- It was a mistake to take the stabilisers off!";
twitterFeedBadSource[twitterFeedBadCount++] = "- Looking good! (For your age)";
twitterFeedBadSource[twitterFeedBadCount++] = "- It's only a hill, get over it!";
twitterFeedBadSource[twitterFeedBadCount++] = "- Looks like your legs are out of breath";
twitterFeedBadSource[twitterFeedBadCount++] = "- Remember: sweat is just fat crying";
twitterFeedBadSource[twitterFeedBadCount++] = "- Oh no he's collapsed. Hurry, pause his Garmin.";

players = new Array();
gameflow = new Array();

gameflowIndexBuilder = -1;

gameflow[++gameflowIndexBuilder] = {
		originCell : startCell,
		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AI6',
		minDiceRoll : 2,
		isSegment : 0
	};
gameflow[++gameflowIndexBuilder] = {
		originCell : 'AI6',
		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AJ7',
		minDiceRoll : 4,
		isSegment : 0
	};
gameflow[++gameflowIndexBuilder] = {
		originCell : 'AJ7',
		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AN7',
		minDiceRoll : 5,
		isSegment : 0
	};
gameflow[++gameflowIndexBuilder] = {
		originCell : 'AN7',
		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AO7',
		minDiceRoll : 5,
		isSegment : 0
	};
gameflow[++gameflowIndexBuilder] = {
		originCell : 'AO7',
		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AR3',
		minDiceRoll : 5,
		isSegment : 0
	};
gameflow[++gameflowIndexBuilder] = {
		originCell : 'AR3',
		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AT3',
		minDiceRoll : 2,
		isSegment : 0
	};
gameflow[++gameflowIndexBuilder] = {
		originCell : 'AT3',
		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AV7',
		minDiceRoll : 6,
		isSegment : 0
	};
gameflow[++gameflowIndexBuilder] = {
		originCell : 'AV7',
		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AZ8',
		minDiceRoll : 4,
		isSegment : 0
	};
var currPlayer = -1;
playerIndexBuilder = -1;


players[++playerIndexBuilder] = {
		name : "Ian H",
		id : "IH",
		hoverover : "Hop",
		twitterer : "Jules",
		currentCell : startCell,
		previousCell : startCell,
		currentRollSum : 0,
		chatSum : 0,
		bike : 'Titanium 29" hardtail.  He is a lard-arse, so expect to see him blowing hard.',
		maintenance : MaintenanceMedium,
		fitness : FitnessLardass
	};
players[++playerIndexBuilder] = {
		name : "Steve W",
		id : "SW",
		twitterer : "Jill",
		hoverover : "Shandyman",
		currentCell : startCell,
		previousCell : startCell,
		currentRollSum : 0,
		chatSum : 0,
		bike : 'Aluminium 26 inch victorian era rustbucket with no working brakes or suspension.  Steve can dance, play any sport he puts his mind to and looks good in sandals.  Luckily he drinks shandy and plays bass so not liking the cocky bugger comes easy.',
		maintenance : MaintenanceLow,
		fitness : FitnessHigh
	};
players[++playerIndexBuilder] = {
		name : "Maysty",
		id : "AM",
		twitterer : "Ele",
		hoverover : "Mayst",
		currentCell : startCell,
		previousCell : startCell,
		currentRollSum : 0,
		chatSum : 0,
		bike : 'Aluminium twenty-niner that is far too good for him.  Maysty is a runner, so expect him to be massively unimpressive for a skinny guy.',
		maintenance : MaintenanceHigh,
		fitness : FitnessHigh
	};





isStart = 1;
 
function rendoGameInit() {
	


	document
			.write("<div id='SQQuiz'; marginTop = '1px'; marginBottom='1px'; height: 100%; width:100%><span id='SQworkarea' class='grad'><table border='1' width=100% ><tr>" 
					+ "<td style='text-align:left;vertical-align:top;padding:0' width=20%><table border='1'  width:100%><tr><td style='text-align:left;vertical-align:top;padding:0'><span id='SQplayers'>Gameplay area</span></td></tr>" 
					+ "<tr><td> <input type='button' class='userBtnNext' value='Roll the dice' title='Next' id='Next' onclick='runNextPlayer()' /> </td></tr>" 
					+ "<tr><th>Twitter Race Feed</th></tr><tr></tr><tr><td><div style='height: 350px; width: 250px; overflow:scroll;'  id='SQtwitter'></span></td></tr></table></td> "
					+ "<td width=80%><table border='0' class='map-background' ><tr><td width=100vw><div height: 100vh; width:100vw id='SQmap'></span></td></tr></table></td> "
					+ "</tr></table> </span> <div style='height: 130px; width: 100%; overflow:scroll;'  id='SQCommentary'> </div></div>" );
	
	var mapArea = document.getElementById("SQmap");
	mapArea.innerHTML = SQWriteGameTable()		;
	
	var mapArea = document.getElementById("SQplayers");
	mapArea.innerHTML = SQAddPlayers()		;
	
	overWriteCell(startCell, players[0].id);
	
}

function runNextPlayer() {
	
	if (isStart) {
		isStart = 0;
		introduceTheGameplayAndPlayers();
		return
	}
	
	
	player = getNextPlayer();
	
	gameCell = gameflow[getCurrentGameFlowIndex(player.currentCell)] ;
	
	diceRoll = rollTheDice();
	console.log(diceRoll + player.currentRollSum > gameCell.minDiceRoll);
	if (diceRoll + player.currentRollSum >= gameCell.minDiceRoll) {
		overWriteCell(player.currentCell, '');
		player.previousCell = player.currentCell;
		player.currentCell = gameCell.nextCell;
		overWriteCell(player.currentCell, player.id);
		fillCellIfAnotherPlayerThere(gameCell.originCell);
		player.currentRollSum = diceRoll + player.currentRollSum - gameCell.minDiceRoll;
	} else{
		player.currentRollSum = player.currentRollSum + diceRoll;
	}
	if (player.currentRollSum == 0) {
		//Landed squarely on the cell
	}
	document.getElementById(player.id).innerHTML = 'DiceRoll left=' + player.currentRollSum;
	sendTweet(diceRoll, player.twitterer, player.hoverover);
	sendCommentary(diceRoll, player.twitterer, player.hoverover);
	
}

function getNextCell(totalMovesAvailable, gamecell){
	currentGameFlowIndex = getCurrentGameFlowIndex(gameCell);
	
}
function sendCommentary(diceRoll, twitterer, player) {
	document.getElementById('SQCommentary').innerHTML = 'Roll=' + diceRoll + ' for ' + player + ' </BR>' + document.getElementById('SQCommentary').innerHTML;
}
function sendTweet(diceRoll, twitterer, player) {
	message = twitterFeedBadSource[(Math.round(Math.random()*(twitterFeedBadSource.length))-1)];
	document.getElementById('SQtwitter').innerHTML = '<b>' + twitterer + '</b> says: "' + player + message + '" </BR>' + document.getElementById('SQtwitter').innerHTML;
	speak(twitterer + ' says: "' + player + message );
}
function fillCellIfAnotherPlayerThere(cellId) {
	playerCount=players.length;
	for (var playerIndex = 0; playerIndex < playerCount; playerIndex++) { 
		if (players[playerIndex].currentCell == cellId) {
			overWriteCell(cellId, players[playerIndex].id);
			return;
		}
	}
}

function overWriteCell(cellId, value) {
	document.getElementById(cellId).innerHTML='<font color="red"> ' + value + '</font>';
}
function getNextPlayer(){
	currPlayer++;
	if (currPlayer >= players.length) {
		currPlayer = 0;
	}
	return players[currPlayer]
}

function getCurrentGameFlowIndex(currentCell) {
	gameStopsCount=gameflow.length;
	for (var flowIndex = 0; flowIndex < gameStopsCount; flowIndex++) { 
		if (currentCell == gameflow[flowIndex].originCell) {
			return flowIndex;
		}
	}
}

function rollTheDice(isMaysty){
	return Math.round(Math.random()*5) + 1;
}
function rollTheChanceDice(isMaysty){
	whatIsHappening = [puncture,lost,'','','','','','','','','','','','','','',''];
	return whatIsHappening[Math.round(Math.random()*16)] ;
}

function speak(message){
	if (!'speechSynthesis' in window) {
		return;
	}
	var msg = new SpeechSynthesisUtterance();
	msg.text = message;
	window.speechSynthesis.speak(msg);

}

function introduceTheGameplayAndPlayers(){
	alert("Welcome to the game.  Press OK when you're ready to meet the racers");
	messageString='';
	playersCount = players.length;
	for (var playerIndex = 0; playerIndex< playersCount; playerIndex++) { 
		speak( players[playerIndex].name + " rides a " + players[playerIndex].bike);

		//alert(messageString);
	}
	//speak(messageString);
}
function SQAddPlayers(){
	playersCount = players.length;
	tableString= ''
	for (var playerIndex = 0; playerIndex< playersCount; playerIndex++) { 
		tableString = tableString + '<table width=100%><tr> <th>' + players[playerIndex].name + '</th> </tr>'
		+ '<tr><td><span id="' + players[playerIndex].id + '" >&nbsp</span></td> </tr></table>';
	}
	return tableString;
	
}
function SQWriteGameTable(){
	colNames = ['AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ','BA','BB','BC','BD','BE','BF'];
	rowMax=21;
	
	colCount = colNames.length;
	tableString= '<font face="Courier New" size="4"><table class="map-background" width=100% height=100%>'
	for (var col = 0; col < colCount; col++) { 
		tableString = tableString + '<col width = "25px" />';
	}
	tableString= tableString + '<tr>';
	for (var col = 0; col < colCount; col++) { 
		tableString = tableString + '<th><span id="' + colNames[col]  + '" >' + colNames[col] + '</span></th>';
	}
	tableString = tableString + '</tr>'
	for (var row = 0 ; row < rowMax ; row++) {
		tableString = tableString + '<tr>';
		for (var col = 0; col < colCount; col++) { 
			tableString = tableString + "<td><span id='" + colNames[col] + row + "' >&nbsp</span></td>";
		}
		tableString = tableString + '</tr>';
	}
	tableString = tableString + '</table></font>';
	return tableString;
	
}
