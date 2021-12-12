var geoJson = {
    type: 'FeatureCollection',
    features: [
        //copia y edita este código
        {
        type: 'Feature',
        "geometry": { "type": "Point", "coordinates": [-71.45276965,-33.04047705]}, //coloca tus coordenas
        "properties": {
            'title': 'tu título',
            'category': 'Práctica Ecológica', // escribe tu categoría
            'marker-color': '#008000', //coloca el color de tu marcador
            'marker-symbol': 'natural', //escribe el nombre de tu marcador
            'marker-size': 'large',
            'images': [
                ['url de la imagen 1', 'descripción de la imagen 1'],
                ['url de la umagen 2', 'descripcción de la imagen 2'],
                    
            ]
        }
    }//copia hasta aqui, si necesitas colocar una caracteristica siguiente
     //agrega una coma despues de la llave }.
]
}