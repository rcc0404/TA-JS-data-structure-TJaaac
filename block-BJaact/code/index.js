function materials(N, K) {
    N <= 1;
    K <= 1000;
    var tiles = N*K;
    if (tiles % 5 === 0) {
    console.log('yes')
    } else {
        console.log('No')
}
}

materials(0, 2000);