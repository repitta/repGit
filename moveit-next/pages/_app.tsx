// tudo que ai ser igual em todas as paginas fica aqui dentro desse arquivo, ele é reaproveitado , pórem ele é recalculado.

import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
