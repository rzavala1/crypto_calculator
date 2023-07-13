# Para Frontend
El código se encuentra dentro de la carpeta /crypto_calculator_interface

Que contiene el código fuente y los recursos necesarios. 
Proporciona una interfaz de usuario interactiva para interactuar con la API y realizar tareas relacionadas.

## Requisitos

- Node.js (versión 14.x.x o superior)

## Instalación

1. Clona el repositorio en tu máquina local:
   
```
git clone https://github.com/tu-usuario/crypto_calculator.git
```

2. Accede al directorio del proyecto:
```
cd crypto_calculator/crypto_calculator_interface
```
   
3. Instala las dependencias del proyecto:
```
npm install
```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y el archivo .evn.example tiene las variables necesarias.


Asegúrate de reemplazar `http://localhost:4000` con la URL correcta de la API backend.

## Ejecución

1. Inicia la aplicación en modo de desarrollo:
```
   npm start
```
Esto iniciará la aplicación y podrás acceder a ella en [http://localhost:3000](http://localhost:3000) en tu navegador web.

2. Explora la interfaz de usuario y realiza las tareas necesarias.

## Pruebas 
Para la realización de pruebas ejecuta el comando 
```
   npm test
```

# Para Backend

El código se encuentra dentro de la carpeta /server


## Requisitos
- Node.js (versión 14.x.x o superior)

## Instalación

1. Clona el repositorio en tu máquina local:
```
git clone https://github.com/tu-usuario/crypto_calculator.git
```

2. Accede al directorio del proyecto:
```
cd crypto_calculator/server
```
3.Instala las dependencias del proyecto:
```
npm install
```

## Configuración

Crea un archivo .env en la raíz del proyecto y proporciona los siguientes valores de configuración:
Las variables a utilizar se encuetran en el archivo .evn.example

4. Asegúrate de tener una instancia de MySQL en ejecución y actualiza los valores de conexión (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) según corresponda.
```
npm run dev
```

5 Accede a la API en la siguiente URL:

http://localhost:4000

## Pruebas 
Para la realización de pruebas ejecuta el comando 
```
   npx jasmine
```















