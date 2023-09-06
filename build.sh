#!/bin/bash
docker buildx build --platform linux/amd64 -t agonzalezo/versioner:latest .
# docker buildx build --platform linux/amd64,linux/arm64 -t agonzalezo/versioner:latest --push .
# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v6 -t agonzalezo/versioner:latest --push .
