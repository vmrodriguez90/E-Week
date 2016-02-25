function minNumberDividedBy(dividers) {
        var num = 1;
        var flag = 0;
        
        while(flag == 0) {
            for (var i=1; i<=divisor;i++) {
                if (num%i != 0) {
                    break;
                }
                if (i == divisor) {
                    flag = 1
                }
            }
            num++;
        }
        num--;
        return num;
    }
}
