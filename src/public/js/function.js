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
function visibleToast({
  type = "",
  message = "",
}){
  const mainToast = document.getElementById('toast');
  if(mainToast){
    const toast = document.createElement('div')
    toast.classList.add('toast', `${type}`)
    toast.classList.add('show-toast');
    setTimeout(()=>{
      toast.classList.add('hide-toast');
    },5000)
    setTimeout(()=>{
        toast.classList.remove('show-toast');
        toast.classList.remove('hide-toast');
        mainToast.removeChild(toast);
    }, 5400)
    const icons = {
      success: `<svg fill="#7CEC24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      <g id="SVGRepo_iconCarrier">
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/>
      </g>
      </svg>`,
      error: `<svg fill="#BC0404" version="1.1" baseProfile="tiny" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" viewBox="-0.5 0.5 42 42" xml:space="preserve">
      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      <g id="SVGRepo_iconCarrier"> <path d="M29.582,8.683l-0.129,0.12L8.3,29.954c-0.249,0.249-0.428,0.478-0.547,0.688c-2.04-2.639-3.233-6-3.233-9.701 c0-8.797,6.626-15.482,15.421-15.482C23.632,5.459,26.955,6.644,29.582,8.683z M10.937,33.704c0.189-0.117,0.388-0.287,0.606-0.507 l21.151-21.151l0.041-0.04c1.74,2.518,2.746,5.602,2.746,8.994c0,8.785-6.696,15.541-15.481,15.541 C16.568,36.541,13.454,35.506,10.937,33.704z M0.5,21c0,10.775,8.735,19.5,19.5,19.5c10.767,0,19.501-8.725,19.501-19.5 c0-10.775-8.734-19.5-19.5-19.5C9.235,1.5,0.5,10.225,0.5,21z"/> </g>
      </svg>`,
      warning: `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#FCAC34" stroke="#FCAC34">
      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      <g id="SVGRepo_iconCarrier"> <title>warning-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="add" fill="#FCAC34" transform="translate(32.000000, 42.666667)"> <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z M224,272 C208.761905,272 197.333333,283.264 197.333333,298.282667 C197.333333,313.984 208.415584,325.248 224,325.248 C239.238095,325.248 250.666667,313.984 250.666667,298.624 C250.666667,283.264 239.238095,272 224,272 Z M245.333333,106.666667 L202.666667,106.666667 L202.666667,234.666667 L245.333333,234.666667 L245.333333,106.666667 Z" id="Combined-Shape"> </path> </g> </g> </g>
      </svg>`,
    };
    const icon = icons[type];
    let titleToast;
    if(type === 'success'){
      titleToast = 'Thành Công'
    }else if(type === 'warning'){
      titleToast = 'Cảnh Báo'
    }else{
      titleToast = 'Vi Phạm'
    }
    toast.innerHTML = `
    <div class="icon-toast">
      ${icon}
    </div>
    <div class="content-toast">
        <p><b>${titleToast}:</b> ${message}</p>
    </div>
    `;
    mainToast.appendChild(toast);
  }
}
// confirm toast
function showConfirm(confirm, box, index){
  confirm.classList.add('show-toast');
  const yes = confirm.querySelector('.yes');
  const no = confirm.querySelector('.no');
  const IMGDetailReview = document.querySelectorAll('.review__detail-card .content__review-detail');
  const DescDetailReview = document.querySelectorAll('.review__detail-card .desc');
  yes.addEventListener('click',()=>{
      box.style.display = 'none';
      confirm.classList.add('hide-toast');
      setTimeout(()=>{
          confirm.classList.remove('show-toast');
          confirm.classList.remove('hide-toast');
          visibleToast({
            type: 'success',
            message: 'Xóa Nội Dung Thành Công'
        });
      },500)
      IMGDetailReview[index].style.display = 'none';
      DescDetailReview[index].style.display = 'none'
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
  visibleToast({
    type: 'error',
    message: `${errorMessage}`
  })
  input.focus();
  input.style.border = '1px solid #BC0404';
  input.classList.add('animate__shakeX');
  if(label){
    label.classList.add('animate__shakeX');
    label.style.color = '#BC0404';
    setTimeout(()=>{
      label.classList.remove('animate__shakeX');
    }, 500)
  }
  setTimeout(() => {
    input.classList.remove('animate__shakeX');
  }, 500);
  input.addEventListener('input', () => {
      input.style.border = '1px solid #bc9f6e';
      input.classList.remove('animate__shakeX');
      if(label){
        label.style.color = '#bc9f6e';
        label.classList.remove('animate__shakeX');
      }
  });
}