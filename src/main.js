 // variables Global
 const state = {
    next_button: 1,
    previous_button: 0,
    current_tab: 1,
}


var loanForm = document.loan_form;
var loanSlider = document.getElementById('amount_range');
var amountValue = document.getElementById('amount_value');
// default value on load
amountValue.innerHTML = loanSlider.value;

var installmentSlider = document.getElementById("installment_range");
var installmentValue = document.getElementById("installment_value");
// Display the default slider value onload
installmentValue.innerHTML = installmentSlider.value;

loanSlider.oninput = function () {
    amountValue.innerHTML = this.value;
    calculateLoan();
}

// Update the current slider value (each time you drag the slider handle)
installmentSlider.oninput = function () {
    installmentValue.innerHTML = this.value;
    calculateLoan()
}

function sendMail(formData) {
    
    //TODO: this should be implemented soon
    // customer email sendin implementation from server-side 
}
var installmentMinAmount = loanForm.min_installment;

function ifEmployd(checkbox) {
    if (checkbox == true) return 1;
    else return 0;
}

function formFieldCheck(form = {}) {
    
    var email = form.email_address.value;//check email regex
    var min_installment_amount = form.valueOf().min_installment.value;
    const employmentStatus = ifEmployd(form.employment_status.checked); // if checked 1 else 0
    console.log(form.employment_status.checked)
    if (!email || !min_installment_amount) {
        // form.validate_input.nextSibling.innerHTML="must";
        console.log(form)
        form.email_address.placeholder = "Required field";
        form.min_installment.placeholder = "Required field"
        return 0;
    }
    state.next_button = true;
    console.log(email, min_installment_amount, state.next_button)
}

function calculateLoan() {
    // INFO :: if this checks ok
    // const check = formFieldCheck(document.loan_form);
    const INTEREST_RATE = (6 / 100) / 12;
    var loan_amount = loanSlider.value || "provide value";
    var installment_min = installmentMinAmount.value || 50;
    var repay_duration = installmentSlider.value || "provide value";
    var form = document.getElementById('loan-form');
    
    /**
     * Loan Payment = Amount / Discount Factor or P = A / D
     * Discount Factor (D) = {[(1 + i) ^n] - 1} / [i(1 + i)^n] 
     */
    var discount_factor =
    (Math.pow((1 + INTEREST_RATE), repay_duration) - 1) /
    (INTEREST_RATE * Math.pow((1 + INTEREST_RATE), repay_duration));
    var repay = Math.round(loan_amount / discount_factor) || "Please fill all the amount";
    document.getElementById("result").innerHTML = repay + "€/Month";
}

/*
form View satrt
*/
function nextPage() {
    // const check = formFieldCheck(document.loan_form);
    increament();
    console.log(state.current_tab)
}

function previousPage() {
    decrement();
    console.log(state.current_tab)
}

function increament() {
    state.current_tab = state.current_tab + 1;
    return true;
}

function decrement() {
    state.current_tab = state.current_tab - 1;
    return true;
}

function formPageView(index) {
    var tabs = document.getElementsByClassName('tab');
    // console.log(document.loan_form);
    // return ; 
    tabs[index].style.display = "block";
    console.log('=============', index)
    
    if (index == 0) {
        document.loan_form.previous_button.style.display = "none";
    } else {
        document.loan_form.previous_button.style.display = "inline";
    }
    // if (tabs.length==state.current_tab){
        //     document.loan_form.next_button.innerHTML="Submint";
        // }
    }
    
    function init() {
        formPageView(1);
    }
/*form view end*/


