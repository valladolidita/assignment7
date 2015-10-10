/*
Code Author: Anthony Peruzzo, Robert Goetz, Emilie Carey
Modified by: Kelly Horigan
*/

//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt, donationThanks, TextRed;

var consoleDisplay = document.getElementById('ConsoleDisplay');

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  consoleDisplay.innerHTML = "";
  donatePrompt = window.prompt('How much would you like to donate?');

  var newH3 = document.createElement('h3');
  consoleDisplay.appendChild(newH3);

  if (donatePrompt < 100) {
  	donationThanks = document.createTextNode('Thank you for your donation of $' + donatePrompt + '.');
  	newH3.appendChild(donationThanks);
  }else{
  	donationThanks = document.createTextNode("Thank you for your very generous donation!");
	newH3.appendChild(donationThanks);
	
	var TextRed = document.getElementsByTagName('h3');
	TextRed[0].style.color = '#DB152C';

	var articleArray = document.getElementsByTagName('article');
    for(var i = 0; i < articleArray.length; i++){
    articleArray[i].className = "generous-donation";
  }

}

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  consoleDisplay.innerHTML = '<br>This speech was written by <br> ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '. <br><br>';

  if(speechesArray[0].yearIsBCE === true){
  	consoleDisplay.innerHTML += 'This speech took place before <br> the common era.';
  }else{
  	consoleDisplay.innerHTML += 'This speech took place during <br> the common era.';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    consoleDisplay.innerHTML += 'This is the oldest speech on the page.';
  }
  if(speechesArray[0].year === newest){
    consoleDisplay.innerHTML += 'This is the most recent speech on the page.';
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  consoleDisplay.innerHTML = '<br>This speech was written by <br>' + speechesArray[1].author + ' in ' + speechesArray[1].year + '. <br><br>';

  if(speechesArray[1].yearIsBCE === true){
  	consoleDisplay.innerHTML += 'This speech took place before <br> the common era.<br><br>';
  }else{
  	consoleDisplay.innerHTML += 'This speech took place during <br> the common era.<br><br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
  	consoleDisplay.innerHTML += 'This is the oldest <br> speech on the page.';
  }
  if(speechesArray[1].year === newest){
  	consoleDisplay.innerHTML += 'This is the most recent <br> speech on the page.';
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  consoleDisplay.innerHTML = '<br>This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year +  '. <br><br>';

  if(speechesArray[2].yearIsBCE === true){
  	consoleDisplay.innerHTML += 'This speech took place before the common era.<br><br>';
  }else{
  	consoleDisplay.innerHTML += 'This speech took place during the common era.<br><br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
  	consoleDisplay.innerHTML += 'This is the oldest speech on the page.';
  }
  if(speechesArray[2].year === newest){
  	consoleDisplay.innerHTML += '<br> This is the most  <br> recent speech on the page.';
  }
});
});