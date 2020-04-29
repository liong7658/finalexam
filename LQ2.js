function validate()
	{
		if(document.form1.name.value.lenght < 1)
		{
			alert("Hey you havent enterted your name yet.");
			return false;
		}
		if(document.form1.age.value.lenght < 1);
		{
			alert("Hey your age is not valid");
			return false;
		}
		if(document.form1.present.value.lenght < 1);
		{
			alert("Hey your present is not valid");
			return false;
		}
		if(document.form1.color.value.lenght < 1);
		{
			alert("Hey your color is not valid");
			return false;
		}
		return true;
	}