# JavaScriptin lyhyt historia

Olemme viime viikkoina yhdessä kollegani Panun kanssa valmistelleet kurssia Metropoliaan. Menemme lokakuussa opettamaan modernia weppikehitystä JavaScriptillä. Kun katsoo vähän pidemmälle taaksepäin, aihevalinta tuntuu uskomattomalta.

Jos parikymppinen nuori kävelisi tänään luokseni ja kysyisi, mitä ohjelmointikieltä suosittelen opettelemaan, vastaus olisi ilmiselvä. "Lapsoseni", sanoisin kaikkein vanhimmalla ja viisaimmalla äänelläni, "opettele JavaScriptiä koska siinä on tulevaisuus".

Metka juttu sinällään. Jos joku olisi sanonut kaksikymppiselle minulle näin, olisin pitänyt tyyppiä seinähulluna. Jos sama heppu olisi tullut kymmenen vuotta sitten kertomaan, että vuonna 2015 menen kouluun opettamaan weppikehitystä pelkästään JavaScriptillä, luulen että olisin vielä silloinkin kehottanut oraakkelia syömään päänsä.

Eräänä iltana kotiin kävellessäni hiljennyin pohdiskelemaan tätä kokonaisuutta. Koska olen nostalginen luonne, päädyin aika nopeasti syviin vesiin. Vuosikymmenessä, saati kahdessa, JavaScript on kulkenut pirun pitkän tien menestystarinaksi, joka on kaikkea muuta kuin ilmiselvä tai odotettu.

Javasta, ei JavaScriptistä, piti 1990-luvun puolivälissä tulla universaali ohjelmointikieli selaimeen. Maailma ei kuitenkaan ollut Javalle yhtään valmiimpi kuin Java maailmalle. Javan suoritus oli sen ajan tietokoneissa tuskallisen hidasta, ja käännettävänä kielenä Java oli webin ja webbiselaimen kontekstissa konstikas.

Olen itsekin jo ehtinyt (onneksi) melkein unohtaa, että sellainen asia kuin Java-appletti – sovelma, kuten kertoo kielitoimisto – oli joskus olemassa. Kaiken kukkuraksi Java oli harrastelijaohjelmoijille, tärkeälle kohderyhmälle, liian vaikeasti omaksuttava. Niinpä Netscape, jonka selainta vuonna 1995 käytti koko nettiä selaava maailma, tarvitsi vaihtoehtoisen ratkaisun. Jonkinlaiset ohjelmointiominaisuudet oli selaimeen nimittäin saatava.

## Maailma luotiin kymmenessä päivässä

Hätäratkaisuna Netscape käski erästä työntekijäänsä, Brendan Eichia, keksimään ja toteuttamaan helpomman, suoraan HTML:n sekaan upotettavan ja lennossa tulkattavan kielen.

Urbaanin legendan mukaan Eichille annettiin speksit ja kaksi viikkoa aikaa. Onneksi Eich oli itse asiassa aikaisemmin palkattu Netscapelle lupauksella vastaavasta projektista. Vaikka alkuperäinen suunnitelma ei toteutunut, kielen periaatteet (Scheme + Self) olivat Eichilla valmiina.

Jotta asiat eivät kuitenkaan sujuisi liian mallikkaasti, Eichille repäistiin pakasta tukku uusia vaatimuksia. Kielen syntaksin piti esimerkiksi tulla C:stä. Puolitoista viikkoa myöhemmin Eich kömpi luolastaan hädintuskin toimivan prototyypin kanssa.

Toteutus ei ehkä ollut siistein mahdollinen, mutta uusi ohjelmointikieli päätyi hetimiten tuotantoon Netscape Navigator 2.0:n mukana. Huvin ja urheilun vuoksi mainittakoon, että kun Netscape muutamaa vuotta myöhemmin lahjoitti pystyyn kuolleen selaimensa lähdekoodin eteenpäin, koodi heitettiin vastaanottajien toimesta roskikseen. Teknisellä velalla on pitkät jäljet, mutta se on toinen tarina se.

Uuden ohjelmointikielen nimeksi piti tulla ensin Mocha, sitten LiveScript, mutta lopulta siitä tuli JavaScript koska Java oli kuuminta uutta ja sen brändillä oli Netscapen ja Sunin markkinamiesten mielestä aiheellista ratsastaa. Uuden kielen tarkoitushan oli olla vain väliaikainen ratkaisu, ja se väistyisi vapaaehtoisesti syrjään heti kun Java olisi hetken kypsytellyt itseään.

