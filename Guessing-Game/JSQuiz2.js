function answers() {

		Mate=0;

		var answer1=prompt("Have you had Yerba Mate before?");

		if (answer1=="yes")

		{ alert("Awesome!");

		Mate=Mate+1;

	}

	else {alert ("Next Question..");}

	var answer2=prompt("Have you been to Argentina?");

	if (answer2=="yes")

		{ alert("Sweet!");

		Mate=Mate+1;

	}

	else {alert ("Next Question..");}


	var answer3=prompt ("Will you share this with a friend?");

	if (answer3=="yes")

		{ alert("So Cool!");

		Mate=Mate+1;

	}

	else {alert ("Thanks for taking the survey!");}


	};
