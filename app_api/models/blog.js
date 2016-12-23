var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
    nombre:{type: String,
            required: true
    },
    autor:{ type: String,
            required: true
    },
    cuerpo: String,
    fecha:{ type: String,
            required: true
    }
});

mongoose.model('Blog', BlogSchema);