Mielenkiintoisena yksityiskohtana sanan "JavaScript" tekijänoikeudet ovat edellämainittujen sattumuksien ja onnettomien yrityskauppojen jäljiltä tänä päivänä Oraclen, megapahan korporaation, hallussa. Vaan eipä hätiä mitiä, koska JavaScriptin virallinen nimi ei ole JavaScript. Sen nimi on täsmälleen saman nimisotkun ansiosta ECMAScript, jota ei tietenkään arkikielessä käytä kukaan koska se on rumin millekään asialle annettu nimi koko ihmiskunnan historiassa.

## Alku aina hankalaa

JavaScript oli pitkään, lähinnä huonon markkinoinnin ja huonojen ynnä toisistaan eroavien selainten ansiosta, pelkkä ohjelmalelu. Hyvin harva, jos kukaan, ymmärsi JavaScriptin sisällä piilevän valjastamattoman voiman tai osasi ennustaa sen nousun. Jos JavaScriptistä oli johonkin, se jokin oli linkkien kohdesivujen huijaaminen (<a href="pahasivu" onmouseover="window.status='hyväsivu'">) ja tahdonvastaisten popup-ikkunoiden avaaminen. Koko moska kannatti suosiolla kääntää pois päältä niin välttyi paljolta pahalta.

Esimerkkinä kyseenalaistin itse koulun aloitettuani rankalla kädellä opettajamme Reijo Bäckmanin järjenjuoksun vuoden 1999 syksyllä. "Miksi ihmeessä opettelemme JavaScriptiä?", muistan mutisseeni. "Sehän on täysin hyödytöntä." Haluaisin omistaa tämän sutkautukseni C-kasetilla, jotta voisin soittaa nauhaa itselleni joka kerta kun yritän ennustaa tulevaisuutta.

Toki herra Bäckman opetti meille nimenomaan JavaScriptin ohjelmalelumaisuuksia eikä niinkään ohjelmointikieli JavaScriptiä. Muutenhan saattaisimme muistaa Javascriptin nousun arkkitehteina hänet ja kenties kaikkein lahjakkaimmat hänen opetuslapsistaan (kröhöm!), emmekä esimerkiksi John Resigiä tai Douglas Crockfordia.

## Katoavaista on mainen kunnia

Microsoft. Jo pelkkä nimi herättää kauhua. Jos ne kyyneleet, jotka ovat vuotaneet Internet Explorerin vuoksi, olisivat helmiä, ei hallituksen tarvitsisi miettiä säästöpaketteja. He, jotka louskuttavat panettelevia leukojaan kohti Redmondia, ovat kuitenkin unohtaneet. He ovat unohtaneet sekä sen, että Microsoft pelasti meidät Netscapelta (väitän, että Netscape hävisi selainsodan tekemällä huonoja selaimia), että erään pikku seikan. Microsoft pelasti JavaScriptin tuholta – vahingossa, totta kai, mutta pelasti yhtä kaikki!

JavaScriptin merkityksen eksponentiaalisen kasvun ultimaattinen juurisyy on mystisesti nimetty XmlHttpRequest, Microsoftin omaa sisäistä käyttöään (alunperin Outlook, yrityksen sähköpostiohjelma) varten vuosituhannen vaihteessa keksimä konsepti jolla Windows Updaten kaltaiset webbipohjaiset palvelut pystyivät hakemaan lisää tietoa käyttäjältä “salaa”, lataamatta koko sivua välissä uudelleen.

XmlHttpRequestista tuli de facto standardi. Muiden selaimien kehittäjät, Mozilla etunenässä, yksinkertaisesti vain löysivät Microsoftin kätevän ominaisuuden ja lisäsivät sen omiin tuotteisiinsa.
Pelkällä tiedon hakemisella ei tietenkään vielä tee juuri mitään. Vaadittiin kehitystä myös sen suhteen, kuinka selainohjelmat piirtävät sanottavansa ruudulle. Alunperin selaimet eivät osanneet päivittää sivujen sisältöä kuin sivulatauksen yhteydessä, mutta ennen pitkää sisältöä ruudulla voitiin vaihtaa lennossa.

