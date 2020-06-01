# ms-indicadores-economicos
El microservicio 'ms-indicadores-economicos' calcula un resumen de estadisticas basicas asociadas a un determinado indicador económico.

## Requerimientos:
* NodeJS v14.2.0
* npm 6.14.4

## Instalación
Antes de iniciar y de ejecutar las pruebas unitarias asociadas al microservicio, se deben instalar las dependencias de NodeJS. Para ello, se debe abrir un terminal, y ejecutar los siguientes comandos:

    $ cd ms-indicadores-economicos
    $ npm install

Una vez finalizado el proceso, debería aparecer un mensaje similar al siguiente:

    npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

    audited 215 packages in 1.945s

    16 packages are looking for funding
    run `npm fund` for details

    found 0 vulnerabilities



## Inicialización
Para inicializar el microservicio, haciendo que éste esté preparado para recibir peticiones HTTP, se debe ingresar el siguiente comando:

    $ npm start

En caso de que el microservicio se haya ejecutado correctamente, se mostrará por consola el mensaje:

    Escuchando en el puerto 8000

## Ejecucion de pruebas unitarias
Se encuentra desarrollada una prueba unitaria de la lógica que calcula el mínimo, el máximo y el promedio de un indicador económico. Para ejecutarla, se debe invocar a la tarea 'unit-test':

    $ npm run unit-test

'Mocha' se encargará de escanear y de ejecutar las pruebas unitarias dentro de la base de código. Una vez que haya finalizado, se presentará el siguiente reporte final:

    IndicatorController
    getStats
        ✓ should compute correctly the min, max and average stats
        ✓ should raise error when supplied with an invalid indicator name


    2 passing (11ms)

