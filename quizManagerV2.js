
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



currQuestIndex = 0;
currQuestStageIndex = -1;
resultText = '';
questResultData = new Array(6);
question = 0;
quizStage = "Questions";
quizStageQuestions = "Questions";
quizStageAnswers = "Answers";
quizQuestionTypeText = 'text';
quizQuestionTypePicture = 'picture';
quizQuestionTypeSpotify = 'spotify';
quizQuestionType2Picture = '2picture';
quizQuestionTypePictureAnswer = 'pictureAnswer';
tags = new Array();
tempTags = new Array();
showAll = 'ShowAll';
defaultTag = 'Freebie';
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

quests = new Array();

function getMonthName(index) {
	mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	  return mlist[index];
	};

function addQuest(quest, questData) {
	tempArray = quest.questInfo;
	if (questData.question != '') {
		if (quest.tags.includes('year') && tempArray.length < 12) {
			questData.question = 'In ' + getMonthName(tempArray.length)  + ', ' + questData.question;
		} else {
			questData.question = tempArray.length + 1 + ') ' + questData.question;
		}
	}
	tempArray.push(questData);
}


currQuest = quests[0];
var questIndexBuilder = 0;
questIndexBuilder = -1;


quests[++questIndexBuilder] = {
		name : "1920",
		hoverover : "What do you know about 100 years ago",
		tags : "saturday,2/1/2021,year,1920",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the Treaty of Versailles takes effect, ending what?",
	answer : "The First World War"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Adolf Hitler presents his National Socialist Program in Munich to the German Workers' Party (Deutsche Arbeiterpartei) - what do they rename themselves as?",
	answer : "The Nazi Party (Nationalsozialistische Deutsche Arbeiterpartei)"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Irish War of Independence: British recruits to the Royal Irish Constabulary begin to arrive in Ireland. They become known from their improvised uniforms as the what?",
	answer : "Black and Tans"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the Spanish Flu ends with an estimate between seventeen million to fifty million dead. It would be the last global pandemic until when?",
	answer : "COVID-19 pandemic 2019-2020"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what was founded during a meeting in Morecombe, at the West View Hotel (on the town's promenade)?",
	answer : "Morecombe Football Club"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the United States Post Office Department rules that what may not be sent via parcel post?",
	answer : "Children"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "France prohibits the sale or prescription of what?",
	answer : "French letters (contraceptives) - so named because English WW1 troops were issued with them, and they were packed in paper envelopes.  In France, they were known as 'Capote Anglaise' or 'English Hood'"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what open in Antwerp, Belgium?",
	answer : "The 1920 Summer Olympics"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who launches the Non-Cooperation Movement in India, with the goal of obtaining independence from British rule?",
	answer : "Mahatma Gandhi"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Dr. Frederick Banting of Canada first records his insight on how to isolate what for the treatment of diabetes?",
	answer : "Insulin"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "in London, The Cenotaph is unveiled and who is buried in Westminster Abbey?",
	answer : "The Unknown Warrior"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what confectionery company is founded in Bonn, Germany?",
	answer : "Haribo - The name is an acronym formed from the founder's name and the city it was formed in - Hans Riegel, Bonn"
} );

quests[++questIndexBuilder] = {
		name : "1920 Ins",
		hoverover : "Who was born 100 years ago",
		tags : "saturday,2/1/2021,1920",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Alf_Ramsey_%281969%29.jpg/110px-Alf_Ramsey_%281969%29.jpg",
	answer : "Sir Alf Ramsey"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920 (extra point for his character name in Star Trek)?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/James_Doohan_Actor.jpg/110px-James_Doohan_Actor.jpg",
	answer : "James Doohan (Scotty)"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Ravi_Shankar.jpg/110px-Ravi_Shankar.jpg",
	answer : "Ravi Shanker"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/JohannesPaulusSimonis1985.2_%28cropped%29.jpg/110px-JohannesPaulusSimonis1985.2_%28cropped%29.jpg",
	answer : "Pope John Paul II"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Yul_Brynner_Anna_and_the_King_television_1972.JPG/110px-Yul_Brynner_Anna_and_the_King_television_1972.JPG",
	answer : "Yul Brynner"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Maureen_O%27Hara_in_April_1942.jpg/110px-Maureen_O%27Hara_in_April_1942.jpg",
	answer : "Maureen O'Hara"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Studio_publicity_Shelley_Winters.jpg/110px-Studio_publicity_Shelley_Winters.jpg",
	answer : "Shelly Winters"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mickey_Rooney_still.jpg/110px-Mickey_Rooney_still.jpg",
	answer : "Mickey Rooney"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Walter_Matthau_-_1952.jpg/110px-Walter_Matthau_-_1952.jpg",
	answer : "Walter Matthau"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Portrait_of_Charlie_Parker_in_1947.jpg/250px-Portrait_of_Charlie_Parker_in_1947.jpg",
	answer : "Charlie Parker"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, born in 1920 (Extra points for any of his 3 most famous role names)?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Fantasy_Island_Ricardo_Montalban_%28cropped%29.jpg/110px-Fantasy_Island_Ricardo_Montalban_%28cropped%29.jpg",
	answer : "Ricardo Montalban:  <BR/><BR/>Armando in the Planet of the Apes  <BR/>Khan Noonien Singh, a genetically enhanced human, he starred in both the original Star Trek television series (1967) and the film Star Trek II: The Wrath of Khan (1982) <BR/>Mr. Roarke on the television series Fantasy Island"
}) ;




quests[++questIndexBuilder] = { //84
		name : "1954",
		hoverover : "What happened in 1954",
		tags : "saturday,7/11/2020,year,1954",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who marries baseball player Joe DiMaggio, at San Francisco City Hall?",
		answer : "Marilyn Monroe"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Elizabeth II becomes the first reigning monarch to visit where?",
		answer : "Australia"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the Castle Romeo nuclear test explosion is executed where, in the Marshall Islands",
		answer : "Bikini Atoll"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "which day in April 1954 is denoted as the most boring day in the 20th century by True Knowledge, an answer engine developed by William Tunstall-Pedoe. No significant newsworthy events, births, or deaths are known to have happened on this day?",
		answer : "April 11th"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who runs the first sub-four minute mile, in Oxford, England",
		answer : "Roger Bannister"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "which British cryptanalyst, mathematician and computer scientist commits suicide by cyanide poisoning age 41?",
		answer : "Alan Turing"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Sun records releases 'That's All Right' - the first single by...? ",
		answer : "Elvis Presley"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "is extremely dull, but what book, the first of three volumes in J.R.R. Tolkien's epic fantasy novel, The Lord of the Rings, is published just before it on July 29th?",
		answer : "The Fellowship of the Ring"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "what William Golding novel is published in London?",
		answer : "Lord of the Flies"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Texas Instruments announces the development of the first what? The Regency TR-1 goes on sale the following month.",
		answer : "Commercial transistor radio"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "the first what film premieres in Tokyo",
		answer : "Godzilla"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "the first of which restraurant chain opens in Miami, Florida?",
		answer : "Burger King"
	});


quests[++questIndexBuilder] = {//quests[85] = {
		name : "1954 Ins",
		hoverover : "Who was born in 1954",
		tags : "saturday,7/11/2020,1954",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
		question : "Who is this?",
		image : "https://lh3.googleusercontent.com/CqL7QbmyIKa1lreCbr2heZxpnB29WLQafFwRjbA_4IDsZOPv09fqq63KJaZyy9RyUrTulBsWfUbD4VVdxEUcTTtPp74LF1nQHhqkcDxhWl0xa5BlQAw405A6IbXf9EDsNAMqU3dG2HU=w1920-h1080",
		answer : "Oprah"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/1725Ep_elfDx_4HI9g8kKQ3eUZCAKxjLeSV2adWRTwlkN46DKnJ4osog4j0uJdk_OIZe3CLW-U86FFi0k1xI4GtReAOsKT_SsMYHDSuTzgfFj5zoGUSMC55pmwanwbPcdWAf67LpgyM=w1920-h1080",
		answer : "Rene Russo"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/v8SKDHJ64M1zMPk5KiDyPCNuLQryRT8tvF0b7slAe0pyckjSLioYWMJtuMyXre6UkGTn73Dqj_lHDPn6k_s8rQ8MjFvLa96wAXkoooP3ZiRFNk5GacmjgWkMufSwHdZdpO5-y754Luw=w1920-h1080",
		answer : "John Travolta"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/tgvAB2Sma7UYuK8MtsDXWe0iO4bXzh183LXBOwzLDhHGNsP6bZzl_B1dQzzZG7Q7eDdJw_o5AMUgSngdlTbLJD_YxSeK7qzsV1Kn6fSXmon9JveOvpwizztov3ggGpSN7rvKTn6XBek=w1920-h1080",
		answer : "Anthony Head (AKA Giles from Buffy)"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/JRhPghOiv3ZYRlJ-Dfzp2RzkzM8jfUBhlL_eskU2tcIFojijouNfUsTkH9pA08ucPWrEmW60wakHXbNM82CgoyyR5MMgda7TD40Ed7ZfwPHU0RjrNy38Igk8NbuuZ8X8Yma0z7GNXd4=w1920-h1080",
		answer : "Ron Howard"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/ai4cZpzqE6ALgICV9mOToSyVANel0qT_x10iuP-g7eOVI8gXbMTs1anD60YKicz12SzxCWK7gHN7GYCqVeWzGAvYQ_I8jTo85_OSM9Cs0IetFaE2E3qapcX6bLuX1S6I5DVzeS3kJ4k=w1920-h1080",
		answer : "Catherine O'Hara (Kevin's mum from Home Alone, Moira from Schitt's Creek)"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/K9RdtlpX4vGIFnI469yY8w3EQxiLG31WndYwyeF6hq1h-D1tnkPm5kTHQuve_p79xlQWqGbNXmuwyMnogQ1a_fPzkRmDkPcHv2y5pMGDfpMzrSHLQ1poZ9NdJI41RUpQtZTCglcL8k8=w1920-h1080",
		answer : "Jackie Chan"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/SsQOmEf9vjecrpVSCdWk02qfzXKkgSijqQYAdDghFSvtloKpH7lIY0uL62URIQ5pAmxwroiTihSBtGZu3Jltcw8RKZqYCMDotuUHkZYP8SkXIfSW9TIxsNQcSlalTukqxlSBJFkqLTc=w1920-h1080",
		answer : "James Belushi"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/dGl7ou3f-A2wQjtA_XbkNDFemVtWxbtTW9bEQZXIYnss0M3rdYOY_BtYlP-arR2Nh-COPcSISpTPb04nyrdqdGpVDZPRIz5NjOHQOI47bs9eDgb_WRgFnWZk9svSQE0bt2vVpAheoGo=w1920-h1080",
		answer : "Kathleen Turner"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/1PHleOkNAVg9XqYCe7psyFzv1GUIy6WjnfAlVX0FEK0anrvlC2zpjWjtGwqejvHmu2gjItPSqBvEYCa0M6Eq71XMXmkjamYqGW49cWt_FxnqM1Rzg1Kv5vTyMKSjIk2UXQv6PyEM6-U=w1920-h1080",
		answer : "Angela Merkel"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/5gVW-xr4uhjg6eVjW2_n0MG0-FhEK86ZNbG9S1lfmvWkpshdodPWKIJhoobm8j02ai2EjhP0xZaZUGcpc0_IB742H_Eu1kj9BBhvFJOoJglJLkbzwedmsKBwiNrODeqqPgaWAr0Fops=w1920-h1080",
		answer : "Cherie Blair"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/TlQaasoOA832r5D-nSZuVZa0nk0Ax_TEskpbXq3MtXiLZH2vEgVWzhCCdePraWDost5UiAk-Zp0cuxz0dsgF5Hz6k95Cfk51_BRx_soey0LmBzbVw_Unkez2bwlRb-m_Zlf3S2Wrt80=w1920-h1080",
		answer : "Ken Stott"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/PGvGiPRgyTr6Yl5eVIiBYh8l9tqZRL_VKluvvV9OfUxJ_NyagqQZ9IjSNCI8SUCAGYnuTPv7-ZsVNjPttF_t9ixI5W0nIdJ2Bk_-91P_3JSmx-7SufiGXHrFz7fIwyvycIveLrsEVgs=w1920-h1080",
		answer : "Condoleeza Rice"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/y36E58EfrtKqly6nwZ7MG-EVlJ_f2TZGBv2VB2DoDroTVBzY4qbsEIuj7LcZv3ITpiznIyHudjKZ1HfT8dwL-g7U846xbHwzzOeXejIAH_MPwA44L8z1Kj3MRbo1oURP7bQQZQOgE5s=w1920-h1080",
		answer : "Denzel Washington"
	}); 


quests[++questIndexBuilder] = {//quests[86] = {
		name : "1954 #1s",
		hoverover : "1954 singles",
		tags : "saturday,music,7/11/2020,1954",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Name the song & artist',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/6AiVLt7vEmRl0P1yy8DX93" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answer"
	});

quests[++questIndexBuilder] = {//quests[87] = {
		name : "1954 Movies",
		hoverover : "1954 Movies",
		tags : "saturday,7/11/2020,1954,movies",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
		question : "What movie", //Brigadoon
		image : "https://lh3.googleusercontent.com/xnOmzayfP3WllISoi9JAme1rLPAj2URFYRC-fcJ3HPJQnLyfiSFzgVnHWyk1YQmmhCN2bTh-eLl4nHR33_nk7racyojCX3SWXzjMcSOmgUHiSGed0JsG4gSUTZSglL5g2FBlC4DiudQ=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/6dIaU3FmXYQbxaJRA3GLMw-G56A_2fag2W8u67fZcd5tzwdfghu7uFW07M98YaoLS69v7pyJETxyWFMEkX1bBUwWlBx94kQw3H2iLKXXk1jiUaUyr-TFW9ax8dyZGnGqwFgabboP_rY=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
		question : "What movie", //7 Brides
		image : "https://lh3.googleusercontent.com/tMtrqjn8Uv64-qS6NBc7L77wbhKitdWTPsmLBbI1O6wiT9Lah3mVX22C2mG3yoqEz5_t3AfTjU04yjosAKIf0ZAkOddCKtaI4MHTsNBP4EOrsyhF955Vk3F3ShBCX_ojGcatF6OPK48=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/U7BqSNvKWHPE3Skis7VpgGmEI0LC_73nOnvoLo4JUKiFVDokHeZk6FfB8dghtwzJWrwLq5DxHtP_7Fh7seZ7CQ_jz5FNP1gzNtzVhGbKfRI30tMcUfkR99WqgmV7VEimSDCqM1XyFYA=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", //20000
		image : "https://lh3.googleusercontent.com/1BrGo-3svVcxhHlKJHpKO2lcSFIfmRzBviPVC1bM1oUHYjXYcLpZwkDDQheJrWn0t61CF4Wc0hwbC2piTivLwkoVTv5OJumAZhdEgLnEMDcJ8T4xPV_D0T9nxqp9gmHVhn6c_ZSdyl0=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/Z6CzSYlvuyg8vaR6aWH7ij3BvSF4qtBMCYTE_QGS3nPrsosOJi5glYRWs7Z4qMqA7chLFsCsHO5FoE0agxLd_EyuC5P1_gedMX2KsIMQx2GtoU7JAJExPkhivslko6JjSLvuobVh41A=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie",//Lagoon
		image : "https://lh3.googleusercontent.com/CFxAiTJJeo3EFtmEXAIr_jTRBH8Uk-B5pX36PCvC1Ge3phW7fZ8YIS2hkpgtD8n2pmstxuFiqq_f3cY03elivw4UaSWZDzUeUbHpHU48Od741dOJmuRB1XQtjJ-ijKm2zIG4LZeyAxQ=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/K3KLE6wQsggRrPda6a7xN2X5GRSYntzQu2CXIgqiAMIX-BNXjVa7cz_dEivIUyS7zjMADkdfhoFU1MI1gIKs134sTa77MJQWqMHS68-1b2DpZXFu_GR1ykUT-S6zL9fVELw6RAFbAuI=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", //M for murder
		image : "https://lh3.googleusercontent.com/2mZnTTNsz-We5pq5qyGzHTvmAO-bVQGWF-AJFhqhPKI-BlLyJ5_jFnANryRTOJy3EQL08m7z3wYHRPTOfCqX22gCllE4EKzyBNO9JUflyHeG-gs9TQmSncZ_eHSXa7wh68tJgcqrT8E=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/6W0VL7SxpUcHZ9KgMugYT5Am46j1srFbLyXW4FhBuDy24Q7S1u5T2vfihLUFd5VkJeobxuEDMeUKF3qNGuRGjH1iDaP6May6mN65rHeuRQCRlEiZsQYanGRB2iGfz-PTB6uJQEhE0aA=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", //Godzilla
		image : "https://lh3.googleusercontent.com/5NqPP4CkzxnRTiQ5XX7oR41ManFC5aqIz_pgaNC_OZz2h1bwBTytXXJVABRpaA-Wh_Cv1IXwrUjn0tZKi9LngOr8N_NXDiO0XniIKmS7Ip-e6RqCYb0B3SS5xHNL8KWmNRFDTClEpxo=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/5l9CB0KQFZiJrFF_uxSaBnUHNqI44Kxy9Gl_Ip42xlic3NZTfIB4sC5MmAJ-lm2v0bzUVJTLKreONMSm8vd2UReQTWRjoNt534mK5Uj8_xbaaPa2iGLtUQm21O1_VYaZqRYLb7Yjw7E=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", //Rear window
		image : "https://lh3.googleusercontent.com/mvjieJJaYtF2_eXrmlllWkEpxHi-mOds0f-iN7HkBuSlWGirM38d2TEAJm4tH4A-59qne_HqrfrYBxShzCDjngXyYM_ko_9TlCGpTLRlidX9n-9ZTxLYYSyuLCHLdVxu0uZTejMtF1w=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/YhXtfPlauWAjK6MdDUBSS4oydqRFog8Q29ByT7Sj6RHPTSvHgRiJxXDG9Db8GhgjSUTiIJbl29ffFRtqaxXDeD9_Rd0J0DzxsdQFnw2DrkffX89AERX8WVg0k_0mh-KTLMcF_b_zVE8=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", //Belles
		image : "https://lh3.googleusercontent.com/Fk3oR9sDN84KHzYqwwnBIU4JJrBZyc6dF6sWIx6XSC54WYwuoPT9XGsksdzmfumgIxU-sDG-IATXP-0xmhnf46vdgyJ3cZOa-9_5S6ws6Bzze8mXKgDP_Tt5AAk37p2xN9fL-57kUZQ=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/6IYdOkLkTTqM4nOQ7nY_R9AUBtE02MNQWU0atowW7c6c2mIo9ep3FmSmTmYTrdj41T6PWl7I9ndbLj5058q-T3-dWXmb0eIrLfqU_FMrROjZYv07bYLzFsWqgDx8AcVqDS85jiXWeVA=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", //White
		image : "https://lh3.googleusercontent.com/5NxrsRUba_k9X9P83KmVFXgcLRS3PXblB3be--0-Dnu4OE6Hvs2VuP0npPIYxXvixNQducY2nsi6nhxcxGXtXHG0IYAfbFqjHTaqKaVUPoI-gC3zY75HzwcIMBaAcljLsuNtAeZKsRk=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/nxEHLEfxxsuUVDo_FH-Aioy1dM2iSJEbJ_7raSXnxzBIwCnRr33ZTxd7p8BgGXLFXdCyqZQLzn78yd0pY4mxeu3mIWhmmzeN8JafEVdPL2evdk0CiQnvXd251gp1w2Se67xlwe5O4ew=w1920-h1080"
	}); 




quests[++questIndexBuilder] = { //84
		name : "1957",
		hoverover : "What happened in 1957",
		tags : "saturday,9/1/2021,1957,year",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what opens in Liverpool as a jazz club?",
	answer : "The Cavern"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the first nuclear-powered submarine, USS Nautilus, logs its 60,000th nautical mile, matching the endurance of which fictional submarine described in Jules Verne's 1870 novel 'Twenty Thousand Leagues Under the Sea'?",
	answer : "Nautilus"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who first publishes the S&P 500 Index in the United States?",
	answer : "Standard and Poor's"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what BBC Television astronomy series is first broadcast in the United Kingdom, presented by Patrick Moore?",
	answer : "The Sky at Night - Patrick Moore presented it until his death in December 2012"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'Die Stem van Suid-Afrika', written by Cornelis Jacobus Langenhoven, becomes the South African national anthem, replacing what?",
	answer : "God Save The Queen"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Broad Peak, on the China-Pakistan border, is first what?",
	answer : "Ascended (Sorry, it was a slow news month)"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who meet as teenagers at a garden fete at St. Peter's Church, Woolton, Liverpool (1/2 a point for each name)?",
	answer : " John Lennon and Paul McCartney"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "United States Senator Strom Thurmond (D-SC) sets the record for the longest what, with his 24-hour, 18-minute speech railing against a civil rights bill?",
	answer : "Filibuster"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the first edition of what Jack Kerouac novel goes on sale in the United States?",
	answer : "On the Road"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what radio telescope opens in Cheshire, England (to the delight of schoolboys everywhere)?",
	answer : "Jodrell Bank"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Gordon Gould invents the what?",
	answer : "Laser"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what film is released in the US, which goes on to win the Academy Award for Best Picture. Additional Oscars go to Alec Guinness (Best Actor) and David Lean (Best Director)?",
	answer : "The Bridge on the River Kwai"	});


quests[++questIndexBuilder] = {
		name : "1957 Movies",
		hoverover : "1957 Movies",
		tags : "saturday,1957,9/1/2021,movies",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
		question : "What movie", //12 angry
		image : "https://lh3.googleusercontent.com/yK4PF37EKWvbzp7iv-4M2uX2Bw34LsnR8kubWs36u5R1iHu1KCriuZG5wulMk_ZR22dg74lUNkNM-80zaWZUxc4fjaSwtxlWeDexfWrFkJRu1K7ez0fUZoR_SdviEpsjPAEsZseeIYI=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/UGsx9MhMQ4g7zEoZbE96Gm3oupGZ4uh9bHFJnezj3Lr4EMnhg_LueLy2L8ML34-vLG4UC1C50X_d8d2f7hd6Hw-1aXkYTnFMAaI79wHlkxapxj2-zKQzsUAUI9EtARhIisrNsvG2l94=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", // funny
	image : "https://lh3.googleusercontent.com/BGDo6CWVRjjghnWLvkME1JxZxFVm9_NzFS-CYB1CB7oapTbnvrM44_jPdKjT4PT5Sxv3UR4oW4UfEwRgBD6eFhhldTQQKgkr7pwIH1F5jvEP3ijdHxNtNZhh8A0mFYdqemjWsqLpyNk=w1920-h1080",
	answerimage : "https://lh3.googleusercontent.com/h3dMrASshylM_Wna5oulRqJ6JumoPdNcqEPZ_QBDPdNkTmRxyqmaEbyBaduhVOIm97IaZ_3RQkIo83usIAfIIwknhLAX1lnEB9oUNtblHLmZckp1Rf8AnARhImJVlos2Sslx_Dv9RsQ=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", // st louis
	image : "https://lh3.googleusercontent.com/t0eXQsg_G-G2tD8kUwKkwYNRiKYKND4GjdaliHfgF8bBdpJM3ewtmeXXEDDZlc20_6wDn3VuoqfYAX4X_ZWVJgmitLiv6htsQqM2zNamGwPhKYpN9qaThgrhAhbfcRqYYMA3WSNEa9A=w1920-h1080",
	answerimage : "https://lh3.googleusercontent.com/jjwusPypfqGdVF5zbg_4NmUZIuSnniZ6r3q3TiLDjVeE3V8dZtrpRKKSHtRS1kcPuvYvC2mG3cm4mTmGse8LTVg0AFutobZEYrYiuJC96ISPRpeMwROUl2vbg5OkEBrdJg9sBs2Pfsw=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", // Hell
	image : "https://lh3.googleusercontent.com/rbiJSyOe8j4GpmMx3WvtrkKCmk4ZAusR5zCwg8FPg7pQPiNxxzmWsiWSgUgJ9WyZMJ93KvsQd0szMfrj34Hi0VFvYpM-imvNVB4CCbg4xIAAl0P3mEJ7yzQpNQLg29PC3fpoxFr9-gM=w1920-h1080",
	answerimage : "https://lh3.googleusercontent.com/WXTVUnESI-hbJDOKoGyo9Obm4A8OGKcuA52T_sv652rSZti3CMryFi3law94TIFSqJUqMzPodUD2liKqKmM2fvFx1eSeRBl9trlNhgoRYW5RMk0LXud6SLHDZpLCbcNkdWjOpdwedwE=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", // Loving
	image : "https://lh3.googleusercontent.com/pwKRPg65Dbz7O-8kNWZUX-X2R3tNtwPK6U5KDVsCK6CmgSlhe8-VRfeHutWbM7n6jpX3gxjr-hSyHWENKHwTNq2tScrH9NryluhwDD4AsmquuAfWHuItxrtK8qWOLHfwqiG8RClgUY0=w1920-h1080",
	answerimage : "https://lh3.googleusercontent.com/J2dsKtXzhBq7haw27n7A3igmXk-a6YPgAam6dSSNLzmmhedqnAqx0RCPC-THoGSdVRx9YQlDBY-lApRn27vSMT5tMVW0oMA_ChMCBqTfDGJO5q_oVZGegtCcM3XyMksEP9QdhNXmBqI=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", // Jailhouse
	image : "https://lh3.googleusercontent.com/8nX_GVFZzOOfyhxPH5ivzvx71v-P23q2zsYkmDegWwH19eqc71F4wwZPEzgILQP3zyOJ88hbKrenIdG4-AuziBEiz-Ym0s_Y6k_54j-QCV2NqLBAd0Lb3iLCIMC-hkeMoJ0tj26A-yI=w1920-h1080",
	answerimage : "https://lh3.googleusercontent.com/LzeLr7jTfiVv_J6sI_dPdPADdt-j-ykPxLILgtaqFvAIzVSPDk0c8vacLOOaizlcaHONHvjfQGsISJrjfwi6G6yP5ds5EduurqFLCTb08myxr7K-HagmWBbcnun3AXkm5MQIj0HUci4=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", // Baby
	image : "https://lh3.googleusercontent.com/uWhP1x1jAJHdwQCsmEkDRUzWttq0zA1iTDqblYU6cvRhgT1KxN1UVDtnc-jzuSMGU2do7dHY4qG_uMIu1tN8eMsZZBpha7nd9dEzyA8zcSUOyFQXq5tWEPbZelfORXEhf2L9rjS5kFE=w1920-h1080",
	answerimage : "https://lh3.googleusercontent.com/lbiSJOgUX5nQJH3gJl8rp3JzqThNquk26tzqC46O8HLxOM4RY1EG5Q883E7o9CuWaqz61YXKhK5YA3mx7BL2ZAsl-FXJnWXLzYMkm9GNDxYp1bc0SY9Me73KX4iRSPBnnFLXUKyWADM=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", // Prince
	image : "https://lh3.googleusercontent.com/1avQUGAh5u52pYgh64sDOqNV2NN8VsBPMfPc_vpotV3bhLHlk144_JAY4-bBihC4xtOouV_ZFPO-BDlY6ZLVUXaHORG11o7-2y9NY-Uvy9e8yTzW09zvxV04S33AlBUTQYrOG0H1-dg=w1920-h1080",
	answerimage : "https://lh3.googleusercontent.com/TzspTv_CBclGylOHAisl3NzqhrhYQk8jvPj4mRoPfnx1TKXiKaB7u0P_cGNFJEjVIIcrc2ouEh36oOPhWeDupabgSikS2tooVXT459SLfMXHabPlMrFEg9IiegkIZBsn1IjSljPww0U=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
	question : "What movie", // afternoon
	image : "https://lh3.googleusercontent.com/re9RuSo9osBJ9TCJLc7tsNWn1a3hDs2Finn4U5aOsNBaR2fuBi87uplGbq6CFBBkVcL9mnkBSVvTN54Z4Z-Pv1x3fiQploj-bK_xOCDyc-R9bvQGBuntnP0THf5TvoRhfUZThM2_f5I=w1920-h1080",
	answerimage : "https://lh3.googleusercontent.com/lpBKZX_FnrZ8qcze9-Vra8ChdZ1si5wN-_qjeGWMPvoBhRPJVDEgJtgEuqf6qWDwbafSruR9iIHfOdZnu3wAAJ-QnQPjwLXKfREH_HvUPP3N3BUoRJS6MzyhLVIg9QTPeEqTRdxjmUQ=w1920-h1080"	}); 




quests[++questIndexBuilder] = {
		name : "1957 Ins and Outs",
		hoverover : "Who was born or died in 1957",
		tags : "saturday,9/1/2021,1957",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
		image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Adrian_Edmondson_in_2020.jpg/220px-Adrian_Edmondson_in_2020.jpg",
		answer : "Ade Edmondson"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ainsley_Harriott.jpg/100px-Ainsley_Harriott.jpg",
	answer : "Ainsley Harriot"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Osama_bin_Laden_portrait.jpg/100px-Osama_bin_Laden_portrait.jpg",
	answer : "Osama Bin Laden"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Spike_Lee_at_the_2009_Tribeca_Film_Festival.jpg/100px-Spike_Lee_at_the_2009_Tribeca_Film_Festival.jpg",
	answer : "Spike Lee"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Donald_Tusk_%28cropped%29.jpg/100px-Donald_Tusk_%28cropped%29.jpg",
	answer : "Donald Tusk"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Daniel_Day_Lewis_26_May_2013.jpg/100px-Daniel_Day_Lewis_26_May_2013.jpg",
	answer : "Daniel Day-Lewis"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Richard_E._Grant_2018.jpg/100px-Richard_E._Grant_2018.jpg",
	answer : "Richard E Grant"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sid_Vicious.jpg/100px-Sid_Vicious.jpg",
	answer : "Sid Vicious (Simon John Ritchie)"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://media3.s-nbcnews.com/j/newscms/2016_25/1593436/160624-kelly-mcgillis-mn-0820_e7d9ec6940782216d035398542aedd0a.fit-1240w.jpg",
	answer : "Kelly McGillis"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Melanie_Griffith_2016_crop.jpg/100px-Melanie_Griffith_2016_crop.jpg",
	answer : "Melanie Griffith"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Denis_Leary_by_Gage_Skidmore.jpg/100px-Denis_Leary_by_Gage_Skidmore.jpg",
	answer : "Dennis Leary"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Stephen_Fry_June_2016.jpg/100px-Stephen_Fry_June_2016.jpg",
	answer : "Stephen Fry"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Michael_Madsen_by_Gage_Skidmore.jpg/100px-Michael_Madsen_by_Gage_Skidmore.jpg",
	answer : "Michael Madsen"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dolph_Lundgren_2018.jpg/100px-Dolph_Lundgren_2018.jpg",
	answer : "Dolph Lundgren"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Steve_Buscemi_%2841465%29_crop.jpg/100px-Steve_Buscemi_%2841465%29_crop.jpg",
	answer : "Steve Buscemi"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Humphrey_Bogart_1945.JPG/100px-Humphrey_Bogart_1945.JPG",
	answer : "Humphrey Bogart"	}); 

quests[++questIndexBuilder] = {
		name : "1957 #1s",
		hoverover : "1957 singles",
		tags : "saturday,music,9/1/2021,1957",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Name the song & artist',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/6SfMFGatcOCZcOSb23VfkS" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answer"
	});


quests[++questIndexBuilder] = {
		name : "1964",
		hoverover : "What else happened in 1964",
		tags : "saturday,17/10/2020,1964,year",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "what is held in Innsbruck, Austria" ,
		answer : "1964 Winter Olympic Games"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "who appears on The Ed Sullivan Show, marking their first live performance on American television. Seen by an estimated 73,000,000 viewers, the appearance becomes the catalyst for the mid-1960s 'British Invasion' of American popular music",
		answer : "The Beatles"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "who announces the change of his name to Muhammad Ali ",
		answer : "Cassius Clay"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "who releases their debut album 'The Rolling Stones'",
		answer : "The Rolling Stones"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "the first computer program written in 'Beginners' All-purpose Symbolic Instruction Code' is run on the first day of this month.  What does the language become known as?",
		answer : "BASIC"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "on the 2nd of the month, President Lyndon Johnson signs the Civil Rights Act of 1964 into law, officially abolishing what?",
		answer : "Racial segregation in the US"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "whose gig in Scheveningen gets out of control. Riot police end the gig after about fifteen minutes, upon which spectators start to fight the riot police",
		answer : "The Rolling Stones"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "what bridge opens over the Firth of Forth?",
		answer : "The Forth Road Bridge"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "who release their first album, Kinks, in the United Kingdom?",
		answer : "The Kinks"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "who retains the US Presidency?",
		answer : "Lyndon B. Johnson"
	});

quests[++questIndexBuilder] = {
		name : "1964 Ins",
		hoverover : "Recognise these olduns",
		tags : "saturday,17/10/2020,1964",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
		question : "Who is this?",
		image : "https://lh3.googleusercontent.com/KPUm5_UeLHPxtW6-5dD2oGUR8iIndgu9r6pbx6KiSfnZ01B6hMrPexhcRsAOdcxveLtcXRaDn4zHgA8NVY6xJm-nVfebqHxbdSERuPrMcKEkstuJY03PI0GaDS5R3oKyTjc13QEuA5M=w1920-h1080",
		answer : "Nicholas Cage"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/T_krEe5I21jmLN7GS7xwdzojgzM2OaX97Lkjs0Idp-OBLwRsn0uKX_1H-vfK7Hu1b0jc1HwF_uuF0qwDDC3laPRIQQd3eSi3a01SyouGp_IfgKrvzjFgwqPIJSjW0jwSV2H3T9_elZw=w1920-h1080",
		answer : "Mark Addy"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/ENuZO9QwFrjmhavh6gh3XIL5Vg-GmjOqzWm2mFuov9VvTdJVXy7yZUKR7ndCjaGBVOlDpszGvcEzqhksGmdC0zfEVuE6-7mfjHp1Q43htsjFRsbaEuGj9cWWdpTgQuTkL8HMM1D3uy4=w1920-h1080",
		answer : "Michelle Obama"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/EfJyDTeD7FhO452TmMsjXjBNj92x8QCyGQCYykGGRdk6LQZweD5eGBtAIu49CDkhcvexWpldRV1HoeGNceWs6b9jri9AgHOIbMiR8hp3sah93zCK8NfDPFu-FGLwsPoQYzjP6wXoHyg=w1920-h1080",
		answer : "Laura Linney"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/ihnZ0mP0GtULADqrAXx7WR0NDtr7I2ksKXjQw8drj7M9KUbx0Sme1cqyakm_m4Elr1XJbrC_Kb7UsjMAMfTMtgr_kWx482D4sLZM26AbyU0si_EWp_yTFbKOXLs5MV-GanpbFMC6Vbw=w1920-h1080",
		answer : "Prince Edward"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/aPeca9P5VG8BK07tqm_FMqUPAIZ-XgwKiZkgxZjWBZL7Sk0aTizTs5zPGJOW8tzVYh8m0xG4KZUkOpBNhv_wGs49LdZ8qwUKAQYcxazklL5CP8zu1TUp-d3--1mYrcv4baiJK-rYcNw=w1920-h1080",
		answer : "Rob Lowe"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/fIKvy0p86Etn4_XDde7fwxADFvsorBpXkoZFI9u8KnaASadkBAv_UmeVp4SpoRt-UIbaxJ-xFotrMtZgwxdIHjXJFKbMhUJv4CnSihvGqRMR6E3D4_emUJtRsjTCMeWWAnwfTMwsHEs=w1920-h1080",
		answer : "Andy Serkis"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/zHqmKCRIJMqdBovHFUt5BlB8CAtFQHIXqNUO21zki1ept3NKpYZVDUH8sTDBDZ4g4T6-T58NEJEZk6yLGHBmtNSBp7YpEIf-5jUYj5bfnNsWuk1nzL7ZPlEQVhple6VjIkQrtfR7apQ=w1920-h1080",
		answer : "Charles Spencer"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/T9m7veVR2NRi9tSo6xA9NjNyhGDylVNnAUWu933JIUpxZ6kZgpWdwdnlGTGm7AH7h5mWH-VklnVE7yQyoFbqbANbPLR1QDjPjmfzhatKUlElYKsBNDzNszXYDHkDJ_eTXKkIAf_b5e0=w1920-h1080",
		answer : "Courtney Cox"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
		question : "Who is this?",
		image : "https://lh3.googleusercontent.com/Cpsvai4E1AkPj2F_pPLRN5ZJzuLo7wi6CTwWUiQ_5SYJSfVvxNoRK51jFMi_k8LczF6TxKRr9LDURQ6PU4Sm4pDao71UOgJ6TzOjWFhe7XZn06r6wTxH2pSZecl30nhm5g39LfpzcGU=w1920-h1080",
		answer : "David Morrissey"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
		question : "Who is this?",
		image : "https://lh3.googleusercontent.com/t6jNPEOY3O-2NtkXJB7lCHyw7g07A5UK3K7_0tJFWbt2lHlf3Yw8T7rQHzIEhCCqHYUtRC_p-aRnRQouWh26FcVh1BN1904Z3T9bOF8AZZ4Azu5cJBTkI5EsE0tb3H1OhiwZRL3IeB0=w1920-h1080",
		answer : "Sandra Bullock"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
		question : "Who is this?",
		image : "https://lh3.googleusercontent.com/hEuNOhlCqsUvw2mV13t5SEMCrPdSoaDJTJNE7HnNIKr493_AghWc0EU_0UvB1d3v9reKJf0n7n8HuLK30mYMawvoET_T9pL-1xuCK35H4O0d1bYVDWbiD1Gp2GSz1TO11WUApq_H3V0=w1920-h1080",
		answer : "Keanu Reeves"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
		question : "Who is this?",
		image : "https://lh3.googleusercontent.com/27apFmGyyYHOTR8LdFcxyVUxWSDOIqKvAe6NieKExX3jZHxCoqPJ3vEZucl2wkdymC4zZ9fvsohwWNq-OLBwK2hWgus3hvDNlujU-nkO5B1oj1SYgZlEkr3OwoAku8ZqMXjfW57xv7I=w1920-h1080",
		answer : "Harry Hill"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
		question : "Who is this?",
		image : "https://lh3.googleusercontent.com/L1Q-OlsGZkXSXmhaO_3ROJzkgDq12UCXT4FwrJV7ECwbLD__9amzeNQftbY6Z4X_VaT6j6Fw-B_sGCeTGFnPjJ0MI2FEw1xIi-vV5fk16Se1vyib_HlILJYYb0uQEjgux5Zsj1Pw4FM=w1920-h1080",
		answer : "Kamala Harris"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
		question : "Who is this?",
		image : "https://lh3.googleusercontent.com/YUvvyubRIj1PLwJkqgWggyPySLPIu1oF-zPENMZQYB3OthuUA20Dx3YP0d4iTqo7-ChUGqKNHft6XUwzmcvznGKPJ3rzd7ROqs3KCnB2YAgzbJ4mPYv4bKm0OKMQSyU1rbV39S4X7rY=w1920-h1080",
		answer : "Terri Hatcher"
	}); 

