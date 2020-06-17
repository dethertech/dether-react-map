# dether-react-map

> dether-react-map is a React component allowing to easily locate shops and tellers from the dether protocol

[![NPM](https://img.shields.io/npm/v/dether-react-map.svg)](https://www.npmjs.com/package/dether-react-map) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dether-react-map
```

## Usage

You must pass rpcURL as a props, it must be an infura URL like this:
You can either choose kovan for testnet or mainnet.

```jsx
import React, { Component } from 'react'

import DetherReactMapfrom 'dether-react-map'
import 'dether-react-map/dist/index.css'

const rpcURL='https://kovan.infura.io/v3/xxxxxxxxxxxxxxxx'

class Example extends Component {
  render() {
    return <DetherReactMap width='100%' height='400px' rpcURL={rpcURL} />
  }
}
```

## Example

You can find one example [here](https://github.com/dethertech/dether-react-map/tree/master/example)

## License

MIT © [dethertech](https://github.com/dethertech)
