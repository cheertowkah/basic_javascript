//  CHESSBOARD //

let size = Number(prompt(`Please enter a number which will determine 
the width and height of the chessboard. E.g. 8 or 16 or 24.`));

for (let i = 0; i < size; i++) {
    if(i % 2 !== 0) {
        console.log(" # # # #".repeat(size / 8));
    } else {
        console.log("# # # # ".repeat(size/8));
    };
};



