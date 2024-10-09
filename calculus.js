function calculateVelocity(initialvelocity, acceleration, time) {
    const velocity =  initialvelocity + (acceleration * time);
    return velocity;

}
console.log(calculateVelocity(0, 9.8, 2));
