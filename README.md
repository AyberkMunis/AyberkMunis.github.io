# MALTO website

Statik bir site: build adımı yok. `index.html` dosyasını tarayıcıda açmanız yeterli, ya da sunucuyla çalıştırın:

```bash
python3 -m http.server 5173
```

## İçeriği güncellemek

Tüm üye, challenge ve etkinlik verileri **`assets/js/data.js`** dosyasında. Sayfalar bu dosyadan otomatik oluşturuluyor.

| Ne | Nasıl |
|---|---|
| **Üye fotoğrafı** | Fotoğrafı `assets/img/members/` klasörüne koyun ve kişinin `photo` alanına yazın, örn. `photo: "assets/img/members/evren-ayberk-munis.jpg"`. Boş bırakılırsa baş harfler gösterilir. Önerilen oran 4:4.4 (dik). |
| **GitHub linki** | Challenge'ın `github` alanına repo URL'sini yazın. Yazınca "Code" butonu kendiliğinden çıkar. |
| **Yeni üye** | `people` listesine ekleyin. `group`: `leader`, `advisor`, `member`, `alumni` veya `social`. Alumni'de `exLeader: true` verilen kişiler en üstte gösterilir. |
| **Mezuniyet** | Kişinin `group` alanını `alumni` yapın ve `position` alanına şu anki konumunu yazın. |
| **Yeni etkinlik** | `events` listesine ekleyin. `type`: `maltalks`, `workshop`, `community` veya `conference`. Tarih biçimi `YYYY-MM-DD` ya da `YYYY-MM`. |
| **Etkinlik görseli** | `image` alanına görsel yolunu ya da URL'sini yazın (örn. `assets/img/events/maltalks-2.jpg`). |
| **Ana sayfa rakamları** | `stats` listesindeki değerleri değiştirin. |

## Yapı

```
index.html            Ana sayfa
members.html          Team Leader, Academic Advisor, Challengers
alumni.html           Eski team leader'lar + alumni (şu anki konumlarıyla)
communication.html    Social Media & Communication ekibi
challenges.html       Challenge'lar, çözümler, makaleler, yazarlar (#c01…#c09 bağlantıları)
maltalks.html         MALTALKS + geçmiş etkinlikler
workshops.html        Workshop'lar + geçmiş etkinlikler
contact.html          E-posta, Instagram, LinkedIn
assets/css/style.css  Tasarım token'ları ve tüm stiller
assets/js/main.js     Header, footer, yükleme animasyonu, sayfa render'ları
assets/fonts/         BC Alphapipe (yayına almadan önce web lisansını kontrol edin)
```
