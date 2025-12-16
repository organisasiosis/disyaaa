function login(){
  const u=document.getElementById('username').value;
  const p=document.getElementById('password').value;
  if(u==='admin' && p==='12345'){
    document.getElementById('loginPage').style.display='none';
    document.getElementById('dashboard').style.display='block';
    showSection('home');
  }else{alert('Login gagal');}
}

function showSection(id){
  document.querySelectorAll('.section').forEach(s=>s.style.display='none');
  document.getElementById(id).style.display='block';
}

