function kilometerToMeter(num){
    var meter=num*1000;
   if(meter>=1){
      return meter;
   }
   else{
    return "your input value not right" ;
   }
   
}





function budgetCalculator(watch,mobile,laptop){
    var watchAmount=watch*50;
    var mobileAmount=mobile*100;
    var laptopAmount=laptop*500;
    var totalAmount=watchAmount+mobileAmount+laptopAmount;
    if(watchAmount>=1 && mobileAmount>=1 && laptopAmount>=1){
        return totalAmount; 
    }
    else{
        return "your input value not right" ;
    }
}





function hotelCost(day){
   var amount=0;
   if(day<=10){
       amount=day*100;

       return amount;
   }
   else if(day<=20){
      firstTenDayCost=10*100;
      secondTenDay=day-10;
      secondTenDayCost=secondTenDay*80;
      amount=secondTenDayCost+firstTenDayCost;
      return amount;
   }
   else{
    firstTenDayCost=10*100;
    secondTenDayCost=10*80;
    thirdStep=day-20;
    thirdStepCost=thirdStep*50;
    amount=firstTenDayCost+secondTenDayCost+thirdStepCost;
    return amount;

   }

}






function megaFriend(name){
    var friendName=name[0];
    for(i=0;i<name.length;i++){
        var element=name[i];
       
        if(element.length>friendName.length){
            friendName=element;
        }
    }
    return friendName;
}


