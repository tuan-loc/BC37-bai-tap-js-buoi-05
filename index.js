// Bài tập: Quản lý tuyển sinh

/**
 * INPUT: điểm chuẩn, môn 1, môn 2, môn 3, khu vực(A, B, C, X), đối tượng (1, 2, 3, 0)
 *
 * PROCESS:
 *  1. Lấy input(hardcode)
 *  2. Tính điểm ưu tiên theo khu vực
 *  3. Tính điểm ưu tiên theo đối tượng
 *  4. Tính tổng điểm = môn 1 + môn 2 + môn 3 + điểm KV + điểm TB
 *  5. Check kết quả, tổng điểm >= điểm chuẩn và ko có môn nào = 0 => đậu
 *
 * OUTPUT: tính điểm, kết quả đậu rớt
 */

function scoreArea(area) {
  switch (area) {
    case "A":
      return 2;

    case "B":
      return 1;

    case "C":
      return 0.5;

    default:
      return 0;
  }
}

function scoreObject(obj) {
  switch (obj) {
    case 1:
      return 2.5;

    case 2:
      return 1.5;

    case 3:
      return 1;

    default:
      return 0;
  }
}

function totalScore(sub1, sub2, sub3, area, obj) {
  var sum = sub1 + sub2 + sub3 + scoreArea(area) + scoreObject(obj);
  return sum;
}

function result(standardScore, sub1, sub2, sub3, area, obj) {
  var total = totalScore(sub1, sub2, sub3, area, obj);
  if (total >= standardScore && sub1 !== 0 && sub2 !== 0 && sub3 !== 0) {
    console.log("Tổng điểm:", total, "=> Đậu");
    return;
  }
  console.log("Tổng điểm:", total, "=> Rớt");
}

result(25, 8, 7.5, 9, "A", 0);

// -----------------------------------

// Bài tập 02: Tính tiền điện
/**
 * Input: Tên, số Kw
 *
 * Process:
 * 1. Lấy thông tin nhập vào
 * 2. Kiểm tra từng điều kiện để tính tiền tiêu thụ điện
 * 3. Xuất kết quả ra màn hình
 *
 * Output:Tính và xuất tiền điện phải trả
 */

function costEle(fullName, kw) {
  var cost;
  if (kw <= 50) {
    cost = kw * 500;
    console.log(
      "Gia đình ông:",
      fullName,
      "phải trả tiền điện là:",
      cost,
      "VND"
    );
  } else if (kw <= 100) {
    cost = 50 * 500 + (kw - 50) * 650;
    console.log(
      "Gia đình ông:",
      fullName,
      "phải trả tiền điện là:",
      cost,
      "VND"
    );
  } else if (kw <= 200) {
    cost = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    console.log(
      "Gia đình ông:",
      fullName,
      "phải trả tiền điện là:",
      cost,
      "VND"
    );
  } else if (kw <= 350) {
    cost = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    console.log(
      "Gia đình ông:",
      fullName,
      "phải trả tiền điện là:",
      cost,
      "VND"
    );
  } else {
    cost = 50 * 500 + 50 * 650 + 100 * 850 + 200 * 1100 + (kw - 350) * 1300;
    console.log(
      "Gia đình ông:",
      fullName,
      "phải trả tiền điện là:",
      cost,
      "VND"
    );
  }
}

costEle("Tuấn Lộc", 360);