quests[++questIndexBuilder] = {
		name : "1964 Movies",
		hoverover : "Recognise these films",
		tags : "saturday,17/10/2020,1964,movies",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
		question : "Name the film",
		image : "https://lh3.googleusercontent.com/5VaLS-T0MZmw8yG-mGO1b1l5nbYz-2wCVzFsULBomzsb0YJIiqLetO8w4zZrQSvrjRZAvMCGHUIsJ4OP1YF7WyBuepuI_Bh38TiUGUS28i4GRRpB4FCrJFwyhICGWp81uG_fXpL91s8=w1920-h1080",
		answer : "Carpetbaggers"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Name the film",
		image : "https://lh3.googleusercontent.com/qkVYBJI7dkDfAsEdBZNgy1es2Whp02D8in9L6Kf2KR2aMstPDQwCfvyn05UY-8k4Sf1n09wyk4qo898U5byoY31mhUDJ6G1qFz6mdJHAbiwPSEE8w1pjYX0Ct07KZwQdqlIe1rYVB6w=w1920-h1080",
		answer : "Dr Strangelove"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Name the film",
		image : "https://lh3.googleusercontent.com/yG6NwyEF_tVnadEz5lkak59-grccqUfUfIAo2J2G4n90gfp-H1Zu3DFf15It88E6PCcV9keNbeHJIqWFWlWAnmiez-eOElQlCu0BvpC7hbtdMSDlf4xpChc84zLz_anuyNFevewjmBA=w1920-h1080",
		answer : "Fistful of Dollars"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Name the film",
		image : "https://lh3.googleusercontent.com/pAAkl1pd1nyju0EmEX2doiTFC90gzcBxXofPoD9BUVxip4Srhw4YJjd7fiszwRAAbjPbW0pcisX1YZD5qJaQ0SXKHqGdv4Us9AG6Kr8YhuENcguSq2bow8aMFlulVRE7hgcp339l17k=w1920-h1080",
		answer : "Goldfinger"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Name the film",
		image : "https://lh3.googleusercontent.com/UNb23kY8tvjLHJ443Z_I58YVB5WDiMts0fduUwtj7HrKk0e4uouf7fox3x3nVP7TehFVaw68SZYFUJ74gELbGM7W8oDP3oqPLbjmvv1k5LFmTbwiaTNNBfQ3jQQHT6HtlNWxdMcPG20=w1920-h1080",
		answer : "Mary Poppins"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Name the film",
		image : "https://lh3.googleusercontent.com/XIOG3G62C38Suvs-O93JYXP7oTOISklMY6B_texMWb6C4FLNmNVpnCNBiywB5PRrATwbL-mInWc80MUst2UGYqYlC97OddLHCuxCMPjEQKlgcmPYPBNeMwe8UnEKq3_p9fNieUNOeHs=w1920-h1080",
		answer : "My Fair Lady"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Name the film",
		image : "https://lh3.googleusercontent.com/VEeY_5P7WTbqAjRyY19rvO2Dzmm3QxPlB3-AZJb-p6NBl0ksBQo1pd0Xd48joQfZX16qmG3PIe8xmd-OGkjHF8bzW0YibBcB8SNh5g7b_ePr2RvBODLpJNMK8QgeVRSmnb0b89Mv4J8=w1920-h1080",
		answer : "Send me no flowers"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Name the film",
		image : "https://lh3.googleusercontent.com/lfap646TbecNOH24Lg_HNDTAfez-SyNBtQ2_nvi3eRUbHwzoSLQpCF7dnJNccmIP7Mt2KOn0qYuUbIzu1gvvSgHiT24RTHUq3NAITbGmzK2fZV5iAefRqhaFGpfBfg3hqoD6Wz7AxrQ=w1920-h1080",
		answer : "Shot in the Dark"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Name the film",
		image : "https://lh3.googleusercontent.com/oIRqO6gCVcP4UoY7T2yHdHV4o5dFOg3eULAsyTCLIsXntzktJmnNufM7e6Jx09nFw4lAHnbU_Ab4q4f2HS-wiJ76dKcLr9lOj-9paZZ-kG0DJ2KfYJwr_KeFmMrp0Mr9ExYYCEnI3RU=w1920-h1080",
		answer : "Viva Las Vegas"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Name the film",
		image : "https://lh3.googleusercontent.com/duCLTMCZuSGSOA2Gm-djfq6j0uQDjQ2_a0GFsTf0Xqh8KhAXSOat1Yof7R8lbBbxYkVAKOFzbuo3cKgQKNPnyQSl6IjF6uuOtd7bcPIxdm7S99qE32pqjUbF9BZKiZvdx9ayQOk1DlA=w1920-h1080",
		answer : "Zorba the Greek"
	}); 

quests[++questIndexBuilder] = {//quests[68] = {
		name : "1964 #1s",
		hoverover : "Were Josie & Charlie dancing to these 56 years ago",
		tags : "saturday,music,17/10/2020,1964",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Name the song & artist',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/3eKah2F4uypvlN6zQb03Jk"  width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answers"
});

quests[++questIndexBuilder] = {//quests[112] = {
		name : "1965",
		hoverover : "What happened?",
		tags : "5/12/2020,saturday,1965,year",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "the state funeral of who takes place in London with the largest assembly of dignitaries in the world (until the 2005 funeral of Pope John Paul II)?",
		answer : "Sir Winston Churchill"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "which English footballer plays his final First Division game, at the record age of 50 years and 5 days?",
		answer : "Sir Stanley Matthews"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Goldie, an escaped London Zoo what, is recaptured 12 days after his escape?",
		answer : "A Golden eagle"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Julie Andrews wins an Academy Award for Best Actress for her performance in the title role of what film?",
		answer : "Mary Poppins"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "who knocks out Sonny Liston in the first round of their championship rematch with the 'Phantom Punch' at the Central Maine Civic Center in Lewiston?",
		answer : "Mohamad Ali"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "the DeFeo family moves from Brooklyn, New York, to 112 Ocean Avenue in Amityville, Long Island, New York, in the United States. The murder of all but one of the DeFeos nine years later, on November 13, 1974, by the oldest son, Ronald/Ronnie 'Butch' DeFeo Jr., and the subsequent claims of a haunting at 112 Ocean Avenue by the Lutz family, would lead to what franchise of books and movies?",
		answer : "The Amityville Horror"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Bob Dylan elicits controversy among folk purists by doing what (playing what) at the Newport Folk Festival?",
		answer : "Going electric (playing an electric guitar)"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "the advertising of what is banned on British television?",
		answer : "Cigarettes"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "whish classic puppet sci-fi show debuts on ITV in the United Kingdom?",
		answer : "Thunderbirds"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "who, a 27-year-old stock clerk from Hyde in Cheshire, is arrested for allegedly hacking to death (with a hatchet) 17-year-old apprentice electrician Edward Evans at a house on the Hattersley housing estate?",
		answer : "Ian Brady"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "British theatre critic Kenneth Tynan says what during a discussion on BBC satirical programme BBC-3 for what many believed was the first time on British television (The corporation later issued a public apology)?",
		answer : "F*ck"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "what band releases their 6th album 'Rubber Soul'?",
		answer : "The Beatles"	});


quests[++questIndexBuilder] = {//quests[110] = {
		name : "1965 Movies",
		hoverover : "1965 Movies?",
		tags : "5/12/2020,saturday,1965,movies",
		questInfo: new Array()
	};
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",//Clint
		image : "https://lh3.googleusercontent.com/2xpwv5kzkFJ7IQxVzdI4l7k0G8mnXnCycY7_EmocgubpzJZ6dlvZFTEESG9HRs49M-P-VqUgrtU14kIQSHxOGN2PagoPuEQVd-3NJj8qPsjtdkYMv1PWVueNEDu2_M1JZLvUFZiq7Bc=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/sKgBUMn8Ir6zD-Y4shLSJ6TMB_ItyzRvh6l5AfmIvnqL_QTPd8JXCxu9OmGqSBXrbsjZkoJnlM6__Qzx0byex8UH_-obV9fAhxBW8oKUlRhd_aWUq3bCm6Ev1R7pUy8NQBaBYZRtfbU=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",  //Thunderball
		image : "https://lh3.googleusercontent.com/5h97elwszqgoQ738PduVLbr1pG_ty585SfJdq1f-SIXi_gHWfCdHGc6Y6WZNsTqHOVtsf__mz2zbxoFvHQHnA9ZZHVdY9GWEVaiuQ5c7wsgF-hhbAW42UiVn8LrFgfEZBf5SQJjZds4=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/pWgHd_w2Nu2ImeczBtUMTa3QtuYnKk2KN_k6k0A18Jv08HLXYPFGZYWnPyeXkPXR7MdFuO3oO4uGBpZSrgt9j7UNSXQYRx3EyXjC4W47gskzI23CbgNHAeEAUVXKezWmXiLKKnvAW-E=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/SlBqrjRNKvHb9HSxIPSpwyoKuZjtCHzK49XuiyIZub5cD6JP78Yz0xbYcueG4LTOa-lyLtloHbzmlAWfNbsAjMFvdC5j8ieMYdWUz-hW3TmktVhTkzNDV2mE2NvbUQBMAM1M1nYBX9Y=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/i4oK4vgKY4rl8OdHS4zPOftA-LlaHU-tMr5e5YO2AyRP2KmhdE6Hp-IvRirT7cEiCNDHHfIEbfK2fnEpNNk2QTFGnoTCbGXnUcY43d2DtsWH4rrP4HbHFwuxN11q4SizAiP3ADjbuHQ=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/mW4cSlBRPIGa1GJH6cZlXfAWUFtjXe1dz9Sfnnj93hafE6SJz_JA9vbmED54r6ZHxr1bz9QV1LMe7FRVwqZv8hmmBB7T_INQAjPSBtAYNBuA7kpufOYqtWtHJfqq6HQdi2MJXBfTmjI=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/6De6iIS9HPdSZExPce-iF50Ynko8dVJvVTfRkGQv_46zD4gXt19xZHa0tjCegm-i8J6P-ifQYJN3E5JqPuPouE7V3vx0Bh-fwfA4quWaQk98a4sRFzrAgkFfa3UWMW8-ucasmww5C9M=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/D4g1h4Har3NqA4XomDexLChIAEfyZXTWoB5qso9C77nqpWHf-owLgbMccgdx-y0fMeV7aoRHqPgktpzO0UyV49RhF95332kBM4P1nlxm-7TCyHx5uiyhhkVBKEtxU57y8GjGqAc_n00=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/diV-x-wegUlgV_C275WzNvHv7qALNDIOkhR1yiuUzgcHTuNJYy-6MnvE38Bn8np22DRmXSnHke80FhI1i1jHlqb_2ARQFjRMzf3-f5gjg0L-3HzsSrmkCvrORv44UnRo0DIp7QZgOrM=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/WSPxIgpUSHD1ogGTJijvhYm_wiCOK0T5Qs9AZI51V_QYAc-T4sMIfaYaXAO5nRd0DPjp0v9Ff2F9IVdPhq54gxF22F7Odyrhp3E8b-WDsgU5sDHAJMN_C8u3-h4Fkq5ERn28JS4c2Vg=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/z69QJca5huZgAzG_8F73U9KurXm7MqrQv5UwRy8ro4H6xxZqEn9HG7wuOm2dQ3fFWMJz2uZNmwVh7sxS2yWnvbAqxglSqP4xPRpoJtuWiItTyRubtRKVKnVGU9_zjsX0UkWK48ic3QY=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/233dvGSJJFXMrpAax3zJe2Xkfyx3zJmISPZ4uXci_y7ToVp_b1qGQFSD0cy8Qz6Qee3RLaCFNnMJJHfllyvONDxZmBFXNW9nqKE-d70dhMNxlJcdR5-kJ3w3wJajQ2S1_rgE_4gUKbo=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/WUYhzVxMxIxTOIf0tUK6RQPG9PQfuawTKJJwMlU7GqxcY7c6ilvCMZLoMRTcHKwG9guf1JLwbTRUNBQxh5MZtCBGxixcNzAh2sDw0ySWGvUipaxPaFYjmuk6OWaMr96hCAshrSD4Llo=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/Gcpq_wnpIWEQ3lvLfpD_QYhDXUjDwJAHrUJ-yPKze6WndfR8hHoUNeCrobhXGwcs9ziTuEv-eHzcftKrR0Or9RtFsuaLoEkloePY0y_kIdeEhaBKmC0-nMtOqCJvsDQ3bnYfppYdLWY=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/8cgDQGZvHuCh6pp8Wg35GNpj2niHjZISvWGJ1rbj6466JWxbXIM-Op5umr6pBcU8BVKhIhqae5RHU0fdFBWjcONY9wzT5046xjhPQRpy5lzKDXijFvSJEL6c1-4QvKj5N6_ToURjU5E=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/7rwyDPYxnQSxa1Wustx2SVaXakgCQAJNiu1Y6PufIq2Ysa0n2qxqlsDRzVVraEoSlAYdc6l6YQD5p1AHVWgfmUjt3NHIEaRZa2XBpZ_naIwWdcb7WWLGwlrsW1CYRRPajEUdRudzBps=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/xjIk0FBaFSsJYHmnLiiEuIplEPjveHrR-mu8npCpalVPFycCtT8j0K1RhKMFB3aU0BQQRijPQZgmhmYbjUmwMw2WULngwwZd0C_J0Ssci1PGat55SEtFxUKV5hoeIqUWdNesNg8aiQ4=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/NIXl_OOv2aInschzH6Kzue-zJs79aCVxdEdnhG_ObtVzlrX_vXTlLM8q-ONOsH_rfFLcnG2WwJtqYqY1hwUoGZkgUtd60zwDFBlaQnp6bSU4Dfy9pRmvFNlWfWBw1LEs2tX4LNstT5w=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/JpSAYG-433DNd5Y1utLR6ndQVj84phVxC3VsXTtH7ew6bawiNBjkvLhj-1LRTlQwQOM2dR58bn6MJGIWAjIU68Aa6EHMK2b5XGVV3hk2yXyzYHzrLFpEQZ47of0K4Sb3p6cp-joUqhw=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/cViJbt-VaAkujd_givLHopIyfbOcg3JLxCIHA5JXZmpvy--B_AX4oe4ASWPTLyXSCr73-rN_s92ppb8-m-pfBFq06lwhWCb0H_mN4SiMECmcSqEHnEyXVWA5IdXT34Yuc2OaFCIDnkE=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/ihPv4PLs0xKjFxSlIjbDm4VTmgUxr6KCyxSc9N_RgTiIGFd2j1cLUcK26uBv2mPQkXAUdFwL_sb5zPqeAx4bBYSo9yvo9Nfa2mi7o21QlsHWBFwyF3Zc9xQC7pFveWNfd8RsQf_9RwQ=w1920-h1080"	}); 
	addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/viTNtyBUrzl5S254H-W952TFJ36u9gxExxAVX6ND1Ft4LPuVfw4mWt1_wGXtzTuv9rH8Lf0Et9onEXOvzFauV0RgwFM-1jDpaLukL-d8e427MwStN4FBp6BECSm31QRZ6pGxUo0bMxw=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/jmnoSh6YVkhGM7yJm8M3wEeWCbP6IKl_XILPsREpExapc2bgVDmC8iw1OBgK6s329gV08wpEDxzAop1pHMt9B2pvLDH1NKQmx3oejdkO-slzoWjshdvVwQtPo8RaNZvcUYSf5SM00Mk=w1920-h1080"	}); 

quests[++questIndexBuilder] = {//quests[111] = {
		name : "1965 Ins and outs",
		hoverover : "Who dies and who was born?",
		tags : "5/12/2020,saturday,1965",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/DHiSS_e8JtfASC0bRX1ys0lI1ieAQ-vvFuZCgw1unM5YjS3wpOubHEEVm7yBAXWGxdq2aEgdq3_BuBcEoIfWBa3RtXfy9aD8EhRZYGgyENBiYUc1CEGhH3V6YehcrqIHtdBChAF9lT8=w1920-h1080"   ,
		answer : "Vinnie Jones"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/u4mwwwnQi6VV5Ue4c2wBjU89b9JAEAZRtXEZR5lmlhSbNmvSRJXnS_YTjnDf3wBjqb2cQ1GZIZbu2NX3BNPkb_fGOyqlm5rCWdxOucQ57jO86wXbx14MrNnBk9nWDZtKXYiIqH3l6xs=w1920-h1080"   ,
		answer : "Joely Richardson"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/KaiTnIG04YqbPXzC4SPvPs2SVJ1rs7ERBkOM4anPHj-Aq3Ip_DtK16fCP-eBHgGqkInC1bTTLTOQ_zij7UfcmMUVzxr5qZZl5_03y-m2_X-vNqC73lrZ4JDW63QMuDlC1zNWSJYZ4ag=w1920-h1080"   ,
		answer : "James Nesbitt"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/ZMf22Y1Qz_JTKcBOrwe2Z7jxxLFcUnHwvSL48Fen_SvXqbU5H8OiHcoQJZNpdO7qmyJ8lkR3mNJMgCvErhJeQWWvOG7EMjFfrGrAXma8dyae7EXTZc_LstE2UNzs49WEF0U8rjTt9yc=w1920-h1080"   ,
		answer : "Alan Cumming"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/Lr9FAfp1sp1WlIh4IB_CkMTXvxEtsur_-T9QX9aOCghHXKeFEj2ENGF7B7kKRBarL3fuZ6ELMx8aHpURaxRMKdXcllXS_Fp_NAPyc0F0rWCzo4NDpnxav4cOPSowHccmwrAqGZK9rOQ=w1920-h1080"   ,
		answer : "Chris Rock"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/C5fw38wTNoUhUDyhc57uBlCJ2fbrCN5tRErL6VbAcihLbbvx_41DiT-bWI3Z8nWPqp6getoNrtGtiuaDSS_CALyBfTbC4tJX2LwhQ788nSEq-P6uGMod-tuLJWG6Z0YjwiVeUmQ3ako=w1920-h1080"   ,
		answer : "Sarah Jessica Parker"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/wW4UMOvipipyVzZSDFC7Jwppay1sxLIhN8rtFlIhBIUveQaWMK-AQ2jJ_58X6Xsk3r-PBzpL7ueOzSZ2_TFudD9rzwQKKolfNVfAFZjL97Z_SAOBFwT8x1aZv5Iv6sO8kNrdFusH94w=w1920-h1080"   ,
		answer : "Robert Downey Jnr"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/iQOW9XAfvFBU0eDaDIfzZLHXKQ1NZrsmVfhGvvgKn9AOX3J_8OQ0qbapcOeBVt8ux_IhfRQgZQ9cWo3k9e6ROxPuTSV-DEy6Lp4ADVVMTwwOnUdNmzA5QPPJlgbo8h3beK6GrspAH_0=w1920-h1080"   ,
		answer : "Liz Hurley"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/NQYaCsymSeeCNG3pGAs8lDqBXX-rJbxOZoYVyk_aTIhtbhV2wSHb4i_wMXq5MthFKhPElXFYeHg8dLsOG5RM5yFchv7X7TfSV5qNDtX76R3_JOITySahExErxeJfvJjCqtMzYeM487s=w1920-h1080"   ,
		answer : "Slash (Saul Hudson)"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/8mgNuu3X8BdPxvQRY8GI0alz54FFcV0gDLOvou4GZQ57jzFcJGfEAHRsD81yfcNcXvb6jWs3o7Tf9ErmnwUBCv1ZFRmcAL3ItlMUxSz331ZrWbknC51S9-evfmlzvYQ8_ouCajOta9M=w1920-h1080"   ,
		answer : "J K Rowling"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/-XPuh5qx5Sifv9gAtUBwhS5ZOxulHXBcX0RorEtnsx7wUxLgXxgWokRHMhEeeLd86KquOj6e64HnHFORYQroG-12FTLXff_dGP78WALQauUFW8gWX0S6hr_eI6NSEa8-85mUCRJKTWk=w1920-h1080"   ,
		answer : "Charlie Sheen"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/fI3Yo_7Q1B4krmEFHMvR1PIPYus8N64FDr5RN7VMmURwoeRmMJKlakV8NRA_PjmraiFHOyvzckiExO7alVwxE8fibW01OuVEYYUIqDvfSzDDXz2UpuH5I5DnGgo-kuDMp5Lc80xBh-k=w1920-h1080"   ,
		answer : "Steve Coogan"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/_cPGguqhZXyN8lyoHBzdX_MRk-71PHwgQMEx_93pCKkREUn9psEDrSnC3eZqNvZkF0TQoLWWNJ0TCo2D1y8eI7V0wfWDm7seDwZKC7DNwcqOLS0ByCf-9zAML1DX2Rx0lTBuiynPdyU=w1920-h1080"   ,
		answer : "Mads Mikkelsen"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/7gX-gSkTUNd1dayMFVQ3LRr_mKllNKeHxK5oH7WTdP1RRe7B78pWeQDHJM8Eqa3kG2eONmAUlyPqSm87afdUF7q4TI9I9G_YIwA7n-FIGuLNtrS5VWAys08-9FGfDAHahUfF1vTyGaE=w1920-h1080"   ,
		answer : "Ben Stiller"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/6PwTadeY-PIyirH6KxSHEzUrjfQ40-5MX0kUIUChELqF86RKh9fpgeNS-LD9St7qfQ5T3Eg7XNR-MGCx81MvjstF3z67bqhyLqBKprhFuOaFNjqhMAFwcC6z-Gr7UATClgfwW4yOIwU=w1920-h1080"   ,
		answer : "Malcolm X"	}); 

quests[++questIndexBuilder] = {//quests[113] = {
		name : "1965 #1s",
		hoverover : "What were you dancing to?",
		tags : "5/12/2020,saturday,music,1965",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : '',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/4GFEq4ispxrcy2Vm2M2wN3" frameborder="0" width="960" height="569" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "1965 number 1s"
	});

quests[++questIndexBuilder] = {//quests[1] = {
		name : "1967",
		hoverover : "People born in 1967",
		tags : "saturday,19/9/2020,1967",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "This British comedian is best known for his stand-up show full of one-liners and silly songs, and has twice won the award for best joke at the Edinburgh Fringe",
		answer : "Tim Vine"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "One of the Oasis Gallagher brothers",
		answer : "Noel"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The Barings Bank employee who's dodgy dealings lead to the bank going bust and a film being made called 'Rogue Trader'",
		answer : "Nick Leeson"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A legendary rock singer who died at the age of 27 having had just a 5 year career",
		answer : "Kurt Cobain"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "An English footballer that played for clubs including Newcastle and Tottenham, played for England 57 times and even managed Kettering Town, but is as well known for his drink problems as he is his football skills",
		answer : "Paul Gascoigne"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "This model and actress came to fame in a show that was a worldwide hit between 1992 and 1997 and she's been in many TV shows and movies since. In 1995 she married Tommy Lee Jones and they gained infamy when an explicit sex tape was stolen and released on to the internet",
		answer : "Pamela Anderson"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "This tennis player was the first unseeded player to win Wimbledon and in his career won 6 Grand Slam tournaments and 43 other singles titles. After his retirement he's been a coach and TV commentator but was declared bankrupt in 2017",
		answer : "Boris Becker"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A TV presenter and personality who began her career on TV-AM in 1989. She won Celebrity Big Brother in 2009, and has 4 children by 4 different fathers",
		answer : "Ulrika Jonsson"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "This politician was Secretary of State for Children, Schools and Families in Gordon Brown's government, and was later the Shadow Chancellor and Shadow Home Secretary in Ed Milliband's time. He also made it to round 10 of the 2016 edition of Strictly Come Dancing",
		answer : "Ed Balls"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The Leader of the Liberal Democrats from 2010 to 2015",
		answer : "Nick Clegg"
	});

  
quests[++questIndexBuilder] = {//quests[69] = {
		name : "1967 #1s",
		hoverover : "Were these playing in the maternity ward in 1967",
		tags : "saturday,music,17/10/2020,1967",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Name the song & artist',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/6fmeMnX7fSv9wcx5Jr63yY"   width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answers"
});
  
quests[++questIndexBuilder] = {//quests[60] = {
		name : "1968 #1s",
		hoverover : "#1s from an excellent year",
		tags : "saturday,music,surfers,3/10/2020,1968",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : '1968 #1s',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/7E0UK6AWOsjSDMEcI4IMBI" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answers"
	});

quests[++questIndexBuilder] = {//quests[97] = {
		name : "1970",
		hoverover : "What happened",
		tags : "saturday,21/11/2020,1970,year",
		questInfo: new Array()
	};
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Rolling Stone frontman Mick Jagger was fined how much for possession of cannabis?",
		answer : "200 GBP"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "The album 'Black Sabbath' was released, credited as the first major album in the heavy metal genre.  Who was it by?",
		answer : "Black Sabbath"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "which Rhodesian Prime Minister declared Rhodesia a republic, breaking all ties with the British Crown?",
		answer : "Ian Smith"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "who announced he'd left The Beatles?",
		answer : "Paul McCartney"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "which member of the England national football team was arrested and released on bail in Bogota, Colombia, on suspicion of stealing a bracelet in the Bogota Bracelet incident?",
		answer : "Bobby Moore"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "The 1970 general election is held and opinion polls point towards a third consecutive victory for the Labour Government led by Harold Wilson - however Edward Heath's Conservative party wins.  This was the first election in which who was entitled to vote?",
		answer : "18, 19 and 20 year-olds."
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "the last issue of what in the Royal Navy was distributed?",
		answer : "Grog - Grog is any of a variety of alcoholic beverages. The word originally referred to a drink made with water and rum, which British Vice admiral Edward Vernon introduced into the naval squadron he commanded in the West Indies on 21 August 1740. Vernon wore a coat of grogram cloth and was nicknamed Old Grogram or Old Grog.  Vernon's 1740 order that the daily rum issue of a half pint of rum be mixed with one quart of water and issued in two servings, before noon and after the end of the working day, became part of the official regulations of the Royal Navy in 1756."
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "the Third Isle of Wight Festival attracted over 500,000 pop music fans.  Which of the following didn't appear: <BR/><BR/>Jimi Hendrix<BR/>Led Zeppelin<BR/>The Who<BR/>The Doors<BR/>Joan Baez.",
		answer : "Led Zeppelin"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "which 27 year old American rock star died in London from a suspected drug-induced heart attack?",
		answer : "Jimi Hendrix"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "whch method of long-distance freight carriage was used for the final time in England?",
		answer : "Canal narrowboats - the last load, coal from Atherstone, was for a West London jam factory"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "the first what appeared in The Sun?",
		answer : "Page 3 girl"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "not a lot happened, but in 1970 who started their business by selling discounted mail-order sales of popular records?",
		answer : "Richard Branson, with the Virgin Group"
	});
	
quests[++questIndexBuilder] = {//quests[98] = {
		name : "1970 Ins and Outs",
		hoverover : "Who dies, who was born",
		tags : "saturday,21/11/2020,1970",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/g3P1VMPHSZuDuQs5fTMbuxRTz3h-h4zsylZfGC_3PVbuO3B2vlrTu9H2x9gGvyW4-3a342_8ZF15UHqAXV9PfuJanlfvfNq8aBoZcqykq2cl1JUdzVUbnUZsp3xlrfnU1ZaPP_8_UvI=w1920-h1080"   ,
		answer : "Heather Graham"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/sQ-6RVFOo0Nzhct1ifN3MP27qklLqjY4pwPVQzVYVnS-vHwnczdHgqwt6uXft5oLSO26-zojjdXv6xbFMb_gLZhejrwd1VWqfgKeEbQN7WDAmyGIZU4PMYclie0iVfeeWCOvl0VLNQw=w1920-h1080"   ,
		answer : "Warwick Davis"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/T62tWke-UzDEr-rpxyH2JxqC-JzATyGL-JSsFWvspFY6Gzo2ZlB88meI156KFxt4LGpi_PAJiuQ1qNPVHMlxbNnDoE_U5h_c-Di80jYOhuqhTyKQktB3-EwXe94XZGwT8LmLimwSfkw=w1920-h1080"   ,
		answer : "Simon Pegg"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/aLbhIQVL6IJHhC4qnMZwgvfd_big9LYbC8r9n6aoVNLypkJdJqnu2rZ6D1Fwt14kwkKdz3u56Bjhd38bn9uIxyM4EuRdandowJXmYnPqAuC1hnE_zWyMQUbqXeJLuZXj5x57ZFEkhQ0=w1920-h1080"   ,
		answer : "Mariah Carey"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/2pnLbkw-qvOBnv-HFaJkg33cATUsmPOL1SqIRJbt8rgdkpVmmVovR3S672LyCcow7b6kZydpJlUv8UeAuW6eTthE7a7bkYhgwwoTEtuuFF88eZ6EiP0nCTwj22K5N9W0LYT6rY2GjpI=w1920-h1080"   ,
		answer : "Vince Vaughn"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/42Vzdy4KJ_OLNd_g2uIa4TXbRZIZARDFsmGSmr9I-oyf9eeMTa6ZL3vyXnUZR6aUncM0sY60nJDoBvMo1NnBK99piDKcLo4T8Y46FoQF_FHVCrLdGgVK-_zFl-vDQDwOw_eKKGeyp1A=w1920-h1080"   ,
		answer : "Melania Trump"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/UXDM_K6-_-yPwr-wAF3pltJAViKs8n95IH05ksxOp3oLxD2aZLPgFVdMboxRrt8FLtyoDcs46ap6uUBAQS8YQuTB-AdBup0EW4xWRTPdHQafJOfOI70Lijco4LFJR67onMOoY5Ym5QU=w1920-h1080"   ,
		answer : "Andre Agassi"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/BEdCIemEuwaSHLBp8UyGxpDnjuELXEBiNmvmsS9smo-VAZ4XnXWQgU28UCZmXHmSIB2Jc4C2BU9wNRlui3eqQIpd6kTuQ6bfCTNT7-4Ua-lLvJOMo3yAHPSEHu99r_GdoIKpxKyPZJs=w1920-h1080"   ,
		answer : "Tina Fey"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/79G0wmFhR_FSsVnmVB1eHDfhODtCKZly325kzHd4y_K9gKAo3pm4aojVinGulRQhnw9-DenChHSHAX8RMKmVWU5jbkYgTUgvw_lwyQBW_b3f4Q_KiyV54ISnv3z8UFVjPPXhH99o2A0=w1920-h1080"   ,
		answer : "Claudia Schiffer"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/7a3ndKv6hZiM47w7XkAi3MZhQqL4HADm3HTB-RKfHexU-VwFJ3r3jd6XeW0gWxu2pVOQ3tFVElOOJhVWW6LZkJzbdTmpUiy-wfnwLjlo0MPICxUTr8LgtPeY3iVfZCryCwsIF4usS4Q=w1920-h1080"   ,
		answer : "Melissa McCarthy"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/pNOVqOWWBN3Fw1dhtIG83Rq75oTeIIJE_CAQaSj8pB8kmQBvDmDX9mg1Sh3APBvYlrdG-YDxx_YqK8mvJ0w1za8hG5KrQXr8Xb8l8tDQZZqxLCJ059YWRydQcFFwNG7khZbVX7PCXkg=w1920-h1080"   ,
		answer : "Matt Damon"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/vieZa1V1ycHp5sBQ-Kv_BM8ObLQ71wOcEXRr4kjOXWPvzOyocB8G2YxV8mlFLdV9e7XMVpknBTGyl9iLSY5yXTCptpsTLvPCP3tORPmHDFJB3auqN0oOpPAvRh01EAdZfbG2Ym5KxCo=w1920-h1080"   ,
		answer : "Sadiq Khan"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/vLNYVq_zJs9nu8GwhgV4Gifv_Gye76vBe05SdYDbTHmANaa86rIwCPSlhaYLA_LNu1SDvsSxzY2wsehU4vDfGTd0m-GsuZWHiXNRma-PZkjpmM5X9i6LnTHA6Co2Ut71hWRJGBiFvrk=w1920-h1080"   ,
		answer : "Zoe Ball"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/FIpxRbDfgQpKPITLusDYGrgbAYYyT2hMKy26_U9aaDm5ZmrcbVgbulMyhkWFNVkBj6X-gKBePCOwhx68dJteatgRuW61D6RCmU5MGa2r2nCkFicLWOKQnC9KiUjBtTqTXSeVbWz4n2A=w1920-h1080"   ,
		answer : "Jimi Hendrix"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/cs2GvbcDOpDx2wVX87UnAcHWMs2zv1BW6MYlUpQvcgh-5mvTqLqd5vUAa9XCNxNvNbyI_z2z28rIlCFy41mwrkwGFJrmsD92okNBFhpgt6mNJQWHhuL_UvR5jeIbvYcUCJevAwmkrAo=w1920-h1080"   ,
		answer : "Janis Joplin"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/f85hV2zXcxOjALPzXEKaZiyrsw49UJCJt_f_ond3eFIUS6tUay9QXGrcJotiP05k75Pi3Ossko1RL24R-lfnJd9MyLHyElp7jugqBF5vOSXrnXLVyRzwmJvDSAoDsyHUbbqJY-T0MBs=w1920-h1080"   ,
		answer : "Charles De Gaulle"	}); 


quests[++questIndexBuilder] = {//quests[99] = {
		name : "1970 Movies",
		hoverover : "What did you all watch",
		tags : "saturday,21/11/2020,1970,movies",
		questInfo: new Array()
	};
 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/T7wldmo2ePyVQ_-OH53CgMgh-Z6dKEEiLyIunI5T05_RwvAQB5CbKKxI103RTd-fr9eJe0hkg0dk18MRPlqJz6hIMM-tlkb03tf1feE9R32zNNp0DbXTVT5vSQJbwfet7MHDNhPuk80=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/5QjacHiuL3UjcfIj20OanCfIeG3-dP-UccjBtAYSBpd11yJ-7Gy-RwX3cFSAMekVNUDEZ6tcoZtrhmhO97FKFCVJPdY40lmxXb_JYWcsvd6tTnQApI0DAKZs7MJYaoU4mPCogUzxtTc=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/DJUVjkzLRvuDC_44bIlbZ7LEL0w1eYqqiJykX5msM5hvWfj6hbYcB6SttZQD74LO6UhpHC7t-KEzVzmohTidpmugGnHkzTUETerN7hwXYMS7Lw9HymTfY3RM6fi9ZNizlapjHfz0ccs=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/KLQ8b0QErgCaS5k8XHrZLIOJNiqpwj4Rs98Tw_2sk1Rm9yHkW2B5EeZAiA_53uBJRBilrhUrjwbRJNYAKc3uj3DVPi_hCzfnjZI4QrZ1dfdKKTkDc6xV74OYsm8J5aQDB5xtPBwwlcQ=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/dAFWdKzj7Rve0F21c8SEbEr57422OW2OI3oziMtgomb-fCaU06PWQHoGYvXraOvQO2NOmBzfhVEfWtK3b55uebUvfr1-bdwDjuAIzUmUSn6MkgYUk69WTRKbjGH1RI1dvFWNgpoHzI0=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/XygGXMQTj7MeUN3M2ezrXB5TlQ2Dw-yQ4YOKPJ0FLE2vQV4d_L_fNWNHj9clK2Q6cE-oLsgOhOiWrQ3VII4p5kw3wv9Sa9oGrB54Gu5sGr7vPPAZtRgjt2M1aEPiBcTttgCgvKXV9UY=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/JlJKdUB1tlTy5sB2Lh0dgPLpCMsL56SwmWqjKS3w8BgKO2tFQgcdLFnVLwzIDsqXJH2ukDQ_Ure8B_Rj7P1N-nQgQNwcwZoXl_XD4ekJEqkLYjHWoa_2fd-WRjXPHwtZha5-63Ro2iQ=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/AyAkiyfm7qrBXG-Px4DwH0yZ4C_wT9JdqtkbnXLEcuT6kK2qa2PSGLtm8agisadb_sqRvm3uywV6qYTQ9jmNjt0vcRczrpnJ6kxJI0g5nlmkVPBVZlRzIv6yj74gd9lqAyQQCNY8suY=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/uIIqDYu98iybAaGDdMvNAa2P-CMGTCw1UzXsPwQtItu7C2r_28k6aB_EENFBoF6L7ijdMUaBticGyrD4jhehULbGB5PDLVkq0SXV2ELgfzmZBnqOrtLAzaKJ2MNjZP4PPN3I8XXXg5o=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/tI_bJvuUwHbJcc-A4HkzmVS5B8qL7jbX517bltuhoQcbXhKl1XM1MRmOXHSwmLoKe8-hRZR5PSQ1uTLJtKUdwhymuJT1jZCWVCNjCvTFv36GX5VPsAAC5VAufweS64gkYnVQfKCqN3M=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/li6FfbsV6XR8pJA2RZxS8i4Jvamsz5v3-9GCDRGkANBIbf0MKmhWADiA64WVN-JBEnNBMKAHQ3lRxiRBWeGH6EDzBsdtxsk_iZRNu0z7XBH85s5Js-YPiHKCLiOyJmMGbkh7TYY_Oms=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/KsHZ0ymyzybfYX5DJkkGQs94q2W3uajq7rrE5J_Vw7b4T0zDwX97-BjeOoy3gt7lXSpZtBWxyPg2WcztcyvE5NPsTUX90jFHfhaAjfVEuD9RcKVc6lpUirw1wSCw7CGEIdtgqCaniig=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/wQKiCQ-oTDmjnUAvZMuABgGS1kbxFYPSzqbBeLB3cNbKhA8Rxtlww1Q4be_pqba5WtBhZRLbmV9gaPowiDC7HBR10S2njBeHGcJ4azRBtoXJ90jZJvSFmXADVFPcta9s1Tp-vb6a--o=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/adQrUBvOTRYNhdxlrzqYH2W6yzRJ1IqCODpyhr7Le5Rimxsu5NK75qFJHluhS27iBOZkobTd88T_aAEGG4-qtHCaTng8mhNBM8DGz7at61eyFYqcPtYoK6MGttEzUs19ytWhMosmE5w=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/WNfWymvmV9CGxxtyBq3cyXGh8tXFDTZHTSvKfR5sCYfO8igmzBLlhuB59P7nzJALtgTOlPergT9eKRfK5Fcw4ZdkzEfHjQD6_oHmUfaMe_Qr4PKX86b62I1XKXZ1niy65eKTnweyli0=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/B35DhhRmg9AXoqx_grC_4xTRCDAEDc1Mr6yUnV0Qq-yZOwBZ1Xgi0oFoE10xD1hT7zELVEyluQX4JqNVZgNQmRHlnIA3eBvcS9mKSRmwYR7TPyKddZIZpa_ykmHErwVi-9cDWoesm2g=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/iqZFXXaBFEXAbQf8-ySgIv8l4qMURweNFFU5H0C3R_gMZkjGqYq2qkyzfAdTL4Plq5n7CgBcMZZYdqa5Ssd8TduVlOQflmkPNPVBJ9m2uF9QIeBRgRHsfYt2tij-ANIveS7DsSU1aUo=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/RpEmib-SGXIAqVVz3X78LuvsMLNUiS5yGBwItSqBsTNR-VqjF3Ce3kxpNiNl8PC_YQrPhC6HYLJvYolr5U5AAW3aWUfiTCJg66_PIU_PVibPLsz3julYnsUQkFUkn_cDJ-gFXra8glg=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/hlimIud3FIOCKfqC9zO0QPbOHjnXh81UfnZu24toF3E6Ja-rFzU2DA8qk7vEfbPXR_TJD7i8rsPON2hXBpJOZCo3usGdseoMOtT2LwkfpIWfUMMsHu7ixaRaWLzzSHBxjsk1Mdev3qw=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/RcOS_2hrMs9kyADlWXpxAud8ZhvR25Xt1XAKUNH7DIGvE8fAbOkF3flKv2txxyFzQUJd4UO5rvnuws6xruZmtEDCN7iFOlj0x-j73Zqzkfusv_ihvIpw_X4ZX2KcTqASwl5pBYwhZe0=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/SQkk_5zjmJpn-Q0ofKcdMJyu6KR6QjZr3QpF6m2tRbkjLx06sTL8MLB22FuOc4tEUNC1RvIPUNZSZyrX_8s6QSkMzpGl8vtcNwJIPea0vtSRyvuIgQ4AYkJdfJauc0somU5cH-M4yWY=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/XtzyYdL9YRpGah5Z5yXJhXsRGKkCzvuEx2JxYLGbFmmsCamNI_jpWk883i9gCP6CcGGJ9A4eHsZAuuKJFmhksUAB01cHUISZYGsWOLLVMDzivLPLFxJyCVcuZ3kX1-XPO7rGxFTDWqI=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/3LmtyOLwTmDL_m5bli3pcTq-i2tQV0LQZGt98SrebmLLgaDi1sV-otZRTy5Qmniys7RWvqw0V3o5UoC8GRPH-AYSc8QUNK8jHY8L2XBRscPhBlUxaM5N6k3KlljaSvH9mZvzW0zIGvk=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/hZ01fgDoauojFshcaOc_p0-XWQopVVsRsavgrNw6ISUEMYUTwsnn_w0zRXq6HbpQLUhYFmlqiQrIanz8TuGQ2RrPQ0S0L7_K7WKS7edsaXwvGCSfO8aAgNyyuBYx_LvqKXvwEwFsgr8=w1920-h1080"
	}); 
