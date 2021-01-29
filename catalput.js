class catalput{
	constructor(body,anchor)
	{

		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1

		}

		this.bodyA=body
		this.pointB=anchor
		this.catalput=Constraint.create(options)
		World.add(world,this.catalput)
	}

	attach(body){
		this.catalput.bodyA=body;
	}

	fly()
	{
		this.catalput.bodyA=null;
	}

	display()
	{
		if(this.catalput.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
} 