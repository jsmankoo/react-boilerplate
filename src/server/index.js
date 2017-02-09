import express from 'express'
import chalk from 'chalk'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from '../client/App'

const port = process.env.NODE_PORT || 9000
const host = process.env.NODE_HOST || 'localhost'
const nodeEnv = process.env.NODE_ENV || 'development'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/', express.static('./dist'))
app.use('/', express.static('./public'))

app.get('*', (req, res) => {
  // This context object contains the results of the render
  const context = {}
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url,
    })
    res.end()
  } else {
    res.render('index', {
      app: html,
    })
  }
})

app.listen(port, host, () => {
  console.log(`${chalk.blue('======================================')}`)
  console.log(`NODE ENV: ${chalk.red(nodeEnv)}`)
  console.log(`Node Server started on ${chalk.green(`${host}:${port}`)}`)
})
