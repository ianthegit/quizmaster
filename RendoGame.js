
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

startCell = 'AG10';
gameflowTypeDiceRoll='DiceRoll';
gameflowTypeConditional='Conditional';
gameflowTypeChoice='Choice';

drink1 = "PUNCTURE!!!!  Have a drink to keep warm.";
drink2 = "OW!!!  You took a tumble, drink away the pain."
drink3 = "HaHa!!!  It's your round - everyone have a drink."
	
twitterFeedBadCount = -1;
twitterFeedBadSource = new Array();

players = new Array();
gameflow = new Array();

gameflowIndexBuilder = -1;

gameflow[++gameflowIndexBuilder] = {		originCell : startCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AH11',		minDiceRoll : 1,		isSegment : 0 	, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AI12',		minDiceRoll : 1,		isSegment : 1		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AJ13',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AI14',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AJ15',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AJ16',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AK17',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AL19',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AL20',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 1, isHazard : 0}; 
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AN19',	minDiceRoll : 2,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AO19',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AQ20',	minDiceRoll : 2,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AS21',	minDiceRoll : 2,		isSegment : 0 	, isDringstop : 0	, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AU21',	minDiceRoll : 2,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AV21',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AW21',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AX21',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AY21',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AZ21',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BA21',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BB22',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BC22',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BE22',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 1, isHazard : 0}; 
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BF21',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BF20',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BE20',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BC19',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BD18',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BD17',	minDiceRoll : 1,		isSegment : 1 	, isDringstop : 0	, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BD16',	minDiceRoll : 1,		isSegment : 1 	, isDringstop : 0	, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BD15',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BD14',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BD13',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BC12',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BC10',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BC9',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BD9',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BE9',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BF9',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 1, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BG9',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BH9',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BH10',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BH11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BH12',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BG13',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BF13',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BF14',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BF15',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BF16',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BF17',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BG17',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 1};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BH17',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BI17',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BI16',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BI15',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BI14',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BI13',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BJ13',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BJ12',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BK12',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BL11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BN11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BO10',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BP10',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BQ10',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BQ11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BR11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BS11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BT11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BT10',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BT9',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BT8',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BS8',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BR8',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BQ8',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BQ7',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BQ6',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 1};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BQ5',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BQ4',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BQ3',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BR3',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BS3',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BT3',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BU4',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BV4',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BW3',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BX3',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BY3',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BY4',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BZ5',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BZ6',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BZ7',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BZ8',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BZ9',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BZ10',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BZ11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BY11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 1, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BY12',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BY13',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BX14',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BY14',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BZ15',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA15',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CB16',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CC16',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CD17',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CE17',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CF16',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CG17',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CH17',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CI18',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CJ17',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CK18',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CL18',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CL19',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CK20',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CK21',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 1};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CK22',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CK23',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CK24',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CK25',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CL26',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CL27',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CM27',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CM28',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CM29',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CM30',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CM31',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CL32',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CK32',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CJ32',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CI32',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CH31',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CG32',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CF32',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CE32',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CD33',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CC33',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CB32',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA31',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA30',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA29',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA28',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 1};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA27',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA26',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA25',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA24',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA23',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'CA22',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 1, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BZ22',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BY22',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BX22',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BX23',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BX24',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BW25',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BV25',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BU25',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BS26',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BR26',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BQ26',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BQ25',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BP25',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BO26',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BN26',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BN27',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BN28',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM29',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM30',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM31',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM32',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM33',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM34',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM35',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM36',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM37',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BM38',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 1, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BL38',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BK38',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BJ38',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BI38',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BH38',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BKG37',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BF37',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BK38',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BE36',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BD36',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BC35',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BB34',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'BA34',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AZ33',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AY32',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AX31',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AW30',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AV29',	minDiceRoll : 1,		isSegment : 1 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AV30',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AU30',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AT29',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 1};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AU28',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AV27',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AV26',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 1, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AW25',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AW24',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AW23',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AX22',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AX20',	minDiceRoll : 2,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AX19',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AX18',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AW18',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AV17',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AU16',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AT15',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AS15',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AR14',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AR13',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AR12',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AR11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AR10',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AQ10',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AP10',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AO11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AN10',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AM10',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AL10',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AK10',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AJ10',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};
gameflow[++gameflowIndexBuilder] = {		originCell : gameflow[gameflowIndexBuilder-1].nextCell,		gameflowType : gameflowTypeDiceRoll,
		nextCell : 'AI11',	minDiceRoll : 1,		isSegment : 0 		, isDringstop : 0, isHazard : 0};

