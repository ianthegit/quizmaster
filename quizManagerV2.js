

	//Photo getter thingy https://www.publicalbum.org/blog/embedding-google-photos-image
 	currQuestIndex=0;
	currQuestStageIndex=-1;
	resultText='';
    questResultData=new Array(6);
    question=0;
	quizStage="Questions";
	quizStageQuestions="Questions";
	quizStageAnswers="Answers";
	quizQuestionTypeText='text';
	quizQuestionTypePicture='picture';
	quizQuestionTypeSpotify='spotify';
	
	questionStyle = 'style="color:Black;font-size:40px;"';
	answerStyle = 'style="color:green;font-size:40px;"';
	previousButton = "<input type='button' class='userBtnStop' value='Previous' title='Previous' id='Previous' onclick='runPreviousQuestStage()' />";
	nextButton="<input type='button' class='userBtnGo' value='Next' title='Next' id='Next' onclick='runNextQuestStage()' />";
	answerButton="<input type='button' class='userBtnGo' value='Answers' title='Answers' id='Next' onclick='runNextQuestStage()' />";
	quests=new Array();

	questInfoData=new Array();
    questStageData0=new Array();
    questStageData1=new Array();
    questStageData2=new Array();
    questStageData3=new Array();
    questStageData4=new Array();
    questStageData5=new Array();
    questStageData6=new Array();
    questStageData7=new Array();
    questStageData8=new Array();
    questStageData9=new Array();
    questStageData10=new Array();
    questStageData11=new Array();
    questStageData12=new Array();
    questStageData13=new Array();
    questStageData14=new Array();
    questStageData15=new Array();
    questStageData16=new Array();
    questStageData17=new Array();
    questStageData18=new Array();
    questStageData19=new Array();
    questStageData20=new Array();
    questStageData21=new Array();
    questStageData22=new Array();
    questStageData23=new Array();
    questStageData24=new Array();
    questStageData25=new Array();
    questStageData26=new Array();
    questStageData27=new Array();
    questStageData28=new Array();
    questStageData29=new Array();
    questStageData30=new Array();
    questStageData31=new Array();
    questStageData32=new Array();
    questStageData33=new Array();
    questStageData34=new Array();
    questStageData35=new Array();
	
	quests[0]=["Give me a P please Bob"];
	quests[1]=["Born in 1967"];
	quests[2]=["Boring Films"];
	quests[3]=["Q-Q-Q-Q-Questions"];
	quests[4]=["Advert Music"];
	quests[5]=["Gin Club Boring Films" ];
	quests[6]=["Saturday 25th Music"];
	quests[7]=["A very R-r-r-r-d quiz"];
	quests[8]=["No knowledge required"];
	quests[9]=["Guess the show"];
	quests[10]=["Name the band"];
	quests[11]=["Name the Ian's"];
	quests[12]=["Masking my true intentions"];
	quests[13]=["Scavenging"];
	quests[14]=["Guess the song"];
	quests[15]=["Movie Taglines"];
	quests[16]=["Movie Posters"];
	quests[17]=["Saucy Scamps"];
	quests[18]=["Failures"];
	quests[19]=["Gin Club Failures"];
	quests[20]=["Unbelievably Hard"];
	quests[21]=["No Knowledge - Gin Club"];
	quests[22]=["Green fingers"];
	quests[23]=["No Knowledge Required #2"];
	quests[24]=["Cheesey Puns"];
	quests[25]=["Before they were famous & Catchphrase"];
	quests[26]=["Swingers"];
	quests[27]=["Green toes"];
	quests[28]=["Ganders at Gardens Dangers"];
	quests[29]=["Conspicuous Consumption"];
	quests[30]=["Famous Vans"];
	quests[31]=["Whatever do We have here"];
	quests[32]=["Dad jokes"];
	quests[33]=["What song is playing in 8-bit"];
	
 	currQuest=quests[0]; 

	questStageData0[0]={type:"text", question: "1) What P was married to Elvis", answer:"Priscilla Presley"};
	questStageData0[1]={type:"text", question: "2) What P never grew up", answer:"Peter Pan"};
	questStageData0[2]={type:"text", question: "3) What P was Home Secretary since July 2019", answer:"Priti Patel"};
	questStageData0[3]={type:"text", question: "4) What P was a big biblical baddie", answer:"Pontius Pilate"};
	questStageData0[4]={type:"text", question: "5) What P painted 2-faced people", answer:"Pablo Picasso"};
	questStageData0[5]={type:"text", question: "6) What P was a pepper picker", answer:"Peter Piper"};
	questStageData0[6]={type:"text", question: "7) What P is being made here 'ADD THE BASIL LEAVES, GARLIC, TOASTED PINE NUTS AND OLIVE OIL'", answer:"Pesto"};
	questStageData0[7]={type:"text", question: "8) What P is being made here 'FOLD IN HALF, THEN IN HALF AGAIN TO FORM TRIANGLES, OR SIMPLY ROLL THEM UP'", answer:"Pancakes"};
	questStageData0[8]={type:"text", question: "9) What P is being made here 'DRAIN THE LETTUCE AND ARRANGE IN MARTINI GLASSES'", answer:"Prawn Cocktail"};
	questStageData0[9]={type:"text", question: "10) What P is being made here 'PUT THE NOZZLE INTO THE HOLE AND PIPE UNTIL THE CAVITY FILLS WITH CREAM AND THE BUN FEELS HEAVY'", answer:"Profiteroles"};

	questStageData1[0]={type:"text", question: "1) This British comedian is best known for his stand-up show full of one-liners and silly songs, and has twice won the award for best joke at the Edinburgh Fringe", answer:"Tim Vine"};
	questStageData1[1]={type:"text", question: "2) One of the Oasis Gallagher brothers", answer:"Noel"};  
	questStageData1[2]={type:"text", question: "3) The Barings Bank employee who's dodgy dealings lead to the bank going bust and a film being made called 'Rogue Trader'", answer:"Nick Leeson"};  
	questStageData1[3]={type:"text", question: "4) A legendary rock singer who died at the age of 27 having had just a 5 year career", answer:"Kurt Cobain"};  
	questStageData1[4]={type:"text", question: "5) An English footballer that played for clubs including Newcastle and Tottenham, played for England 57 times and even managed Kettering Town, but is as well known for his drink problems as he is his football skills", answer:"Paul Gascoigne"};  
	questStageData1[5]={type:"text", question: "6) This model and actress came to fame in a show that was a worldwide hit between 1992 and 1997 and she's been in many TV shows and movies since. In 1995 she married Tommy Lee Jones and they gained infamy when an explicit sex tape was stolen and released on to the internet", answer:"Pamela Anderson"};  
	questStageData1[6]={type:"text", question: "7) This tennis player was the first unseeded player to win Wimbledon and in his career won 6 Grand Slam tournaments and 43 other singles titles. After his retirement he's been a coach and TV commentator but was declared bankrupt in 2017", answer:"Boris Becker"};  
	questStageData1[7]={type:"text", question: "8) A TV presenter and personality who began her career on TV-AM in 1989. She won Celebrity Big Brother in 2009, and has 4 children by 4 different fathers", answer:"Ulrika Jonsson"};  
	questStageData1[8]={type:"text", question: "9) This politician was Secretary of State for Children, Schools and Families in Gordon Brown's government, and was later the Shadow Chancellor and Shadow Home Secretary in Ed Milliband's time. He also made it to round 10 of the 2016 edition of Strictly Come Dancing", answer:"Ed Balls"};  
	questStageData1[9]={type:"text", question: "10) The Leader of the Liberal Democrats from 2010 to 2015", answer:"Nick Clegg"};  

	questStageData2[0]={type:"picture", question:"1) What movie is being described", image:"https://lh3.googleusercontent.com/Ftq4kmwf2ZMgm2Au1KHEirPcTYyA2MfoTe5ti0A2v6cPUAyexLjvfFtcovCeJDtF8oX8j6EXHIV9HMrZj41byAmnurxMK4mfRcSw695znXl608VK__rflaCyjX_fcVMXtxvgNfEU0NU=w1920-h1080", answer:"Groundhog Day"};
	questStageData2[1]={type:"picture", question:"2) What movie is being described", image:"https://lh3.googleusercontent.com/6WCPm1plfjeAC1wf5AtpM5cOfHXKJpIqKNOHDDjpzGrtcHVmchQOnlFVdkpWdSRigiXG878YWhPnEeGz_pFCdG3v7d51PQRr4-alpdLojbIG3Am1PivMxW0jZPvGf1FrjgzGG2Irggw=w1920-h1080", answer:"The Blues Brothers"};
	questStageData2[2]={type:"picture", question:"3) What movie is being described", image:"https://lh3.googleusercontent.com/wol1toHWvBy7j2m1bkXqYgKk-UFAZrLyDIUc7FrMC_g9-NqMScku27HKEOfwtUWcVjJ35JwrCosYIPrfT9JrtG8CSsflJYKKqnREoWwnpmDT3KoDaSMnh73u9dAAojxyRLjeLJRjnO8=w1920-h1080", answer:"Monty Python's Holy Grail"};
	questStageData2[3]={type:"picture", question:"4) What movie is being described", image:"https://lh3.googleusercontent.com/409rHNmHoo-SAzBSyGgOVqUPY3ALXUQkOO5Cy1ysVHCgxvNSpDgZNgQsTyvUNfgTgpRIhmyOQkijEq80oloWN5aSPQ-tByVr-96FvpyoB8GQKbl6BGZ3hwyJWrpws-eTWPLIZRuINok=w1920-h1080", answer:"Die Hard"};
	questStageData2[4]={type:"picture", question:"5) What movie is being described", image:"https://lh3.googleusercontent.com/J0m9T7bpDxkFpwRifZJpUVR3Xkrtt9Nk3QUVeDXJJsrkDzpHkW1_BeRG3aR_rmfq-E1GPkt7y5f5-HfOOdTnZ52J5oGdCT1DN9I3HQ6i0vktLoH5u_Bn2eygjFiU6ta8R6vdDgDDSHI=w1920-h1080", answer:"Star Wars Episode 4 - An New Hope"};
	questStageData2[5]={type:"picture", question:"6) What movie is being described", image:"https://lh3.googleusercontent.com/XJc6JC-P6-HCsB0jKBcRYJ0nM1_oP1sFMxkBUOnHYmHVq_2nxrX1dSGQcUbQV4o7jr1sNtoqvv86SK68c0-pgtCE9EfPdQP_O5RK661eFdloKmLGlxYb3hgOcW4Bo6clotj7PJ-tRsU=w1920-h1080", answer:"Indiana Jones"};
	questStageData2[6]={type:"picture", question:"7) What movie is being described", image:"https://lh3.googleusercontent.com/LMEhvOeKnR0LBTzJkNtGTen-n6no_nD2NgeGw-TMZxfimmPyOeK30YoH-7A8n9QqVm46ZAiMvmVfqCRKvEXUHU6nNUbFTFQB6vU2i8yE00Q0Bc7JNXZPV4NvTF0OsJMCvaPQR-zb01w=w1920-h1080", answer:"Willy Wonka"};
	questStageData2[7]={type:"picture", question:"8) What movie is being described", image:"https://lh3.googleusercontent.com/j3ITFolL2T_If1acPvAHGbvvSgpxakgwRqAStlYFyMK8IYD1ha4dQE5EkkmJp6sDY7-cmyE2AvSbtid0_AHA0Gu9IJYR56eknnnGVxxJRFQzN9wvQu0fGoUrnM8IziU1jOVzqIK-Ops=w1920-h1080", answer:"Alien"};
	questStageData2[8]={type:"picture", question:"9) What movie is being described", image:"https://lh3.googleusercontent.com/Z1Zy8MGhGfCPUogx_zEjB7XtqlJ_A4x5YLox0v2OmYyUNXuo-xjW75wI0sf4ChVUWpz4Xuc2FBD0vqYFtesoRgo9IGxj-8u7iZbr2Zyu6-vEArORELHePLqnfGvYBd8bfL0Yp4aqWv4=w1920-h1080", answer:"The Blues Brothers"};
	questStageData2[9]={type:"picture", question:"10) What movie is being described", image:"https://lh3.googleusercontent.com/TRZFYv9bJ8WK41vbHPsiaMZLXDXXa0AwF4jtjdc0UVIZsC3LMO2ilTd9cHnufr4ov6v7EoB8Wo_G_6Ujj3GvVIH0BRSZnToUevcCTyqCMCoXpiUGDN8mC23t6E6Nc_N8RuJqoeMFluc=w1920-h1080", answer:"The Shawshank Redemption"};
	questStageData2[10]={type:"picture", question:"11) What movie is being described", image:"https://lh3.googleusercontent.com/0iFB0lViGVOxQjeg0ysgauiNEsOnCBgsYrHf1DQjbcjetog5ytjnJsbJGW-r6yd1bJlJwu-1TUbXxe0JvFWqkLoRkLzT9uUOq1vDinZPoklWE3yNAEjJm-Y4eOeVdCQ1SucOdFK9h3c=w1920-h1080", answer:"The Shining"};
	questStageData2[11]={type:"picture", question:"12) What movie is being described", image:"https://lh3.googleusercontent.com/-BnPiF7vNpvApm0LKSJY7NJZIMmRDzRMt8NFzxGWShFU9ENlN2dUvVW6iLlT7L9i_EuLLKxDbfmJoMnuv6P5kYYx7e9dVBPv6JAvDRzYvXofpPFJQcTSa9gA0SpNE9X7wUmHf47d89M=w1920-h1080", answer:"Star Wars - Rogue One"};
	questStageData2[12]={type:"picture", question:"13) What movie is being described", image:"https://lh3.googleusercontent.com/aELvrRDTktuMROee4JV_G2RE_G2nBgmoO-7qxmOfIeLFGSSm5AbyAT_n1OV2FS1aaKeVk3-1tmH7S3dmhv1dNUobp43OQlieKIEOeIkHCrZnzhzjt7AvWmO7BZ3TIsX-AwedlHvc_nw=w1920-h1080", answer:"Gremlins"};
	questStageData2[13]={type:"picture", question:"14) What movie is being described", image:"https://lh3.googleusercontent.com/9hXVzgf4pgS2kNIooGaks2pzWDRX1XEBU0L2ljJgOQ4mEjOGXKxGHRVCSlvD9WHrUXPb0z120V0VBF0VrVCxdP2Pnn8QhUVfUGEpwp1KaFweB-a4j9655p27Up658Fygkr3rj38wR-Q=w1920-h1080", answer:"Ghostbusters"};
	questStageData2[14]={type:"picture", question:"15) What movie is being described", image:"https://lh3.googleusercontent.com/RiIK1GFqHNqzySmSz3DuLY_3z0cfYG4gCDLLJ4l1KWXjVfj7WbCO0xkrW_DDs-yvxrU2GJQBOYCQCc5V5JJP-Q72ent7iL9o95-0NX85KB4eeT2outWkEJNVwVk94alX4jKjI5LH0yY=w1920-h1080", answer:"Lord of the Rings"};
	questStageData2[15]={type:"picture", question:"16) What movie is being described", image:"https://lh3.googleusercontent.com/VZAxY-QreK2gQGY6F1iGsoskG9N95jjiEiD-NhyZHhd_EEi4NemeuGlzjqWMDtFn_NRXPCnDS4Ysd9lAxdGgUBPSBIF84hUKwpeGnR6LKGl2sW4kr6YgACUNOsAezovoccuk0liwDlQ=w1920-h1080", answer:"Titanic"};
	
	questStageData3[0]={type:"text", question: "1/8 Q Foodstuffs: DELICIOUS SAVOURY FRENCH TART THAT WE WERE TOLD, IN THE '80s, 'REAL MEN DON'T EAT'", answer:"Quiche"};  
	questStageData3[1]={type:"text", question: "2/8 Q Foodstuffs: FRUIT THAT LOOKS LIKE A YELLOW PEAR", answer:"Quince"};  
	questStageData3[2]={type:"text", question: "3/8 Q Foodstuffs: HOT INGREDIENT IN A GREGGS' VEGAN SAUSAGE ROLL", answer:"Quorn"};  
	questStageData3[3]={type:"text", question: "4/8 Q Foodstuffs: WET SUBSTANCE THAT'S LIKE COTTAGE CHEESE, THAT'S EATEN BY THE BUCKETLOAD IN GERMANY, AND THAT SHARES IT'S NAME WITH AN ELEMENTARY PARTICLE", answer:"Quark"};  
	questStageData3[4]={type:"text", question: "5/8 Q Foodstuffs: PIZZA CHOICE FOR THE INFURIATINGLY INDECISIVE", answer:"QUATTRO STAGIONI (OR QUATTRO FORMAGGI)"};  
	questStageData3[5]={type:"text", question: "6/8 Q Foodstuffs: SOURCE OF THE BITTERNESS IN A G&T", answer:"Quinine"};  
	questStageData3[6]={type:"text", question: "7/8 Q Foodstuffs: IN THE METRIC-USING MCDONALDS WORLD, IT'S KNOWN AS 'HAMBURGER ROYALE', 'McROYAL', ETC", answer:"Quarter-Pounder"};  
	questStageData3[7]={type:"text", question: "8/8 Q Foodstuffs: NO-ONE'S SURE HOW TO PRONOUNCE IT", answer:"QUINOA"};  
	questStageData3[8]={type:"text", question: "What show is this:  ONE QUIET MIST (8,4) (Shouty Thursday night ding-dong)", answer:"Question Time"};  
	questStageData3[9]={type:"text", question: "What show is this:  MISTRESS, MASSAGE THEN CHEQUE (3,6,9,7)  (It's once a year at exactly the same time)", answer:"The Queen's Christmas Message"};  
	questStageData3[10]={type:"text", question: "What show is this:  STOP FOR EQUATIONS (1,8,2,5) (quiz that recently celebrated it's 50th anniversary", answer:"A Question of Sport"};  
	questStageData3[11]={type:"text", question: "What show is this:  IQ", answer:"QI"};  
	questStageData3[12]={type:"text", question: "What Movie is this:  DANIEL CRAIG / THROWN THROUGH A WINDOW / SHAKEN NOT STIRRED", answer:"A Quantom of Solace"};  
	questStageData3[13]={type:"text", question: "What Movie is this:  PROFESSOR / PRIZE MONEY / INVESTIGATION", answer:"Quiz Show"};  
	questStageData3[14]={type:"text", question: "What Movie is this:  BRIGHTON ENGLAND / MOTORCYCLE / MOD", answer:"Quadrophenia"};  
	questStageData3[15]={type:"text", question: "What Movie is this:  TONY BLAIR CHARACTER / DECORUM / BUCKINGHAM PALACE", answer:"The Queen"};  
	

	questStageData4[0]={type:"spotify", question:'Name the bands and songs', spotify:'<iframe src="https://open.spotify.com/embed/playlist/7BQJ0lhgEX1NCPKBt6TlYm" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', answer:"Cadbury, Levi's,Muller Light, Galaxy, Wrigleys, Guinness, Vauxhall, Nike, Levi's, Barclaycard,Quality Street  "};  
	

	questStageData5[0]={type:"picture", question:"1) What movie is being described", image:"https://lh3.googleusercontent.com/Ftq4kmwf2ZMgm2Au1KHEirPcTYyA2MfoTe5ti0A2v6cPUAyexLjvfFtcovCeJDtF8oX8j6EXHIV9HMrZj41byAmnurxMK4mfRcSw695znXl608VK__rflaCyjX_fcVMXtxvgNfEU0NU=w1920-h1080", answer:"Groundhog Day"};
	questStageData5[1]={type:"picture", question:"2) What movie is being described", image:"https://lh3.googleusercontent.com/6WCPm1plfjeAC1wf5AtpM5cOfHXKJpIqKNOHDDjpzGrtcHVmchQOnlFVdkpWdSRigiXG878YWhPnEeGz_pFCdG3v7d51PQRr4-alpdLojbIG3Am1PivMxW0jZPvGf1FrjgzGG2Irggw=w1920-h1080", answer:"The Blues Brothers"};
	questStageData5[2]={type:"picture", question:"3) What movie is being described", image:"https://lh3.googleusercontent.com/409rHNmHoo-SAzBSyGgOVqUPY3ALXUQkOO5Cy1ysVHCgxvNSpDgZNgQsTyvUNfgTgpRIhmyOQkijEq80oloWN5aSPQ-tByVr-96FvpyoB8GQKbl6BGZ3hwyJWrpws-eTWPLIZRuINok=w1920-h1080", answer:"Die Hard"};
	questStageData5[3]={type:"picture", question:"4) What movie is being described", image:"https://lh3.googleusercontent.com/J0m9T7bpDxkFpwRifZJpUVR3Xkrtt9Nk3QUVeDXJJsrkDzpHkW1_BeRG3aR_rmfq-E1GPkt7y5f5-HfOOdTnZ52J5oGdCT1DN9I3HQ6i0vktLoH5u_Bn2eygjFiU6ta8R6vdDgDDSHI=w1920-h1080", answer:"Star Wars Episode 4 - An New Hope"};
	questStageData5[4]={type:"picture", question:"5) What movie is being described", image:"https://lh3.googleusercontent.com/XJc6JC-P6-HCsB0jKBcRYJ0nM1_oP1sFMxkBUOnHYmHVq_2nxrX1dSGQcUbQV4o7jr1sNtoqvv86SK68c0-pgtCE9EfPdQP_O5RK661eFdloKmLGlxYb3hgOcW4Bo6clotj7PJ-tRsU=w1920-h1080", answer:"Indiana Jones"};
	questStageData5[5]={type:"picture", question:"6) What movie is being described", image:"https://lh3.googleusercontent.com/LMEhvOeKnR0LBTzJkNtGTen-n6no_nD2NgeGw-TMZxfimmPyOeK30YoH-7A8n9QqVm46ZAiMvmVfqCRKvEXUHU6nNUbFTFQB6vU2i8yE00Q0Bc7JNXZPV4NvTF0OsJMCvaPQR-zb01w=w1920-h1080", answer:"Willy Wonka"};
	questStageData5[6]={type:"picture", question:"7) What movie is being described", image:"https://lh3.googleusercontent.com/j3ITFolL2T_If1acPvAHGbvvSgpxakgwRqAStlYFyMK8IYD1ha4dQE5EkkmJp6sDY7-cmyE2AvSbtid0_AHA0Gu9IJYR56eknnnGVxxJRFQzN9wvQu0fGoUrnM8IziU1jOVzqIK-Ops=w1920-h1080", answer:"Alien"};
	questStageData5[7]={type:"picture", question:"8) What movie is being described", image:"https://lh3.googleusercontent.com/TRZFYv9bJ8WK41vbHPsiaMZLXDXXa0AwF4jtjdc0UVIZsC3LMO2ilTd9cHnufr4ov6v7EoB8Wo_G_6Ujj3GvVIH0BRSZnToUevcCTyqCMCoXpiUGDN8mC23t6E6Nc_N8RuJqoeMFluc=w1920-h1080", answer:"The Shawshank Redemption"};
	questStageData5[8]={type:"picture", question:"9) What movie is being described", image:"https://lh3.googleusercontent.com/0iFB0lViGVOxQjeg0ysgauiNEsOnCBgsYrHf1DQjbcjetog5ytjnJsbJGW-r6yd1bJlJwu-1TUbXxe0JvFWqkLoRkLzT9uUOq1vDinZPoklWE3yNAEjJm-Y4eOeVdCQ1SucOdFK9h3c=w1920-h1080", answer:"The Shining"};
	questStageData5[9]={type:"picture", question:"10) What movie is being described", image:"https://lh3.googleusercontent.com/aELvrRDTktuMROee4JV_G2RE_G2nBgmoO-7qxmOfIeLFGSSm5AbyAT_n1OV2FS1aaKeVk3-1tmH7S3dmhv1dNUobp43OQlieKIEOeIkHCrZnzhzjt7AvWmO7BZ3TIsX-AwedlHvc_nw=w1920-h1080", answer:"Gremlins"};

	questStageData6[0]={type:"spotify", question:'Name the bands and songs', spotify:'<iframe src="https://open.spotify.com/embed/playlist/0iJw4BvB6fXxphyFZydjT4" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', answer:"See below" };

	questStageData7[0]={type:"text", question: "1) Think r-r-r-r-d about: ACTOR WHO PLAYS THE SLEAZEBAG IN INDECENT PROPOSAL", answer:"Robert Redford"};  
	questStageData7[1]={type:"text", question: "2) Think r-r-r-r-d about: Who might you say 'CONSONANT PLEASE' to", answer:"Rachel Riley"};  
	questStageData7[2]={type:"text", question: "3) Think r-r-r-r-d about: SHE ALSO USED THE NAME BARBARA VINE AND IS BEST LOVED FOR HER CRIME NOVELS FEATURING CHIEF INSPECTOR WEXFORD", answer:"Ruth Rendell"};  
	questStageData7[3]={type:"text", question: "4) Think r-r-r-r-d about: IN 1988, SOMEONE APPARENTLY STITCHED UP THIS LARGE-EARED ANIMATED HERO", answer:"Roger Rabbit"};  
	questStageData7[4]={type:"text", question: "5) Think r-r-r-r-d about: FIRST WINNER OF THE BBC'S POT BLACK", answer:"Ray Reardon"};  
	questStageData7[5]={type:"text", question: "6) Think r-r-r-r-d about which sitcom: JIM, BARBARA, DENISE & ANTONY; A LIVING ROOM IN MANCHESTER", answer:"Royale Family"};  
	questStageData7[6]={type:"text", question: "7) Think r-r-r-r-d about which sitcom: ALAN, PHILIP, RUTH & RIGSBY; BEDSITS IN LEEDS", answer:"Rising Damp"};  
	questStageData7[7]={type:"text", question: "8) Think r-r-r-r-d about which sitcom: LISTER, RIMMER, HOLLY & THE CAT; A SPACESHIP IN SPACE", answer:"Red Dwarf"};  
	questStageData7[8]={type:"text", question: "9) Think r-r-r-r-d about: RIVER THAT CONNECTS THE ALPS TO ROTTERDAM", answer:"Rhine"};  
	questStageData7[9]={type:"text", question: "10) Think r-r-r-r-d about a woman's name that: IS ALSO A HERB THAT HAS PURPLE FLOWERS", answer:"Rosemary"};  
	questStageData7[10]={type:"text", question: "11) Think r-r-r-r-d about a woman's name that: IS ALSO A FLOWER WITH A FRUIT CALLED THE HIP", answer:"Rose"};  

	questStageData8[0]={type:"text", question: "1) Some months have 30 days, and some have 31. How many have 28 ?", answer:"12"};  
	questStageData8[1]={type:"text", question: "2) Your doctor prescribes you a short-term dosage of a 3 pills and tells you to take one every half hour. How long will it before all the pills have been taken ?", answer:"1 hour"};  
	questStageData8[2]={type:"text", question: "3) You go to bed at eight o'clock in the evening and wound up your clock and set the alarm to sound at nine o'clock in the next morning. How many hours sleep would you get before being awoken by the alarm?", answer:"1 hour"};  
	questStageData8[3]={type:"text", question: "4) Divide 30 by half and add ten. What do you get ?", answer:"70"};  
	questStageData8[4]={type:"text", question: "5) A smallholder had 17 sheep. All but 9 died. How many live sheep were left?", answer:"9 live sheep"};  
	questStageData8[5]={type:"text", question: "6) If you had no torch and only one match and entered a cold and dark room where there was an oil-heater, an oil lamp and a candle, which would you light first?", answer:"The match"};  
	questStageData8[6]={type:"text", question: "7) A man builds a log cabin, each of its four sides having a southern aspect.   A big bear comes along. What colour is the bear ?", answer:"White"};  
	questStageData8[7]={type:"text", question: "8) Take 2 apples from 3 apples. What do you have?", answer:"2"};  
	questStageData8[8]={type:"text", question: "9) How many animals of each species did Moses take with him in the Ark ?", answer:"None.  Noah built the ark"};  
	questStageData8[9]={type:"text", question: "10) If you drove a bus with 43 people on board from Chicago ; stopped at Pittsburgh to pick up 7 more people and drop off 5, then at Cleveland to drop off 8 passengers and pick up 4 more and eventually arrive at your destination, Philadelphia, twenty- three hours later, what's the name of the driver ?", answer:"It's you"};  

	
	questStageData9[0]={type:"spotify", question:'', spotify:'<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRm7q0c3dgVMI_pieDAUPcSHXQ8N3I20dHQytGEjaKsq2Pj-l2xHcRpud-McY2UhU_qrBcLyVRidpOJ/embed?start=false&loop=false&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>', answer:"Click the presentation to move it along" };
    
	questStageData10[0]={type:"spotify", question:'', spotify:'<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTFS0ioY_80AznY_04yr-mesC8CahAKNO4rUeR45xjUh7a2gIKFuOZlYQ4AGQrOARcb0BJsKZoLKNcM/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>', answer:"Click the presentation to move it along" };

	questStageData11[0]={type:"spotify", question:'', spotify:'<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRLux5wF0KqAq69FylKlLOz8tv1m2pBUfQTpd-txSAutEdeSW5rXEC5J6Z9ZTS4caRbILadSTVHgsYL/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>', answer:"Click the presentation to move it along" };
	
	questStageData12[0]={type:"spotify", question:'', spotify:'<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRzPaDPQkdmnQTCxKNtLTi1WBNtF0poi8SdmfLVDcgdKaM3BMgrhVpnvRPjAq3WrOrls1kkNhzGLvpp/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>', answer:"Click the presentation to move it along" };
	
	questStageData13[0]={type:"spotify", question:'', spotify:'<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQVHaaKH0JPvoPpGNT_RhXv-TGphefczu4ZPvEN7d3xTvzxgxyZTkWpjME28FX7vbh9KkLiMwV_GCs4/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>', answer:"Click the presentation to move it along" };
	
	questStageData14[0]={type:"spotify", question:'Name the song from listening to the cover version', spotify:'<iframe src="https://open.spotify.com/embed/playlist/1EeBqa824BFoC2Ygu8LN3h" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', answer:"See below" };

	questStageData15[0]={type:"text", question: "1) They were 7... and they fought like 700.", answer:"The Magnificent 7"};  
	questStageData15[1]={type:"text", question: "2) They're young, they're in love, and they kill people.", answer:"Bonnie and Clyde"};  
	questStageData15[2]={type:"text", question: "3) Who you gonna call?", answer:"Ghostbusters"};  
	questStageData15[3]={type:"text", question: "4) He may be dead but he's the life of the party.", answer:"Weekend at Bernie's"};  
	questStageData15[4]={type:"text", question: "5) Escape or die frying.", answer:"Chicken Run"};  
	questStageData15[5]={type:"text", question: "6) On the air and unaware.", answer:"The Truman Show"};  
	questStageData15[6]={type:"text", question: "7) You'll never go in the water again.", answer:"Jaws"};  
	questStageData15[7]={type:"text", question: "8) If Nancy doesn't wake up screaming, she won't wake up at all...", answer:"Nightmare on Elm Street"};  
	questStageData15[8]={type:"text", question: "9) Still the fairest of them all", answer:"Snow White"};  
	questStageData15[9]={type:"text", question: "10) With great power comes great responsibility.", answer:"Spiderman"};  

	questStageData16[0]={type:"picture", question:"1) What movie is this poster from?", image:"https://lh3.googleusercontent.com/o3wM7Rlsymfs1zk7MVPvwBfUSnUXI2cMh5EK7GGhsK6sE5FHb_lEMjZ68hXhAv3Z9aToPu_oertdAVcxNIgQutBvN1RY3Zj7RdhUO37UspHslxNxbo8g847N4nS5Icq42Z-saViuvww=w1920-h1080", answer:"127 Hours"};
	questStageData16[1]={type:"picture", question:"2) What movie is this poster from?", image:"https://lh3.googleusercontent.com/TtH2YQ_g5y_1v3O7dhXkrd52BqXybuGUxlQTauP1FpsMybmdC6ocmQXhOc7SzIsKq100fSVPpEVouKoWpEMeMyA6vdzUrpgc_RhLwABfG4jUAzzcJPXW2cuygZmiSL89Q4Pfw-E44bk=w1920-h1080", answer:"The Exorcist"};
	questStageData16[2]={type:"picture", question:"3) What movie is this poster from?", image:"https://lh3.googleusercontent.com/dVpwT1gFN7BylCzNX6DQKzT-IxS5lKU1IpqYmVrTeR2n-YA8PHwOuzxeXUyLRi4DgKVXg1TN2Y7pBn_adYQWhE9zOLvIpk7Hlw5L0dnDIC1pKO6Kri26_M21953rHExeekS4KVqK_dk=w1920-h1080", answer:"The Adams Family"};
	questStageData16[3]={type:"picture", question:"4) What movie is this poster from?", image:"https://lh3.googleusercontent.com/iixdjuNWTzFsiNRjPfrKPeFK2ZX-qULYCf2nq9b0cF5ok3oDB3clubLuJOlNB7yCak8iKF9bKwvLIKWozDr1QCVRHl-u3K5A8GWD5u2GBGhsrvxbomnz3lHwGG-PYXLOpj0h1bpsKWA=w1920-h1080", answer:"A Clockwork Orange"};
	questStageData16[4]={type:"picture", question:"5) What movie is this poster from?", image:"https://lh3.googleusercontent.com/83Bd4vCa8HyH94-xIHB0x-NbPuon1fr5rz6LEC2iWI665ebnRf48N9jxV96TIDBERbHiMlI_pQBXcxTU9Dqb6cTuLrYda77xZQgpKlmA-yjV5OiScakRi-QQSmLN7xlhCcQmBvd79Y4=w1920-h1080", answer:"Apocalypse Now"};
	questStageData16[5]={type:"picture", question:"6) What movie is this poster from?", image:"https://lh3.googleusercontent.com/lpBl6z_whQ8d-FSUAkoeN1_iolH6Lo3bniX_sNwhe0oFxtmO5P1HtipOTfCHUiiKDB5QMk1kmPCetqbs6r6I9deWqK--I8VKzpbYY5WXM1Zwpx5TiVhQQ0MAmO-gzDtnu0flfgTWrhw=w1920-h1080", answer:"Alien"};
	questStageData16[6]={type:"picture", question:"7) What movie is this poster from?", image:"https://lh3.googleusercontent.com/86EzzY9Ma0nhBvJd19ZkKdfUpJf9F3JxTeBngsz-KgxkjqgPxh65E_qd8JwyEZXYSP4k9UfpHOmVU_sCCmpmfjTAFhQTm5xBotLc8YjELqaIMtrdqchrdKh23Vklcoto6329RgoFek4=w1920-h1080", answer:"Jurassic Park"};
	questStageData16[7]={type:"picture", question:"8) What movie is this poster from?", image:"https://lh3.googleusercontent.com/Jbtw5fKNP41Cn_90RAGxZwIROyeMKG8aXJG0sZLtX-1Nu35UpbMIjP7TwfpemIRZcnobzYYu5vE5u8D-tb4ntd2H8hq8oAU2e80_pnZIWCfcxWb_npWDEpIzdbaasgzgW_GIrdJGu9k=w1920-h1080", answer:"Jaws"};
	questStageData16[8]={type:"picture", question:"9) What movie is this poster from?", image:"https://lh3.googleusercontent.com/tanBL005CepUiOhIzoP82rfsTJl80NxtjKyph8DEezypNRk2xa3_m7RTk0yBCnVesXXL1FImg7U_No91VpkcfYOckAIqTvkFjBo_ewdx4Z2HHKCPphDPZRfXDIqqmZ_DjKSVoKz8ZQc=w1920-h1080", answer:"Forrest Gump"};
	questStageData16[9]={type:"picture", question:"10) What movie is this poster from?", image:"https://lh3.googleusercontent.com/MzegFIpHwEb_ou-DOsqgeulo2N3B2L4Qf5s1nQUsJCA3GuskuGVvrEuATWxAbZOO0JuHTPigt6sO-2Ks6ndSny_wP5KjGnc9IbJFPvUcvl_CTySSJp9QarWWBOJLI6zHqrUiz_X2rjM=w1920-h1080", answer:"Gremlins"};

	questStageData17[0]={type:"text", question: "1) SHE PLAYED CATHERINE TRAMELL IN BASIC INSTINCT AND BASIC INSTINCT 2", answer:"Sharon Stone"};  
	questStageData17[1]={type:"text", question: "2) HE DIDN'T KNOW WHAT WAS GOING ON BEHIND THE GREEN DOOR", answer:"Shakin' Stevens"};  
	questStageData17[2]={type:"text", question: "3) BLOCKBUSTER FILM DIRECTOR - Directed lots of the films mentioned already", answer:"Steven Spielberg"};  
	questStageData17[3]={type:"text", question: "4) ONE OF THE ORIGINAL PRESENTERS OF TVAM AND FRIEND OF RANDY ANDY", answer:"Selina Scott"};  
	questStageData17[4]={type:"text", question: "5) SEVENTH-DAN BLACK BELT IN AIKIDO WHOSE FILMS HAVE TITLES LIKE HARD TO KILL, OUT FOR A KILL, DRIVEN TO KILL AND CONTRACT TO KILL", answer:"Steven Seagal"};  
	questStageData17[5]={type:"text", question: "6) SCOTTISH, BUT YOU'D FIND HER IN TEXAS", answer:"Sharleen Spiteri"};  
	questStageData17[6]={type:"text", question: "7) NOT THELMA", answer:"Susan Sarandan"};  
	questStageData17[7]={type:"text", question: "8) FORMER AUSTRALIAN CRICKET CAPTAIN WHO CRIED AFTER BEING FOUND GUILTY OF HIS PART IN A BALL-TAMPERING INCIDENT", answer:"Steve Smith"};  
	questStageData17[8]={type:"text", question: "9) HIS 'WRITING'S ON THE WALL' WAS THE BIG BOND THEME FOR SPECTRE", answer:"Sam Smith"};  
	questStageData17[9]={type:"text", question: "10) HE WROTE THE SCREENPLAY FOR 'ROCKY' IN 3 1/2 DAYS", answer:"Sylvester Stallone"};  

	
	questStageData18[0]={type:"spotify", question:'Listen to the original version and then name the artist with the successful version', spotify:'<iframe src="https://open.spotify.com/embed/playlist/1EpZ08Dw21Hl6BhXjYmWbL" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', answer:"See below" };

	questStageData19[0]={type:"spotify", question:'Listen to the original version and then name the artist with the successful version', spotify:'<iframe src="https://open.spotify.com/embed/playlist/693Xb4oIYD2BVk4fdwkoJn" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', answer:"See below" };

	questStageData20[0]={type:"text", question: "1) Whose Surname starts with 'U' - Midge, whose band name also began with 'U'?", answer:"Ure"};  
	questStageData20[1]={type:"text", question: "2) Whose Surname starts with 'U' - Peter, raconteur?", answer:"Ustinov"};  
	questStageData20[2]={type:"text", question: "3) Whose Surname starts with 'U' - Tracey, who was 3 of a kind and her US show was The Simpsons first home?", answer:"Ullman"};  
	questStageData20[3]={type:"text", question: "4) What 'U' word is pronounced with the stress on the first syllable in the BBC Pronunciation Guide, which pointedly adds 'this is the preferred usage of astronomers'?", answer:"Uranus"};  
	questStageData20[4]={type:"text", question: "5) What 'U' song was a Showaddywaddy reworking of a Doo-Wap classic?", answer:"Under the moon of love"};  
	questStageData20[5]={type:"text", question: "6) What does the 'U' stand for in UFO?", answer:"Unidentified"};  
	questStageData20[6]={type:"text", question: "7) What does the 'U' stand for in POTUS?", answer:"United"};  
	questStageData20[7]={type:"text", question: "8) What does the 'U' stand for in USB?", answer:"Universal"};  
	questStageData20[8]={type:"text", question: "9) What does the 'U' stand for in UB40?", answer:"Unemployment"};  
	questStageData20[9]={type:"text", question: "10) What does the 'U' stand for in UNESCO?", answer:"United"};  

	questStageData21[0]={type:"text", question: "1) In cubic metres, how much soil is there in a hole that is three metres wide, four metres long, and five metres deep?", answer:"Zero"};
	questStageData21[1]={type:"text", question: "2) Jane and Bob have four daughters. Each of their daughters has one brother. How many children do Jane and Bob have in total?", answer:"5"};
	questStageData21[2]={type:"text", question: "3) What word becomes shorter when you add two letters to it?", answer:"Short"};
	questStageData21[3]={type:"text", question: "4) A cashier at a butcher shop is 5 feet 9 inches tall, wears size 8 shoes, and is 32 years old. What does she weigh?", answer:"Meat"};
	questStageData21[4]={type:"text", question: "5) A cowboy rides into town on Friday. He stays three days, then rides out of town on Friday. How?", answer:"Friday is his horse"};
	questStageData21[5]={type:"text", question: "6) If you had no torch and only one match and entered a cold and dark room where there was an oil-heater, an oil lamp and a candle, which would you light first?", answer:"The match"};  
	questStageData21[6]={type:"text", question: "7) A man builds a log cabin, each of its four sides having a southern aspect.   A big bear comes along. What colour is the bear ?", answer:"White"};  
	questStageData21[7]={type:"text", question: "8) If you drove a bus with 43 people on board from Chicago ; stopped at Pittsburgh to pick up 7 more people and drop off 5, then at Cleveland to drop off 8 passengers and pick up 4 more and eventually arrive at your destination, Philadelphia, twenty- three hours later, what's the name of the driver ?", answer:"It's you"};  
	questStageData21[8]={type:"text", question: "9) There's a boat full of people but not a single person on board. How?", answer:"They're all married"};
	questStageData21[9]={type:"text", question: "10) 5 + 5 + 5 = 550   With a single line make the equation correct.", answer:"5 4 5 + 5=550"};
	questStageData21[10]={type:"text", question: "11) There are 30 cows in a field and 28 chickens, how many didn't?", answer:"20 ate chickens - so 10 didn't"};
	
	

	questStageData22[0]={type:"text", question: "1) What is the technical term for planting seeds", answer:"Sowing"};
	questStageData22[1]={type:"text", question: "2) Which of these nutrients do plants not get from the soil?  Phosphorus, Nitrogen, Potassium, Carbon.", answer:"Carbon"};
	questStageData22[2]={type:"text", question: "3) All of the following plants are from the same family except one... Potatoes, Radishes, Tomatoes, Aubergine", answer:"Radishes.    Potatoes, tomatoes, and aubergines are all part of Solanaceae family"};
	questStageData22[3]={type:"text", question: "4) What is the term for a plant that continues to grow season after season for at least two years?", answer:"Perennial"};
	questStageData22[4]={type:"text", question: "5) Which of these is a perennial plant?  Strawberry, Pea, Watermelon, Maize", answer:"Strawberry.  Pea, watermelon, and maize plants are annuals that die within one year of being planted"};
	questStageData22[5]={type:"text", question: "6) Which of these foods is not from the rose family?  Almonds, Apples, Raspberries, Grapes", answer:"Grapes.  Almonds, apples, and raspberries are all in Rosaceae - the rose family"};
	questStageData22[6]={type:"text", question: "7) Which of these insects is not considered beneficial to a garden?  Ladybirds, Spiders, Bumblebees, Grasshoppers", answer:"Grasshoppers"};
	questStageData22[7]={type:"text", question: "8) Which of these is a shade plant?   Fern, Peony, Daylily, Lavender", answer:"Ferns.  Peonies, daylilies, and Lavender are full sun plants and thrive with lots of sunlight"};
	questStageData22[8]={type:"text", question: "9) Which of the following is not a reason why mulch is used?  (1)to dry out wet soil (2)to prevent weeds (3)to keep the soil cool", answer:"(1) Mulch helps keep the soil moist, not dry."};
	questStageData22[9]={type:"text", question: "10) Which plant takes its name from the Italian phrase for beautiful women?", answer:"Belladonna"};

	questStageData23[0]={type:"text", question: "1) You just bought a rooster. You expect to get three fresh eggs every morning. After two weeks and three days with the bird, how many eggs do you have?", answer:"0"};
	questStageData23[1]={type:"text", question: "2) What word in the dictionary is always spelled incorrectly?", answer:"Incorrectly"};
	questStageData23[2]={type:"text", question: "3) You're running a marathon and you just passed the person who was in second place. What place are you in now?", answer:"2nd"};
	questStageData23[3]={type:"text", question: "4) In what month do people get the least sleep?", answer:"February"};
	questStageData23[4]={type:"text", question: "5) In cubic metres, how much soil is there in a hole that is three metres wide, four metres long, and five metres deep?", answer:"Zero"};
	questStageData23[5]={type:"text", question: "6) What has a head and a tail, but no body?", answer:"A Coin"};
	questStageData23[6]={type:"text", question: "7) Jane and Bob have four daughters. Each of their daughters has one brother. How many children do Jane and Bob have in total?", answer:"5"};
	questStageData23[7]={type:"text", question: "8) How many times can you subtract five from 25?", answer:"1"};
	questStageData23[8]={type:"text", question: "9) What occurs once in a year, twice in a week, but never in a day?", answer:"The letter E"};
	questStageData23[9]={type:"text", question: "10) Barry's dad has three sons: Snap, Crackle, and ____.", answer:"Barry"};
	questStageData23[10]={type:"text", question: "11) What word becomes shorter when you add two letters to it?", answer:"Short"};
	questStageData23[11]={type:"text", question: "12) A cashier at a butcher shop is 5 feet 9 inches tall, wears size 8 shoes, and is 32 years old. What does she weigh?", answer:"Meat"};
	questStageData23[12]={type:"text", question: "13) If three kids can eat three hot dogs in three minutes, how many minutes would it take 100 kids to eat 100 hot dogs?", answer:"3 minutes"};
	questStageData23[13]={type:"text", question: "14) If there are 12 fish and half of them drown, how many are left?", answer:"12"};
	questStageData23[14]={type:"text", question: "15) An electric train is moving north at 100 mph. Which way does the smoke blow?", answer:"There is no smoke from an electric train"};
	questStageData23[15]={type:"text", question: "16) In American law, is it legal for a man to marry his widow's sister?", answer:"No, as he's dead"};
	questStageData23[16]={type:"text", question: "17) A cowboy rides into town on Friday. He stays three days, then rides out of town on Friday. How?", answer:"Friday is his horse"};
	questStageData23[17]={type:"text", question: "18) Name 3 consecutive days not using the words Monday-Sunday?", answer:"Yesterday, today, tomorrow.  XMas Eve, XMas day, Boxing day"};
	questStageData23[18]={type:"text", question: "19) There's a boat full of people but not a single person on board. How?", answer:"They're all married"};
	questStageData23[19]={type:"text", question: "20) 5 + 5 + 5 = 550   With a single line make the equation correct?", answer:"5 4 5 + 5=550"};
	questStageData23[20]={type:"text", question: "21) There are 30 cows in a field and 28 chickens, how many didn't?", answer:"20 ate chickens - so 10 didn't"};

	questStageData24[0]={type:"spotify", question:'', spotify:'<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQE-k_OkTyLij7r25w5RFnWbRAq0UsptH6a_9lwcWYtpxLJVKMUm7jL3PxnWwj-iVULoo5e-CzfWB4q/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>', answer:"Click the presentation to move it along" };

	questStageData25[0]={type:"spotify", question:'', spotify:'<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRGaZ-jj3ASdld6FiH1bdB2gxoX4jk9lKhILOvQeVofFZu2cD5efoG1PhCX_TwO8A/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>', answer:"Click the presentation to move it along" };

	questStageData26[0]={type:"spotify", question:'', spotify:'<iframe src="https://open.spotify.com/embed/playlist/4iIdS1qhLZ2wXWtjgTksAe" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', answer:"Answers under the questions in the list" };

	questStageData27[0]={type:"text", question: "1) Which shrub has yellow flowers and red berries when the flowers fall off? It is used to treat mild depression amongst other things. A point each for the Latin and common name", answer:"Hypericum / St John's Wort"};
	questStageData27[1]={type:"text", question: "2) What is Musselburgh a variety of -  Tomato, Potato, Cabbage or Leek?", answer:"Leek"};
	questStageData27[2]={type:"text", question: "3) The gel of this plant is used to treat burns - what is it?", answer:"Aloe Vera"};
	questStageData27[3]={type:"text", question: "4) Which TV presenter and gardener runs a garden in Herefordshire called Longmeadow?", answer:"Monty Don"};
	questStageData27[4]={type:"text", question: "5) What is the art of cutting shrubs into ornamental shapes?", answer:"Topiary"};
	questStageData27[5]={type:"text", question: "6) The Love Apple is the original name for what?", answer:"Tomato"};
	questStageData27[6]={type:"text", question: "7) Roughly how many varieties of avocado are there: 5, 50, 500, or 5000", answer:"500"};
	questStageData27[7]={type:"text", question: "8) What garden did the Beatles sing about?", answer:"Octopus's"};
	questStageData27[8]={type:"text", question: "9) Which sisters told you to not sit under the apple tree?", answer:"Andrews"};
	questStageData27[9]={type:"text", question: "10) What fruity hat did Prince sing about", answer:"Raspberry Beret"};
	questStageData27[10]={type:"text", question: "11) Which vegetable is Borscht made from?", answer:"Beetroot"};
	
	questStageData28[0]={type:"text", question: "6 Anagrams. 2 of these are vegetables, 2 are flowers and 2 are things you could find in a garden.  (1) OCCURS (6)", answer:"Crocus"};
	questStageData28[1]={type:"text", question: "6 Anagrams. 2 of these are vegetables, 2 are flowers and 2 are things you could find in a garden.  (2) GEE HOSE RUN (10)", answer:"Greenhouse"};
	questStageData28[2]={type:"text", question: "6 Anagrams. 2 of these are vegetables, 2 are flowers and 2 are things you could find in a garden.  (3) POSTERS SLUR SUB (7,7)", answer:"Brussel sprouts"};
	questStageData28[3]={type:"text", question: "6 Anagrams. 2 of these are vegetables, 2 are flowers and 2 are things you could find in a garden.  (4) AWE SHEEP (5,3)", answer:"Sweet Pea"};
	questStageData28[4]={type:"text", question: "6 Anagrams. 2 of these are vegetables, 2 are flowers and 2 are things you could find in a garden.  (5) BRA WHERE OWL (11)", answer:"Wheelbarrow"};
	questStageData28[5]={type:"text", question: "6 Anagrams. 2 of these are vegetables, 2 are flowers and 2 are things you could find in a garden.  (6) TATTOOS WEEP (5,6)", answer:"Sweet potato"};
	
	questStageData29[0]={type:"picture", question:"1) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/-8dIILpj1NkrHgTNnIFNP0T6VdbZAmC-zei0R_hHN0xHMKhgaRsDPQ4B5MIm3N6JhbH2HZe7KHdWcOYaUtEQrO51AZGFl8YSza-ND99Ocug9tmZxA__aXztPbIMgvdcSgk-TKmGzohc=w1920-h1080", answer:"Monster"};
	questStageData29[1]={type:"picture", question:"2) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/FyaXwxAUIL84-ql8_zFUEMdSK77KcOl7Zg9Y7RuzrQRSj2Fj98QureFMs1QObsEoNtcq61JKmFQovjVUgeaxgb-YW8ms5LyHm6wDXdE4NoWeeI2AEPDumSsXiP9kXVOygvWTIk6e11o=w1920-h1080", answer:"Shell"};
	questStageData29[2]={type:"picture", question:"3) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/VrWq8dE_Loh_XRzbD2LvS6ux_P0ytYfE6XvvPBnK0b6s85FaWhIXPa8twFdUJReXr5gLRhUkoKxs9JS2a14c2nUC-_SNz-ZwVGhIMbW1aIT7gngJyxhoKAafD-b_ttkSVvoLW99YbdE=w1920-h1080", answer:"Wikipedia"};
	questStageData29[3]={type:"picture", question:"4) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/wF29bBahU77CRXR0hO5-1j2X-fjesEZhTPtsCzYO5UUG91juS7H5YrzSX0ZioiYS0Lgo3nCvsXCkwidZCD_a_0XyyN83UWJP2ctYtK_ADsHQIw9wCxNHf63BHgEs7Sf8JtxOLIYdaXc=w1920-h1080", answer:"Apple"};
	questStageData29[4]={type:"picture", question:"5) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/X-ZS-_3HJPqfOnY-y5pOZACWlr1KYk_MTOiK4D34dGvkSODGDMZaVi0ATTm3DDtywgS1_n6p7XJC6-kR54xFBWqVp2Rja2g_o0GiJa_N8UdbgyIpdepxitAkTpByN3ixq4VNwm50BYs=w1920-h1080", answer:"Pringles"};
	questStageData29[5]={type:"picture", question:"6) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/9-RBMXL-Bn_CW2TSJwJttIX7sJFMI7R8eGGWwAs1V6fZBoMNglQV80wl4cFt__hpbr_vROc8AtXQ8DGTPpH8-gnn_r1UPC0l5nQHkRzn0i5pwvDgymWNdWek3guHK3QqRwsmcGjHUGc=w1920-h1080", answer:"Atari"};
	questStageData29[6]={type:"picture", question:"7) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/VOls4_UqSQLMjHtK06L01G-HTrPv7QwNDJT2uycEqFGNf91uh32J8kI9gvcyzLX8vvS-DDc8GCpPQu7B3nZMBtlHwaABhgLxm5PzOKy7hr0XUT2liFILh89dFyQGtDi5XM6nLu_CTnY=w1920-h1080", answer:"Playstation"};
	questStageData29[7]={type:"picture", question:"8) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/t3jSSJ_gHnBfC_iOHNQprtZKaLoAVAKRhDHSXYtqXZUwt0jT6ZTO5TLxEaov2fuVsDNCILomt-3xqzfh_nOv0H4cf_QwfAyDmugg4Yh2MX7cPRQn5RltLFJZjpDbvFqpRi8Cgf0HRLU=w1920-h1080", answer:"Amazon"};
	questStageData29[8]={type:"picture", question:"9) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/25zFF794bbwvNWgGJgPSBuNdy0oWGHevoX3vW31e7-Ew0r5f0vUNYK4h77hYet4xB7eeLAu3EvBvbbepkMIK_emHZRX8ApQxZt8MHwvRjcIkLIIbTlkRqA-YQHOM6wSv2WhRVxRqk_s=w1920-h1080", answer:"BP"};
	questStageData29[9]={type:"picture", question:"10) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/7MwqHEE-73iAJjrA5vHGVT9oaHvHMjCnF6rlv9jg8b7vg0KiQUZGtr-N5_Mz3sUjHDFv-zZPchmisCQATQhcX5xz_TvcbhZkzXa2tPbyGYB5uKcrmvyhe9e_UePTt05KfAafYPL-HTk=w1920-h1080", answer:"KFC"};
	questStageData29[10]={type:"picture", question:"11) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/sZ-s6x8jbE3vV6wSKtQ8hONuYO0JYqJOfNA3-knJIebwgTuBFVyux4CzLX0W1dI-3WCBX1A9dROtvgQZT3MJydn0QVpwSRcOu6_PlXLYFO-sSAk34FRxcgtIS6chlYeRzk6kH6PRIzQ=w1920-h1080", answer:"Firestone"};
	questStageData29[11]={type:"picture", question:"12) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/xBqadt36AfqRABtqdWWZdm6s8vWYln19h3W1gBqJpNcFo151oiY_ECkTlGWeAKXmzUVLQYj2WDbsJnT9NSfhB0qwjwnhrcMIu1pmfWck7rhQlDzULEydbYxZhdZi1T6ESMO8SNxCCxU=w1920-h1080", answer:"Pepsi"};
	questStageData29[12]={type:"picture", question:"13) Who does this logo belong to?", image:"https://lh3.googleusercontent.com/LQ51S9XhTR39q6B5FE021n9I9wtS6oyoNdj1CokbS-9zQxn9YlwMkOp5O9xptec5EY_zqbLfBlg1YoPJX9dFzYJ3anWRapgtEj8g6gVhD4E7l4HotkVUqhqnuqpYqYaAOrwBsWshVCs=w1920-h1080", answer:"Skoda"};

	questStageData30[0]={type:"text", question: "1) WHO THE SONG VINCENT IS ABOUT", answer:"VINCENT VAN GOGH"};
	questStageData30[1]={type:"text", question: "2) BASILDON-BORN THE BIG BREAKFAST HOST", answer:"DENISE VAN OUTEN"};
	questStageData30[2]={type:"text", question: "3) ROBERT WHO INVENTED A MACHINE THAT CAUSES LAUGHTER IN PHYSICS CLASSES WHEN THE TEACHER'S HAIR STANDS ON END", answer:"VAN DE GRAAFF"};
	questStageData30[3]={type:"text", question: "4) WROTE 'MOONDANCE' AND 'BROWN EYED GIRL'. REAL FIRST NAME GEORGE IVAN", answer:"VAN MORRISON"};
	questStageData30[4]={type:"text", question: "5) RIP WHOSE TALE WAS FIRST TOLD IN 1819", answer:"RIP VAN WINKLE"};
	questStageData30[5]={type:"text", question: "6) FAMOUSLY DEAF COMPOSER", answer:"LUDWIG VAN BEETHOVEN"};
	questStageData30[6]={type:"text", question: "7) EDDIE WHO PLAYED THE BLISTERING GUITAR SOLO ON 'BEAT IT'", answer:"VAN HALEN"};
	questStageData30[7]={type:"text", question: "8) BELGIAN WHO WAS IN THE SAME FRIENDS EPISODE AS BROOKE SHIELDS", answer:"JEAN-CLAUDE VAN DAMME"};
	questStageData30[8]={type:"text", question: "9) Alternative name for Tasmania", answer:"Van Diemen's Land"};

	questStageData31[0]={type:"text", question: "1) POET LAUREATE WHO WANDERED LONELY AS A CLOUD", answer:"William Wordsworth"};
	questStageData31[1]={type:"text", question: "2) YE MAY TAK' AWA' HIS LIFE BUT YE’LL NEVER TAK’ HIS FREEDOM", answer:"William Wallace"};
	questStageData31[2]={type:"text", question: "3) I'VE BEEN PLAYED BY BOTH GENE WILDER AND JOHNNY DEPP", answer:"Willy Wonka"};
	questStageData31[3]={type:"text", question: "4) AMERICAN PRESIDENT THAT WOODY GUTHRIE WAS NAMED AFTER", answer:"Woodrow Wilson"};
	questStageData31[4]={type:"text", question: "5) SUPERHERO WHO, INTERESTINGLY, WAS DEVISED BY THE INVENTOR OF THE LIE DETECTOR", answer:"Wonder Woman"};
	questStageData31[5]={type:"text", question: "6) CARTOON CHARACTER DEVISED WHEN A NOISY BIRD DISTURBED AN ANIMATOR'S HONEYMOON", answer:"Woody Woodpecker"};
	questStageData31[6]={type:"text", question: "7) What is the most successful movie based on a sketch from Saturday Night Live?", answer:"Wayne's World"};
	questStageData31[7]={type:"text", question: "8) A word that begins & ends with 'W':  W_W (Blimey!  3)", answer:"Wow"};
	questStageData31[8]={type:"text", question: "9) A word that begins & ends with 'W':  W----W (Porthole, bay, stained glass etc, 6)", answer:"Window"};
	questStageData31[9]={type:"text", question: "10) A word that begins & ends with 'W':  W----W (They make cricket bats out of it, 6)", answer:"Willow"};
	questStageData31[10]={type:"text", question: "11) A word that begins & ends with 'W':  W------W (Pull out, 8)", answer:"Withdraw"};
	questStageData31[11]={type:"text", question: "12) A word that begins & ends with 'W':  W---------W (A type of race, or a type of garden equipment, 11)", answer:"Wheelbarrow"};

	questStageData32[0]={type:"text", question: "1) Which bees produce milk?", answer:"Boobies"};
	questStageData32[1]={type:"text", question: "2) What time does Sean Connery go to Wimbledon?", answer:"Tennish"};
	questStageData32[2]={type:"text", question: "3) Why can't you hear a Pteradactyl going to the toilet?", answer:"The P is silent"};
	questStageData32[3]={type:"text", question: "4) Where did Noah keep his bees?", answer:"In the ark hives"};
	questStageData32[4]={type:"text", question: "5) Why can't you trust atoms?", answer:"They make up everything"};
	questStageData32[5]={type:"text", question: "6) A slice of apple pie is $2 in Jamaica. A slice of apple pie is $2.50 in the Bahamas.  These are the ...", answer:"Pie rates of the Caribbean"};
	questStageData32[6]={type:"text", question: "7) I bought shoes from a drug dealer once. I don't know what he laced them with...", answer:"but I was tripping all day"};
	questStageData32[7]={type:"text", question: "8) Did you hear about the guy who dipped his testicles in glitter?", answer:"Pretty Nuts"};
	questStageData32[8]={type:"text", question: "9) Why is Carlseberg like making love in a canoe?", answer:"Because it's fucking close to water."};
	questStageData32[9]={type:"text", question: "10) Without a doubt, my favorite Robin Williams movie is...", answer:"Mrs Fire"};
	questStageData32[10]={type:"text", question: "11) Prediction.  In 9 months there will be a baby boom, and in 2033 we will witness the rise of the...", answer:"....Quaranteens"};

	questStageData33[0]={type:"spotify", question:'Guess the songname', spotify:'<iframe src="https://open.spotify.com/embed/playlist/6mF4DxvnvuBt9pQa42t32l" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>', answer:"No answers" };
	
	
	questInfoData[0]={stageData:questStageData0};
	questInfoData[1]={stageData:questStageData1};
	questInfoData[2]={stageData:questStageData2};
	questInfoData[3]={stageData:questStageData3};
	questInfoData[4]={stageData:questStageData4};
	questInfoData[5]={stageData:questStageData5};
	questInfoData[6]={stageData:questStageData6};
	questInfoData[7]={stageData:questStageData7};
	questInfoData[8]={stageData:questStageData8};
	questInfoData[9]={stageData:questStageData9};
	questInfoData[10]={stageData:questStageData10};
	questInfoData[11]={stageData:questStageData11};
	questInfoData[12]={stageData:questStageData12};
	questInfoData[13]={stageData:questStageData13};
	questInfoData[14]={stageData:questStageData14};
	questInfoData[15]={stageData:questStageData15};
	questInfoData[16]={stageData:questStageData16};
	questInfoData[17]={stageData:questStageData17};
	questInfoData[18]={stageData:questStageData18};
	questInfoData[19]={stageData:questStageData19};
	questInfoData[20]={stageData:questStageData20};
	questInfoData[21]={stageData:questStageData21};
	questInfoData[22]={stageData:questStageData22};
	questInfoData[23]={stageData:questStageData23};
	questInfoData[24]={stageData:questStageData24};
	questInfoData[25]={stageData:questStageData25};
	questInfoData[26]={stageData:questStageData26};
	questInfoData[27]={stageData:questStageData27};
	questInfoData[28]={stageData:questStageData28};
	questInfoData[29]={stageData:questStageData29};
	questInfoData[30]={stageData:questStageData30};
	questInfoData[31]={stageData:questStageData31};
	questInfoData[32]={stageData:questStageData32};
	questInfoData[33]={stageData:questStageData33};
	questInfoData[34]={stageData:questStageData34};
	questInfoData[35]={stageData:questStageData35};
	
	
	function SQInit(){
    	document.write("<div id='SQQuiz'><span id='SQworkarea' class='grad'><table border='0'><table border='1'>" +
    		"<tr><td><span id='SQmenu'></span></td>"+
    		"<td><span id='SQButtons'></span></td></tr></table>"+
    		"<tr><td><span id='SQAnswer'></span></td></tr>"+
    		"<tr><td><span id='SQquestData'></span></td></tr>"+
    		"<tr><td><span id='SQImage'></span></td></tr>"+
    		"</table></span></div>");
    	
		SQInitMenu();
		SQInitQuestData();
		
		
		if (currQuestStageIndex > -1){
			SQRestartQuest();
		}
    }
	
	function SQLimitMenuDuringQuest(textToDisplay){
		document.getElementById("SQmenu").innerHTML=textToDisplay;
	}
	function SQResetAndStore(){
	 	currQuest="Give me a P please Bob";
		currQuestIndex=0;
		currQuestStageIndex=-1;
	}

    function SQInitMenu(){
		var menuArea = document.getElementById("SQmenu");
		menuArea.innerHTML = " Quizzes  " +
		SQTimerSetupSelector('questNames', currQuest, 'SQQuestPicked', quests) +
		"<input type='button' class='btn' value='Start Quiz' title='Start Quiz' id='startQuiz' onclick='SQStartQuiz()' />" 
				;
    }
    function SQInitQuestData(){
    	SQGetQuestArea().innerHTML = '<p ' + questionStyle + '>Quiz manager.</p>';
    }

    function SQStartQuiz(){
    		currQuestStageIndex=0;
    		quizStage = quizStageQuestions;
    		currQuestIndex=SQGetCurrentQuestIndex();
    		runNextQuestStage();
    		
    }

    function runNextQuestStage(){
    	questStageData = questInfoData[currQuestIndex].stageData;
    	//window.alert(currQuestStageIndex + "  and length = " + questStageData.length);
    	if (currQuestStageIndex == questStageData.length && quizStage == quizStageQuestions)  {
    		currQuestStageIndex = 0;
    		quizStage = quizStageAnswers;
    	}
    	if (currQuestStageIndex < 0 && quizStage == quizStageAnswers  ){
    		currQuestStageIndex = questStageData.length -1;
    		quizStage = quizStageQuestions;
    	}
    	if (currQuestStageIndex < 0 && quizStage == quizStageQuestions  ){
    		currQuestStageIndex = 0;
    	}
    		
    	if (currQuestStageIndex == questStageData.length && quizStage == quizStageAnswers){
	    	resultText = resultText ;
	        SQInitQuestData();
			SQInitMenu();
			SQGetButtonsArea().innerHTML = '';
			SQGetAnswerArea().innerHTML = '';
			SQGetImageArea().innerHTML = '';
			currQuestStageIndex=-1;
			quizStage = quizStageQuestions;
			return;
    	};
    	
    	currentquestion = questStageData[currQuestStageIndex].question;
    	currentanswer = questStageData[currQuestStageIndex].answer;
    	if (quizStage == quizStageQuestions) {
    		SQQuestion(questStageData[currQuestStageIndex].type);
    	} else  {
    		SQAnswer(questStageData[currQuestStageIndex].type);
    		
    	};
    };

    function runPreviousQuestStage(){
		currQuestStageIndex=currQuestStageIndex-2;
		runNextQuestStage();
    };
    
    function setButtons(){
		btnhtml = nextButton;
		if (currQuestStageIndex == questStageData.length-1 && quizStage == quizStageQuestions){
			btnhtml = answerButton;
		}
		buttonBar = previousButton + btnhtml;
		SQGetButtonsArea().innerHTML=buttonBar;
    }
    
