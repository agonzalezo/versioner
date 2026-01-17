[![CI - Pre-Build Quality Gates](https://github.com/agonzalezo/versioner/actions/workflows/pre-build.yml/badge.svg)](https://github.com/agonzalezo/versioner/actions/workflows/pre-build.yml)

[![CI - Build docker image](https://github.com/agonzalezo/versioner/actions/workflows/build.yml/badge.svg)](https://github.com/agonzalezo/versioner/actions/workflows/build.yml)
# Web Version
Basic express web that show a version from enviroment variable, used to test deployment and load balancer.

## Installation
- npm i
- Default env vars,
    ```bash
    NODE_ENV='production'  
    PORT=3000
    APPVERSION='1.0.0'
    API_LOG_LEVEL='short'

## Usage
- npm start
- Open http://HOST:PORT/


## Maintenance
- To Fix cve and other vuls you can run
```bash
npm audit
npm audit fix
```
- And you can Merge PR generated automatically by dependabot on the github repo.
