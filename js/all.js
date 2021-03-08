const time = document.querySelector('#time')
const imgchange = document.querySelector('#imgchange')
const message = document.querySelector('#message')
const score = document.querySelector('#score')
//-----------------------------------------------------------------
const noodlesmall = document.querySelector('.noodle-s')
const noodlebig = document.querySelector('.noodle-l')
const noodlesuper = document.querySelector('.noodle-super')
const person = document.querySelector('#person')
const audio = document.querySelector('#audio')
//-----------------------------------------------------------------
window.addEventListener('load',function(gametime){
    var times = 30000;                  //倒數30秒
    !function MyCounter(){
        if(times <= 0){
            clearInterval()
            alert('你的分數'+ s)
            window.location.href = './start.html'
        }else{
            // console.log((times/1000) + " sec...");
            times -= 1000; 
            setTimeout(MyCounter, 1000)
            time.innerText = (times/1000)
        }
    }();
})
//-----------------------------------------------------------------

a = 0;
s = 0;
s1 = 0;
//-----------------------------------------------------------------
function noodlecontrol(str) {
if(str.id == 1){	 	 
    imgchange.src='./noodle-s.png'
    a=1;	                  	  
}
if(s >= 12){		 
	if(str.id == 2){
        imgchange.src='./noodle-l.png'
        a=2;		  	 	 
    }
}
if(s >= 32){	  
	if(str.id == 3){			 
        imgchange.src = './noodle-top.png'
        a = 3;		  	 	  	 	 
        }	 			 
    }		  
}	
//-----------------------------------------------------------------
function count(img) {
    // 點擊數計算分數
    if(a==1){ 
        if(img.alt == "") 
            img.alt = "0"    
            img.alt = parseInt(img.alt) + 1
            message.innerText = img.alt
            // 音效開始
            audio.play()
        if(img.alt == 5){
            a = 0  
            img.alt = "0"
            s1 = s
            s = s+3
            score.innerText = s
            imgchange.src = './desk.PNG'
            // 音效暫停
            audio.pause()	            
        }	
    }
    if(a==2){ 
        if(img.alt == "")
            img.alt = "0"    
            img.alt = parseInt(img.alt) + 1
            message.innerText = img.alt
            // 音效開始
            audio.play()
        if(img.alt == 8){
            a = 0		  
            img.alt = "0"
            s1 = s	   
            s = s+5
            score.innerText = s
            imgchange.src ='./desk.PNG'
            // 音效暫停
            audio.pause()	   		   	
        }	
    }	
    if(a == 3){ 
        if(img.alt == "")
            img.alt = "0"    
            img.alt = parseInt(img.alt) + 1
            message.innerText = img.alt
            // 音效開始
            audio.play()
        if(img.alt == 10){
            a = 0 		  
            img.alt = "0" 
            s1 = s	   
            s = s+8	
            score.innerText = s
            imgchange.src = './desk.PNG'	
            // 音效暫停
            audio.pause()	   		   	
        }	
    }
    // 切換人物圖
    if(img.alt % 2){
        person.src = './person-2.JPG'
    }else{
        person.src = './person-1.JPG'
    }
    // 拉麵表圖切換
    if(s >= 12){
        noodlebig.src = './big.jpg'
    }	
    if(s >= 32){
        noodlesuper.src = './top.jpg'	
    } 
}

