#pragma strict

public var itemsLeftText = "";
public var itemsLeft = 0;

public var go : GameObject;

function Start () {
	
	itemsLeft = 185;
	itemsLeftText = itemsLeft + " Packets Left!";

}

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "C4Item")
	{
		itemsLeft -= 1;
		Destroy(other.gameObject);
	}
}

function Update () {
	
	itemsLeftText = itemsLeft + " Packets Left!";
}

function OnGUI()
{
	GUI.Box(new Rect(10, 10, 100, 20),itemsLeftText);
}