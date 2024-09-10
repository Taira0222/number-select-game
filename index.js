  let randomNumber =Math.floor(Math.random()*100)+1 ;
  let displayExpectNumber =0;

  function expectNumber(){
    const playerNumber = Number(document.querySelector('.one-to-hundred').value);
    if(playerNumber<1 || playerNumber>100){
      alert('1から100の間で数字を入力してください。');
      return;
    }

    if (isNaN(playerNumber)) {
      alert('数字を入力してください');
      return;
    }

    if(playerNumber>randomNumber){
      alert('あなたが入力した数字よりも小さいです。');
      displayExpectNumber++;
      return displayExpectNumber ;
    }else if(playerNumber<randomNumber){
      alert('あなたが入力した数字よりも大きいです。');
      displayExpectNumber++;
      return displayExpectNumber ;
    }else{
      alert(`おめでとうございます。見事的中です。
  正解は${randomNumber}でした。`)
    }  
  }

  function displayExpect(){
    document.querySelector('.expect-number')
      .innerHTML  =`予想回数:${displayExpectNumber}回`;
    document.querySelector('.one-to-hundred').value ='';
    
  }

  function resetNumber(){
    randomNumber =Math.floor(Math.random()*100)+1 ;
    displayExpectNumber =0;
    document.querySelector('.expect-number')
      .innerHTML  =`予想回数:${displayExpectNumber}回`;
    document.querySelector('.one-to-hundred').value ='';
  }

  function eventKeydown(event){
    if(event.key==='Enter'){
      expectNumber();
      displayExpect();
    }
  }

