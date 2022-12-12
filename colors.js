var Body = { /*객체*/
    setColor:function(color){
        //document.querySelector('body').style.color=color;
        $('body').css('color',color);
    },
    setColorBackground:function(color){
        //document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor',color);
    }
}
var Links = { /*객체*/
     setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i=0;
        // while(i<alist.length){
        //     alist[i].style.color=color;
        //     i=i+1;
        // }
        $('a').css('color',color);
    }
    
}
function nightDayChanger(self){ /*함수*/
    var target =document.querySelector('body');
    if(self.value =='night'){ 
        Body.setColorBackground('black');
        Body.setColor('white');
        self.value ='day'
        Links.setColor('powderblue');
    }
    else{
        Body.setColorBackground('white');
        Body.setColor('black');
        self.value ='night'
        Links.setColor('blue');
    }
}