quests[++questIndexBuilder] = {//quests[100] = {
		name : "1970 #1s",
		hoverover : "What did you all listen to",
		tags : "saturday,music,21/11/2020,1970",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : '',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/5JVBwZod2A8Yskldep248K" frameborder="0" width="960" height="569" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : ""
	});

quests[++questIndexBuilder] = {//quests[74] = {
		name : "1974",
		hoverover : "What happened the year Pam was born",
		tags : "saturday,24/10/2020,1974,year",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "David, Elizabeth, Emma, Grant, Jason and Nicolette Rosenkowitz are born in Cape Town, the first recorded?",
		answer : "Sextuplets where all six babies survived"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the first episode of a children's television series featurng a baggy old stuffed toy airs in Britain - what is it called?",
		answer : "Bagpuss"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Hiroo Onoda, one of the last Japanese holdouts of what, surrenders ?",
		answer : "World War II"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : " who publishes Carrie, his first novel ?",
		answer : "Stephen King"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Under Project Smiling Buddha, India successfully does what, becoming the 6th nation to do so ?",
		answer : "Detonates its first nuclear weapon"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what is used to sell a package of Wrigley's chewing gum at the Marsh Supermarket in Troy, Ohio for the first time ever ?",
		answer : "The Universal Product Code (Bar Code) is scanned for the first time"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who beats the Netherlands 2–1 to win the 1974 FIFA World Cup (Sorry, apart from my 6th birthday July 1974 was really dull)?",
		answer : "Germany"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Philippe Petit crosses between what in New York City high-wire walking ?",
		answer : "Twin Towers of the World Trade Center"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who fails to cross the Snake River Canyon in Idaho, in a rocket-propelled 'Skycycle' ?",
		answer : "Evel Knieval"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what takes place in Kinshasa, Zaire, where Muhammad Ali knocks out George Foreman in eight rounds ?",
		answer : "The Rumble in the Jungle"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who open their first UK restaurant in Woolwich, South East London ?",
		answer : "McDonalds"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what wasn invented by a Hungarian architecture professor ?",
		answer : "The Rubik's cube by Erno Rubik"
	});


quests[++questIndexBuilder] = {//quests[75] = {
		name : "1974 Ins",
		hoverover : "Who else was born the year Pam was born",
		tags : "saturday,24/10/2020,1974",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/aLhAwdrW6FO546lijTe1ZH56zEyZO7L5VlVgqyXCf-t0gbZENkIRWA_W3O4drEBITO6-yMbzn2zBWG1MgyrRtP8jr6DeU_MECypJmBjJvO4zzG3teeVZRXBYNrG4ZlqlhOj-nRxFHcI=w1920-h1080",
		answer : "Kate Moss"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/8sFyaG4jvUqOCGJH-_5ezbJMXPqkmr8Qb8AOPCL5PZvlJbshDJuxV-Lpakplx9F575qBWzpi3OGXLOYQErWqREN88H-jigMJhR_hEttTurPkL-3eDbIn-cK1zO9b6hq8pG73GSQmXcs=w1920-h1080",
		answer : "Christian Bale"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/nckCCvfDvxsUWD3cUj1S-EDfotTaRTfhrybdXrqSyIMdlvPHxIEoSOpp7Iw2qFtlzdvVKOqqmzr8FUOgGClUxHaqRe5X6EhbEGE8gRsojRGRS1yx1-SoR4GPpNzGbtvEPmdBUmBi8PQ=w1920-h1080",
		answer : "Olivia Coleman"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/igpGpeDhptXVqe9yeCNQuVHJfmcF6hQDy-qJosDV8TD8TBmZ0XdvW_YeqqKPwOa6Sd_CIhS1PIOH0M5uH9pBFf67__Ksyb3C7gc9_HccP8YBUKIKstALUeZlGQy3LyaZ95OmPsM07sc=w1920-h1080",
		answer : "Seth Green"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/zG4K6RkF6eC7_1QnRvl4tGPtdmm66-_lPLllMBCyEIog4JDlugR_a0yoqbmsh_5nAGxJTBErQZskHhvh1iArCZ1yr0usrZoJv7wFDEQy2a61NETSB6Bi8u0Y3847kLVjCxCFGH1Fk74=w1920-h1080",
		answer : "'Prince' Naseem Hamed"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/d0IyV5CoOFcBHP0Ukdu8yMxRm_XijNB-AMdSjvEw5y5kGW0XV_EfxBZGDYwqq5lFhZ8gVwWmumvNtrIZXjHmxSvYADG4cnSGMrXFJ5S1YBO_C6VSsRSLaADEZEc7Os3nK9M0iSJI32E=w1920-h1080",
		answer : "Robbie Williams"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/510o8aF3yfLIzBvVCfMop_QpUz7zszgEg1eUBIdTjToFBu9VtCMCvEgioRg5hz7TVFouKturWsuhmp5yGQa1phybYgJotZA7jw9UVpfbzf0OBsUbwfbGwkuTQqOunf-K-6WcpR0WF1c=w1920-h1080",
		answer : "James Blunt"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/RMY1QVK7CDOkBaRVYXEIjfVz-r6N85fUQTNPDWJKwllTf2g1PqndH3jM-yiJHQ-i3dWmTJ1Mf-w9AjGvIkF_dYSwESsbBIEZ0I0GFt5k0fgCoYTPraq_JF5ADuEXnv5mMq0jgDXZ6EQ=w1920-h1080",
		answer : "Alyson Hannigan (Lilly / Willow)"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/lp75nVdxiaAgYLrETkyK9TDV7gItpuG5SUcd_pw18DrgQ2GpOmHGoqgX-uRHcFrCCHtzCxGWD9Nv7lj6rm1zcZzh2im_byQ_gpK_ggJKyE8-pSFJ1pdE2ABcwS6drz-mBgbcQcv4XNA=w1920-h1080",
		answer : "Victoria Beckham"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/5w6wW7bfs0Tx_N5T8FPfbRJb_iMAEnBfTHluv_KC8dn-6r_C2DYOhaofedCESF7Si23E_D3SpGmx7pNAy2GPpnGmnd16i096ErDZEi1_YmosN4A3crjbgKOI15eltqSGpwfx83SO6_0=w1920-h1080",
		answer : "Ceelo Green"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/LNy4iCoyvv9r1DFEwZzNmqGezYRTg1I2lnnGdWSRxTAYluRPPJTS4E7VtNgyOVrDeLqukNZrtkQetg9bEMoDG979ViGdfFf0w_hQiZBAR--EhjqcSgT5pzkdPagqjKb0eOcQrWdHVqM=w1920-h1080",
		answer : "Bear Grylls"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/Q3HTYx6CDYyD2QRqFZMfejIQ4YiualSGMDDFTwAQ8AfUlIQjkFqhuUSgWq52YwHFFIKucIkA2NdmIups1hrDTTF677heFt_WLOIj7cy6hVUEVtK2hox7wWQj9z0d-MPxK_Hbd8hGkvM=w1920-h1080",
		answer : "Josh Radnor (Ted)"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/vmPoiF6CMdRkOY9aCqhSEmo19RnMia0d2gMftws0aI7u1cCSHwMXEtNJu2roMOh_C4UC4ySdc_lrraWH2FFp2z2U7U-CTZJ0fq3ahVQoh6h3CofTjiHI-qbgU0ExwsrzCGlO7svlSCE=w1920-h1080",
		answer : "Stephen Merchant"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/gCzyXq8lHNOzKkbq3XOHeyVEeieD6pcVetiEQaX59kLri0oRLA847fYiwnI1DUEceBvNfNjjab2n0bMgjV84McT4-oKI66rZ7KRqr2Nb26JLEpKgTWIppkdLdixVqBC2keoA2tjcQlg=w1920-h1080",
		answer : "Sarah Paulson (Nurse Ratched)"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/WvJGTCVG5Ievi3vAvOdHDIaheRt9AuYBmHpD-blKYiuYRA647VzdsRNJ-o3p3uFVgkAaHO33tQslYgSB0U2mFr7JWtSuvCmRpiFHEU-f17NHIu9RChl-8ymgWCLt7QNs2uTlRBOYxPI=w1920-h1080",
		answer : "Leonardo DiCaprio"
	}); 

quests[++questIndexBuilder] = {//quests[76] = {
		name : "1974 #1s",
		hoverover : "1974 number ones",
		tags : "saturday,music,24/10/2020,1974",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Name the artist & song from 1974 number ones?',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/6XeKUhfZV865bu559MBRp0" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answers"
	});

quests[++questIndexBuilder] = {//quests[114] = {
		name : "1976",
		hoverover : "What happenend?",
		tags : "12/12/2020,saturday,year,1976",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the Cray-1, the first commercially developed super what, is released by Seymour Cray's Cray Research?",
		answer : "Supercomputer"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what begins in Innsbruck, Austria?",
		answer : "The 1976 Winter Olympics"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what begins filming in Tunisia?",
		answer : "Star Wars"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "which company is formed by Mr Jobs and Mr Wozniak?",
		answer : "Steve Jobs and Steve Wozniak form Apple Computer Co"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what Washington DC - London service begins?",
		answer : "Concorde"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the Cod War ends between which two countries (1/2 point for each)",
		answer : "UK and Iceland"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "on the 30th, whilst the UK was celebrating my birthday, Bruce Jenner wins the gold medal in what event at the 1976 Summer Olympics in Montreal?",
		answer : "The men's decathlon"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what suffers internal damage and stops running for over 9 months?",
		answer : "The Great Clock of Westminster (or Big Ben)"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "which rock band is formed after drummer Larry Mullen, Jr. posts a note seeking members for a band on the notice board of his Dublin school?",
		answer : "U2"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what new train is introduced to the UK?",
		answer : " InterCity 125 high-speed train "	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
		question : "the first specemin of this shark is discovered off Oahu in Hawaii - what is it called?",
		image : 'https://lh3.googleusercontent.com/DyocdlIsv_60PxJ9Yh7ZLKjwE33yAERz7Y2nDuNWxtwC2_VbusP8X7zzZmCtO3HxNb7gj5AoKz8yPZedtqi-hayCdf0RjLpqId-opj9Pd9tZC78pz-dHgJNGjQKR1_Yu-PudipLyIRM=w1920-h1080',
		answer : "Megamouth"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who appear on Bill Grundy's early evening TV show?",
		answer : "The Sex Pistols"	});

quests[++questIndexBuilder] = {//quests[115] = {
		name : "1976 Movies",
		hoverover : "What did you watch?",
		tags : "12/12/2020,saturday,1976,movies",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",  // Carrie
		image : "https://lh3.googleusercontent.com/mmyegc5ihLPUwDeE2SsIKDyhpLIY7cQnfs_-EFmB89_EUHquCNJ-yl5ryUmMYxfJz2fNF9ORWfQeC7SXT8a0wO_JQdY9htv21eE-mdgdBnyflTzBSR4O79njVqSn0WpYLSbA7TdklIg=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/D7Q3BLntuekzNCGe6tQtREl8UYpN2NU3MG3d9qhCTkWd60iaPcGonS9180QWNaKT1sWc0xYNYRhMYLa0MAyy-ilU0S0cG8pggSCOvNky90VtVTW4JymSPU77uZ36jupHXb8ogbWpBTQ=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/_gOXZj_VLrw5nDAFnFRcbzjRawQRTXtK8MRdHtZ0TNsKCztgodZcBzhDZZHqUbaZvBXPpq_vf2_-wCMIggHg4WCfwSFpqfQf42fCh7GV4Nl-9FMzV4Ry9R6MjVlmgJg3_g1tfeN4fd4=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/eYOIcvQgI926xXfcCA_SX1rzo9_0bFeC4pclxMkBmPGffb8FjyOFWP9eKhDFR4AcSOP9Z-C6eKVdZjfeyHk69Q39VjcAVQpUp6axPwf8isWCGQye0tl9KkcaiHscXe5Q8zi_u9cQJRc=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/JbFMtWFATkbFR-lGhSUg8vtdo0LvaTU76ChpNO1syQi23e6WLzSoz6g_OSwKnGokzcGdrsmwwiR69hAog98lFvZY3-tvLwKmLIyNaBAHItRj8f_84WXZuROxYR0P5274aG-FktNlcmA=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/xVXczueMnyehkJ6VFXuwP9k-hCGW9ZEsdOaiWzpWMuLvPehYxkNJwSnPu7sCsP8I-nmzntl9TZEQVCm5rLsznVYjJ25HmvVJ1A9xMCw9fDzYnF8CyMgpZ-9VPYhDRis12nzHXLZn7tE=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/kCXdmQ34JNh-ej98zLLsIQvGFR7g1nBalLhMJFVXPLqOjHLH_uflAS-iaqa5TFJmoAFef0BeVHk4mLTCMK7B_AcmkgBe7I3-jCBfjRIcTnpCR6wpUcq_YhFiWINp51lSnxSau_CWU6Q=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/WTIte3JoGXvGPSAI6Eqc2VdqGAdtUWbvK1V23gNxlsrB3Tcp1na-T3h7vWW-vqn4wejhbqn-NJRaYu0PbzTxpm4ZTSmmGsLIAtYxKfnbEsEooOXrncHMMkve36pX-bu2Yt9gefwozPA=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/5g3PPwC1CKyZoeo7LqnIkz0dLdvG4dnjLTmM8b2fvLSFJ17UdyGM8FFYEJhqrDconHYbk21fj70FGmJ2cxB-bWDKDb5-PdTRzNoKzjLrJ91og8FEYEIM0yfM4nz8KoCWj96symbWzc8=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/lRRj96a7GM70bDfdZ1TQtEo0ZeYWg-lwzKOFB2vk1bKBF36YAe_pHLj6B9e1EBUX5zzDt6Vj9j8Oj8t6xrm0Pw4bjDJl2HGY5FosVHSakF1qvc978mgMz22_-Uauz-B6X9gUi4g2D_4=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/cfKt1cYc3lEyBe_jertXk0e6f0iRWPdpMlzDjk-C3jz4OCpqgo1EHqMfhEQNO3YIkFRgkKCvYDac7UhhDLyw14WmmP1NXSB-EemHwOwYS0u4a3UeGdlUk7cyEbj5ess1H7LCF6GVDI0=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/Av0hj-DeqSNh-SfOguPO-NU4_bvc2gBtIkBVPdWeSPPbswZUbFE44gyMe78hi1u_rtiZI_rjczR90Ke9qHRJXhP27P7aSmc0G_QyjUs9GsPVHZPQ5dSrNVUfgSsYmm5tDMyu4evVu2g=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/QDLe0CcX8M97lXzv7Qeabwavaj1uAbOQcYuM4dhdDcceA_2VhQm90VN2e1YDkquM-5zrpCXoA6hq4RUreChdIE2oeDSv-h6A3IvHBFHXLMqCONqsZSiFq730qcjUJhdr84-803pLOUE=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/NZOBjUyMTGArjpHpEDHd2wOUTPpuiwosovmXLNXeOnOS0U38ssr9M3XOX6GZsRWGqo181kMAl9DpLhdY8Q3AUhFC71EE5IRZ1w5BiEyInY-vlWkSNKy9ssLfhmgtJ24muUg8DA3GQmE=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/rCn4zUCUf8hCdjx4XTZX82DAj12O7M5sgVuCF9M0q32SxFQM3X54CTrDrq_PVL1kQSJvS8gUmSDkctUYep22MLKbLNrlQ5QKif2blKhTpMY5tOUanv52HI9iMH8eWnxatNWpn2Ehl7Q=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/vkMlTIXfyyLAeph-t_vhZ4GBHv19up4w34GmI8Yoo-kcFKlhWw1tFFS_dNSuQqZ1bsLnMgXRzdaQ548nQXa-rRTiJgm7hIZo0FXW71FROJ-roHMKYTz_rnQbr4IKcWAO_8DkjGY5vJA=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/20F9ONgXJgD30TbSwR-0OuptntQsHaXFhWF9J0zrpyLyz6f5KxusBpFYrIlAlbhreLxSjeT8IyuN37VQxl9SFin4oGBBRnDjoQgpRuc78JVqJDSfiCelfh63hjq8w1jvBqRF8pYdeW0=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/jRuEFQEtXGGKWWdQxHnf0ykzxd2Vlx6bGNliWcGgEdjH2_YtkhJEjowRXP2UnmmVp5Mv8opvFc-ZknFh56c6-N_iYGyFt3R-ghqrpq9ewccgTaoWGvk-YIy_CeJ3DFBMNe5TK0v9Dh0=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/PQFVNyzPbaADWAJZJXQV01nuqd-iB6C1tQHkM9NSYmsh5q4AZAlwZF2z4qvqL05s-eHBuLPl7fddcrJzLyCdmZZ8yDnkyn-RI5hNcLU_RC6rQdKQwakC1Lb8B2rQbHhwtivJGy3xXX8=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/0bSvDQF22VjdULrsMORZ03P6R5hEn2LVUUkyF3Hm52knJgT_YXxrBsAAaGnE4P6bqJjAOHECCoYkDi2xMXoT-uuDMWcibaGRS8TCHzmOugFcWqdHlQt14UnxmxcGGPqB-Y1ZBEYGYbU=w1920-h1080"	}); 

quests[++questIndexBuilder] = {//quests[116] = {
		name : "1976 Ins and Outs",
		hoverover : "Who was born and who died?",
		tags : "12/12/2020,saturday,1976",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/n-41X1_ooVt2z0qTOM-J-DB5o7o7bigGrzm3GXjGjQLI00iqX3p9VHpHI_rfEMLewNhGxZCTtDdh9scrhkOV_JaSsg8lihCxjuXHqavQNEcx9DXniACRZtSWgo6aHhBYOzfo0hWjW9c=w1920-h1080"   ,
		answer : "Emma (Baby Spice) Bunton"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/6VzU_ETyqkgu5elx8AfWSXNE3gniM_i3Wewiwvm8r9ztAX3g6gDt1DSYZeV_0DihYBeHDjV6PLoFGsKxtdG5IlsifVb84ijMa9Rw49Nio4Aod_Q9yqepZUgk2arJvvb6b2t4FK11eOw=w1920-h1080"   ,
		answer : "Isla Fisher"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/veXusKRKT_FmfhAUVpJh5RSUncwESpOAweUf1Shx-AJLb_8xo4NlMlNjLi0SidnVLdUR76w3D1Z8M9HOTSC4aaoig20RJ_7HCs5Z6-tY3xgOlRZx_FMwtI0aFGg-27D36uSNOlBJyrA=w1920-h1080"   ,
		answer : "Freddie Prinz Jnr"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/KSWDcQAquAOXGz2LfRZy0y6u3fz4V6a6DjuGP9O3FdR3buAeAjkxsovD-PPQ8AK6z3GML7Xv_fp98Ks-Xm1R1PjiSAYI07vO_SjxcLyO_ALEcbYMFV8kqh4YSyYFNdeeuc4IEiG3jJU=w1920-h1080"   ,
		answer : "Reese Withaspoon"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/oycQafF6sD8LQNXWcRcXoqKx_QEeQ51CLBLFSTh1y_TmUtQX-my3Lxoe8Ja4qdLszipo0OwzAP-lIj7Z6yGI6iqfHNs_DwWxWhU4h1TwQWLSHZFceH0Pn7_8Qr6L0M5iM-qQehnN2R8=w1920-h1080"   ,
		answer : "Colin Farrell"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/X4eYDpylV_3IRiPNDebdGviALOYTN3p3-JtJh_xPTDs_QT4Vd9pUw6q0l-1Jz2eL0CUNuWbBXwG9MBtysF8vFJE4xz1NsG6sxYclBj6DIdlnsVP717609spRa3_oW1guVqkW-iKK9e0=w1920-h1080"   ,
		answer : "Gino D'Acampo"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/AXQlXDVptCamLs7IFEbPTiPiV7uwSpTM3H1m4XUdFbsWy41FnNukaNHHipINwYxKtB78OdFhjStOwfF4dKDWeMUTn0jfpopbT8IuGTdQ61jjVXT7jPSw36fw8pKFUPQZZJel9LQT6y8=w1920-h1080"   ,
		answer : "Fred Savage"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/6ynr8-KI0jfc0kRDJ27iumGh19qh9iTuG4qvUTsyqzV3qvKi3IlimGs1tb5E284Jt0q--kFK8hZ6nXsWC4AwUQqnBgoOah0BuqZEoFWzsfU0nxwzIi5lITkn2f1bQh6NvHXJ_48RG4I=w1920-h1080"   ,
		answer : "Benedict Cumberbatch"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/04FyA-Z7ZdiZENf67uDzPdA-RK1R0jI3lj8lw3Yv2b6T2R1CTiGTdwY7Y906oyABuej-x2p8WwRenWE-nNdz7HJYRCs_OZNZ5AjrQSUBmTfzyUXIfK07H5mHHH9ROZf6BgP8TtlJ8Fw=w1920-h1080"   ,
		answer : "Ryan Reynolds"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/o11_enys5TNvDd6tiaXusTxwaDM_22ox2I-9w0sr1f2kpTr0Jk4pyCho8PP7EZ6RcgeY-GbpY7nkXiICZUOx-C7aGHehwsvG0Xvv-3pznBKa_cULCORWrKbv7_6nbXAKj0ZSBnS2bE0=w1920-h1080"   ,
		answer : "Emma Willis"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/8_9JHsKM8MnMqfvXac2JuoagDXcEBlitF3IPT3v5-jgh33WPpRO8h7006ZyLtyDrvkkM6bHmDIOGQmTwztACx6lhPflPyfd106mnw7Eqej9-h4bUIsZHY7hINcXvNhAFyQbUY28y_l0=w1920-h1080"   ,
		answer : "Stephen Gately"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/XOS6BhHPgVtjSYPrTWwcU2K_n9X-k2aThvSEr6kh14GSRteNnqV-8pYMEKXTK9k4wAePPkeC7ZkRES1Hy52gbQp-dEZfyywcqFx6PGPwutofLkidAkdw0lY3S8ZFOgO2hmagJ_5xCQw=w1920-h1080"   ,
		answer : "Sir Chris Hoy"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/AUClH81Ppl2Pt0Q303u6uxtuEEMQ1j8eoBMr0Qc5LgVIVB4nuIn9-YVjyM38hSaFVJ3t1yqFenoNiWwEBA4v1UQih7E_qQv0STBXT-1Gz8iXgRdbdNDU5LujAbkuEu8xqAgQYUGc3Js=w1920-h1080"   ,
		answer : "Agatha Christie"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/r0F8Op7ZrPct32_dbnIO49uG6fedtT3hT2XENH24Jx8z57Q3iPx82PYMbf4jT6_9QEF59N-33kvY7Oaeh88o3nKrnjeL7paRYly7arkxJNCeFb0vQpJbt_yWlDsfhVpI_5XY6ij-gQ4=w1920-h1080"   ,
		answer : "Chairman Mao"	}); 
quests[++questIndexBuilder] = {//quests[117] = {
		name : "1976 #1s",
		hoverover : "What were you dancing to?",
		tags : "12/12/2020,saturday,music,1976",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : '',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/7u5z57jkJBssQFIcz1Y1HG" frameborder="0" width="960" height="569" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "1976 number 1s"
	});


quests[++questIndexBuilder] = {//quests[90] = {
		name : "1980",
		hoverover : "What happened",
		tags : "saturday,14/11/2020,year,1980",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "on the 6th, UTC 00:00 time epoch was started.  What is this vital for?",
		answer : "GPS"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what starts in Lake Placid, New York?",
		answer : "The Winter Olympics"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who is elected Prime Minister of Zimbabwe, who went on to lead the country until 2017?",
		answer : "Robert Mugabe"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what do the governments of Spain and the United Kingdom agree to reopen?",
		answer : "Spanish-Gibraltar border"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what news about Smallpox does the World Health Organisation release?",
		answer : "It's global eradication"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the first 24-hour news channel, Cable News Network is launched.  What do we know it as today?",
		answer : "CNN"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what record-breaking album is released by AC/DC following the death of Bon Scott in February and subsequent appointing of Geordie Brian Johnson to replace him?",
		answer : "Back In Black"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who leads the first of many strikes at the Gdansk Shipyard in the Polish People's Republic?",
		answer : "Lech Walesa "
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "after weeks of strikes at the Lenin Shipyard in Gdansk, Poland, a nationwide independent trade union is established.  What is it called?",
		answer : "Solidarity"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who delivers the famous 'The lady's not for turning' speech?",
		answer : "Margaret Thatcher"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who defeats Jimmy Carter to become the 40th President of the USA?",
		answer : "Ronald Reagan"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who is murdered outside his New York City apartment building, the Dakota?",
		answer : "John Lennon"
	});
quests[++questIndexBuilder] = {//quests[91] = {
		name : "1980 - Ins and Outs",
		hoverover : "Who was born & who died",
		tags : "saturday,14/11/2020,1980",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/nsbRV8d46uEyCXst4dSJV2rT0QJvdlvyuBMHIADa5FVvryRbjKMb3AZUFYGHk5d-deQQl4mfPMVqvfVyUYELmuqhkg4ea7JGyHf8azBKK2q39VLA_8UHD6A0m0aCI9UnjzAUT5UolAo=w1920-h1080",
		answer : "Jason Segel"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/0gpWViDpCoCic6VJn4Pe4z1F-rIxQWe6lrohONwyncrvE2IJMrntM2_jWm29O9icjt1msbFKfywchubZZBiXt0a2VHMAja24-2dIP7VqmY32rgzHF6VsbSyqD7Pf0Zw9q93YOLdTtMs=w1920-h1080",
		answer : "Chelsea Clinton"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/PqlnRzZypKJ-pnXR0dMgHqqH2qyJQhxb2zph3i72nGdyDYmWx4qK4xjxysIQR3FejOIhKgWb9yQL-OunP5GNma_U2ZM0PHFuso4qeWod2DBqld6iifWkC4JNMbUmTQC1anRI8SVQkg0=w1920-h1080",
		answer : "Channing Tatum"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/gWK6qxtf7C-b69NOXbunyLD84eJoKRRT8mUIBenNkZC_XTXGhDh_FS0-5NHX4TbFOqJ1mJ_tcgCbPIm69pu7TTHr_00NAjoNDcpm6N4q1SNvUi_PaDtrbjwJNrO-Utb-P5mZthwfi0I=w1920-h1080",
		answer : "Steven Gerrard"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/lQeGz_9CsFxS60NIV8C_ujXnla5OMoVL1B1M6i5iGQGnkSzGIzdedjeKc-D0mV06sd7S_9kO_umRh2QdWOFyEP5OCGezWoQE-y-MHLHDzUZr606oXKzfVbkLzzZikT12YdfR9UtFPNo=w1920-h1080",
		answer : "Venus Williams"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/cJKWfrqymFgsBJ4nEf7OkPRwA71zHxp5GCLiGQvZ1I9LThsySmx4YCT6gaoAvkNbRW6jOG2nY9o5NLb5zxpfwFGLYfRL5Yl36xzfMHkg5II0xtRQ5EWD2FWEIZo2p5sHV-NHW3tztUc=w1920-h1080",
		answer : "Jacinda Ardern (Prime Minister of New Zealand)"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/UUiohJsDefeo9Wl0Tt-e4PjjTEDULDOXXOAD16lmESFkXuwVfETvGrr-49G51mn86H8wxzaUDWqFNH5PPemYHRzJuy8GZFn7M6lrMl1kpOAOYyxQm1GDb20z9v79DhnBj7eGsTKdL4M=w1920-h1080",
		answer : "Kim Kardashian"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/qGMveZ5sPJ-xZDvk3S2y6uGH5vKX3FMyw-Z7Mtvh8nAeeSMFJrYzhxoqWiFh-vmEJUbmRLR3NWb0MfyoydsnENSTiyu3g_bZw9fjA18to_UCMRyV4Efl2l49PdUp61mpK01ZwNc15bk=w1920-h1080",
		answer : "Luke Hemsworth"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/-h3XlF6BSQgvCFtj8cVM12pPbTKtDHQel0eNT2eAwArP501Rgi_EYDAm5Ql8cT00Em1h2MVn9YI_Vv-pqUykI4U8Z2ImVxhpPBSF47VFvuUr7ZAPSjpYNgeiuY7vFwdoY5FI_tRtk90=w1920-h1080",
		answer : "Ryan Gosling"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/ggjuoDeyoLqqxlWrUa5QpNfKN0TLPAAKh3sAUjwB4_FAl2ZtGYGz6ESjAS8FWIKPeF9nsttxCU-mqLVdViDkIyOGW6UmWHe8y-0oP1c_mEjgkv_H1br-927dailTKnMBZRf4BKd_FG0=w1920-h1080",
		answer : "Jake Gyllenhaal"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going? (Extra point - what was he buried without)?",
		image : "https://lh3.googleusercontent.com/U_8v31ZsdQaFKgO9oVEoxKkn2pQWoL5jedAo5IKYlURR_61qTzDckRPJGEi4wBDlaNIuRXfzXaddGpRS5Ok7X9VTB1mpcm3orwhprsDsd0aDbna6Lb7V1eMH3_p_fKejG02oMmyAYY0=w1920-h1080",
		answer : "Alfred Hitchcock - his bellybutton"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/f5TABsrOARIvbPz6Vmm7wLRE8sSIPQLEDPcIQLowSZBd6M51ZHe3rLCNS3b6Q0-OkE3S6nk1uEjmpOTSgDlW1qpj79mkMVWFghV80rA-l3LJN-sRFjLqmnaFtMdIQvmXYn_n_yqRfC0=w1920-h1080",
		answer : "Peter Sellers"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/KVtBeJpT-4ZLFMZFIqJ7T4o8u_2TfeGffzmT7mFJhhcwvWY4Ol9QTCNmft-Xqd-NF8mJ4hQaE3AR1k8SOaIxOzt7xeT1Xe9A-4FDA3F-IAEsg2T9CINr6qzyzOgKTIVNUz0ckx0G4XQ=w1920-h1080",
		answer : "Steve McQueen"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/zXOvI4_FsQ2kbzKIlX7KI1Ec3i5IXs81MesktVr93MoC8eTTNZV0nzKZWi6Tvogn_OC0aQxYu0v21eavcI4CaydseEC0Zs4waNZUSheXNuvXrB_W9iBNTYaqmWW7eZLWgvlOJDrk3_8=w1920-h1080",
		answer : "Mae West"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/OJ8ebI4-sOVYycCD054PF7bNLeiVYBPprbid9qdT2JO5iDWsYQlYa5p3AFkIXKGHcgSnRxxd4vL_o1OjW7rHDbFnJHYrnMRNimanvhgJEwOHes4QonU7g84GWilzPqIwtaXrWJGi6jk=w1920-h1080",
		answer : "Colonel Sanders"
	}); 
quests[++questIndexBuilder] = {//quests[92] = {
		name : "1980 Movies",
		hoverover : "What did you watch",
		tags : "saturday,14/11/2020,1980,movies",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/KX55CoCiuyioq7Isfz8iMemisPSBSBINkn-fCISSTti4h3Yd68_h3Q-_kk34M7fZt_4cTHSubNi3NwQD1LBY7b5BnZbkuTemaZBuJkOIFC3FU4KWagcFQTJKPrIlAmwJ7GYChEDUXHQ=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/S21TOYIIoGjuejC5LaAG-T51C__xS2KsU5g1L2pK-0tuAN2Rn8ozeMNm6rx6l_WOWcfCdMt7a8kkF7VAoXpWAH5W6iIhW76y31HqQcjvO5sHzRKCWv9SYq56gA4x1DMuZJ1uLpBLal8=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",//Elephant
		image : "https://lh3.googleusercontent.com/ISOX0_CR8DKVwBPR8iXzeQkEdclL4jt5rcaj6pTJeDSQAj5JqSkqS3WsabxH8RkWAsA0Nen_aGMRLSG04VoeBwLL9KUGMBhN2TCyPVE_rhVP4pzUC053UZKM3AMajk5QcuKJe5sn368=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/jh24961vzymQTt1_XimVQWbop_6tSNAEprWl9QHqk-8zQf8ZU1sg7jWCDv03AyhtlhrI4MSA1xRTZbKzI74YwCb5QKvPHHhmW9Y2hWr9FSDbKXfWGKV7k4q73mCyEVKRXukxRzeLtuA=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie", //Fame
		image : "https://lh3.googleusercontent.com/d96l9k5iBelg2maJXGEMA3Yf-MEo7snokMaKpRpqVRI9qiK2yh0N__VdV8nEzJqJSu5WkUXaT5mtx1XFOf-gbp8sGG6HpXylY-sb-zuYU7uipbzhAw_UHqB9wzM1_tCa_IX40-uIBMA=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/O1i5s5NvUQuE7dlVuics2rIhS1-3Af6exlRiDi3BqrIpgGqRSUkCOgpMOmQaGAHjxHkZpu0yFuaZxQdY4GMc-_-yVQqCqs-O4QOwkGCgLWhJTHfl3kp8Bf8UXkMPvgOInMtCKTAYCfo=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie", //Blue
		image : "https://lh3.googleusercontent.com/m1Eqt947RiOrY_P_h7jEzfSMJ7lTnOaNhFaYZ7LXLdEsfr43jo3zA789Aies-_pAJkSniyvlAdeiXTshgFmBZyarmcAzZzkl06tNbBczbmJTjH7s1vTHc5VcUC2MYO7r61h-sWWTqq8=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/cMFb61gV5XGkXXjEKZTy44lIwict9xynNJ_81riv8sVpUkRH3y5IuwC1cVgeYY-ji6Hmrl3iPfKMHg4ep8OmgA2qj8Yih5skcwxyvWH76XUTsp-7i3im00W52NziDK1SOmM2bmkfxCM=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/D_TGtk7Z0ggxhbppfUPrDktElH1_f4m2VBagXR3U6SFRY28wOXdAsZPrJS8O_ztdnGj9iLVfZ9TEJ0xPwlaJjOwFFAd6HItMqDgRz4qqnfImcgs-qkaVJT1ROglyJZ-TekEJ62AFDeA=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/JWy_2cXvqUN1hTZ_7nyKPJSeB0tE4KBG1DaOkGNASz6EiXPS3DePTrKCojx7VgDxDVNZM0iJ3rxNniKXHj4iO-dyTkFTfEY4ELEoxuVS2IbXughDJjy1MDQIe9Jhz7PRdIJ5ectqeCo=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/k2WnYFiOalHl1e22uxRgshtVQvZgE-9Yzx2vaaJxfA2y8PnuF0LDP-zVVzT01eAbxkGoxllgdHXPgCSwVzqxudVP9t8RAybWlzQTNDb5TaGNYxVogIQbNSilICf4A9AUhsKpp2PDtuk=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/xAllWQjWMfU04aHjAC5a5eFK0yGMExxOHNIabIKhALKz5nmYdB8SncX3U2jArTT4ONetwPozWleq3QVduSOK-l2ZirJgbNuNX_PiQPIrzxcJCwxKVfBHbjYHuQvOgYgjY6UK8DRrzIU=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/UDmen2rFEsi2H-UqdheLFSDDIhoQewEaH1kqYBYdEoRT9txYfp7K6oR3PeI6qvA0lJqeW8O57QHnhbvi_dPunJsAVvpXD5V31pKYp5Kuaa6BNBX3BHBsFH4tUbejUDLStKVPze-J6ZI=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/PwMg5pBNOcdh3Jb3W9wTBYjIbLzX1TszABi0rc4JrEgrrr6TciRwdqI5Mgw4TQ1j_06LO_oa7osb430-9vci_vYYkSkG_JzNdTzBdJvv4I-ws6ZzX6O3T1dY7cVWQiCMt0VWTSWyqak=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/o76-WF3DXtJMlaF70TZcwfcAFicdO7KPEpGGkCcZmcEw-evhHoBBxQPFS9nB70UiwfXmNREhPBjwGvYCFmF-k7sE6NzSA2yKxVcSufpSA3uvQZzYsXbp65bZyQJuORLwSHAstgwOKbM=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/xoX2tufH4iY64PGfALjN7gWcn7r198VEbYzUBQwPEYfkEbACQdQnhxKqJPsMxV1MJGvUR6Y8dsVCeWrnL9_0jRwc0F7jbXr_0uBZtesnF9lkgJaNlJGVj-IqliHLOMRPCjVSW9Wm_Ng=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/x2thibzjD6OSGZRCR0-TOTYk2E39TbfyPAaYwZF25XaKjYpketx5eaH0tI937yFr5Y9gLgZ2ubElIqbkfBylKFySomhCDEql5u5RGYtmNLTNG0Swt48N2OMZCFEdXtlu8UVoEBsCzQg=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/aUzA_-DWMdDkQ3s3PlxVXGaFWEEqE9zEuniOIRQngUQQIuZQl8u3HJ3SFZcF7ETjMI4oh2dZnNw2-r7NhDSR0PFGcvyr9w_iVkTKU3dm97ODSr9fjc61iCw8F2aVPFqDmywSwaJCe6E=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What movie",
		image : "https://lh3.googleusercontent.com/enKgiVPixyskIMi3oavP6_l8jDj42cdx2HgR0dR0W0pspEC4I5qZzXa6i9MUOxYVCBC_1KHSkOf5GE_ReODWTw3PKC1WMvhoDVEak6y-is5ocQFBfbAptx2uczsGfrIPXnQ862ssSNY=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/USz7M0xLpeblKdejoisrwuorvibDgql7cm1q_5yLvgUKDQo594k27p-JPezcwX6XTEDNCCpI3DexkPBMTyr9ehcRDillLynp6jbG7Kju2OIQVvckEMhXo2po_eXTJpAPPGrJ83AZhpg=w1920-h1080"
	}); 

