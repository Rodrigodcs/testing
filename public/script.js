function Limpar2(){
    document.form2.reset();
    document.form2.cnpj.focus();
}

function Vai2(){
    if (document.form2.cnpj.value === ""){
        alert("Informe o CNPJ do remetente");
        return;
    }
    if ((document.form2.cnpj.value.length > 11) && (document.form2.senha.value === "")){
        alert("Informe a Senha.");
        return;
    }
    document.form2.submit();
}