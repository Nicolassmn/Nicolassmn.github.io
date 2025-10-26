#!/bin/bash

for f in *.mp4; do
  tmp="${f%.mp4}_tmp.mp4"
  echo "🎬 Re-encodage de $f → 60 fps Full HD..."
  
  ffmpeg -i "$f" \
    -c:v libx264 -preset slow -crf 23 -r 60 \
    -vf "scale=1920:1080:flags=lanczos" \
    -c:a aac -movflags +faststart \
    "$tmp"

  # Remplacer l'ancien fichier
  mv -f "$tmp" "$f"
done

echo "✅ Toutes les vidéos ont été converties et remplacent les fichiers originaux."