Millä? JavaScriptillä tietenkin, koska muuta ohjelmointikieltä selaimeen ei saanut. Microsoft yritti kyllä tuoda Visual Basicin selaimeen, ja käsittääkseni Perlilläkin on joskus muinoin voinut jotain outoa yksittäistä selainta käskyttää, mutta JavaScript oli ja on ainoa kieli joka toimii kaikissa selaimissa.

## Web 2.0

Tänä päivänä tuntuu itsestäänselvältä, että webbisovellukset voivat toimia yhtä saumattomasti kuin työpöytäsovellukset. 2000-luvun puolivälissä tapahtunut mullistus oli kuitenkin meille aikalaisille jotain aivan merkillistä. Kun tiedon haku taustalla ja sen piirtäminen ruudulle lennosta yhdistettiin, syntyi teknologinen vallankumous jota myös AJAXiksi (Asynchronous Javascript and XML) kutsuttiin. Se mahdollisti aivan uudenlaiset verkkopalvelut.

AJAXin keksiminen ja selainten kehittyminen avasivat tien Prototypen (lepää rauhassa!) ja jQueryn (elä ikuisesti!) kaltaisille JavaScript-kirjastoille, jotka piilottivat ohjelmoijilta eri selainten väliset erot ja mahdollistivat edistyneiden ominaisuuksien käyttämisen järkevästi. Paremmat kirjastot houkuttelivat uusia kehittäjiä, jotka kirjoittivat parempia kirjastoja ja alkoivat ymmärtää paremmin varsinaista JavaScriptiä ennakkoluulojensa ja harhakäsitystensä alla. Lumipallo alkoi vyöryä.

Samoihin aikoihin toisaalla Douglas Crockford kehitti JavaScriptiin perustuvan yleisen tiedonsiirtoformaatin, JSONin, joka ennen pitkää syrjäytti webin de facto tiedonsiirtotapana kilpailevan XML:n (joka jäi elämään vain metodologian nimessä). Epäonnea XML:lle epäonni on maailman onni: JSON on nähdäkseni tarkoitukseen paljon paremmin sopiva ratkaisu.

Crockford kirjoitti myös ammattikirjallisuutemme klassikkoteoksen, “Javascript: The Good Parts”, JavaScriptin autuudesta. Ei ole väärin väittää Sir Douglasia yhdeksi suurimmista hahmoista kielen kehityksen kannalta.

## Räjähdys

Kun verkkopalveluiden logiikka alkoi AJAXin keksimisen myötä valua palvelimelta käyttäjän selaimeen, syntyi painetta kohti JavaScriptin suoritusnopeutta. Tällä ei ollut ollut aikaisemmin juurikaan merkitystä, joten oli luonnollista että selaimet ajoivat JavaScriptiä tuskallisen hitaasti.

Seurasi toinen suuri selainsota, jossa kaikki muut valmistajat paitsi Microsoft kehittivät selaimiaan kilpaa. Pitkän aikaa paikallaan polkeneet muut kaksi webin ydinteknologiaa, HTML ja CSS, alkoivat nekin ottaa jättiharppauksia. Vuonna 2008 hakukonejätti Google julkaisi Chrome-selaimen ja siihen olennaisena osana kuuluvan supernopean JavaScript-moottorin, V8:n. Älypuhelimet keksittiin ja mobiili web löi itsensä läpi. Microsoftin hegemonia murtui perusteellisesti ja peruuttamattomasti.

## Viimeinen ristiretki

Netscape oli itse asiassa jo kaukaisella 1990-luvulla mahdollistanut JavaScriptin käyttämisen ohjelmoimiseen palvelinpäässä, mutta idea ei ottanut tuulta alleen ja katosi välissä kokonaan historian hämäriin.
Vasta vuonna 2009 julkaistu Node.js popularisoi idean uudelleen. Node.js perustui Googlen vuotta aikaisemmin julkaisemaan JavaScript-moottoriin, ja sen avulla reaaliaikaisten (lue: nopeiden) verkkosivujen tekeminen oli kätevää.