quests[++questIndexBuilder] = {//quests[93] = {
		name : "1980 #1s",
		hoverover : "What did you listen to",
		tags : "saturday,music,14/11/2020,1980",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Name the song & artist',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/6INqTt92gFtUcCNw3oqQPb" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answer"
	});

quests[++questIndexBuilder] = {//quests[78] = {
		name : "1984",
		hoverover : "What happened this year",
		tags : "saturday,31/10/2020,year,1984",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "which POTUS announced in his State of the Union speech development of a permanently manned space station - which evolved into the International Space Station?",
		answer : "Ronald Reagan"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what were Astronauts Bruce McCandless II and Robert L. Stewart the first to make?",
		answer : "The first untethered space walk - from the Space Shuttle Challenger"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what year-long UK strike began?",
		answer : "The Miners strike"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the fatal shooting of WPC Yvonne Fletcher begins what?",
		answer : "Police siege of the Libyan Embassy in London"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what does Diggi-Loo Diggi-Ley win?",
		answer : "The Herreys' song Diggi-Loo Diggi-Ley wins the Eurovision Song Contest for Sweden in Luxembourg. <iframe width='560' height='315' src='https://www.youtube.com/embed/dGNUco3mmk0' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Bruce Springsteen released his 7th album Born in the U.S.A.. The CD of the album is the first CD to be what?",
		answer : "Manufactured in the USA"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "when Beverly Burns became the first female Boeing 747 captain in the world and Vanessa L. Williams became the first Miss America to resign when she surrenders her crown, after nude photos of her appear in Penthouse magazine - what does Liechtenstein become the last country in Europe to do?",
		answer : "Grant women the right to vote"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who said (during a voice check for a radio broadcast) 'My fellow Americans, I'm pleased to tell you today that I've signed legislation that will outlaw Russia forever. We begin bombing in five minutes'?",
		answer : "POTUS Ronald Reagan  <iframe width='560' height='315' src='https://www.youtube.com/embed/bBow1ToJBFE' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The United Kingdom and the People's Republic of China sign the initial agreement to return what to China in 1997?",
		answer : "Hong Kong"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who is forgiven by Vatican for work on the Earth orbit 368 years after being condemned?",
		answer : "Galileo"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "on the 25th, who records the charity single Do They Know It's Christmas, to be released on December 3rd?",
		answer : "Band Aid"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "what kills more than 8,000 people outright and injures over half a million (with more later dying from their injuries the death toll reaches 23,000+) in the worst industrial disaster in history?",
		answer : "Bhopal disaster: A methyl isocyanate leak from a Union Carbide pesticide plant in Bhopal, Madhya Pradesh, India"
	});

quests[++questIndexBuilder] = {//quests[79] = {
		name : "1984 Ins and Outs",
		hoverover : "Who was born and who died",
		tags : "saturday,31/10/2020,1984",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/fJyJNkFnArrquCscV5taYyX0rxadGqJz4kjhpK1HWlpkDrAzVJygzwM2_b4Ymaoo5xRkq7bRKRjwNLFfdvtX9hMXkdbw2Zbh80XvoIH9a6sa4aYeDrjxoHq-EhClvhuTYVNWAAoiKXk=w1920-h1080",
		answer : "Eric Trump"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/ISf_kDhR1x5u7ykra_5NabASbpQxnW47tvqMNMxZQ_y4UOQ2K-ITJ8kP8Hgi1_cCw0yU0xc81DwPd47M8HiNLbk4DVkbjHrULFoPdszVqX-yLIBEQrwKWhTqpyjjOQwK_kKiySUBCVI=w1920-h1080",
		answer : "Kim Jong Un"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/n9EPzopfJx6klVqMLBU8I_ImjBxsbvXYYdRS9EEAi-1a_UtnMCsTxXYfE-ri9Xx68qpDlwlW0ElJUO65-xNJrTRlS-ewRVjMRi4g1ISAih8JJy2IoPxHMI2bRsuhe-ZIcbXLuZJ2tko=w1920-h1080",
		answer : "Trevor Noah"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/IQWI2EQY0YofS483Wk9HOElYuo2IkNuopx--NGu5yWfo8YB9sRCqsouzlHxP6j1roskCkADZHO2gBBsZ8NlK2EFRLIJvEqi1Ui9DZWbDHpfBr2cRrk2FD-JMZMG0TA0lxpjMegGYQ4g=w1920-h1080",
		answer : "Mark Zuckerberg"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/_DcV8UVojQbm5fRIHHw14RPBgf0zNQL2jMD1sWei-JzWGePmX2OqGwcwfarvKniQvDPNm-F2YnSaRDN8QPS_SHVRgwCZ_uqtto7Gm6OhFiXyrwNgpHUL3uEkvm26Q8m-Wc0i8BiKWWw=w1920-h1080",
		answer : "Khloe Kardashian"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/YaEzFUu3gtFLVL6V9G9omyDwuaVdRRVyLrxwzn0-9lU-FSMvE_Ke-ULnANo40v380E_cWRdxPs0JwaHxxsVUCXQo3NepajmgBEK7RlALq2QeuCbfqnzBVUWVh4MC1Vw3MeAOuMoV7so=w1920-h1080",
		answer : "Prince Harry"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/z5NBM9e9f5WLVdCHb337mMG68v7gpOZsmr5P2KgPj2-jvG6kXimijP-d_eoRslYRw7vkEUwnF0EAcrUeS52DxSFFR1H4tAMW6CbTyr5ON8NVTF1tForR87yqXnwSy3inNk0n7BSSmoQ=w1920-h1080",
		answer : "Kelly Osbourne"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/ez9nQBUpyoSk2rN26EmL8NLPTnj5NG0YcivyGzdruKWljB74_F7XuNth6VNuWzqKZTWGLMFFYvQzba-8l4UW9xaCY4vVrBpKxYDVro5L5ikJrAYyee7EEAZ-hkeb4Lm2Q5TNaLkN3sc=w1920-h1080",
		answer : "Scarlet Johansson"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/ew4DSHxBJZVPjjCihyq9DrVR7XBlKaLzwme2pVLWsTLt3U2Pv9-Huy9hP9EcKe6UPt7XHzQ0_6yqi317VbIZaZ4Fl3eZk7siZx3UrGQeVkWzVt8Z3yiupdyi5oVrhFtjR4SKuQat32U=w1920-h1080",
		answer : "Johny Weissmuller"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/aU3Uqdr2H76ZJC9kYyh8XtMxRayNa2ko8b2YnHszfir7uN0bE-X0-lA0uvxRHAOIwHDNfGGX_Q6_H7hFILGvH8KSbKAP0NWKgcKc18HgEkPnC0gev6oQz_kt1e-bC3zp0NzibCCxPE8=w1920-h1080",
		answer : "Marvin Gaye"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/GCnNxM76E3r2k4ZbVPMIDQeeewNDBhRH0s6aHg4bQqBylDn4Z2bNfuXr0kmdA-9MoHjZs6ztPnucoOMGoqs8hM7Rc2BZvYUAIXJbqHIhm4Mtrdz1_dXvN7OF_b4nM44HLBrNP8DzdvY=w1920-h1080",
		answer : "Richard Burton"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/OOIQFlE8JLnIeFaqImozuuNYGfzUa0iXBSivlX6B7H8xkJteLaBAGqKqXRzrADpZlQCWTgRLC12RdfSAqNbv5DcAIiFuNy87l47L1B6LJxWte8tgQ2zzaz5ukPVr1yVA5tIO8-W-hdQ=w1920-h1080",
		answer : "Diana Doors"
	}); 
quests[++questIndexBuilder] = {//quests[80] = {
		name : "1984 #1s",
		hoverover : "What was number 1 over the year",
		tags : "saturday,music,31/10/2020,1984",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Name the song & artist',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/2lPZ2VRu358yvn6n6p7rza" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answer"
	});
quests[++questIndexBuilder] = {//quests[96] = {
		name : "1995 Ins and Outs",
		hoverover : "Ins and Out",
		tags : "saturday,20/11/2020,1995",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/viY9xlbJ9woLOcqhtm6WMLkhELIgwyex0EtWTQJ8q_m0NDxFbrgWCDFkoXqTk0RzQY4UOdoBzAEDvYd7v1yggd04dIg-sOL_43oqoN126HUvUfCi2Mq0FpPIaHUaJGxx_NmjLgv01_4=w1920-h1080",
		answer : "Post Malone"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/amCc7HzPgOjedhuun76phy4zzT6Sy40gDZ2Auk5ZoaAVJWtmdb0bnyHcVkQgwSGKBRG7xwy5OelrI9rzRDZ7mHZdBVQxjlgQYJt2zxccrCgY3aI0KDtlZk6dG-kxarbxKTdw6HTmP0Q=w1920-h1080",
		answer : "Dua Lipa"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/l2yA-31GpTnwFy9GZlOSsa4vtVUO4ajTdptM2KVBwUCuV8djeXi9NXmSFliqsBUcHoyj6QgHEGBLNJldj4Axn7YcZLtQUQngkVBO1kFrNcX_duBdyIQTmBDiZdVFu0VQA-VaBi5f7-E=w1920-h1080",
		answer : "Kendall Jenner"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/74qaA-inCVQTJMP-L1dIsz93Ztg4D5dNV3qEQl2zkcQDnXuRpUAv8LBbSRIHEc2DdXRgzX2CfPaBDwXIsM9GbOjPnNZnQ085C6Ki-_4HjFksBRViL0hhxPA5l2zmz5AMi0F4YIE0NWw=w1920-h1080",
		answer : "Rose Kennedy"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/j6lIKlea6jZ_IpdV5tWld_ss6IPBwdybuGkICY9VQ9Hb0WXV2StdkZ0SqnbDcKSu2yBwUp62vnwDhrp3mBx_XEEbXxwwoKeoa7saw2fklBpoew_RPaydGU4E-jdWjoZ8G01JsHsFINM=w1920-h1080",
		answer : "Donald Pleasance"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/2z4DxZHpnYEnYLnPaDERG0hRMAcEWxrbiV6ayre7wa285y-uJH-9IJeUjmfMMBDQT-IMeRchZzgfd2-sJ37ydCAVP3Kn4gB3cvfDf4rTlT66-x3UDU14OBa5nTMj89Eo6CGnAzkoN5A=w1920-h1080",
		answer : "Ginger Rogers"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/65IgNziuErZxyLEMGbWraYpjGHxBbVCHdWt5qoYw5qKp1hAOjgQhp3ieRA4gOiRw79sZCa640FxG_xWP9Fxx_vBFdkkg9Op4nyGH0OhCC326Uqlz5gala92ukh8QRiXt9bG0V3QZ61A=w1920-h1080",
		answer : "Elizabeth Montgomery (Samantha Stevens)"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/cseDUmOSUADI_VCHFMCk_Pd_pwe3lpL9bTVckwHQQSPfbNiCwm2vD1XxZBNDmwq1Eh2gs2ok3QtB2QUtXwz8AgTLYR85Kb2hlbCoHkkPXhxrS-iEGsYKuAIPmhBK-F3ESeYT2NYxgY0=w1920-h1080",
		answer : "Harold Wilson"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/pU-wlnAHswgfCW9bc3E2Vw78I_9faUg7S_VDqeema94EbfqHVoJSsGtz7dgaN43Y4a1xEoWJtqeTCl02GBFRIsUc1YJYfpAZhGozGsZSUYws_cwNVr5KgUjqRZ9toNFVJI3JGlwC148=w1920-h1080",
		answer : "Lana Turner"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/019oP0P1mLmeM6Z6VgQssBy1tLqZm8_pfYL8s_QtRyO4b-rGyo4RblRo9i9_UAHg_mUv-XMejl4OeDuvNkDbd1A6LWlpw89GvME7U6Kag12bt0DUU8xjr54bnubLa_6a0qmcYY-olr4=w1920-h1080",
		answer : "Eva Gabor"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/Y0Qd51yKvCsl5ZdBIUueI3vh4teB6UVDp51EF4h7o_XZQ7SPOzxgs4QUyLPyJgz46vUG3NNVJAM4A2yFwn9F3zSYPoheOefVDO8lbHHGpnPIfOlcUTCVxtkd_q9PqX0_Wc_eTgGvptY=w1920-h1080",
		answer : "Alec Douglas Home"
	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/mkVZru7RhLqihb3JcxMzkLzOZeQmXOKIsbFQLPjNafn4wSaanPf4LFaAQon46TtDkOeEEayu00Tygu5KvhrAyJGpa0Pf898StgsOzUxE3UdbBl9Y8aFYzMGaHqXPK1FU_GxzorM88FM=w1920-h1080",
		answer : "Dean Martin"
	}); 
quests[++questIndexBuilder] = {//quests[104] = {
		name : "2018",
		hoverover : "How much do you know about 2018?",
		tags : "28/11/2020,saturday,2018,year",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "the Paris headquarters of satirical newspaper Charlie Hebdo made the news - why?",
		answer : "Two gunmen belonging to Al-Qaeda's Yemen branch kill 12 people and injure 11 more there."
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "leaders from which 4 countries reach an agreement on the conflict in eastern Ukraine that includes a ceasefire and withdrawal of heavy weapons? <BR/><BR/> 1/2 point for 2, 1 point for 3 or more?",
		answer : "Russia, Ukraine, Germany and France"
	});

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "an Airbus A320-211 operated by Germanwings crashes in the French Alps, killing all 150 on board - what is unusual about the crash?",
		answer : "It was deliberately crashed by the pilot"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The World Health Organization (WHO) makes what announcement about rubella in the Americas?",
		answer : "It's eradication"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The Republic of Ireland votes in a referendum on the Thirty-fourth Amendment of the Constitution of Ireland to permit what?",
		answer : "Same sex marriage"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Cuba becomes the first country in the world to eradicate mother-to-child transmission of what 2 diseases? <BR/><BR/> 1/2 point each",
		answer : "HIV and syphilis"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The International Olympic Committee awards where the right to host the 2022 Winter Olympics?",
		answer : "Beijing"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "debris found on Reunion Island is confirmed to be that of what, missing since March 2014?",
		answer : "Malaysia Airlines Flight 370.  1/2 point for 'A plane'"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Queen Elizabeth II, having been on the throne for 63 years, 217 days, became the longest-reigning British monarch in history and the longest-serving head of state of any nation in modern history.  Who previously held both of these records?",
		answer : "Queen Victoria who had reigned for 63 years, 216 days upon her death on January 22, 1901"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "there was a lot of bad shit going down.  So on September 28th instead, NASA announces that what has been found on Mars?",
		answer : "Liquid water"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "who becomes Prime Minister of Canada?",
		answer : "Justin Trudeau"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "SpaceX lands an unmanned Falcon 9 rocket, the first reusable rocket to successfully enter orbital space and return.  Who is the high-profile owner of SpaceX?",
		answer : "Elon Musk"
	});

quests[++questIndexBuilder] = {//quests[105] = {
		name : "2018 Outs",
		hoverover : "How much do you know about who died in 2018?",
		tags : "28/11/2020,saturday,2018",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/8eJq3w_L6u-lLc8pwIaM2IFON7q36FskpBNVl3-oa1VKGotQ1k_tNiBF85mz1II4gJUlLTCvUfkwgP5bp2DYqfrCCufeusHLuG4gaWb5hyVy1iOLy5e9ex3hyMFo_rxaPqy_KfreTwk=w1920-h1080"   ,
		answer : "Geoffrey Howe"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/_gKfypA4yuww5CGRwiC2kH9_7b9XXIHViLDTxBWeNOhByF7U2DxfKaUd8FbXHhxR5MHiIfwAxx3iyZIuwkP-5OpmB-1NII6UAVSS1Tg8iT3jc_yY00oDithtUKV3cdeGgPn6MNbylFA=w1920-h1080"   ,
		answer : "Christopher Lee"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/cAZuUI0lKEW00rgRbqVCdPnw5C3Gl3e11Ls64NJ8SsZ5OlJo4vt32TbZZwVaxW6l5dWQC5xvU-7sEohmLYkNd37Ij3V7R_loEfEYPTlH3tT0XLwCOlwBjZ7RIb1FtqpijgqyGWWCtpQ=w1920-h1080"   ,
		answer : "Omar Sharif"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/fXwo-XtVEHaJkgyviZXL_2d3i4irGeMOrZupsuvnRBKnbHlM_G9XNrrZJ33rJUJLc4m6Mb2Ihsr-EggM4IJ4-Wh-EXKaX9nijJ0H3QAnNHsT0vgqTjTI4JYT3ZHo1YEhfzxN5fTVNWc=w1920-h1080"   ,
		answer : "Dennis Healey"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/igQ43LrQLaFb6dgwPr2lIk5wrYg2vkO3V6z8jkv0_umKyzS0S-x2IX1oOW_YG7fufu80U7eQje2NDsmAdSd-u9GUKt7ak8t1cxLG_jLy8mjh0aWsexchXHvtB7fnoMzjseoYwwiecRY=w1920-h1080"   ,
		answer : "Jonah Lomu"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/j6f6tZ_fQR5EBEe2zVU6dR0WKVxURfkoJC9tfwkR4na4zlLNKsa1c-feco405mGXKBhXSNGzPrVrg5AN1sh8RhOB7f2DgnD4RJsYI74DMuGNIxOYSoG7eTiCLjZN9PZBgwCyCMn3bdI=w1920-h1080"   ,
		answer : "Leon Brittan"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/3ogl5bszGcx_-1-d0y-r0RzTZs2RHDFJ7okfXuYQyBoHBxCD4lGNl_KIZhKcMs1DdMhmvyoyGcO00cHolHuWCQ8PCQ2JKJwsv0NjoOscsdHWj2sOP7BgWpnnhLflui8tj60f65gEaV0=w1920-h1080"   ,
		answer : "Demis Roussos"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/7xJV-IOB1pKFNksPr4YbTtL8qdr7f9uCb4y7HQvNYRnb2vHMc0yAsF5IjLW97Z3JZNG5fSxKMOGVmUKoZ5tVvFwqsAIfreEZ4QtwUl8A4FSa_7kDCNXmq86nw629qxQEzgBwz9K0zvI=w1920-h1080"   ,
		answer : "Geraldine McEwan"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/wIE488aW-cPhvBcK_AdE6NCN-HtsRBwDYtk-CiL6wbXYH7aOI-4Tm01dhMLzmkMhWvHpqtcpJ6kOvqT3o9Wi8nkcMHT4DyeBagUgBQGojIeKK08ModAxuAWUfP8W2K7V41sqQYsvj_I=w1920-h1080"   ,
		answer : "Leonard Nimoy"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/olmVlREsB-nfKegm6w4JQZPOgzCFK93DwdZ3CwB86Oy79sWpC5ioZsP--rx9qNEClixNRYp3h06jTB97mrvctuHVDMbFdTG3iSxEKl262jhw3XeyjLi2nmVo0VIAcUhzyTqWiHLiSeI=w1920-h1080"   ,
		answer : "Sir Terry Pratchett"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/FJV0f-YW9eJ0aibGnLW2i8t3Zc1LgVLED09-5nbRQZorn6L2n0YURkwBZwRa6Orwcpkov5yuC8mDa4xX36S2lGlJyCDkGUcuxbmhhMCkHdf4sKy91FOfoSXZnZW816lsX0p4ZFLFV4U=w1920-h1080"   ,
		answer : "Ron Moody"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/sB5SV-2o-DYrsBHuvFKTOn5NkIbWR83Jdl0Eqk-NeBeY2G0tNGMA0EIYYooLiXeDNVRGkYFP0olBL2mtX1Ww-pl89XG71CFdlUqe4v-bwPwCDDyvTH3CqUGUpGWvI9_jQ-7Rz_DKFWc=w1920-h1080"   ,
		answer : "Cilla Black"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going? - hint - he has the best name?",
		image : "https://lh3.googleusercontent.com/Nuyy6LWChD3DjMWupFi50wSvmewxOICoh9_NKK4v53ChIaFrNwhWyD0iDMJNp0B3tCLECAFi6suKmnF6_5DPLJ31PVeLfSkpjnsD2XOci_B1iMBk2IzAWB9n64qbBQMogsP39inP6bk=w1920-h1080"   ,
		answer : "Ernst Fuchs"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/jRNSaFqyNyvtHcVWyxUD5_nLyiNPu1HBRV9Yu74Alm5f0A7pt-SLVDjgutkPVga1W3C4DUVUDZXoPjqrhJGD1k3MfGkL2pmfzMjvO6F7qXUq5SQDx074mX-vAA6HbAno5IcUv8agOIY=w1920-h1080"   ,
		answer : "Saeed Jaffrey"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/TG_UBh_b8zbZRJ_hWwxhq5UsG2_fN_Vk_K5b7eTfrl3cekCG7caPWbttQSmdPZMeHiomq9H9dYebUfSQBBfCQKse2WS0jfx230KAZ9utBJ4ZLsBMxvmqsfcE9xZZxpqn_nJgeIbyyJs=w1920-h1080"   ,
		answer : "Jimmy Hill"	}); 
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,		question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/tw8PRtl3EEYqhLDZ2A9erRdHHM_pxhwdbn3-DK9Mr7M453hNrpZSfXUyAPfBKun3qL2O_X-D1iXP-JNmuoRLTncW5_zkYnVYk8BvVHG6f25Ic_9NkSBxxyr9aR46dG2xMKUvuO7EpyA=w1920-h1080"   ,
		answer : "Lemmy (Ian Kilmister)"	}); 

quests[++questIndexBuilder] = {//quests[106] = {
		name : "2018 TV",
		hoverover : "How much do you know about TV in 2018?",
		tags : "28/11/2020,saturday,2018",
		questInfo: new Array()
	};
 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // scandal
		image : "https://lh3.googleusercontent.com/BB0bpoQir3MXnkCghQ7XokxXVBExKWV6mC4BSZRYM90VBc4Izk9vW6x1CHYuqlinJ4F0wrfqB2yGGGH7Efdq1loJUzzvX6BG3JW7f3ER3DxNuw9LezsyPITHDXaAYW_Q780dGTYfaMA=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/aNZO4gyaIY3GU9jk2jy6aF7okN2V3Xl5byUaLy-ww23SflIkGrd-eRswZbLqS0mPsD7OKn5DXTGTO0FZiAUUYD_fQTl4nyT5WcFQEd6rtlFKpevFv9W5M0LMzPj6ivbEUHGUmh_7Xn4=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Eve
		image : "https://lh3.googleusercontent.com/lHsux4QtWRr-oaA6u_eYGRd2hA1u2zZ-cZ1b8Y0VorPvfyCMIl4QAhebBSCQkncbYZEgFrWUWdNqPWXMRCZHExFNPJJCEy_OC6Zon20gDDp4_iyM4R8hhpIMDJMbSuBUyDk048J2CA0=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/JVKx56FfFdeMmyUrsFOzIaBSrdf8_97coyNz7Ollk2K7-o3t1f_xrYTaEKxay010HowczuY2TkqLb0NlqapLBfaJRPxjbN-LtTZnJ5BiZcTb4BQw4585YVFcloGJxONZdgAar57hWlI=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Peaky
		image : "https://lh3.googleusercontent.com/D0uLjI3EG-R5nBEn3QkZA9NFXbajBV2_Z56eC0EKY17D9cMrfLQGNIxL1dzXikeqDx8qX-gaz9X7QCgYLBm5q7E_elWkDvmJJB06OGOLGz1_ixJTLL-JOQOh73nPNDoKhVKfKloV7nU=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/7ZrDTZYSWTr6RvmdYBObCLmoLIADhYtaMUWJm1BuQlbMvCP9_gmeBjM4LaCQP1KoYXxyqzyBaolOclYTuVsmDZ4UTIU-P29E3V1dTIdxXrrp-2wwRZMl7v2-CYsmAKedAJLpW7-fqB0=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Felabag
		image : "https://lh3.googleusercontent.com/IxDKs-0NPbzXCgDpxSyE1Lv4Pn-t4ySMrGuksSgsMRJsTn0DU8tQRU0uwPppt249FYdRFzvv8004WB1aUnPUIrRTEeP8UUe-ZdE17voXBlph6tVyUC9M8KHa9iTW4vkENDnusYNHTio=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/8e2Y25uXFMZKfeewjBMtmddTclahNvZO6HGFVWPzBNDhdvC2k_gWaSuQMzkTgLRumqSwvdmFFuRY8Cga2lOsPR4f4PSbZYZ4eOqPbrknOB0jbRI4RX8GxBklmthrd9v7P2VfdAE8WCU=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Sherlock
		image : "https://lh3.googleusercontent.com/GtXPwkXbT8VnJJY3XNh9goH981fIcr-yxA-hHIQtDgy7FSyz-1hznqDdqtmImE2aotXAwWcDcgnWO1s38nBc6-qyNjx4iZLMuuG43-jJcCmJT9JJhAze4jnZ09pt1dnnZVJkM1w58nk=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/nPL8ZmhNqGVEhLi5jJimIKGDfTkhmt85RmJFiB5I_FYS1hE_8HCTo30nkM6lsqjTM2ncU75FuIjLQl_IYcRT9zRq6KGN42OWaYpHXZ3hmUp8biUt-2AueE_EtGUNsJLi0hlVo_aklz8=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Harlots
		image : "https://lh3.googleusercontent.com/CS29h4GD2x642EFT68BpdesRIeZ6fX19nKVcT2W8rDDe0DD_Du2FwV85VinWscIgj_7mx7drmP8VtVdge_gEoIP8R3BDqAUoQvyL3DDrf6UAa_VJMg0hWCkHkoU9zYr8l-z3DDAYYDk=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/fHMLQX6rV6VBKqWH9KDqH705dDNz7pPqBDw81K47nbN2f0G80XxHmF0xZbZAl1Nocq4lBESwiI2V6V4LXtEWjO_tR81NgC2jE0-yGdjOiDL5D37DL2n_me1TiiYsf5N2y9Jb6Es4D1U=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Luther
		image : "https://lh3.googleusercontent.com/4bkdoP3R-zfiPRVJWTOSmN6aiq6VUwLoY5gDIlS9PzLg1S-g_G2NRNd8iP4fYY6g2HnLaKFN36tTcL9HNvbQWWrG3wOFV4dBYHFZb65UC_0bqeQshz-T46PEFfNqcVXTvTtHxqiDTp4=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/99hEHMFwnPb0kGAgE-5MWb5QHDVZ68AbrDA1yZIswCebD6ia_V6BIzAk1f1y2CXKYgsQev_0JyHE8lPU8ofJlGjNObWzeLOP4rVpip7crZUi5xxzXMCfC7xL6EZK7bhFOHhYGBVwOJA=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Halifax
		image : "https://lh3.googleusercontent.com/ojZnz0TbVj_nxd1OSokqE1-CcHwrL__sTQSiQDnwwHRNcQvFvGqmjwexfHj2UsWi16EMszozIIqcyhk4JHYIQsRKvl04VyXPVxIcK3HimyNtle6kziDMiCRtwAUBBa2YR8RcZxnJhLE=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/tssyoZbPt2tI7qbp1q_hZz5tlh3mXkZGPYGK5TYZT_KC2gb-vRS0c7A8uJTG153tiWETgWpmh-Y9zBR5RpNrZd9fo5ki3GaB8MX_vNRJvzSNhnX_pwET0VT0CjYhRKk4wgNOgzZ86m4=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Country
		image : "https://lh3.googleusercontent.com/NC_C7i59dqWjSdo3SJ3dLDmnn1E61IKmAI2GdRAPSHu4ocriu-wGTbgCN_U1xdTkcDmNxosXOiDpglvgmCy-YuSUy7WRwsmPFkGAp1oGd7lAA5zcIcJUqde8_xAdGIG4jXef8KH4Snk=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/Fs2bqpT7p3e5KyIosqvBIYjO8hJP5dAOo2kgdmpjU5x0843w4EEL2wigxXKIKIFtaDdPUjKn5ur2ry4mcb7eETItJS8cuH_5bdPKMJ5SCwtrsLbLmUTgX83czJUgH4c7SF5wwnB4sio=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Foster
		image : "https://lh3.googleusercontent.com/9uKDHEXKZyM6e01Xf7DV169rYZ4CLS2YYj3OLoWq5TPufPWdcgGnrKOeDvpIXZ9LDw7f-HQ4I5BF4-IjaEcJVSOBVE2UuRkOM8Qh6IKnj_ZWqbx0fkGP9JaoTQoT4oDPrr-RmyqR7K4=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/kCXGfU2MFXYsmMLnbxvyL_PNUDavxgillI6FJMwUcPAvkxZTqddcekvxJuAGL1rh_fJkYpFLIN2GXXLaB8yMWGsX1KH6PH66EqQq6ByOsjfs2K7iF7NiMPAnSgX5yHuGiO2Rg4h5CW4=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Watership Down
		image : "https://lh3.googleusercontent.com/B0-MpM1DTaohV2wT3S5BSc6dTAotf7aILEL2zy7UzBn6o9_zBtWejisSrBWpNSL104ux9aqgWKoNaAvX3X6xF90xoiOoooeW3NdQhrPfubW08nbTNk0bq5BJPZWbp9j4U6vtHMnvLDc=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/J5mR3hV3BfYYUGtXSuxO_JHZIhtLK25-1xo5fqdtyInxingOkRUxkxrdbDINx0iBfdyVxlZzAGQ8r3Mp9i2qPcb5o035zRqomPq1SRfe6mSMrNDUSv96ttbor-zAkGW65PoEkoE4vkg=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Blue Planet II
		image : "https://lh3.googleusercontent.com/D3uF4LtKTWClGMJcKWv8GyTip_3NSYl1NHxRT8iN5CJLedunGV78tYsGHs_D9NYgGvMooa8xo-p3GVozaSY_RLaCxc6relJ9MLtImagRs0I5kbBFhz0YZpCsE4QfgNrfed79H8r6Bvo=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/oYd1nsulSE3CvJBYNmG21ndlNWiWlwWoSquaeYODiJpEsCoIR_3jE57L9GQuRWecyj-JsB32q03zdHRGY-y4aAKnnlDKQKgPDa_ytOwzPT2N8N2gNDpqDwioOuPeHczXQz4D6fez5nE=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Who
		image : "https://lh3.googleusercontent.com/Z9YifgVoLT3f4uvvLsEpYsR1KX-ghy4LmUCGr0nIoCHPct6YqxTu7FJSisF-bExjT8ao1mY-_TxEED4A3c-7oa0Ij7p_xtdv4HmV2ewOCOhy5qlQC0Tv25bwhbTCXXuc3hli7eruKr8=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/ogn5yfVpMV-KbDsFDKz5z7ONaSA_dKZbmT7a9IhO9WdQJ1ZsYZpHPEn9qEGf7c8Cvm_xExirbVHUW-I0ZWEbcygrDOO55Nr4Xw7ll0sR7K5W6E8dBAUDR2lBcOo5wJEpqrIcR3Cvi-Y=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  //  Planet Earth II
		image : "https://lh3.googleusercontent.com/nlXeckBTwmTrURWFBhaWBWih08ANJIYdAc8o0pUUMdG11B5gs4QwZj3A5e8KftCCUv8Tp3BwNk57-CtMP2-SLT1wWivv6EO7CQbCpioZsYt_MZoFyzjtLr-By_FNELze9YhK-Hfb9AM=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/RDF5hg3ROARyOZwZuNYRiGdsifQBPLD99p49rUgE4hqPYHmK11dm3kENx9h2vhqWHY_bE79bGNsOGH-zEkA0Uxxl76fPJ8K-BxwXA2rmbk-e0X1-f2NHcC22Y3tavxs3BE1rTl31OMQ=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Kay
		image : "https://lh3.googleusercontent.com/57E75NyCSH-cexjPRylw6fmeBH7nSlOX7FKCjl1EC3f09ovC8-Qlxcy0rT5f--rrr4sj07IBzdcW37nR-Ov1_LOMgbFyZ_ABhBh36NTmmd1mWwBxO5ZOQEQm5QC8LAPxbO1jx9cWqmY=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/iLwu2tnA4dFatJzF43vDOMW_QjwQgH0RaeR_SRE4ZJtnfxzdbAit6GMt3YLGSHSUWsWSJikm-twZK-SNkTQITcOOCG3I0WwrOfTOfuPXBt5IBByGK0Up9HeShYi1iYyoNFUXPGoCAuE=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Celeb
		image : "https://lh3.googleusercontent.com/bBx97DIFyAKRCwxH868NeGBE_5DAO3ll7zr6IYllemVQTrtxP3koEymIVqHzbMYsEgLavzsrP9mbM_N1NX3ejEHHwydVhHeAaovAgkAqyZV3khdRCgRyjRveGatR-F0BUNn55UZ7zgs=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/xqSlWVATlM-khV58GofLj_47y6JYEbtfNDEdez2n_FAB2-nY46W2-rkHUUkdFnvopXS0Ezy33Fi8jHKV69rDZCxs784YA00_yRhHZ6Zv-Bmq-_GL4A60kIcWFs_Dzk70R4OYbS5wZ84=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Unforgotten
		image : "https://lh3.googleusercontent.com/berIfVGT7yMxmAHw636inPc-pfe8NYDmFNvMWx7SvYdtAVbWdfd21OQ5jpx2W2njd3yuiKbpWM_0yTRh2RAxdexczegbESp43Q43laauVdwPIqCMe4W96HzdaF34PqhIe3zQ7EeJqgg=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/WVOLhMAqkHtfj_8R9xGkoizTjUIH7VZPHQAzYMkT4mQ4JZ4fbsQUBwRm_NnMTYnmOPLhtql6ihZobEVtxppXs5Ro7pDp6RfcbJUo7YzgpcpB3-nJTIaDiqFpkdq1TVxUBMeOs8zhwRE=w1920-h1080"
	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2018 TV show is this?",  // Love
		image : "https://lh3.googleusercontent.com/2iEHJGS4--NZWVVlwUmfDqU0t20ZnQ2D5MpLnCuXZGD5A_GV8ZwOkx_JshCIL39wGSi7jcFSFBDAIWpcm6iJfNz0qb9HG-X8CwcPrP6IIfW4heD_gJt-G5dTgf6aBVLBw0lXmu-WzG0=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/Fl2VZKFGhgQ_9Ir-N3z46VbHg3GOZVSl-40KghGQbDc6BBwMks4-tl39msC772OLPIUkN5G4h6YJnjcEUFaNHQ51CaoEwHRj4opwMNSQAbkkmTiDX63huBSjq9JVDNncAA6ChFNhVUM=w1920-h1080"
	}); 

quests[++questIndexBuilder] = {//quests[124] = {
		name : "2020",
		hoverover : "How much do you remember",
		tags : "26/12/2020,saturday,2020",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which 94-year-old took under five hours to reach a million followers on Instagram?",
		answer : "David Attenborough"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which Welsh town was overrun by Kashmiri goats in March?",
		answer : "Llandudno"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which fortification was built in the 12th century by Bernard I de Balliol on the banks of the Tees?",
		answer : "Barnard Castle"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which item is inscribed with 'Peace, prosperity and friendship with all nations'?",
		answer : "The 'Brexit' 50p"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Whose bones were sold for a record $31.8m in October?",
		answer : "T rex skeleton (Stan)"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which temporary structure moved from Welford Park in Berkshire to Down Hall in Essex?",
		answer : "Great British Bake Off tent"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which number 10 challenged Number 10 on free school meals?",
		answer : "Marcus Rashford"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Eric Yuan founded which communications technology company in 2011?",
		answer : "Zoom"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Who said he'd voted in the US election for 'someone I truly trust...me'?",
		answer : "Kanye West"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Last month, Rutland ceased to be England's only county without what?",
		answer : "A McDonand's"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Where did Keir Starmer choose to deliver his keynote Labour conference speech? <BR/><BR/> a) His own kitchen. <BR/>b) Labour party HQ in Westminster.<BR/>c) A socially distanced PPE factory in the East End of London.<BR/>d) A corridor in a deserted Doncaster arts centre.",
		answer : "d) A corridor in a deserted Doncaster arts centre"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which of these did Boris Johnson fail to do in his first 365 days as prime minister?<BR/><BR/>a) Get divorced.<BR/>b) Have a baby.<BR/>c) Contract coronavirus.<BR/>d) Secure a trade agreement with the EU",
		answer : "d) Secure a trade agreement with the EU"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which of these is not something Laurence Fox did this year?<BR/><BR/>a) Announced a personal boycott of Sainsbury's.<BR/>b) Got dropped by his acting agent over the phone.<BR/>c) Acted in a film.<BR/>d) Got told to fuck off by the Pogues.",
		answer : "c) Acted in a film"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which of the following proposals did Priti Patel's Home Office not consider as a way of deterring people from seeking asylum in Britain?<BR/><BR/>a) Building a giant wave machine in the English channel.<BR/>b) Processing asylum seekers on a volcanic outcrop in the South Atlantic, a thousand miles from the nearest landmass.<BR/>c) Training swordfish to burst dinghies.<BR/>d) Housing asylum applicants on decommissioned oil rigs in the North Sea.",
		answer : "c) Training swordfish to burst dinghies"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What was the most money Amazon founder and owner Jeff Bezos made in a single day of the pandemic? <BR/><BR/>a) $100m.<BR/>b) Nothing. He has said all his profits will go towards developing Covid therapies.<BR/>c) $150m.<BR/>d) $13bn.",
		answer : "d) $13bn"	});

