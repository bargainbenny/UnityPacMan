#pragma strict

public var target: Transform;
public var moveSpeed = 3;
public var rotationSpeed = 3;
public var myTransform: Transform;

function Awake()
{
	myTransform = transform;
}

function Start () 
{
	target = GameObject.FindWithTag("Player").transform;
}

function Update () 
{
	var lookDir = target.position - myTransform.position;
	lookDir.y = 0;
	myTransform.rotation = Quaternion.Slerp(myTransform.rotation, Quaternion.LookRotation(lookDir), rotationSpeed*Time.deltaTime);
	myTransform.position += myTransform.forward * moveSpeed*Time.deltaTime;
}