var currPlayer = -1;
playerIndexBuilder = -1;
isStartDone=false;



function rendoGameInit() {
	
	fillTwitterSledges();
	fillPlayers();

	tableclass = 'map-background';
	if (isDesignMode()) {
		tableclass = tableclass + '-design';
	}
	document
			.write("<div id='SQQuiz'; marginTop = '1px'; marginBottom='1px'; height: 100%; width:100%><span id='SQworkarea' class='grad'><table border='1' width=100% ><tr>" 
					+ "<td style='text-align:left;vertical-align:top;padding:0' width=20%><table border='1'  width:100%><tr><td style='text-align:left;vertical-align:top;padding:0px 0px'><span id='SQplayers'>Gameplay area</span></td></tr>" 
					+ "<tr><td> <input type='button' class='userBtnNext' value='Roll the dice' title='Next' id='Next' onclick='runNextPlayer()' /> </td></tr>" 
					+ "<tr><th>Twitter Race Feed</th></tr><tr></tr><tr><td><div style='height: 300px; width: 200px; overflow:scroll;'  id='SQtwitter'></span></td></tr></table></td> "
					+ "<td width=70%><table border='0' class='" + tableclass + "' ><tr><td width=100vw><div height: 100vh; width:100vw id='SQmap'></span></td></tr></table></td> "
					+ "</tr></table> </span> <div style='height: 130px; width: 100%; overflow:scroll;'  id='SQCommentary'> </div></div>" );
	
	var mapArea = document.getElementById("SQmap");
	mapArea.innerHTML = SQWriteGameTable()		;
	
	var mapArea = document.getElementById("SQplayers");
	mapArea.innerHTML = SQAddPlayers()		;
	
	overWriteCell(startCell, players[0].id, players[0].name);
	
}

function runNextPlayer() {
	
	if (!skipStart() && !isStartDone ) {
		isStartDone=true;
		introduceTheGameplayAndPlayers();
		return;
	}
	
	
	player = getNextPlayer();
	
	shouldIDrink = rollTheDrinkingDice(0) ;
	if (shouldIDrink != '') {
		speak(player.name +  ' ' + shouldIDrink);
		sendDrinkingCommentary(player.name + ' - ' + shouldIDrink);
		alert(player.name + ' - ' + shouldIDrink);
		return;
	}
	
	gameCell = gameflow[getCurrentGameFlowIndex(player.currentCell)] ;
	
	diceRoll = rollTheDice(0);
	//console.log(diceRoll + player.currentRollSum > gameCell.minDiceRoll);
	
	nextCell = getNextCell(player, gameCell, diceRoll);
	if (nextCell=='WIN') { 
		speak(player.name + ' is the WINNER');
		alert(player.name + ' is the WINNER');
		return;
	}
	if (nextCell != player.currentCell) {
		overWriteCell(player.currentCell, '','');
		player.previousCell = player.currentCell;
		player.currentCell = nextCell;
		overWriteCell(player.currentCell, player.id, player.name);
		fillCellIfAnotherPlayerThere(gameCell.originCell);
		//player.currentRollSum = diceRoll + player.currentRollSum - gameCell.minDiceRoll;
	} else{
		//player.currentRollSum = player.currentRollSum + diceRoll;
	}
	if (player.currentRollSum == 0) {
		//Landed squarely on the cell
	}
	document.getElementById(player.id).innerHTML = 'DiceRoll left=' + player.currentRollSum + '  Current cell = ' + player.currentCell + ' isDrinkStop=' + gameflow[getCurrentGameFlowIndex(nextCell)].isDringstop;
	if (diceRoll<3) {
		sendTweet(diceRoll, player.twitterer, player.hoverover);
	}
	sendCommentary(diceRoll, player.twitterer, player.hoverover);
	
	if (gameflow[getCurrentGameFlowIndex(nextCell)].isDringstop == 1) {
		speak(player.name +  ' DRINKSTOP - everyone drink');
		sendDrinkingCommentary(player.name + ' - DRINKSTOP - everyone drink');
		alert(player.name + ' - ' + ' DRINKSTOP - everyone drink');
	}
}

function skipStart() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has('skipStart')) {
		return 1;
	};
	return 0 ;
}

function isDesignMode() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has('designMode')) {
		return true;
	};
	return false ;
}

