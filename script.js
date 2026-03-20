function toggle(id) {
  const el = document.getElementById(id);
  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}


  // const form = document.getElementById('contact-form');
  // const responseMsg = document.getElementById('response-msg');
  // const submitBtn = document.getElementById('submit-btn');

  // form.onsubmit = async (e) => {
  //   e.preventDefault(); // Page refresh hone se rokega
  //   submitBtn.innerText = "Bhej raha hoon...";
  //   submitBtn.disabled = true;

  //   const formData = new FormData(form);
  //   const response = await fetch(form.action, {
  //     method: 'POST',
  //     body: formData,
  //     headers: { 'Accept': 'application/json' }
  //   });

  //   if (response.ok) {
  //     form.style.display = 'none'; // Form gayab ho jayega
  //     responseMsg.style.display = 'block'; // Thank you dikhega
  //   } else {
  //     alert("Oops! Kuch galti hui, fir se try karein.");
  //     submitBtn.disabled = false;
  //     submitBtn.innerText = "Message Bhejein";
  //   }
  // };

 const form = document.getElementById('contact-form');
  const responseMsg = document.getElementById('response-msg');
  const submitBtn = document.getElementById('submit-btn');

  form.onsubmit = async (e) => {
    e.preventDefault(); 
    submitBtn.innerText = "Bhej raha hoon...";
    submitBtn.disabled = true;

    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.style.display = 'none'; 
      responseMsg.style.display = 'block'; 
    } else {
      alert("Kuch galti hui, check karein.");
      submitBtn.disabled = false;
      submitBtn.innerText = "Message Bhejein";
    }
  };
