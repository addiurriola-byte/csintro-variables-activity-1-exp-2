player.onChat("chickens", function (num1) {
    if (num1 == 0) {
        num1 = 2
    }
    for (let index = 0; index < num1; index++) {
        mobs.spawn(CHICKEN, randpos(
        pos(10, 10, 10),
        pos(-10, 15, -10)
        ))
    }
})