quests[++questIndexBuilder] = {//quests[126] = {
		name : "2020 TV",
		hoverover : "How much do you remember about TV",
		tags : "26/12/2020,saturday,2020",
		questInfo: new Array()
	};
 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2020 TV Show is this?",  // Dracula
		image : "https://lh3.googleusercontent.com/PliZOgAd2cQKJi3qtco0mm71d1lUpJWFd5AP-5GDX0j0-M2NPgfoBvOc-2SID-jEYfqntd6KdbqBE4MvJA9DAE1n4I__rV0Za0LiQX7SfGqCKYr0jCTj7CZBYHHBKAr8ZYojBORgvH4=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/E3nKFN5SeOz9KunV3N3KMbQ3G7r9AX8bGKzhPL4g2jA3OCsioZB2_MLPOeoShl5Acj2Z0JiQCedqXzgyJgRlKMingiIeW1qcoDvD6g5vjPeXiL6cxRljirLtKrQ-pNhMqURaECxegVU=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2020 TV Show is this?",  // bay
		image : "https://lh3.googleusercontent.com/0-6V_Eq8upBAA9fPGqCf7byNcPK9kqiKgWr9T32GGKtVP4MltB601gC_52sYOD9mcbP_1hh1x0i_zvh9KkAh_HKwWiTR3kUyh-szEub9dWszRC5JuA5TbwBDnaz0CAVNfn7O2jomWGQ=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/8pmh_EPe4poNdxhLcxtJbMbEQoaQ3sK9KDBBkoIXb6NKk-hY-lIQFbqSHNShhny7vJXFnyZsmXmZ67J88Ge4ByGOttadJRJ275f9QnmlyIYNtspJPuwGDe9GU-5lM7uB_tnjtmLArxc=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2020 TV Show is this?",  // liar
		image : "https://lh3.googleusercontent.com/21atZDBJvzzDhIKE335E95teOJCTXmwtPpgv75f3foidUwd4K7GOEE6CQINclfaVuNZelqYVScX_YtzuknDHKw-WDacYGsgAdM27Axv8pYjvc0Pxv1DekiQET99Q5r7is61J-8ejkdg=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/0BwzNqpjON8zeHfKtV4RMnoBGYdIpTuIIgHlM8JP9gLiGOBJVjSK9XVBvifmMldkYxNSsj5ChDWT_2xFCxOmHmV4wMojkqrBQRKAMi0OIqBdqWr5vl_aG-bc2MAgy2HudyVpJta_Ks8=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2020 TV Show is this?",  // Des
		image : "https://lh3.googleusercontent.com/myrN3ou_PlYOoBzEnOmSfhu3qr-WQ0CZd9cC-kZV2DunbfkQqzNJisciVtkdt6WGEdoGS908ABbIgMuxlONrXlQa0R5f2CdCdD2WjS0LZ8zkaZ8Dln6bRrQteJVZaxMazPC4oyOXuu0=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/VdahYhQ3-VLLUSSBVLdFiic9STN0oVWm43jtzdUaqSCaCx2OBMGcX8KLlOFMxwkH9gBXW4u4xW9X5zMmOJsHUCDnviMQbJVTFqSuuyIuhSAFT7BlknCMCabueiT_YiB7aEi34y7-qEc=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What 2020 TV Show is this?",  // Marc
		image : "https://lh3.googleusercontent.com/02_6fkgivFrOirvGNbxgnTbyc0HckJ1i_YiEH3gCL5jDpTTgdHvTVWU4eTHDMiGVJ_u1aaXJ_NCHTUCeV1Ztcaz5TZLgh_FzisxxbnZUoXKHRpdMhR8BXvm81-krSeFByssTyNp61Fs=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/3EPMqONQgB-IcKxaGcNN3h9VTk6VyyWfOCLSt24tHKmAitkStUHZ2Rc-ohCqQNVubnG-QgLoTd8TljnyCPp_3iim4-dfgnQs4WWwbq3hLm6X7CW-ia6j37QallqJZQ533k5H-eUps0A=w1920-h1080"	}); 

quests[++questIndexBuilder] = {
		name : "2020 - who said it",
		hoverover : "Quotes of the year",
		tags : "saturday,2/1/2021,2020",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'Our house is still on fire. Your inaction is fuelling the flames by the hour. And we are telling you to act as if you loved your children above all else'? <BR/><BR/>George Clooney<BR/>Melania Trump<BR/>Greta Thunberg<BR/>David Attenborough",
	answer : "Greta Thunberg at DAVOS, Switzerland"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'As of 9am today, there have been three hundred thousand and thirty-four, nine hundred and seventy-four thousand tests carried out'? <BR/><BR/>Priti Patel<BR/>Matt Hancock<BR/>Dominic Raab<BR/>Rachel Riley<BR/>",
	answer : "Priti Patel"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'I don't think I'm so different and I don't think there's one rule for me and one rule for other people'?<BR/><BR/>Boris Johnson<BR/>Julie Hopgood<BR/>Dominic Cummings<BR/>The Queen",
	answer : "Dominic Cummings, after the Barnard Castle drive"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'And it's gone! Mabel takes it... a famous win built on patience and sheer belief. For Olive, only thoughts of what might have been, but only herself to blame. She's given this one away and that will hurt most of all'?<BR/><BR/>Andrew Cotter<BR/>Clare Balding<BR/>John Motson<BR/>Popeye",
	answer : "Andrew Coter, BBC commentator who, having no sports to commentate on, turned to his dogs. <BR/> <iframe width='560' height='315' src='https://www.youtube.com/embed/f2BZNowCXws' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'We will be with our friends again; we will be with our families again; we will meet again.'?<BR/><BR/>Vera Lynn<BR/>Jennifer Aniston<BR/>The Queen<BR/>Danny Dyer",
	answer : "The Queen, in her April address"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'Let's see if the appointing is at 2020 or if it's 2024 - because God appoints the president. If I win in 2020, then it was God's appointment. If I win in 2024, then that was God's appointment'?<BR/><BR/>Joe Biden<BR/>Donald Trump<BR/>Ivanka Trump<BR/>Kanye West",
	answer : "Kanye West"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'If you look back at anything that I've said... what ends up being inflammatory, it seems, is people's interpretation of it. But if you listen to what I actually say, it's not controversial'?<BR/><BR/>Katie Hopkins<BR/>David Icke<BR/>Dominic Cummings<BR/>The Duchess of Sussex",
	answer : "The Duchess of Sussex, after she commented on the US election"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'Are we all just going to go about our day knowing that 1.5 million seven to 16-year-olds need our help and our voice?? We need a long-term framework to protect our children, not another sticking plaster'?<BR/><BR/>Boris Johnson<BR/>Marcus Rashford<BR/>Gavin Williamson<BR/>Ivanka Trump",
	answer : "Marcus Rashford"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'Who gives a fuck about Christmas stuff and decoration? But I need to do it, right?'?<BR/><BR/>Santa Claus<BR/>Melania Trump<BR/>Nigella Lawson<BR/>Julie Hopgood",
	answer : "Melania Trump - moaning to a (former) friend about her role - who taped the conversation and released the tape.<BR/><iframe width='560' height='315' src='https://www.youtube.com/embed/DTabCakEfVQ' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'We don't need Sam to win'?<BR/><BR/>Jules<BR/>Ted<BR/>Jules & Ted<BR/>Ted & Jules",
	answer : "Jules"
} );

quests[++questIndexBuilder] = {
		name : "2020 - Outs",
		hoverover : "Who did we say goodbye to in 2020",
		tags : "saturday,2/1/2021,2020",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Terry_Jones_Monty_Python_O2_Arena_%28cropped%29.jpg/120px-Terry_Jones_Monty_Python_O2_Arena_%28cropped%29.jpg",
	answer : "Terry Jones"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kobe_Bryant_2015_%28cropped%29.jpg/120px-Kobe_Bryant_2015_%28cropped%29.jpg",
	answer : "Kobe Bryant"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Kirk_douglas_photo_signed.JPG/120px-Kirk_douglas_photo_signed.JPG",
	answer : "Kirk Douglas"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/KennyRogers0042-rededit.jpg/120px-KennyRogers0042-rededit.jpg",
	answer : "Kenny Rodgers"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Bill_Withers_1976.JPG/120px-Bill_Withers_1976.JPG",
	answer : "Bill Withers"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Honor_Blackman_2000.jpg/120px-Honor_Blackman_2000.jpg",
	answer : "Honor Blackman"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Little_Richard_1957_%28crop%29.jpg/120px-Little_Richard_1957_%28crop%29.jpg",
	answer : "Little Richard"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Vera_Lynn_%281962%29.jpg/120px-Vera_Lynn_%281962%29.jpg",
	answer : "Vera Lynn"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ian_Holm.jpg/120px-Ian_Holm.jpg",
	answer : "Ian Holm"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Olivia_DeHavilland-2.JPG/120px-Olivia_DeHavilland-2.JPG",
	answer : "Olivia de Havilland"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chadwick_Boseman_by_Gage_Skidmore_July_2017_%28cropped%29.jpg/120px-Chadwick_Boseman_by_Gage_Skidmore_July_2017_%28cropped%29.jpg",
	answer : "Chadwick Boseman"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this <BR/>(Bonus point for naming which house she was head of in Game of Thrones) <BR/>(Bonus point for naming what series, filmed mainly in Suffolk, her daughter stars in)?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Diana_Rigg_1973.jpg/120px-Diana_Rigg_1973.jpg",
	answer : "Diana Rigg <BR/><BR/>House Tyrell<BR/><BR/>The Detectorists"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ruth_Bader_Ginsburg_2016_portrait.jpg/120px-Ruth_Bader_Ginsburg_2016_portrait.jpg",
	answer : "Ruth Bader Ginsberg"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Eddie_Van_Halen_%28Cropped%29.jpg/120px-Eddie_Van_Halen_%28Cropped%29.jpg",
	answer : "Eddie Van Halen"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/SeanConneryJune08.jpg/120px-SeanConneryJune08.jpg",
	answer : "Sean Connery"
}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Maradona_2010-1.jpg/120px-Maradona_2010-1.jpg",
	answer : "Diego Maradona"
}) ;



quests[++questIndexBuilder] = {
		name : "1920 Related songs",
		hoverover : "Singers",
		tags : "saturday,2/1/2021,music",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : "Name the singers/players on these tracks who you've just learnt were born in 1920 or who died in 2020, and then name the song",
	spotify : '<iframe src="https://open.spotify.com/embed/playlist/4jt62cbsGdzPAtvyrrFvko" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
	answer : "Walter Matthau, Mickey Rooney, Maureen O'Hara, Yul Brynner, Ravi Shankar, Charlie Parker, Monty Python (Terry Jones), Kenny Rogers, Bill Withers, Honor Blackman, Little Richard, Vera Lynn, Diana Rigg, Van Halen (Eddie Van Halen) "
}) ;

quests[++questIndexBuilder] = {//quests[81] = {
		name : "Halloween",
		hoverover : "Vaguelly horror related",
		tags : "saturday,gin,31/10/2020,2/11/2020,specialDay,horror",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePictureAnswer,
	question : "Which actor has died most times on the big-screen (ie in films)? <BR/> (a) Danny Trejo, <BR/> (II) Vincent Price, <BR/> (3) Christopher Lee, <BR/> (Ivy) Dennis Hopper.",
	answer : "(a) Danny Trejo",
		answerimage : "https://lh3.googleusercontent.com/X8Cwofy-XdhCTIt7Ict9vOQ-Du4KGOMC8wwGSXAP_y9RdlJOiP8RTp3Nnmj5rqik9AV-epVXWxb6hDPjwtbBuHqOur_YQKJrM5P1EoCO3U9U8yFzGXGHvX7El6AE_lK5SsiOB2DR-Dg=w1920-h1080"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does writer Jack Torrance say as he bursts through the door with an axe?",
		answer : "Here's Johnny  <iframe width='560' height='315' src='https://www.youtube.com/embed/WDpipB4yehk?start=118' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What do we learn to keep clear of in The Slaughtered Lamb?",
		answer : "The Moors  <iframe width='560' height='315' src='https://www.youtube.com/embed/NZrWUS1EQHI?start=68' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "In Misery, which way does Annie Wilkes' ceramic penguin face?",
		answer : "Due South  <iframe width='560' height='315' src='https://www.youtube.com/embed/tURhk-5mDpE?start=9' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Again in Misery, which ankle of Paul's is broken first - left or right?",
		answer : "Left  <iframe width='560' height='315' src='https://www.youtube.com/embed/tURhk-5mDpE?start=98' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "When we first see the Alien burst through John Hurt's chest, are it's eyes open or closed?",
		answer : "A 'Darren' question - it has no eyes (on purpose, to make it seem colder & more detached)  <iframe width='560' height='315' src='https://www.youtube.com/embed/nPQ7om598OM?start=118' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "How many times do we see the knife fall on Marion Crane in the shower?",
		answer : "8  <iframe width='560' height='315' src='https://www.youtube.com/embed/0WtDmbr9xyY?start=50' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What type of birds attack the students in The Birds?",
		answer : "Crows  <iframe width='560' height='315' src='https://www.youtube.com/embed/hplpQt424Ls?start=3' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePictureAnswer, 
		question : "A cheap plastic mask was painted white for Michael Myers' (Halloween) iconic mask.  Who's face originally was the mask of?",
		answerimage : "https://lh3.googleusercontent.com/xxdUtvTZs-Zvx7UVSeKPZfZrXF8NNqFTC9yJPm8G7iOV4yINNCAPH8tcJP6aQe0M7xXXo5e4F77hYrzBQeaEdTxapTUY2pETM3TfrshYMpNr7sJzLt52E21wSE3syD2fMQl8cd7s74s=w1920-h1080"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What form do we see Stephen Kings' 'IT' most often as?",
		answer : "Pennywise the Clown. <iframe width='560' height='315' src='https://www.youtube.com/embed/f1TRltxhd8I?start=33' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
	});



quests[++questIndexBuilder] = {//quests[118] = {
		name : "XMas #1s",
		hoverover : "What were you rocking around the Christmas tree to?",
		tags : "19/12/2020,saturday,music,specialDay",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : '',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/5ii51BJx2f3HSD9pEGJcsI" frameborder="0" width="960" height="569" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : ""
	});
quests[++questIndexBuilder] = {//quests[119] = {
		name : "XMas Lyrics",
		hoverover : "What song is this?",
		tags : "19/12/2020,saturday,specialDay",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "This year, to save me from tears I'll give it to someone special.",
		answer : " Wham! - 'Last Christmas'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Let the Christmas spirit ring, later we'll have some pumpkin pie.",
		answer : " Brenda Lee - 'Rockin' Around the Christmas Tree'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Santa Claus won't make me happy with a toy on Christmas Day",
		answer : " Mariah Carey - 'All I Want for Christmas Is You'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "You know that sweet Santa Clause is on the way.",
		answer : " Wizzard - 'I Wish It Could Be Christmas Everyday'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Feed the world",
		answer : " Band Aid - 'Do They Know It's Christmas?'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "I've got 5 more nights until you're next to me, 4 more days of being lonely",
		answer : " Leona Lewis - 'One More Sleep'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "So this is Xmas and what have you done",
		answer : " John Lennon and Yoko Ono - 'Happy Xmas (War Is Over)'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Look to the future now, It's only just begun",
		answer : " Slade - 'I Wish It Could Be Christmas Everyday'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "You were handsome, you were pretty, Queen of New York City.",
		answer : " The Pogues & Kirsty MacColl - 'Fairytale of New York'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Eat, drink and be merry, come along with me.",
		answer : " Elton John - 'Step Into Christmas'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Baby if you've got to go away, don't think I could take the pain",
		answer : " East 17 - 'Stay Another Day'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Soon the bells will start and the thing that'll make 'em ring is the carol that you sing.",
		answer : " Michael Buble - 'It's Beginning to Look a Lot Like Christmas'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "I sing this song to pass the time away, driving in my car",
		answer : " Chris Rea - 'Driving Home For Christmas'"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Snow is falling all around me",
		answer : " Shakin' Stevens - 'Merry Christmas Everyone'"	});

quests[++questIndexBuilder] = {//quests[120] = {
		name : "XMas questions",
		hoverover : "General santa knowledge?",
		tags : "19/12/2020,saturday,specialDay",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the 5 Bands / singers who have had 3 or more Christmas #1s?",
		answer : " Cliff Richard (I Love You 1960, Mistletoe and Wine 1988, Saviours Day 1990) <BR/> The Beatles (I want to hold your hand 1963, I feel fine 1964, Day Tripper/We can work it out 1965, Hello Goodbye 1967) <BR/> Band Aid (Do they know it's Christmas 1984, 1989, 2004) <BR/> Spice Girls (2 become 1 1996, Too Much 1997, Goodbye 1998)<BR/>Ladbaby(2018,2019,2020)"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Who plays Scrooge in The Muppet Christmas Carol?",
		answer : " Michael Caine"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Where are the McCallisters going on vacation when they leave Kevin behind in Home Alone ?",
		answer : " Paris"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Who dresses up as an armadillo in the Friends episode 'The One with the Holiday Armadillo'?",
		answer : " Ross Geller"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The 2012 follow-up to The Snowman is called The Snowman and what?",
		answer : " The Snowdog"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does Father Ted Crilly win in the Father Ted Christmas special?",
		answer : " The Golden Cleric award"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which villainous EastEnders character served his wife with divorce papers in the Christmas Day edition of the show in 1986?",
		answer : " 'Dirty' Den Watts"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Who plays Buddy's love interest Jovie in Elf?",
		answer : " Zooey Deschanel"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "In which country is it now traditional to eat a KFC for Christmas dinner?",
		answer : " Japan"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Back in Tudor times, what did women who wanted to find a husband eat in the hope of finding a partner?",
		answer : " Gingerbread men"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What fruit can be stored alongside Christmas cake to keep it moist?",
		answer : " An apple"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What did turkeys in Norfolk wear in Victorian England when they were walked to London?",
		answer : " Boots"	});

quests[++questIndexBuilder] = {//quests[121] = {
		name : "XMas Ins and Outs",
		hoverover : "Who was born & died on XMas day?",
		tags : "19/12/2020,saturday,specialDay",
		questInfo: new Array()
	};


addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/EE8LLnxRcKp0qckipD2QFhFaFdWVgbnBESFDLBtfA4DfQRGnLVclDUeReuAR_DPYgAP6TJGBsAvXUy_rlFV9y91AOTM9ZzMuBF2v_GvUXZMAi8x97KBi_QBOIWGg_D11fYFVSukhHiI=w1920-h1080"   ,
		answer : "Eartha Mae Kitt"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/JV6mMFBNu5GSEYGz30jnfXVZEwUC7BQnH4XtwOcI4AaxXzm0mZ9xRndfWo6unQtHRdz-EblpDFFFeHzOSKJ8mfEdVYjoR92AnI_kVgHptJSbasge3kLpwJNOBycI6t8rg7xFAIG8EfQ=w1920-h1080"   ,
		answer : "Sir Isaac Newton"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/BrMvoTuz3CT1dYNmRkGUiBzC5r2X-VBZw92bQEULTLPX0n1ooQatSbqIqNh5xXtvdcVwLxiYZRwA4ZcIETCiw0OxxM7p9reeg7ORnJCF4qX6XpjnBp2JPvX_-TT3u-31I08iwm10fLM=w1920-h1080"   ,
		answer : "Humphrey Bogart"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/PjZEacue9pndNoIAw_yGnhoFzNNpMnKfoAIb4janisligAPEfZftbhMpLBrX7-pOfoE-lvlOfoX-wCA0cappNy2-3gBNomnW8-rr_lJ3-CKZuO2QMGN_iy1FFwe2WAeXKtmg1oSXP8o=w1920-h1080"   ,
		answer : "Justin Trudeau"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/L8UbS7oNPcHeT7ajL29-kN0QJpUfgQT27Ly1WjQaiGk0LszCwON1oCNVLHS10I6_eguDBiVrbgEFtLEAGh7h6uRorZH6xDsRgV8sVtZFWgTeGfarS7wHARoEguuqBp1OlyIb-YT8Qvg=w1920-h1080"   ,
		answer : "Chris Kamara"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/XsS3uYR7TqfPY356tVZQIbW5ZU2E1dJp0Cc4SzCt-Bs1Rs0jEe3XpJouDHlyBxl1yeeqOyKS3ANrJiOB8dRElqHXlluxCCJfl0itjBgdm2NK1WT6RlCOv92W_2SGXfUds0o9XE8w6W4=w1920-h1080"   ,
		answer : "Shane MacGowan"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/DtRjxJyrKHIFhX4BgD4MyELAjp0wcI448wvPfXrPeoT9t-Q9bv5V6OkBFZzkAlFgHVM7QVLUwhjLZ4Z81nvcP_wh2L9pa6krfw72b9wJgywnatvYkFWdv7yFXCR3Ul4kxxtUv9JOyyI=w1920-h1080"   ,
		answer : "Kenny Everett"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/MSVEiioJRlCYwgfRkDcPJ4ajcfWokZRw3-X6_hYmX_11SlQQIuc74fddxxlVTkSRMDxeqX7zJx4LaItfXMBWXFQcAuVNULelTtFeaUDp91nLTUREQ9x5-4IbHnfiXz_1XhW7rHbEKXM=w1920-h1080"   ,
		answer : "Annie Lennox"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/5SgC9YuEviQPkCOblsXfwJ2oWIcqodM0Pma5ZuqZQp7jiJBT4mm0hI_tE-3FeJf4q4R5pzoSufwoM6Q5VFv0fqR8W1da2-ndf_CL6mJpFlQ3UF4P98o2-AcumcayZQKcrbTiJbKB-Pg=w1920-h1080"   ,
		answer : "Dido"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/D6EoXwbuF-IviC2XH5mCqHwVkpD9p_Mnr7z7ena3_4pwwVWloADl10uFM-0KBLVSHcOWlWTFFCac0_qPkA0FlOoKCOqShWaLjNFU7aWts1TbX_8F4-OCSr5XHQ9JxtfRRhJD9NI15DM=w1920-h1080"   ,
		answer : "Cab Calloway"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/DjqgWKk8vLqnn5jZbhSaWYifDv0ZYHf2Mc4i88ooxJsNLVM-2iOR8jOVz3qzMWcSUTEdbS_aQj5fKn5AMkcd2fFOj6euaaF8nooFIvkqaJm1j9z5y-jyiQJbVk1ybPfuJ3fXsUwTV-c=w1920-h1080"   ,
		answer : "Cissy Spacek"	}); 

quests[++questIndexBuilder] = {//quests[122] = {
		name : "XMas Movies",
		hoverover : "Name the film?",
		tags : "19/12/2020,saturday,specialDay,movies",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // bad
		image : "https://lh3.googleusercontent.com/uzGZ6v7aX_D1mCwhDbYeFuzR-cl__DDrvVrMl-DMqE0kJfD0ARibqUDYUJdsvP14H0y3sfluHUG3CcD3HfHq4K9KiNn-7nHHzbfpF6_OhF4jQz3rHwfu2634UN4rHU0z-le7GjAYhUM=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/nKo30Nq2g3rdMxnOvH96mEJiGeH38QVQ3GqojSNpGS5gLSAX0H-le8dq6PrbiFtYBs9j3DqGafvS6Nqc96Wp4E6mu2578WDMQViH8szGlwpE-n8JualzIlgLvBCO66WURjWwVLR7kkE=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // Rogan
		image : "https://lh3.googleusercontent.com/bsIqBNBtVni3EJDlJZmt0vLuA1OD8vAD861AlxdGwZR2I9ntq7qaztjX0uuSDXFhP0F9H_DvotOx-aPH4fIUMN3CGeDuWGSRkNotC3TJFUB-f6--LPR5pvDqKsBbcggeK6VZiwGjf8Q=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/78fz_WQFq71lU7U4o7oiPwJgZFCNgiYz-aDEQ3VTT3KzJ4H2gJNSL-AD_j2E5uUcrNWvJmjs9pmSurNp7GooFobjwr94T6IgXNwHrUlpl-ILRLdM0yDuRYn3WXogaAo4TresYaOmw3E=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // Jingle
		image : "https://lh3.googleusercontent.com/5I3BP5UYc2u_hQ8vAzCAREpY1fgqgoUpKXMiTEAGF_swnpx_7E2UL-wYkxzRZsWVBWlWpcJzXorauJU829wOQyR2XMxyYvvAnCryDpzUVuWEfpy9ZyIqyJFs3bPq0VbckopgS_mWq7s=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/MQ1WdkbcczJm2siRYUASgsGPWi4RBV9cVLk-OSsR29rGm7hMxLNqbu80h4_JpR-YxiPJCZi7DEdWCqG-uw0PQbDbhXH5R4SdG6yFj5YkI76qpbG04L465KX8Up0-dy5QhmDE4l-ZHRQ=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // nativity
		image : "https://lh3.googleusercontent.com/G4-zulB6yjkIns8_G_akQkOWKxFUWBEP3uwusccj-qnzR9ruDDqyhIWDAIfWr78xdscEGKW47vqbirXHrJCN7Y_pP88asIdFXj_3lpc3ySo9bb1CCHe8l43SwaeeWjAiDVWJOZI4_Es=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/QaPNFqnQPn-X-w0rcQxSJa99EZQzqLxLuoTJbwNLTfnHBST0yeJvD0_mCXxkCbKtXhScWRifBYK0pZFrshAYniL0a9xhrr8v5G9mAEK5olu-v2JftOV0rxO6OBCEoJFxFtEHWrxNCdU=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // Miracle
		image : "https://lh3.googleusercontent.com/Pnq7dSjahU5C9jKEN9iiWXrksJiHDPRGRrnQ6Og7sNNJznQB2XmJPy83Gwsky5H8wXmjgTQ9ZB1eI20C4f0KMrA1jnUg2pAtWh-16I5rvOqrpKG0wJBfXZDrVBLEmE9Kg89WufZfoFc=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/rpL6uCMCJwOYc2SKMAXV9DcmDFhIVENqkh5agY_-LRsKwZMozeIWf3w-LRtvhIw3xUYzFa28cTB7UFAEYT0bqZmRrmWRHFWL9eWYIh_2sSoUpE65XDADvsEeB7KrExPayDLhSfIYf5A=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // love act
		image : "https://lh3.googleusercontent.com/mx1rFtM81I74JzxSzVd91ET-a3lIpJukTswawNebcMmLHs4z0IiceGZdGCXBUpwQEXjxi9koyPg0WNBivPYGipAw9AeLDA3keiQGKiJOZKB2fUhT77dzOxx5MGM6zFZP_lCfOewxhJY=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/B2WzDml1Q9feCvZ5-YxtWnSxlV9nKe9wak_0cnHnT1oZXuBYD9MFctC5HmfZkU10yKSkAdk4KpQHQyQYrHjJGnWyacvvOdNgb-rzK6egOohFF-e53qrgwoq_GFneNJ99MaN389GPvmk=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // holiday
		image : "https://lh3.googleusercontent.com/lm2Q0kDSZrUm6nTJvRKS-dR0oikiUaXfUTA3gXs-56GkrHdisUVIrfk9Zq9AuCXKloNSq24K68-8GhDe-3Wt4eNlp97PDbxSVyZtxkuIedJ2GrYY95Qn1SQa30BIR3P5ABJDVmoj6xE=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/XUfyWo8UfWJV4jxmvQmI5sa6eqx5o19p-QRrjHmSOJCaaUSkatxblhcoa7gQJRDHv3EAGtUNordvJvFA9GSkvXRPJV_RRA6HmrlBEImmqg5bck7zkzvL-JOOCA2U698N-ayD8FE1noE=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // alone
		image : "https://lh3.googleusercontent.com/OoT2jBJJWQBJ8PH7J8wkX4ewww2MwONwprOFz9EALXZ0LKRKRJdG0W5mDMbGlyTYkQe6vI1kEXoflTNR3sNL3lpYBoWUKuX90z-w-91m9xWVWYSESkTHrYuFdrqZybcrA2LnU4aXSz4=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/wsCOK9u53Icc6UdhChUB6LltifxGcXK1MPx18yPUYSWHgPqEAQYtKwGkj3XlX_scI4mhg8cLqJ5S7m-OoR4qXXzHb8FSkO-VrELtXFPbZtrfO0gkBtHlgW30aGHjKPPPJCURjyZ5vH4=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // Burton
		image : "https://lh3.googleusercontent.com/0Ceng3ZNeR_WzsJi-ENHMItyxbx_D5n0bUpfwhUj5GLmwuduzfb_PxfqI7eGW_jEXM_LdavEyDslXsHCJ51RhN5qQ_Ed4gu3gxql1a1kCbKrwxQWC_LsKvUES5_PFgNCJK-wtcUN06c=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/tHvfuTTDUoMxUUjkR-7z2nkAoGnBV3cqkY7IziPaHjTMUJ-_eA8v8qvfNU-qgAmkuKyVmQurhkJpIJZyECKMzB0tWFzNKi0ml7KgiydUz2GHXCliYzBpYqf32Fb9hAMvNU4NqONHiAc=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // Scrooged
		image : "https://lh3.googleusercontent.com/_SPwEqxFEaKPGADHRIAi4wFjc4E2TGWJAYNnMwfcPygq4kTmmejQcFPtriz3RXuB1gV8424gGT3E6cCzxZsjftLm5FQViEOnvZDMLzYW36kHBL4COy1P6HxKIG6t4TRi1wWXjXKrEn8=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/KvvRoc7BtTsUwCURg4RI5QiTqjEfnxy7MCIStUh9DE6RClcCaFpjdd54OUERRRDgrh_dLLxiCUkz7aG8wZmgJT_54i-vMUdLDDfZClL6J6lDv6HpRxaNRiGwRYQwwqB2RG_-GYH4qQs=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // Die Hrd
		image : "https://lh3.googleusercontent.com/CM9gnjh-Edf8RvdHnoI8gPXOuslzEsVSkoLyGXJogKhXFW5gjwA4zxX_O92KRNdFXrCbqOZ_4N34KZVjWeqKO46w6yKEyxfqdq9EwLnzF8V6jyp-w7rppHDxr_Ijv96TShYcS98EkW4=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/v3yQTupOLDSvvq9F3RYvTPvhAz5vu62IvMai8LL2TpJEPa8KbzZ4QJIToAIB-vp63syrsvYuARnb3Dkf2-m72JpqUUBcyGIYRN7WyFag11kdIeYR7KORPT6-V_6pui2PGAt2iTCw27w=w1920-h1080"	}); 
addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,		question : "What Christmas Movie is this?",  // die hard 2
		image : "https://lh3.googleusercontent.com/Gq3cFsPAXiGURuXYJrRY5ezKTwpxa60XcM_0IKTMall64yBeKrElFZYAfhkzgR_2jUauTczBcSw2BSsvuJIeL4yo8NsfRaEB7ojkDXE-hzLC5ad9DApMtVDfhybTilG3dl-g1-FEHRo=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/JWhxY5YORJebF-9drdnvdyvMI36bCM-kcVzWwEfbrvqG56rvpJ_ZFA8BZAlkHbwMjImtkHGV59drR0tvA-gi1cW0fMaHgLwlYZn73BTD8hzVluZTEoGu3h8lxc58iapjn3jFmoegYsg=w1920-h1080"	});  

quests[++questIndexBuilder] = {//quests[123] = {
		name : "XMas Songs",
		hoverover : "Name the song",
		tags : "19/12/2020,saturday,specialDay",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/0oigDwZfdbMUP-et-r2xBmNoQzv7b9lwUtFbQDBpZgmTuY5b_XaeoDeDK6vGztvy5PzYLp0AC1lMML2P1u6WgzFJi3SjVBOAfNLxiH5hINQ3ZcqXt_b2oGI7TY0DxG-snBimcxroj9Q=w1920-h1080"   ,
		answer : "Driving Home for Christmas"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/c-YAWE5u1Hi711PEQgOmhhhhUkPslx3dCA1Jt82DbsemNkvphYscoiqOv4PQ-827EjfTKKw7Xyk1Qowo1KNMZYXWSB5cSKb8-i8brC0uvbsHSuhsDqqYjg-husJqWbj3U0wJE2ZTaJw=w1920-h1080"   ,
		answer : "Let it snow, Let it snow, Let it snow"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/YXlVCqa3u3vMrgumCvNsGQGXGD76iAmXVS7fALnMrQeaPsS6ph6877ltBS0PttU3PanpGv7P4jeuZReXNVOEQTbjZeJyR4bMtU8zt0eznA25bTAgZHCMWs4i4R-sNl0k-zcP3MmbHYo=w1920-h1080"   ,
		answer : "Fairtytale of New York"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/XSdfEXuEW7rZIv7R9ot8ci47yeR-hvqKemPiVH2ui53mPPCx5KjX4m568qHfO2k7V2eOs5PT5VF78LZrq2u6TaKAy7PSWFZW64wla8GnVonNdPeA-g_fFdjgZiqIfjaPQlFSyU_QlGI=w1920-h1080"   ,
		answer : "Santa Baby"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/RCbVTPGq4rxnc9_TYMPOtwzhHDJ2c0VMNCRjsHlCJVHFltsD__NGvO9NynVG26WWJJXcHXPu_Z5mOQXGBGY1x21aOnpi_-EJyAENR0jeNxc87BpVorFdqFZLeNVVKiqvoCBOXZ4TsJg=w1920-h1080"   ,
		answer : "Blue Christmas"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/pTIMo1vvP5Tp75sEY8f1JtiCb-TfW365cpf57LX1Cp43K-r_ISWgzHn6IRSdwd5LW9yEns81NtrtXlEmeUqitr7hC34pHR7nRheUlAWijmIw8vjIyh3bTqlEkbcZMATTy5UMm7Z_OQA=w1920-h1080"   ,
		answer : "I saw Mummy kissing Santa"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/nc1hliOJkseM3WWyVWyVatGjny1_f9Nzh7MmxNp-ZH8XufUYFF4bim78SqhckbiYCjVLgIIg1ORgIZo7XVNsKCsw9vQ23C1rtZR1e0IkIJPPY0hOcBuZ4oI_1l93AodoDJyJNIv-t-o=w1920-h1080"   ,
		answer : "Granny got run over by Rudolf"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/5PWqW3R7SEOF_LkCq2TUWjwEIPKaShT0P6bb65Tgifitt6jfkIZ5NYAMtT54IjY9K_cvzwU3jYSku2dTwvxlH85CXVoZtY-G5z5-XiSgc1EjJthdKviASoViX8vTzvyPagLZznbsRsA=w1920-h1080"   ,
		answer : "Silent Night"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/S1LdDxmv2xO-YJQN4IfNl-6TTspaMKowW3fNIIsxJvs8GRKx1tJ8WfgbHR05bfKruz4Wrkf-WReGAQDaKfTI5S06Ryw-gy9CAqSnT0U8goEaq9VIF9pM4yOgfGo5s_d_tIaWkST2a98=w1920-h1080"   ,
		answer : "Drummer Boy"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/UBi9AcjXSso24QGLe3PW-VnRlKSnjPvhMIi7PjUppVnxn7U9rVGOp4C15E5eIAot4B-g13kvpzDMGMW53YHPTHMiJzYtSQpsLCupQwRYpdINPJDLNBIzR2D1ppDdMEKqBoJwQH94pBc=w1920-h1080"   ,
		answer : "Run Rudolf Run"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/J4vwdxZbJb2NmNbopNKx5Any67X0hTRHCKjEC38xQp7eKU6YkBWfjhNTntGzDlNzlfGYgKNRldtMNxRPEfJSHaOp4yMQC1LHI3FYL5AjZkujILOCi6ALWoKfAmfe_nZb_woLsI-jy3A=w1920-h1080"   ,
		answer : "Mistletoe & Wine"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/OhVnWdTdIbxZzdr5fl87bYgMSrzE540OyPa0MLbyKFbgh92h5oWWHuO6xyi9BCHCRf8NmY_stU7kr3wI755f8qdhSRm3tHu5M2KVqSLRqZLiBgljqyoLq0i8mP2fkxPpHxr7kUZf-PA=w1920-h1080"   ,
		answer : "Joy to the world"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/v5Ho10rhwxg44kB2Asx-V2rch7eS4IScim0-pYs1WESbjZ0Zu_4-MxIGy4ALmcr_5GjA7JYI88NddTWTIhc5t1QXm3p7HNy6S2eK2-srQqg0pJEFSCiQIvk8BINSi3bkUZxf3r21Puk=w1920-h1080"   ,
		answer : "Stop the cavalry"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/JMMAEA5r96BHXIVssFdLqA1emCfvvIYkjTW38J47sq9mPJaCC2LcOSHkqWTnfa83iI7z9HzegMK2nbeBoGQ3QTNdLZyX6cCJ3bBoZcrSt-iGsKw2G1AGOKoPeqTvO7IrSubcLCS0gWA=w1920-h1080"   ,
		answer : "Rocking around the Christmas tree"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/sHX4m_e1nDijJGbvAajYUPCZd6EynCyrD3ljVOhs3c5Uprqj3zutQhUz-Py-nlpDktFQqBT-fMImV8_Dyoabcil03ktQWemVaaUqYJzJA1hfgSLf4KW0RS9GXDjzXa3YLn9g3SAnuZQ=w1920-h1080"   ,
		answer : "Jingle Bell Rock"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/zL4eaEAylxGPr1y0UNDmc1CRgBeA4MhPTZ-wHRLW-qP6Td76T6mi3tlu2eyDvkI1OOZj0IR8C8FfpaBt3TQGjYOUysXSqe4zJ6q1hAyQ2cUvzGk20N5EF_0VEBLQFz0PhjnYQEUxkMA=w1920-h1080"   ,
		answer : "Frosty the snowman"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/zYJvNO6QRaSTikS04yQcc2Q5DjEEfSlPBU_w2WKl07-4xeczWGiEDCsv0mazdgG1SGbGLg9xjmAg0dDfLcSbD0gjcl0PeFZVq8DSSjii77quA7lSUyaUF0Zrmypgffwbop6q5NexPyc=w1920-h1080"   ,
		answer : "Step into Christmas"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Christmas song is this?",
		image : "https://lh3.googleusercontent.com/jvOfC35mB-9pQoNwrVF1U_AZm2hBFld7Yc6cjQzpy9WlP_k94ZNO4baXrWK9UCFyLvakk_RqEcX641KyNQRpPcyU7oEzf5BIg5gWYJ7FgJ1oXP7RPBAaISYRONsrmfS-DsBvT9T0KmM=w1920-h1080"   ,
		answer : "Feliz Navidad"	}); 


