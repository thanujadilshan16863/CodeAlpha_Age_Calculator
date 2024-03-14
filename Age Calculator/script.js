function calculateAge(){
    var byear=document.getElementById("txtyear").value;
    var bmonth=document.getElementById("txtmonth").value;
    var curntmonth=new Date().getMonth();
    var curntyear=new Date().getFullYear();
    var age=curntyear-byear;

    if(bmonth>curntmonth){
        var months = bmonth - curntmonth;
        var year=curntyear-byear-1;
    }
    else{
        var months = curntmonth - bmonth;
        var year=curntyear-byear;
    }

    document.getElementById("display").innerHTML= +year+ " Years & " +months+ " Months OLD ";

}