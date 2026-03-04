"""
Crop MOA catalog pages (1080x1920) into individual product images.
Photo grid analysis: 2 columns, 2 rows of photos per page.
Left photo: x=108..516, Right photo: x=563..971
Top row: y~200..800, Bottom row: y~980..1580
Gap between columns: x=517..562
"""
from PIL import Image
import os

SRC = 'public/images'
DST = 'public/images/products'
CAT_DST = 'public/images/categories'
os.makedirs(DST, exist_ok=True)
os.makedirs(CAT_DST, exist_ok=True)

def crop(src_file, box, dst_name):
    """Crop region, make square from center, resize to 600x600."""
    img = Image.open(os.path.join(SRC, src_file))
    cropped = img.crop(box)
    w, h = cropped.size
    if w != h:
        s = min(w, h)
        left = (w - s) // 2
        top = (h - s) // 2
        cropped = cropped.crop((left, top, left + s, top + s))
    cropped = cropped.resize((600, 600), Image.LANCZOS)
    out_path = os.path.join(DST, dst_name)
    cropped.save(out_path, 'JPEG', quality=85)
    print(f'  {dst_name}')

def crop_cat(src_file, box, dst_name):
    """Crop for category image (4:3 aspect)."""
    img = Image.open(os.path.join(SRC, src_file))
    cropped = img.crop(box)
    cropped = cropped.resize((800, 600), Image.LANCZOS)
    out_path = os.path.join(CAT_DST, dst_name)
    cropped.save(out_path, 'JPEG', quality=85)
    print(f'  [cat] {dst_name}')

# Standard 2x2 grid positions for 1080x1920 catalog pages
# Adjusted based on pixel analysis
def g4(yt=195, yb=975, ph=610, xl=105, xr=560, pw=415):
    """Return 4 crop boxes: TL, TR, BL, BR"""
    return [
        (xl, yt, xl+pw, yt+ph),   # top-left
        (xr, yt, xr+pw, yt+ph),   # top-right
        (xl, yb, xl+pw, yb+ph),   # bottom-left
        (xr, yb, xr+pw, yb+ph),   # bottom-right
    ]

boxes = g4()

# === IMAGE 1: Cover page → hero ===
print("1.jpg: hero")
img1 = Image.open(os.path.join(SRC, '1.jpg'))
img1.save('public/images/hero.jpg', 'JPEG', quality=90)

# === IMAGE 2: Cadena Eslabón, Irregular, Ovo, Doble Corazón ===
print("2.jpg:")
crop('2.jpg', boxes[0], 'cadena-eslabon.jpg')
crop('2.jpg', boxes[1], 'cadena-irregular.jpg')
crop('2.jpg', boxes[2], 'cadena-ovo.jpg')
crop('2.jpg', boxes[3], 'cadena-doble-corazon.jpg')

# === IMAGE 3: Cadena Doble Punto, Corazón, Multi, Choker Flor ===
print("3.jpg:")
crop('3.jpg', boxes[0], 'cadena-doble-punto.jpg')
crop('3.jpg', boxes[1], 'cadena-corazon.jpg')
crop('3.jpg', boxes[2], 'cadena-multi.jpg')
crop('3.jpg', boxes[3], 'choker-flor.jpg')

# === IMAGE 4: Cadena Corazón Chato, Corazón (view 2), Estrella, Mini Corazón ===
print("4.jpg:")
crop('4.jpg', boxes[0], 'cadena-corazon-chato.jpg')
crop('4.jpg', boxes[1], 'cadena-corazon-2.jpg')
crop('4.jpg', boxes[2], 'cadena-estrella.jpg')
crop('4.jpg', boxes[3], 'cadena-mini-corazon.jpg')

# === IMAGE 5: Cadena Nova, Vera, Nube, Jade ===
print("5.jpg:")
crop('5.jpg', boxes[0], 'cadena-nova.jpg')
crop('5.jpg', boxes[1], 'cadena-vera.jpg')
crop('5.jpg', boxes[2], 'cadena-nube.jpg')
crop('5.jpg', boxes[3], 'cadena-jade.jpg')

