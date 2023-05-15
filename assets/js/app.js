$('#form-contato').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Sucesso!',
        text: 'Contato realizado com sucesso!',
        icon: 'success',
    })
});

$('.form-newsletter').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Sucesso!',
        text: 'Você foi cadastrado com sucesso na newsletter!',
        icon: 'success',
    })
});