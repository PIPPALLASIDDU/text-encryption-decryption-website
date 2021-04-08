function decrypt()
{    
    if(document.getElementById("inputfile").files.length!=0)			
    {
      var n,dekey,i;
      var en1=[];  //it is a constant string since reading from document
      n=document.getElementById("n").value;
      dekey=document.getElementById("dekey").value;
        var fileToLoad = document.getElementById("inputfile").files[0];
        var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent)
   {
        en1 = fileLoadedEvent.target.result;	
    //convert en1 from string into en int array
        var en=en1.split` `.map(x=>+x);		

        i = 0;
        while (i < en.length) 			
        {
            if (en[i] === 0) {
                en.splice(i, 1);
            } else {
                    ++i;
            }
        }
    var pt,ct,k,j,temp,m=""; 
    i=0;
    while (i<en.length)
    {
        temp=en[i]-96;
        ct = temp;
        k = 1;
        for (j = 0; j < dekey; j++)
        {
            k = k * ct;
            k = k % n;
        }
        pt = k + 96;
        m+= String.fromCharCode(pt);
        i++;       
    }

 var x=document.getElementById("output");
    x.innerHTML=m; 
    };
  fileReader.readAsText(fileToLoad, "UTF-8");
    }

else {
    var n,dekey,i;
    var en1=[];  //it is a constant string since reading from document
    n=document.getElementById("n").value;
    dekey=document.getElementById("dekey").value;
    en1=document.getElementById("inputtxt").value;	   
    var en=en1.split` `.map(x=>+x);		
    i = 0;
   while (i < en.length) 			
   {
        if (en[i] === 0) {
            en.splice(i, 1);
        } else {
            ++i;
        }
   }
    var pt,ct,k,j,temp,m=""; 
    i=0;
    while (i<en.length)
    {
        temp=en[i]-96;
        ct = temp;
        k = 1;
    for (j = 0; j < dekey; j++)
    {
        k = k * ct;
        k = k % n;
    }
    pt = k + 96;
        m+= String.fromCharCode(pt);
        i++;       
       }
    
     var x=document.getElementById("output");
     x.innerHTML=m;
    }
 }