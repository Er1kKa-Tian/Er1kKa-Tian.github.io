#!/usr/bin/env bash
set -euo pipefail

mkdocs build --strict
mkdocs gh-deploy --force --strict --no-history
