var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

    //head
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.bezierCurveTo(200, -10, 400, -10, 400, 100);
    ctx.stroke();

    //body
    ctx.moveTo(200, 100);
    ctx.lineTo(200, 250);
    ctx.lineTo(400, 250);
    ctx.lineTo(400, 100);
    ctx.fill();

    ctx.moveTo(200, 250);
    ctx.bezierCurveTo(200, 365, 400, 365, 400, 250);
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();


    //头发
    ctx.beginPath();
    ctx.moveTo(275, 19);
    ctx.quadraticCurveTo(245, -10, 205, 17);
    ctx.quadraticCurveTo(245, -5, 268, 22);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(270, 22);
    ctx.quadraticCurveTo(240, 0, 218, 30);
    ctx.quadraticCurveTo(240, 5, 262, 22);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();

    //画眼线
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.bezierCurveTo(200, 115, 400, 115, 400, 100);
    ctx.lineTo(400, 120);
    ctx.bezierCurveTo(400, 135, 200, 135, 200, 120);
    ctx.lineTo(200, 100);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();

    //画左眼睛
    ctx.beginPath();
    ctx.arc(262, 118, 35, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();

    //画右眼睛
    ctx.beginPath();
    ctx.arc(338, 118, 35, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();

    //画左眼珠
    ctx.beginPath();
    ctx.arc(260, 118, 15, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();

    //画右眼珠
    ctx.beginPath();
    ctx.arc(340, 118, 15, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();

    //左眼留白
    ctx.beginPath();
    ctx.arc(266, 110, 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();

    //右眼留白
    ctx.beginPath();
    ctx.arc(346, 110, 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();

    //嘴
    ctx.beginPath();
    ctx.moveTo(275, 170);
    ctx.lineTo(325, 170);
    ctx.stroke();
    ctx.moveTo(275, 170);
    ctx.bezierCurveTo(275, 190, 310, 195, 325, 170);
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();


    //裤子
    ctx.beginPath();
    ctx.moveTo(200, 250);
    ctx.lineTo(230, 250);
    ctx.lineTo(230, 200);
    ctx.lineTo(375, 200);
    ctx.lineTo(375, 250);
    ctx.lineTo(400, 250);
    ctx.fill();
    ctx.moveTo(200, 250);
    ctx.bezierCurveTo(200, 365, 400, 365, 400, 250);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();

    //左裤带
    ctx.beginPath();
    ctx.moveTo(200, 175);
    ctx.lineTo(200, 189);
    ctx.lineTo(250, 217);
    ctx.lineTo(255, 205)
    ctx.lineTo(200, 175);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(245, 206, 3, 0, Math.PI * 2);
    ctx.fill();

    //右裤带
    ctx.beginPath();
    ctx.moveTo(400, 175);
    ctx.lineTo(400, 189);
    ctx.lineTo(350, 217);
    ctx.lineTo(345, 205)
    ctx.lineTo(400, 175);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(355, 206, 3, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    //左手
    ctx.beginPath();
    ctx.moveTo(199, 191);
    ctx.lineTo(178, 215);
    ctx.quadraticCurveTo(174, 220, 178, 225);
    ctx.lineTo(199, 245);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();


    ctx.moveTo(200, 210);
    ctx.lineTo(197, 213);
    ctx.stroke();

    //右手

    ctx.moveTo(401, 191);
    ctx.lineTo(422, 215);
    ctx.quadraticCurveTo(426, 220, 420, 225);
    ctx.lineTo(401, 245);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();


    ctx.moveTo(400, 210);
    ctx.lineTo(403, 213);
    ctx.stroke();

    //口袋
    ctx.beginPath();
    ctx.moveTo(275, 235);
    ctx.lineTo(325, 235);
    ctx.lineTo(325, 265);
    ctx.quadraticCurveTo(300, 285, 275, 265);
    ctx.lineTo(275, 235);
    ctx.stroke();

    //裤子上的线
    ctx.moveTo(300, 300);
    ctx.lineTo(300, 335);
    ctx.stroke();

    ctx.moveTo(205, 280);
    ctx.quadraticCurveTo(220, 280, 225, 265);
    ctx.stroke();

    ctx.moveTo(395, 280);
    ctx.quadraticCurveTo(380, 280, 375, 265);
    ctx.stroke();

    //左脚
    ctx.beginPath();
    ctx.moveTo(265, 332);
    ctx.lineTo(265, 343);
    ctx.lineTo(240, 341);
    ctx.quadraticCurveTo(220, 350, 238, 363);
    ctx.lineTo(290, 365)
    ctx.lineTo(290, 335);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

    //右脚
    ctx.beginPath();
    ctx.moveTo(335, 332);
    ctx.lineTo(335, 343);
    ctx.lineTo(360, 341);
    ctx.quadraticCurveTo(380, 350, 362, 363);
    ctx.lineTo(310, 365)
    ctx.lineTo(310, 335);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();