quests[++questIndexBuilder] = {//quests[125] = {
		name : "Boxing day ins and outs",
		hoverover : "Who died & was born on a boxing day",
		tags : "26/12/2020,saturday,specialDay",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/3IUGOIioLjIOKlYJtIgF10om8ucqVYiVqPbNpVZZel4AW6g3MJwH03vZwqofWPHXURU3cfkox32GJpFOeNQaPEoon55N9O6pihsW9boVMmniTKVrY5dE0A5XGjpVeRJqm0VG3bjwVCc=w1920-h1080"   ,
		answer : "Leslie Dwyer"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/orrBb7dtbmCtVU7vVSe0dfwXnsjcMCoOMPs3ol8chh0Z6_WLr0i5rhPuN2-OBbwkHfr1w20TQhHzGFjy1QC_r3gkooEhBy-dcCa-yRAjIOBy2ZcTv1smMDTzkwb8Rmx916GePvoowHg=w1920-h1080"   ,
		answer : "Nigel Hawthorne"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/YggrptcUGmKQuqx8WdtY0MJDVTglFJ-kQyz7sEZu2WYIacgI-ulPekzw6huOI_aybKQYR4ck49pUYfT52csJRxLb-_3lH31pq4fAi6VjXkhOc0F0zLlhulU-vJm9o8zx9qF22chEv58=w1920-h1080"   ,
		answer : "Kit Harrington"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/hyzhk61wQ-EgxQG1Zb0Y8tCJpB6_sdAXyhcRHiEoQnlglUq4XQAu6jlWm5AKi9t9gEZUyuPrRUUFtWauROFNANzngFB49OFlfXymi5a2gw2tQsh1ahGxV3u0-HFSZTXEFrBODhPG5m0=w1920-h1080"   ,
		answer : "Lars Ulrich (Metallica Drummer)"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this coming or going?",
		image : "https://lh3.googleusercontent.com/x7XQLk3rswLgdiWdxwG3AN5LIkpYnyMbxs_B-iuIpuYd6tMDt8pFlEcwX-0dXm45Ir5RSdE-EF1POJNB_Zn_BepDQzl-7GYkotd2xxkAJxvG4eQyBrhJGQEEOxIAQk1lJk_UGlPbau4=w1920-h1080"   ,
		answer : "Dermot Murnaghan (After a hit & run, but looked appropriate for Boxing Day)"	}); 

quests[++questIndexBuilder] = {//quests[127] = {
		name : "Boxing Day",
		hoverover : "Do you recognise these boxers",
		tags : "26/12/2020,saturday,specialDay",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "This is 6 feet 2 inches tall boxer Ben Caunt (1815-1861) - weighing in at about 18 stone - what is named after him?",
		image : "https://lh3.googleusercontent.com/KNnx1Kz4cXioZsZiJ_pfxT8K5oLGMybOTfursRHlX5gNPV9YE94CiB1cqQEBodr7claq0XBct8YTJyVvL1i5mYN2MobHdljnPVmK9owya-XQTtKJKUdtAzFfrh9_5pfBvby-TARju0Q=w1920-h1080"   ,
		answer : "Big Ben"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Boxing Day Boxer is this?",
		image : "https://lh3.googleusercontent.com/Aw4bLO_Cr5rRKwo1bkRzYUQMx5XuDhDgdCK2pVaN2N7GydaWNRElXBHXr0qe5aT6nyAWSl1wXsFx49hK7W7rum4fuKkiSLUAhVK6w3cA6_qt1UVnNuaKF4HVOnUvKwFk8XYEac5VgxA=w1920-h1080"   ,
		answer : "Chris Eubank"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Boxing Day Boxer is this?",
		image : "https://lh3.googleusercontent.com/FDVvLFQmKWfnPtXGj3B1u_k2zInZyMikv-TVjitRD-Li8VQRKCIyeF_wWo6K98tQlX7OQ81YmFrc-Okn3DGmKgNjsA89zGzZsFnBxegPkiR2QXnn_Ma8JVzck214kfEE13-ELdhkrdg=w1920-h1080"   ,
		answer : "Barry McGuigan"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Boxing Day Boxer is this?",
		image : "https://lh3.googleusercontent.com/qHYMnExx_BVKFkeCs2EpAYOZIrjGLGOJz7sLguqtC0tZT_Tw4ZDZQ1l2qFq77u-H80CfWrjNv8Ffeqaw0AEvPatPDVCiEKjEicr1ofWKXwh2kDrc3l9gspnjrF565VLLFO0Yt7ndmTg=w1920-h1080"   ,
		answer : "'Prince' Naseem Hamed"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Boxing Day Boxer is this still standing?",
		image : "https://lh3.googleusercontent.com/I_Vb86DE4BIthwW7icxh0EsfOU5ZCBcRw8_uRzTfsbFnfdjtPHmB5OqOzfJ8vafSjWXMZknaqsaF9MPliqmfBt82A2G4REcGNUFFvPVgMXHXHno27GkHCa4wjtJObO3rtESE9QrezbE=w1920-h1080"   ,
		answer : "Sir Henry Cooper"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Boxing Day Boxer & his good friend are shown here?",
		image : "https://lh3.googleusercontent.com/oQgY3RiUIFhP0hUy2oMbGmAyb8PHqL5zr3FbNGtciJsOnf4hQqxsxaWO_YVmO7EqkpxteSRC1BVWMmoRR7IsgwNPF19Fex_qW6DXNOYQIdxDdqE2zhbLiXfpChQ6LcpEiiNI7XEwFy4=w1920-h1080"   ,
		answer : "Harry Carpenter & Frank Bruno"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Boxing Day playboy Boxer is this?",
		image : "https://lh3.googleusercontent.com/FXwc_BmcpwxivOsA9HpBN70FAN7Souron-MG_dofC6co3Jb45tsd40sYi0zVsrbHfuBRYWZMa3vka76C1v-TD2w_Y_2CYPBsvRf5aaOjrdJKmY4p01vSKvSguZD59BzOrWT6NrvY2xA=w1920-h1080"   ,
		answer : "John Conteh"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Boxing Day Boxer is this?",
		image : "https://lh3.googleusercontent.com/Ty3U2WWcFk8pHmFUXD4_ZzNklc6KSA1hkj5WG1uafYWNs9IEqji9JXVD-VXFy3c94GABI8rO9uJUD4RMuzn4coKxUNUBwhA2S0VXUEHBnf7Aa9CKgRcDyW7Nk4lzKVEw9JCnqOAB3n8=w1920-h1080"   ,
		answer : "Cassius Clay (Mohammad Ali)"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Boxing Day Boxer is this?",
		image : "https://lh3.googleusercontent.com/m7vo1CBkUB3Sra3UX99PHIkhYIOE0ew3MaN5xZ2a3nugZ_1CnjWLmSLEUHTo1ww2RVPrQ4eRzoQOaQCrJAtsJET-YOnl9PWTpWGBn-0dSpQsayt0dGrVW6Hq3HsTtkay5OcKRj0qQ80=w1920-h1080"   ,
		answer : "Mike Tyson"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Boxing Day Boxer is this?",
		image : "https://lh3.googleusercontent.com/UYBb37thRVvqJEn4DdkUITmJQhTYr3ywwUTrT8kcImGTtBDGCKeQyETapw2ZHRdc-TR45KNGtiwd7Jb-cnB7KwRc7pO5XPYOLtBhl8aRDqT6EepCJeuG8k2CR7SY8pX72M-3yuz_ZrY=w1920-h1080"   ,
		answer : "George Foreman"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What Boxing Day Boxer is this?",
		image : "https://lh3.googleusercontent.com/DQ_9Oo0HUpmNGCrkibwB-ZhuBrUPO4w0u2cMaUxdTACu12SwYhLiyUYbsALZXm5unNdz8skV4xmKtAgZq3S-svQnm98HxdiqFt22QuF6sjVtfbyyZCIcNoT2CJsP_Q8bH1m56UUsvV4=w1920-h1080"   ,
		answer : "Lennox Lewis"	}); 
quests[++questIndexBuilder] = {//quests[128] = {
		name : "Boxing",
		hoverover : "Do you recognise these boxing related songs",
		tags : "26/12/2020,saturday,music,specialDay",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : 'Name the artist, the song, and say why it relates to boxing',
	spotify : '<iframe src="https://open.spotify.com/embed/playlist/732EKULl0ShZOvHcUVajZA" frameborder="0" width="960" height="569" allowtransparency="true" allow="encrypted-media"></iframe>',
	answer : "Boxer, Fight, Hit, Fighting, Hit, Box, Belt, Fighters, Hit, Shorts"
});




quests[++questIndexBuilder] = {//quests[8] = {
		name : "No knowledge required",
		hoverover : "Logic quiz",
		tags : "logic,saturday,Weever",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Some months have 30 days, and some have 31. How many have 28 ?",
		answer : "12"
	} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Your doctor prescribes you a short-term dosage of a 3 pills and tells you to take one every half hour. How long will it before all the pills have been taken ?",
		answer : "1 hour"
	} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "You go to bed at eight o'clock in the evening and wound up your clock and set the alarm to sound at nine o'clock in the next morning. How many hours sleep would you get before being awoken by the alarm?",
		answer : "1 hour"
	} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Divide 30 by half and add ten. What do you get ?",
		answer : "70"
	} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A smallholder had 17 sheep. All but 9 died. How many live sheep were left?",
		answer : "9 live sheep"
	} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "If you had no torch and only one match and entered a cold and dark room where there was an oil-heater, an oil lamp and a candle, which would you light first?",
		answer : "The match"
	} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A man builds a log cabin, each of its four sides having a southern aspect.   A big bear comes along. What colour is the bear ?",
		answer : "White"
	} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Take 2 apples from 3 apples. What do you have?",
		answer : "2"
	} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "How many animals of each species did Moses take with him in the Ark ?",
		answer : "None.  Noah built the ark"
	} );
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "If you drove a bus with 43 people on board from Chicago ; stopped at Pittsburgh to pick up 7 more people and drop off 5, then at Cleveland to drop off 8 passengers and pick up 4 more and eventually arrive at your destination, Philadelphia, twenty- three hours later, what's the name of the driver ?",
		answer : "It's you"
	});
quests[++questIndexBuilder] = {//quests[23] = {
		name : "No Knowledge Required #2",
		hoverover : "Logic quiz",
		tags : "logic,saturday,Weever",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "You just bought a rooster. You expect to get three fresh eggs every morning. After two weeks and three days with the bird, how many eggs do you have?",
		answer : "0"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What word in the dictionary is always spelled incorrectly?",
		answer : "Incorrectly"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "You're running a marathon and you just passed the person who was in second place. What place are you in now?",
		answer : "2nd"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "In what month do people get the least sleep?",
		answer : "February"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "In cubic metres, how much soil is there in a hole that is three metres wide, four metres long, and five metres deep?",
		answer : "Zero"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What has a head and a tail, but no body?",
		answer : "A Coin"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Jane and Bob have four daughters. Each of their daughters has one brother. How many children do Jane and Bob have in total?",
		answer : "5"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "How many times can you subtract five from 25?",
		answer : "1"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What occurs once in a year, twice in a week, but never in a day?",
		answer : "The letter E"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Barry's dad has three sons: Snap, Crackle, and ____.",
		answer : "Barry"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What word becomes shorter when you add two letters to it?",
		answer : "Short"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A cashier at a butcher shop is 5 feet 9 inches tall, wears size 8 shoes, and is 32 years old. What does she weigh?",
		answer : "Meat"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "If three kids can eat three hot dogs in three minutes, how many minutes would it take 100 kids to eat 100 hot dogs?",
		answer : "3 minutes"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "If there are 12 fish and half of them drown, how many are left?",
		answer : "12"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "An electric train is moving north at 100 mph. Which way does the smoke blow?",
		answer : "There is no smoke from an electric train"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "In American law, is it legal for a man to marry his widow's sister?",
		answer : "No, as he's dead"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A cowboy rides into town on Friday. He stays three days, then rides out of town on Friday. How?",
		answer : "Friday is his horse"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name 3 consecutive days not using the words Monday-Sunday?",
		answer : "Yesterday, today, tomorrow.  XMas Eve, XMas day, Boxing day"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "There's a boat full of people but not a single person on board. How?",
		answer : "They're all married"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "5 + 5 + 5 = 550   With a single line make the equation correct?",
		answer : "5 4 5 + 5=550"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "There are 30 cows in a field and 28 chickens, how many didn't?",
		answer : "20 ate chickens - so 10 didn't"
	});

quests[++questIndexBuilder] = {//quests[15] = {
		name : "Basic ignorance required",
		hoverover : "Basic general knowledge",
		tags : "logic,saturday,Weever",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Wasps can recognise human faces - True or False ?",
		answer : "True, the little stripey b@st@rds."
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "George Washington did not know that dinosaurs existed - True or False?",
		answer : "True - He died in 1799, but dinosaurs weren't discovered or identified until 42 years later.  He probably thought they were the bones of giants.  <BR/><BR/>I know I could have used King George III instead of Washington, but if a lifetime in male dominated environments has taught me anything, it's that picking on a minority will get the silent approval of the majority, who all consider themselves a minority in some other unspecified way and are happy you didn't pick that."
	});
addQuest(quests[questIndexBuilder],{		type : quizQuestionTypePictureAnswer,
		question : "All of the planets in the solar system can fit between (the average distance between) Earth and the Moon - True or False? <BR/><BR/> Heading off expected questions: <BR/><BR/>Not including Earth, because that's forming a bookend here so can't appear twice.<BR/><BR/>Don't start on about Pluto Dr's W and C.  I bet you called Snickers 'Marathon' in the Teaser round.  We're living in 2020 not 1989.",
		answerimage : "https://lh3.googleusercontent.com/ocGLQEUcWogKga0-XT5eCNz62ER-DjSnvuFmLqM_8QQCCLLgqe-uZMwpXKEP0sZguB6WvpCLF_hBHAQnDljbMvUgH_Gon2wWOIv_zwG-DgTsWT8ESjqgfZS-vcroUYlvEwFNwP0t0hI=w1920-h1080"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Polar bears are born with yellow hair that naturally lightens up as they get older - True or False?",
		answer : "False - Polar bear hair is actually clear, not white"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Barack Obama has won more Grammy Awards than Katy Perry - True or False?",
		answer : "True - Barack Obama has won two Grammys, both for Best Spoken Word Album (2006 and 2008). Katy Perry has 13 nominations but zero wins - which is a travesty."
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The sound of the velociraptors communicating in Jurassic Park is the sound of birds mating - True or False?",
		answer : "False - It's the sound of tortoises mating"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Oxford university is older than the Aztec Empire - True or False?",
		answer : "True - Oxford started teaching students in 1096, but the Aztec Empire didn't begin until more than 100 years later"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What was the most common colour of toilet paper (?pepper?) in 1980s France?",
		answer : "Pink"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Henry VIII introduced which tax in England in 1535?",
		answer : "A beard tax.  The amount collected by the monarch increased with the beard grower's standing in society - making facial hair a status symbol - as it still is today."
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Rubber bands degrade faster in a fridge than out of a fridge - True or False?",
		answer : "False - they last longer when refridgerated."
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Who entered a contest to find his own look-alike and came 3rd?<BR/><BR/>(a) Charlie Chaplin<BR/>(2) Winston Churchill<BR/>(III) Boris Johnson<BR/>(Ivy) The Rock",
		answer : "(a) Charlie Chaplin"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The UK's Dyslexia Research Trust is based in which British city?",
		answer : "Reading. <BR/><BR/>I will judge you if you're laughing."
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Who first used the word 'Puking' in literature?",
		answer : "William Shakespeare in As You Like It, Act II, Scene VII <BR/> JACQUES: All the world's a stage, <BR/>...Blah Blah Blah... At first the infant, <BR/> Mewling and <b>puking</b> in the nurse's arms."
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What is the collective noun for a group of unicorns? <BR/><BR/>3) A Blessing<BR/>2) A Spike<BR/>4) A Rainbow<BR/>1) It's a made up animal so doesn't have a collective noun you cockwomble",
		answer : "3) A Blessing"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "How long after the Titanic sank was the first film of the disaster released (starring an actress who was on board Lifeboat #7 in the real disaster)? <BR/><BR/> S) 29 Days <BR/>O) 29 Weeks <BR/>S) 29 Months",
		answer : "S) 29 Days - 'Saved from Titanic', starring Dorothy Gibson - it centred around her parents and (fictional - as she was having an affair with the producer Jules Brulatour) fiance Ensign Jack"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What is the air in crisp bags? <BR/><BR/>H) Oxygen<BR/>2) Nitrogen<BR/>O) Hydrogen",
		answer : "2) Nitrogen - it helps preserve the crisps"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What is a single spaghetti noodle called? <BR/><BR/>M) Spaghet<BR/>a) Spaghetto<BR/>r) Spaghettle<BR/>i) Spaghettictite<BR/>o) Spaghetticmite",
		answer : "a) Spaghetto"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What did the Volkswagen Group sell more of in 2018? <BR/><BR/>Sausages<BR/>Cars<BR/>Skodas",
		answer : "Cars (The Volkswagen Currywurst - 6.81 million sold in 2018 - whereas the VW Group sold 10.8 million cars in the same period).  <BR/><BR/>The Currywurst is their biggest selling individual part - #199 398 500 A "
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Who was the largest tyre producer in the world (by volume produced in 2011)?",
		answer : "4th - Goodyear 181 million <BR/>3rd - Michelin 184 million <BR/>2nd - Bridgestone 190 million <BR/>1st - Lego 318 Million <BR/><BR/> Footnote - Last year Lego produced about 700 million tyres"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What is the name given to the smallest distance per second moved of a computer mouse?",
		answer : "Mickey <BR/><BR/> ie My mum moves the mouse at about 3 Mickeys per second"
	});

quests[++questIndexBuilder] = { //quests[88] = {
		name : "Speech",
		hoverover : "Famous speeches",
		tags : "gin,14/11/2020,16/11/2020,Weever",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Newly sworn-in US presidents usually give a speech referred to as what?",
		answer : "An Inaugral Address"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Complete the following quotation of U.S. President John F. Kennedy, in a speech given on June 26, 1963: 'Ich bin ein ...'?",
		answer : "Berliner"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "'I know I have the body of a weak, feeble woman; but I have the heart and stomach of a king, and of a king of England too' is a line from a speech delivered by Elizabeth I to her troop's at which English town?",
		answer : "Tilbury"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "In a funny acceptance speech for a lifetime achievement award at the British Comedy Awards in 1994, who refered to the Prince of Wales as a 'grovelling bastard'?",
		answer : "Spike Milligan"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Martin Luther King Jr.'s 'I Have a Dream' speech was delivered in which city?",
		answer : "Washington D.C."
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "On June 1, 1865, President Abraham Lincoln gave his most famous speech; by what name do we know this speech?",
		answer : "The Gettysburg Address"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Which American author, an active campaigner for women's suffrage, made a 1901 'Votes for Women' speech, which is considered one of the most famous speeches in history?",
		answer : "Mark Twain"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A speech given on 20 April, 1968, by Enoch Powell addressing a meeting of the Conservative Political Centre in Birmingham has become known by what name?",
		answer : "Rivers of Blood speech"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The original and most noted Speakers' Corner is in which London park?",
		answer : "Hyde Park"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "In the London Olympic Opening Ceremony, who delivered Caliban's speech from William Shakespeare's The Tempest?",
		answer : "Kenneth Branagh"
	});


quests[++questIndexBuilder] = {  //quests[2] = {
		name : "Boring Films",
		hoverover : "Guess the movie from the Tweet",
		tags : "saturday,categoryLess",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/Ftq4kmwf2ZMgm2Au1KHEirPcTYyA2MfoTe5ti0A2v6cPUAyexLjvfFtcovCeJDtF8oX8j6EXHIV9HMrZj41byAmnurxMK4mfRcSw695znXl608VK__rflaCyjX_fcVMXtxvgNfEU0NU=w1920-h1080",
		answer : "Groundhog Day"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/6WCPm1plfjeAC1wf5AtpM5cOfHXKJpIqKNOHDDjpzGrtcHVmchQOnlFVdkpWdSRigiXG878YWhPnEeGz_pFCdG3v7d51PQRr4-alpdLojbIG3Am1PivMxW0jZPvGf1FrjgzGG2Irggw=w1920-h1080",
		answer : "The Blues Brothers"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/wol1toHWvBy7j2m1bkXqYgKk-UFAZrLyDIUc7FrMC_g9-NqMScku27HKEOfwtUWcVjJ35JwrCosYIPrfT9JrtG8CSsflJYKKqnREoWwnpmDT3KoDaSMnh73u9dAAojxyRLjeLJRjnO8=w1920-h1080",
		answer : "Monty Python's Holy Grail"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/409rHNmHoo-SAzBSyGgOVqUPY3ALXUQkOO5Cy1ysVHCgxvNSpDgZNgQsTyvUNfgTgpRIhmyOQkijEq80oloWN5aSPQ-tByVr-96FvpyoB8GQKbl6BGZ3hwyJWrpws-eTWPLIZRuINok=w1920-h1080",
		answer : "Die Hard"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/J0m9T7bpDxkFpwRifZJpUVR3Xkrtt9Nk3QUVeDXJJsrkDzpHkW1_BeRG3aR_rmfq-E1GPkt7y5f5-HfOOdTnZ52J5oGdCT1DN9I3HQ6i0vktLoH5u_Bn2eygjFiU6ta8R6vdDgDDSHI=w1920-h1080",
		answer : "Star Wars Episode 4 - An New Hope"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/XJc6JC-P6-HCsB0jKBcRYJ0nM1_oP1sFMxkBUOnHYmHVq_2nxrX1dSGQcUbQV4o7jr1sNtoqvv86SK68c0-pgtCE9EfPdQP_O5RK661eFdloKmLGlxYb3hgOcW4Bo6clotj7PJ-tRsU=w1920-h1080",
		answer : "Indiana Jones"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/LMEhvOeKnR0LBTzJkNtGTen-n6no_nD2NgeGw-TMZxfimmPyOeK30YoH-7A8n9QqVm46ZAiMvmVfqCRKvEXUHU6nNUbFTFQB6vU2i8yE00Q0Bc7JNXZPV4NvTF0OsJMCvaPQR-zb01w=w1920-h1080",
		answer : "Willy Wonka"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/j3ITFolL2T_If1acPvAHGbvvSgpxakgwRqAStlYFyMK8IYD1ha4dQE5EkkmJp6sDY7-cmyE2AvSbtid0_AHA0Gu9IJYR56eknnnGVxxJRFQzN9wvQu0fGoUrnM8IziU1jOVzqIK-Ops=w1920-h1080",
		answer : "Alien"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/Z1Zy8MGhGfCPUogx_zEjB7XtqlJ_A4x5YLox0v2OmYyUNXuo-xjW75wI0sf4ChVUWpz4Xuc2FBD0vqYFtesoRgo9IGxj-8u7iZbr2Zyu6-vEArORELHePLqnfGvYBd8bfL0Yp4aqWv4=w1920-h1080",
		answer : "The Blues Brothers"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/TRZFYv9bJ8WK41vbHPsiaMZLXDXXa0AwF4jtjdc0UVIZsC3LMO2ilTd9cHnufr4ov6v7EoB8Wo_G_6Ujj3GvVIH0BRSZnToUevcCTyqCMCoXpiUGDN8mC23t6E6Nc_N8RuJqoeMFluc=w1920-h1080",
		answer : "The Shawshank Redemption"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/0iFB0lViGVOxQjeg0ysgauiNEsOnCBgsYrHf1DQjbcjetog5ytjnJsbJGW-r6yd1bJlJwu-1TUbXxe0JvFWqkLoRkLzT9uUOq1vDinZPoklWE3yNAEjJm-Y4eOeVdCQ1SucOdFK9h3c=w1920-h1080",
		answer : "The Shining"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/-BnPiF7vNpvApm0LKSJY7NJZIMmRDzRMt8NFzxGWShFU9ENlN2dUvVW6iLlT7L9i_EuLLKxDbfmJoMnuv6P5kYYx7e9dVBPv6JAvDRzYvXofpPFJQcTSa9gA0SpNE9X7wUmHf47d89M=w1920-h1080",
		answer : "Star Wars - Rogue One"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/aELvrRDTktuMROee4JV_G2RE_G2nBgmoO-7qxmOfIeLFGSSm5AbyAT_n1OV2FS1aaKeVk3-1tmH7S3dmhv1dNUobp43OQlieKIEOeIkHCrZnzhzjt7AvWmO7BZ3TIsX-AwedlHvc_nw=w1920-h1080",
		answer : "Gremlins"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/9hXVzgf4pgS2kNIooGaks2pzWDRX1XEBU0L2ljJgOQ4mEjOGXKxGHRVCSlvD9WHrUXPb0z120V0VBF0VrVCxdP2Pnn8QhUVfUGEpwp1KaFweB-a4j9655p27Up658Fygkr3rj38wR-Q=w1920-h1080",
		answer : "Ghostbusters"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/RiIK1GFqHNqzySmSz3DuLY_3z0cfYG4gCDLLJ4l1KWXjVfj7WbCO0xkrW_DDs-yvxrU2GJQBOYCQCc5V5JJP-Q72ent7iL9o95-0NX85KB4eeT2outWkEJNVwVk94alX4jKjI5LH0yY=w1920-h1080",
		answer : "Lord of the Rings"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is being described",
		image : "https://lh3.googleusercontent.com/VZAxY-QreK2gQGY6F1iGsoskG9N95jjiEiD-NhyZHhd_EEi4NemeuGlzjqWMDtFn_NRXPCnDS4Ysd9lAxdGgUBPSBIF84hUKwpeGnR6LKGl2sW4kr6YgACUNOsAezovoccuk0liwDlQ=w1920-h1080",
		answer : "Titanic"
	});


quests[++questIndexBuilder] = {  //quests[35] = {
		name : "Get stoned & get yer rocks off",
		hoverover : "Questions based on stones and rocks",
		tags : "saturday,gin,19/10/2020,categoryLess",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Where are these rocks?",
		image : "https://lh3.googleusercontent.com/0gcVvu191CCQMSOkTuFO8v5qcTm2FWJw1BYj_JwGC_xm7CaEfgeA7gXBcUXdwmkp2qJVBzHHYu-7mQ7N8jytPEanGrlOwRj7hHwRrAg2R0-O8cxsv23dIBfQbUGKgyZFsgKgN3P9dU8=w1920-h1080",
		answer : "Fingal's Cave"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Name this rock",
		image : "https://lh3.googleusercontent.com/Vr1n_aJFI-nw16IFC2B9EwmHHYJ948PJtwNwD0KuklNJ7IicwvRbRJ53fK2fYDaRcvxdTFnCFjutxq00xmjtbtSw-8pyO9eEzRUxviYLrSlPP5coD00YYXvSI9tkpnuTN7w-E1ng5lI=w1920-h1080",
		answer : "Uluru / Ayres Rock"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Name this stone",
		image : "https://lh3.googleusercontent.com/gzJoER3H3pH2R9Dq_b_wazTsvC8zFFd-FHfW8bwGqzH6i7SsIlk9xv7A15804jLMhL6ihyTJW9g_MdPrPpPObIWZO61xRhQ1JRIeBJU-B43qq9LDiUxJ1N0Ps-yY_LRq99omJY5KkeE=w1920-h1080",
		answer : "Blarney"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Name this rock",
		image : "https://lh3.googleusercontent.com/_3eWqSUhjCXZGAmyncRIxmxa72_Bf43fBuZmnc_Fus2D37_ZP74i-Top3jY_6xHFWjy-lX2sxS_-hkobPmxKrPk0GeH5bkvwnDVXW0dhgc6wN8QYkyOfIC_kVpJ3AgQHfs2BtVhdk8Y=w1920-h1080",
		answer : "Blackpool or Brighton - as long as you've named a place famous for sugary rock, take a point"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What lives on this rock",
		image : "https://lh3.googleusercontent.com/TEmNWtO4mWVo80Bxh8ftXE0aBTwqiWdI-fIBvUwaAQACEHF4u-V_BachFLeOLsfR0-pq-xpNGQJBIV7LmeJiSO4bEUpS2tSTTqLvqkAEyCUunbkosb1qW-8KgZXARN-h82B4XzStr5s=w1920-h1080",
		answer : "Apes (Barbary Macaques)"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What are these boys known as collectively?",
		image : "https://lh3.googleusercontent.com/_KfvAZOnXbNYMRj64K7XPAK_RIeJBpXIb-L4WbmrzA9BZBNFO6wZ2XBNlMLVhIn3bzwjGQaQZ54NGJdF4ZxfyWOL1D8Bp8vdu_GvgD0ZNEKan4P4LVN_x3QshhTfezhhuw1d5joXCag=w1920-h1080",
		answer : "The Rolling Stones"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What rock is this?",
		image : "https://lh3.googleusercontent.com/1ALCGCxeKAA9n9EB9-dYRL6JhwWY-8xEat2hOghy_PRvG5hsrsuTOZuWv3S9ygyITYNkTdHEdw7wjJW-S8KsKV0XIz7xA3_0rs56Mvk8kIPntaktapW1bQMWn5yUUO2PM1qE5rVGIZU=w1920-h1080",
		//image : "https://lh3.googleusercontent.com/uGkvymKB0QyqmFCtwMsiqEfxSwui_vuZxAnsSBodz5PxKGr-TQ0v34kZFhmxzDcsOj6xu96j6sGdvac8QIlFW4kqq9trDCXlHuJgY5aq2yJk3x9uMOwduauBWp0FlWswazBl-elOkiM=w1920-h1080",
		answer : "Rock Barracks" //"Marsden Rock"

	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is this stone called?",
		image : "https://lh3.googleusercontent.com/RXTist4eoStwKLjTZhhHazZEmkccImLXIBMzhTB8ksnVqNeNVX2mweg2lpWBh7LdbYVNhfpClcpZ4qf5RqU44rrmv5iZcbd4scJB7ZKfX_e1cuovpjqyQcDrnQ16U3a3NAKp5XBixHw=w1920-h1080",
		answer : "Rosetta"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Where are these stones?",
		image : "https://lh3.googleusercontent.com/NoV5IwJaN9IXVOfMTFAWfdPcMW0IUi3zMhFciqrq7nLbRkGq4DqQ9ETIUzux8Xf8rqgIIwHOyfeh_2_dmjMnZT-Fqx2wD6Gza2_nQ_vZyqam8DkgSOoJ6x_DT1Sd4yc9IZTLfANOV4Y=w1920-h1080",
		answer : "Easter Island"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/FKGUlmqQJvethYVE_iZm-ysGTTgl6Bhm7BwXUoB2Y55ahB4nsQWt0I7FJz6d2UcMdbOsbT68mkO-yTLH2aqPtdogIHkSnM5oLC9Ds2xBFElmCzjION5wHic1R-lggAlJbQjTD2pOTK0=w1920-h1080",
		answer : "The Rock / Dwayne Johnson"
	});
	
quests[++questIndexBuilder] = {  //quests[29] = {
		name : "Conspicuous Consumption",
		hoverover : "Logo quiz",
		tags : "logo,saturday,categoryLess",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/-8dIILpj1NkrHgTNnIFNP0T6VdbZAmC-zei0R_hHN0xHMKhgaRsDPQ4B5MIm3N6JhbH2HZe7KHdWcOYaUtEQrO51AZGFl8YSza-ND99Ocug9tmZxA__aXztPbIMgvdcSgk-TKmGzohc=w1920-h1080",
		answer : "Monster"  });
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/FyaXwxAUIL84-ql8_zFUEMdSK77KcOl7Zg9Y7RuzrQRSj2Fj98QureFMs1QObsEoNtcq61JKmFQovjVUgeaxgb-YW8ms5LyHm6wDXdE4NoWeeI2AEPDumSsXiP9kXVOygvWTIk6e11o=w1920-h1080",
		answer : "Shell"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/VrWq8dE_Loh_XRzbD2LvS6ux_P0ytYfE6XvvPBnK0b6s85FaWhIXPa8twFdUJReXr5gLRhUkoKxs9JS2a14c2nUC-_SNz-ZwVGhIMbW1aIT7gngJyxhoKAafD-b_ttkSVvoLW99YbdE=w1920-h1080",
		answer : "Wikipedia"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/wF29bBahU77CRXR0hO5-1j2X-fjesEZhTPtsCzYO5UUG91juS7H5YrzSX0ZioiYS0Lgo3nCvsXCkwidZCD_a_0XyyN83UWJP2ctYtK_ADsHQIw9wCxNHf63BHgEs7Sf8JtxOLIYdaXc=w1920-h1080",
		answer : "Apple"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/X-ZS-_3HJPqfOnY-y5pOZACWlr1KYk_MTOiK4D34dGvkSODGDMZaVi0ATTm3DDtywgS1_n6p7XJC6-kR54xFBWqVp2Rja2g_o0GiJa_N8UdbgyIpdepxitAkTpByN3ixq4VNwm50BYs=w1920-h1080",
		answer : "Pringles"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/9-RBMXL-Bn_CW2TSJwJttIX7sJFMI7R8eGGWwAs1V6fZBoMNglQV80wl4cFt__hpbr_vROc8AtXQ8DGTPpH8-gnn_r1UPC0l5nQHkRzn0i5pwvDgymWNdWek3guHK3QqRwsmcGjHUGc=w1920-h1080",
		answer : "Atari"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/VOls4_UqSQLMjHtK06L01G-HTrPv7QwNDJT2uycEqFGNf91uh32J8kI9gvcyzLX8vvS-DDc8GCpPQu7B3nZMBtlHwaABhgLxm5PzOKy7hr0XUT2liFILh89dFyQGtDi5XM6nLu_CTnY=w1920-h1080",
		answer : "Playstation"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/t3jSSJ_gHnBfC_iOHNQprtZKaLoAVAKRhDHSXYtqXZUwt0jT6ZTO5TLxEaov2fuVsDNCILomt-3xqzfh_nOv0H4cf_QwfAyDmugg4Yh2MX7cPRQn5RltLFJZjpDbvFqpRi8Cgf0HRLU=w1920-h1080",
		answer : "Amazon"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/25zFF794bbwvNWgGJgPSBuNdy0oWGHevoX3vW31e7-Ew0r5f0vUNYK4h77hYet4xB7eeLAu3EvBvbbepkMIK_emHZRX8ApQxZt8MHwvRjcIkLIIbTlkRqA-YQHOM6wSv2WhRVxRqk_s=w1920-h1080",
		answer : "BP"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/7MwqHEE-73iAJjrA5vHGVT9oaHvHMjCnF6rlv9jg8b7vg0KiQUZGtr-N5_Mz3sUjHDFv-zZPchmisCQATQhcX5xz_TvcbhZkzXa2tPbyGYB5uKcrmvyhe9e_UePTt05KfAafYPL-HTk=w1920-h1080",
		answer : "KFC"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/sZ-s6x8jbE3vV6wSKtQ8hONuYO0JYqJOfNA3-knJIebwgTuBFVyux4CzLX0W1dI-3WCBX1A9dROtvgQZT3MJydn0QVpwSRcOu6_PlXLYFO-sSAk34FRxcgtIS6chlYeRzk6kH6PRIzQ=w1920-h1080",
		answer : "Firestone"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/xBqadt36AfqRABtqdWWZdm6s8vWYln19h3W1gBqJpNcFo151oiY_ECkTlGWeAKXmzUVLQYj2WDbsJnT9NSfhB0qwjwnhrcMIu1pmfWck7rhQlDzULEydbYxZhdZi1T6ESMO8SNxCCxU=w1920-h1080",
		answer : "Pepsi"});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who does this logo belong to?",
		image : "https://lh3.googleusercontent.com/LQ51S9XhTR39q6B5FE021n9I9wtS6oyoNdj1CokbS-9zQxn9YlwMkOp5O9xptec5EY_zqbLfBlg1YoPJX9dFzYJ3anWRapgtEj8g6gVhD4E7l4HotkVUqhqnuqpYqYaAOrwBsWshVCs=w1920-h1080",
		answer : "Skoda"	});
	
quests[++questIndexBuilder] = {  //	quests[52] = {
			name : "Sold",
			hoverover : "Guess the brand from their slogan",
			tags : "logo,saturday,26/9/2020,surfers,categoryLess",
			questInfo: new Array()
		};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Because you're worth it?",
		answer : "L'Oreal"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Challenge Everything?",
		answer : "EA Games"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Vorsprung durch technik?",
		answer : "Audi"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The makeup of makeup artists?",
		answer : "Max Factor"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Probably the best lager in the world?",
		answer : "Carlsberg"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Live well for less?",
		answer : "Sainsburies"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The world's local bank?",
		answer : "HSBC"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "It's a bit of an animal?",
		answer : "Peperami"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "It does exactly what it says on the tin?",
		answer : "Ronseal"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Work, rest, play?",
		answer : "Mars"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Reassuringly expensive?",
		answer : "Stella Artois"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "You're not you when you're hungry?",
		answer : "Snickers"
	});

quests[++questIndexBuilder] = {  //	quests[53] = {
			name : "Dingbats",
			hoverover : "Guess the phrase",
			tags : "saturday,26/9/2020,categoryLess",
			questInfo: new Array()
		};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Guess the phrases",
		image : "https://lh3.googleusercontent.com/UrVz5BkYUHswMwfvJymjEcl_Vm1zW3FuLb2LJ-9C5hPz-KSPFHIag704uFkUYmnmxnhB8xgZTLwb7J48ERtH_o58n6hIP3MZiiqz7h2cvnND9XfE6FuqsdMFLbNkmA4oB4R78B85JxA=w1920-h1080",
		answer : "1) Don't talk back  2) Long John Silver   3) A cut above the rest  4) Potatoe  5) Palindrome 6) Long time no see  7) Misunderstanding  8) The 3 Musketeers  9) A hole in one  10) A square meal"
	});

