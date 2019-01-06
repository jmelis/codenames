var shuffleSeed = require('shuffle-seed');

var wordSet = ["ladrón", "tubo", "pez", "cuadro", "jarra", "luna", "pincho",
    "motor", "cama", "misil", "corona", "potro", "algodón", "teclado", "pala",
    "estado", "compás", "bala", "tiempo", "cuerno", "blanco", "piña", "cuerda",
    "baño", "día", "nave", "viento", "cadena", "delta", "caballo", "flauta",
    "capital", "cuarto", "extraterrestre", "mina", "flecha", "cubierta", "diario",
    "princesa", "estación", "microscopio", "contrabandista", "ojo", "cámara",
    "conejo", "pastel", "casino", "lomo", "cactus", "bolsa", "cola", "granada",
    "espacio", "malta", "placa", "caballero", "lista", "caravana", "lengua",
    "mañana", "emperador", "pulpo", "mando", "zanahoria", "pase", "orden", "ratón",
    "checo", "rosa", "cabeza", "hotel", "león", "ángel", "destino", "salsa",
    "pista", "mortero", "hospital", "frente", "hoja", "sable", "furgoneta",
    "magia", "cuello", "genio", "mancha", "película", "vado", "canguro", "carro",
    "plomo", "mono", "centauro", "tubería", "revolución", "trama", "testigo",
    "disco", "grano", "señal", "cubo", "faro", "mazo", "muñeca", "robot", "cruz",
    "clase", "muerte", "pasta", "dama", "corredor", "pinta", "artículo", "reina",
    "barra", "mango", "tapa", "pirata", "gota", "cervantes", "saturno",
    "enfermedad", "barco", "campo", "centro", "pistola", "telescopio", "mano",
    "francia", "imán", "kiwi", "guardia", "bota", "naranja", "topo", "venus",
    "sobre", "ornitorrinco", "coche", "punta", "cuchillo", "ola", "caza", "vacío",
    "juicio", "manga", "foso", "silla", "cabo", "científico", "planta", "soldado",
    "roma", "dinosaurio", "pantalla", "dragón", "diente", "antorcha", "limusina",
    "bruja", "playa", "moscú", "coco", "alianza", "submarinista", "tarde",
    "marfil", "cementerio", "berlín", "aguja", "fuente", "as", "llama", "pelotón",
    "canto", "ruleta", "botella", "órgano", "marcha", "manzana", "mercurio",
    "banco", "pirámide", "cocinero", "índice", "látigo", "bomba", "hielo",
    "tableta", "anillo", "escorpión", "agua", "policía", "reserva", "libra",
    "nieve", "maestro", "sirena", "nota", "portada", "tienda", "cromo", "canal",
    "banda", "carta", "ficha", "atlántida", "yema", "estrella", "muro", "golfo",
    "pie", "pulso", "lima", "rascacielos", "ballena", "águila", "agujero", "llave",
    "cresta", "pavo", "cólera", "monitor", "grado", "falda", "concierto", "europa",
    "casco", "cara", "oro", "guante", "gato", "rayo", "enano", "vida", "figura",
    "azteca", "pingüino", "vestido", "caña", "agente", "horca", "abogado",
    "carrera", "espía", "prensa", "rey", "egipto", "pendiente", "zapato", "aire",
    "argentina", "masa", "cinta", "torre", "láser", "gusano", "satélite",
    "diamante", "embajada", "pila", "fantasma", "golpe", "vela", "modelo",
    "enfermera", "oso", "chuleta", "noche", "londres", "ambulancia", "capa",
    "plátano", "áfrica", "línea", "caqui", "antártida", "paso", "serie", "caja",
    "fuego", "columna", "médico", "módulo", "gigante", "don", "alpes", "muelle",
    "tanque", "copa", "regla", "brazo", "papel", "bicho", "puente", "plano",
    "cambio", "pluma", "prima", "tabla", "nueva york", "bola", "méxico",
    "unicornio", "rojo", "marca", "hollywood", "suerte", "américa", "millonario",
    "batería", "cabina", "araña", "fiesta", "archivo", "judía", "vampiro",
    "cinturón", "bloque", "tacto", "estudio", "ninja", "campana", "etiqueta",
    "tierra", "choque", "golondrina", "micro", "olimpo", "portero", "helicóptero",
    "botón", "nudo", "bermudas", "red", "obra", "chocolate", "punto", "iglesia",
    "diana", "grifo", "cura", "pico", "alemania", "corriente", "taco", "perro",
    "hierba", "máscara", "estadio", "fuerza", "carga", "talón", "paracaídas",
    "ópera", "miel", "luz", "círculo", "goma", "guerra", "polo", "nilo", "radio",
    "bosque", "metro", "helado", "tronco", "código", "puerto", "pekín", "boca",
    "sáhara", "teatro", "baile", "ronda", "inglaterra", "sierra", "pieza",
    "italia", "arco", "aceite", "góndola", "veneno", "india", "gancho", "piloto",
    "serpiente", "palma", "corneta", "cometa", "corte", "mesa", "grecia", "enlace",
    "duende", "vidrio", "superhéroe", "corazón", "tokio", "lago ness"];

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
