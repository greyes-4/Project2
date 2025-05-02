// Validate form before submission
function validateForm() {
    const name = document.getElementById('name').value.trim();
    if (name.length < 2) {
      alert('Please enter your full name.');
      return false;
    }
    return true;
  }
  
  // Live character count for message box
  function updateCharCount(textarea) {
    const count = textarea.value.length;
    document.getElementById('char-count').textContent = 'Characters: ' + count;
  }
  