# === IMAGE 6: Cadena Uma, Doble Punto alt, Flux, Sol ===
print("6.jpg:")
crop('6.jpg', boxes[0], 'cadena-uma.jpg')
crop('6.jpg', boxes[1], 'cadena-doble-punto-2.jpg')
crop('6.jpg', boxes[2], 'cadena-flux.jpg')
crop('6.jpg', boxes[3], 'cadena-sol.jpg')

# === IMAGE 7: Cadena Rayo, Colmillo, Brisa, Elia ===
print("7.jpg:")
crop('7.jpg', boxes[0], 'cadena-rayo.jpg')
crop('7.jpg', boxes[1], 'cadena-colmillo.jpg')
crop('7.jpg', boxes[2], 'cadena-brisa.jpg')
crop('7.jpg', boxes[3], 'cadena-elia.jpg')

# === IMAGE 8: Cadena Lumi, Flora, Core, Estrella Grande ===
print("8.jpg:")
crop('8.jpg', boxes[0], 'cadena-lumi.jpg')
crop('8.jpg', boxes[1], 'cadena-flora.jpg')
crop('8.jpg', boxes[2], 'cadena-core.jpg')
crop('8.jpg', boxes[3], 'cadena-estrella-grande.jpg')

# === IMAGE 9: Cadena Miti, Loop, Lirio, Lia ===
print("9.jpg:")
crop('9.jpg', boxes[0], 'cadena-miti.jpg')
crop('9.jpg', boxes[1], 'cadena-loop.jpg')
crop('9.jpg', boxes[2], 'cadena-lirio.jpg')
crop('9.jpg', boxes[3], 'cadena-lia.jpg')

# === IMAGE 10: Cadena Gaia, Atlas, Estrillas, Choker Brillo ===
print("10.jpg:")
crop('10.jpg', boxes[0], 'cadena-gaia.jpg')
crop('10.jpg', boxes[1], 'cadena-atlas.jpg')
crop('10.jpg', boxes[2], 'cadena-estrillas.jpg')
crop('10.jpg', boxes[3], 'choker-brillo.jpg')

# === IMAGE 11: Collar Nudo x3 (special vertical layout) ===
print("11.jpg:")
crop('11.jpg', (90, 30, 660, 490), 'collar-nudo-verde.jpg')
crop('11.jpg', (230, 500, 810, 920), 'collar-nudo-verde-claro.jpg')
crop('11.jpg', (60, 930, 620, 1340), 'collar-nudo-gris.jpg')

# === IMAGE 12: Collar Aria x4 ===
print("12.jpg:")
crop('12.jpg', boxes[0], 'collar-aria-verde.jpg')
crop('12.jpg', boxes[1], 'collar-aria-blanco.jpg')
crop('12.jpg', boxes[2], 'collar-aria-verde-oscuro.jpg')
crop('12.jpg', boxes[3], 'collar-aria-rojo.jpg')

# === IMAGE 13: Collar Vira, Aurelia, Triple, Cuádruple ===
print("13.jpg:")
crop('13.jpg', boxes[0], 'collar-vira.jpg')
crop('13.jpg', boxes[1], 'collar-aurelia.jpg')
crop('13.jpg', boxes[2], 'collar-triple.jpg')
crop('13.jpg', boxes[3], 'collar-cuadruple.jpg')

# === IMAGE 14: Collar Doble, Aria celeste, transparente, perla ===
print("14.jpg:")
crop('14.jpg', boxes[0], 'collar-doble.jpg')
crop('14.jpg', boxes[1], 'collar-aria-celeste.jpg')
crop('14.jpg', boxes[2], 'collar-aria-transparente.jpg')
crop('14.jpg', boxes[3], 'collar-aria-perla.jpg')

