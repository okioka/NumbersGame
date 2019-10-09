var min = 1;
var max = 100;
var count = 10;

var ansFrg = true;

if (ansFrg = true) {

    var rig = Math.floor(Math.random() * (max + 1 - min)) + min;
    //alert("答え：" + rig);

}

function che() {

    count = count - 1;

    var ans = Number(document.getElementById("ans").value);

　　if (rig === ans) {

        document.getElementById("res").innerHTML = "おめでとうございます！正解です！";
        document.getElementById("cou").innerHTML = "回答権を" + count + "回残して正解しました。";
        ansFrg = true;
        document.getElementById("ansButton").style.display="none";

    } else if (rig > ans) {

        document.getElementById("res").innerHTML = "不正解です。正解はもっと大きい数です。";
        ansFrg = false;

　　} else if (rig < ans) {

        document.getElementById("res").innerHTML = "不正解です。正解はもっと小さな数です。";
        ansFrg = false;

　　}

    if (ansFrg === false) {

        if (count === 0) {

            document.getElementById("res").innerHTML = "残念。ゲームオーバーです。"
            document.getElementById("cou").innerHTML = "正解は" + rig + "でした。";
            document.getElementById("ansButton").style.display="none";

        } else {

            document.getElementById("cou").innerHTML = "あと" + count + "回間違えるとゲームオーバーです。";
            document.getElementById("ans").focus();

        }

    }

} 

function rer() {

    location.reload();

}