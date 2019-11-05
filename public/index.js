call_event();
if(localStorage.getItem('node')){
    var modal = UIkit.modal("#my_id");
    modal.hide();
    call_data();
    
    call_story();
   

}
else{
var modal = UIkit.modal("#my_id");

modal.show();

}

  
    // $("#dob").datepicker({
    //     minViewMode: 4,
    //     format: 'dd/m/yyyy'
    // });

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
                                                    // upload();
                                                    // console.log(document.getElementById('img').value);
                                                    adding(select,syear,eyear,pemail,oemail,linkId1,skyId1,company,curcom,locate1,adder,phoneNumber1,aurId1,name1);
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





// function upload(){
//     console.log("Here");
//     var photo=document.getElementById('img') ;
//     var file=photo.files[0];
//     console.log(photo,photo.files); 
//     var storage = firebase.storage();
//     var storageRef = storage.ref('/images/'+file.name);
//    var uploadTask = storageRef.put(file); 
//    uploadTask.on('state_changed', function(snapshot){ 
//   }, function(error) {console.log(error); 
//   }, function() { 

//        // get the uploaded image url back 
//        uploadTask.snapshot.ref.getDownloadURL().then( 
//         function(downloadURL) { 

//        // You get your url from here 
//         console.log('File available at', downloadURL); 

  
//     }); 
//   }); 
// }; 
function adding(val,val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12,val13){
var select=val;
var syear=val1;
var eyear=val2;
var pemail=val3;
var oemail=val4;
var linkId1=val5;
var skyId1=val6;
var company=val7;
var curcom=val8;
var locate1=val9;
var adder=val10;
var phoneNumber1=val11;
var aurId1=val12;
var name1=val13;

var node=pemail.split("@");
console.log(node);
var db=firebase.database();
var photo=document.getElementById('img') ;
var file=photo.files[0];
console.log(file);


if(photo.files.length == 0){
    db.ref('/alumni_info/'+node[0]).set(
        {
                "Address" : adder,
                "AurId" : aurId1,
                "Company" : company,
                "Course" : select,
                //"DOB" : 12345678909090,
                "Designation" : curcom,
                "Name" : name1,
                "oemail" : oemail,
                "pemail" : pemail,
                "Phone" : phoneNumber1,
                "Year" : syear+"-"+eyear,
                "linkdin" : linkId1,
                "location" : locate1,
                "skypeId" : skyId1,
                "uid" : "123456",
                 "photo":"Not Uploaded"       
            
        }
        );
}
else{
var storage = firebase.storage();
var storageRef = storage.ref('/images/'+file.name);
var uploadTask = storageRef.put(file); 
uploadTask.on('state_changed', function(snapshot){ 
}, function(error) {console.log(error); 
}, function() { 

   // get the uploaded image url back 
   uploadTask.snapshot.ref.getDownloadURL().then( 
    function(downloadURL) { 

   // You get your url from here 
    console.log('File available at', downloadURL); 


    db.ref('/alumni_info/'+node[0]).set(
        {
                "Address" : adder,
                "AurId" : aurId1,
                "Company" : company,
                "Course" : select,
                //"DOB" : 12345678909090,
                "Designation" : curcom,
                "Name" : name1,
                "oemail" : oemail,
                "pemail" : pemail,
                "Phone" : phoneNumber1,
                "Year" : syear+"-"+eyear,
                "linkdin" : linkId1,
                "location" : locate1,
                "skypeId" : skyId1,
                "uid" : "123456",
                 "photo":downloadURL       
            
        }
        );
}); 
});
}
    localStorage.setItem("name",name1);
    localStorage.setItem("node",node[0]);
    localStorage.setItem("uid","123456");
    console.log("Node is created");
    modal.hide();
    call_data();
}
function update() {
    
}
function call_data(){
    var db=firebase.database();
    var node=localStorage.getItem("node");
    var uid=localStorage.getItem("uid");
    console.log(node)
    if(node){   
     db.ref('/alumni_info/'+node+'/').once('value',function(data){
         console.log(data.val());
         console.log(data.val().Name)
        document.getElementById('name3').innerHTML=data.val().Name;
        document.getElementById('batch').innerHTML=data.val().Year;
        document.getElementById('e-mail').innerHTML=data.val().pemail;
        document.getElementById('AurID').innerHTML=data.val().AurId;
        console.log('YAsh');
    });
    }
}
function call_event(){
    var db=firebase.database();
    db.ref('/Events/').on('child_added',function(data){
        var name=data.val().Name;
        var day=data.val().date;
        var dec=data.val().description;
        var url=data.val().photo;
        var locate=data.val().location;
        console.log(name);
        console.log(day);
        console.log(dec);
        console.log(url);
        console.log(locate);
        document.getElementById('call_e').innerHTML= document.getElementById('call_e').innerHTML +  '<li>'+
        '<div uk-gird id="event">'+
        '<div class="uk-width-child-width-expand@s">'+
          '<img src="'+url+'" width="500px"'+
           'id="url" style="margin-left:3%;" height="300px" uk-img>'+
          '<div class="uk-align-right uk-width-1-2@s ty " >'+
            '<h2 class="font ty1" style="font-size:30px;font-weight: 700;color:black" id="name4"><b>'+name+'</b></h2>'+
            '<span uk-icon="location"> </span><span class="font" style="color:#757575;font-size:16px;"'+
             ' id="Date">&nbsp;&nbsp;'+locate+
            '</span> <br>'+
            '<br><span uk-icon="calendar"> </span><span class="font " style="color:#757575;" id="locate"> &nbsp;&nbsp;'+day+
            '</span>'+
            '<p class="font ty1" style="text-align: justify; font-size:16px;" id="descript">'+dec+
            ' </p>'+
          '</div>'+ 
        '</div>'+
        '</li>';
    });
}
function call_story(){
    
    var node=localStorage.getItem("node");
    var db= firebase.database();
  db.ref('/alumni_info/'+node+'/').once('value',function(data){
  
    db.ref('/Stories/').once('value',function(data1){
    
              if(data1.hasChild(node)){
                db.ref('/Stories/'+node).once('value',function(data2){
                      
                      document.getElementById('batch').innerHTML='<span class="font">Batch : <span>'+data2.val().Batch;
                    
                      document.getElementById('name5').innerHTML=data2.val().Name;
                      document.getElementById('content').innerHTML=data2.val().Story;
                      document.getElementById('head').innerHTML=data2.val().Title;
                  });
              }
  });
  });
}
function search(){
    var find=document.getElementById('search').value;
    var db= firebase.database();
    db.ref('/alumni_info').on('value',function(snapshot){
       if(snapshot.hasChild(find)){
           //snapshot.key;
           find=snapshot.key;
           //loop and once in fires ref to fetch all keys
            db.ref('/alumni-info/'+find).on('value',function(data){
                 data.val().Name;
                 data.val().Year;
                 data.val().pemail;
                 data.val().Designation+"under"+data.val().Company;
                 data.val().Phone;
                 data.val().linkdin;
            });
       }
       else{
           alert('User Name Not Found');
       }

    });

    
}