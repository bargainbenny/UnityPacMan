#pragma strict

public var scoreText = "";
public var score = 0;

public var go : GameObject;

function Start () {
	
	score = 21;
	scoreText = "Score: " + score;

}

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "C4Item")
	{
		score -= 1;
		Destroy(other.gameObject);
	}
}

function Update () {
	
	scoreText = "Score: " + score;
}

function OnGUI()
{
	GUI.Box(new Rect(10, 10, 100, 20),scoreText);
}