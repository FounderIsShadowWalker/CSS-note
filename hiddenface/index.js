var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

      ctx.translate(0, -85);

      //画无脸男
      ctx.beginPath();
      ctx.save();
      ctx.arc(360, 430, 82, Math.PI + Math.PI / 10, 2 * Math.PI - Math.PI / 10, false);
      ctx.stroke();

      ctx.quadraticCurveTo(360 + 82 * Math.cos(Math.PI / 10) + 20, 430 - 82 * Math.sin(Math.PI / 10) + 100,
          360 + 82 * Math.cos(Math.PI / 10) + 32, 430 - 82 * Math.sin(Math.PI / 10) + 300
      );

      ctx.lineTo(360 - 82 * Math.cos(Math.PI / 10) - 32, 430 - 82 * Math.sin(Math.PI / 10) + 300);

      ctx.quadraticCurveTo(360 - 82 * Math.cos(Math.PI / 10) - 20, 430 - 82 * Math.sin(Math.PI / 10) + 100,
          360 - 82 * Math.cos(Math.PI / 10), 430 - 82 * Math.sin(Math.PI / 10)
      );

      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.save();
      ctx.scale(2.5, 0.8);
      ctx.arc((360 + 82 * Math.cos(Math.PI / 10) + 32 + 360 - 82 * Math.cos(Math.PI / 10) - 32) / 2 / 2.5,
          (430 - 82 * Math.sin(Math.PI / 10) + 300) / 0.8, 44, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      //画面具
      ctx.beginPath();
      ctx.save();
      ctx.scale(1.5, 1);
      ctx.arc(360 / 1.5, 420, 40, Math.PI, 2 * Math.PI, false);
      ctx.quadraticCurveTo(360 / 1.5 + 43, 450, 360 / 1.5 + 39, 480);
      ctx.quadraticCurveTo(360 / 1.5 + 35, 500, 360 / 1.5 + 20, 520);
      ctx.quadraticCurveTo(360 / 1.5 + 7, 525, 360 / 1.5, 526);
      ctx.quadraticCurveTo(360 / 1.5 - 7, 526, 360 / 1.5 - 20, 520);
      ctx.quadraticCurveTo(360 / 1.5 - 35, 500, 360 / 1.5 - 39, 480);
      ctx.quadraticCurveTo(360 / 1.5 - 43, 450, 360 / 1.5 - 40, 420);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      //画眼睛
      ctx.beginPath();
      ctx.arc(360 - 30, 445, 13, 0, 2 * Math.PI);
      ctx.arc(360 + 30, 445, 13, 0, 2 * Math.PI);
      ctx.fillStyle = 'black';
      ctx.fill();

      //画眼纹
      ctx.beginPath();
      ctx.save();
      ctx.scale(1, 4);
      ctx.arc((360 - 30) / 1, (445 - 17) / 4, 6, Math.PI, 2 * Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.save();
      ctx.scale(1, 4);
      ctx.arc((360 - 30) / 1, (445 + 17) / 4, 6, 0, Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.save();
      ctx.scale(1, 4);
      ctx.arc((360 + 30) / 1, (445 - 17) / 4, 6, Math.PI, 2 * Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.save();
      ctx.scale(1, 4);
      ctx.arc((360 + 30) / 1, (445 + 17) / 4, 6, 0, Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.restore();

      //画嘴
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.moveTo(360 - 10, 500);
      ctx.lineTo(360 + 10, 500);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.lineCap = "butt";
      ctx.moveTo(360 + 10 + 2.5, 500);
      ctx.quadraticCurveTo(360, 509, 360 - 12.5, 500);
      ctx.fill();


      //画左脚
      ctx.beginPath();
      ctx.moveTo(320, 738);
      ctx.lineTo(322, 770);
      ctx.lineTo(334, 770);
      ctx.lineTo(335, 738);
      ctx.fill();

      //画右脚
      ctx.beginPath();
      ctx.moveTo(400, 738);
      ctx.lineTo(401, 770);
      ctx.lineTo(415, 770);
      ctx.quadraticCurveTo(408, 750, 415, 735);
      ctx.fill();

      //画脚下的圆环
      ctx.beginPath();
      ctx.save();
      ctx.scale(4.2, 1);
      ctx.arc(360 / 4.2, 770, 15, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();

      //画手
      ctx.beginPath();
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineWidth = '10';
      ctx.moveTo(248, 518);
      ctx.lineTo(270, 548);
      ctx.stroke();
      ctx.restore();

      //画手指
      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.lineWidth = '7';
      ctx.moveTo(248, 518);
      ctx.lineTo(245, 518);

      ctx.moveTo(248, 515);
      ctx.lineTo(245.5, 515);

      ctx.moveTo(247.5, 510);
      ctx.lineTo(246, 510);
      ctx.stroke();
      ctx.restore();

      //画雨伞渐变线

      ctx.save();
      ctx.lineWidth = '1';
      ctx.rotate(Math.PI / 30);
      ctx.beginPath();
      ctx.save();
      ctx.scale(2.2, 2.3);
      ctx.arc(300 / 2.2, 250 / 2.3, 70, Math.PI, Math.PI * 2);


      var grd = ctx.createLinearGradient(300, 0, 300, 250);

      grd.addColorStop(0, "#217786");
      grd.addColorStop(1, "#1A6180");

      ctx.fillStyle = grd;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      ctx.beginPath();
      ctx.save();
      ctx.scale(2.2, 0.7);
      ctx.arc(300 / 2.2, 250 / 0.7, 70, 0, Math.PI);
      ctx.fillStyle = "#1E6E83";
      ctx.fill();
      ctx.stroke();
      ctx.restore();


      ctx.beginPath();
      ctx.moveTo(300 - 2.2 * 70, 250);
      ctx.strokeStyle = "#1E6E83";
      ctx.lineTo(300 + 2.2 * 70, 250);
      ctx.stroke();
      ctx.strokeStyle = "#000";

      ctx.beginPath();
      ctx.save();
      ctx.scale(1, 2);
      ctx.arc(300, 250 / 2, 80, Math.PI - Math.PI / 12, Math.PI * 2 + Math.PI / 12);
      ctx.stroke();
      ctx.restore();

      ctx.beginPath();
      ctx.moveTo(300, 250 - 70 * 2.3);
      ctx.quadraticCurveTo(280, 250 + 70 * Math.cos(Math.PI / 4) * 0.2, 294, 250 + 70 * Math.cos(Math.PI / 4));
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.moveTo(300, 250 + 70 * Math.cos(Math.PI / 4));
      ctx.lineTo(300, 250 + 70 * Math.cos(Math.PI / 4) + 210);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#0B3542';
      ctx.moveTo(300, 250 + 70 * Math.cos(Math.PI / 4) + 190);
      ctx.lineTo(300, 250 + 70 * Math.cos(Math.PI / 4) + 210);
      ctx.stroke();

      ctx.beginPath();
      ctx.save();
      ctx.scale(1, 0.9);
      ctx.lineWidth = 8;
      ctx.lineCap = "round";
      ctx.arc(320, (250 + 70 * Math.cos(Math.PI / 4) + 210) / 0.9, 20, Math.PI / 3.5, Math.PI);
      ctx.stroke();
      ctx.restore();

      //伞尖下圆环
      ctx.beginPath();
      ctx.save();
      ctx.lineWidth = 1;
      ctx.scale(2, 1);
      ctx.arc(300 / 2, 250 - 70 * 2.3 + 3, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      //伞尖
      ctx.beginPath();
      ctx.moveTo(300 - 5, 250 - 70 * 2.3);
      ctx.lineTo(300 + 5, 250 - 70 * 2.3);
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineTo(301, 250 - 70 * 2.3 - 25);
      ctx.lineTo(299, 250 - 70 * 2.3 - 25);
      ctx.lineTo(300 - 5, 250 - 70 * 2.3);
      ctx.lineCap = "butt";
      ctx.fill();
      ctx.stroke();

      ctx.restore();
      ctx.restore();