quests[++questIndexBuilder] = {  //	quests[54] = {
			name : "Tru Dat",
			hoverover : "True or False",
			tags : "saturday,26/9/2020,categoryLess",
			questInfo: new Array()
		};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A man from the USA consumed his 26,000th Big Mac on 11th October 2012, after eating at least one a day for forty years. (11th October 2012)?",
		answer : "True"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The longest distance swam underwater in one breath is 200metres. (6th November 2008)?",
		answer : "True"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The fastest time to eat 15 Ferrero Rocher is 1 minute 10 seconds. (24th October 2014)?",
		answer : "False - it is 2 minutes 22 seconds"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The record for most needles inserted into the head is 15,000. (11th June 2013)?",
		answer : "False - it is 2,188"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The world's longest legs belong to a Russian lady and measure 132cm (51.9 inches) (8th July 2003)?",
		answer : "True"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The heaviest aircraft pulled by a single man weighed 188.83 tonnes and was pulled 8.8 metres. (17th September 2009)?",
		answer : "True"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The record for the fastest time to solve a Rubik's Cube one-handed is 37 seconds. (26th April 2014)?",
		answer : "False - it is 12.56 seconds"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The world's tallest living man is 251cm / 8 ft 3 in. (9th February 2011)?",
		answer : "True"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The most expensive car number plate, showing only the number '1', was bought in the United Arab Emirates for 52.2 million dirham, the approximate equivalent of 7.2 million GBP. (16th February 2008)?",
		answer : "True"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "The record for the longest rail tunnel is held by the Channel Tunnel between Britain and France. (15th October 2010)?",
		answer : "False - it is held by the Gotthard Rail Tunnel, Switzerland, beneath the Alps and measures 35.42 miles. The Channel Tunnel is 31.4 miles"
	});

quests[++questIndexBuilder] = {  //	quests[56] = {
			name : "Saintly",
			hoverover : "Patron Saint of cheese might be St. Ilton",
			tags : "saturday,3/10/2020,surfers,categoryLess",
			questInfo: new Array()
		};	

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of Flatfish",
		answer : "St Ingray"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of Snooker",
		answer : "St. Eve Davis"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of not sitting",
		answer : "St. Anding"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of Extra Terrestrials",
		answer : "St. Even Spielberg"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of Apples",
		answer : "St. Eve Jobs"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of scary books",
		answer : "St. Ephen King"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of escapes",
		answer : "St. Eve McQueen"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of idiocy",
		answer : "St. Upid"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of Physics",
		answer : "St. Ephen Hawking"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint 80s rock",
		answer : "St. And And Deliver or St.eve Strange"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of Cider",
		answer : "St. Rongbow"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of Vincent Van Gogh",
		answer : "St. Arry Arry Night"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of Rab C Nesbitt",
		answer : "St Ring Vest"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of dirty towns",
		answer : "St. Aines"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Patron Saint of END THIS NOW",
		answer : "St. Op"
	});	
	
	

quests[++questIndexBuilder] = {  //	quests[56] = {
		name : "15 Q in this Q",
		hoverover : "15 Questions in this Quiz",
		tags : "saturday,3/10/2020,surfers,categoryLess,Weever",
		questInfo: new Array()
	};	
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "15 M on a DMC",
		answer : "15 Men on a Dead Mans Chest"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "36 I in a Y",
		answer : "36 Inches in a Yard"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "26 L in the A",
		answer : "26 Letters in the Alphabet"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "52 C in a P",
		answer : "52 Cards in a Pack"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "28 D in F",
		answer : "28 Days in February"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "7 D in SW",
		answer : "7 Dwarfs in Snow White"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "4 W on a C",
		answer : "4 Wheels on a Car"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "24 H from T",
		answer : "24 Hours from Tulsa"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "12 S of the Z",
		answer : "12 Signs of the Zodiac"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "18 H on a GC",
		answer : "18 Holes on a Golf Course"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "7 C in a R",
		answer : "7 Colours in a Rainbow"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "12 M in a Y",
		answer : "12 Months in a Year"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "9 P in the SS",
		answer : "9 Planets in the Solar System"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "1 T on a H",
		answer : "1 Thumb on a Hand"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "10 G B H on a W",
		answer : "10 Green Bottles Hanging on a Wall"
	});
	

quests[++questIndexBuilder] = {  //quests[0] = {
		name : "Give me a P please Bob",
		hoverover : "Names beginning P* P*",
		tags : "saturday,letters",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What P was married to Elvis",
		answer : "Priscilla Presley"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "What P never grew up",
		answer : "Peter Pan"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "What P was Home Secretary since July 2019 (until at least Dec 2020)",
		answer : "Priti Patel"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What P was a big biblical baddie",
		answer : "Pontius Pilate"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What P painted 2-faced people",
		answer : "Pablo Picasso"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What P was a pepper picker",
		answer : "Peter Piper"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What P is being made here 'ADD THE BASIL LEAVES, GARLIC, TOASTED PINE NUTS AND OLIVE OIL'",
		answer : "Pesto"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What P is being made here 'FOLD IN HALF, THEN IN HALF AGAIN TO FORM TRIANGLES, OR SIMPLY ROLL THEM UP'",
		answer : "Pancakes"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What P is being made here 'DRAIN THE LETTUCE AND ARRANGE IN MARTINI GLASSES'",
		answer : "Prawn Cocktail"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What P is being made here 'PUT THE NOZZLE INTO THE HOLE AND PIPE UNTIL THE CAVITY FILLS WITH CREAM AND THE BUN FEELS HEAVY'",
		answer : "Profiteroles"
	});

quests[++questIndexBuilder] = {  //quests[3] = {
		name : "Q-Q-Q-Q-Questions",
		hoverover : "Words or Names beginning with Q",
		tags : "saturday,letters",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : " Q Foodstuffs: DELICIOUS SAVOURY FRENCH TART THAT WE WERE TOLD, IN THE '80s, 'REAL MEN DON'T EAT'",
		answer : "Quiche"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : " Q Foodstuffs: FRUIT THAT LOOKS LIKE A YELLOW PEAR",
		answer : "Quince"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : " Q Foodstuffs: HOT INGREDIENT IN A GREGGS' VEGAN SAUSAGE ROLL",
		answer : "Quorn"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : " Q Foodstuffs: WET SUBSTANCE THAT'S LIKE COTTAGE CHEESE, THAT'S EATEN BY THE BUCKETLOAD IN GERMANY, AND THAT SHARES IT'S NAME WITH AN ELEMENTARY PARTICLE",
		answer : "Quark"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : " Q Foodstuffs: PIZZA CHOICE FOR THE INFURIATINGLY INDECISIVE",
		answer : "QUATTRO STAGIONI (OR QUATTRO FORMAGGI)"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : " Q Foodstuffs: SOURCE OF THE BITTERNESS IN A G&T",
		answer : "Quinine"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : " Q Foodstuffs: IN THE METRIC-USING MCDONALDS WORLD, IT'S KNOWN AS 'HAMBURGER ROYALE', 'McROYAL', ETC",
		answer : "Quarter-Pounder"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : " Q Foodstuffs: NO-ONE'S SURE HOW TO PRONOUNCE IT",
		answer : "QUINOA"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What show is this:  ONE QUIET MIST (8,4) (Shouty Thursday night ding-dong)",
		answer : "Question Time"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What show is this:  MISTRESS, MASSAGE THEN CHEQUE (3,6,9,7)  (It's once a year at exactly the same time)",
		answer : "The Queen's Christmas Message"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What show is this:  STOP FOR EQUATIONS (1,8,2,5) (quiz that recently celebrated it's 50th anniversary",
		answer : "A Question of Sport"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What show is this:  IQ",
		answer : "QI"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What Movie is this:  DANIEL CRAIG / THROWN THROUGH A WINDOW / SHAKEN NOT STIRRED",
		answer : "A Quantom of Solace"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What Movie is this:  PROFESSOR / PRIZE MONEY / INVESTIGATION",
		answer : "Quiz Show"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What Movie is this:  BRIGHTON ENGLAND / MOTORCYCLE / MOD",
		answer : "Quadrophenia"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What Movie is this:  TONY BLAIR CHARACTER / DECORUM / BUCKINGHAM PALACE",
		answer : "The Queen"
	});

	
quests[++questIndexBuilder] = {  //quests[7] = {
		name : "A very R-r-r-r-d quiz",
		hoverover : "Words or Names beginning with R",
		tags : "saturday,letters",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about: ACTOR WHO PLAYS THE SLEAZEBAG IN INDECENT PROPOSAL",
		answer : "Robert Redford"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about: Who might you say 'CONSONANT PLEASE' to",
		answer : "Rachel Riley"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about: SHE ALSO USED THE NAME BARBARA VINE AND IS BEST LOVED FOR HER CRIME NOVELS FEATURING CHIEF INSPECTOR WEXFORD",
		answer : "Ruth Rendell"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about: IN 1988, SOMEONE APPARENTLY STITCHED UP THIS LARGE-EARED ANIMATED HERO",
		answer : "Roger Rabbit"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about: FIRST WINNER OF THE BBC'S POT BLACK",
		answer : "Ray Reardon"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about which sitcom: JIM, BARBARA, DENISE & ANTONY; A LIVING ROOM IN MANCHESTER",
		answer : "Royale Family"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about which sitcom: ALAN, PHILIP, RUTH & RIGSBY; BEDSITS IN LEEDS",
		answer : "Rising Damp"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about which sitcom: LISTER, RIMMER, HOLLY & THE CAT; A SPACESHIP IN SPACE",
		answer : "Red Dwarf"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about: RIVER THAT CONNECTS THE ALPS TO ROTTERDAM",
		answer : "Rhine"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about a woman's name that: IS ALSO A HERB THAT HAS PURPLE FLOWERS",
		answer : "Rosemary"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Think r-r-r-r-d about a woman's name that: IS ALSO A FLOWER WITH A FRUIT CALLED THE HIP",
		answer : "Rose"
	});

quests[++questIndexBuilder] = {  //quests[17] = {
		name : "Saucy Scamps",
		hoverover : "Words or names starting with S",
		tags : "saturday,letters",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "SHE PLAYED CATHERINE TRAMELL IN BASIC INSTINCT AND BASIC INSTINCT 2",
		answer : "Sharon Stone"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "HE DIDN'T KNOW WHAT WAS GOING ON BEHIND THE GREEN DOOR",
		answer : "Shakin' Stevens"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "BLOCKBUSTER FILM DIRECTOR - Directed lots of the films mentioned already",
		answer : "Steven Spielberg"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "ONE OF THE ORIGINAL PRESENTERS OF TVAM AND FRIEND OF RANDY ANDY",
		answer : "Selina Scott"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "SEVENTH-DAN BLACK BELT IN AIKIDO WHOSE FILMS HAVE TITLES LIKE HARD TO KILL, OUT FOR A KILL, DRIVEN TO KILL AND CONTRACT TO KILL",
		answer : "Steven Seagal"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "SCOTTISH, BUT YOU'D FIND HER IN TEXAS",
		answer : "Sharleen Spiteri"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "NOT THELMA",
		answer : "Susan Sarandan"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "FORMER AUSTRALIAN CRICKET CAPTAIN WHO CRIED AFTER BEING FOUND GUILTY OF HIS PART IN A BALL-TAMPERING INCIDENT",
		answer : "Steve Smith"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "HIS 'WRITING'S ON THE WALL' WAS THE BIG BOND THEME FOR SPECTRE",
		answer : "Sam Smith"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "HE WROTE THE SCREENPLAY FOR 'ROCKY' IN 3 1/2 DAYS",
		answer : "Sylvester Stallone"
	});

quests[++questIndexBuilder] = {  //quests[20] = {
		name : "Unbelievably Hard",
		hoverover : "Words or names beginning with U",
		tags : "saturday,letters",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Whose Surname starts with 'U' - Midge, whose band name also began with 'U'?",
		answer : "Ure"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Whose Surname starts with 'U' - Peter, raconteur?",
		answer : "Ustinov"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Whose Surname starts with 'U' - Tracey, who was 3 of a kind and her US show was The Simpsons first home?",
		answer : "Ullman"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What 'U' word is pronounced with the stress on the first syllable in the BBC Pronunciation Guide, which pointedly adds 'this is the preferred usage of astronomers'?",
		answer : "Uranus"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What 'U' song was a Showaddywaddy reworking of a Doo-Wap classic?",
		answer : "Under the moon of love"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does the 'U' stand for in UFO?",
		answer : "Unidentified"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does the 'U' stand for in POTUS?",
		answer : "United"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does the 'U' stand for in USB?",
		answer : "Universal"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does the 'U' stand for in UB40?",
		answer : "Unemployment"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does the 'U' stand for in UNESCO?",
		answer : "United"
	});
quests[++questIndexBuilder] = {  //	quests[30] = {
		name : "Famous Vans",
		hoverover : "Exactly what the title says",
		tags : "saturday,surfers,letters",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "WHO THE SONG VINCENT IS ABOUT",
		answer : "VINCENT VAN GOGH"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "BASILDON-BORN THE BIG BREAKFAST HOST",
		answer : "DENISE VAN OUTEN"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "ROBERT WHO INVENTED A MACHINE THAT CAUSES LAUGHTER IN PHYSICS CLASSES WHEN THE TEACHER'S HAIR STANDS ON END",
		answer : "VAN DE GRAAFF"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "WROTE 'MOONDANCE' AND 'BROWN EYED GIRL'. REAL FIRST NAME GEORGE IVAN",
		answer : "VAN MORRISON"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "RIP WHOSE TALE WAS FIRST TOLD IN 1819",
		answer : "RIP VAN WINKLE"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "FAMOUSLY DEAF COMPOSER",
		answer : "LUDWIG VAN BEETHOVEN"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "EDDIE WHO PLAYED THE BLISTERING GUITAR SOLO ON 'BEAT IT'",
		answer : "VAN HALEN"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "BELGIAN WHO WAS IN THE SAME FRIENDS EPISODE AS BROOKE SHIELDS",
		answer : "JEAN-CLAUDE VAN DAMME"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Alternative name for Tasmania",
		answer : "Van Diemen's Land"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What 1967 Reliant Regal Supervan III had the registration DHV 938D",
		answer : "The Trotters Independent Trading Co van"
	});
quests[++questIndexBuilder] = {  //quests[31] = {
		name : "Whatever do We have here",
		hoverover : "Words and names starting with W",
		tags : "saturday,letters",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "POET LAUREATE WHO WANDERED LONELY AS A CLOUD",
		answer : "William Wordsworth"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "YE MAY TAK' AWA' HIS LIFE BUT YE’LL NEVER TAK’ HIS FREEDOM",
		answer : "William Wallace"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "I'VE BEEN PLAYED BY BOTH GENE WILDER AND JOHNNY DEPP",
		answer : "Willy Wonka"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "AMERICAN PRESIDENT THAT WOODY GUTHRIE WAS NAMED AFTER",
		answer : "Woodrow Wilson"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "SUPERHERO WHO, INTERESTINGLY, WAS DEVISED BY THE INVENTOR OF THE LIE DETECTOR",
		answer : "Wonder Woman"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "CARTOON CHARACTER DEVISED WHEN A NOISY BIRD DISTURBED AN ANIMATOR'S HONEYMOON",
		answer : "Woody Woodpecker"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What is the most successful movie based on a sketch from Saturday Night Live?",
		answer : "Wayne's World"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A word that begins & ends with 'W':  W_W (Blimey!  3)",
		answer : "Wow"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A word that begins & ends with 'W':  W----W (Porthole, bay, stained glass etc, 6)",
		answer : "Window"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A word that begins & ends with 'W':  W----W (They make cricket bats out of it, 6)",
		answer : "Willow"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A word that begins & ends with 'W':  W------W (Pull out, 8)",
		answer : "Withdraw"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A word that begins & ends with 'W':  W---------W (A type of race, or a type of garden equipment, 11)",
		answer : "Wheelbarrow"
	});

quests[++questIndexBuilder] = {  //quests[36] = {
		name : "eXtremely hard",
		hoverover : "Words or names starting with X",
		tags : "saturday,letters",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "ACTOR. SHE AUDITIONED TO PLAY RACHEL BUT PLAYED ANOTHER FRIEND INSTEAD",
		answer : "Courtney Cox"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "GUITARIST. HE DID A VERSION OF BOB DYLAN'S 'ALL ALONG THE WATCHTOWER' THAT BOB DYLAN PREFERS.",
		answer : "Jimmy Hendrix"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "POLITICAL THINKER WITH DISTINCTIVE FACIAL HAIR WHO SAID THAT HISTORY REPEATS ITSELF AS FARCE",
		answer : "Karl Marx"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "SINGER. DAVE STEWART IS HER MATE",
		answer : "Annie Lennox"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What animal is described in Wikipedia like this 'CAN PULL HEAVIER LOADS FOR A LONGER PERIOD OF TIME THAN A HORSE'",
		answer : "Ox"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "BOROUGH THAT'S HOME TO NEW YORK'S BOTANICAL GARDENS",
		answer : "The Bronx"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "WEST-COAST FRENCH PORT THAT EXPORTS AN ABSOLUTE TONNE OF WINE",
		answer : "Bordeaux"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "RIVER THAT ALL OF THE YOUNG ACHILLES (EXCEPT HIS HEEL) WAS DIPPED IN",
		answer : "Styx"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the brand which had the following slogan: 'SOFT, STRONG AND VERY VERY LONG'",
		answer : "Andrex"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the brand which had the following slogan: 'THE WORLD'S MOST POWERFUL CONSOLE'",
		answer : "XBox"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the brand which had the following slogan: 'THE LONGER LASTING SNACK'",
		answer : "Twix"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the brand which had the following slogan: 'YOU FIND THE COLOUR, WE'LL MATCH IT'",
		answer : "Dulux"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the brand which had the following slogan: 'TO ALL THOSE WHO USE OUR COMPETITORS' PRODUCTS: HAPPY FATHER'S DAY'",
		answer : "Durex"
	});

quests[++questIndexBuilder] = {  //quests[37] = {
		name : "Yolo",
		hoverover : "Words or names starting with Y",
		tags : "saturday,letters",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "THEY RENAMED THE COSMONAUT TRAINING CENTRE AFTER HIM",
	answer : "YURI GAGARIN"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "HE WON THE FRENCH OPEN IN 1983",
	answer : "YANNICK NOAH"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "ACTOR WHO WASN'T ACTUALLY BALD",
	answer : "YUL BRYNNER"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "FASHION DESIGNER AND INVENTOR OF THE FEMALE TUXEDO",
	answer : "YVES SAINT LAURENT"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "HE WEARS NOTHING BUT A HAT AND A TIE",
	answer : "YOGI BEAR"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "SHE FUNDED ICELAND'S 'IMAGINE' PEACE TOWER",
	answer : "YOKO ONO"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Wikipedia describes which animal as 'A POPULAR COMPANION DOG'",
	answer : "YORKSHIRE TERRIER"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Wikipedia describes which animal as 'ITS SONG HAS A RHYTHM LIKE 'A LITTLE BIT OF BREAD AND NO CHEESE'",
	answer : "YELLOWHAMMER"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Wikipedia describes which animal as 'THE PRACTICE HAS CHANGED SINCE THE INTRODUCTION OF 'DOLPHIN-FRIENDLY' LABELLING'",
	answer : "YELLOWFIN TUNA"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Wikipedia describes which animal as 'STURDY LEGS, CLOVEN HOOVES, AND EXTREMELY DENSE FUR'",
	answer : "YAK"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the song.  PAUL McCARTNEY'S WORKING LYRIC WAS 'SCRAMBLED EGGS / OH MY BABY HOW I LOVE YOUR LEGS'",
	answer : "YESTERDAY"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the song.  THE VIDEO IS JUST CHRIS MARTIN GETTING WET ON A BEACH",
	answer : "YELLOW"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the song.  POP SONG WITH PREDICTIONS FOR 998 YEARS AFTER ITS RELEASE",
	answer : "YEAR 3000"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the song.  THE 'Y' OF THE LYRIC HAS ITS OWN DANCE POSE (AS DO THE OTHER COMPONENTS OF THE TITLE)",
	answer : "Y.M.C.A."
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the song.  SONG ABOUT A SPANISH HOLIDAY",
	answer : "Y VIVA ESPANA"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the song.  ROCK 'N ROLL CLASSIC ABOUT BEING OBLIGED TO DO HOUSEHOLD CHORES. THEME TUNE TO CLIVE ANDERSON TALKS BACK.",
	answer : "YAKETY YAK"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the song.  PAUL McCARTNEY ORIGINALLY INTENDED FOR IT TO BE ABOUT VEHICLES OF OTHER COLOURS TOO",
	answer : "YELLOW SUBMARINE"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the movie. 90s ROMCOM NAMED AFTER AN AOL ALERT",
	answer : "YOU'VE GOT MAIL"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the movie. SPY MOVIE NAMED AFTER A LINE FROM JAMES BOND'S ATTEMPT AT A HAIKU",
	answer : "YOU ONLY LIVE TWICE"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Name the movie. COMEDY NAMED AFTER THE THREE-PERSON SET-UP WHEN OWEN WILSON OUTSTAYS HIS WELCOME",
	answer : "YOU, ME AND DUPREE"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does the 'Y' stand for in: DIY",
	answer : "Yourself"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does the 'Y' stand for in: NIMBY",
	answer : "Yard"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does the 'Y' stand for in: BYOB",
	answer : "Your"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "What does the 'Y' stand for in: NYPD",
	answer : "York"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Y-Y (Exclamation of happy agreement - 3)",
	answer : "YAY"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Y---Y (Unpleasant - 5)",
	answer : "YUCKY"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Y---Y (Not unpleasant. Quite the opposite in fact - 5)",
	answer : "YUMMY"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Y----Y (How you pay your taxes - 6)",
	answer : "YEARLY"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Y-------Y (Friday - 9)",
	answer : "YESTERDAY"
});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Y--------Y (Done with adolescent vigour - 10)",
	answer : "YOUTHFULLY"
});


quests[++questIndexBuilder] = {  //quests[51] = {
		name : "Zee end",
		hoverover : "Answers all start with Z",
		tags : "saturday,letters",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "BILLY WHO PLAYED CALEDON HOCKLEY IN TITANIC?",
		answer : "Zane"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "RENEE WHO'S PLAYED JUDY, ROXIE AND BRIDGET?",
		answer : "Zellweger"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "BENJAMIN WHO TURNED DOWN AN OBE FOR HIS POETRY?",
		answer : "Zephaniah"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "CATHERINE WHO ACCEPTED A CBE FOR HER ACTING AND HUMANITARIANISM?",
		answer : "Zeta-Jones"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "FRANK WHO SAID 'ROCK JOURNALISM IS PEOPLE WHO CAN'T WRITE, INTERVIEWING PEOPLE WHO CAN'T TALK, IN ORDER TO PROVIDE ARTICLES FOR PEOPLE WHO CAN'T READ'?",
		answer : "Zappa"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "COUNT FERDINAND WHO INVENTED A RIGID KIND OF AIRSHIP?",
		answer : "(Von) Zeppelin"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "HANS WHO HAS RECEIVED 11 OSCAR NOMINATIONS FOR HIS MUSIC, BUT DID NOT INVENT THE WALKING FRAME?",
		answer : "Zimmer"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "ROBERT WHO CHANGED HIS SURNAME BEFORE RECORDING 39 (AND COUNTING) ALBUMS?",
		answer : "Zimmerman"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "I'm hungry again. I'm going to sit down and enjoy some courgettes from America with a robust red wine made from a black grape, followed by an ice lolly invented by Lyons Maid in 1963. For three points what three items are on my menu?",
		answer : "ZUCCHINI; ZINFANDEL; ZOOM"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "Of all the Texan rock trios, which always comes last alphabetically?",
		answer : "ZZ Top"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "THERE IS ONE ANIMAL WHICH SHOULD ALWAYS MAKES SELF-SERVICE TILLS GOES 'BEEP'. NAME THE ANIMAL?",
		answer : "Zebra"
	});

quests[++questIndexBuilder] = { //quests[10] = {
		name : "Name the band",
		hoverover : "Name the bands from the gif",
		tags : "gin,saturday",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : '',
		spotify : '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTFS0ioY_80AznY_04yr-mesC8CahAKNO4rUeR45xjUh7a2gIKFuOZlYQ4AGQrOARcb0BJsKZoLKNcM/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
		answer : "Click the presentation to move it along"
	});


quests[++questIndexBuilder] = { //quests[11] = {
		name : "Name the Ian's",
		hoverover : "Everyone loves Ians.  How many can you recognise",
		tags : "gin,saturday",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : '',
	spotify : '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRLux5wF0KqAq69FylKlLOz8tv1m2pBUfQTpd-txSAutEdeSW5rXEC5J6Z9ZTS4caRbILadSTVHgsYL/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
	answer : "Click the presentation to move it along"
});
quests[++questIndexBuilder] = { //quests[12] = {
		name : "Masking my true intentions",
		hoverover : "Questions based around masks",
		tags : "saturday",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : '',
	spotify : '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRzPaDPQkdmnQTCxKNtLTi1WBNtF0poi8SdmfLVDcgdKaM3BMgrhVpnvRPjAq3WrOrls1kkNhzGLvpp/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
	answer : "Click the presentation to move it along"
});
quests[++questIndexBuilder] = { //quests[16] = {
		name : "Movie Posters",
		hoverover : "Guess the movie from the altered poster",
		tags : "saturday,movies",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is this poster from?",
		image : "https://lh3.googleusercontent.com/o3wM7Rlsymfs1zk7MVPvwBfUSnUXI2cMh5EK7GGhsK6sE5FHb_lEMjZ68hXhAv3Z9aToPu_oertdAVcxNIgQutBvN1RY3Zj7RdhUO37UspHslxNxbo8g847N4nS5Icq42Z-saViuvww=w1920-h1080",
		answer : "127 Hours"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is this poster from?",
		image : "https://lh3.googleusercontent.com/TtH2YQ_g5y_1v3O7dhXkrd52BqXybuGUxlQTauP1FpsMybmdC6ocmQXhOc7SzIsKq100fSVPpEVouKoWpEMeMyA6vdzUrpgc_RhLwABfG4jUAzzcJPXW2cuygZmiSL89Q4Pfw-E44bk=w1920-h1080",
		answer : "The Exorcist"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is this poster from?",
		image : "https://lh3.googleusercontent.com/dVpwT1gFN7BylCzNX6DQKzT-IxS5lKU1IpqYmVrTeR2n-YA8PHwOuzxeXUyLRi4DgKVXg1TN2Y7pBn_adYQWhE9zOLvIpk7Hlw5L0dnDIC1pKO6Kri26_M21953rHExeekS4KVqK_dk=w1920-h1080",
		answer : "The Adams Family"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is this poster from?",
		image : "https://lh3.googleusercontent.com/iixdjuNWTzFsiNRjPfrKPeFK2ZX-qULYCf2nq9b0cF5ok3oDB3clubLuJOlNB7yCak8iKF9bKwvLIKWozDr1QCVRHl-u3K5A8GWD5u2GBGhsrvxbomnz3lHwGG-PYXLOpj0h1bpsKWA=w1920-h1080",
		answer : "A Clockwork Orange"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is this poster from?",
		image : "https://lh3.googleusercontent.com/83Bd4vCa8HyH94-xIHB0x-NbPuon1fr5rz6LEC2iWI665ebnRf48N9jxV96TIDBERbHiMlI_pQBXcxTU9Dqb6cTuLrYda77xZQgpKlmA-yjV5OiScakRi-QQSmLN7xlhCcQmBvd79Y4=w1920-h1080",
		answer : "Apocalypse Now"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is this poster from?",
		image : "https://lh3.googleusercontent.com/lpBl6z_whQ8d-FSUAkoeN1_iolH6Lo3bniX_sNwhe0oFxtmO5P1HtipOTfCHUiiKDB5QMk1kmPCetqbs6r6I9deWqK--I8VKzpbYY5WXM1Zwpx5TiVhQQ0MAmO-gzDtnu0flfgTWrhw=w1920-h1080",
		answer : "Alien"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is this poster from?",
		image : "https://lh3.googleusercontent.com/86EzzY9Ma0nhBvJd19ZkKdfUpJf9F3JxTeBngsz-KgxkjqgPxh65E_qd8JwyEZXYSP4k9UfpHOmVU_sCCmpmfjTAFhQTm5xBotLc8YjELqaIMtrdqchrdKh23Vklcoto6329RgoFek4=w1920-h1080",
		answer : "Jurassic Park"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is this poster from?",
		image : "https://lh3.googleusercontent.com/Jbtw5fKNP41Cn_90RAGxZwIROyeMKG8aXJG0sZLtX-1Nu35UpbMIjP7TwfpemIRZcnobzYYu5vE5u8D-tb4ntd2H8hq8oAU2e80_pnZIWCfcxWb_npWDEpIzdbaasgzgW_GIrdJGu9k=w1920-h1080",
		answer : "Jaws"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is this poster from?",
		image : "https://lh3.googleusercontent.com/tanBL005CepUiOhIzoP82rfsTJl80NxtjKyph8DEezypNRk2xa3_m7RTk0yBCnVesXXL1FImg7U_No91VpkcfYOckAIqTvkFjBo_ewdx4Z2HHKCPphDPZRfXDIqqmZ_DjKSVoKz8ZQc=w1920-h1080",
		answer : "Forrest Gump"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What movie is this poster from?",
		image : "https://lh3.googleusercontent.com/MzegFIpHwEb_ou-DOsqgeulo2N3B2L4Qf5s1nQUsJCA3GuskuGVvrEuATWxAbZOO0JuHTPigt6sO-2Ks6ndSny_wP5KjGnc9IbJFPvUcvl_CTySSJp9QarWWBOJLI6zHqrUiz_X2rjM=w1920-h1080",
		answer : "Gremlins"
	});

quests[++questIndexBuilder] = { //quests[47] = {
		name : "Collectively we are stong",
		hoverover : "Collective nouns",
		tags : "saturday",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A group of owls - torrent, squadron, tombola, parliament",
		answer : "Parliament"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A group of Flamingoes - flounce, spangle, flamboyance, parade",
		answer : "Flamboyance"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A group of Iguanas - outrage, slaughter, sketch, lurk",
		answer : "Slaughter"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A group of Jellyfish - pulse, waft, smack, skid",
		answer : "Smack"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A group of Hedgehogs - tumble, prickle, nibble, waddle",
		answer : "Prickle"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A group of Crows - intimidation, atrocity, alarm, murder",
		answer : "Murder"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A group of Foxes - quality, example, charm, jive",
		answer : "Charm"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A group of Peacocks - liberty, arrogance, ostentation, swagger",
		answer : "Ostentation"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A group of Giraffes - hike, reach, clamber, tower",
		answer : "Tower"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "A group of Apes - pertinence, observation, judgement, shrewdness",
		answer : "Shrewdness"
	});

quests[++questIndexBuilder] = { //quests[38] = {
		name : "ID Parade",
		hoverover : "Name the actor/actress",
		tags : "saturday,surfers",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/XtoHjDgHXZLYhmjrHFzC6flFWttiEoUEYHMklUhedzQZZeakmkmWcNb5V9dqOI-V5aoqo7KxbdqNZ1ISHpgTbeO6sSeMIZz-aZOCfH8lvzMSx3J3zrXLlVVG-cIJ7EA-MAYqIN84RO8=w1920-h1080",
		answer : "Alec Guinness"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/k5j4_M5_-0g-pvBVlumg5ILSXHE4oSlDNGvT8ANPagchKAR-fRSCam8219O91jusbgX5EjVQ666giKQIaKbdlBdilG3g2j1Fhy4fzh-dy4DcimetSrz6W16uo9PAXmQtNC1mRA3GP-g=w1920-h1080",
		answer : "Alec Guinness"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/QQVtuuWhb81DtaOfNIfOOIjwwdu9ZhfdXXLH6h3RXPJ7YUqn9RmJxX-7ooJwRR9zllxwIfAYHAZZg0fX1-ZWRSn-ZxmynA_RtZ7hKyUBpx-P5kozrO81EIhbwOjpsMLtp32YFciKe3c=w1920-h1080",
		answer : "Alec Guinness"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/JkSb9hgudb_gzxOHW5Fi726o8ZG1qxJG4U-Dy8yCeAgIjjtzm1SmgvpxTxKFkCi4uJaR9uEWLL1-Pg2_2rWfJTvE7fEei3zwHwC1-9DITG_gudngGkDYIWZ05yFgwnGwi2FCmoLuXnk=w1920-h1080",
		answer : "Alec Guinness"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/nVlQkOSUWyuYzmV8KaNq0yyItSzUt0vyMjR-9u8bJNem6ZVmEZVStuIvyCjGftLUDpoIkWY5opfdKsfzbqQPo12_AQTbVPNbMNR1Hbn0XNOGg3AbNbKdH-UFF_0Xwq2AwsOZq7ssnwQ=w1920-h1080",
		answer : "Alec Guinness"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/_2PnyHUwPnmiohJX-dKaVnohPEErvOR_K6b_WjwPA3jI-qmnxXBy6IKwx2tknH910xhZjOfDqGgTuZf2ejAca-KSpjphWrquPbIxgGEEFJVKskayDBNT1V012-ZIyntf4Kty6Kc6UxM=w1920-h1080",
		answer : "Alec Guinness"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/yRam0ih9j5QkdKa23_YISNGbXuGDc2iJ8fC6HrRaur5-HyLU7XjETfc8XdbMZrcubRZGUlbDuf2LSos43msIYjrJU0vROniUruezpjgsllefGI4U25o2baud6QdMdQw09pCQpeBJitA=w1920-h1080",
		answer : "Alec Guinness"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/se16llJlT17d3-enlhrZmskuzYNuGh6zPQr0nibeT1cfrsiLd32gueGX2M3Km1r9iHPuNTuYEI6uKfF2hLvKT1HQn7N8VmgrcZdH3EbTkumCMJ-luUVF0azh1YHAuioCjSmYdURKzPs=w1920-h1080",
		answer : "Alec Guinness"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/PRQ1bGktGAfhJytrpd6A8WsKbGTrCCTYRo-5DWVEdd-jynHckcm_ZWwE8cYyr_95Tl05JCLYOBYgJjgdQYj_eyGO3KFCaGcrFKEJz52PDMfnTNitsoLIxWd1ESvFAUr9tY-ZVb7ahyI=w1920-h1080",
		answer : "Alec Guinness"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this?",
		image : "https://lh3.googleusercontent.com/20x1yfV9eJyRix5dLtgtSSs3L_mHxITlmPi3TnnAY5YjFlmQjU0oBcZ0b4_64nVu1HSyvrYGEQgDuc_YZOPvQyg2kkG-Ur7NyThOwD4m3mzjWqurqssEmPIhr_65NyV3yv2_B02IH8Y=w1920-h1080",
		answer : "Alec Guinness"
	});


quests[++questIndexBuilder] = { //quests[39] = {
		name : "Say What?",
		hoverover : "Catchphrases",
		tags : "saturday,surfers",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is their catchphrase?",
		image : "https://lh3.googleusercontent.com/MrbNfglCqD9hm-6fglmwRh3wSdjN-fGWYinlzGFuDuwgV-tkGJ_FLnoOTBWk_XAKRv2Ez6YtjqBROrdvvFV-OpXgNJcA_YszWSK--zl8udQ2Z8eoP0jaTWimKj_au_LAMg94js96S08=w1920-h1080",
		answer : "Yabba Dabba Do"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is their catchphrase?",
		image : "https://lh3.googleusercontent.com/YxzIToZFbywKmeE-r9seuqaNZTN1CjFqrJxq4myzHlHIQ5OrluWEgUh98JBcqcuC4iY5eEzsxOhRALULx7fvuH2R4ysDvV9r2nOOJSFRmdgbVIqEzk252jZbd_mbWHjk3Z3LC-uO9u4=w1920-h1080",
		answer : "I tawt I taw a puddy tat"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is their catchphrase?",
		image : "https://lh3.googleusercontent.com/OhX9n46RpoSWlCMEGcWtgLLfFnOjInpUeWChttRPgI7CxkEXlOkfCMtNA7-Ev6LRP2dQ0y0_kJSYO8myKCFdmW7uNaobv04FLLllLC7SJ5A0SpbjBPiHFGyd6Gj0cyjq7ONmX3aOfP4=w1920-h1080",
		answer : "Sufferin Succotash"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is their catchphrase?",
		image : "https://lh3.googleusercontent.com/2bFM-MANyTqJW9YB4y0VbpYRKG-tP9eB1R4CbaZVTmp8yv20gRAC9fF7sOTGZjp4I1DbSt22QVORZaI--HowFfLZY7o9N9OsIc47sE0YEUxJ3_im4UFKDlJQN3_91_Dj8xFQAhBpygc=w1920-h1080",
		answer : "Eat my shorts"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is their catchphrase?",
		image : "https://lh3.googleusercontent.com/J4VMuTL_gXTYC6UYoXZq_FTksdvB3jftpMFk_djyRknMZdi5p-16AUY2D9drTN-knMl9BYB3Lkg48UBnbFI2IJs2I3m3BUK8rlgdn7IlQt-0v64MIVXh-bhKSAQjjpzG3HXFfcUtRcE=w1920-h1080",
		answer : "I yam what I yam an' that's all I yam"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is their catchphrase?",
		image : "https://lh3.googleusercontent.com/Ws6_BOqxeP58XxwMT8j1A1YOJZmBG-4F1dmLY6n-aOKUdv6ep0SVpR9_-jy51yZPLx_20sD2szx2iwEMhuJt3GHethq9McuO5aRwdp0ewcjyTHsaDNLQ7Zc9dr339Tl5OdTN3ulGpzA=w1920-h1080",
		answer : "To infinity and beyond"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is their catchphrase?",
		image : "https://lh3.googleusercontent.com/N6HSelRL59NZWLd7wKqPwUMu9J5yF_FQ7kOHjL4R8FW9ne2BUdAzOX9wZYXskW13Dc0hASyem9pblheMXuRnV8Vf-VQNxiH0z7UAb6dXo1XS_vNW86LICOny-wu5RvH--a57_Ej20xY=w1920-h1080",
		answer : "Cowabunga"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is their catchphrase?",
		image : "https://lh3.googleusercontent.com/fEWqujuh5W8xpgXPpiagOH8aj1twnFEAFVLdFQmXAwpn1q17UQgTx8fED1SIjc6pOWV5DsZvl-nBzwL6npCYi6FDYzgCdUx4-7UmX9kj-fQmNjQSzA_HCw8A1MeCI3oehl6yt0A9oS0=w1920-h1080",
		answer : "D'oh!"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is their catchphrase?",
		image : "https://lh3.googleusercontent.com/Ce5baEXC2cXhd493Y0ARY8fznjOObG9Cu6Sc631SApMWqdPC7sfy_fJXuyYq5M0YSPX6dsAtFOn6NnKyBD8jKpxDkk78Gai921LAvNMuA1hzO2plw7mn36XC8ZL4qo6oFzFYh_0vvvQ=w1920-h1080",
		answer : "Good Grief"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is their catchphrase?",
		image : "https://lh3.googleusercontent.com/oRZoI81UGEDsxB0ODQ73kxVGkOVvBAn0Zz8nXaJGp4_JCx4oljChcWFqQnSTic6zQXQZhjgCGWmFYY99ww1cglT09YZJ7DFp_D4Hub4S6RswmlSUfRIDO-ZTn1Tw2q11dkRjT-bi5Oo=w1920-h1080",
		answer : "Excellent"
	});
