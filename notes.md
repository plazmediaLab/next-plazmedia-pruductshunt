# NEXT.js

---

## Agregar Styled components NEXT

1. Instalamos las dependencias necesarias.

~~~
  $ npm i @emotion/core @emotion/styled babel-plugin-emotion @emotion/babel-preset-css-prop
~~~

2. Agregamos en la carpeta raiz el archivo de configuración

~~~
  .babelrc
~~~

3. Agregamos la configuración

~~~
  {
    "presets": [
      "next/babel",
      "@emotion/babel-preset-css-prop"
    ],
    "plugins": [
      [
        "emotion"
      ]
    ]
  }
~~~

4. Importamos Emotion styled en nuestro proyecto y creamos nuestros styled components

~~~
  import styled from '@emotion/styled';
~~~