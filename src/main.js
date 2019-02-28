var loanSlider = document.getElementById('amount_range');
var amountValue = document.getElementById('amount_value');
amountValue.innerHTML = loanSlider.value;

var installmentSlider = document.getElementById("installment_range");
var installmentValue = document.getElementById("installment_value");
installmentValue.innerHTML = installmentSlider.value; // Display the default slider value

loanSlider.oninput = function () {
    amountValue.innerHTML = this.value;
}

// Update the current slider value (each time you drag the slider handle)
installmentSlider.oninput = function () {
    installmentValue.innerHTML = this.value;
}
var installmentMinAmount = document.getElementById('min_installment');



function calculateLoan() {

    const INTEREST_RATE = (6 / 100) / 12;
    var loan_amount = loanSlider.value || "provide value";
    var installment_min = installmentMinAmount.value || 50;
    var repay_duration = installmentSlider.value || "provide value";
    console.log(installment_min)

    /**
     * Loan Payment = Amount / Discount Factor or P = A / D
     * Discount Factor (D) = {[(1 + i) ^n] - 1} / [i(1 + i)^n] 
    */
    var discount_factor =

        (Math.pow((1 + INTEREST_RATE), repay_duration) - 1) / (INTEREST_RATE * Math.pow((1 + INTEREST_RATE), repay_duration));


    var repay = Math.round(loan_amount / discount_factor) || "Please fill all the amount";
    document.getElementById("result").innerHTML = repay + "  <b > Euro/Month</b>";