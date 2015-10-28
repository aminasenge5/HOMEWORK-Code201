
	function answers() {

		addict=0;

		var answer1=prompt("Are you an addict?");

		if (answer1=="yes")

		{ alert("Thanks for your honesty! Press ok to procced to the next question..");

		addict=addict+1;

	}

	else {alert ("Next Question..");}

	var answer2=prompt("Were you an addict?");

	if (answer2=="yes")

		{ alert("Thanks for your honesty! Press ok to proceed to the next question..");

		addict=addict+1;

	}

	else {alert ("Next Question..");}


	var answer3=prompt ("Do you know an addict?");

	if (answer3=="yes")

		{ alert("Thanks for your honesty! Press OK to finish the survey..");

		addict=addict+1;

	}

	else {alert ("Thank you! Press OK to finish the survey..");}


	};