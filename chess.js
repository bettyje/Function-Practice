function knightMoves(x, y) {
    const possibleMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    

    let validMoves = [];
    
    possibleMoves.forEach(move => {
        const newX = x + move[0];
        const newY = y + move[1];
        
        if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
            validMoves.push(`(${newX},${newY})`);
        }
    });
    
    return validMoves.join(', ');
}
