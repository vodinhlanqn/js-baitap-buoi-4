// BÀI TẬP 1: CHƯƠNG TRÌNH XUẤT RA 3 SỐ - THEO THỨ TỰ TĂNG DẦN

document.getElementById('btnCalcIncrease').onclick = function () {
    var iNumber_a = document.getElementById('iNumber_a').value * 1;
    var iNumber_b = document.getElementById('iNumber_b').value * 1;
    var iNumber_c = document.getElementById('iNumber_c').value * 1;
    var result = "";

    if (iNumber_a > 0 && iNumber_b > 0 && iNumber_c > 0) {
        if (iNumber_a > iNumber_b && iNumber_b > iNumber_c) {
            result = `${iNumber_c} < ${iNumber_b} < ${iNumber_a} `;
        } else if (iNumber_a > iNumber_b && iNumber_c > iNumber_b) {
            if (iNumber_a > iNumber_c) {
                result = `${iNumber_b} < ${iNumber_c} < ${iNumber_a} `;
            } else {
                result = `${iNumber_b} < ${iNumber_a} < ${iNumber_c} `;
            }
        } else if (iNumber_b > iNumber_a && iNumber_b > iNumber_c) {
            if (iNumber_a > iNumber_c) {
                result = `${iNumber_c} < ${iNumber_a} < ${iNumber_b} `;
            } else {
                result = `${iNumber_a} < ${iNumber_c} < ${iNumber_b} `;
            }
        } else if (iNumber_a > iNumber_b) {
            result = `${iNumber_b} < ${iNumber_a} < ${iNumber_c} `;
        } else {
            result = `${iNumber_a} < ${iNumber_b} < ${iNumber_c} `;
        }


    } else {
        result = `Các số không hợp lệ`;
    }
    document.getElementById('showResultIncrease').innerHTML = `Kết quả: ${result}`;
}

// ----------------------------------------------------------------------------------

// BÀI TẬP 2: CHƯƠNG TRÌNH CHÀO HỎI CÁC THÀNH VIÊN TRONG GIA ĐÌNH

document.getElementById('btnSayHello').onclick = function () {
    var person = document.getElementById('personsFamily').value;
    var resultPerson = "";

    if (person === "father") {
        resultPerson = `Xin Chào Bố!`;
    } else if (person === "mother") {
        resultPerson = `Xin Chào Mẹ!`;
    } else if (person === "brother") {
        resultPerson = `Xin Chào Anh Trai!`;
    } else if (person === "sister") {
        resultPerson = `Xin Chào Em Gái!`;
    } else {
        resultPerson = `Xin Chào Người Lạ Ơi!`;
    }
    document.getElementById('showResultPersonFamily').innerHTML = resultPerson;
}

// ----------------------------------------------------------------------------------

// BÀI TẬP 3: CHƯƠNG TRÌNH ĐẾM SỐ CHẲN LẼ

document.getElementById('btnCheckEvenOdd').onclick = function () {
    var iNumber_1 = document.getElementById('iNumber_1').value * 1;
    var iNumber_2 = document.getElementById('iNumber_2').value * 1;
    var iNumber_3 = document.getElementById('iNumber_3').value * 1;
    var resultEvenOdd = "";
    var countEven = 0;
    var countOdd = 0;

    if (iNumber_1 > 0 && iNumber_2 > 0 && iNumber_3 > 0) {
        if (iNumber_1 % 2 == 0) {
            countEven += 1;
            if (iNumber_2 % 2 == 0) {
                countEven += 1;
                if (iNumber_3 % 2 == 0) {
                    countEven += 1;
                    countOdd = 3 - countEven;
                    resultEvenOdd = `Có ${countEven} số chẵn, ${countOdd} số lẽ`;
                } else {
                    countOdd = 3 - countEven;
                    resultEvenOdd = `Có ${countEven} số chẵn, ${countOdd} số lẽ`;
                }
            } else if (iNumber_3 % 2 == 0) {
                countEven += 1;
                countOdd = 3 - countEven;
                resultEvenOdd = `Có ${countEven} số chẵn, ${countOdd} số lẽ`;
            } else {
                countOdd = 3 - countEven;
                resultEvenOdd = `Có ${countEven} số chẵn, ${countOdd} số lẽ`;
            }
        } else if (iNumber_2 % 2 == 0) {
            countEven += 1;
            if (iNumber_3 % 2 == 0) {
                countEven += 1;
                countOdd = 3 - countEven;
                resultEvenOdd = `Có ${countEven} số chẵn, ${countOdd} số lẽ`;
            } else {
                countOdd = 3 - countEven;
                resultEvenOdd = `Có ${countEven} số chẵn, ${countOdd} số lẽ`;
            }
        } else if (iNumber_3 % 2 == 0) {
            countEven += 1;
            countOdd = 3 - countEven;
            resultEvenOdd = `Có ${countEven} số chẵn, ${countOdd} số lẽ`;
        } else {
            countOdd = 3 - countEven;
            resultEvenOdd = `Có ${countEven} số chẵn, ${countOdd} số lẽ`;
        }
    } else {
        resultEvenOdd = `Kiểm tra lại các số đã nhập!`
    }

    document.getElementById('showResultEvenOdd').innerHTML = resultEvenOdd;

}


// ----------------------------------------------------------------------------------

// BÀI TẬP 4: ĐOÁN TAM GIÁC GÌ?

document.getElementById('btnGuessTriangle').onclick = function () {
    var a = document.getElementById('iCanh_a').value * 1;
    var b = document.getElementById('iCanh_b').value * 1;
    var c = document.getElementById('iCanh_c').value * 1;

    var resultTriangle = "";
    if (a > 0 && b > 0 && c > 0) {
        if (a == b && b == c) {
            resultTriangle = `Là hình tam giác đều !`;
        } else if (a == b || a == c || b == c) {
            resultTriangle = `Là hình tam giác cân !`;
        } else if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == a * a + b * b)) {
            resultTriangle = `Là hình tam giác vuông !`;
        } else {
            resultTriangle = `Là hình tam giác thường !`;
        }
    } else {
        resultTriangle = `Các cạnh của tam giác không hợp lệ`;
    }

    document.getElementById('showResultTriangle').innerHTML = resultTriangle;
}