function getNextCell(player, gameCell, totalMoves){
	currentGameFlowIndex = getCurrentGameFlowIndex(gameCell.originCell);
	gameStopsCount=gameflow.length;
	sendDebugCommentary("   TotalMoves = " + totalMoves + "  Current gameflow index =" + currentGameFlowIndex + "  CurrentGameCell = " + gameCell.originCell);
	for (currentGameFlowIndexIterator = currentGameFlowIndex ; currentGameFlowIndexIterator < gameStopsCount; currentGameFlowIndexIterator++) {
		if (totalMoves < gameflow[currentGameFlowIndexIterator].minDiceRoll) {
			//player.currentCell = gameflow[currentGameFlowIndexIterator].nextCell;
			sendDebugCommentary("nextCell = " +gameflow[currentGameFlowIndexIterator].originCell + "   minDiceRoll=" + gameflow[currentGameFlowIndexIterator].minDiceRoll + "  totalMoves =" + totalMoves );
			player.currentRollSum = totalMoves;
			return gameflow[currentGameFlowIndexIterator].originCell;
		}
		if (totalMoves >= gameflow[currentGameFlowIndexIterator].minDiceRoll) {
			totalMoves = totalMoves - gameflow[currentGameFlowIndexIterator].minDiceRoll;
		}
	}
	return 'WIN'
}
function sendCommentary(diceRoll, twitterer, player) {
	document.getElementById('SQCommentary').innerHTML = 'Roll=' + diceRoll + ' for ' + player + ' </BR>' + document.getElementById('SQCommentary').innerHTML;
}
function sendDrinkingCommentary(comment) {
	document.getElementById('SQCommentary').innerHTML = comment + ' </BR>' + document.getElementById('SQCommentary').innerHTML;
}
function sendDebugCommentary(debugString) {
	isDebugMode = isDesignMode();
	if (isDebugMode) {
		document.getElementById('SQCommentary').innerHTML = debugString + ' </BR>' + document.getElementById('SQCommentary').innerHTML;
	}
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
			overWriteCell(cellId, players[playerIndex].id, players[playerIndex].name);
			return;
		}
	}
}

