document.getElementById('modal').onload;
//when completed te validation
//then the code is
//variables in the json format and the data will be pushed
var db=firebase.database();
db.ref('/alumni_info/'+aurID).set(
    {
            "Address" : "72/73 patel marg jaipur",
            "AurId" : "A20405217059",
            "Company" : "Wipro",
            "Course" : "ASET",
            "DOB" : 12345678909090,
            "Designation" : "Network Engeneer",
            "Name" : "Yash Kalra",
            "Oe-mail" : "kkalrayash@gmail.com",
            "Pe-mail" : "yashkalra088@gmail.com",
            "Phone" : 8769476926,
            "Year" : "2017-1021",
            "linkdin" : "yash088",
            "location" : "Jaipur",
            "skypeId" : "yash_987"
          
        
    }
);
// for update
