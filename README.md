
# Hay un botón de mostrar más productos que debería cargar las páginas siguientes. Si querés podés agregar infinite scrolling para mejorar un poco más la UX.

Hay botones de agregar/restar productos al carrito en cada producto. Esto no va conectado a ninguna API, pero debería actualizar el importe total y cantidad de productos del carrito que se ve en la navegación superior. Sería genial si evitás que se pierda el carrito al hacer refresh.

Queremos hacer una API específica de esta app que muestre la misma data de la API , pero con un par de modificaciones:
Debería sumar al modelo de datos los precios en dólares calculados con la cotización del día que sale en la API.
También estaría bueno que la API no muestre los productos viejos, que son los que se actualizaron por última vez hace más de un mes.

a) Las fotos suelen venir en JPG, que es un formato que tiende a generar archivos grandes, y se sienten en la experiencia de usuario en malas conexiones. Hay alguna forma de mejorar esto, aunque sea en algunos browsers? (Hint: Podés cambiarle la extensión a las fotos que vienen en la API)

b) Estaría muy bueno que la app nos avise cuando estamos sin conexión para no generar falsas expectativas para los usuarios. Y sería genial que la app siga andando aún cuando no tenemos internet.


# // TODO

## infinite scroll 

done

## localstorage

## dolar price with api

## show products < 1 month

done

## jpg to webp

done

## show when offline

done