// This function is used to decrypt an base64 encoded mail in the frontend to prevent spam bots
function decryptEmail(encoded) {
    var address = atob(encoded);
    window.location.href = "mailto:" + address;
  }
