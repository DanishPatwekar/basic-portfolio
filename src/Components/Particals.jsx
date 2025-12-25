import React, { useEffect, useRef } from 'react'

const Particals = () => {
    const canvasref=useRef(null)
    useEffect(()=>{
        const canvas=canvasref.current;
        const ctx=canvas.getContext("2d");
        let partical=[];
        const particalvalue=50;
        let particalColor=["rgba(255,255,255,0.7)"];
        class Particals{
            constructor(){
                this.x=Math.random()*canvas.width;
                this.y=Math.random()*canvas.height;
                this.radius=Math.random()*2+1;
                this.color=particalColor[Math.floor(Math.random()*particalColor.length)]
                this.speedX=(Math.random()-0.5)*0.5;
                this.speedY=(Math.random()-0.5)*0.5; 
                } 

                draw(){

                    ctx.beginPath();
                    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
                    ctx.shadowBlur=10;
                    ctx.shadowColor=this.color;
                    ctx.fillStyle=this.color;
                    ctx.fill();
                } 
                update(){
                    this.x+=this.speedX;
                    this.y+=this.speedY

                    if(this.x<0) this.x=canvas.width;
                    if(this.x>canvas.width) this.x=0;
                    if(this.y<0) this.y=canvas.height;
                    if(this.y>canvas.height) this.y=0;
                    this.draw();
                }
            
        }

        function createPartical(){
            partical=[];
            for(let i=0;i<particalvalue;i++){
                partical.push(new Particals());
            }
        }
        function handleScree(){
            canvas.width=window.innerWidth;
            canvas.height=window.innerHeight;
            createPartical();
        }
        handleScree();  
        window.addEventListener("resize",handleScree);

        let animationID;
        function animate(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            partical.forEach((p)=>p.update());
            animationID=requestAnimationFrame(animate)
        }
        animate()

        return()=>{
            cancelAnimationFrame(animationID);
            window.removeEventListener("resize", handleScree);
        }
    },[])
  return (
    <canvas ref={canvasref} className='fixed top-0 w-full h-full pointer-events-none z-0'></canvas>
  )
}

export default Particals