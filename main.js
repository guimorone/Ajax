//promises -> códigos assíncronos (não depende da "linha do tempo" do resto do código)

var minhaPromise = function () {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.github.com/users/guimorone");
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) { //variável quando a resposta voltou pra gente
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject("Erro na requisição");
                }
            }
        };
    });
};

minhaPromise()
    .then(response => {
        console.log(response);
    }) //executado quando chamar o resolve
    .catch(error => {
        console.log(error);
    }); //executado quando chamar o reject