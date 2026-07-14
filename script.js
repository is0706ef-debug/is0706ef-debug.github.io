//BMI计算函数
function calculateBMI() {
    let heightCm = document.getElementById("height").value;
    let weightKg = document.getElementById("weight").value;
    let resultText = document.getElementById("result");

    //输入校验
    if (heightCm <= 0 || weightKg <= 0 || heightCm === "" || weightKg === "") {
        resultText.textContent = "请输入有效的身高和体重（正数）！";
        resultText.style.color = "red";
        return;
    }
    let heightM = heightCm / 100;
    let bmi = weightKg / (heightM * heightM);
    bmi = bmi.toFixed(2);

    //判断BMI等级
    let category;
    if (bmi < 18.5) {
        category = "Underweight（偏瘦）";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal（标准）";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight（超重）";
    } else {
        category = "Obese（肥胖）";
    }
    resultText.style.color = "#224477";
    resultText.textContent = `你的BMI值：${bmi}，体型分类：${category}`;
}

//表单验证函数
function checkForm() {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("email").value;
    if (name === "" || mail === "") {
        alert("姓名和邮箱不能为空！");
        return false;
    }
    alert("表单提交成功！");
    return true;
}