quests[++questIndexBuilder] = { //quests[48] = {
		name : "Snug as a bug in a rug",
		hoverover : "Guess the object",
		tags : "saturday,surfers,horror",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In the words of the song, what is 'uptight and outa sight'?",
		image : "https://lh3.googleusercontent.com/t3xS6MaHaYqNEQkBSbYRKWcZmxYr-h_1ImQUX83-1HyfuqsobCuXbJSOmV2WnJwzKkkP7zL0zNfvPZY5aFqKDu-Ab5dmz88As3GgucdXpH-SMWVZ5rusEAefYaURJaKm89VZFkiQl1M=w1920-h1080",
		answer : "Peanut Butter jar"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In the words of the song, what is 'uptight and outa sight'?",
		image : "https://lh3.googleusercontent.com/4EaocZqbNk6QbuQE6ebFV8Bw__91WA-_27kKNasmMhmtScYT_fwexHyYMNaoyahoTxr0RlPToE2eVxq7S51p4HIWqEkMRSdhqSFi1-nPFVhvVbPJ2PcqxnzStmOWRXJe_wHkmE6-9yI=w1920-h1080",
		answer : "Electrical cord"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In the words of the song, what is 'uptight and outa sight'?",
		image : "https://lh3.googleusercontent.com/P5IdgRgAlMs8q3dF24cZ2kcnOiqYaig-a05Y9xKP0beqJqL6qFE94qvh0-0Np7oAnuuq8EiiRtxTvEma3s1xSMeMILU64I5H8sqS_6195qQmypFQPcYVnnsQIi98KSI84eBRroEqwkE=w1920-h1080",
		answer : "Mobile phone (Motorolla Razor)"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In the words of the song, what is 'uptight and outa sight'?",
		image : "https://lh3.googleusercontent.com/izDdTLKcDsAzH3-mlJyqWHzdThmVTpJjiyhQpOK4qs0QrruhjsewmRYQFppAiZw3HCTkPQzZd1ISuN0-v-12QRqZedKXT5gneTAjM0WfkAH6J-bg20VOlTN2HizeesOx0S81G4uOtyI=w1920-h1080",
		answer : "Beer bottle & hook"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In the words of the song, what is 'uptight and outa sight'?",
		image : "https://lh3.googleusercontent.com/-1g4WyEATLn4JHOshlAu5cR0SfPywNvnWUt8hUTlxikVdbehDV8JgTaO50d83JrbJWsrwzmqw2I9MH72cvoHUGokrwkWzYBKRF2dejofNqHfVFD75HMbxB1RM3QS1JWwmtU3uS41kQM=w1920-h1080",
		answer : "Pint glass"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In the words of the song, what is 'uptight and outa sight'?",
		image : "https://lh3.googleusercontent.com/kpqJiMY_pP3-BrGh3PG8c47zxGZWptlJcq4R_6_Bi2p9piG_0w-Q6JLq3asoVlVzy5cZrlwsw9ahK_gp383fjlzvSpdymrEtqYcdwIfXIIBrlKplwmkk-FTdNul-oam57UoLpVIpbx8=w1920-h1080",
		answer : "Buzz Lightyear"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In the words of the song, what is 'uptight and outa sight'?",
		image : "https://lh3.googleusercontent.com/1FNiVmdM8y1JKs3Vg54qE6N9h_yt-fHQcIa19olD2hDM7zJRf64RRTYc0JXHhwmn5683DyYWEfLWySYINjDDD7N76SraTkxXBw4y7gBa3UQM5zwxs75uS_QqyVfRNGeP7LU_Ccn_Jmk=w1920-h1080",
		answer : "Barbie"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In the words of the song, what is 'uptight and outa sight'?",
		image : "https://lh3.googleusercontent.com/tgGB_F9pcWdsCZUvwK9VlwJEcApgJ4hBf3Qf75Rq99EnUBl4wnOLDf77ephqXCoyIaH2KFd95_m-R4CtKrYABBUb2BAFX2KI3KV_3vOSzOm1wRh7ykdHamoBMydcT5-YmrDYwEWmhXM=w1920-h1080",
		answer : "Zucchini"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In the words of the song, what is 'uptight and outa sight'?",
		image : "https://lh3.googleusercontent.com/zteQWUH3Y8MGq1q3jE-5fcFwhYmmHzbRT7t25guRmrRLNYox1sMefhZF82QwFwMh8aLPHUez7jFpALOExil_PAncj13b79OLO_kMGEkHLRSDsxf0iV5HquN9dn78by98HYgGx7rgNL0=w1920-h1080",
		answer : "Candy Cane"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In the words of the song, what is 'uptight and outa sight'?",
		image : "https://lh3.googleusercontent.com/kkWIashCNzAiTBo_aP_ZirfxNi2XbLFbnZx17_rBw8wFOhwQZWP5H9EUHeew406sBAqVVmbExCWufhjMIv607cWWQi9N7cOyDL737jVW23zFA_zs3jaspYEzPSErTTSiiJWj-5kWGP8=w1920-h1080",
		answer : "Cassette"
	});
quests[++questIndexBuilder] = { //quests[26] = {
		name : "Swingers",
		hoverover : "Guess the song that is being covered by Paul Anka",
		tags : "music,gin,saturday,surfers",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : '',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/4iIdS1qhLZ2wXWtjgTksAe" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "Answers under the questions in the list"
	});


quests[++questIndexBuilder] = { //quests[33] = {
		name : "Name the 8-bit song",
		hoverover : "Well known songs, as if played on a Commodore 64",
		tags : "music,saturday,surfers",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Guess the songname',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/6mF4DxvnvuBt9pQa42t32l" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answers"
	});
quests[++questIndexBuilder] = { //quests[41] = {
		name : "Mum never let me watch it",
		hoverover : "Guess the TV show from the theme tune",
		tags : "music,gin,saturday,surfers",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Name the show',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/1bJHFM56n6yE2UQTae6vay" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "Blind Date, The A-Team, The Adams Family, The Avengers, Batman, Bonanza, Cagney and Lacey, Cheers, Dallas, Dr Who, Dynasty, Hawaii 5-0, The Hight Chaparal, Magnum, PI, MASH, The Twilight Zone"
	});
quests[++questIndexBuilder] = { //quests[42] = {
		name : "Movies",
		hoverover : "Guess the movie from the theme",
		tags : "music,saturday,surfers",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Name the Movie',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/1YNMCn7g6lc9EGIg6y0fEu" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answers"
	});
quests[++questIndexBuilder] = { //quests[43] = {
		name : "They saw us first",
		hoverover : "Where are these bands associated with",
		tags : "music,saturday,surfers",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'Where are the band associated with?',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/5dIAgkiVZ9EQ69x7UWKjtA" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "Sheffield, Hull, Newcastle-upon-Tyne, Dublin, Suffolk, Manchester, New Jersey, Paris, Belgium, Jamaica"
	});

quests[++questIndexBuilder] = { //quests[44] = {
		name : "Trekking",
		hoverover : "Guess the songs being sung by William Shatner & Leonard Nimoy",
		tags : "music,saturday,surfers",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
		question : 'What song are you hearing?',
		spotify : '<iframe src="https://open.spotify.com/embed/playlist/5Jh4o4aMv4Md69Bd7Xyje7" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
		answer : "No answers"
	});


quests[++questIndexBuilder] = {
		name : "Ted",
		hoverover : "All about your favourite game",
		tags : "16/1/2021,saturday,specialDay",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "How many sticks do you need to make a sword?  " + Table4ColumnStart + "One</td><td>Two</td><td>Three</td><td>Four" + Table4ColumnEnd,
		image : "https://www.quiz.biz/uploads/quizz/850927/1_2s7h7.jpg"   ,
		answer : "1"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	question : "On easy mode when do hostile mobs GENERALLY spawn? " + Table4ColumnStart + "Never</td><td>Nighttime</td><td>Daytime</td><td>All the time" + Table4ColumnEnd,
	answer : "Nighttime"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is the most common ore in Minecraft?" + Table4ColumnStart + "Diamond</td><td>Coal</td><td>Emerald</td><td>Iron"+ Table4ColumnEnd,
	image : "https://www.quiz.biz/uploads/quizz/850927/3_576eh.jpg"   ,
	answer : "Coal"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Who is this guy?" + Table4ColumnStart + "Steve</td><td>John</td><td>Jack</td><td>James"+ Table4ColumnEnd,
	image : "https://www.quiz.biz/uploads/quizz/850927/6_Sdpan.jpg"   ,
	answer : "Steve"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Cool you are officially a Minecraft pig! Now tell me what do ghasts drop?" + Table4ColumnStart + "Ghast eyes</td><td>Ghast tears</td><td>Ghast heads</td><td>Ghast meat"+ Table4ColumnEnd,
	image : "https://www.quiz.biz/uploads/quizz/850927/8_ZR73A.jpg"   ,
	answer : "Ghast tears"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	question : "When a baby zombie spawns, what are the chances of it being a chicken jockey?" + Table4ColumnStart + "90%</td><td>10%</td><td>5%</td><td>1%"+ Table4ColumnEnd,
	answer : "5%"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	question : "Which of these does the looting enchantment NOT affect?" + Table4ColumnStart + "Gunpowder</td><td>Spider eyes</td><td>Rotten flesh</td><td>Ender pearls"+ Table4ColumnEnd,
	answer : "Spider eyes"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	question : "What was Notch trying to make when he accidentally made the creeper?" + Table4ColumnStart + "Pig</td><td>Zombie</td><td>Sheep</td><td>Ocelot"+ Table4ColumnEnd,
	answer : "Pig"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	question : "What happens if a pig is struck by lightning?" + Table4ColumnStart + "It dies</td><td>It turns into a baby pig</td><td>It turns into a zombie pigman</td><td>Nothing"+ Table4ColumnEnd,
	answer : "It turns into a zombie pigman"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText, 	question : "What do you need to tame an Ocelot?" + Table4ColumnStart + "Milk</td><td>Raw Fish</td><td>Steak</td><td>An engineers tears"+ Table4ColumnEnd,
	answer : "Raw fish"	});


quests[++questIndexBuilder] = {
		name : "Ted",
		hoverover : "All about 80s films",
		tags : "16/1/2021,saturday,specialDay",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What is the title of the first film in this franchise?" + Table4ColumnStart + "Die Hard</td><td>12 Monkeys</td><td>Sin City</td><td>Indiana Jones and the Minecraft Zombies "+ Table4ColumnEnd,
		image : "https://cdn.now.howstuffworks.com/media-content/420b18be-fb55-48b6-a5e7-a1bc58ecc316-1210-680.jpeg"   ,
		answer : "Die Hard"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What was Danny Glover's character too old for?" + Table4ColumnStart + "This shoe</td><td>This shit</td><td>His wife</td><td>The moustache "+ Table4ColumnEnd,
	image : "https://cdn.now.howstuffworks.com/media-content/0762ab12-f713-4e38-9674-3ec052c7fba2-1210-680.jpeg"   ,
	answer : "This shit"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Which of these was Sigourney Weaver not the lead female character in?" + Table4ColumnStart + "Alien</td><td>Ghostbusters</td><td>Alien vs Predator</td><td>Galaxy Quest"+ Table4ColumnEnd,
	image : "https://cdn.now.howstuffworks.com/media-content/53f78e5e-f316-4bca-872c-47b34658d250-1210-680.jpeg"   ,
	answer : "Alien vs Predator"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What did the Terminator need?" + Table4ColumnStart + "Your clothes, your boots, and your car</td><td>Your clothes, your boots, and your motorcycle</td><td>Your clothes, your shoes, and your motorcycle</td><td>Your minecraft ID "+ Table4ColumnEnd,
	image : "https://cdn.now.howstuffworks.com/media-content/9580a077-4847-4bb7-9680-c70dd9b27c52-1210-680.jpeg"   ,
	answer : "Your clothes, your boots, and your motorcycle"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What's the title of this film?" + Table4ColumnStart + "Indiana Jones and the Temple of Doom</td><td>Raiders of the Lost Ark</td><td>Indiana Jones and the Last Crusade</td><td>Indiana Jones and Steve against the Zombies"+ Table4ColumnEnd,
	image : "https://cdn.now.howstuffworks.com/media-content/721d7a6f-0346-470b-bde0-ab601570366b-1210-680.jpeg"   ,
	answer : "Raiders of the Lost Ark"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "This film series is an Australian franchise. What's the title of this 1985 film?" + Table4ColumnStart + "Crocodile Dundee</td><td>Mad Max Beyond Thunderdome</td><td>Babe</td><td>ABBA The Movie "+ Table4ColumnEnd,
	image : "https://cdn.now.howstuffworks.com/media-content/f4605797-73ab-4096-a368-0c084131bf3d-1210-680.jpeg"   ,
	answer : "Mad Max Beyond Thunderdome"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What 007 film is this a still from?" + Table4ColumnStart + "A View To A Kill</td><td>From Russia With Minecraft Zombies</td><td>Goldfinger</td><td>Diamonds Are Forever "+ Table4ColumnEnd,
	image : "https://cdn.now.howstuffworks.com/media-content/df7c1491-302a-428b-a2fd-cde328c5a2c9-1210-680.jpeg"   ,
	answer : "A View To A Kill"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Which Star Wars film is this still from?" + Table4ColumnStart + "The Phantom Menace</td><td>Attack of the Clones</td><td>The Empire Strikes Back</td><td>A New Hope"+ Table4ColumnEnd,
	image : "https://cdn.now.howstuffworks.com/media-content/31ee2eb9-18a3-4885-bb25-df633c09e98f-1210-680.jpeg"   ,
	answer : "The Empire Strikes Back"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What film is this a still from?" + Table4ColumnStart + "The Godfather</td><td>Scarface</td><td>Scent of a Woman</td><td>My Right Boob"+ Table4ColumnEnd,
	image : "https://cdn.now.howstuffworks.com/media-content/dea14b3b-676f-461d-9e73-a70fc82b7043-1210-680.jpeg"   ,
	answer : "Scarface"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "What film is this a still from?" + Table4ColumnStart + "Tron</td><td>Street Fighter</td><td>Super Mario Bros.</td><td>Gladiator"+ Table4ColumnEnd,
	image : "https://cdn.now.howstuffworks.com/media-content/c57f01f3-6ba7-4bc7-8ed5-124504c44b48-1210-680.jpeg"   ,
	answer : "Tron"	});

quests[++questIndexBuilder] = {
		name : "Ted",
		hoverover : "All about 2002",
		tags : "16/1/2021,saturday,specialDay",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "What washboard hero is this, who died in 2002?",
	image : "https://static.wikia.nocookie.net/peel/images/b/b6/Lonnie_Donegan.jpg",
	answer : "Lonnie Donegan"}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "In January 2020, what happened to the French Franc? " + Table4ColumnStart + "It lost 50% of it's value</td><td>It stopped smelling of cheese</td><td>It went out of existence</td><td>It was voted #1 for rolling up and snorting cocaine with"+ Table4ColumnEnd,
		image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/50_ve_100_fransiz_frangi.PNG/126px-50_ve_100_fransiz_frangi.PNG"   ,
		answer : "It went out of existence as the Euro took over"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture, 	question : "Julian Dennison was born in December 2002.  Name 2 films he's been in.",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Julian_Dennison_2016.jpg/220px-Julian_Dennison_2016.jpg"   ,
	answer : "The Hunt for the Wilderpeople <BR>Deadpool 2<BR/>The Christmas Chronicles 2<BR/>Godzilla vs Kong"	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, who died in 2002?" + Table4ColumnStart + "Peggy Leggy</td><td>Peggy Sue</td><td>Runaraound Sue</td><td>Peggy Lee" + Table4ColumnEnd,
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Peggy_Lee_1950.JPG/120px-Peggy_Lee_1950.JPG",
	answer : "Peggy Lee"}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, who died in 2002?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Princess_Margaret.jpg/120px-Princess_Margaret.jpg",
	answer : "Princes Margaret"}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, who died in March 2002?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/H.M._The_Queen_Mother_Allan_Warren_crop.jpg/120px-H.M._The_Queen_Mother_Allan_Warren_crop.jpg",
	answer : "Queen Elizabeth the Queen Mother"}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, who died in October 2002?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Richard_Harris_1985.jpg/120px-Richard_Harris_1985.jpg",
	answer : "Richard Harris"}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, who died in 2002?",
	image : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Rosemary_Clooney_1954.jpg/220px-Rosemary_Clooney_1954.jpg",
	answer : "Rosemary Clooney"}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, who died in 2002?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/James_Coburn_The_Californians_1959.JPG/220px-James_Coburn_The_Californians_1959.JPG",
	answer : "James Coburn"}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, who died in 2002?",
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Dudley_Moore_%28cropped%29.jpg/225px-Dudley_Moore_%28cropped%29.jpg",
	answer : "Dudley Moore"}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, who died in 2002?" + Table4ColumnStart + "Daa Daa Ramone</td><td>Dee Dee Ramone</td><td>Laa Laa Ramone</td><td>Tinkey-Winkey Ramone"+ Table4ColumnEnd,
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Dee_Dee_Ramone.jpg/220px-Dee_Dee_Ramone.jpg",
	answer : "Dee Dee Ramone"}) ;
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "Who is this, who died in 2002?" + Table4ColumnStart + "John Pennywistle</td><td>John Wolfwistle</td><td>John Entwistle</td><td>John Cantwistle"+ Table4ColumnEnd,
	image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/John_Entwistle-1.jpg/220px-John_Entwistle-1.jpg",
	answer : "John Entwistle"}) ;

quests[++questIndexBuilder] = {
		name : "Ted",
		hoverover : "Your favourite songs",
		tags : "16/1/2021,saturday,specialDay,music",
		questInfo: new Array()
	};
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : 'Name the films or TV shows the first 9 songs are from (bonus points for song titles and artist names.<BR/>Name the song and artist (1 point each) for the remaining 7',
	spotify : '<iframe src="https://open.spotify.com/embed/playlist/3WP5d7wy4dLHy0p7CwGJCT" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
	answer : "The LEGO movie, Little Shop of Horrors, Sharknado, Guardians of the Galaxy, Footloose, Plebs, Rocky, Rocky Horror, Shrek"
}) ;

quests[++questIndexBuilder] = { //quests[102] = {
		name : "Colour",
		hoverover : "Paint or Aint.  Which of these are real Farrow and Ball colours?",
		tags : "saturday,gin,23/11/2020,23/11/2020",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePictureAnswer,
		question : "Is this a Farrow and Ball paint colour? <BR/><BR/>SLIPPER SATIN",
		answer : "Yes",
		answerimage : "https://lh3.googleusercontent.com/clEzsKHg1AwvfXMKP0PClYYDCEULX1w9hS0ZUOl5zOWqxJSeSH3Evrz1yuTZfN--o616qn9h_U0KY4j0A6-3ZpSiY6Aug2laVNlcrYioGvTsKBkUBsinlFQmqzRm0pusU5czh0wcMK8=w1920-h1080" 
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Is this a Farrow and Ball paint colour? <BR/><BR/>CAMEL'S TONGUE",
		answer : "No"
	});
	addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Is this a Farrow and Ball paint colour? <BR/><BR/>BROKEN PLATES",
		answer : "No"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePictureAnswer,
		question : "Is this a Farrow and Ball paint colour? <BR/><BR/>SAVAGE GROUND",
		answer : "Yes",
		answerimage : "https://lh3.googleusercontent.com/IUjsq4lFvAQ20RNX5FAfdu13ycHSVpceIstw0cE48bphuIp7eAO73KaVKKL_lQ_LfmCt6CoAz93WEcdB9FxfJu63nRaMJydfNwiWLqisi2RPIJ2YtloDTREDKhfup-S49i4y_hex_qU=w1920-h1080" 
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Is this a Farrow and Ball paint colour? <BR/><BR/>MIDDLETON TAN",
		answer : "No"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Is this a Farrow and Ball paint colour? <BR/><BR/>DAINTY BLUSHES",
		answer : "No"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePictureAnswer,
		question : "Is this a Farrow and Ball paint colour? <BR/><BR/>PAVILION GRAY",
		answer : "Yes",
		answerimage : "https://lh3.googleusercontent.com/grAy0_bx1EeBdCcAX8Roq1cQelzsr8sVzmUPc-2QqMRPrWXBFdsZFccQ0buXPH_ov9jqAUoF1705AmP1n32CKZ0kqXBi76T5N89ng9gDsfQpUN7b0z-K8j4KNcqwWpFWPkkDkBEed4s=w1920-h1080" 
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
		question : "Is this a Farrow and Ball paint colour? <BR/><BR/>AROMATIC CHAI",
		answer : "No"
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePictureAnswer,
		question : "Is this a Farrow and Ball paint colour? <BR/><BR/>TERESA'S GREEN",
		answer : "Yes",
		answerimage : "https://lh3.googleusercontent.com/gR-fSK8zKEkdywsapPdEmgel3--fK9mFk9GlsEIJ95qV_YqZinXZ1l6OawdvmuGE1Igt0XAB5wni9sXntNyUEB9hCnFeWczYGWuUfF4WO05yvZP9xjsRVqXhN9o55bH0m4uUCNC3HG0=w1920-h1080" 
	});
addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePictureAnswer,
		question : "Is this a Farrow and Ball paint colour? <BR/><BR/>STIFFKEY BLUE",
		answer : "Yes",
		answerimage : "https://lh3.googleusercontent.com/hysV61HJHdCW3758sZ_WNrf0BAKr3fs2tl5nWUmxzyEFT69-60f7YwjcbaY4ke_LQPiIVvxOiBBtUb6Zu5biluOK8TPWfXqb4UK-nXIMpMqDaybUxj71Iiqt3Owaz_SHW64X60l0DYQ=w1920-h1080" 
	});
/*
  addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : "",
	answer : ""
} );

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : "?",
	image : "",
	answer : ""
}) ;
 
 
 
 
quests[++questIndexBuilder] = { //
		name : "Test new quiz builder",
		hoverover : "Try out the quicker builder",
		tags : "test",
		questInfo: new Array()
	};

quests[++questIndexBuilder] = {  //
		name : "Test new month-based quiz builder",
		hoverover : "Try out the quicker builder",
		tags : "test,year,saturday",
		questInfo: new Array()
	};

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : question : "?<BR/><BR/> <BR/> <BR/> <BR/> ",
	answer : "Priscilla Presley"
} );

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeText,
	question : question : "?" + Table4ColumnStart + "One</td><td>Two</td><td>Three</td><td>Four " + Table4ColumnEnd,
	answer : "Priscilla Presley"
} );

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypePicture,
	question : question : "?<BR/><BR/> <BR/> <BR/> <BR/> ",
	image : "https://lh3.googleusercontent.com/Ftq4kmwf2ZMgm2Au1KHEirPcTYyA2MfoTe5ti0A2v6cPUAyexLjvfFtcovCeJDtF8oX8j6EXHIV9HMrZj41byAmnurxMK4mfRcSw695znXl608VK__rflaCyjX_fcVMXtxvgNfEU0NU=w1920-h1080",
	answer : "Groundhog Day"
}) ;

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : 'Name the products these songs were used to advertise',
	spotify : '<iframe src="https://open.spotify.com/embed/playlist/7BQJ0lhgEX1NCPKBt6TlYm" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
	answer : "Cadbury, Levi's,Muller Light, Galaxy, Wrigleys, Guinness, Vauxhall, Nike, Levi's, Barclaycard,Quality Street  "
}) ;

addQuest(quests[questIndexBuilder],{	type : quizQuestionTypeSpotify,
	question : '',
	spotify : '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRm7q0c3dgVMI_pieDAUPcSHXQ8N3I20dHQytGEjaKsq2Pj-l2xHcRpud-McY2UhU_qrBcLyVRidpOJ/embed?start=false&loop=false&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
	answer : "Click the presentation to move it along"
} );

addQuest(quests[questIndexBuilder],{		type : quizQuestionTypeText,
		question : "In August, who said (during a voice check for a radio broadcast) 'My fellow Americans, I'm pleased to tell you today that I've signed legislation that will outlaw Russia forever. We begin bombing in five minutes'?",
		answer : "POTUS Ronald Reagan  <iframe width='560' height='315' src='https://www.youtube.com/embed/bBow1ToJBFE' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
}) ;

addQuest(quests[questIndexBuilder],{		type : quizQuestionType2Picture,
		question : "What movie", //Brigadoon
		image : "https://lh3.googleusercontent.com/xnOmzayfP3WllISoi9JAme1rLPAj2URFYRC-fcJ3HPJQnLyfiSFzgVnHWyk1YQmmhCN2bTh-eLl4nHR33_nk7racyojCX3SWXzjMcSOmgUHiSGed0JsG4gSUTZSglL5g2FBlC4DiudQ=w1920-h1080",
		answerimage : "https://lh3.googleusercontent.com/6dIaU3FmXYQbxaJRA3GLMw-G56A_2fag2W8u67fZcd5tzwdfghu7uFW07M98YaoLS69v7pyJETxyWFMEkX1bBUwWlBx94kQw3H2iLKXXk1jiUaUyr-TFW9ax8dyZGnGqwFgabboP_rY=w1920-h1080"
}) ;

addQuest(quests[questIndexBuilder],{		type : quizQuestionTypePictureAnswer,
		question : "Which actor has died most times on the big-screen (ie in films)? <BR/> (a) Danny Trejo, <BR/> (II) Vincent Price, <BR/> (3) Christopher Lee, <BR/> (Ivy) Dennis Hopper.",
		answerimage : "https://lh3.googleusercontent.com/X8Cwofy-XdhCTIt7Ict9vOQ-Du4KGOMC8wwGSXAP_y9RdlJOiP8RTp3Nnmj5rqik9AV-epVXWxb6hDPjwtbBuHqOur_YQKJrM5P1EoCO3U9U8yFzGXGHvX7El6AE_lK5SsiOB2DR-Dg=w1920-h1080"
	} ); 
	
addQuest(quests[questIndexBuilder],{		type : quizQuestionTypePictureAnswer,
	question : "Which actor has died most times on the big-screen (ie in films)? <BR/> (a) Danny Trejo, <BR/> (II) Vincent Price, <BR/> (3) Christopher Lee, <BR/> (Ivy) Dennis Hopper.",
	answerimage : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Danny_Trejo_by_Gage_Skidmore.jpg/220px-Danny_Trejo_by_Gage_Skidmore.jpg"
} ); 

questIndexBuilder++;

addQuest(quests[questIndexBuilder],{		type : quizQuestionTypeText,
	question : "who was born?",
	answer : "Ted"
} ); 

questIndexBuilder++;
*/
 
 
function SQInit() {
	
	tagStringFromURI = SQGetURIString();
	if (!tagStringFromURI) {
		tagStringFromURI = defaultTag;
	}
	tagStringFromURI;
	tags = tagStringFromURI.split(",");

	document
			.write("<div id='SQQuiz'; marginTop = '1px'; marginBottom='1px'><span id='SQworkarea' class='grad'><table border='0'><table border='1'>"
					+ "<tr><td><span id='SQmenu'></span></td>"
					+ "<td><span id='SQButtons'></span></td></tr></table>"
					+ "<tr><td><span id='SQAnswer'></span></td></tr>"
					+ "<tr><td><span id='SQquestData'></span></td></tr>"
					+ "<tr><td><span id='SQImage'></span></td></tr>"
					+ "</table></span></div>");

	document.getElementById("SQquestData").style.margin = "0px 0px 0px 0px";
	document.getElementById("SQAnswer").style.margin = "0px 0px 0px 0px";
	SQInitMenu();

	if (currQuestStageIndex > -1) {
		SQRestartQuest();
	}
}
function SQGetURIString() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.has('quizType')) {
		return urlParams.get('quizType')
	};
	return ;
}
function SQLimitMenuDuringQuest(textToDisplay) {
	document.getElementById("SQmenu").innerHTML = textToDisplay;
}
function SQResetAndStore() {
	currQuest = "";
	currQuestIndex = 0;
	currQuestStageIndex = -1;
}

function SQInitMenu() {
	var menuArea = document.getElementById("SQmenu");

	menuArea.innerHTML = 'Rounds<BR/><BR/>' + SQInitQuestButtons(quests)  + '<BR/><BR/>Restrict rounds list by interest<BR/><BR/>'+ SQInitTagButtons();
}

function SQInitMenuWithTags() {
	var menuArea = document.getElementById("SQmenu");

	menuArea.innerHTML = SQInitTagButtons();
}

function SQInitQuestData() {
	SQGetQuestArea().innerHTML = '';
}

function SQStartQuizFromButton(quizIndex) {
	naturalizedQuizIndex = quizIndex + 1;
	document.getElementById("SQmenu").innerHTML = '(' + naturalizedQuizIndex + ') ' + quests[quizIndex].name
			+ " - " + quests[quizIndex].hoverover;
	currQuestStageIndex = 0;
	quizStage = quizStageQuestions;
	currQuestIndex = quizIndex;
	runNextQuestStage();

}

function runNextQuestStage() {
	questStageData = quests[currQuestIndex].questInfo;
	if (currQuestStageIndex == questStageData.length
			&& quizStage == quizStageQuestions) {
		currQuestStageIndex = 0;
		quizStage = quizStageAnswers;
	}
	if (currQuestStageIndex < 0 && quizStage == quizStageAnswers) {
		currQuestStageIndex = questStageData.length - 1;
		quizStage = quizStageQuestions;
	}
	if (currQuestStageIndex < 0 && quizStage == quizStageQuestions) {
		currQuestStageIndex = 0;
	}

	if (currQuestStageIndex == questStageData.length
			&& quizStage == quizStageAnswers) {
		resultText = resultText;
		SQInitQuestData();
		SQInitMenu();
		SQGetButtonsArea().innerHTML = '';
		SQGetAnswerArea().innerHTML = '';
		SQGetImageArea().innerHTML = '';
		currQuestStageIndex = -1;
		quizStage = quizStageQuestions;
		return;
	}
	;

	currentquestion = questStageData[currQuestStageIndex].question;
	currentanswer = questStageData[currQuestStageIndex].answer;
	if (quizStage == quizStageQuestions) {
		SQQuestion(questStageData[currQuestStageIndex].type);
	} else {
		SQAnswer(questStageData[currQuestStageIndex].type);

	}
	;
};

function runPreviousQuestStage() {
	currQuestStageIndex = currQuestStageIndex - 2;
	runNextQuestStage();
};

function setButtons() {
	btnhtml = nextButton;
	if (currQuestStageIndex == questStageData.length - 1
			&& quizStage == quizStageQuestions) {
		btnhtml = answerButton;
	}
	buttonBar = previousButton + btnhtml;
	SQGetButtonsArea().innerHTML = buttonBar;
}

function SQQuestion(questionType) {
	setButtons();
	SQGetAnswerArea().innerHTML = '';
	

	if (questionType == quizQuestionTypeText |questionType == quizQuestionTypePictureAnswer) {
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"
				+ questStageData[currQuestStageIndex].question + "</p>";
		var imageArea = document.getElementById("SQImage");
		imageArea.innerHTML = '';
	} else if (questionType == quizQuestionTypePicture | questionType == quizQuestionType2Picture) {
		SQGetButtonsArea().innerHTML = buttonBar;
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">"
				+ questStageData[currQuestStageIndex].question + "</p>";
		sqInitPicture(questStageData[currQuestStageIndex].image)
	} else if (questionType == quizQuestionTypeSpotify) {
		sqInitSpotify(questStageData[currQuestStageIndex].spotify,
				questStageData[currQuestStageIndex].question)
	}

	currQuestStageIndex++
}

function sqInitPicture(imageSource) {
	var imageArea = document.getElementById("SQImage");
	imageArea.innerHTML = '<div style="width:100%;height:480px;background-color:black;text-align:center;"> '
			+ ' <a href="'
			+ imageSource
			+ '" target="_blank">'
			+ ' <img style="height:100%;border:0;" src="'
			+ imageSource
			+ '" /> ' + ' </a> ' + ' </div>';

}

function sqInitSpotify(spotifyEmbed, spotifyQuestion) {

	SQGetImageArea().innerHTML = spotifyEmbed;
	SQGetQuestArea().innerHTML = "<p " + questionStyle + ">" + spotifyQuestion + "</p>";
}

function SQAnswer(questionType) {
	counter = 0;
	setButtons();
	fullAnswer = questStageData[currQuestStageIndex].answer;
	fullQuestion = questStageData[currQuestStageIndex].question;
	if (questionType == quizQuestionTypeText) {
		SQGetImageArea().innerHTML = '';
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">" + fullQuestion
				+ "</p>";
	} else if (questionType == quizQuestionTypePicture) {
		sqInitPicture(questStageData[currQuestStageIndex].image)
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">" + fullQuestion
				+ "</p>";
	} else if (questionType == quizQuestionType2Picture) {
		sqInitPicture(questStageData[currQuestStageIndex].image)
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">" + fullQuestion
				+ "</p>";
	} else if (questionType == quizQuestionTypeSpotify) {
		sqInitSpotify(questStageData[currQuestStageIndex].spotify,
				questStageData[currQuestStageIndex].question)
	} else if (questionType == quizQuestionTypePictureAnswer) {
		var imageArea = document.getElementById("SQImage");
		imageArea.innerHTML = '';
		SQGetQuestArea().innerHTML = "<p " + questionStyle + ">" + fullQuestion
		+ "</p>";
	}
	
	// SQGetQuestArea().innerHTML = answerPreText;
	answerText = '';
	SQGetAnswerArea().innerHTML = '';
	if (questionType == quizQuestionType2Picture)  {
		answerimage = questStageData[currQuestStageIndex].answerimage;
		setTimeout(function(){sqInitPicture(answerimage);},3000 )
	} else	if (questionType == quizQuestionTypePictureAnswer) {
		answerimage = questStageData[currQuestStageIndex].answerimage;
		setTimeout(function(){sqInitPicture(answerimage);},3000 )
	} else {
		setTimeout(SQSpeakAnswer, 3000);

		setTimeout(SQWriteAnswer, 3000);
	}
	currQuestStageIndex++
}

function SQSpeakAnswer(){
	if (!'speechSynthesis' in window) {
		return;
	}
	if (!fullAnswer.includes("iframe")) {
		var msg = new SpeechSynthesisUtterance();
		msg.text = fullAnswer;
		window.speechSynthesis.speak(msg);
	}
}

function SQWriteAnswer() {
	if (fullAnswer.includes("iframe")) {
		SQGetAnswerArea().innerHTML = // answerPreText +
			"<p " + answerStyle + ">" + fullAnswer + "</p>";
	}
	else if (counter < fullAnswer.length) {
		answerText = answerText += fullAnswer.charAt(counter);

		SQGetAnswerArea().innerHTML = // answerPreText +
		"<p " + answerStyle + ">" + answerText + "</p>";
		counter++;
		setTimeout(SQWriteAnswer, 80);
	}
}

function SQreloadPage(tag){
	newURL = window.location.pathname + '?quizType=' + tag;
	window.location.assign(newURL);
}
function SQInitTagButtons() {
	tagsCount = tags.length;
	buttons = '';
	
	for (var i = 0; i < tagsCount; i++) {
			buttons = buttons
					+ "<input type='button' class='userBtnStop' value='"
					+ tags[i] + "' title='Reload page and only show quizzes with this tag' id='reload' onclick='SQreloadPage(\"" + tags[i]
					+ "\")' />"
		
	};
	//console.log("uniqueArray: ", tags);
	return buttons;
}

function SQInitQuestButtons(options) {
	optionsCount = options.length;
	buttons = '';
	for (var i = 0; i < optionsCount; i++) {
		quizNumber = i + 1;
		if (SQIncludeQuiz(options[i].tags)) {
			buttons = buttons
					+ "<input type='button' class='userBtnGo' value='"
					+ options[i].name + "' title='(" + quizNumber + ") "+ options[i].hoverover
					+ "' id='startQuizBtn' onclick='SQStartQuizFromButton(" + i
					+ ")' />"
		}
	}
	;
	tags = Array.from(new Set(tempTags));
	tags.sort();
	tags.unshift('ShowAll');
	//console.log("uniqueArray: ", tags);
	return buttons;
}

function SQIncludeQuiz(optionTagsString) {
	optionTags = optionTagsString.split(",");
	optionTagsCount = optionTags.length;
	URITagsCount = tags.length;
	for (var i = 0; i < optionTagsCount; i++) { //Store all tags
		if (!optionTags[i].includes('/')) {
			tempTags.push(optionTags[i]);
		}
	}
	for (var i = 0; i < optionTagsCount; i++) {
		for (var j = 0; j < optionTagsCount; j++) {
			if (tags[j] == showAll) {
				return true;
			}
			if (optionTags[i] == todayString ) {
				return true;
			}
			if (optionTags[i] == tags[j]) {
				return true;
			}
		}
	}
	return false;
}

function SQQuestPicked() {
	currQuest = SQGetQuestInfo();
}
function SQGetCurrentQuestIndex() {
	optionsCount = quests.length;
	for (var i = 0; i < optionsCount; i++) {
		if (currQuest == quests[i]) {
			questIndex = i;
		}
		;
	}
	;
	return questIndex;
};
function SQGetButtonsArea() {
	return document.getElementById("SQButtons");
};
function SQGetAnswerArea() {
	return document.getElementById("SQAnswer");
};
function SQGetImageArea() {
	return document.getElementById("SQImage");
};
function SQGetQuestArea() {
	return document.getElementById("SQquestData");
};
function SQGetQuestInfo() {
	return document.getElementById("questNames").value;
};
