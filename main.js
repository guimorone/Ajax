//usando axios (botei nodemodules mas n soube usar pro axios ;(, ai botei o script no index.html msm)
//axios biblioteca pra n ter que usar aquele XMLHttpRequest

//só informar o método .get .put .delete etc
axios.get("https://api.github.com/users/guimorone")
  .then((response) => {
    console.log(response);
  }) //executado quando chamar o resolve
  .catch((error) => {
    console.log(error);
  }); //executado quando chamar o reject