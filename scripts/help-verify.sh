#!/usr/bin/env bash
set -euo pipefail

fail() {
  echo "FAIL: $1"
  exit 1
}

if git diff --name-only | rg -q '^public/index\.html$'; then
  fail "public/index.html has uncommitted changes"
fi

mapfile -t files < <(rg --files -g 'index.html' public | rg -v '^public/index\.html$')

if [ "${#files[@]}" -eq 0 ]; then
  fail "no target index.html files found under public/"
fi

for f in "${files[@]}"; do
  rg -q 'href="/_shared/help\.css"' "$f" || fail "$f missing shared stylesheet link"
  rg -q '\.\./_shared/help\.css' "$f" && fail "$f uses relative _shared path"
  rg -q 'class="container"' "$f" || fail "$f missing class=\"container\""
  rg -q 'class="page"' "$f" || fail "$f missing class=\"page\""
  rg -q '<style\b' "$f" && fail "$f contains inline <style> block"
done

echo "PASS: all help pages use shared stylesheet and layout"
