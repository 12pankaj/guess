var level=1;
	h=0;
	wins = new Audio('ass/wingusses.wav');
	lows = new Audio('ass/lowgusses.wav');
	highs = new Audio('ass/highgusses.wav');
	nots = new Audio('ass/nonumber.wav');
	levels = new Audio('ass/levelup.wav');
	let secretNumber = Math.trunc(Math.random() * 10*level) + 1;
	console.log(secretNumber);
	var btn=document.getElementsByTagName('button');
	var span = document.createElement("span");
	var input=document.getElementsByTagName('input');
		span.innerHTML="<br/>Start guessing...";
			input[0].parentNode.appendChild(span);
			span.style="color:#ff6600;";
		var chance=10;
		var high=0;
	var ide=document.getElementById("id")
	
		var ch=document.getElementById('chance');
		var la=document.getElementById('level');
		var le=document.getElementsByClassName('between');
		var hi=document.getElementById('high');
		le[0].innerHTML="(Between 1 to "+level*10+")";
		la.innerHTML="Level   &nbsp &nbsp"+level;
		ch.innerHTML="Total Chance = "+chance;
var id=3;
		
	ide.innerHTML=id;
function idea() {
	if(id==0)
	{
		return 0;
	}
	btn[0].innerHTML=secretNumber;
	ide.innerHTML=id-1;
	id--;
}
		function check() {
			if(chance==0 )
			{ ch.innerHTML="Total Chance = "+chance+"<br/> All Chance Complet Please Click Retry Button"; return 0;}
			if(h==1) return 0;
			if(input[0].value=="")
			{
				nots.play();
				mcheck=false;
				//input[0].style="border:3px solid red";
				span.innerHTML="<br/>not   Number";
				input[0].parentNode.appendChild(span);
			document.body.style="background:yellow"
					span.style="color:blue;";
				
				return 0;


			}
var num=input[0].value;
		
	console.log(num);
			if(num>secretNumber)
			{
				highs.play();
			span.innerHTML="<br/>number is high";
						input[0].parentNode.appendChild(span);	
				document.body.style="background:orange"
				chance--;
		ch.innerHTML="Total Chance = "+chance;
						span.style="color:cyan;";
			
			}
			else if(num<secretNumber)
			{
				lows.play();

				span.innerHTML="<br/>number is low";
						input[0].parentNode.appendChild(span);	
				document.body.style="background:red"
				chance--;
		ch.innerHTML="Total Chance = "+chance;
						span.style="color:blue;";

			}
			else if(num==secretNumber)
			{
				wins.play();
				span.innerHTML="<br/>Correct Number!";
				input[0].parentNode.appendChild(span);	
				document.body.style="background:greenyellow"
				btn[0].innerHTML=secretNumber;
				/*
				if(num==secretNumber)
			{
			input[0].value='';

				
			}*/

				if(level>=7)
			{
				high=Math.round((high+chance*5));
				h=1;
			}
			else if(level>=5)
			{
				high=Math.round((high+chance*3.33));
				h=1;
			}
			else if(level>=3)
			{
				high=Math.round((high+chance*2.5));
				h=1;
			}
			else if(level>=1)
			{
					high=(high+chance*2);
					h=1;
			}
					hi.innerHTML="High Score = "+high;
					span.style="color:violet;";
				setTimeout(() =>
				{
			 	    if(num==secretNumber)
						{
							level++;
							levels.play();
						}
					    
					    retry();

		       	}, 4000);
			}
		}

		function restar() {
			location.reload();
		}
		function retry() {
			document.body.style="background:#00ffcc";
			input[0].value='';
						secretNumber = Math.trunc(Math.random() * 10*level) + 1;
						console.log(secretNumber);
		le[0].innerHTML="(Between 1 to "+level*10+")";
		la.innerHTML="Level   &nbsp &nbsp"+level;

			chance=10;
			if(level>=7)
			{
				chance=4;
			}
			else if(level>=5)
			{
				chance=6;

			}
			else if(level>=3)
			{
				chance=8;
			}
			span.style="color:#ff6600;";
		ch.innerHTML="Total Chance = "+chance;
			span.innerHTML="<br/>Start guessing...";
						input[0].parentNode.appendChild(span);
			btn[0].innerHTML='?';
			input[0].innerHTML="";
			h=0;
		}