function overWriteCell(cellId, value, tooltip) {
	document.getElementById(cellId).innerHTML='<font color="red" title="' + tooltip + '"> ' + value + '</font>';
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

function rollTheDrinkingDice(isMaysty){
	drinkingGame = ['','','','','','',drink1,'','','','','','',drink2,'','','','','',drink3,'','',''];
	return drinkingGame[Math.round(Math.random()*22)] ;
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
		speak( players[playerIndex].name + " rides " + players[playerIndex].bike);

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
	isDebugMode = isDesignMode();
	tableclass = 'map-background';
	if (isDebugMode) {
		tableclass = tableclass + '-design';
	}
	colNames = ['AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ','BA','BB','BC','BD','BE','BF','BG','BH','BI','BJ','BK','BL','BM','BN','BO','BP','BQ','BR','BS','BT','BU','BV','BW','BX','BY','BZ','CA','CB','CC','CD','CE','CF','CG','CH','CI','CJ','CK','CL','CM'];
	rowMax=44;
	
	colCount = colNames.length;
	tableString= '<font face="Courier New" size="2"><table class="' + tableclass + '" width=100% height=100% padding=0px >'
	for (var col = 0; col < colCount; col++) { 
		tableString = tableString + '<col width = "20px" />';
	}
	tableString= tableString + '<tr>';
	for (var col = 0; col < colCount; col++) { 
		tableString = tableString + '<td><span id="' + colNames[col]  + '" >' + colNames[col] + '</span></th>';
	}
	tableString = tableString + '</tr>'
	for (var row = 0 ; row < rowMax ; row++) {
		tableString = tableString + '<tr>';
		for (var col = 0; col < colCount; col++) { 
			cellTitle='';
            cellContent='&nbsp&nbsp';
			if (isDebugMode) {
				cellTitle = " title='" + colNames[col] + row + "'";
				if (row < 10 ) {
					cellContent =row + '&nbsp';
				} else {
					cellContent =row;
				}
			}
			
			tableString = tableString + "<td><span id='" + colNames[col] + row + "' " + cellTitle + " >" + cellContent + "</span></td>";
		}
		tableString = tableString + '</tr>';
	}
	tableString = tableString + '</table></font>';
	return tableString;
	
}

function fillTwitterSledges() {
	twitterFeedBadSource[twitterFeedBadCount++] = " - looks like he did some training for once";
	twitterFeedBadSource[twitterFeedBadCount++] = " is blowing out of his arse";
	twitterFeedBadSource[twitterFeedBadCount++] = " is turning those pedals as if he's making super soft butter";
	twitterFeedBadSource[twitterFeedBadCount++] = "'s kids can't have seen much of the Quality Street this Christmas";
	twitterFeedBadSource[twitterFeedBadCount++] = "'s girlfriend must give him 3 biscuits after a shag";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He tells me he's a Strava Legend. More like a pie eating legend";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He loves his new e-bike";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He desperately wants an e-bike";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He hasn't told anyone yet, but he's secretly been riding an e-bike since April 2020";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He thinks you are all secretly riding e-bikes";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He knows which of you has an e-bike";
	twitterFeedBadSource[twitterFeedBadCount++] = "- I love a man in Lycra, but not this man";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He's just bought some fancy new shorts. Apparently the washing machine shrunk his old pair";
	twitterFeedBadSource[twitterFeedBadCount++] = "- Train harder you lazy shag wit";
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
	twitterFeedBadSource[twitterFeedBadCount++] = "- He says its about the flow, not the segment. Liar.";
	twitterFeedBadSource[twitterFeedBadCount++] = "- At least you didn't break your toe putting your shorts on";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He says he bonked. He's not bonked well since at least 2009";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He's thinking of taking up golf";
	twitterFeedBadSource[twitterFeedBadCount++] = "- Perhaps you should consider golf lessons?";
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
	twitterFeedBadSource[twitterFeedBadCount++] = "- He said he needs a lighter bike to go faster. I told to tubby fucker to skip a few breakfasts";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He'd go faster if it were a proper race";
	twitterFeedBadSource[twitterFeedBadCount++] = "- It's not the segment that's wibbly-wobbly, it's you, you lard arse";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He thinks he's bad ass, but he's just a fat ass";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He thinks he's a bad ass, but he's actually a lard arse";
	twitterFeedBadSource[twitterFeedBadCount++] = "- It's faster in the opposite direction";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He prefers Fynn Valley";
	twitterFeedBadSource[twitterFeedBadCount++] = "- he prefers Tunstall";
	twitterFeedBadSource[twitterFeedBadCount++] = "- Gravel bikes are cheating";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He be faster if he had a gravel bike";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He'd be faster on a new bike";
	twitterFeedBadSource[twitterFeedBadCount++] = "- His last PB was for a six pack of Stella";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He slowed so he didn't catch the rider in front";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He'd be faster without the face covering";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He thinks he's suffering the effects of long covid";
	twitterFeedBadSource[twitterFeedBadCount++] = "- Is this your local area?";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He's careful, not slow";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He's actually really quick for his age";
	twitterFeedBadSource[twitterFeedBadCount++] = "- He swerved to avoid a lady and her pig";
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
	twitterFeedBadSource[twitterFeedBadCount++] = "- It's about mindfulness, not K.O.Ms";
	twitterFeedBadSource[twitterFeedBadCount++] = "- It's about mindfulness, not P.Bs";
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
}


function SQGetGameFamily() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has('gameFamily')) {
		return urlParams.get('gameFamily')
	};
	return ;
}
function fillPlayers() {

	gameFamily = SQGetGameFamily();
	
	if (gameFamily == null) {

		players[++playerIndexBuilder] = {
			name : "Ian H",
			id : "IH",
			playerIndex : playerIndexBuilder,
			hoverover : "Hop",
			twitterer : "Jules",
			currentCell : startCell,
			previousCell : startCell,
			currentRollSum : 0,
			chatSum : 0,
			bike : ' a Titanium 29" hardtail.  He is a lard-arse, so expect to see him blowing hard.',
			maintenance : MaintenanceMedium,
			fitness : FitnessLardass
		};
		players[++playerIndexBuilder] = {
			name : "Steve W",
			id : "SW",
			playerIndex : playerIndexBuilder,
			twitterer : "Jill",
			hoverover : "Shandyman",
			currentCell : startCell,
			previousCell : startCell,
			currentRollSum : 0,
			chatSum : 0,
			bike : ' an Aluminium 26 inch victorian era rustbucket with no working brakes or suspension.  Steve can dance, play any sport he puts his mind to and looks good in sandals.  Luckily he drinks shandy and plays bass so not liking the cocky bugger comes easy.',
			maintenance : MaintenanceLow,
			fitness : FitnessHigh
		};
		players[++playerIndexBuilder] = {
			name : "Maysty",
			id : "AM",
			playerIndex : playerIndexBuilder,
			twitterer : "Ele",
			hoverover : "Mayst",
			currentCell : startCell,
			previousCell : startCell,
			currentRollSum : 0,
			chatSum : 0,
			bike : ' an Aluminium twenty-niner that is far too good for him.  Maysty is a runner, so expect him to be massively unimpressive for a skinny guy.',
			maintenance : MaintenanceHigh,
			fitness : FitnessHigh
		};
		players[++playerIndexBuilder] = {
				name : "David",
				id : "DH",
				playerIndex : playerIndexBuilder,
				twitterer : "Jane",
				hoverover : "Noddy",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : 'bikes in girls sizes.  Unfortunately he rides them really well.',
				maintenance : MaintenanceLow,
				fitness : FitnessHigh
			};
		players[++playerIndexBuilder] = {
				name : "Clark",
				id : "CS",
				playerIndex : playerIndexBuilder,
				twitterer : "Leah",
				hoverover : "Clark",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : 'a lightweight carbon bike that has not been maintained since Steve Hale left for Wales.',
				maintenance : MaintenanceLow,
				fitness : FitnessHigh
			};
		players[++playerIndexBuilder] = {
				name : "Simon H",
				id : "SH",
				playerIndex : playerIndexBuilder,
				twitterer : "Caroline",
				hoverover : "Weever Fish",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : 'his sons bikes when he can.  Weever Fish breaks at the drop of a pin, so expect him to drop out early',
				maintenance : MaintenanceLow,
				fitness : FitnessHigh
			};
		players[++playerIndexBuilder] = {
				name : "Simon G",
				id : "SG",
				playerIndex : playerIndexBuilder,
				twitterer : "Sharon",
				hoverover : "Guesty",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : 'all the time, day and night, never getting tired.  He probably did a century before turning up today.',
				maintenance : MaintenanceLow,
				fitness : FitnessHigh
			};
		players[++playerIndexBuilder] = {
				name : "Chris",
				id : "CL",
				playerIndex : playerIndexBuilder,
				twitterer : "Mandy",
				hoverover : "Andys brother in law",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : 'with the air of an ex racer.  Everything is shiney and clean, including his head.',
				maintenance : MaintenanceLow,
				fitness : FitnessHigh
			};
	}
	if (gameFamily=="Whittaker") {
		players[++playerIndexBuilder] = {
				name : "Steve W",
				id : "SW",
				playerIndex : playerIndexBuilder,
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
				name : "Jevan W",
				id : "JW",
				playerIndex : playerIndexBuilder,
				twitterer : "Jill",
				hoverover : "Jevan",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : 'Lovely boy, I cannot say a word against him.',
				maintenance : MaintenanceLow,
				fitness : FitnessHigh
			};
	}
	if (gameFamily=="Payne") {
		players[++playerIndexBuilder] = {
			name : "Darren",
			id : "DP",
			playerIndex : playerIndexBuilder,
			twitterer : "Melanie",
			hoverover : "Darren",
			currentCell : startCell,
			previousCell : startCell,
			currentRollSum : 0,
			chatSum : 0,
			bike : 'many bikes from a huge stable.  He is retired and suffers from Whatsit staining.',
			maintenance : MaintenanceLow,
			fitness : FitnessHigh
		};
		players[++playerIndexBuilder] = {
				name : "Melissa",
				id : "MP",
				playerIndex : playerIndexBuilder,
				twitterer : "Melanie",
				hoverover : "Melissa",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' a teachers sensible bike (probably).  My big bumper book of jokes from the 70s tells me Melissa will probably hit a tree as she cannot control her pupils',
				maintenance : MaintenanceLow,
				fitness : FitnessHigh
			};
		players[++playerIndexBuilder] = {
				name : "Thomas",
				id : "TP",
				playerIndex : playerIndexBuilder,
				twitterer : "Melanie",
				hoverover : "Tom",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : 'bikes like he stole them.  Tom holds down a couple of jobs as well as being Darrens son. He will either be exhausted and awesome, or refreshed and awesome',
				maintenance : MaintenanceLow,
				fitness : FitnessHigh
			};
		players[++playerIndexBuilder] = {
				name : "Alice",
				id : "AP",
				playerIndex : playerIndexBuilder,
				twitterer : "Melanie",
				hoverover : "Alice",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' bikes that have been handed down the family, and is getting a degree in how to get away with murder.  Just let her win eh?',
				maintenance : MaintenanceLow,
				fitness : FitnessHigh
			};
	
	}
	if (gameFamily=="Mayston") {
		players[++playerIndexBuilder] = {
				name : "Maysty",
				id : "AM",
				playerIndex : playerIndexBuilder,
				twitterer : "Ele",
				hoverover : "Mayst",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' an Aluminium twenty-niner that is far too good for him.  Maysty is a runner, so expect him to be massively unimpressive for a skinny guy.',
				maintenance : MaintenanceHigh,
				fitness : FitnessHigh
			};
		players[++playerIndexBuilder] = {
				name : "Max",
				id : "MM",
				playerIndex : playerIndexBuilder,
				twitterer : "Ele",
				hoverover : "Max",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' a bike to work and back.  He runs too, and has the advantage that he is about 60 years younger than Maysty.',
				maintenance : MaintenanceHigh,
				fitness : FitnessHigh
			};
		players[++playerIndexBuilder] = {
				name : "Ollie",
				id : "OM",
				playerIndex : playerIndexBuilder,
				twitterer : "Ele",
				hoverover : "Not Millie",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : 'rarely.  But he is full of incandescent rage over not having met Millie yet and that could really fuel him.',
				maintenance : MaintenanceHigh,
				fitness : FitnessHigh
			};
	}
	if (gameFamily=="AXA") {
		players[++playerIndexBuilder] = {
				name : "Ian",
				id : "IH",
				playerIndex : playerIndexBuilder,
				hoverover : "Hop",
				twitterer : "Jules",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' a Titanium 29" hardtail.  He is a lard-arse, so expect to see him really struggling.  He also wears lycra so get your eye bleach ready',
				maintenance : MaintenanceMedium,
				fitness : FitnessLardass
			};
		players[++playerIndexBuilder] = {
				name : "Nitish",
				id : "NK",
				playerIndex : playerIndexBuilder,
				hoverover : "Nitish",
				twitterer : "Mrs Kamboj",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' a desk 24 7.  The man never sleeps, so expect to see him curled up under a tree soon',
				maintenance : MaintenanceMedium,
				fitness : FitnessLardass
			};
		players[++playerIndexBuilder] = {
				name : "Ankush",
				id : "AG",
				playerIndex : playerIndexBuilder,
				hoverover : "Ankush",
				twitterer : "Mrs Gupta",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' the team hard.  Ankush won table tennis in Stratford and you should expect a similar showing of his long limbs making a huge impact',
				maintenance : MaintenanceMedium,
				fitness : FitnessLardass
			};
		players[++playerIndexBuilder] = {
				name : "Lee",
				id : "LH",
				playerIndex : playerIndexBuilder,
				hoverover : "Lee",
				twitterer : "Mrs Hawksbee",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' around Epping forest with his kids.  Probably.  I am just making stuff up now',
				maintenance : MaintenanceMedium,
				fitness : FitnessLardass
			};
		players[++playerIndexBuilder] = {
				name : "Nathan",
				id : "NP",
				playerIndex : playerIndexBuilder,
				hoverover : "Nathan",
				twitterer : "Mrs Pavitt",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' a static bike in his garage once a blue moon.  He is a skinny runner who will look the part on a bike but inevitably be massively unimpressive',
				maintenance : MaintenanceMedium,
				fitness : FitnessLardass
			};
		players[++playerIndexBuilder] = {
				name : "James",
				id : "JP",
				playerIndex : playerIndexBuilder,
				hoverover : "James",
				twitterer : "Mrs Prince",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' a static bike in the gym.  But is also a huge fan of greasy fry ups.  Expect James to set off at far too high a pace and need an ambulance half way around',
				maintenance : MaintenanceMedium,
				fitness : FitnessLardass
			};
		players[++playerIndexBuilder] = {
				name : "Pawel",
				id : "PS",
				playerIndex : playerIndexBuilder,
				hoverover : "Pav",
				twitterer : "Mrs Szarlat",
				currentCell : startCell,
				previousCell : startCell,
				currentRollSum : 0,
				chatSum : 0,
				bike : ' a Harley Davidson.  Pav is Polish but brought up in the Melbourne sun.  Expect him to smash this challenge and not spill any beer',
				maintenance : MaintenanceMedium,
				fitness : FitnessLardass
			};
	}

}
