
var modal = UIkit.modal("#my_id");
modal.show();

$(document).ready(function () {
    $("#year").datepicker({
        minViewMode: 2,
        format: 'yyyy'
    });
    $("#year1").datepicker({
        minViewMode: 2,
        format: 'yyyy'
    });
    // $("#dob").datepicker({
    //     minViewMode: 4,
    //     format: 'dd/m/yyyy'
    // });
});
function sumbit() {
    var aurId1 = document.getElementById('aurId').value;
    var aurId2 = document.getElementById('aurId');
    var name1 = document.getElementById('name').value;
    var name2 = document.getElementById('name');
    var phoneNumber1 = document.getElementById('phoneNumber').value;
    var phoneNumber2 = document.getElementById('phoneNumber');
    var select = document.getElementById('option1').value;
    var select1 = document.getElementById('option1');
    var syear = $('#year').val();
    var eyear = $('#year1').val();
    console.log(syear, eyear);
    // var dob1 = $('#dob').val();
    var pemail = document.getElementById('emailp').value;
    var pemail1 = document.getElementById('emailp');
    var oemail = document.getElementById('emailo').value;
    var oemail1 = document.getElementById('emailo');
    var linkId1 = document.getElementById('linkId').value;
    var linkId2 = document.getElementById('linkId');
    var skyId1 = document.getElementById('skyId').value;
    var skyId2 = document.getElementById('skyId');
    var curcom = document.getElementById('designation').value;
    var curcom1 = document.getElementById('designation');
    var company = document.getElementById('cucom').value;
    var company1 = document.getElementById('cucom');
    var locate1 = document.getElementById('location').value;
    var locate2 = document.getElementById('location');
    var adder = document.getElementById('address').value;
    var adder1 = document.getElementById('address');
    var alphaExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (name1 !== "" && name1.match(alphaExp)) {
        if (select !== "Course") {
            if (syear !== "") {
                if (eyear !== "") {
                    if (pemail !== "" || pemail.match(emailExp)) {
                        if (oemail !== "" || oemail.match(emailExp)) {
                            if (linkId1 !== "") {
                                if (skyId1 !== "") {
                                    if (company !== "") {
                                        if (curcom !== "" && curcom.match(alphaExp)) {
                                            if (locate1 !== "" && locate1.match(alphaExp)) {
                                                if (adder !== "") {
                                                    adding()
                                                }
                                                else {
                                                    adder1.focus();
                                                    document.getElementById('invalid13').innerHTML = "*Fill Address";
                                                }
                                            }
                                            else {
                                                locate2.focus();
                                                document.getElementById('invalid12').innerHTML = "*Fill Location";
                                            }
                                        }
                                        else {
                                            curcom1.focus();
                                            document.getElementById('invalid11').innerHTML = "*Fill Designatiojn";

                                        }
                                    }
                                    else {
                                        company1.focus();
                                        document.getElementById('invalid10').innerHTML = "*Fill company";

                                    }

                                }
                                else {
                                    skyId2.focus();
                                    document.getElementById('invalid9').innerHTML = "*Fill Skype Id";
                                }
                            }
                            else {
                                linkId2.focus();
                                document.getElementById('invalid8').innerHTML = "*Fill linkdin Id";
                            }
                        }
                        else {
                            oemail1.focus();
                            document.getElementById('invalid7').innerHTML = "*Fill email/invalid email";
                        }
                    }
                    else {
                        pemail1.focus();
                        document.getElementById('invalid6').innerHTML = "*Fill email/invalid email";
                    }
                }
                else {


                    document.getElementById('invalid5').innerHTML = "*Select Year Course";
                }
            }
            else {

                document.getElementById('invalid4').innerHTML = "*Select Year Course";

            }
        }
        else {
            document.getElementById('invalid3').innerHTML = "*Please Select One Course";
            select1.focus();
        }
    }
    else {
        document.getElementById('invalid1').innerHTML = "*invalid Name";
        name2.focus();
    }
}
function adding(){
var node=pemail.split("@");
console.log(node);
var db=firebase.database();
db.ref('/alumni_info/'+node).set(
    {
            "Address" : adder,
            "AurId" : aurId1,
            "Company" : company,
            "Course" : select,
            //"DOB" : 12345678909090,
            "Designation" : curcom,
            "Name" : name1,
            "Oe-mail" : oemail,
            "Pe-mail" : pemail,
            "Phone" : phoneNumber1,
            "Year" : syear+"-"+eyear,
            "linkdin" : linkId1,
            "location" : locate1,
            "skypeId" : skyId1,
            "uid" : "uid"
          
        
    }
);
console.log("Node is created");
}
function update() {
    
}
