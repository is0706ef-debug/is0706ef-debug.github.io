// BMI計算用関数
function calculateBMI() {
    let heightCm = document.getElementById("height").value;
    let weightKg = document.getElementById("weight").value;
    let resultText = document.getElementById("result");

    //入力チェック
    if (heightCm <= 0 || weightKg <= 0 || heightCm === "" || weightKg === "") {
        resultText.textContent = "有効な身長と体重を数値で入力してください。";
        resultText.style.color = "red";
        return;
    }
    let heightM = heightCm / 100;
    let bmi = weightKg / (heightM * heightM);
    bmi = bmi.toFixed(2);

    //BMI判定
    let category;
    if (bmi < 18.5) {
        category = "低体重";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "標準体重";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "過体重";
    } else {
        category = "肥満";
    }
    resultText.style.color = "#224477";
    resultText.textContent = `あなたのBMI：${bmi}、体型区分：${category}`;
}

//お問い合わせフォームの入力チェック
function checkForm() {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("email").value;
    if (name === "" || mail === "") {
        alert("名前とメールアドレスは必須項目です。");
        return false;
    }
    alert("フォーム送信が完了しました。");
    return true;
}
