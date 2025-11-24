#!/bin/bash
set -e

# Get the latest tag before semantic-release
PREVIOUS_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "")
echo "Previous release tag: ${PREVIOUS_TAG:-<none>}"

npx semantic-release

# Get the latest tag after semantic-release
CURRENT_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "")
echo "Current release tag: ${CURRENT_TAG:-<none>}"

# If semantic-release created a new version,
# publish it to npm with OIDC (Trusted Publishing)
if [ "$PREVIOUS_TAG" != "$CURRENT_TAG" ]; then
  echo "New release detected (${CURRENT_TAG}). Publishing to npm..."
  npm publish
else
  echo "No new release detected. Skipping npm publish."
fi