# === IMAGE 15: Hilo Mostacillas x3 (special layout) ===
print("15.jpg:")
crop('15.jpg', (90, 120, 520, 620), 'hilo-mostacillas-verde.jpg')
crop('15.jpg', (520, 120, 950, 620), 'hilo-mostacillas-multi.jpg')
crop('15.jpg', (230, 660, 740, 1080), 'hilo-mostacillas-beige.jpg')

# === IMAGE 16: Collar Aria con Dije + Arena ===
print("16.jpg:")
crop('16.jpg', boxes[0], 'collar-aria-dije-corazon.jpg')
crop('16.jpg', boxes[1], 'collar-aria-dije-flor.jpg')
crop('16.jpg', boxes[2], 'collar-arena-verde.jpg')
crop('16.jpg', boxes[3], 'collar-arena-azul.jpg')

# === IMAGE 17: Choker Cuero x4 ===
print("17.jpg:")
crop('17.jpg', boxes[0], 'choker-cuero-liso.jpg')
crop('17.jpg', boxes[1], 'choker-cuero-cosido.jpg')
crop('17.jpg', boxes[2], 'choker-cuero-tachas.jpg')
crop('17.jpg', boxes[3], 'choker-cuero-estrellas.jpg')

# === IMAGE 18: Pañuelos + Tientos (2 vertical sections) ===
print("18.jpg:")
crop('18.jpg', (100, 40, 920, 560), 'panuelos-brillos.jpg')
crop('18.jpg', (100, 590, 920, 1120), 'tientos.jpg')

# === IMAGE 19: Pulseras ===
print("19.jpg:")
crop('19.jpg', boxes[0], 'pulsera-canutillo.jpg')
crop('19.jpg', boxes[1], 'pulsera-perla-ojo.jpg')
crop('19.jpg', boxes[2], 'pulsera-perla.jpg')
crop('19.jpg', boxes[3], 'esclava.jpg')

# === IMAGE 20: Pulsera Plateada x4 ===
print("20.jpg:")
crop('20.jpg', boxes[0], 'pulsera-plateada-1.jpg')
crop('20.jpg', boxes[1], 'pulsera-plateada-2.jpg')
crop('20.jpg', boxes[2], 'pulsera-plateada-3.jpg')
crop('20.jpg', boxes[3], 'pulsera-plateada-4.jpg')

# === IMAGE 21: Pulsera Plateada x4 more ===
print("21.jpg:")
crop('21.jpg', boxes[0], 'pulsera-plateada-5.jpg')
crop('21.jpg', boxes[1], 'pulsera-plateada-6.jpg')
crop('21.jpg', boxes[2], 'pulsera-plateada-7.jpg')
crop('21.jpg', boxes[3], 'pulsera-plateada-8.jpg')

# === IMAGE 22: Esclava dorada, Pulsera Dorada, Plateada x2 ===
print("22.jpg:")
crop('22.jpg', boxes[0], 'esclava-dorada.jpg')
crop('22.jpg', boxes[1], 'pulsera-dorada.jpg')
crop('22.jpg', boxes[2], 'pulsera-plateada-9.jpg')
crop('22.jpg', boxes[3], 'pulsera-plateada-10.jpg')

# === IMAGE 23: Caravanas x4 ===
print("23.jpg:")
crop('23.jpg', boxes[0], 'caravanas-argollas.jpg')
crop('23.jpg', boxes[1], 'caravanas-gruesas.jpg')
crop('23.jpg', boxes[2], 'caravanas-dijes.jpg')
crop('23.jpg', boxes[3], 'caravanas-variadas.jpg')

# === Category images ===
print("\nCategory images:")
crop_cat('2.jpg', (105, 195, 975, 810), 'cadenas.jpg')
crop_cat('13.jpg', (105, 195, 975, 810), 'mostacillas.jpg')
crop_cat('10.jpg', (560, 975, 975, 1585), 'chokers.jpg')
crop_cat('17.jpg', (105, 195, 975, 810), 'cuero.jpg')
crop_cat('19.jpg', (105, 195, 975, 810), 'pulseras.jpg')
crop_cat('18.jpg', (100, 40, 920, 600), 'otros.jpg')

print("\nDone!")
