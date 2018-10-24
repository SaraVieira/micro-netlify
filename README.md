# `micro-netlify`

A tiny microservice that makes adding authentication with Netlify to your application easy.

## Usage

Running your own `micro-netlify` is a single [`now`](https://now.sh) command away:

```sh
# Deploy this repository using now.sh
now SaraVieira/micro-netlify -e NETLIFY_CLIENT_ID=xyz123 -e REDIRECT_URL=https://google.com
```

### Environment variables

You'll need to provide three environment variables when running `micro-netlify`:

```sh
# Your GitHub application client id
NETLIFY_CLIENT_ID=xyz123
# The URL to redirect the user to once the authentication was successful
REDIRECT_URL=https://google.com
```

## Development

```sh
git clone git@github.com:SaraVieira/micro-netlify.git
```

Move `.env.example` to `.env` and fill in your Netlify API details and redirect url

```sh
npm run dev
```

## License

Copyright (c) 2018 Sara Vieira, licensed under the MIT license. See [LICENSE.md](LICENSE.md) for more information.
