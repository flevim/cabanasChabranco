$(document).ready(function() {
    $("#formReservas").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },

            surname: {
                required: true,
                minlength: 3
            },

            email: {
                required: true,
                email: true,
            },

            numpersonas: {
                required: true,
                number: true,
                min: 0
            }

        },
        messages: {
            name: {
                required: "Debes completar este campo.",
                minlength: "Nombre inválido.",

            },

            surname: {
                required: "Debes completar este campo.",
                minlength: "Apellido inválido.",
            },

            email: {
                required: "Debes completar este campo.",
                email: "Email inválido.",
            },
            
            numpersonas: {
                required: "Debes completar este campo.",
                number: "Número inválido",
                min: "Debes ser mayor de edad."
            }
        }
    });
});

$(document).ready(function() {
    $("#formContact").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },

             email: {
                required: true,
                email: true,
            },

            message: {
                required: true,
                maxlength: 300
            }

        },
        messages: {
            name: {
                required: "Debes completar este campo.",
                minlength: "Nombre inválido.",

            },

             email: {
                required: "Debes completar este campo.",
                email: "Email inválido.",
            },
            
            message: {
                required: "Debes completar este campo.",
                maxlength: "Haz alcanzado el máximo de caracteres permitidos."
            }
        }
    });
});