function SQQuestion(questionType){
		setButtons();
		SQGetAnswerArea().innerHTML='';
		if (questionType==quizQuestionTypeText) {
			SQGetQuestArea().innerHTML =  "<p " + questionStyle +">" + questStageData[currQuestStageIndex].question + "</p>";
			var imageArea = document.getElementById("SQImage");
			imageArea.innerHTML='';
		} else if (questionType==quizQuestionTypePicture) {
			SQGetButtonsArea().innerHTML = buttonBar;
			SQGetQuestArea().innerHTML ="<p " + questionStyle +">" + questStageData[currQuestStageIndex].question + "</p>";
			sqInitPicture(questStageData[currQuestStageIndex].image)
		} else if (questionType==quizQuestionTypeSpotify) {
			sqInitSpotify(questStageData[currQuestStageIndex].spotify, questStageData[currQuestStageIndex].question)
		}
		
		
							
    	currQuestStageIndex++
    }

    function sqInitPicture(imageSource){
		var imageArea = document.getElementById("SQImage");
		imageArea.innerHTML='<div style="width:100%;height:480px;background-color:black;text-align:center;"> '+
		 ' <a href="' + imageSource + '" target="_blank">'+ 
		   ' <img style="height:100%;border:0;" src="' + imageSource +'" /> '+ 
		 ' </a> '+
		' </div>';

		}

	function sqInitSpotify(spotifyEmbed, spotifyQuestion){
		
		SQGetImageArea().innerHTML=spotifyEmbed;
		SQGetQuestArea().innerHTML =spotifyQuestion;
		}

    function SQAnswer(questionType){
    	counter=0;
    	setButtons();
    	fullAnswer = questStageData[currQuestStageIndex].answer;
    	fullQuestion = questStageData[currQuestStageIndex].question;
    	if (questionType==quizQuestionTypeText) {
        	SQGetQuestArea().innerHTML=
        			"<p " + questionStyle +">" + fullQuestion + "</p>";
    	}else if (questionType==quizQuestionTypePicture) {
    		sqInitPicture(questStageData[currQuestStageIndex].image)
        	SQGetQuestArea().innerHTML="<p " + questionStyle +">" + fullQuestion + "</p>";
    	}
    	//SQGetQuestArea().innerHTML = answerPreText;
		answerText='';
		SQGetAnswerArea().innerHTML='';
    	setTimeout(SQWriteAnswer, 3000);
    	currQuestStageIndex++
    }

    function SQWriteAnswer() {
    	
    	if (counter < fullAnswer.length) {
    		answerText = answerText += fullAnswer.charAt(counter);
    	
    		SQGetAnswerArea().innerHTML = //answerPreText +
    				"<p " + answerStyle +">" + answerText + "</p>"     				;
    		counter++;
    		setTimeout(SQWriteAnswer, 80);
    	}
    }
    	
    
	
	function SQTimerSetupSelector(idName, defaultSelected, selectionChangeFunction, options){
		var retVal = "";
		retVal = retVal + '<span id="' + idName + 'Span"> <select name="' + idName + '" id="' + idName + '" onchange="' + selectionChangeFunction + '();" >';
		optionsCount =options.length;
		for (var i=0 ; i<optionsCount ; i++){
        		retVal = retVal + '<option value="' + options[i] + '"' ;
		    	if (options[i]==defaultSelected){
			    	retVal = retVal+' selected' ;
    			}
                retVal = retVal + '>' + options[i] + '</option>';
		}
		retVal = retVal + '</select></span>';
		return retVal;
	}
    function SQQuestPicked(){
    	currQuest = SQGetQuestInfo();
    }
    function SQGetCurrentQuestIndex(){
    	optionsCount = quests.length;
    	for (var i=0 ; i<optionsCount ; i++){
    		if (currQuest == quests[i]) {
    			questIndex=i;
    		};
    	};
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
    function SQGetQuestInfo(){
    	return document.getElementById("questNames").value ;
    };
    
    

