var sheet = []
var ids = []
var box1 = []
var box2 = []
var box3 = []
var box4 = []
var box5 = []
var box6 = []
var box7 = []
var box8 = []
var box9 = []
var boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
var row1 = []
var row2 = []
var row3 = []
var row4 = []
var row5 = []
var row6 = []
var row7 = []
var row8 = []
var row9 = []
var rows = [row1,row2,row3,row4,row5,row6,row7,row8,row9]
var col1 = []
var col2 = []
var col3 = []
var col4 = []
var col5 = []
var col6 = []
var col7 = []
var col8 = []
var col9 = []
var cols = [col1,col2,col3,col4,col5,col6,col7,col8,col9]
for(i=1;i<=81;i++){
    x = "num" + i
    ids.push(x)
}
function count(arr, element) {
    return arr.filter(
        (ele) => ele == element).length;
};
function check_input(item){

    if (item.value > 9){
        item.value = Math.floor(item.value / 10)
        
    }
    if (item.value < 1 && item.value != ""){
        item.value = 1
    }
    x = item.id
    x = x.replace('num','')
    x*=1
    x+=1
    x+=""
    x = "num" + x
    document.getElementById(x).focus()
}
function check(){
    sheet = []
    var box1 = []
    var box2 = []
    var box3 = []
    var box4 = []
    var box5 = []
    var box6 = []
    var box7 = []
    var box8 = []
    var box9 = []
    var boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
    var row1 = []
    var row2 = []
    var row3 = []
    var row4 = []
    var row5 = []
    var row6 = []
    var row7 = []
    var row8 = []
    var row9 = []
    var rows = [row1,row2,row3,row4,row5,row6,row7,row8,row9]
    var col1 = []
    var col2 = []
    var col3 = []
    var col4 = []
    var col5 = []
    var col6 = []
    var col7 = []
    var col8 = []
    var col9 = []
    var cols = [col1,col2,col3,col4,col5,col6,col7,col8,col9]
    boxid = []
    rowid = []
    colid = []
    for(let i of ids){
        sheet.push(document.getElementById(i).value)
        
    }
    
    x = [1,2,3,10,11,12,19,20,21]
    b=0
    for(y=0;y<3;y++){
        for(i=0;i<3;i++){
            m = []
            for(let j of x){
                boxes[b].push(sheet[j+(y*27)-1+(i*3)])
                m.push((j+(y*27)-1+(i*3)+1))      
            }
            b+=1
            boxid.push(m)
        }
}
    for(i=0;i<9;i++){
        m = []
        for(j=0;j<9;j++){
            rows[i].push(sheet[j+(i*9)])
            m.push((j+(i*9)+1))
        }
        rowid.push(m)
    }
    x=[1,10,19,28,37,46,55,64,73]
    for(i=0;i<9;i++){
        m = []
        for(let j of x){
            cols[i].push(sheet[(j-1)+(i)])
            m.push(((j-1)+(i)+1))
        }
        colid.push(m)
    }
    valid = true
    if (count(sheet,'')>64){
        alert("Atleast 17 clues should be given")
        valid = false
    }
    for(let i in boxes){
        for(j=0;j<9;j++){
            if (count(boxes[i],(j+1)+"")>1){
                alert("Same number "+(j+1)+""+" in one box")
                valid = false
            }
        }

    }for(let i in rows){
        for(j=0;j<9;j++){
            if (count(rows[i],(j+1)+"")>1){
                alert("Same number "+(j+1)+""+" in one row")
                valid = false
            }
        }

    }for(let i in cols){
        for(j=0;j<9;j++){
            if (count(cols[i],(j+1)+"")>1){
                alert("Same number "+(j+1)+""+" in one column")
                valid = false
            }
        }

    }
    if (valid){
        solve(sheet,boxes,rows,cols,boxid,rowid,colid)
    }
    
}
function solve(sheet,boxes,rows,cols,boxid,rowid,colid){
    var helper = {
    }
    for(let i of ids){
        helper[i] = []
    }
    found = false
    for(let abc in sheet){
        for(let i in boxes){
            for(let j in boxes[i]){
               for(z=0;z<9;z++){
                if(count(boxes[i],(z+1)+"") == 0){
                    if(boxes[i][j]==''){
                    if(count(helper["num"+boxid[i][j]],z+1)==0){
                    helper["num"+boxid[i][j]].push(z+1)
                    }
                    }   
                }
                else{
                    if(boxes[i][j]==''){
                        if(z+1 in helper["num"+boxid[i][j]]){
                        helper["num"+boxid[i][j]].pop(z+1)
                        }
                    }
                }
                
               }
            }
        }
        for(let i in rows){
            for(let j in rows[i]){
               for(z=0;z<9;z++){
                if(count(rows[i],(z+1)+"") == 0){
                    if(rows[i][j]==''){
                        if(count(helper["num"+rowid[i][j]],z+1)==0){
                    helper["num"+rowid[i][j]].push(z+1)
                        }
                    }   
                }
                else{
                    if(rows[i][j]==''){
                        if(z+1 in helper["num"+rowid[i][j]]){
                        helper["num"+rowid[i][j]].pop(z+1)
                        }
                    }
                }
                
               }
            }
        }
        for(let i in cols){
            for(let j in cols[i]){
               for(z=0;z<9;z++){
                if(count(cols[i],(z+1)+"") == 0){
                    if(cols[i][j]==''){
                        if(count(helper["num"+colid[i][j]],z+1)==0){
                    helper["num"+colid[i][j]].push(z+1)
                        }
                    }   
                }
                else{
                    if(cols[i][j]==''){
                        if(z+1 in helper["num"+colid[i][j]]){
                        helper["num"+colid[i][j]].pop(z+1)
                        }
                    }
                }
                
               }
            }
        }
        for(let i in helper){
            if(helper[i].length == 1){

                document.getElementById(i).value = helper[i][0]
            }
        }
        console.log(boxes)
        console.log(helper)
        
    }




}
function soduko(){
    var otn=Math.floor(Math.random() * 800)
    var allpla=[];
for(i=0;i<81;i++){
allpla.push(i);
}
    var places=[];
for(i=0;i<30;i++){
places.push(allpla[Math.floor(Math.random() * 80)]);
}
    var puzzle=[2,9,5,1,6,7,8,4,3,8,7,3,9,4,2,6,5,1,6,1,4,3,8,5,7,9,2,5,2,6,8,7,4,3,1,9,3,4,9,6,2,1,5,8,7,7,8,1,5,9,3,2,6,4,9,3,8,2,1,6,4,7,5,4,6,2,7,5,9,1,3,8,1,5,7,4,3,8,9,2,6];
var answer=[];
for(i=0;i<81;i++){
n=puzzle[i];
n=otn+n;
n=""+n;
q=n.length;
for(z=0;z<20;z++){
a="";
a+=n[0]
for(j=1;j<q;j++){
a+="+";
a+=n[j];
}
a=eval(a);
n=""+a;
q=n.length;
if(q==1){
break;
}
else{
continue;
}
}
answer.push(n);
}
var pre=[];
for(let place of places){
we=answer[place];
pre.push(we);
 
}
sodu = []
for(i=0;i<81;i++){
    sodu.push('')
}
for(let x in pre){
    sodu[places[x]]=pre[x]
}

for(let x in ids){
    document.getElementById(ids[x]).value = sodu[x]
}
}
function show_sheet(){
    console.log(sheet)
}