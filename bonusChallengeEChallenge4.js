function FibonacciSerie(){
    var prev = 0, next = 1 ;
    var sumEven = [];
    do{
        prev = prev + next;
        next = prev + next;
        if(prev%2==0) sumEven.push(prev);
        if(next%2==0) sumEven.push(next);
    }
    while(prev+next < 4000000)
    return sumEven.reduce(function(a, b) {
        return a + b;
    });
}
