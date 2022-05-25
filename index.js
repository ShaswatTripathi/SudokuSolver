var board = [ 
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0,0, 0, 0, 0, 0, 0, 0, 0, 0]]

function init(){
    for(var i=1;i<=9;++i){
        for(var j=1;j<=9;++j){
            board[i][j] = 0;
        }
    }
}

function takeInput(){
    for(var i=1;i<=9;++i){
        for(var j=1;j<=9;++j){
            var a = i; a = a.toString();
            var b = j; b = b.toString();
            var id = a + b;
            var present = document.getElementById(id).value.toString().length;
            if(present > 0){
                board[i][j] = document.getElementById(id).value;
            }
            // console.log(typeof(board[i][j]));
        }
    }
}

function print(){
    for(var i=1;i<=9;++i){
        for(var j=1;j<=9;++j){
            var a = i; a = a.toString();
            var b = j; b = b.toString();
            var id = a + b;
            document.getElementById(id).value = board[i][j];
        }
    }
}

function cc(c,n){
    for(var i = 1 ; i <= 9 ; ++i){
        if(board[i][c] == n) return false;
    }
    return true;
}

function cr(r,n){
    for(var i = 1 ; i <= 9 ; ++i){
        if(board[r][i] == n) return false;
    }
    return true;
}

function cg(r,c,n){
    var sr = ((Math.floor((r-1) / 3))*3) + 1;
    var sc = ((Math.floor((c-1) / 3))*3) + 1;
    for(var i = sr ; i<=sr+2 ; ++i){
        for(var j = sc ; j<=sc+2 ; ++j){
            if(board[i][j]==n) return false;
        }
    }
    // console.log(r,c);
    return true;
}

function isValid(){
    for(let i=1;i<=9;++i){
        for(let j=1;j<=9;++j){
            if(board[i][j] == 0) continue;
            let x = board[i][j]; board[i][j] = 0;
            if(x < 1 || x > 9) return false;
            if(!(cr(i,x) && cc(j,x) && cg(i,j,x))){
                return false;                
            }
            board[i][j] = x;
        }
    }
    return true;
}

function f(a , b){
    // console.log(a,b);
    if(a==10) return true;
    if(board[a][b] != 0){
        if(b+1 <= 9) return f(a,b+1);
        return f(a+1,1);
    }
    for(var i = 1 ; i <= 9 ; ++i){
        if(cr(a,i) && cc(b,i) && cg(a,b,i)){
            // if(b==9) console.log("here");
            board[a][b] = i;
            var x;
            if(b+1 <= 9) x =  f(a,b+1);
            else x = f(a+1,1);
            if(x) return true;
        }
    }
    board[a][b] = 0;
    return false;
}
function solve(){
    // console.log(1);
    init();
    takeInput();
    if(!isValid()){
        alert("Input State has no valid solutions");
        // console.log(1);
        return;
    }
    if(f(1,1))print();
    else alert("No Solutions exist");
}