Yhden ja ainoan ohjelmointikielen käyttäminen koko palvelun tekemiseen on aina ollut web-kehityksen graalin malja. Epäilen, että eritoten siksi Node.js otettiin sen ilmestyessä niin hurmioituneena vastaan.
Node.js:n julkaisun jälkeen kaikki oli periaatteellisella tasolla valmista, mutta asioiden kypsyminen on ottanut aikansa. Paketinhallintajärjestelmiä, kirjastoja ja ohjelmistokehyksiä on syntynyt ja kuollut, kun JavaScript on ohjelmointikielenä hakenut suuntaansa.

## JavaScript alustana

Jossain vaiheessa mielipuolisimmat propellipäät keksivät, että JavaScript on itse asiassa alusta eikä ohjelmointikieli. Omat ohjelmansa voi kirjoittaa ihan millä tahansa kielellä (uusilla "paremmilla" JavaScripteillä á la CoffeeScript tai jo aikaisemmin keksityillä ohjelmointikielillä), kunhan tietokone vain julkaisun yhteydessä kääntää vieraskieliset ohjelmat JavaScriptiksi (josta tulee tässä käyttötapauksessa ikään kuin “webin konekieli”) selainta varten.

JavaScript on niin ilmaisuvoimainen kieli, että myös uudemman JavaScriptin voi useimmiten kääntää vanhaksi JavaScriptiksi joka toimii kaikissa ympäristöissä tai selaimissa. Ilmiö on ottanut vahvasti tuulta alleen vuonna 2015, kun JavaScriptistä julkaistiin uusi versio jota selaimet eivät vielä pitkään aikaan tue. "Baabelisoinnin" ansiosta ohjelmoijat voivat ottaa työssään uuden (lue: usein paremman) syntaksin käyttöön välittömästi. Koodarina voin vakuuttaa, että tämä on yksi iloisimmista asioista vuosikausiin!

## Väsytystaistelua

Tällä hetkellä JavaScript-maailmassa muutokset tapahtuvat pelottavan nopeasti. Kirjastoja, sovelluskehyksiä ja työkaluja tulee ja menee. Elämme suuren murroksen aikaa, jossa kaikki tuntuu olevan parhaimmillaankin epävarmaa. On mahdotonta varmuudella sanoa, kuka selviää voittajana, mutta sen voin luvata että kun pöly laskeutuu JavaScriptin maailma ei ole entisensä.

Kehitys on kaunis asia, mutta toisaalta kova muutostahti aiheuttaa koodausahdistusta ja jopa -lamaannusta. Kun eilen opittu tuntuu jo tänään turhalta, ja tuntee putoavansa kuoppaan johon täsmälleen sama hiekka valuu aina uudelleen lapioitavaksi vähän eri koostumuksella, tulee helposti ensin “hampaat mattoon”-fiilis, ja joskus sekään ei riitä ja tekisi mieli vain nostaa kädet kattoon.

Jos ei käytä maalaisjärkeä ja lähdekritiikkiä, tulee vääjäämättä hulluksi. Itse yritän suhtautua kaikkeen skeptisesti, haistella ja opetella suurempia trendejä takertumatta mikrotasolle. Esimerkkinä kaikki vanhan liiton javascript-buildaus-työkalut tuntuivat täysin samanlaisilta, joten pysyin suosiolla siinä mikä toimi ja oli yleinen. Ja ka-zing, sitten kun Webpack pistää pelin uusiksi, ei harmita liikaa. Tärkeää on ymmärtää yleiset periaatteet asioiden takana — loppu on tiedon hakemista, sen soveltamista ja [yleensä umpisurkean] dokumentaation järsimistä.

Mielestäni kannattaa myös harkita, pyrkiikö rakentamaan sovelluksensa pienistä paloista (ns. kirjastoajattelu) vai käyttääkö mieluummin suurta ja mahtavaa sovelluskehystä. Kaikki kirjastot ja sovelluskehykset vanhenevat vääjäämättä, ja jos ne kerran vanhenevat kuudessa kuukaudessa on pienemmät palat helpompi vaihtaa kuin suuret.

En väitä, ettenkö esimerkiksi itse olisi joskus mennyt ansaan. Joskus vaikeiden ja monimutkaisten juttujen syvällinen opettelu osoittautuu harha-askeleeksi, ja silloin on vain uskallettava niellä ylpeytensä ja ottaa isku vastaan.

Vain yksi on varmaa, Pekkis kahdenkymmenen vuoden päästä. Vain yksi on varmaa. Opettele JavaScriptiä, koska siinä on tulevaisuus!
