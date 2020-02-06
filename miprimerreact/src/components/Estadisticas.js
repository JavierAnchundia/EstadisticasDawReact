import React,{Component} from 'react';
//import React. from 'react';


//class MiComponente extends React.Component{

class Estadisticas extends Component{
    
    constructor() {
        super()
        this.legend=React.createRef()
        this.canvas = React.createRef()
        this.canvasModificar = this.canvasModificar.bind( this )
        this.drawLine=this.drawLine.bind(this)
        this.drawArc=this.drawArc.bind(this)
        this.drawPieSlice=this.drawPieSlice.bind(this)
        this.dibujofinal=this.dibujofinal.bind(this)
      }

      
      
      drawwLine = (ctx, startX, startY, endX, endY) => {   
        console.log(ctx)
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();     
        console.log(ctx.stroke); 
}
    drawLine(ctx, startX, startY, endX, endY){
        console.log(ctx.beginPath())
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);

        ctx.stroke();     
        console.log(ctx.stroke);
         }
    drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
 
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
         
        }
 
    drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
 
            ctx.fillStyle = color;        
            ctx.beginPath();  
            ctx.moveTo(centerX,centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fill();
            console.log(ctx);
        }

    canvasModificar(){
        this.canvas.current.width = 300;
        this.canvas.current.height = 300;
        var ctx= this.canvas.current.getContext("2d");
        this.drawLine(ctx,100,100,200,200);
        this.drawArc(ctx, 150,150,150, 0, Math.PI/3);
        this.drawPieSlice(ctx, 150,150,150, Math.PI/2, Math.PI/2 + Math.PI/4, '#ff0000');

        return ctx;
    }

    dibujofinal(options){

            var options = options;
            var canvas = this.canvas;
            this.canvas.current.width = 400;
            this.canvas.current.height = 400;
            var ctx =  canvas.current.getContext("2d");
            var colors = options.colors;
            var legend=options.legend;
           
    
    
            var total_value = 0;
            var color_index = 0;
            for (var categ in options.data){
                    var val = options.data[categ];
                    total_value += val;
                }
            console.log(ctx)
            var start_angle = 0;
            console.log(options.data);
            for (categ in options.data){
                    val = options.data[categ];
                    var slice_angle = 2 * Math.PI * val / total_value;
                    
                    var pieRadius = Math.min(canvas.current.width/2,canvas.current.height/2);
                    var labelX = canvas.current.width/2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
                    var labelY = canvas.current.height/2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle/2);
                                     
                    var labelText = Math.round(100 * val / total_value);
                    
                    this.drawPieSlice(
                    ctx,
                    canvas.current.width/2,
                    canvas.current.height/2,
                    Math.min(canvas.current.width/2,canvas.current.height/2),
                    start_angle,
                    start_angle+slice_angle,
                    colors[color_index%colors.length]
                    );
                    console.log("hello there");
                    ctx.fillStyle = "white";
                    ctx.font = "bold 20px Arial";
                    ctx.fillText(labelText+"%", labelX,labelY);
                    start_angle += slice_angle;
                    color_index++;
                   
                }
                //Si no quieres legenda, solo quita esta parte
                if (legend){
                    console.log(legend);

                    color_index = 0;
         
                    var legendHTML = "";
         
                    for (categ in options.data){
         
                        legendHTML += "<div height:30px><span style='display:inline-block;width:30px;height:30px;background-color:"+ colors[color_index++]+";'>&nbsp;</span> "+categ+"</div>";
         
                    }
         
                    legend.current.innerHTML = legendHTML;
         
                }
            
        }
    

    render(){
       
        var myVinyls = {
 
            "Classical music": 10,
         
            "Alternative rock": 14,
         
            "Pop": 6,
         
            "Jazz": 12,
            "Blues":11
         
        };

        

        return(
            //etiqueta vacia en la que puedo meter mi codigo de html o JSX
            <React.Fragment> 
                   <h1>Estadísticas</h1>
                   <canvas ref= {this.canvas} > 
                   </canvas>
                   <p>
                   <div align='left'ref={this.legend}></div>
                  </p>
                   <button onClick={()=>this.dibujofinal({
                            canvas:this.canvas,
                            data:myVinyls,
                            colors:["#fde23e","#f16e23", "#57d9ff","#937e88","#f12832"],
                            legend:this.legend
                            })}>
                                 Modificar Canvas
                    </button>
                    {/*<button onClick={()=>this.canvasModificar()}> prueba</button>*/}
            </React.Fragment>
            
        );
    }

}

export default Estadisticas;