function logger(a){
    return console.log(a)
  }
  function checkCondition(a , b){
    if(a == b){
      console.log("true")
    }else{
      console.log('false')
    }
  }
// function change img
function handleFileInput(fileInput, imageElement) {
  fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file || e.target.value === "") {
          const reader = new FileReader();
          reader.onload = function (e) {
              imageElement.src = e.target.result;
          };
          reader.readAsDataURL(file);
      } else {
          imageElement.src = "";
      }
  });
}
// function show & hide toast
function visibleToast(toast){
  toast.classList.add('show-toast');
     setTimeout(()=>{
         toast.classList.add('hide-toast');
     },5000)
     setTimeout(()=>{
         toast.classList.remove('show-toast');
         toast.classList.remove('hide-toast');
     }, 5800)
}
// confirm toast
function showConfirm(confirm, box, index){
  confirm.classList.add('show-toast');
  const yes = confirm.querySelector('.yes');
  const no = confirm.querySelector('.no');
  const successToast = document.querySelector('.toast.success')
  const IMGDetailReview = document.querySelectorAll('.review__detail-card .content__review-detail');
  const DescDetailReview = document.querySelector('.review__detail-card .desc');
  yes.addEventListener('click',()=>{
      box.style.display = 'none';
      confirm.classList.add('hide-toast');
      IMGDetailReview[index].style.display = 'none';
      DescDetailReview[index].style.display = 'none'
      setTimeout(()=>{
          confirm.classList.remove('show-toast');
          confirm.classList.remove('hide-toast');
          visibleToast(successToast);
      },500)
  })
  no.addEventListener('click',()=>{
      confirm.classList.add('hide-toast');
      setTimeout(()=>{
          confirm.classList.remove('show-toast');
          confirm.classList.remove('hide-toast');
      },1000)
  })
}
// function check fields input 
function validateInput(input, errorMessage, labelSelector) {
  const label = document.querySelector(labelSelector);
  const errorToast = document.querySelector('.toast.error');
  const textErrorToast = errorToast.querySelector('.content-toast p');
  input.focus();
  input.style.border = '1px solid #BC0404';
  label.style.color = '#BC0404';
  textErrorToast.innerHTML = errorMessage;
  visibleToast(errorToast);
  input.classList.add('animate__shakeX');
  label.classList.add('animate__shakeX');
  input.addEventListener('input', () => {
      input.style.border = '1px solid #bc9f6e';
      label.style.color = '#bc9f6e';
      input.classList.remove('animate__shakeX');
      label.classList.remove('animate__shakeX');
  });
}