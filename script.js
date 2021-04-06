var words = ["яблоко","цыпленок","корабль","пират","кот","молодец","брат","акробат","чуваш","татарин","космонавт"];
var alfa = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var word = "";
function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
function scrambler()
{	
	var keyValue = randomInteger(1,10);
	var cipherString = "";
	word = String(words[randomInteger(0, words.length - 1)]);
	for (var j = 0; j < word.length; j++) 
	{
		for(var k = 0; k < alfa.length; k++)
		{
			if(word[j]==alfa[k])
			{
				if((k + keyValue) <= alfa.length)
				{
					cipherString += alfa[k + keyValue];
				}	
				else if ((k + keyValue) > alfa.length)
				{
					cipherString += alfa[k + keyValue - alfa.length];
				}
			}
		}
	}
	key.insertAdjacentHTML("afterbegin", `<div class="keyValue">${keyValue}</div>`);
	cipher.insertAdjacentHTML("afterbegin", `<div class="keyValue">${cipherString}</div>`);
}
function correctDecipherment()
{
	if(document.getElementById("input_decryption").value == word)
	{
		document.getElementById("res").innerHTML = "Правильно!";
		document.getElementById("res").style.background = "green"; 	
	}
	else
	{
		document.getElementById("res").innerHTML = "Неправильно!";
		document.getElementById("res").style.background = "red";	
	}
}