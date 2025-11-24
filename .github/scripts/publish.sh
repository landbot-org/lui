#!/bin/bash
set -e

# Get the latest tag before semantic-release
PREVIOUS_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "")

npx semantic-release

# Get the latest tag after semantic-release
CURRENT_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "")

# If semantic-release created a new version,
# publish it to npm with OIDC (Trusted Publishing)
if [ "$PREVIOUS_TAG" != "$CURRENT_TAG" ]; then
  npm publish
fi
