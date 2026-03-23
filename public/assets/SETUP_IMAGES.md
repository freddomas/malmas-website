# 📸 Guide d'Intégration des Images - MALMAS Website

## ✅ Travail Complété

Les composants **Clients.tsx** et **Certifications.tsx** ont été entièrement refactorisés pour afficher les logos réels:

### Changements effectués:
- ✅ Créé dossiers `public/assets/clients/` et `public/assets/certifications/`
- ✅ Modifié `Clients.tsx` pour afficher des images au lieu d'initiales
- ✅ Modifié `Certifications.tsx` pour afficher des images au lieu de texte
- ✅ Ajouté traductions manquantes (descriptions)
- ✅ Intégré dans `page.tsx` (déjà présent)

---

## 🚀 Prochaines Étapes

### Étape 1: Ajouter les logos clients

Sauvegardez les fichiers image fornuis dans: `public/assets/clients/`

**Images fournis:**
- ✅ `euroclear.png` (approx. 240x200px)
- ✅ `irisnet.png` (approx. 240x200px)  
- ✅ `rawbank.png` (approx. 240x200px) - fourni précédemment
- ✅ `dgda.png` (approx. 240x200px) - fourni précédemment

**Image à trouver:**
- ❌ `allnex.png` - https://www.allnex.com/en/home

### Étape 2: Ajouter les logos certifications

Téléchargez et sauvegardez dans: `public/assets/certifications/`

**À télécharger:**
| Nom | Source | Dimensions |
|-----|--------|-----------|
| `togaf.png` | [opengroup.org](https://www.opengroup.org) | 120x120px |
| `ccna.png` | [cisco.com](https://www.cisco.com) | 120x120px |
| `ccnp.png` | [cisco.com](https://www.cisco.com) | 120x120px |
| `comptia.png` | [comptia.org](https://www.comptia.org) | 120x120px |
| `fortinet.png` | [fortinet.com](https://www.fortinet.com) | 120x120px |
| `paloalto.png` | [paloaltonetworks.com](https://www.paloaltonetworks.com) | 120x120px |
| `aws.png` | [aws.amazon.com](https://aws.amazon.com) | 120x120px |
| `iso27001.png` | Google Images | 120x120px |

### Étape 3: Test

```bash
npm run dev
# Accédez à http://localhost:3000
# Vérifiez que les sections Clients et Certifications affichent les logos
```

---

## 📋 Checklist

- [ ] Logos clients (5) ajoutés dans `public/assets/clients/`
- [ ] Logos certifications (8) ajoutés dans `public/assets/certifications/`
- [ ] Images en format PNG ou WebP (transparent si possible)
- [ ] Dimensions respectées (voir tableau ci-dessus)
- [ ] Test local: `npm run dev` → localhost:3000
- [ ] Vérifier affichage des logos
- [ ] Commit & push vers git

---

## 💡 Options Optimisation

### Convertir en WebP (optional mais recommandé)
```bash
# Utiliser imagemagick ou online converter
convert euroclear.png euroclear.webp
```

### Optimiser les images
```bash
# Compression sans perte
pngquant --speed=1 euroclear.png -o euroclear-optimized.png
```

---

## 🔗 Ressources d'Aide

- **Download logos**: https://www.seeklogo.com/
- **Batch convert**: https://cloudconvert.com/
- **Compress images**: https://tinypng.com/
- **Check dimensions**: VS Code Image Preview extension

---

## ⚠️ Notes Importantes

1. **Format recommandé**: PNG transparent (pour meilleure intégration)
2. **Fond blanc**: Si PNG ne supporte pas la transparence, utiliser fond blanc
3. **Ratio aspect**: Les images seront redimensionnées automatiquement par Next.js
4. **Alt text**: Déjà configuré (nom du client/certification)

---

## 📞 Support

Si vous avez des questions:
1. Vérifiez que les fichiers sont dans les bons dossiers
2. Vérifiez les noms exactement (minuscules, `.png`)
3. Vérifiez les dimensions approx.
4. Reconstruisez: `npm run build`
