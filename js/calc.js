function calculateSum() {
  var denomination500 = parseInt(document.getElementById("denomination_500").value) || 0;
  var denomination200 = parseInt(document.getElementById("denomination_200").value) || 0;
  var denomination100 = parseInt(document.getElementById("denomination_100").value) || 0;
  var denomination50 = parseInt(document.getElementById("denomination_50").value) || 0;
  var denomination20 = parseInt(document.getElementById("denomination_20").value) || 0;
  var denomination10 = parseInt(document.getElementById("denomination_10").value) || 0;

  var sum = denomination500 * 500 + denomination200 * 200 + denomination100 * 100 + denomination50 * 50 + denomination20 * 20 + denomination10 * 10;

  document.getElementById("sum").value = sum;

  var additionalNumber = parseInt(document.getElementById("additionalNumber").value) || 0;
  var totalSum = sum + additionalNumber;

  document.getElementById("totalSum").value = totalSum;
}