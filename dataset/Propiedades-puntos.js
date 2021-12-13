var geoJson = {
    type: 'FeatureCollection',
    features: [
        //copia y edita este código desde aquí
        {
        type: 'Feature',
        "geometry": { "type": "Point", "coordinates": [-71.45276965,-33.04047705]}, //coloca tus coordenas
        "properties": {
            'title': 'Agrupación por Parques Verdes', //escribe tu título o nombre de la experiencia socioambiental
            'category': 'Práctica Ecológica', // escribe tu categoría
            'marker-color': '#008000', //coloca el color de tu marcador
            'marker-symbol': 'natural', //escribe el nombre de tu marcador
            'marker-size': 'large',
            'images': [
                ['https://scontent.fscl18-1.fna.fbcdn.net/v/t', 'Recuperación de la biodiversidad, Valparaíso.'],// Link y descripción de tu imagen 1 (si no tiene imagen deja el espacio en blanco entre las comillas).
                ['https://parquecintura.files.wordpress.', 'Organizacion que busca construir un Parque Urbano Natural.'] //Link y descripción de tu imagen 2.                    
            ]
        }
    }//copia hasta aqui, si necesitas colocar una caracteristica siguiente
     //agrega una coma despues de la llave }.
]
}
