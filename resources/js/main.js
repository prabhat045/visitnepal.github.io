
  function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if (s1.value == "Province-1"){
      var optionArray = ["|", "Biratnagar|Biratnagar", "Itahari|Itahari" ];
    }
    if (s1.value == "Province-2"){
      var optionArray = ["|", "Kathmandu|Kathmandu", "Bhaktapur|Bhaktapur", "Lalitpur|Lalitpur" ];
    }
   
    for (var option in optionArray){

      var pair = optionArray[option].split("|")
      var newOption =  document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
      s2.options.add(newOption)


    }
  }