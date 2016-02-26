function searchAndVerify(array){

    var min = Math.min.apply(null, array);
    var max = Math.max.apply(null, array);

    for(var i = min; i<= max; i++){
        if(array.indexOf(i)==-1){
            return 0;
        }
        
        if(array.indexOf(i) == array.lastIndexOf(i)){
           return i; 
        }
    }
}
