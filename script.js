function compute()
{
    //Get user inputs
    let principal = parseInt(document.getElementById("principal").value);
    if (principal == null || principal == 0 || principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        let rate = parseInt(document.getElementById("rate").value);
        let years = parseInt(document.getElementById("year_val").value);

        //compute values
        let interest = principal * years * (rate/100);
        let amount = principal + interest;

        //Year
        let year = new Date().getFullYear() + parseInt(years);
        //depict result
        document.getElementById("result").innerHTML = `If you deposit ${principal},<br>
        at an interest rate of ${rate}%.<br>
        You will receive an amount of ${interest},<br>
        in the year ${year}<br>`;

     
    }
    
    
}

function updateRate(){
    let rateval = document.getElementById("rate").value;
    // update text value 
    document.getElementById("rate_val").textContent = rateval;

}
        
