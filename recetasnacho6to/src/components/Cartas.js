import React from 'react';
import './Card.css';
import Card from './Card'


function Cartas(props) {
    return (
        <div className='Cartas'>
            
        <Card
            title='Asado'
            imgUrl='https://todosobreelasado.com/wp-content/uploads/2019/03/asado-e1553019471446.jpg'
            descripcion='Paso 1 Encender el fuego para lograr una buena cantidad de brasas, puede ser tanto con carbón como leña.
            Paso 2 Colocar una buena capa de brasas debajo de la parrilla y calentar los fierros hasta que adquieran temperatura.
            Paso 3 Salar la carne, al tratarse de un corte de pequeño se puede usar sal fina, sin embargo, siempre lo aconsejable es utilizar sal parrillera, la pimienta es a gusto de cada asador.
            Paso 4 El tiempo de cocción dependerá del tamaño de la tira, tanto por el corte que haya realizado el carnicero como por el tamaño del hueso, ya que si es un animal chico los huesos serán pequeños, en cambio si es un animal más grande, también lo serán los huesos.
            Aproximadamente, se calcula media hora del lado de los huesos, hasta observar que comienzan a brotar pequeñas gotas de sangre del lado de la carne, es un buen momento para dar vuelta la tira.
            Una vez esté del lado de la carne solo dorar la misma para que quede crujiente y con color, bastará con unos diez minutos como mucho y estará listo para salir del fuego y reposar unos minutos.
            Paso 5 Servir y acompañar con papas fritas.'
            icon1='https://cdn-icons-png.flaticon.com/128/2452/2452939.png'
            icon2='https://cdn-icons-png.flaticon.com/128/823/823215.png'
            icon3='https://cdn-icons-png.flaticon.com/128/2156/2156550.png'
            icon4='https://cdn-icons-png.flaticon.com/128/1046/1046769.png'
            icon5='https://cdn-icons-png.flaticon.com/128/869/869676.png'
        />
        <Card
            title='Milanesa a la Napolitana'
            imgUrl='https://resizer.glanacion.com/resizer/WFw-73I4B1dcsvMow6W5o8cCBxo=/768x0/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VLWFAANIWBGPFO4CSUHS7RYVVQ.jpg'
            descripcion='Receta de milanesa napolitana paso a paso
            Lo primero que vamos a hacer una vez que tengamos nuestras milanesas hechas (o compradas) es meterlas al horno 180º hasta que estén bastante cocidas. También las pueden freír si así lo desean. Procuren hacerlo con abundante aceite en la sartén y tengan en cuenta que esté bien caliente antes de meter las milanesas. Es más que nada para que éstas no absorban aceite de más. Una vez que las tenemos cocidas, las reservamos.
            Para la salsa de tomate  
                Piquamos el ajo y la cebolla.
                Calentamos una olla con aceite, ponemos el ajo y la cebolla dentro y esperamos que la cebolla se transparente.
                Después, agregamos el puré de tomate y las dos hojas de laurel, deje cocinar por alrededor de 20 minutos.
                Agregamos sal y pimienta a gusto.
            Armado de la milanesa
                Vamos colocar primero, por encima de nuestra milanesa, la salsa que acabamos de hacer.
                Luego, colocamos unas fetas de jamón cocido
                Finalmente, por encima, ponemos nuestro queso.
                Así, las vamos a llevar al horno 180º hasta que se derrita el queso y chorree por los costados generando el efecto más hermoso y tentador del universo.
                Al sacarlas podemos tirar por encima unas pizcas de orégano y ¡listo!'
            icon1='https://cdn-icons-png.flaticon.com/128/5572/5572048.png'
            icon2='https://cdn-icons-png.flaticon.com/128/904/904183.png'
            icon3='https://cdn-icons-png.flaticon.com/128/680/680940.png'
            icon4='https://cdn-icons-png.flaticon.com/128/8118/8118986.png'
            icon5='https://cdn-icons-png.flaticon.com/128/4139/4139325.png'
            icon6='https://cdn-icons-png.flaticon.com/128/7013/7013969.png'
            icon7='https://cdn-icons-png.flaticon.com/128/5589/5589665.png'
        />
        <Card
            title='Pastel de papas'
            imgUrl='https://canalcocina.es/medias/images/1005_CocContigo_PastelPapa.jpg'
            descripcion='La receta del pastel de papa no es considerada de alta dificultad pero sí requiere de cierto tiempo de preparación y cocción (puede llegar a tomar más de una hora y media).
            Básicamente deben llevarse a cabo dos preparaciones: un puré de papas (o papa duquesa) por un lado y carne picada con cebolla por otro. A la carne picada además de cebolla brunoise se le puede añadir morrón, tomate y cebolla de verdeo. 
            Una vez que está todo listo, se deposita en una placa profunda para horno, colocando primero la carne y por encima el puré de papa; generalmente se gratina con queso rallado, con lo que toma un intenso color dorado. '
            icon1='https://cdn-icons-png.flaticon.com/128/1652/1652127.png'
            icon2='https://cdn-icons-png.flaticon.com/128/2215/2215848.png'
            icon3='https://cdn-icons-png.flaticon.com/128/7471/7471966.png'
            icon4='https://cdn-icons-png.flaticon.com/128/680/680940.png'
            icon5='https://cdn-icons-png.flaticon.com/128/4139/4139319.png'
            icon6='https://cdn-icons-png.flaticon.com/128/1202/1202125.png'
            icon7='https://cdn-icons-png.flaticon.com/128/4714/4714323.png'
        />
        </div>
    );
}

export default Cartas;