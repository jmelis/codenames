var shuffleSeed = require('shuffle-seed');

var wordSet = ["ladr\u00f3n", "tubo", "pez", "cuadro", "jarra", "luna", "pincho", "motor", "cama", "misil", "corona", "potro", "algod\u00f3n", "teclado", "pala", "estado", "comp\u00e1s", "bala", "tiempo", "cuerno", "blanco", "pi\u00f1a", "cuerda", "ba\u00f1o", "d\u00eda", "nave", "viento", "cadena", "delta", "caballo", "flauta", "capital", "cuarto", "extraterrestre", "mina", "flecha", "cubierta", "diario", "princesa", "estaci\u00f3n", "microscopio", "contrabandista", "ojo", "c\u00e1mara", "conejo", "pastel", "casino", "lomo", "cactus", "bolsa", "cola", "granada", "espacio", "malta", "placa", "caballero", "lista", "caravana", "lengua", "ma\u00f1ana", "emperador", "pulpo", "mando", "zanahoria", "pase", "orden", "rat\u00f3n", "checo", "rosa", "cabeza", "hotel", "le\u00f3n", "\u00e1ngel", "destino", "salsa", "pista", "mortero", "hospital", "frente", "hoja", "sable", "furgoneta", "magia", "cuello", "genio", "mancha", "pel\u00edcula", "vado", "canguro", "carro", "plomo", "mono", "centauro", "tuber\u00eda", "revoluci\u00f3n", "trama", "testigo", "disco", "grano", "se\u00f1al", "cubo", "faro", "mazo", "mu\u00f1eca", "robot", "cruz", "clase", "muerte", "pasta", "dama", "corredor", "pinta", "art\u00edculo", "reina", "barra", "mango", "tapa", "pirata", "gota", "cervantes", "saturno", "enfermedad", "barco", "campo", "centro", "pistola", "telescopio", "mano", "francia", "im\u00e1n", "kiwi", "guardia", "bota", "naranja", "topo", "venus", "sobre", "ornitorrinco", "coche", "punta", "cuchillo", "ola", "caza", "vac\u00edo", "juicio", "manga", "foso", "silla", "cabo", "cient\u00edfico", "planta", "soldado", "roma", "dinosaurio", "pantalla", "drag\u00f3n", "diente", "antorcha", "limusina", "bruja", "playa", "mosc\u00fa", "coco", "alianza", "submarinista", "tarde", "marfil", "cementerio", "berl\u00edn", "aguja", "fuente", "as", "llama", "pelot\u00f3n", "canto", "ruleta", "botella", "\u00f3rgano", "marcha", "manzana", "mercurio", "banco", "pir\u00e1mide", "cocinero", "\u00edndice", "l\u00e1tigo", "bomba", "hielo", "tableta", "anillo", "escorpi\u00f3n", "agua", "polic\u00eda", "reserva", "libra", "nieve", "maestro", "sirena", "nota", "portada", "tienda", "cromo", "canal", "banda", "carta", "ficha", "atl\u00e1ntida", "yema", "estrella", "muro", "golfo", "pie", "pulso", "lima", "rascacielos", "ballena", "\u00e1guila", "agujero", "llave", "cresta", "pavo", "c\u00f3lera", "monitor", "grado", "falda", "concierto", "europa", "casco", "cara", "oro", "guante", "gato", "rayo", "enano", "vida", "figura", "azteca", "ping\u00fcino", "vestido", "ca\u00f1a", "agente", "horca", "abogado", "carrera", "esp\u00eda", "prensa", "rey", "egipto", "pendiente", "zapato"];

var keysBase = [];
keysBase = keysBase.concat(Array(8).fill('blue'));
keysBase = keysBase.concat(Array(8).fill('red'));
keysBase = keysBase.concat(Array(7).fill('bystander'));
keysBase = keysBase.concat(Array(1).fill('assassin'));

var game = function(seed) {
    var turn, keys;

    var seedToInt = seed.split('').map(e => e.charCodeAt(0)).reduce((t, n) => t + n) ;

    if (seedToInt % 2 == 0) {
        turn = "blue";
    } else {
        turn = "red";
    }

    keys = keysBase.concat([turn]);

    var words = shuffleSeed.shuffle(wordSet, seed).slice(0,25);
    var cells = shuffleSeed.shuffle(keys, seed);

    return {
        'turn': turn,
        'words': words,
        'cells': cells
    };
};

module.exports = game;
