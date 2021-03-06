# Sentry Toolkit

### I have not used this repo in several years. It may or may not work anymore. If anyone wants to help keep it updated please feel free.

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
[![Build Status](https://travis-ci.org/luisfcolon/sentry-toolkit.svg?branch=master)](https://travis-ci.org/luisfcolon/sentry-toolkit)
[![Coverage Status](https://coveralls.io/repos/github/luisfcolon/sentry-toolkit/badge.svg?branch=master)](https://coveralls.io/github/luisfcolon/sentry-toolkit?branch=master)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/luisfcolon/sentry-toolkit/master/LICENSE)
[![NPM downloads](https://img.shields.io/npm/dt/sentry-toolkit.svg)](https://www.npmjs.com/package/sentry-toolkit)
[![GitHub issues](https://img.shields.io/github/issues/luisfcolon/sentry-toolkit.svg)](https://github.com/luisfcolon/sentry-toolkit/issues)

## Overview

Sentry tools and logger

## Installation

With yarn

```
yarn add sentry-toolkit
```

With npm

```
npm install sentry-toolkit --save
```

## Setup

### Environment variables

You will need a [Sentry](https://sentry.io/welcome/) account and your Sentry public dsn key. You will need to set that key in your environment file. An [example environment file](https://github.com/luisfcolon/sentry-toolkit/blob/master/.env.sample) is part of the this repo.

__In the root of your project__

```
vim .env
```

__There are 2 variables you have to set:__

`SENTRY_PUBLIC_DSN`

* You get that from Sentry

`ENV`

* Example: development, qa, staging, production

## Usage

### Bind Sentry to the error console

Everytime an exception or error is sent to the error console, it will also be sent to your sentry account.

This should be executed very early in your application; even one of the first things.

```javascript
import { bindSentryToErrorConsole } from 'sentry-toolkit';


bindSentryToErrorConsole();
```

### Simple Sentry logging

You can also send simple log statements to your sentry account.

```javascript
import { log } from 'sentry-toolkit';


# send an error message
log.error('some error message');

# send an exception
log.exception('some exception message');

# send an info message
log.info('some info message');

# send a warning message
log.warning('some warning message');
