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

function Limpar1()
{
  document.form1.reset();
  document.form1.NR.focus();
}

function Vai1()
{
  if (document.form1.cnpjdest.value === "")
  {
    alert("Informe o CNPJ do destinatario.");
    return;
  }
  if (document.form1.NR.value === "")
  {
    alert("Informe pelo menos uma Nota Fiscal.");
    return;
  }
  document.form1.submit();
}